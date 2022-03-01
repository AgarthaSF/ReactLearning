import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class Cinema extends Component {
    constructor(){
        super()

        this.state = {
            cinemaList:[],
            backUpList:[]
        }

        //axios 第三方库，专门用于请求数据
        //.then是成功拿到请求，catch请求失败
        //axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
        
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1340358").then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })


        //axios本身是异步的行为，所以setstate的更新是同步的，其实不需要在setState的
        //回调函数中调用

        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4641868",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1645797174225215200100353","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backUpList: res.data.data.cinemas
            },()=>{
                //new BetterScroll(".wrapper")
            })

            new BetterScroll(".wrapper")
        })
    }

    //生命周期更适合
    render() {
        return (
        <div>
            <input onInput={
                this.handleInput
            }/>
            <div className="wrapper" style={{height: '500px',
                background: 'gray', overflow: 'hidden'}}>
                <div className="contend">
                {
                
                    this.state.cinemaList.map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>)
                }
                </div>
            </div>
        </div>
        )
    }

    handleInput = (event)=>{
        console.log('input')

        var newList = this.state.backUpList.filter(
            item=>item.name.toUpperCase()
            .includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase()
            .includes(event.target.value.toUpperCase())
            )
        this.setState({
            cinemaList: newList
        },()=>{
            //new BetterScroll(".wrapper")
        })
    }
}
