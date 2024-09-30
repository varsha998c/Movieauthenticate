import React from 'react'
import LeftMenu from './LeftMenu'
import RightMovies from './RightMovies'

function WatchList() {
    return (
        <div className='watchList'>
            <div className="wrapperContent">
                <LeftMenu />
                <RightMovies />
            </div>
        </div>
    )
}

export default WatchList
