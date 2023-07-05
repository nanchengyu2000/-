<template>
  <el-container>
      <el-header>
        <navigation/>
      </el-header>
      <el-main ref="scrollContainer">
        <router-view/>
      </el-main>
  </el-container>
</template>

<script>
import Navigation from '../components/Navigation.vue';
export default {
  name: 'TestHomePage',
  components: {
    Navigation,
    // Footer
  },
  data() {
    return {
      property: 'value',
    };
  },

  mounted() {
    
  },

  methods: {
  },
};
</script>

<style scoped>
.el-container  {
  height: 98vh;
  width: 100%;
}
.el-header {
    background-color: #161B22;
    /* position: fixed; */
    width: 100%;
    height: 100px  !important;
    z-index: 100;
  }
  .el-main {
    background-color: #101317;
    /* background: url("https://img2.baidu.com/it/u=2372141673,3151607283&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500") no-repeat; */
    /* background-size: cover; */
    overflow-y: auto;
    height: 100%;
    padding: 20px;
  }
  .el-main::-webkit-scrollbar {
    width: 0em;
  }
  .el-footer {
    background-color: #161B22;
    height: 200px !important;
  }
</style>