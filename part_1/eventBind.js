import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
        <div>
          <input/>
          <button onClick={this.handleClick1}>add1</button>
          <button onClick={()=>{
            console.log('click2');
          }}>add2</button>
          <button onClick={this.handleClick3}>add3</button>
          <button onClick={()=>{
              this.handleClick4();
          }}>add4</button>
        </div>
        )
    }

    handleClick1(){
        console.log('click1');
    }

    handleClick3= ()=>{
        console.log('click3');
    }

    handleClick4(){
        console.log('click4');
    }

}

