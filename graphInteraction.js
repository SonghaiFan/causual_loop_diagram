import { updateGraph } from "./graphUpdate.js";

export function setupGraphInteractions(cy, cyDataSets) {
  document.querySelectorAll("#legend1 .legend-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      var nodeClass = this.getAttribute("data-node-type");
      cy.elements().removeClass("highlighted");
      cy.elements("node." + nodeClass).addClass("highlighted");
    });

    item.addEventListener("mouseleave", function () {
      cy.elements().removeClass("highlighted");
    });
  });

  const buttonContainer = document.getElementById("version-control"); // make sure to have this in your HTML

  Object.keys(cyDataSets).forEach((key) => {
    const data = cyDataSets[key];

    const button = document.createElement("button");
    button.textContent = `Graph ${key.toUpperCase()}`;
    button.classList.add("btn");
    button.addEventListener("click", () => updateGraph(cy, data));

    buttonContainer.appendChild(button);
  });
}
