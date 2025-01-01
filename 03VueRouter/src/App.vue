<template>
  <div id="app">
    <!-- Header component -->
    <Header />
    
    <!-- Main content area, fills the available space between header and footer -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- Footer component -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Ensure body and html use full height */
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height of the page */
}

.main-content {
  flex-grow: 1; /* Content fills the available space */
}

footer {
  margin-top: auto; /* Footer stays at the bottom if content is small */
}

/* Optional: Add some padding to the content */
main {
  padding: 20px;
}
</style>
