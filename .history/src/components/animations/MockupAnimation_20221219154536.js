import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
      <Wrapper>
        <Mockup1><Link to="https://www.tupperwarelochristi.be/" target="_blank" ><div className="mockup1" /></Link></Mockup1>
        <Mockup2><Link to="https://prosteam.be/" target="_blank" ><div className="mockup2" /></Link></Mockup2>
        <Mockup3><Link to="https://slickcoin.netlify.com/" target="_blank" ><div className="mockup3" /></Link></Mockup3>
        <Mockup4><Link to="/" target="_blank" ><div className="mockup4" /></Link></Mockup4>
        <Mockup5><Link to="https://bikera.org/" target="_blank" ><div className="mockup5" /></Link></Mockup5>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 1080px) {
    transform: scale(1);
  }

  @media (max-width: 960px) {
    transform: scale(0.7);
  }

  @media (max-width: 768px) {
    transform: scale(0.7);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.5);
  }

  @media (max-width: 540px) {
    transform: scale(0.3);
  }

  @media (max-width: 338px) {
    transform: scale(0.26);
  }

  .mockup1 {
    width: 183px;
    height: 120px;
    right: 0px;
    top: 0px;
    opacity: 90%;

    background: url("/images/animations/tupperware.svg"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }

  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 214px;
    top: 0px;
    opacity: 90%;

    background: url("/images/animations/prosteam.svg"),
      linear-gradient(
        198.85deg,
        #4316db 12.72%,
        #9076e7 54.49%,
        #a2eeff 100.01%
      );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.27304px rgba(255, 255, 255, 0.5);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16.3824px;
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 60px;
    opacity: 90%;

    background: url("/images/animations/slickcoin.svg"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 6.8461px;
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    left: 194px;
    top: 262px;
    opacity: 90%;

    background: url("/images/animations/spline-daccord.gif"),
      rgba(39, 20, 62, 0.3);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    left: 616px;
    top: 262px;
    opacity: 90%;

    background: url("/images/animations/bikera.svg"), 
      rgba(39, 20, 62, 0.2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }
`

const Mockup1 = styled.div`
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  `

const Mockup2 = styled.div`
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
  &.mockup2 {
      transition-delay: 0s;
      transform: translate(0px, -30px);
    }
    :hover {
    filter: brightness(150%) saturate(120%);
  }
  }  
`

const Mockup3 = styled.div`
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
  &.mockup3 {
      transition-delay: 0s;
    }
    :hover {
    filter: brightness(150%) saturate(120%);
  }
  }  
`

const Mockup4 = styled.div`
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
  &.mockup4 {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    :hover {
    filter: brightness(150%) saturate(120%);
  }
  }  
`

const Mockup5 = styled.div`
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
  &.mockup5 {
      transition-delay: 0.1s;
      transform: translate(-90px, 30px);
    }
    :hover {
    filter: brightness(150%) saturate(120%);
  }
  }  
`