import * as constants from "./constants";

const setPath = path => ({ type: constants.SET_PATH, payload: path });

export { setPath };
