const initialState = {
  title: "Hello world! I'm in the Redux store!"
};

export const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};
