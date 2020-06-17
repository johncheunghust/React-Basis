//包含n个reducer函数的模块
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";
import {combineReducers} from "redux";

const initComments = [
    {username:'Tom', content: 'React挺好的'},
    {username:'Jack', content: 'React太难了'}
]
 function comments(state=initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((c, index)=>(index!==action.data))
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}


export default combineReducers({
    comments
})

//redux向外暴露的state是个对象
