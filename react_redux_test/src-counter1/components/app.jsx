import React, {Component} from 'react'

export default class App extends Component {
    state = {
        count: 0
    }

    handlePlus = ()=>{
    //    1, 得到选择增加数量
        const number = this.select.value *1
    //    2, 得到原本的count状态，并计算新的count
        const count = this.state.count + number;
    //    3, 更新状态
        this.setState({count})
    }

    handleMinus = ()=>{
        //    1, 得到选择增加数量
        const number = this.select.value *1
        //    2, 得到原本的count状态，并计算新的count
        const count = this.state.count  - number;
        //    3, 更新状态
        this.setState({count})
    }

    handleOdd = ()=>{
            //    1, 得到选择增加数量
            const number = this.select.value *1
            //    2, 得到原本的count状态，并计算新的count
            const count = this.state.count%2===1? this.state.count+number:this.state.count;
            //    3, 更新状态
            this.setState({count})
    }

    handleAsync = ()=>{
                //    1, 得到选择增加数量
                const number = this.select.value *1
                //    2, 得到原本的count状态，并计算新的count
                const count = this.state.count
                //    3, 更新状态
                setTimeout(()=>{
                    this.setState({count:count+number})
                }, 1000)
        }

    render() {
        const {count} = this.state
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