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

const data_final = {
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
      label: "degree to which people are sensitised -(+)-> level of awareness",
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

const data_cc3 = {
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

const data_a1 = {
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

const data_a2 = {
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

export const cyDataSets = {
  final: getCyElements(data_final),
  cc3: getCyElements(data_cc3),
  a1: getCyElements(data_a1),
  a2: getCyElements(data_a2),
};
