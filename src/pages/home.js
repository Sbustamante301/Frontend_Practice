import React from "react";
import styled from "@emotion/styled";
import imagen from "../assets/PS_logo 1.svg"
import { Global,css } from "@emotion/react";



const GlobalStyles = css`
  body {
    margin: 0;  
    padding: 0;
  }
`;

const Home = styled.section`
width: 100%;
height: 100vh;
background-image:url(https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1600);
background-size: cover;
background-position: center;
`;

const Cover = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,.6);
display:flex;
align-items: center;
justify-content: center;


`;

const Navbar = styled.div`
width: 100%;
height: 72px;
display: flex;
align-items:center;
justify-content: space-between;
background-color:green;
padding: 0 24px;
box-sixing:border-box;
position:fixed;


`;

const Span = styled.span`



`;
const H1 = styled.h1`
font-size: 54px;
`;

const BtnPrimary = styled.button`



`;
const BtnSecondary = styled.button`



`;

const Content = styled.div`
text-align:center;
background-color:brown;
font-size:20px;




`;

function HomePage() {


  return (
    <>
    <Global styles={GlobalStyles} />
    <Home>
      <Navbar>
        <img src={imagen} />
        <div>
        <Span>Sign in</Span>
        <BtnSecondary>TRY FOR FREE</BtnSecondary>
        </div>
      </Navbar>
      <Cover>
      <Content>
        <H1>Build better products </H1>
        <p>Your customers won’t settle and neither should you. With Pluralsight, technology teams know more and work better together.</p>
        <div>
          <BtnPrimary>PLANS</BtnPrimary>
          <BtnSecondary>TRY FOR FREE</BtnSecondary>
        </div>
      </Content>
      </Cover>
    </Home>
    </>
  );

}

export default HomePage