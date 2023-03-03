import { useDispatch } from 'react-redux';
import { toggleFollowing } from 'redux/usersSlice';
import { CardButton } from 'components/Button/Button.styled';

function Button({ isFollowed, id }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFollowing(id))
    }
    
    return (
        <CardButton onClick={handleClick} accent={isFollowed}>
            {isFollowed ? "Following" : "Follow"}
        </CardButton>
    )
}

export default Button
