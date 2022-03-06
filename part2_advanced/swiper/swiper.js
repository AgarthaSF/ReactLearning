import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination])

export default class ASwiper extends Component {

    componentDidMount() {
        
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // loop: true,  //开启循环
            pagination: {
                el: '.swiper-pagination',
              },
          });
    }

    componentDidUpdate(){

    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height: "200px", background: "gray"}}>
                    
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" >111</div>
                        <div className="swiper-slide" >222</div>
                        <div className="swiper-slide" >333</div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
