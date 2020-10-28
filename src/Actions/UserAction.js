const SEARCH = "SEARCH";
export const fetchdata = (dispatch) => {
  let url =
    "https://api.unsplash.com/photos/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({ type: SEARCH, payLoad: data });
    });
};

export const search = () => {
  return {
    type: "SEARCH",
  };
};
