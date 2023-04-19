import { Body } from './App.styled';
import swapiPlanetClient from './swapiPlanetClient';
import React, { useState } from 'react';
import { LoaderCard } from './components/Loader';
import CardComponent from './components/CardComponent';
import NavigateButton from './components/NavigateButton';
import TextCardComponent from './components/TextCardComponent';

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
      {loading ? (
        <LoaderCard />
      ) : !currentPlanet ? (
        <TextCardComponent>
          <h1>Bem-Vindo </h1>
          <h2>
            Você está prestes a iniciar uma viagem pela galaxia Star Wars.
            <br /> Para conhecer um pouco mais de informações sobre os planetas desse universo
            clique em "Iniciar jornada"
          </h2>
          <NavigateButton onClick={travelToANewPlanet}>INICIAR JORNADA</NavigateButton>
        </TextCardComponent>
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
            <TextCardComponent>
              <h1>Terminou a viagem </h1>
              <h2>Você</h2>
              <NavigateButton onClick={restartTrip}>RECOMEÇAR JORNADA</NavigateButton>
            </TextCardComponent>
          )}
        </>
      )}
    </Body>
  );
}

export default App;
