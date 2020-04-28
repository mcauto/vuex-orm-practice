<template>
  <div class="App">
    <h1>{{ title }}</h1>
    <PulseLoader :loading="loading" :color="color" :size="size" />
    <BreedList :breeds="breeds" />
  </div>
</template>

<script>
// TODO: fix test
// `SyntaxError: Unexpected token '<'`
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Breed from "@/models/Breed.js";
import BreedList from "@/components/BreedList.vue";

export default {
  name: "App",
  components: { PulseLoader, BreedList },
  data() {
    return {
      title: "I Love Cat",
      color: "#5DC596",
      size: "20px",
      loading: true
    };
  },
  computed: {
    breeds: {
      get: function () {
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

<style lang="postcss" scoped></style>
