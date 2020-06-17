import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {counter} from './reducers'

//生成一个store对象

const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk))) // 内部会第一次调用reducer函数，得到初始state
console.log(store, store.getState())

export default store