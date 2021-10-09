<template>
  <v-container class="container">
    <loader v-if="isLoading" />
    <logo />
    <div class="options">
      <div class="option" @click="goBack">
        <box-icon name="arrow-back" color="white"></box-icon>
      </div>
    </div>
    <error
      :msg="'No se encontro ningun pokemon'"
      v-if="showError"
      @close="closeError"
    />
    <div class="pokemon">
      <div class="image">
        <img
          :src="pokemon.sprites.other.dream_world.front_default"
          :alt="pokemon.name"
        />
      </div>
      <div class="info">
        <p class="name">
          {{ pokemon.name | capitalize }}
        </p>
        <div class="types">
          <p class="type" v-for="type in pokemon.types" :key="type.slot">
            {{ type.type.name | capitalize }}
          </p>
        </div>
        <div class="specifics">
          <div class="specific">
            <img src="@/assets/img/footsteps.svg" alt="Moves" />
            <p class="title">Moves</p>
            <p class="count">{{ getMoves() }}</p>
          </div>
          <div class="specific">
            <img src="@/assets/img/pokemon_egg.svg" alt="Moves" />
            <p class="title">Abilities</p>
            <p class="count">{{ getAbilities() }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="general">
      <p>
        Specie <span>{{ pokemon.species.name | capitalize }}</span>
      </p>
      <p>
        Height <span>{{ (pokemon.height / 10).toFixed(2) }} m</span>
      </p>
      <p>
        Weight <span>{{ (pokemon.weight / 10).toFixed(2) }} kg</span>
      </p>
      <p>
        Abilities
        <span v-for="a in pokemon.abilities" :key="a.slot"
          >{{ a.ability.name | capitalize }}
        </span>
      </p>
    </div>
    <div class="stats">
      <div class="stat" v-for="stat in pokemon.stats" :key="stat.stat.name">
        <p>{{ stat.stat.name.toUpperCase() }}</p>
        <div class="bar">
          <div class="bar-container" :number="stat.base_stat"></div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import api from "@/api";
import Logo from "@/components/global/Logo";
import Error from "@/components/global/Error";
import Loader from "@/components/global/Loader";

export default {
  name: "Pokemon",
  components: { Logo, Error, Loader },
  data() {
    return {
      pokemon: {},
      showError: false,
      isLoading: false,
    };
  },
  created() {
    this.getPokemon();
  },
  updated() {
    this.setProgressBar();
  },
  methods: {
    async getPokemon() {
      this.isLoading = true;
      await api
        .searchPokemon(this.$route.params.id)
        .then((res) => {
          this.pokemon = res;
        })
        .catch(() => {
          this.showError = true;
        })
        .finally(() => (this.isLoading = false));
    },
    closeError() {
      this.showError = false;
    },
    setProgressBar() {
      const bars = [...document.getElementsByClassName("bar-container")];
      bars.forEach((bar) => {
        const number = bar.getAttribute("number");
        bar.style.width = `${number}%`;
      });
    },
    getMoves() {
      if (!this.pokemon.moves) {
        return "-";
      } else if (!this.pokemon.moves.length) {
        return "-";
      } else {
        return this.pokemon.moves.length;
      }
    },
    getAbilities() {
      if (!this.pokemon.abilities) {
        return "-";
      } else if (!this.pokemon.abilities.length) {
        return "-";
      } else {
        return this.pokemon.abilities.length;
      }
    },
    goBack(){
      this.$router.go(-1);
    }
  },
  watch: {
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
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.options {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.options .option {
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500;
}
.option:hover{
  transform: scale(1.1);
}
.pokemon {
  width: 100%;
  display: flex;
}
.pokemon .image {
  display: flex;
  justify-content: center;
  width: 30%;
}
.image img {
  width: 250px;
}
.info .name {
  font-size: 3rem;
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
}
.pokemon .specifics {
  display: flex;
  gap: 15px;
  margin: 10px 0;
}
.specifics .specific {
  color: black;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
}
.specific img {
  width: 70px;
  margin-bottom: 7px;
}
.types {
  display: flex;
  gap: 10px;
}
.type {
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
}
.general {
  margin: 10px 0;
  width: 48%;
  background: #2b2929;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px -2px #000000;
  box-shadow: 0px 0px 10px -2px #000000;
  padding: 20px;
}
.general p {
  margin-bottom: 10px;
}
.general p:last-child {
  margin-bottom: 0;
}
.general p span {
  color: #beb8b8;
}
.stats {
  margin: 10px 0;
  width: 48%;
  background: #2b2929;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px -2px #000000;
  box-shadow: 0px 0px 10px -2px #000000;
  padding: 20px;
}
.stat {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.stat p {
  width: 30%;
  font-size: 0.8rem;
}
.stat .bar {
  height: 15px;
  border-radius: 5px;
  width: 70%;
  background: #beb8b8;
}
.bar .bar-container {
  height: 100%;
  background: #4671ee;
  border-radius: 5px;
}
@media only screen and (max-width: 920px){
  .general, .stats{
    width: 100%;
  }
  .pokemon{
    flex-direction: column;
  }
  .pokemon .image{
    width: 100%;
  }
  .pokemon .info{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
