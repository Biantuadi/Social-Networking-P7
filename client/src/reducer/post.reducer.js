import { GET_POSTS, UNLIKE_POST } from "../actions/post.action";
import { LIKE_POST } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case LIKE_POST:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          likes: state[action.payload].likes + 1,
        },
      };
    case UNLIKE_POST:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          likes: state[action.payload].likes - 1,
        },
      };
    default:
      return state;
  }
}
