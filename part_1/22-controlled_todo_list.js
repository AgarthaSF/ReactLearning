import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
      super();
      this.state = {
        list: [{
          id: 1,
          text: "aa",
          isChecked: false
        },{
          id: 2,
          text: "bb",
          isChecked: false
        },{
          id: 3,
          text: "cc",
          isChecked: false
        }],

        mytext: ""
      }
    }

    render() {
        return (
            <div>
            <input value={this.state.mytext} onChange={(event)=>{
                this.setState({
                    mytext: event.target.value
                })
                //console.log(event.target.value)
            }}/>
            <button onClick={this.handleClick
            }>add1</button>
            <ul>{
                this.state.list.map((item, index)=>
                    <li key={item.id}>
                        <input type="checkbox" checked={
                            item.isChecked} onChange={()=>{
                                this.handleChecked(index)
                            }}/>

                        <span dangerouslySetInnerHTML={
                            {
                                __html: item.text
                            }
                        } style={{textDecoration: item.isChecked?"line-through":""}}></span>

                        {/* {item.isChecked ? <del>{item.text}</del> : item.text} */}

                        <button onClick={()=>{
                        this.handleDelClick(index)
                        }}>del</button>
                    </li>)
                  }
            </ul>
            
            {
              this.state.list.length === 0 && <div>当前暂无待办事项</div>
            }
            </div>
            )
        }

    handleClick = () =>{
      let newList = [...this.state.list]
        newList.push({
          id: Math.random() * 100000,  //生成不同id的函数
          text: this.state.mytext,
          isChecked: false
        });
        this.setState({
          list: newList,
          mytext: ""         //清空输入框
        })

    }

    handleDelClick(index) {
      console.log('delete', index);
      let newList = this.state.list.slice();
      newList.splice(index,1,);
      this.setState({
        list:newList
      })
    }

    handleChecked = (index) =>{
        //console.log(index)

        let newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            list: newList   
        })
    }
}

