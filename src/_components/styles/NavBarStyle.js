import styled from 'styled-components';

export const NavBarWrapper = styled.div `
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 95%;
  min-width: 650px;
  margin: 15px;
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
`
export const TitleWrapper = styled.div `
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  font-weight: 700;
  margin: 5px 20px;
  color: green;
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
export const LinkWrapper = styled.button`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  text-decoration: none;
  height: 55px;
  width: 110px;
  background-color: rgba(255,250,250, 0.8);
  margin: 10px;
  margin-top: 15px;
  color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
`
