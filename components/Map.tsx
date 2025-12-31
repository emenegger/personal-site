"use client";

import { select, geoPath, geoEqualEarth } from "d3";
import { useEffect, useRef } from "react";
import * as topojson from "topojson-client";
import { visitedCountries } from "../public/constants/countries";
import { UNVISITED_COLORS, colors } from "../public/constants/colors";

const getCountryData = (d) =>
  visitedCountries.find((country) => country.id === d.id) ??
  visitedCountries.find((country) => country.name === d.properties.name);

const getUnvisitedColor = () =>
  UNVISITED_COLORS[Math.floor(Math.random() * UNVISITED_COLORS.length)];

const Map = ({ onClick }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const container = svgRef.current.parentElement;
    const width = container?.clientWidth;
    const height = container?.clientHeight || (width ?? 0) * 0.625;

    // Create SVG
    const svg = select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    svg.selectAll("*").remove();

    const sphere = { type: "Sphere" };
    const projection = geoEqualEarth().fitSize([width, height], sphere);
    const path = geoPath(projection);

    const defs = svg.append("defs");
  
    const pinIcon = defs.append("symbol")
      .attr("id", "location-pin")
      .attr("viewBox", "0 0 24 24");
    
    pinIcon.append("path")
      .attr("d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z")
      .attr("fill", "#C9D9C1"); 


    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
      .then((response) => response.json())
      .then((world) => {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("fill", colors.background)
          .attr("d", path);

        const countries = topojson.feature(world, world.objects.countries);

        svg
          .append("g")
          .selectAll("path")
          .data(countries.features)
          .join("path")
          .attr("d", path)
          .attr("fill", (d) => {
            const isVisited = visitedCountries.some((ele) => ele.id === d.id);
            const fillColor = isVisited ? colors.visited : getUnvisitedColor();
            return fillColor;
          })
          .attr("stroke", "none")
          .attr("stroke-width", 0.5)
          .on("mouseover", function (_e, d) {
            const isVisited = visitedCountries.some((ele) => ele.id === d.id);
            if (isVisited) select(this).attr("fill", colors.visitedHover);
          })
          .on("mouseout", function (_e, d) {
            const isVisited = visitedCountries.some((ele) => ele.id === d.id);
            if (isVisited) select(this).attr("fill", colors.visited);
          })
          .on("click", function (_e, d) {
            onClick(d.id);
          });

        svg
        .append("g")
        .attr("class", "pins")
        .selectAll("use")
        .data(countries.features.filter(d => {
          const countryData = getCountryData(d);
          return countryData && countryData.color;
        }))
        .join("use")
        .attr("href", "#location-pin")
        .attr("width", 24)
        .attr("height", 24)
        .attr("x", (d) => path.centroid(d)[0] - 12)
        .attr("y", (d) => path.centroid(d)[1] - 24)
        .style("pointer-events", "none");
      })

      .catch((error) => console.error("Error loading map:", error));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Map;
