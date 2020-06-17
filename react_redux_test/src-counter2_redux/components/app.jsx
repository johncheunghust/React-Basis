import React, {Component} from 'react'
import {INCREMENT,DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'
export default class App extends Component {
    state = {
        count: 0
    }

    handlePlus = ()=>{
    //    1, 得到选择增加数量
        const number = this.select.value *1
    //    2. 调用store的方法更新状态
        this.props.store.dispatch(actions.increment(number))
    }

    handleMinus = ()=>{
        //    1, 得到选择增加数量
        const number = this.select.value *1
        //    2. 调用store的方法更新状态
        this.props.store.dispatch(actions.decrement(number))

    }

    handleOdd = ()=>{
            //    1, 得到选择增加数量
            const number = this.select.value *1
            //    2, 得到原本的count状态，并计算新的count
            const count = this.props.store.getState()
        if(count%2===1) {
            this.props.store.dispatch(actions.increment(number))
        }
    }

    handleAsync = ()=>{
                //    1, 得到选择增加数量
                const number = this.select.value *1
                //    2, 得到原本的count状态，并计算新的count
                //    3, 更新状态
                setTimeout(()=>{
                    this.props.store.dispatch(actions.increment(number))
                }, 1000)
        }

    render() {
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select=>this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.handlePlus}>+</button>&nbsp;
                    <button onClick={this.handleMinus}>-</button>&nbsp;
                    <button onClick={this.handleOdd}>increment if odd</button>
                    <button onClick={this.handleAsync}>increment async</button>
                </div>
            </div>
        )
    }
}