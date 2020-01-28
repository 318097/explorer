const initialState = {
  currentPath: "/",
  rootStructure: {
    files: [
      {
        name: "test",
        type: "folder",
        content: {}
      }
    ],
    todoList: []
  }
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default reducer;
