import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = styled.div`
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .message_div {
    display: flex;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: white;
    font-family: 'Inconsolata', monospace;
    font-weight: 200;
  }

  h1.span {
    margin-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    width: 4rem;
    animation: type 1000ms steps(60, end);
    animation-iteration-count: infinite;
  }

  @keyframes type {
    from {
      width: 0;
    }
  }
`;
export const LoaderCard = () => {
  return (
    <Loader>
      <ThreeCircles
        height='100'
        width='100'
        color='#fff'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-circles-rotating'
        outerCircleColor=''
        innerCircleColor=''
        middleCircleColor=''
      />
      <div className='message_div'>
        <h1>Viajando para uma Galáxia distante </h1>
        <h1 className='span'>. . .</h1>
      </div>
    </Loader>
  );
};
