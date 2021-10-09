<template>
  <v-container grid-list-md>
    <logo />
    <div class="search">
      <input
        type="text"
        v-model="searchInput"
        placeholder="Busca por nombre o por id..."
      />
      <div class="icon" @click="search">
        <box-icon name="search" color="white"></box-icon>
      </div>
    </div>
    <error
      :msg="'No se encontro ningun resultado con esa busqueda'"
      v-if="showError"
      @close="closeError"
    />
    <pokemon-list v-if="!searchData" />
    <pokemon-cart v-else :p="searchData" />
    <div class="buttons" v-if="!searchData">
      <button @click="getPrevius" v-if="previous">Pagina Anterior</button>
      <button @click="getNext" v-if="next">
        Página Siguiente
      </button>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import PokemonList from "../components/Pokemons/PokemonList";
import api from "@/api";
import PokemonCart from "@/components/Pokemons/PokemonCart";
import Error from "@/components/global/Error";
import Logo from "@/components/global/Logo";

export default {
  name: "Home",
  components: { PokemonList, PokemonCart, Error, Logo },
  data() {
    return {
      searchInput: "",
      searchData: "",
      showError: false,
    };
  },
  created() {
    if (this.pokemons.length) {
      return;
    }
    this.getPokemos();
  },
  methods: {
    getPokemos() {
      this.$store.dispatch("getPokemos");
    },
    getNext() {
      this.$store.dispatch("getNextPage");
    },
    getPrevius() {
      this.$store.dispatch("getPreviousPage");
    },
    search() {
      api
        .searchPokemon(this.searchInput)
        .then((res) => {
          this.searchData = res;
        })
        .catch(() => {
          this.showError = true;
        });
    },
    closeError() {
      this.showError = false;
    },
  },
  computed: {
    ...mapState(["pokemons", "isLoading", "next", "previous"]),
  },
  watch: {
    searchInput() {
      if (!this.searchInput) {
        this.searchData = "";
      }
    },
    showError() {
      if (this.showError) {
        setTimeout(() => {
          this.closeError();
        }, 50000);
      }
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.search input {
  outline: none;
  border: 1px white solid;
  width: 90%;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  color: white;
}
.search .icon {
  cursor: pointer;
  width: 10%;
  border: 1px solid white;
  border-radius: 0 5px 5px 0;
  padding: 7.5px 0;
  display: flex;
  justify-content: center;
  transition-duration: 500;
}
.search .icon:hover {
  transform: scale(1.1);
}
.buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
}
button {
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
