import React from 'react'
import withPrivateRoute from 'utils/withPrivateRoute'

const Home = ({ }) => {
    return (
        <div>
            Home
        </div>
    )
}

export default withPrivateRoute(Home)