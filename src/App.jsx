import { Body, CardContainer, RandomButton } from './App.styled';
import swapiPlanetClient from './swapiPlanetClient';
import { BsPeopleFill, BsFillCloudsFill, BsChevronBarDown, BsImageAlt } from 'react-icons/bs';
import { useState } from 'react';
import { LoaderCard } from './components/Loader';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('');
  const [visitedPlanets, setVisitedPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  const travelToANewPlanet = async () => {
    // Criar um numero randômico
    const randomNumber = Math.ceil(Math.random() * 60);
    // Fazer a requisição da api com o numero do planeta
    const newPlanet = await swapiPlanetClient(randomNumber);

    // Se o novo planeta já estiver incluso no array de planeta visitados, rodar novamente a função travelToANewPlanet como uma forma de receber apenas planetas que não foram ainda visitados (função recursiva)
    if (visitedPlanets.includes(newPlanet.url)) return travelToANewPlanet();

    // Passando por essa etapa, aqui vamos mudar o estado do planeta atual (currentPlanet) e também alterar o estado dos tipo de terreno do planeta (currentPlanetTerrains) e por ultimo adicionar o planeta atual na lista de planetas visitados.
    setCurrentPlanet(newPlanet);
    //
    //
    setVisitedPlanets([...visitedPlanets, newPlanet.url]);
    //
    setLoading(false);
  };

  const handleSubmit = () => {
    // Nessa linha alterei o estado do planeta atual
    setLoading(true);
    // Ajustar depois
    // if (visitedPlanets.length >= 60) return;

    setTimeout(() => {
      travelToANewPlanet();
    }, 1200);
  };

  const handlePopulationIntl = (planetPopulation) => {
    if (planetPopulation === 'unknown') return planetPopulation;

    const novoFormato = parseInt(planetPopulation);
    return new Intl.NumberFormat().format(novoFormato).replace(/,/g, '.');
  };

  return (
    <Body>
      <div className='bg-image-container'></div>

      {!currentPlanet ? (
        <>
          {loading ? (
            <LoaderCard />
          ) : (
            <RandomButton onClick={handleSubmit}>Começar a jornada !!!!</RandomButton>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <LoaderCard />
          ) : (
            <CardContainer>
              <h1> {currentPlanet.name} </h1>
              <p className='title'>
                <i>
                  <BsPeopleFill />
                </i>
                População
              </p>
              <div className='info-div'>
                <p className='info-spam'> {handlePopulationIntl(currentPlanet.population)} </p>
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
                {/* // Modificar // */}
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
                <div className='terrains-div'>
                  {/* // Modificar // */}
                  {currentPlanet &&
                    currentPlanet.terrain.split(', ').map((ter, i) => (
                      <p className='info-spam map' key={i + 1}>
                        {ter.charAt(0).toUpperCase() + ter.slice(1)}
                      </p>
                    ))}
                </div>
              </div>
            </CardContainer>
          )}
          <RandomButton onClick={handleSubmit}>Viajar para um novo planeta</RandomButton>
        </>
      )}
    </Body>
  );
}

export default App;
