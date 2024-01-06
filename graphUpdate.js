import { colaLayoutConfig, fcoseLayoutConfig } from "./graphLayout.js";

export function updateGraph(cy, newData) {
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

  //  Exit - Remove elements that are not in the new data
  cy.elements().forEach((ele) => {
    let foundInNodes = newData.nodes.some((n) => n.data.id === ele.id());
    let foundInEdges = newData.edges.some((e) => e.data.id === ele.id());
    if (!foundInNodes && !foundInEdges) {
      ele.animate({
        style: { opacity: 0.1 },
        duration: 500,
        complete: () => ele.remove(),
      });
    }
  });

  cy.endBatch();

  // after cy animation is complete
  cy.layout(fcoseLayoutConfig).run();
}
