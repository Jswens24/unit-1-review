import React from 'react';

const Profile = (props) => {

    console.log(props);

    return (
        <div>
            {props.isMe && 'this is my profile'}
            <p>First name: {props.info.firstName}</p>
            <p>Last name: {props.info.lastName}</p>
            <p>Favorite color: {props.info.favoriteColor}</p>
        </div>
    )
};

export default Profile;