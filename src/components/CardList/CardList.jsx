import Card from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { getUsers } from 'redux/usersSlice';
import { List } from 'components/CardList/CardList.styled';

function CardList() {
    const { users } = useSelector(getUsers);

    return (
        <List>
            {users.map((user => <Card key={user.id} data={user} />))}
        </List>
    )
}

export default CardList
