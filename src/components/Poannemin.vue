<template>
  <div class="poanne" ref="parent">
    <div class="label" >
      <Label v-for="label in menuObjects"  :click="click" :label="label" ref="English" :key="label.fileldid"/>
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
  },

  methods: {
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