import * as constants from "./constants";

const setPath = path => ({ type: constants.SET_PATH, payload: path });

const addItem = data => ({ type: constants.ADD_ITEM, payload: data });

const updateItem = data => ({ type: constants.ADD_ITEM, payload: data });

const deleteItem = data => ({ type: constants.ADD_ITEM, payload: data });

export { setPath, addItem };
