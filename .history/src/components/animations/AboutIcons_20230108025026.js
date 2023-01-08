import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
        <Wrapper>
            <Icon1><Link to="#" target="_blank" ><div className="icon1" /></Link></Icon1>
            <Icon2><Link to="#" target="_blank" ><div className="icon2" /></Link></Icon2>
            <Icon3><Link to="#" target="_blank" ><div className="icon3" /></Link></Icon3>
            <Icon4><div className="icon4" /></Icon4>
            <Icon5><Link to="#" target="_blank" ><div className="icon5" /></Link></Icon5>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  .Icon1 {
    background: url("/images/animations/html.png")
  }

  .Icon2 {
    background: url("/images/animations/css.png")
  }

  .Icon3 {
    background: url("/images/animations/js.png")
  }

  .Icon4 {
    background: url("/images/animations/.")
  }

  .Icon5 {
    background: url("/images/animations/bikera.svg")
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
  &.mockup1 {
    transition-delay: 0.1s;
    transform: translate(-30px, -30px);
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
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
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
  &.mockup1 {
    transition-delay: 0.1s;
    transform: translate(-30px, -30px);
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
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  `
