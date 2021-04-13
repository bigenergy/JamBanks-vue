<template>
  <div id="app">

    <AddBank></AddBank>
    <hr>
    <FillBank></FillBank>
    <hr>
    <CheckBank></CheckBank>

<!--    {{ allBanks }}-->
  </div>
</template>

<script>
import AddBank from "@/components/AddBank";
import FillBank from "@/components/FillBank";
import CheckBank from "@/components/CheckBank";

import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    AddBank,
    FillBank,
    CheckBank
  },
  computed: mapGetters(["allBanks"]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
