import React from 'react';
import styled from 'styled-components';

const TextComponentStyle = styled.div`
  width: 500px;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inconsolata', monospace;
  

  h1 {
    margin-bottom: 2.2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 200;
  }
`;



const TextCardComponent = ({ children }) => {
  return <TextComponentStyle>{children}</TextComponentStyle>;
};

export default TextCardComponent;
