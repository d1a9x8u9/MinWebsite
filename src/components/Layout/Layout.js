import React from 'react'

import Header from '../Header/Header'
import Content from '../Content/Content'
import classes from './Layout.css'
import Hustle from './../Content/Hustle/Hustle'
import Code from '../Content/Code/Code'

class Layout extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Content />
                <Hustle />
                <Code />
            </div>
        )
    }
}

export default Layout