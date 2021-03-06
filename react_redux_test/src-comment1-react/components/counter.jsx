import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    handlePlus = ()=>{
    //    1, 得到选择增加数量
        const number = this.select.value *1
    //    2. 调用store的方法更新状态
        this.props.increment(number)
    }

    handleMinus = ()=>{
        //    1, 得到选择增加数量
        const number = this.select.value *1
        //    2. 调用store的方法更新状态
        this.props.decrement(number)

    }

    handleOdd = ()=>{
            //    1, 得到选择增加数量
            const number = this.select.value *1
            //    2, 得到原本的count状态，并计算新的count
            const {count} = this.props
        if(count%2===1) {
            this.props.increment(number)
        }
    }

    handleAsync = ()=>{
                //    1, 得到选择增加数量
                const number = this.select.value *1
                //    2, 得到原本的count状态，并计算新的count
                //    3, 更新状态
                this.props.incrementAsync(number)
        }

    render() {
        const {count} = this.props;
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

