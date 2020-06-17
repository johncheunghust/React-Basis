// 包含所有的action creator
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from "./action-types";
//同步action返回一个对象、异步action返回一个函数

export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

//同步接受comments
 const receiveComments = (comments) =>({type:RECEIVE_COMMENTS, data:comments})

//异步action从后台获取数据
export const getComments = ()=>{
    return dispatch=> {
        //    模拟发送ajax请求
        setTimeout(()=>{
            const  comments = [
                {username:'Tom', content: 'React挺好的'},
                {username:'Jack', content: 'React太难了'}
            ]
        //    分发一个同步的action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}