<template>
  <div >
    <Menu />
    <router-view class="app"/>
  </div>
</template>

<script>
import Menu from "@/components/global/Menu";

export default {
  name: "App",
  components: { Menu },
};
</script>

<style>
body {
  background: #1b1b1b;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}
.app{
  padding-top: 100px;
}
</style>
