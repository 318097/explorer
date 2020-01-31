import uuid from "uuid/v1";

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
    if (currentFile) currentFile["id"] = id;
  }
  const path = absolutePath.reverse();
  return path;
};

const addItem = ({ parentId, itemType, name }, rootStructure) => {
  const id = uuid();
  if (parentId) rootStructure[parentId].children.push(id);

  rootStructure[id] = {
    name,
    type: itemType,
    parent: parentId || null,
    children: itemType === "folder" ? [] : undefined,
    status: itemType === "todos" ? "none" : undefined
  };
  return rootStructure;
};

const deleteItem = (fileId, rootStructure) => {
  const currentNode = rootStructure[fileId];

  const parentNodeId = currentNode.parent;
  const parentNode = rootStructure[parentNodeId];
  if (parentNodeId) {
    // if not root level
    parentNode.children = parentNode.children.filter(id => id !== fileId);
    rootStructure[parentNodeId] = { ...parentNode };
  }

  const nodesToDelete = [fileId];

  if (currentNode.type === "folder") {
    const recursiveSearch = (fileIds = []) => {
      nodesToDelete.push(...fileIds);
      fileIds.forEach(fileId => {
        const file = rootStructure[fileId];
        if (file && file.children && file.children.length > 0) {
          recursiveSearch(file.children);
        }
      });
    };
    recursiveSearch(currentNode.children);
  }

  nodesToDelete.forEach(id => delete rootStructure[id]);
  return rootStructure;
};

const copyItem = (targetFileId, filesToCopy, rootStructure) => {
  const recursiveCreateFiles = (files, parentId) => {
    return files.map(fileId => {
      const fileData = { ...rootStructure[fileId] };
      const id = uuid();
      if (fileData.type === "folder") {
        let childNodes = [];
        if (fileData.children.length)
          childNodes = recursiveCreateFiles(fileData.children, id);

        rootStructure[id] = {
          ...fileData,
          parent: parentId,
          children: [...childNodes]
        };
      } else {
        rootStructure[id] = { ...fileData, id, parent: parentId };
      }
      return id;
    });
  };
  const copiedContent = recursiveCreateFiles(filesToCopy, targetFileId);

  if (targetFileId) rootStructure[targetFileId].children.push(...copiedContent);

  return rootStructure;
};

export { findFilesInPath, generatePath, addItem, deleteItem, copyItem };
