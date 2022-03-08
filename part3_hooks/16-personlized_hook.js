import React, { useState, useMemo, useEffect } from 'react'
import axios from 'axios'

function useCinemalist(){
    const [cinemaList, setcinemaList] = useState([])

    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4641868",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1645797174225215200100353","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            setcinemaList(res.data.data.cinemas)
        })
      }, [])

      return {
            cinemaList
      }
}

function useFilter(cinemaList, myText){
    const getCinemaList = useMemo(() => cinemaList.filter(
        item=>item.name.toUpperCase()
        .includes(myText.toUpperCase()) ||
        item.address.toUpperCase()
        .includes(myText.toUpperCase())
        ), 
        [myText, cinemaList])  //依赖

    return {
        getCinemaList
    }
}

export default function Cinema() {

    const [myText, setmyText] = useState("")
    const {cinemaList} = useCinemalist()
    const {getCinemaList} = useFilter(cinemaList, myText)

    return (
        <div>
            <input value={myText} onChange={(event)=>{
                setmyText(event.target.value)
            }}/>

            {
                getCinemaList.map(item=>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)
            }
        </div>
    )

}