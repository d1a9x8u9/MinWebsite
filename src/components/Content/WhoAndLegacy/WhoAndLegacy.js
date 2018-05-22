import React from 'react'

import classes from './WhoAndLegacy.css'

class WhoAndLegacy extends React.Component {
    render() {
        return(
            <div className={classes.WhoAndLegacy}>
                <div className={classes.WhoAndLegacyItemsLeft}>Lorem ipsum dolor sit amet, consectetur.</div>
                <div className={classes.WhoAndLegacyItemsRight}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper id neque in dignissim. Nam quis accumsan leo. Fusce a ornare lorem, et tincidunt mauris. Mauris consequat nisi sed sem sodales, vitae dapibus dui semper. Sed non ornare tortor. Nunc finibus sem eu arcu commodo tempus. Curabitur ultrices ex dui. Mauris vehicula consectetur magna, et suscipit sapien pulvinar vel. </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default WhoAndLegacy