import React from 'react'
import img from "../assets/images/hm_girl.png";

function RightMovies() {
    return (
        <div className='rightContainer'>
            <div className="topsection">
                <h1>Welcome to <span className="watch">
                    Watchlist
                </span>
                </h1>

                <span>Browse Movies , add them to watchlist and share them with friends</span>
                <p className='para'>Just click the <i class='bx bxs-bookmark-plus'></i>  to add a movie,the poster to see more details</p>
            </div>
            <div className="middlesection">
                <div className="searchSection">
                    <div className='searchinput'>
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder='Tom Cruise' className='movie_name' />
                    </div>
                    <button className='searchButton'>search</button>
                </div>
            </div>
            <div className="bottomsection">
                <ul className="movie_item">
                    <li>
                        <div className='image'>
                            <img src={img} alt="" />

                        </div>
                        <span ></span>
                        <div className="bottm">
                            <span className='filmname'>Top Gun</span>
                            <span className="hero">Maverick</span>
                            <span className='year'>(2020)</span>
                        </div>
                    </li>
                    <li>tom </li>
                    <li>tom </li>
                    <li>tom </li>
                    <li>tom </li>
                </ul>
            </div>
        </div >
    )
}

export default RightMovies