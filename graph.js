document.addEventListener("DOMContentLoaded", function () {
  var data = {
    nodes: [
      {
        version: "final",
        id: 1,
        label: "amount of collected data",
      },
      {
        version: "final",
        id: 2,
        label: "level of privacy risk",
      },
      {
        version: "final",
        id: 3,
        label: "level of awareness",
      },
      {
        version: "final",
        id: 4,
        label: "level of regulation",
      },
      {
        version: "final",
        id: 5,
        label: "degree to which people are sensitised",
      },
      {
        version: "final",
        id: 6,
        label: "level of people's approval to data collection",
      },
      {
        version: "final",
        id: 7,
        label: "quality of services",
      },
      {
        version: "final",
        id: 8,
        label: "profit generated by data collecting entities",
      },
      {
        version: "final",
        id: 9,
        label: "investment in data collecting initiatives",
      },
    ],
    links: [
      {
        version: "final",
        id: "1->2",
        label: "+",
        source: 1,
        target: 2,
        value: 1,
        type: "positive",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "2->3",
        label: "+",
        source: 2,
        target: 3,
        value: 1,
        type: "positive",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "3->4",
        label: "+",
        source: 3,
        target: 4,
        value: 1,
        type: "positive",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "4->1",
        label: "-",
        source: 4,
        target: 1,
        value: -1,
        type: "negative",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "1->5",
        label: "-",
        source: 1,
        target: 5,
        value: -1,
        type: "negative",
        modification: "change of terms and polarity",
      },
      {
        version: "final",
        id: "5->3",
        label: "+",
        source: 5,
        target: 3,
        value: 1,
        type: "positive",
        modification: "change of terms and polarity",
      },
      {
        version: "final",
        id: "3->6",
        label: "-",
        source: 3,
        target: 6,
        value: -1,
        type: "negative",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "6->1",
        label: "+",
        source: 6,
        target: 1,
        value: 1,
        type: "positive",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "1->7",
        label: "+",
        source: 1,
        target: 7,
        value: 1,
        type: "positive",
        modification: "change of terms",
      },
      {
        version: "final",
        id: "7->8",
        label: "+",
        source: 7,
        target: 8,
        value: 1,
        type: "positive",
        modification: "Change of terms",
      },
      {
        version: "final",
        id: "8->9",
        label: "+",
        source: 8,
        target: 9,
        value: 1,
        type: "positive",
        modification: "additiion of variable and link and change of terms",
      },
      {
        version: "final",
        id: "9->1",
        label: "+",
        source: 9,
        target: 1,
        value: 1,
        type: "positive",
        modification: "additiion of variable and link and change of terms",
      },
    ],
  };
  // Convert nodes and links to Cytoscape format
  var cyElements = [];

  data.nodes.forEach((node) => {
    cyElements.push({
      data: {
        id: node.id.toString(),
        label: node.label,
      },
    });
  });

  data.links.forEach((link) => {
    cyElements.push({
      data: {
        id: link.id,
        source: link.source.toString(),
        target: link.target.toString(),
        label: link.label,
      },
    });
  });

  var cy = cytoscape({
    container: document.getElementById("cy"),
    elements: cyElements,
    style: [
      {
        selector: "node",
        style: {
          shape: "round-rectangle",
          "background-color": "#fbbf24",
          "border-color": "#AAA",
          "border-width": "0.1px",
          width: "label",
          height: "label",
          padding: "5px",
          label: "data(label)",
          "text-wrap": "wrap",
          "text-max-width": "50px",
          "text-valign": "center",
          "text-halign": "center",
          "font-size": "6px",
        },
      },
      {
        selector: "edge",
        style: {
          "curve-style": "unbundled-bezier",
          "line-color": "#AAA", // Grey line color
          "target-arrow-color": "#AAA", // Grey arrow color
          "target-arrow-shape": "triangle",
          width: 2,
          "control-point-distances": [20, -20], // Use positive and negative values to alternate curves
          "control-point-weights": [0.5], // Adjust this to control the curvature
          //   label: "data(label)",
          //   "text-rotation": "autorotate",
          //   "text-margin-x": "-10px",
          //   "font-size": "10px",
        },
      },
      {
        selector: 'edge[label="-"]',
        style: {
          "line-style": "dashed",
          "curve-style": "unbundled-bezier",
          "control-point-distances": [-20, 20],
          "control-point-weights": [0.5],
          // Other edge styles...
        },
      },
    ],
    layout: {
      name: "cola",
      nodeSpacing: 5,
      edgeLengthVal: 45,
      animate: true,
      randomize: false,
      maxSimulationTime: 1500,
      fit: true,
      padding: 30,
    },
  });
});