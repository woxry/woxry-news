import { ADD_NEWS, LOAD_NEWS, LOAD_POPULAR_NEWS } from "../constants/action-types";

// MAIN -> const MY_API_KEY = "f9a69f8969fc47e5a9fabca7d6158a94";
//const MY_API_KEY = "2a9a344a84be4134a71d401f9eed311c";
const MY_API_KEY = "86e59da3775148d386dc661aeeb2b423";

export function addNews(payload) {
  return { type: ADD_NEWS, payload }
};

export function getNews(page, keyword) {
  return function(dispatch) {
    const url = `http://newsapi.org/v2/everything?apiKey=${MY_API_KEY}&sortBy=popularity&pageSize=20&q=${keyword}&page=${page}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_NEWS, payload: json });
      });
  };
}

export function getPopularNews() {
  return function(dispatch) {
    const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${MY_API_KEY}&sortBy=popularity&pageSize=5`;
    
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_POPULAR_NEWS, payload: json });
      });
  };
}
