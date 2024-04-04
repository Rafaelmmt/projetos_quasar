<template>
  <div class="full-width row justify-around">
    <q-img @click="goTo('main')" width="24px" src="../assets/house.svg"/>
    <q-img width="30px" src="../assets/search.svg"/>
    <q-img width="30px" src="../assets/add.svg"/>
    <q-img width="34px" src="../assets/heart.svg"/>
  </div>
</template>

<script setup>
defineOptions({
  name: 'BottomBar',
});
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
