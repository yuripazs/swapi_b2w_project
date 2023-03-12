import axios from 'axios';

const swapiPlanetClient = async () => {
  try {
    const result = await axios.get(`https://swapi.dev/api/planets/2`);
    return result.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default swapiPlanetClient;
