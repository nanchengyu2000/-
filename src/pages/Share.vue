<template>
  <div class="share">
    <div class="upload">
      <Upload />
    </div>
    <div class="prompt">
      <div class="item">
        <p>提词：</p>
      </div>
      <div class="prompt-text">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入提词"
          v-model="prompt"
        >
        </el-input>
      </div>
    </div>
    <div class="showButton">
      <el-button type="success" icon="el-icon-share">分享</el-button>
    </div>
  </div>
</template>

<script>
import Upload from "../components/Upload.vue";
export default {
  name: "TestShare",
  components: {
    Upload,
  },
  data() {
    return {
      prompt:""
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.share {
  width: 90%;
  margin-left: 5%;
  height: 500px;
  border-radius: 20px;
  background-color: #2d2f31;
  position: relative;
}
.share .upload {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
}
.share .prompt {
  width: 60%;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%);
}
.share .showButton {
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%);
}
</style>