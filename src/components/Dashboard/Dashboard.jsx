import React, { Component } from "react";
import data from "../../charactersWithLikes.json";
import { CharactersContentLayout } from "../CharacterContentLayout";
import * as d3 from "d3";
export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const links = this.getLinks(data);
    const nodes = [...data];
    const width = 600;
    const height = 400;
    const simulation = d3
      .forceSimulation(nodes)
      .force("links", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter());

    const svg = d3
      .selectAll("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line");

    const node = svg
      .selectAll("node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

     node
      .append("circle")
      .attr("r", 50)
      .attr("fill", "#eee");

    node
      .append("image")
      .attr("href", d => d.image)
      .attr("x", function(d) {
        return -25;
      })
      .attr("y", function(d) {
        return -25;
      })
      .attr("width", 50)
      .attr("height", 50);

    node.append("title").text(d => d.name);
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("transform", d => {
        d.x = Math.max(maxNodeSize, Math.min(w - (d.imgwidth / 2 || 16), d.x));
        d.y = Math.max(maxNodeSize, Math.min(h - (d.imgheight / 2 || 16), d.y));
        return "translate(" + d.x + "," + d.y + ")";
      });
    });
  }
  getLinks(nodes) {
    const links = [];
    nodes.forEach((node, index) => {
      for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex++) {
        const nextNode = nodes[nextIndex];
        if (
          node.origin &&
          nextNode.origin &&
          node.origin.name === nextNode.origin.name
        ) {
          const newLink = {
            source: node.id,
            target: nextNode.id
          };
          links.push(newLink);
        }
      }
    });

    return links;
  }
  render() {
    return (
      <CharactersContentLayout>
        <svg></svg>
      </CharactersContentLayout>
    );
  }
}
