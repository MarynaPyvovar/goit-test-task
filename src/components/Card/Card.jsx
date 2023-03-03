import React from 'react';
import Button from 'components/Button/Button';

function Card({ data }) {
    const { id, user, isFollowed, tweets, followers, avatar } = data;
    
    const formatedFollowers = followers.toLocaleString('en-US');

    return (
        <li>
            <img src={avatar} alt={user} />
            <p>{tweets} tweets</p>
            <p>{formatedFollowers} {followers === 1 ? "follower" : "followers"}</p>
            <Button isFollowed={isFollowed} id={id} />
        </li>
    )
}

export default Card
