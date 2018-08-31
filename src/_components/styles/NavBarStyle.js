import styled from 'styled-components';

export const NavBarWrapper = styled.div `
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  min-width: 600px;
  width: 95%;
  margin: 15px;
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
`
export const TitleWrapper = styled.div `
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  font-weight: 700;
  margin: 5px 20px;
  color: rgb(225, 84, 0);
`

export const Tomato = styled.img.attrs({
  src: "/images/tomato.png"
}) `
  margin: 5px 0px;
  height: 75%;
`

export const LogoWrapper = styled.div`
  display: flex;
`
export const LinkList = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const LinkWrapper = styled.div`
`
