const findFilesInPath = (fileList = {}, id, fileInfo) => {
  let files = [],
    todos = [];
  if (!fileInfo) {
    Object.values(fileList).forEach(file => {
      if (!file.parent) {
        if (file.type === "todos") todos.push({ ...file, id });
        else files.push({ ...file, id });
      }
    });
  } else {
    fileInfo.children.forEach(fileId => {
      const file = fileList[fileId];
      if (file.type === "todos") todos.push({ ...file, id });
      else files.push({ ...file, id });
    });
  }
  return { files, todos };
};

const generatePath = (fileList, id, fileInfo) => {
  const absolutePath = [];

  let currentFile = fileInfo;

  while (currentFile) {
    absolutePath.push({ id, name: currentFile.name });
    currentFile = fileList.parent;
  }
  const path = absolutePath.reverse();
  return path;
};

export { findFilesInPath, generatePath };
