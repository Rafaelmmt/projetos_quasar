<template>
  <q-page class="flex">
    <div class="container-top full-width q-pt-lg">
      <TopBar/>
      <q-separator class="full-width q-mt-sm"/>
    </div>
    <h1>Main</h1>
    <img src="/src/assets/instadev-logo.svg" alt="">

    <div class="container-bottom full-width q-pb-lg">
      <q-separator class="full-width q-mb-sm"/>
      <BottomBar/>
    </div>
  </q-page>
</template>

<script setup>
import TopBar from 'src/components/TopBar.vue';
import BottomBar from 'src/components/BottomBar.vue';

defineOptions({
  name: 'MainPage',
});
</script>
