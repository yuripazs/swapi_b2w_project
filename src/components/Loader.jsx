import React from 'react';
import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = styled.div`
  width: 400px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
    color: white;
  }
`;
export const LoaderCard = () => {
  return (
    <Loader>
      <Bars
        height='120'
        width='120'
        color='#2c0556'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
      <h1>Viajando ...</h1>
    </Loader>
  );
};
