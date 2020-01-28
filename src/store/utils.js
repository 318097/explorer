const findFilesInPath = (fileList = {}, fileInfo) => {
  let files = [],
    todos = [];
  if (!fileInfo) {
    Object.keys(fileList).forEach(id => {
      const file = fileList[id];
      if (!file.parent) {
        if (file.type === "todos") todos.push({ ...file, id });
        else files.push({ ...file, id });
      }
    });
  } else {
    fileInfo.children.forEach(fileId => {
      const file = fileList[fileId];
      if (file.type === "todos") todos.push({ ...file, id: fileId });
      else files.push({ ...file, id: fileId });
    });
  }
  return { files, todos };
};

const generatePath = (fileList, fileInfo) => {
  const absolutePath = [];

  let currentFile = fileInfo;
  while (currentFile) {
    absolutePath.push({ name: currentFile.name, id: currentFile.id });
    const id = currentFile.parent;
    currentFile = fileList[id];
    if (currentFile) currentFile.id = id;
  }
  const path = absolutePath.reverse();
  return path;
};

export { findFilesInPath, generatePath };
