import Axios from "axios";
const urlBase = "https://pokeapi.co/api/v2";
const limit = 20;

const getPokemons = (url = '') => {
  if(!url){
    url = `${urlBase}/pokemon?offset=0&limit=${limit}`
  }
  return Axios.get(url).then((res) => res.data);
};

const getPokemon = (url) => {
    return Axios.get(url).then(res=>res.data)
}

const searchPokemon = (search) => {
  const url = `${urlBase}/pokemon/${search}`;
  return Axios.get(url).then(res=>res.data);
}

export default {
  getPokemons,
  getPokemon,
  searchPokemon
};
