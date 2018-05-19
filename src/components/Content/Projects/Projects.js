import React from 'react'

import classes from './Projects.css'

class Projects extends React.Component {
    render() {
        return(
            <div className={classes.Projects}>
                <div className={classes.Header}>
                    <span className={classes.HeaderItem}>Daniel's Demo</span>
                    <div className={classes.LogoItems}>
                        <span>Github </span>
                        <span>LinkedIn </span>
                        <span>Twitter </span>
                    </div>
                </div>
                <div className={classes.Title}>
                    <div className={classes.TitleRHS}>Hip Projects, 100% of the time</div>
                </div>
            </div>
        )
    }
}

export default Projects