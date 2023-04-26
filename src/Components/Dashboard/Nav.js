import React from 'react';

const Nav=({name})=> {
    
    return (
            <ul id='dashboard-ul'>
                <li >Home</li>
                <li >/ Profile</li>
                <li >{name}</li>   
            </ul>
    );
}

export default Nav;