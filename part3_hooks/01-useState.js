import React, {useState} from 'react'

export default function App() {


    const [name, setName] = useState("AgarthaSF")
    const [age, setage] = useState(18)

    return (
        <div>
            <button onClick={()=>{
                console.log(name)
                setName("agarthasf")
                setage(20)
            }}>click</button>
            {name}-{age}
        </div>
    )
}
