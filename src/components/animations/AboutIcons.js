import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function AboutIcons() {
  return (
    <Wrapper>
      <h1>Our</h1>
      <p>Values</p>
      <IconWrapper>
          <Icon1 src="/images/animations/html.png" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <IconWrapper>
          <Icon2 src="/images/animations/css.png" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <IconWrapper>
          <Icon3 src="/images/animations/js.png" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <IconWrapper>
          <Icon4 src="/images/animations/react.png" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  height: 100px;
  gap: 50px;
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: left;

  h1{
    color: white;
    font-weight: bold;
    font-size: 120%;
    text-align: center;
    margin-top: 20px;
  }

  p{
    color: white;
    font-weight: bold;
    font-size: 90%;
    text-align: center;
    margin-top: 10px;
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
`

const Icon1 = styled.img`
  width: 64px;
  height: 64px;
`

const Icon2 = styled.img`
  width: 64px;
  height: 64px;
`

const Icon3 = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
const Icon4 = styled.img`
  width: 64px;
  height: 64px;
`

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  @media (max-width: 2560px) {
    margin: 80px 0 30px 150px;
  }
  
  @media (max-width: 1920px) {
    margin: 80px 0 30px 150px;
  }

  @media (max-width: 1600px) {
    margin: 80px 0 30px 130px;
  }

  @media (max-width: 1440px) {
    margin: 80px 0 30px 110px;
  }

  @media (max-width: 1360px) {
    margin: 80px 0 30px 100px;
  }

  @media (max-width: 1280px) {
    margin: 80px 0 30px 90px;
  }

  @media (max-width: 960px) {
    margin: 80px 0 30px 80px;
  }

  @media (max-width: 720px) {
    margin: 80px 0 30px 70px;
  }

  @media (max-width: 540px) {
    margin: 80px 0 30px 50px;
  }

  @media (max-width: 450px) {
    margin: 80px 0 30px 40px;
  }

  @media (max-width: 338px) {
    margin: 80px 0 30px 30px;
  }

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
        transform: scale(1.2);
    }
  }

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`

const Ring = styled.img`
  position: absolute;
  top: -30px;
  left: -25px;
  width: 127px;
  height: 127px;
  display: grid;
  align-content: center;

  ${IconWrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`