import styled from 'styled-components';
import React from 'react';
import { RiSpaceShipLine } from 'react-icons/ri';

const RandomButton = styled.button`
  width: 400px;
  background-color: #170727;
  border: 1px solid #fff;

  padding: 1rem 2rem;
  border-radius: 12px;
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #31065d;
  }
`;

const NavigateButton = ({ children, onClick }) => {
  return (
    <RandomButton onClick={onClick}>
      {children}
      <RiSpaceShipLine style={{ transform: 'rotate(45deg)', marginLeft: '.8rem' }} />
    </RandomButton>
  );
};

export default NavigateButton;
