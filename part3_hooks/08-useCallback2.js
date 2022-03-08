import React, {useState, useCallback} from 'react'

export default function App() {

    const [list, setlist] = useState(["aa", "bb", "cc"])
    const [text, settext] = useState("")

    // 使用了useCallback后该函数就可以被缓存下来，再次改变后不会重新生成
    // 能够提升性能
    const handleChange = useCallback(
        (evt)=>{
            settext(evt.target.value)
        },
        []  //依赖
    )

    const handleAdd = useCallback(
      () => {
        setlist([...list,text])
      },
      [list,text],
    )

    const handleDel = useCallback(
        (index)=>{
            let newlist = [...list]
            newlist.splice(index, 1)
            setlist(newlist)
        },

      [list],
    )
    
    
    return (
        <div>
            <input onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

            <button onClick={()=>{
                setlist([])
            }}>delete</button>
            <ul>
            {list.map((item, index)=>{
                return(
                    <div>
                        
                        <li key={item}>{item}</li>
                        <button onClick={handleDel}>del</button>
                    </div>
                )
            })}
            </ul>

            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
