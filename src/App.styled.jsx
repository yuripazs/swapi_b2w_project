import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #170727;
  /* background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'); */
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const IntroductionDiv = styled.div`
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
