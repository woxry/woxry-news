import { ADD_NEWS, LOAD_NEWS, LOAD_POPULAR_NEWS } from "../constants/action-types";

const initialState = {
	news: [],
  data: [],
  topNews: []
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_NEWS) {
    return Object.assign({}, state, {
      news: state.news.concat(action.payload)
    });
	}
	
	if (action.type === LOAD_NEWS) {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload)
    });
  }
  
  if (action.type === LOAD_POPULAR_NEWS) {
    return Object.assign({}, state, {
      topNews: state.topNews.concat(action.payload)
    });
	}

  return state;
};

export default rootReducer;
