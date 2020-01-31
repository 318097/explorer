import * as constants from "./constants";

const setPath = path => ({ type: constants.SET_PATH, payload: path });

const addItem = data => ({ type: constants.ADD_ITEM, payload: data });

const updateItem = data => ({ type: constants.UPDATE_ITEM, payload: data });

const deleteItem = fileId => ({ type: constants.DELETE_ITEM, payload: fileId });

const copyItem = data => ({ type: constants.COPY_ITEM, payload: data });

export { setPath, addItem, updateItem, deleteItem, copyItem };
