import React from 'react'

import classes from './Content.css'
import Paper from './Paper/Paper'
import Projects from './Projects/Projects'

class Content extends React.Component {
    render() {
        return (
            <div className={classes.Content}>
               <Projects />
            </div>
        )
    }
}

export default Content