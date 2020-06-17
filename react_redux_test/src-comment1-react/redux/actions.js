// 包含所有的action creator
import {DECREMENT, INCREMENT} from "./action-types";
//同步action返回一个对象、异步action返回一个函数

export const increment = (number) => ({type: INCREMENT, data: number})

export const decrement = (number) => ({type: DECREMENT, data: number})

//异步action
export const incrementAsync = (number) =>(
    dispatch =>{
        //异步代码
        setTimeout(()=>{
            dispatch(increment(number))
        }, 1000)
    }
)