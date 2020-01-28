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
      children: ["child1"]
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
        pathContent = findFilesInPath(fileHierarchy, id);
      } else if (fileInfo) {
        path = generatePath(fileHierarchy, id, fileInfo);
        pathContent = findFilesInPath(fileHierarchy, id, fileInfo);
      }

      return {
        ...state,
        path,
        pathContent
      };
    }
    default:
      return state;
  }
};

export default reducer;
