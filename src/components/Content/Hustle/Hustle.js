import React from 'react'

import classes from './Hustle.css'

class Hustle extends React.Component {
    render() {
        return(
            <div className={classes.Hustle}>
                <div className={classes.HustleItemsLeft}>By hipsters, for hipsters:</div>
                <div className={classes.HustleItemsRight}>
                    <div>Someshit about our legacy and how we revolutionalized the industry by not letting culture define who we are, but us defining culture.</div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Hustle