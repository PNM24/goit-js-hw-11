import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_4PIYHdPqBcoxg54c42W2NCUqi89UfZwsVslGREMvP6gir9A40p7H0OXlxTbk65uT';

const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};

export { fetchBreeds, fetchCatByBreed };