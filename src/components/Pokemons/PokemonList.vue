<template>
  <div class="pokemons-list">
    <template v-for="p in pokemons">
     <pokemon-cart :p="p" :key="p.name" />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PokemonCart from './PokemonCart.vue';
export default {
  components: { PokemonCart },
  name: "PokemonList",
  computed: {
    ...mapState(["pokemons"]),
  },
};
</script>

<style scoped>
.pokemons-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
