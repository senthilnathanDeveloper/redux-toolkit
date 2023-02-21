import { take,takeEvery,takeLatest,put,all,delay,fork,call } from '@redux-saga/core/effects'
import { createUsersApi, deleteUsersApi, loadUserApi, updateUsersApi } from './api';
import { 
    createUsersError, 
    createUsersSuccess, 
    deleteUsersError, 
    deleteUsersSuccess, 
    loadUserError, 
    loadUserSuccess, 
    updateUsersError,
    updateUsersSuccess 
    } from './userDetailsSlice';


export function* onLoadUser() {
    yield takeEvery("userDetails/loadUserStart",onLoadUserStartAsync)
}

// GET -API -CALLING
export function* onLoadUserStartAsync() {
    try{
        const response = yield call(loadUserApi);
        if(response.status === 200){
            yield delay(500);
            yield put(loadUserSuccess(response.data));
        }
    }catch(error){
        yield put(loadUserError(error.response.data))
    }
}


// POST - API-CALLING
export function* onLoadCreateUsersStartAsync({payload}) {
    try{
        const response = yield call(createUsersApi,payload);
        if(response.status === 200){
            yield put(createUsersSuccess(response.data));
        }
    }catch(error){
        yield put(createUsersError(error.response.data))
    }
}

export function* onLoadCreateUsers() {
    yield takeLatest("userDetails/createUsersStart", onLoadCreateUsersStartAsync)
}


// DELETE - API -CALLING
export  function* onDeleterUsersAsync(userDetailsId) {
    try{
        const response = yield call(deleteUsersApi,userDetailsId);
        if(response.status === 200){
            yield delay(500)
            yield put(deleteUsersSuccess(userDetailsId));
        }
    }catch(error){
        yield put(deleteUsersError(error.response.data))
    }
}


export function* onDeleterUsers() {
    while(true){
        const {payload:userDetailsId} = yield take("userDetails/deleteUsersStart")
        yield call(onDeleterUsersAsync,userDetailsId)
    }
}


// UPDATE - API -CALLING
export function* onLoadUpdateUsersStartAsync({payload:{id, form}}){
    try{
        const response = yield call(updateUsersApi,id,form);
            if(response.status === 200){
                yield put(updateUsersSuccess())
            }
        }catch(error){
            yield put(updateUsersError(error.response.data))
    }
}


export function* onLoadUpdateUsers() {
    yield takeLatest("userDetails/updateUsersStart", onLoadUpdateUsersStartAsync)
}

const userSage = [
    fork(onLoadUser),
    fork(onLoadCreateUsers),
    fork(onDeleterUsers),
    fork(onLoadUpdateUsers)
]

export default function* rootSaga(){
    yield all([...userSage])
}