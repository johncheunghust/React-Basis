import React, {Component} from 'react'

export default class News extends Component {
    state = {
        newsList: [
            'news001',
            'news001',
            'news001',
        ]
    }
    render() {
        return (
            <ul>
                {
                    this.state.newsList.map((news, index)=><li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}