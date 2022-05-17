import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// initial state = []
/**
 * state = {
 * posts: []
 * error: ...
 * }
 */
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // return posts; will not!
      // return [...posts] -> will trigger

      // BAD
      // return [action.payload]
      // BAd
      // posts.push (action.payload);
      // return posts;
      return action.payload; // 2 state: posts = action.payload
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
// anonymous function foo () {}
// const foo = () => {}
// stack with function.name
export default postsReducer;
