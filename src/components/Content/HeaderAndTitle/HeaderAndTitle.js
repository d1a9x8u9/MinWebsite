import React from 'react'

import classes from './HeaderAndTitle.css'

class HeaderAndTitle extends React.Component {    
    render() {
        return(
            <div className={classes.HeaderAndTitle}>
                <div className={classes.Header}>
                    <a href="#" className={classes.HeaderItem}>Daniel's Demo</a>
                    <div className={classes.LogoItems}>
                        <a href="https://github.com/d1a9x8u9/MinWebsite" alt="github">Github</a>
                    </div>
                </div>
                <div className={classes.Title}>
                    <div className={classes.TitleRHS}>
                        Lorem ipsum dolor sit amet, consectetur.                         
                    </div>
                    <div className={classes.TitleRHSSubText}>
                            Lorem ipsum dolor sit amet. 
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderAndTitle