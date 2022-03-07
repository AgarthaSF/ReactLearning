import React, { Component } from 'react'
import ASwiper from '../swiper/swiper'
import ASwiperItem from '../swiper/swiperItem'
import axios from 'axios'

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount(){

        axios({
            url: "https://m.maizuo.com/gateway?type=2&cityId=440300&k=2849938",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1645797174225215200100353"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                list: res.data.data
            })
        })
    }

    render() {
        return (
            <div>
                <ASwiper loop={true}>
                    {
                        this.state.list.map(item=><
                            ASwiperItem key={item.bannerId}>
                            <img src={item.imgUrl} alt={item.name} style={{width: "100%"}} />
                            </ASwiperItem>
                        )
                    }
                </ASwiper>
            </div>
        )
    }
}
