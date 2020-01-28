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
      name: "child2",
      type: "todos",
      parent: "test",
      data: [
        {
          id: 1,
          task: "finish",
          status: "none"
        }
      ]
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
        pathContent = findFilesInPath(fileHierarchy);
      } else if (fileInfo) {
        path = generatePath(fileHierarchy, { ...fileInfo, id });
        pathContent = findFilesInPath(fileHierarchy, fileInfo);
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
