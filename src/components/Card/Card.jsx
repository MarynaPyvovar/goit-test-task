import React from 'react';
import Button from 'components/Button/Button';

function Card({ data }) {
    const { id, user, isFollowed, tweets, followers, avatar } = data;
    return (
        <li>
            <img src={avatar} alt={user} />
            <p>{tweets} tweets</p>
            <p>{followers} {followers === 1 ? "follower" : "followers"}</p>
            <Button isFollowed={isFollowed} id={id} />
        </li>
    )
}

export default Card
