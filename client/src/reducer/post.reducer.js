import { GET_POSTS } from "../actions/post.action";
import { LIKE_POST } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;

    case LIKE_POST:
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            userLiked : action.payload.userId,
          };
        }
        return null;
      });
    default:
      return state;
  }
}
