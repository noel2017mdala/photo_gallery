let initialState = [];

const fetchQuery = (state = initialState, action) => {
  if (action.type === "LOAD") {
    return {
      ...state,
      item: action.payLoad,
    };
  }
  return state;
};

export default fetchQuery;
