import Card from 'components/Card/Card';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from 'redux/usersSlice';

function CardList() {
    const { users } = useSelector(getUsers);

    return (
        <ul>
            {users.map((user => <Card key={user.id} data={user} />))}
        </ul>
    )
}

export default CardList
