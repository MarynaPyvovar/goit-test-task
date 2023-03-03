import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFollowing } from 'redux/usersSlice';

function Button({ isFollowed, id }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFollowing(id))
    }
    
    return (
        <button onClick={handleClick}>
            {isFollowed ? "Following" : "Follow"}
        </button>
    )
}

export default Button
