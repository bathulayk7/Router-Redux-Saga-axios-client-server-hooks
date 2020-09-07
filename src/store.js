import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga";
import { checkUser } from "./services/UserService";
import { userLoggedIn } from "./actions/userActions";

const saga=createSagaMiddleware()
const store=createStore(rootReducer,applyMiddleware(saga))
const user=checkUser()
if(user){
    store.dispatch(userLoggedIn(user))
}
saga.run(rootSaga)
export default store
