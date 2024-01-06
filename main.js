import { cyDataSets } from "./data.js";
import { colaLayoutConfig, fcoseLayoutConfig } from "./graphLayout.js";
import { graphStyles } from "./graphStyling.js";
import { setupGraphInteractions } from "./graphInteraction.js";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cy");
  let cy = cytoscape({
    container: container,
    elements: cyDataSets.final,
    style: graphStyles,
    layout: colaLayoutConfig,
  });

  setupGraphInteractions(cy, cyDataSets);
});
