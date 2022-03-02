import React, { Component } from 'react'
import './assets/css/maizuo.css'
import File from '../part2_advanced/maizuoComponent/File';
import Cinema from '../part2_advanced/maizuoComponent/Cinema';
import Center from '../part2_advanced/maizuoComponent/Center';

export default class tab extends Component {
    constructor(){
        super();
        this.state = {
            list:[{
                    id:1,
                    text:"电影"
                },{
                    id:2,
                    text:"影院"
                },{
                    id:3,
                    text:"我的"
                }],

            current: 0
        }
    }

    which(){
        switch(this.state.current)
        {
            case 0:
                return <File></File>;
            case 1:
                return <Cinema></Cinema>;
            case 2:
                return <Center></Center>;
            default:
                return null;
        }
    }

    render() {
        return (
        <div>
            {
                this.which()
            }
            
            <ul>
                {
                    this.state.list.map((item, index)=>
                        <li key={item.id} className={this.state.current
                        === index ? 'active' : ''} onClick={()=>{
                            this.handleClick(index);
                        }}>
                            {item.text}
                        </li>
                    )
                }
            </ul>
        </div>
    )
  }
  handleClick(index){
    this.setState({
        current: index
    })
  }
}
