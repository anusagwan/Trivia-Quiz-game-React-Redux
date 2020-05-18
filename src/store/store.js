import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import answersInfo from "/home/user/folder/react-redux-quiz-app/src/store/reducers/answersInfo.js";
import questions from "/home/user/folder/react-redux-quiz-app/src/store/reducers/questions.js";

let middlewares =  [logger, thunkMiddleware]

export default () => {
  const store = createStore(
    combineReducers({
      answersInfo,
      questions,
       applyMiddleware(logger,thunkMiddleware)
    }),
  );
  return store;
};

export default () => {
  return createStore(
    answersInfo,
    questions,
    applyMiddleware(...middlewares)
  )
}