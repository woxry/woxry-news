import { ADD_NEWS, NEWS_LOADED } from "../constants/action-types";

const initialState = {
	news: [],
	data: []
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_NEWS) {
    return Object.assign({}, state, {
      news: state.news.concat(action.payload)
    });
	}
	
	if (action.type === NEWS_LOADED) {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload)
    });
	}

  return state;
};

export default rootReducer;
