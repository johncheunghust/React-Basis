import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         comments: [
    //             {username: 'Tom', content: '草泥马'},
    //             {username: 'Jerry', content: 'nimasile'},
    //         ]
    //     }
    // }
    //给组件对象指定state属性
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        // comments: [
        //     {username: 'Tom', content: '草泥马'},
        //     {username: 'Jerry', content: 'nimasile'}
        // ]
        comments: []
    }

    componentDidMount() {
    //    模拟发送异步ajax请求，获取数据
        setTimeout(()=>{
            const comments = [
                {username: 'Tom', content: '草泥马'},
                {username: 'Jerry', content: 'nimasile'}
            ]
        //    更新状态
            this.setState({comments})
        }, 1000)
    }

    addComment = (comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState(comments)
    }

    deleteComment = (index) =>{
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState(comments)
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>

                    </div>
                </div>

            </div>
        )
    }
}