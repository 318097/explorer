export const getNodeId = path =>
  path.length >= 1 ? path[path.length - 1]["id"] : null;
