export const fetchData = () => (dispatch) => {
  let url = `https://api.unsplash.com/photos/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({
        type: "LOAD",
        payLoad: data,
      });
    });
};
