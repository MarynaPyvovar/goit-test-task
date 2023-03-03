import styled from '@emotion/styled';
import logo from 'assets/logo/Logo.png';
import back from 'assets/backgrounds/card-backg.png';

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  padding: 28px 36px 36px 36px;
  margin: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardBackImage = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${back});
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const StyledLine = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  z-index: 1;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: -25px;
  margin-bottom: 26px;
`;

export const AvatarShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: transparent;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 10;
`;

export const UserAvatar = styled.img`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  z-index: 2;
`;

export const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  list-style: none;
`;

export const Text = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 16px 0;

  &:last-child {
    margin-bottom: 26px;
  }
`;
