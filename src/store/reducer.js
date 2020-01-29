import * as constants from "./constants";
import { generatePath, addItem, deleteItem } from "./utils";

const initialState = {
  path: [],
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
      const fileId = action.payload;
      const { rootStructure } = state;
      const node = rootStructure[fileId];

      let path;
      if (action.payload === "/") path = [];
      else if (node) path = generatePath(rootStructure, { ...node, fileId });

      return {
        ...state,
        path
      };
    }
    case constants.ADD_ITEM: {
      const updatedRootStructure = addItem(action.payload, {
        ...state.rootStructure
      });

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
    case constants.DELETE_ITEM: {
      const fileId = action.payload;
      const updatedRootStructure = deleteItem(fileId, {
        ...state.rootStructure
      });

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
