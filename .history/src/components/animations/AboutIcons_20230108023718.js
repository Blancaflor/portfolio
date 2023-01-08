import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MockupAnimation() {
    return (
      <Wrapper>
        <Ico><Link to="#" target="_blank" ><div className="mockup1" /></Link></Mockup1>
        <Ico><Link to="#" target="_blank" ><div className="mockup2" /></Link></Mockup2>
        <Ico><Link to="#" target="_blank" ><div className="mockup3" /></Link></Mockup3>
        <Ico><div className="mockup4" /></Mockup4>
        <Ico><Link to="#" target="_blank" ><div className="mockup5" /></Link></Mockup5>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
`