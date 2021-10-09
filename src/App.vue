<!-- <template>
  <div>
    <h1>Contador</h1>
    <p>{{ count }}</p>
    <p>{{ getDouble }}</p>
    <div>
      <button @click="increment">+</button>
      <br />
      <button @click="decrement">-</button>
    </div>
    <br /><br />
    <div>
      <button @click="increment10">+10</button>
      <button @click="incrementAsync">+Async</button>
    </div>
  </div>
</template> -->

<template>
  <router-view/>
</template>

<script>
// import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "App",

  // methods: {
  //   ...mapMutations(["increment", "decrement"]),
  //   increment10() {
  //     this.$store.commit("increment", {
  //       number: 10,
  //     });
  //   },
  //   incrementAsync(){
  //     this.$store.dispatch('incrementAsync', {
  //       number: 3
  //     }).then(()=>{
  //       console.log('Action terminada')
  //     })
  //   }
  // },

  // computed: {
  //   ...mapState(["count"]),
  //   ...mapGetters(["getDouble"]),
  // },
};
</script>

<style >
  body{
    background: #1b1b1b;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
</style>