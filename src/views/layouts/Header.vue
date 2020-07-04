<template>
  <v-app-bar
    class="header position-fixed"
    app
    color="rgba(0, 0, 0, 0.3)"
    dark
  >
    <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>

    <v-toolbar-title class="d-none d-sm-block text-sm-h4">Portfolio</v-toolbar-title>
    <nav class="d-none d-sm-block ml-auto global-nav">
      <ul class="d-flex global-nav-items">
        <li>
          <router-link to="/" class="white--text">Home</router-link>
        </li>
        <li><router-link class="white--text ml-5" to="/about">About</router-link></li>
        <li><router-link class="white--text ml-5" to="/skills">Skills</router-link></li>
        <li><router-link class="white--text ml-5" to="/works">Works</router-link></li>
      </ul>
    </nav>

  </v-app-bar>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .header {
    opacity: .9;
  }

  .global-nav {
    height: 100%;
     
     &-items {
       height: 100%;
       align-items: center;
     }

    a {
      text-decoration: none;
      position: relative;

      &::after {
        position: absolute;
        bottom: -8px;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background: #00CCCC;
        opacity: 0;
        visibility: hidden;
        transition: .3s;
      }

      &.router-link-exact-active::after,
      &:hover::after {
        bottom: -4px;
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>
