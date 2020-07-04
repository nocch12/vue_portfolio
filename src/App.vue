<template>
  <v-app>
    <Header />

    <transition :name="pageTransition" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import Header from './views/layouts/Header';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    pageIndex: 0,
    pageTransition: 'page-left'
  }),
  watch: {
    $route: {
      handler(r) {
        this.pageTransition = 
          this.pageIndex > r.meta.pageIndex ? 'page-right' : 'page-left';

        this.pageIndex = r.meta.pageIndex;
      },
      imidiate: true
    }
  }
};
</script>

<style lang="scss">
  ul {
    list-style-type: none;
  }

  .page-title {
    font-size: 48px;
    font-family: 'Montserrat Subrayada', sans-serif;
  }

  .page-left-enter-active,
  .page-left-leave-active,
  .page-right-enter-active,
  .page-right-leave-active {
    transition: .4s!important;
  }

  .page-left-enter-to,
  .page-right-enter-to {
    opacity: 1;
  }

  .page-left-leave,
  .page-right-leave {
    transform: translate(0, 0);
    opacity: 1;
  }

  .page-left-leave-to,
  .page-right-enter {
    transform: translate(-100px, 0);
    opacity: 0;
  }

  .page-left-enter,
  .page-right-leave-to {
    transform: translate(100px, 0);
    opacity: 0;
  }
</style>