<template>
  <q-page class="flex flex-center column justify-center q-px-md">

    <q-img class="logo" src="../../../src/assets/instadev-logo.svg"/>

    <q-input filled v-model="text01" label="E-mail" class="full-width q-mb-md"/>
    <q-input filled v-model="text02" label="Password" class="full-width q-mb-md"/>

    <div class="full-width column items-end">
      <a class="q-mt-md link" href="">Forgot password?</a>
    </div>

    <q-btn
      color="primary"
      :disable="true"
      label="Log in"
      class="sign-in-button full-width q-mt-lg"
    />

    <div class="flex full-width row items-center justify-center q-my-xl">
      <q-img class="logofb" src="../../../src/assets/facebook-logo.svg" />
      <a href="" class="link q-ml-xs">Log in With Facebook</a>
    </div>

    <div class="full-width row items-center justify-center q-my-xl">
      <q-separator class="hr1" inset /> or <q-separator class="hr1" inset />
    </div>

    <div class="full-width row items-center justify-center">
      <p>Don't have an account? <a href="" class="link q-ml-xs">Sign Up</a></p>
    </div>

    <div class="full-width column items-center absolute-bottom q-my-xl">
      <q-separator class="hr2" inset />
      <p class="q-mt-md">Instagram of Facebook</p>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'SignIn',
});

const text01 = ref();
const text02 = ref();

</script>

<style lang="scss" scoped>
.logo {
  height: 35%;
  width: 35%;
  margin-bottom: 7.5%;
}
.logofb{
  height: 12pt;
  width: 12pt;
}
.hr1 {
  height: 1px;
  width: 40%;
}
.hr2 {
  height: 1px;
  width: 90%;
}
</style>
