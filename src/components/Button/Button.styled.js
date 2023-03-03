import styled from '@emotion/styled';

export const CardButton = styled.button`
  width: 169px;
  padding: 14px;
  margin-top: 10px;

  text-transform: uppercase;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #373737;
  background: ${({ accent }) => (accent ? '#5cd3a8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3px;
`;
