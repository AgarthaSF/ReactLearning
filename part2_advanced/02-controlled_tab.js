import React, { Component } from 'react'
import '../assets/css/maizuo.css'
import File from './maizuoComponent/File';
import Cinema from './maizuoComponent/Cinema';
import Center from './maizuoComponent/Center';
import TabBar from './maizuoComponent/TabBar';
import NavBar from './maizuoComponent/NavBar';
export default class tab extends Component {
    constructor(){
        super();
        this.state = {
            current: 0, 
            list:  [{
                id:1,
                text:"电影"
            },{
                id:2,
                text:"影院"
            },{
                id:3,
                text:"我的"
            }]
        }
    }

    which(index){
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

            <NavBar event={()=>{
                this.setState({
                    current: 2
                })
            }}></NavBar>

            {
                this.which()
            }
            
            <TabBar event={(index)=>{
                this.which()
                this.setState({
                    current: index
                })
            }} current={this.state.current} list={this.state.list}/>
        </div>
    )
  }
}
