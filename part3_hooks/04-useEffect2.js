import React, {useEffect, useState} from 'react'

export default function App() {

    const [name, setname] = useState("agarthasf")

    useEffect(() => {
      setname(name.substring(0, 1).toUpperCase() + name.substring(1))
    

    }, [name]) //数组为依赖
    

    return (
        <div>
            {name}
            <button onClick={()=>{
                setname("xiaoming")
            }}>click</button>
        </div>
    )
}
