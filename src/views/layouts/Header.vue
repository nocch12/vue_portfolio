<template>
<div>
  <v-app-bar
    class="header position-fixed"
    app
    color="rgba(0, 0, 0, 0.3)"
    dark
  >
    <!-- SP表示 -->
    <v-app-bar-nav-icon class="ml-auto d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" height="100vh" right fixed dark hide-overlay>
      <v-list class="text-center">
        <v-list-item to="/" link>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about" link>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/skills" link>
          <v-list-item-content>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/works" link>
          <v-list-item-content>
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- PC表示 -->
    <v-toolbar-title class="d-none d-sm-block text-sm-h4">
      <router-link to="/" class="white--text">Portfolio</router-link>
      </v-toolbar-title>
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
</div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null
      }
    }
    
  }
</script>

<style lang="scss" scoped>
  .header {
    opacity: .9;
    
    a {
      text-decoration: none;
    }
  }

  .global-nav {
    height: 100%;
     
     &-items {
       height: 100%;
       display: block;
       align-items: center;
     }

    a {
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
