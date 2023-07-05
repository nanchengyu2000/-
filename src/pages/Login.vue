<template>
  <div class="box">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestLogin',

  data() {
    return {
      
    };
  },

  mounted() {
    if (this.$route.path=="/Login") {
      this.$router.push("/Login/register")
    }
  },

  methods: {
    
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  background: url(https://img1.baidu.com/it/u=2748323184,1707970651&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500) no-repeat;
  background-attachment: fixed; 
  background-size: cover; 
  display: grid; 
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
}
.container {
  width: 700px;
  height: 500px; 
  box-shadow: 0 0 1rem 0 rgba(0,0,0,.2); 
  border-radius: 8px; 
  position: relative; 
  z-index: 1; 
  background: inherit; 
  overflow: hidden; 
  color: black;
  font-size: 20px;
  font-weight: 500;
}
.container:before {
  content:'';
  position: absolute;
  background: inherit;
  z-index: -1; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5); 
  filter: blur(10px);
  margin: -20px; 
}

</style>