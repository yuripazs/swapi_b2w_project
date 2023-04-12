import axios from 'axios';

const swapiPlanetClient = async (randomNumber) => {
  try {
    const result = await axios.get(`https://swapi.dev/api/planets/${randomNumber}`);

    return result.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default swapiPlanetClient;
