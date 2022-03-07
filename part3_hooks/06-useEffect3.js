import React, { Component, useEffect, useState } from 'react'

export default class App extends Component {

    state = {
        isCreate: true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreate: !this.state.isCreate
                    })
                }}>click</button>
    
                {this.state.isCreate && <Child/>}
            </div>  
        )
    }
}


function Child(){
    useEffect(()=>{
        window.onresize = ()=>{
            console.log("resize")
        }

        var timer = setInterval(()=>{
            console.log("111")
        }, 1000)

        return ()=>{
            console.log("destruction")
            window.onresize = null
            clearInterval(timer)
        }
    }, [])


    return(
        <div>Child</div>
    )
}
