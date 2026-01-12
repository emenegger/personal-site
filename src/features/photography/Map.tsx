"use client";
import { select, geoPath, geoEqualEarth, zoom, zoomIdentity } from "d3";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as topojson from "topojson-client";
import { images3 } from "./images";
import { colors, createHeatmapScale, heatMapColors } from "./colors";
import { LocationHeatPoint } from "./util";

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
  heatPoints: LocationHeatPoint[];
}

const Map = forwardRef<MapRef, MapProps>(({ onClick, heatPoints }, ref) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomBehaviorRef = useRef<any>(null);
  const svgSelectionRef = useRef<any>(null);
  const isCurrent = svgSelectionRef.current && zoomBehaviorRef.current;

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

    const maxCount = Math.max(...heatPoints.map((p) => p.count), 1);
    const heatScale = createHeatmapScale(maxCount);

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
      .attr("stdDeviation", 3)
      .attr("result", "blur");

    filter
      .append("feFlood")
      .attr("flood-color", heatMapColors.orange)
      .attr("flood-opacity", 0.5)
      .attr("result", "color");

    filter
      .append("feComposite")
      .attr("in", "color")
      .attr("in2", "blur")
      .attr("operator", "in")
      .attr("result", "coloredBlur");

    filter
      .append("feOffset")
      .attr("in", "coloredBlur")
      .attr("dx", 2)
      .attr("dy", 4)
      .attr("result", "offsetblur");

    filter
      .append("feComponentTransfer")
      .attr("in", "offsetblur")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", 0.5);

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetblur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const glowFilter = defs
      .append("filter")
      .attr("id", "glow-effect")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    glowFilter
      .append("feGaussianBlur")
      .attr("stdDeviation", "8")
      .attr("result", "coloredBlur");

    const feMergeGlow = glowFilter.append("feMerge"); // Changed variable name
    feMergeGlow.append("feMergeNode").attr("in", "coloredBlur");
    feMergeGlow.append("feMergeNode").attr("in", "coloredBlur");
    feMergeGlow.append("feMergeNode").attr("in", "coloredBlur");
    feMergeGlow.append("feMergeNode").attr("in", "SourceGraphic");

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
      .then((response) => response.json())
      .then((world) => {
        g.append("path")
          .datum({ type: "Sphere" })
          .attr("fill", colors.background)
          .attr("d", path);

        const countries = topojson.feature(world, world.objects.countries);

        countries.features.forEach((country) => {
          defs
            .append("clipPath")
            .attr("id", `clip-country-${country.id}`)
            .append("path")
            .attr("d", path(country));
        });

        g.append("g")
          .selectAll("path")
          .data(countries.features)
          .join("path")
          .attr("d", path)
          .attr("stroke", (d) => {
            const isVisited = images3.some((ele) => ele.countryId === d.id);
            return isVisited ? heatMapColors.orange : "none";
          })
          .attr("stroke-width", 0.5)
          .on("mouseover", function (_e, d) {
            const isVisited = images3.some((ele) => ele.countryId === d.id);
            if (isVisited) {
              select(this).style("filter", "url(#elevation-shadow)").raise();
              select(this).attr("stroke", heatMapColors.orange);
            }
          })
          .on("mouseout", function (_e, d) {
            const isVisited = images3.some((ele) => ele.countryId === d.id);
            if (isVisited) {
              select(this).style("filter", null);
            }
          })
          .on("click", function (_e, d) {
            onClick(d.id);
          });

        heatPoints.forEach((point, index) => {
          const gradient = defs
            .append("radialGradient")
            .attr("id", `outer-glow-gradient-${index}`);

          const coreColor = heatScale.getCoreColor(point.count);

          gradient
            .append("stop")
            .attr("offset", "0%")
            .attr("stop-color", coreColor)
            .attr("stop-opacity", 0.4);

          gradient
            .append("stop")
            .attr("offset", "10%")
            .attr("stop-color", coreColor)
            .attr("stop-opacity", 0.15);

          gradient
            .append("stop")
            .attr("offset", "100%")
            .attr("stop-color", coreColor)
            .attr("stop-opacity", 0);
        });

        const heatGroup = g.append("g").attr("class", "heatmap-glow");
        heatGroup
          .selectAll(".outer-glow")
          .data(heatPoints)
          .join("circle")
          .attr("class", "outer-glow")
          .attr("cx", (d) => projection(d.coordinates)?.[0] ?? 0)
          .attr("cy", (d) => projection(d.coordinates)?.[1] ?? 0)
          .attr("r", (d) => heatScale.getGlowRadius(d.count))
          .attr("fill", (d, i) => `url(#outer-glow-gradient-${i})`)
          .attr(
            "clip-path",
            (d) => `url(#clip-country-${d.photos[0].countryId})`
          )
          .style("filter", "url(#glow-effect)")
          .style("pointer-events", "none");

        heatGroup
          .selectAll(".core-bright")
          .data(heatPoints)
          .join("circle")
          .attr("class", "core-bright")
          .attr("cx", (d) => projection(d.coordinates)?.[0] ?? 0)
          .attr("cy", (d) => projection(d.coordinates)?.[1] ?? 0)
          .attr("r", (d) => heatScale.getCoreRadius(d.count))
          .attr("fill", (d) => heatScale.getCoreColor(d.count))
          .attr("opacity", 1)
          .style("cursor", "pointer")
          .on("click", function (event, d) {
            event.stopPropagation();
            onClick(d.photos[0].countryId);
          })
          .on("mouseover", function (_e, d) {
            select(this)
              .transition()
              .duration(200)
              .attr("r", heatScale.getCoreRadius(d.count) * 3.5);
          })
          .on("mouseout", function (_e, d) {
            select(this)
              .transition()
              .duration(200)
              .attr("r", heatScale.getCoreRadius(d.count));
          });
      })

      .catch((error) => console.error("Error loading map:", error));
    return () => {
      g.selectAll("*").remove();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
});

export default Map;
