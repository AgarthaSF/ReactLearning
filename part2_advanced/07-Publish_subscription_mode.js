import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}


var bus = {
    list: [],
    subscribe(callback){
        //console.log(callback)
        this.list.push(callback)
    },

    publish(){
        //遍历所有list，将回调函数执行
        console.log(this.list)
        this.list.forEach(callback=>{
            callback && callback()
        })
    }
}

//订阅者

bus.subscribe(()=>{
    console.log("Test")
})

bus.subscribe(()=>{
    console.log("111")
})

//发布者
setTimeout(()=>{
    bus.publish()
}, 0)

// Redux 基于订阅发布 
