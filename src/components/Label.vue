<template>
  <div class="lable" ref="lable">
    <div class="card" :class="{'activeCard':label.isactive,'selectTag':selectTag1}" @click="activeCard(labels)">
      <div class="title">
        {{label.Chinese}}
      </div>
      <div class="footer">
      <span class="weight">
        <el-button icon="el-icon-minus" size="mini" @click.stop="cutWeigth"></el-button>
        <p>{{label.weight}}</p>
        <el-button icon="el-icon-plus" size="mini" @click.stop="addWeigth"></el-button>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import linkedList from '../util/LinkList'
// import {getContext} from '../util/Stringhandle'
export default {
  name: 'TestLabel',
  props:["label","click","selectTag"],
  data() {
    return {
    };
  },
  computed:{
    labels(){
      return this.label
    },
    // selectTag1(){
    //   return getContext(this.selectTag)==this.label.English
    // }
  },
  mounted() {
    this.$store.commit("setActiveCard",this.activeCard)
  },

  methods: {
    activeCard(label){
      if (label.isactive) {  //取消
        label.isactive=false
        if (this.selectTag1) {
           this.selectTag1=false
        }
        this.$store.commit("remove",label)
        
      }else{
        label.isactive=true
        this.$store.commit("append",label)
        this.click()
      }
      this.$store.commit('setLabel',linkedList.getLable())
    },
    addWeigth(){
      this.labels.weight=(this.labels.weight* 10+0.1* 10)/10;
      this.$store.commit("update")
      this.click()
    },
    cutWeigth(){
      this.labels.weight=(this.labels.weight* 10-0.1* 10)/10;
      this.$store.commit("update")
      this.click()
    }
  },
};
</script>

<style  scoped>
.lable {
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}
.card {
  width: 160px;
  height: 160px;
  overflow: hidden;
}
.activeCard {
  border-radius: 10px;
  border: 3px solid seagreen ;
}
.card .title {
  width: 100%;
  height: 100px;
  overflow: hidden;
  background-color: #26292E;
}
.lable .card .footer {
  width: 100%;
  background-color: #26292E;
}
.lable .card .footer .weight {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: small;
}
.lable .card .footer .weight .el-button {
  margin-left: 5px;
  margin-right: 5px;
}
</style>