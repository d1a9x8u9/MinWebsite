import React from 'react'

class Paper extends React.Component {
    state = {
        numberOfCards: 5,
    }
    
    render() {
        return (
                <div className="card mx-5">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img className="card-img-bottom" src="https://pbs.twimg.com/profile_banners/20322929/1515865149/" alt="Card image cap" />
                </div>
        )
    }
}

export default Paper