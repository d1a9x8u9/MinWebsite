import React from 'react'

import classes from './HeaderAndTitle.css'

class HeaderAndTitle extends React.Component {    
    render() {
        return(
            <div className={classes.HeaderAndTitle}>
                <div className={classes.Header}>
                    <span className={classes.HeaderItem}>Daniel's Demo</span>
                    <div className={classes.LogoItems}>
                        <span>LOGO HERE </span>
                    </div>
                </div>
                <div className={classes.Title}>
                    <div className={classes.TitleRHS}>
                        Lorem ipsum dolor sit amet, consectetur. 
                        <div className={classes.TitleRHSSubText}>
                            Lorem ipsum dolor sit amet. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderAndTitle