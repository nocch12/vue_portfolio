<template>
  <div class="main-bg-wrap">
    <v-main>
      <v-container>
        <section class="main-text">
          <h1 class="text-center text-h1 mb-5-xs mb-sm-10">Kohki Ohno</h1>
          <h2 class="text-center text-h2 mb-5-xs mb-sm-10">Portfolio Site</h2>
        </section>
      </v-container>
    </v-main>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    position: relative;
    background: linear-gradient(135deg, rgba(18, 18, 18, 1) 50%, rgba(18, 18, 18, 0.3) ) fixed,url(/img/main_bg.jpg);
    background-size: cover;
  }

  .container {
    height: 100%;
  }

  .main-text {
    padding-top: 20vh;
  }
</style>