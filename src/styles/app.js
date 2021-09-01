import styled from 'styled-components'

export const Header = styled.header`
    background: #007fab;
    position: relative;
    background-image: linear-gradient(to right, #0EBCE7, #223A8A);
    padding: 1rem 0 1rem;
    text-align: right;
    
    strong{
      color: #fff;
      font-size: 1.8rem;
    }
    a {
      color: #fff;
      font-size: 1.8rem;
    }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 1rem;
  margin-left: 0.8rem;
  color: #fff;
  text-shadow: 1px 1px 0 #0000004d;


`;

export const Subtitle = styled.h1`
    color: #fff;
    margin-top: -10px;
    margin-left: -710px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MSubtitle = styled.h1`
    color: #333;
    margin-top: -6.5rem;
    margin-left: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1.4rem 0 1.4rem;
  font-size: 15px;
  color: #333;
  opacity: 0.8;
  margin-top: -5rem;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 35px;
  padding: 1rem 0 1rem;
  color: #fff;
  margin-top: 1.3rem;
  margin-left: 40px;

`;

export const CardSubtitle = styled.h2`
  text-align: center;
  font-size: 25px;
  padding: 1rem 0 1rem;
  color: #fff;
  margin-top: 0.4rem;
  margin-left: 20px;
  margin-right: 20px;

`;

export const MenuSubtitle = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 1rem 0 1rem;
  color: #000;
  margin-top: 0.4rem;
  margin-left: 20px;
  margin-right: 20px;

`;

export const OptionSubtitle = styled.h2`
  text-align: center;
  font-size: 45px;
  padding: 1rem 0 1rem;
  color: #000;
  margin-top: -150px;
  margin-left: 220px;
  margin-right: 20px;

`;