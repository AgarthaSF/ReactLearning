import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination])

export default class App extends Component {

    state = {
        list: ["111", "222", "333"]
    }

    componentDidMount() {

        setTimeout(()=>{  //在异步中同步更新，所以直接在这之后new就可以
            this.setState({
                list: ["aaa", 'bbb', 'ccc']
            })

            new Swiper('.swiper', {
                modules: [Navigation, Pagination],
                // loop: true,  //开启循环
                pagination: {
                    el: '.swiper-pagination',
                  },
              });
        }, 1000)

        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // loop: true,  //开启循环
            pagination: {
                el: '.swiper-pagination',
              },
          });
    }

    componentDidUpdate(){
        // new Swiper('.swiper', {
        //     modules: [Navigation, Pagination],
        //     // loop: true,  //开启循环
        //     pagination: {
        //         el: '.swiper-pagination',
        //       },
        //   });
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height: "200px", background: "gray"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map((item)=>{
                                return(
                                    <div className="swiper-slide" key={item}>{item}</div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
