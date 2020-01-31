import * as constants from "./constants";
import { generatePath, addItem, deleteItem, copyItem } from "./utils";

const initialState = {
  path: [],
  rootStructure: {
    id1: {
      name: "Folder 1",
      type: "folder",
      parent: null,
      children: ["id3", "id4"]
    },
    id2: {
      name: "Folder 2",
      type: "folder",
      parent: null,
      children: []
    },
    id3: {
      name: "Sub Folder 1",
      type: "folder",
      parent: "id1",
      children: []
    },
    id4: {
      name: "Todo 1",
      type: "todos",
      parent: "id1",
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
      else if (node)
        path = generatePath(rootStructure, { ...node, id: fileId });

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
    case constants.COPY_ITEM: {
      const { files, target } = action.payload;
      const updatedRootStructure = copyItem(target, files, {
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
