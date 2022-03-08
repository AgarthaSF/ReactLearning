import React, {useState, useRef} from 'react'

export default function App() {

    const [list, setlist] = useState(["aa", "bb", "cc"])
    const text = useRef()  // React.createRef()


    return (
        <div>
            <input ref={text}/>
            <button onClick={()=>{
                setlist([...list,text.current.value])
            }}>Add</button>

            <button onClick={()=>{
                setlist([])
            }}>delete</button>
            <ul>
            {list.map((item, index)=>{
                return(
                    <div>
                        
                        <li key={item}>{item}</li>
                        <button onClick={()=>{
                            let newlist = [...list]
                            newlist.splice(index, 1)
                            setlist(newlist)
                        }}>del</button>
                    </div>
                )
            })}
            </ul>

            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
