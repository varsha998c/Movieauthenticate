import React from 'react';

function LeftMenu() {
    return (
        <div className='leftcontainer'>
            <div className="topSection">

                <h1 className='watch'>WatchLists</h1>
                <div className='searchArea'>
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search..." className='searchInput' />
                </div>
                <div className='HomeArea'>
                    <i class='bx bx-home'></i>
                    <h5 className='textHome'>Home</h5>
                </div>
                <hr className='line' />
                <h3 className='my_list'>My Lists</h3>
                <ul>
                    <li>abcd</li>
                </ul>
            </div>
            <div className="guest">
                <div className="details">
                    <i class='bx bx-user-circle'></i>
                    <input type="text" className='guestname' placeholder='Guest' />
                </div>
            </div>
        </div>

    );
}

export default LeftMenu;

