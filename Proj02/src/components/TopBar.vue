<template>
  <div class="full-width row justify-between">
    <q-img class="q-ml-sm camera" src="../assets/camera.svg"></q-img>
    <q-img class="logo" src="../assets/instadev-logo.svg"></q-img>
    <div>
      <q-img class="q-mr-lg" width="28px" src="../assets/reels.svg"></q-img>
      <q-img class="q-mr-sm" width="28px" src="../assets/direct.svg"></q-img>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TopBar',
});
</script>

<style lang="scss" scoped>
.logo {
  width: 115px;
  height: 30px;
}
.camera {
  width: 29px;
  height: 26px;
}
.q-img {
  cursor: pointer;
}
</style>
