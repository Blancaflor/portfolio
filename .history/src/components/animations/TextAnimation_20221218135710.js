import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
      <Wrapper>Swift</Wrapper>
    )
}

const animation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const Wrapper = styled.span`
  opacity: 
  animation-name: ${animation}
  animation-duration: 6s;
  animation-: ;
`