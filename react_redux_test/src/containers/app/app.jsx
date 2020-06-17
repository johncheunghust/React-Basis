import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment, deleteComment, getComments} from '../../redux/actions'

import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list";

class App extends Component {

    //给组件对象指定state属性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    }

    componentDidMount() {
    //    模拟发送异步ajax请求，获取数据
        this.props.getComments()
    }



    render() {
        const {comments, addComment, deleteComment} = this.props
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
                        <CommentAdd addComment={addComment}/>
                        <CommentList comments={comments} deleteComment={deleteComment}/>

                    </div>
                </div>

            </div>
        )
    }
}
export default connect(
    state =>({comments: state.comments, count: state.count}),//state就是一个comment数组
    {addComment, deleteComment, getComments}
)(App)