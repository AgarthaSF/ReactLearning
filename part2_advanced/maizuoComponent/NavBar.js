import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{
                background: "gray",
                textAlign: "center",
                overflow: "hidden"}}>
                <button style={{float: "left"}}>back</button>
                <span style={{color: "white"}}>卖座电影</span>
                <button style={{float: "right"}} onClick={()=>{
                    this.props.event()
                }}>center</button>
            </div>
        )
    }
}
