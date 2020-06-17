import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import MessageDetail from "./message-detail";
import MyNavLink from "../components/MyNavLink";

export default class Message extends Component {
    state = {
        messages: [
            // {id: 1, title: 'message001'},
            // {id: 3, title: 'message001'},
            // {id: 5, title: 'message001'},
        ]
    }

    componentDidMount() {
    //    模拟发送Ajax请求异步获取数据
        setTimeout(()=>{
            const messages = [
                {id: 1, title: 'message001'},
                {id: 3, title: 'message003'},
                {id: 5, title: 'message005'},
            ]
        //    更新状态
            this.setState({messages})
        }, 1000)
    }

    showDetail = (id)=>{
        this.props.history.push(`/home/message/messageDetail/${id}`)
    }
    showDetail2 = (id)=>{
        this.props.history.replace(`/home/message/messageDetail/${id}`)
    }

    back = () =>{
        this.props.history.goBack()
    }
    forward = () =>{
        this.props.history.goForward()
    }

    reqPage = ()=>{
        window.location = 'http://www.baidu.com'
    }

    render() {
        return (
            <div>
            <ul>
                {
                    this.state.messages.map((m, index)=>(
                        <li key={index}>
                            <MyNavLink to={`/home/message/messageDetail/${m.id}`}>{m.title}</MyNavLink>
                            &nbsp;
                            &nbsp;
                            <button onClick={()=>{ this.showDetail(m.id)}}>push()查看</button>
                            <button onClick={()=>{ this.showDetail2(m.id)}}>replace()查看</button>

                        </li>
                    ))
                }
            </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.reqPage}>页面跳转</button>
            <Route path='/home/message/messageDetail/:id' component={MessageDetail} />
            </div>
        )
    }
}