<template>
  <div class="poanne" ref="parent">
    <el-button type="info" @click="getData(true)"  :class="{'isactive':isactive}">正面</el-button>
    <el-button type="info" @click="getData(false)" :class="{'isactive':!isactive}">反面</el-button>
    <div class="label" >
      <Label v-for="label in Labels"  :click="click" :label="label" ref="English" :key="label.fileldid"/>
    </div>
  </div>
</template>

<script>
import Label from '../components/Label.vue'
export default {
  name: "TestPoanne",
  components: {
    Label
  },
  props:["menuObjects","click"],
  data() {
    return {
      isactive:true,
      Labels:[]
    };
  },
  mounted() {
    this.Labels=this.menuObjects.filter(item => item.sort=='正向')
  },

  methods: {
    getData(value){
      this.getDataInfo(value)
    },
    getDataInfo(value){
      if (value){  //正面
        this.Labels=this.menuObjects.filter(item => item.sort=='正向')
        this.isactive=true
      }else{
        this.Labels=this.menuObjects.filter(item => item.sort=='反向')
        this.isactive=false
      }
    }
  },
};
</script>

<style scoped>
.poanne {
  width: 100%;
}
.poanne .label {
  height: 0px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.poanne .isactive {
  background-color: greenyellow;
}
</style>