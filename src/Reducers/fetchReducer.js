const initialSate = [];

const fetchData = (state = initialSate, action) => {
  if (action.type === "FETCH") {
    return state;
  }
  return state;
};

export default fetchData;
