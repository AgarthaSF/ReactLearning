import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function App() {

    const [list, setlist] = useState([])

    // 第一个参数为函数，第二个参数为数组
    useEffect(() => {
      axios.get("/test.json").then(res=>{
          console.log(res.data)
          setlist(res.data.data.films)
      })
    
    }, []) //传空数组，只执行一次
    


    return (
        <div>
            App
            <ul>
            {list.map(item=><li key={item.filmId}>{item.name}</li>)}
            </ul>
        </div>
    )
}
