import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
      <Wrapper>
        <Icon1><Link to="#" target="_blank" ><div className="mockup1" /></Link></Mockup1>
        <Icon2><Link to="#" target="_blank" ><div className="mockup2" /></Link></Mockup2>
        <Icon3><Link to="#" target="_blank" ><div className="mockup3" /></Link></Mockup3>
        <Icon4><div className="mockup4" /></Mockup4>
        <Icon5><Link to="#" target="_blank" ><div className="mockup5" /></Link></Mockup5>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
`