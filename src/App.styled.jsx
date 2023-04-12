import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardContainer = styled.div`
  width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #2c0556;
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
    width: 80%;
    text-align: center;
    border-bottom: 1px solid white;
    border-top: 1px solid white;

    i {
      font-size: 0.8rem;
      margin-right: 0.75rem;
    }
  }

  .info-div {
    display: flex;
    margin-bottom: 10px;

    .info-spam {
      font-size: 1rem;
      margin-bottom: 12px;
      margin-left: 8px;
    }
  }

  .terrains-div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 350px;
  }

  .info-spam.map {
    border: 1px solid white;
    border-radius: 5px;
    padding: 1px 6px;
    margin-right: 10px;
  }
`;

// export const CardContainer = styled.div`
//   width: 100%;
//   max-width: 450px;
//   padding: 2rem;
//   border-radius: 0.8rem;
//   border-radius: 3rem;
//   background-color: #2c0556;
//   color: white;

//   h1 {
//     font-family: 'Righteous', cursive;
//     font-size: 2.5rem;
//     margin-bottom: 25px;
//   }

//   p {
//     font-family: 'Oxanium', cursive;
//     font-size: 1.2rem;
//     margin-bottom: 5px;
//   }

//   .info-div {
//     display: flex;

//     margin-bottom: 10px;

//     i {
//       font-size: 1.2rem;
//     }

//     .info-spam {
//       font-size: 1rem;
//       margin-bottom: 12px;
//       margin-left: 8px;
//     }
//   }

//   .terrains-div {
//     display: flex;
//     flex-wrap: wrap;
//     max-width: 350px;
//   }

//   .info-spam.terrains {
//     border: 1px solid white;
//     border-radius: 5px;
//     padding: 1px 6px;
//     margin-right: 10px;
//   }
// `;

export const RandomButton = styled.button`
  background-color: #2c0556;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  border-radius: 35px;
  color: white;
  font-size: 1.35rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3b0772;
  }
`;
