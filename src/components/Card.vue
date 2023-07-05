<template>
 <el-collapse-transition>
  <div class="smallbox">
    <el-button type="danger" @click="remove" icon="el-icon-close" circle></el-button>
    <div class="card">
      <div class="image">
        <img :src="item.url" alt="">
      </div>
      <div class="title">
        <p>{{item.newValue}}</p>
      </div>
    </div>
  </div>
 </el-collapse-transition>
</template>

<script>
import { mapState } from 'vuex';
import linkedList from '../util/LinkList'
export default {
  name: 'TestCard',
  props:["item"],
  data() {
    return {
     
    };
  },
  
  mounted() {
    
  },
  computed: {
    ...mapState(["activeCard"])
  },
  methods: {
    remove(){
      this.$store.commit("remove",this.item)
      this.$store.commit("remove",this.item)
      this.$store.commit('setLabel',linkedList.getLable()) 
      this.activeCard(this.item)
    }
  },
};
</script>

<style scoped>
.smallbox {
  position: relative;
  width: 180px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.smallbox .el-button {
  position: absolute;
  right: -10px;
  top: -10px;
}
.smallbox .card {
  width: 180px;
  /* height: 100%; */
  overflow: hidden
}
.smallbox .card{
  display: flex;
  flex-flow: column;
  align-content: center;
  border-radius: 5px;
  /* border: 3px solid seagreen ; */
}
.smallbox .card .image {
  width: 100%;
  height: 70%;
  overflow: hidden;
  
}
.smallbox .card .image img {
  width: 100%;
  height: 126px;
}
.smallbox .card .title{
  background-color: #26292E;
}

.smallbox .card .title p {
  text-align: center;
}
</style>