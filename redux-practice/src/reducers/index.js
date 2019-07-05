const initialState = {
  title: "Hello world! I'm in the Redux store!"
};

export const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};
