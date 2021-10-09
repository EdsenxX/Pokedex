<template>
  <router-link
    :to="{
      name: 'pokemon',
      params: {
        id: p.name,
      },
    }"
  >
    <div class="pokemon">
      <img :src="p.sprites.front_default" :alt="p.name" />
      <p class="title">{{ p.name | capitalize }}</p>
      <p class="type">{{ p.types[0].type.name | capitalize }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PokemonCart",
  props: ["p"],
};
</script>

<style scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  background: #2b2929;
  color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px -2px #000000;
  box-shadow: 0px 0px 10px -2px #000000;
  transition-duration: 500;
  cursor: pointer;
}
.pokemon:hover {
  transform: scale(1.1);
}
.pokemon .title {
  text-align: center;
  margin-bottom: 5px;
}
.pokemon .type {
  color: #e2e1e1;
  margin-bottom: 7px;
  font-size: 0.8rem;
}
</style>
