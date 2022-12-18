import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
      <Wrapper>
        <Link to="https://www.tupperwarelochristi.be/" target="_blank" ><div id="moc1" className="mockup1" /></Link>
        <Link to="https://prosteam.be/" target="_blank" ><div id="moc2" className="mockup2" /></Link>
        <Link to="https://slickcoin.netlify.com/" target="_blank" ><div id="moc3" className="mockup3" /></Link>
        <Link to="/" target="_blank" ><div id="moc4" className="mockup4" /></Link>
        <Link to="https://bikera.org/" target="_blank" ><div id="moc5" className="mockup5" /></Link>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover #moc1 {
    transform: rotateY(0deg) rotateX(0deg);
    .mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
  }
  :hover #moc2 {
    transform: rotateY(0deg) rotateX(0deg);
    .mockup2 {
      transition-delay: 0s;
      transform: translate(0px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  :hover #moc3 {
    transform: rotateY(0deg) rotateX(0deg);
    .mockup3 {
      transition-delay: 0s;
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  :hover #moc4 {
    transform: rotateY(0deg) rotateX(0deg);
    .mockup4 {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  :hover #moc5 {
    transform: rotateY(0deg) rotateX(0deg);
    .mockup5 {
      transition-delay: 0.1s;
      transform: translate(-90px, 30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    width: 183px;
    height: 120px;
    right: 0px;
    top: 0px;
    opacity: 90%;

    background: url("/images/animations/tupperware.svg"), 
      radial-gradient(
        218.51% 281.09% at 100% 100%,
        rgba(253, 63, 51, 0.6) 0%,
        rgba(76, 0, 200, 0.6) 45.83%,
        rgba(76, 0, 200, 0.6) 100%
      );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
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