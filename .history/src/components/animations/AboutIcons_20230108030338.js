import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
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

  .Icon1 {
    position: absolute;
    width: 183px;
    height: 120px;
    background: url("/images/animations/html.png"), 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }

  .Icon2 {
    position: absolute;
    width: 183px;
    height: 120px;
    background: url("/images/animations/css.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }

  .Icon3 {
    position: absolute;
    width: 183px;
    height: 120px;
    background: url("/images/animations/js.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }

  .Icon4 {
    position: absolute;
    width: 183px;
    height: 120px;
    background: url("/images/animations/react.png")
    , 
    rgba(23, 12, 61, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }
`

const Icon1 = styled.div``

const Icon2 = styled.div``

const Icon3 = styled.div`

  `

const Icon4 = styled.div`
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
