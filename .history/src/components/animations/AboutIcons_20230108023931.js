import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
      <Wrapper>
        <Icon1><Link to="#" target="_blank" ><div className="icon1" /></Link></Icon1>
        <Icon2><Link to="#" target="_blank" ><div className="icon2" /></Link></Icon2>
        <Icon3><Link to="#" target="_blank" ><div className="icon3" /></Link></Icon3>
        <Icon4><div className="mockup4" /></Icon4>
        <Icon5><Link to="#" target="_blank" ><div className="mockup5" /></Link></Icon5>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
`