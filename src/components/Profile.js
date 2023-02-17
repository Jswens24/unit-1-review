import React from 'react';
import { useState } from 'react';
import './Profile.css';

const Profile = (props) => {
    const [favColor, setFavColor] = useState('TBD');

    // let favColor = 'TBD';

    return (
        <div className='profile-container'>
            <p>First name: {props.info.firstName}</p>
            <p>Last name: {props.info.lastName}</p>
            <p>Favorite color: {favColor}</p>
            <input placeholder='enter your favorite color here!' onChange={e => setFavColor(e.target.value)} />
        </div>
    )
};

export default Profile;