import styled from 'styled-components';

const CardContainer = styled.div`
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

export default CardContainer;
