import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function ComingSoon() {

  const [list, setlist] = useState([])

  useEffect(() => {
    axios.get("/ajax/comingList?ci=57&limit=10&movieIds=&token=&optimus_uuid=8E159EF09FA311ECAC2AC565B33D48CB361211D6608D4B52BA086EFFDA8BFB7D&optimus_risk_level=71&optimus_code=10").then(
      res=>{
        console.log(res.data)
        console.log(res.data.coming)
        setlist(res.data.coming)
      }
    )
  }, [])
  
    return (
      <div>
        <ul>
          {
            list.map(item=><li key={item.id}>{item.nm}</li>)
          }
        </ul>
      </div>
    )
}
