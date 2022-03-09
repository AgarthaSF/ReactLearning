import React, { Component } from 'react'

// import { HashRouter, Route } from 'react-router-dom'
// import Films from './views/Films'
// import Cinemas from './views/Cinemas'
// import Center from './views/Center'
import Tabbar from './components/Tabbar'
import IndexRouter from './router/IndexRouter'

export default class App extends Component {
    render() {
        return (
            <div>
                <IndexRouter>
                    <Tabbar></Tabbar>
                </IndexRouter>

            </div>
        )
    }
}

 