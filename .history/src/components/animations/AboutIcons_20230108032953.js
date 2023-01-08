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

  .Icon1 {
    position: absolute;
    background: url("/images/animations/html.png");
  }

  .Icon2 {
    position: absolute;
    background: url("/images/animations/css.png");
  }

  .Icon3 {
    position: absolute;
    
    background: url("/images/animations/js.png");
  }

  .Icon4 {
    position: absolute;
    
    background: url("/images/animations/react.png")
  }
`

const Icon1 = styled.div``

const Icon2 = styled.div``

const Icon3 = styled.div``

const Icon4 = styled.div``
