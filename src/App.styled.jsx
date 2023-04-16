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

export const CardContainer = styled.div`
  width: 400px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background-color: #190b28;
  border: 10px double #fff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 2.5rem;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Oxanium', cursive;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .title {
    width: 100%;
    text-align: center;
    padding: 5px 0;
    background-color: #fff;
    color: #2c0556;

    i {
      font-size: 0.8rem;
      margin-right: 0.75rem;
    }
  }

  .info-div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

    .info-spam {
      font-size: 1rem;
      margin-bottom: 12px;
      margin-left: 8px;
    }
  }

  .info-spam.map {
    border: 1px solid white;
    border-radius: 5px;
    padding: 1px 6px;
    margin-right: 10px;
  }
`;

export const RandomButton = styled.button`
  width: 400px;
  background-color: #170727;
  border: 1px solid #fff;

  padding: 1rem 2rem;
  border-radius: 12px;
  color: white;
  font-size: 1.35rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #31065d;
  }
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
