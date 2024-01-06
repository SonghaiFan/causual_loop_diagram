document.addEventListener("DOMContentLoaded", function () {
  var data_final = {
    nodes: [
      {
        id: 1,
        label: "amount of collected data",
      },
      {
        id: 2,
        label: "level of privacy risk",
      },
      {
        id: 3,
        label: "level of awareness",
      },
      {
        id: 4,
        label: "level of regulation",
      },
      {
        id: 5,
        label: "degree to which people are sensitised",
      },
      {
        id: 6,
        label: "level of people's approval to data collection",
      },
      {
        id: 7,
        label: "quality of services",
      },
      {
        id: 8,
        label: "profit generated by data collecting entities",
      },
      {
        id: 9,
        label: "investment in data collecting initiatives",
      },
    ],
    links: [
      {
        id: "1-2",
        label: "amount of collected data -(+)-> level of privacy risk",
        source: 1,
        target: 2,
        value: 1,
        type: "positive",
      },
      {
        id: "2-3",
        label: "level of privacy risk -(+)-> level of awareness",
        source: 2,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-4",
        label: "level of awareness -(+)-> level of regulation",
        source: 3,
        target: 4,
        value: 1,
        type: "positive",
      },
      {
        id: "4-1",
        label: "level of regulation -(-)-> amount of collected data",
        source: 4,
        target: 1,
        value: -1,
        type: "negative",
      },
      {
        id: "1-5",
        label:
          "amount of collected data -(-)-> degree to which people are sensitised",
        source: 1,
        target: 5,
        value: -1,
        type: "negative",
      },
      {
        id: "5-3",
        label:
          "degree to which people are sensitised -(+)-> level of awareness",
        source: 5,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-6",
        label:
          "level of awareness -(-)-> level of people's approval to data collection",
        source: 3,
        target: 6,
        value: -1,
        type: "negative",
      },
      {
        id: "6-1",
        label:
          "level of people's approval to data collection -(+)-> amount of collected data",
        source: 6,
        target: 1,
        value: 1,
        type: "positive",
      },
      {
        id: "1-7",
        label: "amount of collected data -(+)-> quality of services",
        source: 1,
        target: 7,
        value: 1,
        type: "positive",
      },
      {
        id: "7-8",
        label:
          "quality of services -(+)-> profit generated by data collecting entities",
        source: 7,
        target: 8,
        value: 1,
        type: "positive",
      },
      {
        id: "8-9",
        label:
          "profit generated by data collecting entities -(+)-> investment in data collecting initiatives",
        source: 8,
        target: 9,
        value: 1,
        type: "positive",
      },
      {
        id: "9-1",
        label:
          "investment in data collecting initiatives -(+)-> amount of collected data",
        source: 9,
        target: 1,
        value: 1,
        type: "positive",
      },
    ],
  };

  var data_cc3 = {
    nodes: [
      {
        id: 1,
        label: "collection of data",
      },
      {
        id: 7,
        label: "better services",
      },
      {
        id: 8,
        label: "money",
      },
    ],
    links: [
      {
        id: "1-7",
        label: "collection of data -(+)-> better services",
        source: 1,
        target: 7,
        value: 1,
        type: "positive",
      },
      {
        id: "7-8",
        label: "better services -(+)-> money",
        source: 7,
        target: 8,
        value: 1,
        type: "positive",
      },
      {
        id: "8-1",
        label: "money -(+)-> collection of data",
        source: 8,
        target: 1,
        value: 1,
        type: "positive",
      },
    ],
  };

  var data_a1 = {
    nodes: [
      {
        id: 1,
        label: "data collection",
      },
      {
        id: 2,
        label: "privacy risks",
      },
      {
        id: 3,
        label: "awareness",
      },
      {
        id: 4,
        label: "regulation",
      },
    ],
    links: [
      {
        id: "1-2",
        label: "data collection -(+)-> privacy risks",
        source: 1,
        target: 2,
        value: 1,
        type: "positive",
      },
      {
        id: "2-3",
        label: "privacy risks -(+)-> awareness",
        source: 2,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-4",
        label: "awareness -(+)-> regulation",
        source: 3,
        target: 4,
        value: 1,
        type: "positive",
      },
      {
        id: "4-1",
        label: "regulation -(-)-> data collection",
        source: 4,
        target: 1,
        value: -1,
        type: "negative",
      },
    ],
  };

  var data_a2 = {
    nodes: [
      {
        id: 1,
        label: "data",
      },
      {
        id: 5,
        label: "desensitisation of people",
      },
      {
        id: 3,
        label: "degree of awareness",
      },
      {
        id: 6,
        label: "people's buy-in",
      },
    ],
    links: [
      {
        id: "1-5",
        label: "data -(+)-> desensitisation of people",
        source: 1,
        target: 5,
        value: 1,
        type: "positive",
      },
      {
        id: "5-3",
        label: "desensitisation of people -(-)-> degree of awareness",
        source: 5,
        target: 3,
        value: -1,
        type: "negative",
      },
      {
        id: "3-6",
        label: "degree of awareness -(-)-> people's buy-in",
        source: 3,
        target: 6,
        value: -1,
        type: "negative",
      },
      {
        id: "6-1",
        label: "people's buy-in -(+)-> data",
        source: 6,
        target: 1,
        value: 1,
        type: "positive",
      },
    ],
  };

  // Convert nodes and links to Cytoscape format
  var cyData_final = getCyElements(data_final);
  var cyData_a1 = getCyElements(data_a1);
  var cyData_a2 = getCyElements(data_a2);
  var cyData_cc3 = getCyElements(data_cc3);

  var cy = cytoscape({
    container: document.getElementById("cy"),
    elements: cyData_final,
    style: [
      {
        selector: "node",
        style: {
          shape: "round-rectangle",
          width: "label",
          height: "label",
          padding: "5px",
          "background-color": "#fbbf24",
          "border-color": "#f8fafc",
          "border-width": "1px",
          label: "data(label)",
          "text-wrap": "wrap",
          "text-max-width": "50px",
          "text-valign": "center",
          "text-halign": "center",
          "font-size": "6px",
        },
      },
      {
        selector: "node.primary",
        style: {
          "background-color": "#ff0000",
        },
      },
      {
        selector: "node.highlighted",
        style: {
          "border-color": "#000",
          "border-width": "2px",
        },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          "curve-style": "unbundled-bezier",
          "line-color": "#AAA", // Grey line color
          "target-arrow-color": "#AAA", // Grey arrow color
          "target-arrow-shape": "triangle",
          "arrow-scale": 0.8,
          "control-point-distances": [20, -20], // Use positive and negative values to alternate curves
          "control-point-weights": [0.5], // Adjust this to control the curvature
        },
      },
      {
        selector: 'edge[type="negative"]',
        style: {
          "line-style": "dashed",
          "curve-style": "unbundled-bezier",
          "control-point-distances": [-20, 20],
          "control-point-weights": [0.5],
        },
      },
    ],
    layout: {
      name: "fcose",
      nodeRepulsion: 45000,
      idealEdgeLength: 100,
      edgeElasticity: 0.45,
      gravity: 0.25,
      numIter: 1000,
      tile: true,
      animate: false,
      fit: true,
    },
  });

  document.querySelectorAll("#legend1 .legend-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      var nodeClass = this.getAttribute("data-node-type");
      cy.elements().removeClass("highlighted"); // Remove existing highlights
      cy.elements("node." + nodeClass).addClass("highlighted"); // Highlight nodes of this class
    });

    item.addEventListener("mouseleave", function () {
      cy.elements().removeClass("highlighted"); // Remove highlights when not hovering
    });
  });

  function updateLayout() {
    var layout = cy.layout({
      name: "fcose",
      nodeRepulsion: 80000,
      idealEdgeLength: 50,
      edgeElasticity: 0.1,
      gravity: 0.4,
      numIter: 2000,
      tile: true,
      animationDuration: 1000,
      fit: true,
      avoidOverlap: true,
      nodeDimensionsIncludeLabels: true,
      padding: 20,
    });

    layout.run();
  }

  function updateGraph(newData) {
    // Define a function that will run the layout with animation

    cy.startBatch();

    // Step 1: Update - Update existing elements with new data or add them if they don't exist
    newData.nodes.forEach((nodeData) => {
      let node = cy.getElementById(nodeData.data.id);
      if (node.length) {
        node.animate({
          style: { ...nodeData.style }, // Add the style properties you want to animate
          position: nodeData.position,
          duration: 500,
        });
        // Update the rest of the data without animation
        node.data(nodeData.data);
        node.classes(nodeData.classes); // Update classes
      } else {
        cy.add({
          group: "nodes",
          data: nodeData.data,
          classes: nodeData.classes, // Include classes
          position: nodeData.position,
        });
      }
    });

    newData.edges.forEach((edgeData) => {
      let edge = cy.getElementById(edgeData.data.id);
      if (edge.length) {
        // If the edge exists, update its data (no animation for edges)
        edge.data(edgeData.data);
      } else {
        cy.add({ group: "edges", data: edgeData.data });
      }
    });

    // Step 2: Exit - Remove elements that are not in the new data
    cy.elements().forEach((ele) => {
      let foundInNodes = newData.nodes.some((n) => n.data.id === ele.id());
      let foundInEdges = newData.edges.some((e) => e.data.id === ele.id());
      if (!foundInNodes && !foundInEdges) {
        ele.animate({
          style: { opacity: 0.1 },
          duration: 500,
          complete: function () {
            // Remove the element from the graph
            ele.remove();
          },
        });
      }
    });

    cy.endBatch();

    // Re-run layout with animation after batch updates
    updateLayout();
  }

  document.getElementById("btn-final").addEventListener("click", function () {
    updateGraph(cyData_final);
  });

  document.getElementById("btn-a1").addEventListener("click", function () {
    updateGraph(cyData_a1);
  });

  document.getElementById("btn-a2").addEventListener("click", function () {
    updateGraph(cyData_a2);
  });

  document.getElementById("btn-cc3").addEventListener("click", function () {
    updateGraph(cyData_cc3);
  });
});

function getCyElements(data) {
  var nodes = [];
  var edges = [];

  data.nodes.forEach((node) => {
    nodes.push({
      data: {
        id: node.id.toString(),
        label: node.label,
      },
      classes: node.id == 1 ? "primary" : "secondary",
    });
  });

  data.links.forEach((link) => {
    edges.push({
      data: {
        id: link.id,
        source: link.source.toString(),
        target: link.target.toString(),
        label: link.label,
        type: link.type,
      },
    });
  });
  return { nodes: nodes, edges: edges };
}
