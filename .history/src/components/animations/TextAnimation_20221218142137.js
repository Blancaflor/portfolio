import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
      <Wrapper>Swift</Wrapper>
    )
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateY(0) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  75% { opacity: 1; transform: translateY(0) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  100% { opacity: 0; transform: translateY(-100px); }
`

const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`