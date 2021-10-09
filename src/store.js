import Vue from "vue";
import Vuex from "vuex";

import api from "./api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    pokemons: [],
    next: null,
    previous: null,
  },
  mutations: {
    setPokemons(state, payload) {
      state.isLoading = true;
      Vue.set(state, "pokemons", payload);
      state.isLoading = false;
    },
  },
  actions: {
    async getPokemos(context) {
      context.state.isLoading = true;
      let pokemonsResults = [];
      let pokemones = [];
      await api.getPokemons().then((res) => {
        context.state.next = res.next;
        context.state.previous = res.previous;
        pokemonsResults = res.results;
      });
      pokemonsResults.map(async (pokemon) => {
        await api.getPokemon(pokemon.url).then((res) => {
          pokemones.push(res);
        });
      });
      context.commit("setPokemons", pokemones);
      context.state.isLoading = false;
    },
    async getNextPage(context) {
      context.state.isLoading = true;
      let pokemonsResults = [];
      let pokemones = [];
      await api.getPokemons(context.state.next).then((res) => {
        context.state.next = res.next;
        context.state.previous = res.previous;
        pokemonsResults = res.results;
      });
      pokemonsResults.map(async (pokemon) => {
        await api.getPokemon(pokemon.url).then((res) => {
          pokemones.push(res);
        });
      });
      context.commit("setPokemons", pokemones);
      context.state.isLoading = false;
    },
    async getPreviousPage(context) {
      context.state.isLoading = true;
      let pokemonsResults = [];
      let pokemones = [];
      await api.getPokemons(context.state.previous).then((res) => {
        context.state.next = res.next;
        context.state.previous = res.previous;
        pokemonsResults = res.results;
      });
      pokemonsResults.map(async (pokemon) => {
        await api.getPokemon(pokemon.url).then((res) => {
          pokemones.push(res);
        });
      });
      context.commit("setPokemons", pokemones);
      context.state.isLoading = false;
    },
  },
});

export default store;
