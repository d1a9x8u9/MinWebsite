import React from 'react'

import classes from './Content.css'
import HeaderAndTitle from './HeaderAndTitle/HeaderAndTitle'
import WhoAndLegacy from './WhoAndLegacy/WhoAndLegacy'
import Code from './Code/Code'
import Footer from './Footer/Footer'

class Content extends React.Component {
    render() {
        return (
            <div className={classes.Content}>
               <HeaderAndTitle />
               <WhoAndLegacy />
               <Code />
               <Footer />
            </div>
        )
    }
}

export default Content