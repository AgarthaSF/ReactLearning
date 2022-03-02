import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
    constructor(){
        super()

        this.state = {
            cinemaList:[],
            myText: ""
        }

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
            })
        })
    }

    render() {
        return (
        <div>
            <input value={this.state.myText} onChange={(event)=>{
                this.setState({
                    myText: event.target.value
                })
            }}/>

            {
                this.getCinemaList().map(item=>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)
            }
        </div>
        )
    }

    getCinemaList = ()=>{
        return this.state.cinemaList.filter(
        item=>item.name.toUpperCase()
        .includes(this.state.myText.toUpperCase()) ||
        item.address.toUpperCase()
        .includes(this.state.myText.toUpperCase())
        )
    }
}