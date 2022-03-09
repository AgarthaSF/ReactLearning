import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router-dom'





// 如果该组件是Route的component，实际上他是Route的子组件
export default function NowPlaying(props) {

    const [list, setlist] = useState([])

    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7865071",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1645797174225215200100353"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res.data.data.films)
            setlist(res.data.data.films)
        })

    }, [])
    
    
    const history = useHistory()

    const handleChangePage = (id)=>{
        // console.log("click")

        // 编程式老方法
        // window.location.href = "#/detail/"+id

        //console.log(props)
        // React方法，如果在类中需要加上this

        // 1.动态路由传参
        // props.history.push(`/detail/${id}`)
        history.push(`/detail/${id}`)

        // 第二、第三种方案都有问题，如果直接跳转到detail/页面中，浏览器当前
        // 并没有detail编号的相关信息，故会出现错误

        // 2.query传参，如果采用这种写法在Route中就不需要在detail后再加:号了
        // 再在组件中通过 props.location.query.xxx 获取参数
        //history.push({pathname: '/detail', query: {id:id}})

        // 3.state传参
        // 再在组件中通过 props.location.state.xxx 获取参数
        //history.push({pathname: '/detail', state: {id:id}})
    }


    return (

        <div>
            {
                list.map(item=>
                    <WithFilmItem key={item.filmId} {...item}/>)
            }
        </div>
    )
}

// withRouter包裹组件，成为该组件的父组件，此时就可以拿到props属性了
// 在使用时写成WithFilmItem
const WithFilmItem = withRouter(FilmItem)

function FilmItem(props){
    //console.log(props)
    let {name, filmId} = props
    return <li key={filmId} onClick={()=>{
        props.history.push(`/detail/${filmId}`)
    }}>
    {name}
        </li>
}
