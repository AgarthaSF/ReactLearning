import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
      super();
      this.state = {
        list: [{
          id: 1,
          text: "aa"
        },{
          id: 2,
          text: "bb"
        },{
          id: 3,
          text: "cc"
        }]
      }
    }

    myRef = React.createRef();

    render() {
        return (
            <div>
            <input ref={this.myRef}/>
            <button onClick={this.handleClick
            }>add1</button>
            <ul>{
                this.state.list.map((item, index)=>
                  <li key={item.id}>
                    {/* {item.text} */}

                    {/* 富文本展示 */}
                    {/* 可能受到攻击 */}
                    <span dangerouslySetInnerHTML={
                      {
                        __html:item.text
                      }
                    }></span>


                    {/* <button onClick={this.handleDelClick.bind
                      (this, index)}>del</button> */}
                      <button onClick={()=>{
                        this.handleDelClick(index)
                      }}>del</button>
                  </li>)
                  }
            </ul>
            
            {
              // this.state.list.length === 0 ?
              //   <div>当前暂无待办事项</div> : null

              this.state.list.length === 0 && <div>当前暂无待办事项</div>
            }


            </div>
            )
        }

    handleClick = () =>{
      //var a = [1,2,3]
      //var b = [...a] 深复制
      //或var b = a.slice()
      let newList = [...this.state.list]
        newList.push({
          id: Math.random() * 100000,  //生成不同id的函数
          text: this.myRef.current.value
        });
        this.setState({
          list: newList
        })

        //清空输入框
        this.myRef.current.value = "";
    }

    handleDelClick(index) {
      console.log('delete', index);
      let newList = this.state.list.slice();
      newList.splice(index,1,);
      this.setState({
        list:newList
      })
    }
}

