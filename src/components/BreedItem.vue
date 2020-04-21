<template>
  <div>
    <h2>{{breed.name}}</h2>
    <p>{{breed.temperament}}</p>
    <p>{{breed.description}}</p>
  </div>
</template>

<script>
export default {
  name:"BreedItem",
  props:{
    breed: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>
