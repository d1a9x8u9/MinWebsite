import React from 'react'

import classes from './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className={classes.Footer}>
               <div className={classes.FooterInfo}>
                    <div>FAQ</div>
                    <div>About us</div>
                    <div>Contact</div>
               </div>
            </div>
        )
    }
}

export default Footer