import React from 'react'
import styled from 'styled-components'
import { tooltipData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'

export default function MenuTooltip(props) {
  const { isOpen } = props 
  return (
      <Wrapper isOpen={isOpen}>
        {tooltipData.map((item, index) => (
          <MenuButton item={item} key={index} />  
        ))}
      </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 380px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props => 
    props.isOpen
      ? "skew(0deg) rotate(0deg) translateY(0px)" 
      : "skew(-3deg) rotate(5deg) translateY(-30px)"};


  @media (max-width: 768px) {
    right: 120px;
  }

  @media (max-width: 450px) {
    right: 60px;
  }    
`