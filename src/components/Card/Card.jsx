import Button from 'components/Button/Button';
import { CardWrapper, CardBackImage, Logo, StyledLine, UserAvatar, TextList, Text, AvatarWrapper, AvatarShadow } from 'components/Card/Card.styled';

function Card({ data }) {
    const { id, user, isFollowed, tweets, followers, avatar } = data;

    const formatedFollowers = followers.toLocaleString('en-US');

    return (
        <CardWrapper>
            <CardBackImage />
            <Logo />
            <StyledLine />
            <AvatarWrapper>
                <UserAvatar src={avatar} alt={user} width='80px' />
                <AvatarShadow />
            </AvatarWrapper>
            <TextList>
                <Text>{tweets} tweets</Text>
                <Text>{formatedFollowers} {followers === 1 ? "follower" : "followers"}</Text>
            </TextList>
            <Button isFollowed={isFollowed} id={id} />
        </CardWrapper>
    )
}

export default Card
