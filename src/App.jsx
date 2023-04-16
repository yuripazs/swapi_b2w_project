import { Body, CardContainer, IntroductionDiv, RandomButton } from './App.styled';
import swapiPlanetClient from './swapiPlanetClient';
import { BsPeopleFill, BsFillCloudsFill, BsChevronBarDown, BsImageAlt } from 'react-icons/bs';
import { RiSpaceShipLine } from 'react-icons/ri';
import { useState } from 'react';
import { LoaderCard } from './components/Loader';

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
      }, 0);
      return;
    }

    setVisitedAllPlanets(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  };

  const restartTrip = () => {
    setVisitedAllPlanets(false);
    // setLoading(true);

    setVisitedPlanets(visitedPlanets.slice(-1));

    travelToANewPlanet();

    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
  };

  const handlePopulationIntl = (planetPopulation) => {
    if (planetPopulation === 'unknown') return planetPopulation;
    const newFormat = parseInt(planetPopulation);
    return new Intl.NumberFormat().format(newFormat).replace(/,/g, '.');
  };

  return (
    <Body>
      <div className='bg-image-container'></div>

      {!currentPlanet ? (
        <>
          {loading ? (
            <LoaderCard />
          ) : (
            <IntroductionDiv>
              <h1>Bem-Vindo </h1>
              <h2>
                Você está prestes a iniciar uma viagem pela galaxia Star Wars. <br /> Para conhecer
                um pouco mais de informações sobre os planetas desse universo clique em "Iniciar
                jornada"
              </h2>
              <RandomButton onClick={travelToANewPlanet}>INICIAR JORNADA</RandomButton>
            </IntroductionDiv>
          )}
        </>
      ) : (
        ''
      )}

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
                  <RandomButton onClick={restartTrip}>RECOMECAR JORNADA JORNADA</RandomButton>
                </IntroductionDiv>
              )}
            </>
          )}
        </>
      )}
    </Body>
  );
}

export default App;
