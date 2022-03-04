import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {

    state = {
        list:["111","222","333","444","555","666",
        "777","888","999"]
    }

    componentDidMount(){
        new BetterScroll("#wrapper")
    }

    render() {
        return (
        <div>
            <div id="wrapper" style={{height: "150px",
                overflow: "hidden", background: "gray"}}>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return(
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        )
    }
}
