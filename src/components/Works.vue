<template>
  <div class="bigbox">
    <div class="box">
    <div class="images" v-for="(url,index) in work.urls" :key="index">
        <img :src="url" alt="">
    </div>
    <div class="Prompt">
      <span class="title">
        {{work.prompt}}
      </span>
      <span class="copy" @click="copyText('.copy',work.prompt)">
        <i class="el-icon-document-copy" ></i>
      </span>
    </div>
    </div>
    <div class="footer">
      <div style="margin-left:20px" class="author">
        由{{work.author}}创作
        <i  class="el-icon-search"></i>
      </div>
      <el-tooltip class="item" effect="dark" content="收藏" placement="bottom-start">
      <div style="margin-right:20px" class="live">
        {{work.live}}
        <i class="el-icon-star-off"></i>
      </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
import Clipboard from "clipboard";
export default {
  name: 'TestWorks',
  props:["work"],
  data() {
    return {
      number:0
    };
  },

  mounted() {
    
  },

  methods: {
    copyText(select,value) {
      const clipboard = new Clipboard(select, {
        text: () => value,
      });
      clipboard.on('success', () => {
        Message.success({
          message: '复制成功！',
          type: 'success'
        })
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        Message.error({
          message: '复制成功！',
          type: 'error'
        })
        clipboard.destroy();
      });
    },
  },
};
</script>

<style  scoped>
.bigbox {
  width: 280px;
  height: 430px;
  display: inline-block;
  margin-right: 50px;
  margin-bottom: 50px;
  overflow: hidden;
}
.bigbox .box {
  width: 100%;
  height: 380px;
  display: inline-grid;
  grid-template-columns: 140px 140px;
  grid-auto-rows: 190px 190px;
  position: relative;
  background-color: white;
}
.bigbox .box .images {
  width: 140px;
  height: 190px;
  overflow: hidden;
}
.bigbox .box .images img {
  width: 100%;
  height: 100%;
}
.bigbox .box .Prompt {
    position: absolute;
    display: none;
    background-color: #221714;
    opacity: 0.7;
    width: 100%;
    top: 45%;
}
.bigbox .box:hover {
  cursor: pointer;
}
.bigbox .box:hover .Prompt {
  display: flex;
  /* flex-flow: row nowrap;
  justify-content: space-between; */
} 
.bigbox .box .Prompt .title {
  width: 80%;
  height: 150px;
  overflow-y: auto;
}
.bigbox .box .Prompt .title::-webkit-scrollbar {
  width: 0px;
}
.bigbox .box .Prompt .copy {
    width: 15%;
    height: 50px;
    background-color: #423f3e;
    opacity: 0.9;
}
.bigbox .box .Prompt .copy i {
    font-size: 50px;
}

.bigbox .footer{
  width: 100%;
  height: 50px;
  background-color: #EFEFEF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: #221714;
}
.bigbox .footer .author:hover {
  color: #409EFF;
  cursor: pointer;
}
.bigbox .footer .live:hover {
  cursor: pointer;
}
</style>