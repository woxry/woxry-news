import { ADD_NEWS, NEWS_LOADED } from "../constants/action-types";

const MY_API_KEY = "f9a69f8969fc47e5a9fabca7d6158a94";
const COUNTRY = "us";

export function addNews(payload) {
  return { type: ADD_NEWS, payload }
};

export function getNews() {
  return function(dispatch) {
    const url = `http://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${MY_API_KEY}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: NEWS_LOADED, payload: json });
      });
  };
}
