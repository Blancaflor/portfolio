import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function AboutIcons() {
  return (
    <Wrapper>
      <h1>Our</h1>
      <p>Values</p>
      <Icon1>
        <Link to="#" target="_blank">
          <div className="icon1" />
        </Link>
      </Icon1>
      <Icon2>
        <Link to="#" target="_blank">
          <div className="icon2" />
        </Link>
      </Icon2>
      <Icon3>
        <Link to="#" target="_blank">
          <div className="icon3" />
        </Link>
      </Icon3>
      <Icon4>
        <Link to="#" target="_blank">
          <div className="icon4" />
        </Link>
      </Icon4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  top: 60px;
  height: 100px;
  gap: 50px;
  padding: 20px;
  width: 100%;
  justify-content: space-around;
  align-items: left;

  h1{
    color: white;
    font-weight: bold;
    font-size: 120%;
    margin: 40px 0 0 50px;
  }

  p{
    color: white;
    font-weight: bold;
    font-size: 90%;
    margin: 10px 0 0 50px;
  }

  @media (max-width: 1600px) {
    transform: scale(0.9);
  }

  @media (max-width: 1440px) {
    transform: scale(0.9);
  }

  @media (max-width: 1280px) {
    transform: scale(0.8);
  }

  @media (max-width: 960px) {
    transform: scale(0.8);
    transform-origin: top left;
  }

  @media (max-width: 768px) {
    transform: scale(0.8);
    transform-origin: top left;
  }

  @media (max-width: 540px) {
    transform: scale(0.7);
  }

  @media (max-width: 450px) {
    transform: scale(0.7);
  }

  @media (max-width: 338px) {
    transform: scale(0.6);
  }

  .icon1 {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 150px;
    left: 160px;
    background: url("/images/animations/html.png"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center;
    position: relative;

    ${Icon1, Icon2, Icon3, Icon4}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }

  .icon2 {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 270px;
    left: 160px;
    margin: 0;
    background: url("/images/animations/css.png"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  }

  .icon3 {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 380px;
    left: 160px;
    background: url("/images/animations/js.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  }

  .icon4 {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 480px;
    left: 160px;
    margin: 0;
    background: url("/images/animations/react.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  }
`

const Icon1 = styled.div`
  div {
    transform: rotateY(-10deg) rotateX(10deg);
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

const Icon2 = styled.div`
  div {
    transform: rotateY(-10deg) rotateX(10deg);
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

const Icon3 = styled.div`
  div {
    transform: rotateY(-10deg) rotateX(10deg);
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

const Icon4 = styled.div`
  div {
    transform: rotateY(-10deg) rotateX(10deg);
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
