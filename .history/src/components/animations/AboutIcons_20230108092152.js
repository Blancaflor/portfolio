import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function AboutIcons() {
    return (
        <Wrapper>
            <Icon1><Link to="#" target="_blank" ><div className="icon1" /></Link></Icon1>
            <Icon2><Link to="#" target="_blank" ><div className="icon2" /></Link></Icon2>
            <Icon3><Link to="#" target="_blank" ><div className="icon3" /></Link></Icon3>
            <Icon4><Link to="#" target="_blank" ><div className="icon4" /></Link></Icon4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  top: 60px;
  display: grid;
  grid-template-columns: 30px auto;
  width: 100%;
  justify-content: space-around;
  padding: 0 30px 0 22px;
  align-items: center;

  @media (max-width: 1600px) {
    transform: scale(0.9);
  }

  @media (max-width: 1440px) {
    transform: scale(0.8);
  }

  @media (max-width: 1280px) {
    transform: scale(0.6);
  }

  @media (max-width: 960px) {
    transform: scale(0.6);
    transform-origin: top left;
  }

  @media (max-width: 768px) {
    transform: scale(0.5);
 
  }

  @media (max-width: 540px) {
    transform: scale(0.35);
  }

  @media (max-width: 450px) {
    transform: scale(0.26);
  }

  @media (max-width: 338px) {
    transform: scale(0.26);
  }

  .icon1 {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 60px;
    left: 250px;
    background: url("/images/animations/html.png"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 50%;
  }

  .icon2 {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 60px;
    left: 250px;
    background: url("/images/animations/css.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 50%;
  }

  .icon3 {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 180px;
    left: 250px;
    background: url("/images/animations/js.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 50%;
  }

  .icon4 {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 180px;
    left: 250px;
    background: url("/images/animations/react.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 50%;
  }
`

const Icon1 = styled.div``

const Icon2 = styled.div``

const Icon3 = styled.div``

const Icon4 = styled.div``
