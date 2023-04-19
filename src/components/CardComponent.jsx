import React from 'react';
import CardContainer from './CardComponent.styled';
import { BsPeopleFill, BsFillCloudsFill, BsChevronBarDown, BsImageAlt } from 'react-icons/bs';

const CardComponent = ({ currentPlanet }) => {
  const handlePopulationIntl = (planetPopulation) => {
    if (planetPopulation === 'unknown') return planetPopulation;
    const newFormat = parseInt(planetPopulation);
    return new Intl.NumberFormat().format(newFormat).replace(/,/g, '.');
  };

  return (
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
  );
};

export default CardComponent;
