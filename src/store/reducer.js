import * as constants from "./constants";
import { findFilesInPath, generatePath } from "./utils";

const initialState = {
  path: "/",
  pathContent: {
    files: [],
    todos: []
  },
  rootStructure: {
    test: {
      name: "test",
      type: "folder",
      parent: null,
      children: []
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PATH: {
      const fileHierarchy = state.rootStructure;
      const fileInfo = fileHierarchy[action.payload];

      let path, pathContent;
      if (action.payload === "/") {
        path = "/";
        pathContent = findFilesInPath(fileHierarchy);
      } else if (fileInfo) {
        path = generatePath(fileHierarchy, fileInfo);
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
