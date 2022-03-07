import React, { Component } from 'react'

export default class ASwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        )
    }
}
