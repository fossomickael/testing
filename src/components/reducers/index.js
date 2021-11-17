import { combinedReducers } from "redux";
import commentsReducer from "reducers/comments";

export default combinedReducers({
  comments: combinedReducers,
});
