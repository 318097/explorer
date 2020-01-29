import uuid from "uuid/v1";

import * as constants from "./constants";
import { findFilesInPath, generatePath } from "./utils";

const initialState = {
  path: [],
  pathContent: {
    files: [],
    todos: []
  },
  rootStructure: {
    test: {
      name: "test",
      type: "folder",
      parent: null,
      children: ["child1", "child2"]
    },
    test2: {
      name: "test2",
      type: "folder",
      parent: null,
      children: []
    },
    child1: {
      name: "child1",
      type: "folder",
      parent: "test",
      children: []
    },
    child2: {
      name: "task",
      type: "todos",
      parent: "test",
      status: "none"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PATH: {
      const fileHierarchy = state.rootStructure;
      const id = action.payload;
      const fileInfo = fileHierarchy[id];

      let path, pathContent;
      if (action.payload === "/") {
        path = [];
        // pathContent = findFilesInPath(fileHierarchy);
      } else if (fileInfo) {
        path = generatePath(fileHierarchy, { ...fileInfo, id });
        // pathContent = findFilesInPath(fileHierarchy, fileInfo);
      }

      return {
        ...state,
        path,
        pathContent
      };
    }
    case constants.ADD_ITEM: {
      const id = uuid();
      const { parentId, itemType, name } = action.payload;

      const updatedRootStructure = { ...state.rootStructure };

      updatedRootStructure[parentId].children.push(id);
      updatedRootStructure[id] = {
        name,
        type: itemType,
        parent: parentId,
        children: itemType === "folder" ? [] : undefined,
        status: itemType === "todos" ? "none" : undefined
      };

      return {
        ...state,
        rootStructure: updatedRootStructure
      };
    }
    case constants.UPDATE_ITEM: {
      const { fileId, key, value } = action.payload;
      const updatedRootStructure = { ...state.rootStructure };
      updatedRootStructure[fileId][key] = value;

      return {
        ...state,
        rootStructure: updatedRootStructure
      };
    }
    default:
      return state;
  }
};

export default reducer;
