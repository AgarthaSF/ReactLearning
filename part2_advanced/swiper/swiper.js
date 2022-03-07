import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination])

export default class ASwiper extends Component {

    componentDidMount() {
        console.log(this.props.loop)
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
              },
            loop: this.props.loop,  //开启循环
          });
    }

    componentDidUpdate(){

    }

    render() {
        console.log(this.props.loop)
        return (
            <div>
                <div className="swiper">
                    
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
