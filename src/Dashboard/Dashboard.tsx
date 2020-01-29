import React, { useContext, useEffect, FunctionComponent } from "react";
import { colors } from "../colors";
import { CharactersContentLayout } from "../shared/CharacterContentLayout";
import * as d3 from "d3";
import CharactersWithLikesContext from "../core/charactersWithLikesContext";
import { Character } from "../core/models/Character";
interface Link {
  source: number;
  target: number;
}
export const Dashboard: FunctionComponent<{
  path: string;
}> = () => {
  const [charactersWithLikes] = useContext(CharactersWithLikesContext);

  useEffect(() => {
    populateDashboard(charactersWithLikes);
  });

  return (
    <>
      <CharactersContentLayout>
        <svg />
      </CharactersContentLayout>
    </>
  );
};

function populateDashboard(data: Character[]) {
  const links = getLinks(data);
  const nodes = [...data];
  const width = 900;
  const height = 900;
  const maxNodeSize = 30;
  const legendRectSize = 20;
  const legendSpacing = 5;

  /*Config simulation force- layout*/
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "links",
      d3
        .forceLink(links)
        .id((d: Character) => d.id)
        .distance(100)
    )
    .force(
      "charge",
      d3
        .forceManyBody()
        .strength(0.03)
        .strength(-900)
    )
    .force("x", d3.forceX(width / 2))
    .force("y", d3.forceY(height / 2));

  /*Add nodes and Links */
  const svg = d3
    .selectAll("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(0,0)`);

  const colorScale = d3
    .scaleOrdinal()
    .domain(getOrigins(nodes))
    .range(d3.schemeCategory10);

  svg
    .selectAll("link")
    .data(links)
    .enter()
    .append("path")
    .attr("class", "link")
    .style("stroke", colors.$backgroundLevel2)
    .style("fill", (d: { source: Character }) =>
      colorScale(d.source.origin.name)
    );

  const nodeEnter = svg
    .selectAll("node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d: { x: number; y: number }) => {
      return "translate(" + d.x + "," + d.y + ")";
    });

  nodeEnter
    .append("circle")
    .attr("r", 20)
    .attr("fill", colors.$background);

  nodeEnter
    .append("image")
    .attr("href", (d: Character) => d.image)
    .attr("x", -25)
    .attr("y", -25)
    .attr("width", 70)
    .attr("height", 70);

  nodeEnter.append("title").text((d: Character) => d.name);

  const path = svg.selectAll("path.link");
  const node = svg.selectAll("g.node");

  /* Create legend */
  const legend = d3
    .select("svg")
    .append("g")
    .selectAll("g")
    .data(colorScale.domain())
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", (_: {}, i: number) => {
      const height = legendRectSize;
      const x = 0;
      const y = i * height;
      return "translate(" + x + "," + y + ")";
    });

  legend
    .append("rect")
    .attr("width", legendRectSize)
    .attr("height", legendRectSize)
    .style("fill", colorScale)
    .style("stroke", colorScale);

  legend
    .append("text")
    .attr("x", legendRectSize + legendSpacing)
    .attr("y", legendRectSize - legendSpacing)
    .attr("fill", colors.$background)
    .text((d: string) => d);

  /*Start simulation*/
  simulation.on("tick", () => {
    path.attr(
      "d",
      (d: {
        target: { x: number; y: number };
        source: { x: number; y: number };
      }) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          "A" +
          dr +
          "," +
          dr +
          " 0 0,1 " +
          d.target.x +
          "," +
          d.target.y
        );
      }
    );
    node.attr(
      "transform",
      (d: { imgwidth: number; imgheight: number; x: number; y: number }) => {
        d.x = Math.max(
          maxNodeSize,
          Math.min(width - (d.imgwidth / 2 || 16), d.x)
        );
        d.y = Math.max(
          maxNodeSize,
          Math.min(height - (d.imgheight / 2 || 16), d.y)
        );
        return "translate(" + d.x + "," + d.y + ")";
      }
    );
  });
}

function getOrigins(nodes: Character[]): string[] {
  return nodes.map(node => node.origin.name);
}

function getLinks(nodes: Character[]): Link[] {
  const links: Link[] = [];
  nodes.forEach((node, index) => {
    for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex++) {
      const nextNode = nodes[nextIndex];
      if (
        node.origin &&
        nextNode.origin &&
        node.origin.name === nextNode.origin.name
      ) {
        const newLink: Link = {
          source: node.id,
          target: nextNode.id
        };
        links.push(newLink);
      }
    }
  });

  return links;
}
