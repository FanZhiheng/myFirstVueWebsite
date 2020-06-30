<template>
  <div>
    <ul>
      <li v-for="(item, index) in currentlists" :key="index">{{item.title}} | {{item.content}}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store"
export default {
  name: "lists",
  store,
  computed: {
    currentlists() {
      return store.state.lists;
      console.log(store.state.lists);
    }
  }
};
</script>

<style scoped>
  
</style>