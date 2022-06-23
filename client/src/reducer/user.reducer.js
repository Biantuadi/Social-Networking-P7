import { GET_USER } from "../actions/user.action";
// import { UPLOAD_PROFIL } from "../actions/user.action";
import { UPDATE_PROFIL } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    // case UPLOAD_PROFIL:
    //   return{
    //     ...state,
    //     imageUrl: action.payload
    //   }
    case UPDATE_PROFIL:
        return{
            ...state,
            name: action.payload,
            bio: action.payload
        }
    default:
      return state;
  }
}
