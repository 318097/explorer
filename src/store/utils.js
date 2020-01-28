const findFilesInPath = (fileList = {}, fileInfo) => {
  let files = [],
    todos = [];
  if (!fileInfo) {
    Object.values(fileList).forEach(file => {
      if (!file.parent) {
        if (file.type === "todos") todos.push(file);
        else files.push(file);
      }
    });
  } else {
    fileInfo.children.forEach(fileId => {
      const file = fileList[fileId];
      if (file.type === "todos") todos.push(file);
      else files.push(file);
    });
  }
  return { files, todos };
};

const generatePath = (fileList, fileInfo) => {
  const absolutePath = [];
  let currentFile = fileInfo;

  while (currentFile.parent) {
    absolutePath.push({ id: currentFile.id, name: currentFile.name });
    currentFile = fileList.parent;
  }
  const path = absolutePath.reverse();
  return path;
};

export { findFilesInPath, generatePath };
