const initialState = {
  currentPath: "/test",
  rootStructure: {
    files: [
      {
        name: "test",
        type: "folder",
        content: {}
      }
    ],
    todos: []
  }
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default reducer;
