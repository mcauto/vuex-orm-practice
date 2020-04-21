<template>
  <div class="App">
    <h1>App</h1>
    <PulseLoader :loading="loading" :color="color" :size="size" />
    <div v-for="breed in breeds" :key="breed.id">{{ breed }}</div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Breed from "@/models/Breed";

export default {
  name: "App",
  components:{PulseLoader},
  data() {
    return {
      color: "#5DC596",
      size: "20px",
      loading: true
    };
  },
  computed: {
    breeds:{
      get: function(){
        return Breed.query().all();
      }
    }
  },
  methods: {
    async fetchBreeds() {
      this.loading = true;
      await Breed.api().get("breeds", {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        baseURL: "https://api.thecatapi.com/v1/"
      });
      this.loading = false;
      return;
    }
  },
  mounted() {
    try {
      this.fetchBreeds();
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
