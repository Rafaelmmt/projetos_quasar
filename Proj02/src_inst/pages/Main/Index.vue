<template>
  <q-page class="flex">
    <!--
      <div class="container-top full-width q-pt-lg">
        <TopBar/>
        <q-separator class="full-width q-mt-sm"/>
      </div>
    -->
    <q-scroll-area
      horizontal
      :visible="false"
      class="scroll-area full-width q-px-sm"
    >
      <div class="row no-wrap">
          <div class="full-width" v-for="item in 10" :key="item">
            <div class="column items-center justify-center q-mr-md">
               <q-avatar size="62px">
                 <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png">
               </q-avatar>
               <span>Nome</span>
            </div>
          </div>
      </div>
    </q-scroll-area>

    <Posts :items="posts"/>

    <!--
      <div class="container-bottom full-width q-pb-lg">
        <q-separator class="full-width q-mb-sm"/>
        <BottomBar/>
      </div>
    -->
  </q-page>
</template>

<script>
// import TopBar from 'src/components/TopBar/Index';
// import BottomBar from 'src/components/BottomBar/Index';
import Posts from 'src/components/Posts/Index';

export default {
  name: 'MainPage',
  components: {
    TopBar,
    BottomBar,
    Posts,
  },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    await this.loadAllPosts();
  },
  methods: {
    async loadAllPosts() {
      const token = this.$store.getters['auth/getJWT'];
      const { data } = await
      this.$store.dispatch('posts/listAllPosts', { token });
      this.posts = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 98px;
  margin-top: 70px;
}
.container-top {
  z-index: 6000;
  position: fixed;
  top: 0;
  background-color: $background-light;
}
.q-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#FBAA47,#D91A46, #A60F93);
  padding: 2px;
  .avatar {
    width: 57px;
    height: 57px;
    border: solid 2px #ffffff;
  }
}
</style>
