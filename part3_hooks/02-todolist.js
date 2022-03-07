import React, {useState} from 'react'

export default function App() {

    const [list, setlist] = useState(["aa", "bb", "cc"])
    const [text, settext] = useState("")
    return (
        <div>
            <input onChange={(event)=>{
                settext(event.target.value)
            }}/>
            <button onClick={()=>{
                setlist([...list,text])
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
