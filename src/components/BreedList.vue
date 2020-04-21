<template>
  <div>
    <div v-for="breed in breeds" :key="breed.id">{{ breed }}</div>
  </div>
</template>

<script>

export default {
  name: "BreedList",
  props:{
    breeds: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
</style>
