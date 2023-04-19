import { Body, IntroductionDiv } from './App.styled';
import swapiPlanetClient from './swapiPlanetClient';

import { useState } from 'react';
import { LoaderCard } from './components/Loader';
import CardComponent from './components/CardComponent';
import NavigateButton from './components/NavigateButton';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('');
  const [visitedPlanets, setVisitedPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visitedAllPlanets, setVisitedAllPlanets] = useState(false);

  const travelToANewPlanet = async () => {
    setLoading(true);

    if (visitedPlanets.length < 4) {
      const randomNumber = Math.ceil(Math.random() * 4);
      const newPlanet = await swapiPlanetClient(randomNumber);

      if (visitedPlanets.includes(newPlanet.url)) return travelToANewPlanet();

      setCurrentPlanet(newPlanet);
      setVisitedPlanets([...visitedPlanets, newPlanet.url]);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return;
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setVisitedAllPlanets(true);
  };

  const restartTrip = () => {
    setVisitedAllPlanets(false);
    setLoading(true);

    setVisitedPlanets(visitedPlanets.slice(-1), travelToANewPlanet);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Body>
      <div className='bg-image-container'></div>

      {loading ? (
        <LoaderCard />
      ) : !currentPlanet ? (
        <IntroductionDiv>
          <h1>Bem-Vindo </h1>
          <h2>
            Você está prestes a iniciar uma viagem pela galaxia Star Wars. <br /> Para conhecer um
            pouco mais de informações sobre os planetas desse universo clique em "Iniciar jornada"
          </h2>
          <NavigateButton onClick={travelToANewPlanet}>INICIAR JORNADA</NavigateButton>
        </IntroductionDiv>
      ) : (
        <>
          {!visitedAllPlanets ? (
            <>
              <CardComponent currentPlanet={currentPlanet} />
              <NavigateButton onClick={travelToANewPlanet}>
                Viajar para um novo planeta
              </NavigateButton>
            </>
          ) : (
            <IntroductionDiv>
              <h1>Terminou a viagem </h1>
              <h2>Você</h2>
              <NavigateButton onClick={restartTrip}>RECOMEÇAR JORNADA </NavigateButton>
            </IntroductionDiv>
          )}
        </>
      )}

      {/* 
      {currentPlanet && (
        <>
          {loading ? (
            <LoaderCard />
          ) : (
            <>
              {!visitedAllPlanets ? (
                <>
                  <CardContainer>
                    <h1> {currentPlanet.name} </h1>
                    <p className='title'>
                      <i>
                        <BsPeopleFill />
                      </i>
                      População
                    </p>
                    <div className='info-div'>
                      <p className='info-spam'>{handlePopulationIntl(currentPlanet.population)}</p>
                    </div>
                    <p className='title'>
                      <i>
                        <BsChevronBarDown />
                      </i>
                      Gravidade
                    </p>
                    <div className='info-div'>
                      <p className='info-spam'> {currentPlanet.gravity} </p>
                    </div>
                    <p className='title'>
                      <i>
                        <BsFillCloudsFill />
                      </i>
                      Clima
                    </p>
                    <div className='info-div'>
                      {currentPlanet &&
                        currentPlanet.climate.split(', ').map((climate, i) => (
                          <p className='info-spam map' key={i + 1}>
                            {climate.charAt(0).toUpperCase() + climate.slice(1)}
                          </p>
                        ))}
                    </div>
                    <p className='title'>
                      <i>
                        <BsImageAlt />
                      </i>
                      Terreno
                    </p>
                    <div className='info-div'>
                      {currentPlanet &&
                        currentPlanet.terrain.split(', ').map((ter, i) => (
                          <p className='info-spam map' key={i + 1}>
                            {ter.charAt(0).toUpperCase() + ter.slice(1)}
                          </p>
                        ))}
                    </div>
                  </CardContainer>
                  <RandomButton onClick={travelToANewPlanet}>
                    Visitar um novo planeta
                    <RiSpaceShipLine style={{ transform: 'rotate(45deg)', marginLeft: '.8rem' }} />
                  </RandomButton>
                </>
              ) : (
                <IntroductionDiv>
                  <h1>Terminou a viagem </h1>
                  <h2>Você</h2>
                  <RandomButton onClick={restartTrip}>RECOMEÇAR JORNADA JORNADA</RandomButton>
                </IntroductionDiv>
              )}
            </>
          )}
        </>
      )} */}
    </Body>
  );
}

export default App;
