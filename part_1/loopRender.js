import React, { Component } from 'react'

export default class loopRender extends Component {
    constructor(){
        super();
        this.state = {
            list: ["1111","2222","3333"]
        }
    }


    render() {
        var newList = this.state.list.map(item=>{
            return <li>{item}</li>});
        return (
            <div>
                <h1>test</h1>
                <ul>
                    {
                        // 为了列表的复用和重排，设置key值，提高性能
                        // newList
                        this.state.list.map(item=>{
                            return <li key = {item}>{item}</li>
                    })}
                </ul>
            </div>
    )
  }
}
