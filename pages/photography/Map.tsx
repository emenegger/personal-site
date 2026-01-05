"use client";
import { select, geoPath, geoEqualEarth, zoom, zoomIdentity } from "d3";
import { useEffect, useRef } from "react";
import * as topojson from "topojson-client";
import { visitedCountries } from "./countries";
import { colors, mediumGrays } from "./colors";

const getCountryData = (d) =>
  visitedCountries.find((country) => country.id === d.id) ??
  visitedCountries.find((country) => country.name === d.properties.name);

const getUnvisitedColor = () =>
  mediumGrays[Math.floor(Math.random() * mediumGrays.length)];

const Map = ({ onClick }) => {
  const svgRef = useRef<SVGSVGElement>(null);

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

    const controls = svg
      .append("g")
      .attr("class", "zoom-controls")
      .attr("transform", `translate(${width - 60}, 20)`);

    const zoomInBtn = controls
      .append("g")
      .attr("cursor", "pointer")
      .on("click", () => {
        svg.transition().duration(300).call(zoomBehavior.scaleBy, 1.5);
      });

    zoomInBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    zoomInBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 24)
      .attr("font-weight", "300")
      .attr("fill", "#333")
      .text("+");

    // Zoom out button
    const zoomOutBtn = controls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(0, 50)")
      .on("click", () => {
        svg.transition().duration(300).call(zoomBehavior.scaleBy, 0.67);
      });

    zoomOutBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    zoomOutBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 24)
      .attr("font-weight", "300")
      .attr("fill", "#333")
      .text("−");

    // Reset button
    const resetBtn = controls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(0, 100)")
      .on("click", () => {
        svg
          .transition()
          .duration(500)
          .call(zoomBehavior.transform, zoomIdentity);
      });

    resetBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    resetBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 18)
      .attr("fill", "#333")
      .text("⟲");

    const panDistance = 50;

    const panControls = svg
      .append("g")
      .attr("class", "pan-controls")
      .attr("transform", `translate(20, ${height - 140})`);

    const upBtn = panControls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(45, 0)")
      .on("click", () => {
        svg
          .transition()
          .duration(300)
          .call(zoomBehavior.translateBy, 0, panDistance);
      });

    upBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    upBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 20)
      .attr("fill", "#333")
      .text("▲");

    // Down button
    const downBtn = panControls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(45, 90)")
      .on("click", () => {
        svg
          .transition()
          .duration(300)
          .call(zoomBehavior.translateBy, 0, -panDistance);
      });

    downBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    downBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 20)
      .attr("fill", "#333")
      .text("▼");

    // Left button
    const leftBtn = panControls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(0, 45)")
      .on("click", () => {
        svg
          .transition()
          .duration(300)
          .call(zoomBehavior.translateBy, panDistance, 0);
      });

    leftBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    leftBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 20)
      .attr("fill", "#333")
      .text("◀");

    // Right button
    const rightBtn = panControls
      .append("g")
      .attr("cursor", "pointer")
      .attr("transform", "translate(90, 45)")
      .on("click", () => {
        svg
          .transition()
          .duration(300)
          .call(zoomBehavior.translateBy, -panDistance, 0);
      });

    rightBtn
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 5)
      .attr("fill", "white")
      .attr("stroke", "#666")
      .attr("stroke-width", 1)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    rightBtn
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", 20)
      .attr("fill", "#333")
      .text("▶");

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
            console.log(d);
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
};

export default Map;
