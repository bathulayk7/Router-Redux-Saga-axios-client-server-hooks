import{ takeEvery, call, put, all } from "redux-saga/effects";
import * as types from "../config/actionTypes";
import * as service from "../services/UserService"
import *  as action from "../actions/userActions";
import * as alert from "../actions/alertActions";
import history from "../history";

function* login({creds}){
    try{

        const user=yield call(service.login,creds)
        yield put(action.userLoggedIn(user))
        yield put(alert.setAlertAction({
            text:"user logged in",
            color:"success"
        }))
        history.push("/tasks")
    }catch(e){
        yield put(alert.setAlertAction({
            text:e.msg,
            color:"danger"
        }))
    }
}

function* logout(){
    try{

        yield call(service.logout)
        yield put(action.userLoggedOutAction())
        yield put(alert.setAlertAction({
            text:"user logged out",
            color:"success"
        }))
        history.push("/")
    }catch(e){
        yield put(alert.setAlertAction({
            text:e.msg,
            color:"danger"
        }))
    }
}


function* watchLoginUser(){
    yield takeEvery(types.LOGIN_USER,login)
}
function* watchLogoutUser(){
    yield takeEvery(types.LOGOUT_USER,logout)
}

export function* userSaga(){
    yield all([
        watchLoginUser(),
        watchLogoutUser()
    ])
}
