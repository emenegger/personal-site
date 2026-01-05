"use client";
import { select, geoPath, geoEqualEarth, zoom, zoomIdentity } from "d3";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as topojson from "topojson-client";
import { visitedCountries } from "./countries";
import { colors, mediumGrays } from "./colors";

const getCountryData = (d) =>
  visitedCountries.find((country) => country.id === d.id) ??
  visitedCountries.find((country) => country.name === d.properties.name);

const getUnvisitedColor = () =>
  mediumGrays[Math.floor(Math.random() * mediumGrays.length)];

export interface MapRef {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  panUp: () => void;
  panDown: () => void;
  panLeft: () => void;
  panRight: () => void;
}

interface MapProps {
  onClick: (id: string | null) => void;
}

const Map = forwardRef<MapRef, MapProps>(({ onClick }, ref) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomBehaviorRef = useRef<any>(null);
  const svgSelectionRef = useRef<any>(null);
  const isCurrent = svgSelectionRef.current && zoomBehaviorRef.current

  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.scaleBy, 1.5);
      }
    },
    zoomOut: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.scaleBy, 0.67);
      }
    },
    resetZoom: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(500)
          .call(zoomBehaviorRef.current.transform, zoomIdentity);
      }
    },
    panUp: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.translateBy, 0, 50);
      }
    },
    panDown: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.translateBy, 0, -50);
      }
    },
    panLeft: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.translateBy, 50, 0);
      }
    },
    panRight: () => {
      if (isCurrent) {
        svgSelectionRef.current
          .transition()
          .duration(300)
          .call(zoomBehaviorRef.current.translateBy, -50, 0);
      }
    },
  }));

  useEffect(() => {
    if (!svgRef.current) return;

    const container = svgRef.current.parentElement;
    const width = container?.clientWidth ?? 0;
    const height = container?.clientHeight || (width ?? 0) * 0.625;

    const svg = select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    svg.selectAll("*").remove();

    const sphere = { type: "Sphere" };
    const projection = geoEqualEarth().fitSize([width, height], sphere);
    const path = geoPath(projection);

    const g = svg.append("g");

    const zoomBehavior = zoom()
      .scaleExtent([1, 8])
      .on("zoom", (e) => {
        g.attr("transform", e.transform);
      })
      .filter((e) => e.type !== "wheel");

    svg.call(zoomBehavior);

    zoomBehaviorRef.current = zoomBehavior;
    svgSelectionRef.current = svg;

    const defs = svg.append("defs");

    const pinIcon = defs
      .append("symbol")
      .attr("id", "location-pin")
      .attr("viewBox", "0 0 24 24");

    pinIcon
      .append("path")
      .attr(
        "d",
        "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      )
      .attr("fill", "#C9D9C1");

    const elevationHeight = 150;
    const elevationWidth = 150;

    const filter = defs
      .append("filter")
      .attr("id", "elevation-shadow")
      .attr("height", `${elevationHeight}%`)
      .attr("width", `${elevationWidth}%`);

    filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3);

    filter
      .append("feOffset")
      .attr("dx", 2)
      .attr("dy", 4)
      .attr("result", "offsetblur");

    filter
      .append("feComponentTransfer")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", 0.5);

    const feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
      .then((response) => response.json())
      .then((world) => {
        g.append("path")
          .datum({ type: "Sphere" })
          .attr("fill", colors.background)
          .attr("d", path);

        const countries = topojson.feature(world, world.objects.countries);

        g.append("g")
          .selectAll("path")
          .data(countries.features)
          .join("path")
          .attr("d", path)
          .attr("fill", (d) => {
            const visitedColor = visitedCountries.find(
              (ele) => ele.id === d.id
            )?.color;
            const fillColor = visitedColor ?? getUnvisitedColor();
            return fillColor;
          })
          .attr("stroke", "none")
          .attr("stroke-width", 0.5)
          .on("mouseover", function (_e, d) {
            const isVisited = visitedCountries.some((ele) => ele.id === d.id);
            if (isVisited) {
              select(this).style("filter", "url(#elevation-shadow)").raise();
            }
          })
          .on("mouseout", function (_e, d) {
            const isVisited = visitedCountries.some((ele) => ele.id === d.id);
            if (isVisited) {
              select(this).style("filter", null);
            }
          })
          .on("click", function (_e, d) {
            onClick(d.id);
          });

        g.append("g")
          .attr("class", "pins")
          .selectAll("use")
          .data(
            countries.features.filter((d) => {
              const countryData = getCountryData(d);
              return countryData && countryData.color;
            })
          )
          .join("use")
          .attr("href", "#location-pin")
          .attr("width", 24)
          .attr("height", 24)
          .attr("x", (d) => path.centroid(d)[0] - 12)
          .attr("y", (d) => path.centroid(d)[1] - 24)
          .style("pointer-events", "none");
      })

      .catch((error) => console.error("Error loading map:", error));
    return () => {
      g.selectAll("*").remove();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
});

export default Map;
