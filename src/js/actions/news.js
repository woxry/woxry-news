import { ADD_NEWS, NEWS_LOADED } from "../constants/action-types";

const MY_API_KEY = "f9a69f8969fc47e5a9fabca7d6158a94";

export function addNews(payload) {
  return { type: ADD_NEWS, payload }
};

export function getNews(page, keyword, category) {
  return function(dispatch) {
    const url = `http://newsapi.org/v2/everything?apiKey=${MY_API_KEY}&sortBy=popularity&pageSize=20&q=${keyword}&page=${page}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: NEWS_LOADED, payload: json });
      });
  };
}
