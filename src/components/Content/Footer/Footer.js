import React from 'react'

import classes from './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className={classes.Footer}>
               <div className={classes.FooterInfo}>
                    <a href="#">FAQ</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
               </div>
            </div>
        )
    }
}

export default Footer