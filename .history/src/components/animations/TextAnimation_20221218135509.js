import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
      <Wrapper>Swift</Wrapper>
    )
}

const animation = keyframes`
  0% { opacity: 0;}
  100% {}
`

const Wrapper = styled.span``