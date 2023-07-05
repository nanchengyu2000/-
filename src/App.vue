<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>

// import Footer from './components/Footer.vue'
export default {
  name: 'App',
  
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {
    if (this.$route.path==''||this.$route.path=='/') {
        this.$router.push("/Home")
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #BABBBD;
  user-select: none;
}

  
  
  
</style>
