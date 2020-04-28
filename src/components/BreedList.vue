<template>
  <div>
    <div v-for="breed in breeds" :key="breed.id">
      <BreedItem :breed="breed" />
      <hr />
    </div>
  </div>
</template>

<script>
import BreedItem from "@/components/BreedItem.vue";
export default {
  name: "BreedList",
  components:{BreedItem},
  props:{
    breeds: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
