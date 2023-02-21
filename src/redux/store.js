import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice";
import rootSaga from "./userSaga";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer:{
        data:userDetailsSlice
    },
    middleware:[sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

export default store