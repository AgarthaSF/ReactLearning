import React, { Component } from 'react'

 const TabBar = (props)=>{
    return (
        <div>
            <ul>
            {
                props.list.map((item, index)=>
                    <li key={item.id} className={this.props.current
                    === index ? 'active' : ''} onClick={()=>{
                        props.event(index)
                    }}>
                        {item.text}
                    </li>
                )
            }
            </ul>            
        </div>
    )
}
export default TabBar