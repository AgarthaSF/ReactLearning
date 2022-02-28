import React, { Component } from 'react'

export default class state extends Component {

    // state = {
    //     text: "收藏",
    //     isLiked: false
    // }

    constructor(){
        super();
        this.state = {
            text: "收藏",
            isLiked: false
        }
    }

  render() {
    return (
      <div>
          <h1>React</h1>
          <button onClick={()=>{
              this.setState({
                isLiked: !this.state.isLiked
              })
          }}>{this.state.isLiked? "取消收藏" : "收藏"}</button>
      </div>
    )
  }
}
