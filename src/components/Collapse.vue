<template>
  <div class="menu" ref="menu">
    <div class="title" @click="Spread">
      <span><p>{{type}}:</p></span>
      <span>
        <i :class="afico"></i>
      </span>
    </div>
    <div class="poanne" ref="poanne">
      <Poanne :menuObjects="menuObjects" ref="data" :click="click" />
    </div>
  </div>
</template>

<script>
// import {getContext} from '../util/Stringhandle'
import Poanne from "./Poanne.vue";
export default {
  name: "TestCollapse",
  components: {
    Poanne,
  },
  props: ["menuObjects", "click","type"],
  data() {
    return {
      flag: true,
      bfico: "el-icon-camera-solid",
      afico: "el-icon-caret-bottom",
    };
  },
  mounted() {
    console.log(this.menuObjects);
  },
  methods: {
    Spread() {
      if (this.flag) {
        this.$refs.poanne.style.animation = "slide-down linear 0.2s";
        this.$refs.poanne.style.height = "280px";
        this.$refs.poanne.style.overflow = "auto";
        this.afico = "el-icon-caret-top";
        // this.$refs.data.getDataInfo(true)
      } else {
        this.$refs.poanne.style.animation = "slide-up linear 0.2s";
        this.$refs.poanne.style.height = "0px";
        this.$refs.poanne.style.overflow = "hidden";
        this.afico = "el-icon-caret-bottom";
      }
      this.flag = !this.flag;
    },
    scallTop(){
      // const poanne=this.$refs.poanne
      window.scroll({ behavior: 'smooth', block: 'end' })
    }
  },
};
</script>

<style>
.menu {
  /* height: 35px; */
  overflow: hidden;
  margin-bottom: 30px;
}
.menu .label {
  height: 0px;
}
.menu .label::-webkit-scrollbar {
  width: 1px;
}
.menu .label::-webkit-scrollbar-thumb {
  background-color: rgb(148, 91, 91);
  border-radius: 2px;
}
.menu .title {
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  animation-direction: none;
}
.menu:hover {
  color: aliceblue;
  cursor: pointer;
}
.menu .poanne {
  height: 0px;
  /* overflow: hidden; */
}
.menu .poanne::-webkit-scrollbar {
  width: 3px;
}
.menu .poanne::-webkit-scrollbar-thumb {
  background-color: green;
  border-radius: 2px;
}
@keyframes slide-down {
  from {
    height: 0px;
  }
  to {
    height: 280px;
  }
}
@keyframes slide-up {
  from {
    height: 280px;
  }
  to {
    height: 0px;
  }
}
</style>