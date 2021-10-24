import React from 'react'
import TracksComponent from '../components/Tracks'

class Feed extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#F5CAC4', minHeight: '100vh'
            }
            }>
                <TracksComponent />
            </div >);
    }
}

export default Feed;
