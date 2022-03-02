import Header from './Header';
import MainContend from './MainContend';
import Footer from './Footer';
import React from 'react';

// function MyApp(){
//     return (
//         <div>
//             <Header />
//             <MainContend />
//             <Footer />
//         </div>
//     )
// }

class MyApp extends React.Component{
    render(){
        return(
        <div>
            <Header />
            <MainContend />
            <Footer />
        </div>
        )
    }
}

export default MyApp;