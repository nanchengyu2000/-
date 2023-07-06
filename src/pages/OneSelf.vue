<template>
  <div class="exhibition">
    <div class="top">
      <div class="image">
        <img :src="oneself.image" alt="" />
        <span class="upload" @click="Upload">
          <input type="file" ref="upload" @change="uploadImage" style="display: none;">
          <i class="iconfont icon-xiangji"  :style="{ fontSize: '45px'}"></i>
        </span>
      </div>
      <div class="info">
        <div class="name">
          <p>用户名：{{ oneself.name }}</p>
        </div>
        <div class="credits">
          <p>积分：{{ oneself.credits }}</p>
        </div>
      </div>
    </div>
    <div class="edit-info">
      <div class="item">
        <p>基本信息：</p>
      </div>
      <div class="name">
        <span>用户名：</span>
        <span v-show="!nameIsEdit">{{ oneself.name }}</span>
        <span v-show="nameIsEdit" style="width:200px">
          <el-input placeholder="请输入内容" style="width:200px" v-model="oneself.name" clearable>
          </el-input>
        </span>
        <span style="margin-left: 20px">
          <el-button v-show="!nameIsEdit" size="mini" @click="nameIsEdit=true" icon="el-icon-edit"></el-button>
          <el-button v-show="nameIsEdit" size="mini" @click="UpadateInfo" icon="el-icon-check"></el-button>
          <el-button v-show="nameIsEdit" size="mini" @click="nameIsEdit=false" icon="el-icon-close"></el-button>
        </span>
      </div>
      <!-- <div class="password">
        <span>密码：</span>
        <span v-show="!passIsEdit">{{ oneself.password }}</span>
        <span v-show="passIsEdit" style="width:200px">
          <el-input show-password placeholder="请输入内容" style="width:200px" v-model="oneself.password" >
          </el-input>
        </span>
        <span style="margin-left: 20px">
          <el-button v-show="!passIsEdit" size="mini" @click="passIsEdit=true" icon="el-icon-edit"></el-button>
          <el-button v-show="passIsEdit" size="mini" icon="el-icon-check"></el-button>
          <el-button v-show="passIsEdit" size="mini" @click="passIsEdit=false" icon="el-icon-close"></el-button>
        </span>
      </div> -->
    </div>
    <div class="works">
      <div class="item">
        <p>个人上传作品：</p>
      </div>
      <div class="works-box">
        <Works v-for="(work, index) in works" :work="work" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Works from "../components/Works.vue";
import {Message} from 'element-ui'
export default {
  name: "TestOneSelf",
  components: {
    Works,
  },
  data() {
    return {
      oneself: {
      },
      nameIsEdit:false,
      passIsEdit:false,
      works: [
        {
          author: "南城雨",
          live: 0,
          prompt: "best quality, masterpiece,white hair, blue eyes, upper body",
          urls: [
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/ebb8c638a6f94475837c8fc11180cd07~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/75a693f49349417aa61ddcd3259928e5~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/3d457bd21b7448109f5a28aeaa70bbec~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/b9b715ed4df04019afef986e2c4a75c6~tplv-06k7mel0ff-webp.webp",
          ],
        },
        {
          author: "南城雨",
          live: 10,
          prompt:
            "best quality, masterpiece, aquamarine eyes, full body, ( best quality, ultra-detailed), (best illumination, best shadow, an extremely delicate and beautiful), dynamic angle, Depth of field, (bloom), (shine), (solo), light, best, ornate, colorful, cinematic angle, adorable, 1girl, holy virgin, (light smile:0.6), very long hair, braided light blonde hair, (((detailed eyes))), looking at viewer, lace-trimmed dress, white dress, white garter straps, tiara, hair ornament, jewelry, ribbon choker, pendant, heaven, snowy, holy,",
          urls: [
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/38688064c2454bca95acd1459214e8ef~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/2cf31f89e68841e786173523aebc90c6~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/26b04b992d544ffca2d5dd94d3ddc6da~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/de4b4f623bc04538ab5da708b0d8dba7~tplv-06k7mel0ff-image.image",
          ],
        },
        {
          author: "南城雨",
          live: 0,
          prompt:
            "(best quality, masterpiece:1.1), (realistic:1.4), 1 girl,three-view drawing,anime, ANIME,PORTRAITS, CHARACTER, REALISTIC, 3D, PERSON, 2D, MIX,MODEL, REAL PERSON",
          urls: [
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/bdd70559b2ea48fb938e0233753e43f2~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/0f50c77fad6e4d14a0ae51cc2603c41e~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/30ac1bf6de69477984f71efe0226878d~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/07788dbcd78c460bbd7e1e5c81efaf0c~tplv-06k7mel0ff-image.image",
          ],
        },
        {
          author: "南城雨",
          live: 0,
          prompt:
            "(best quality, masterpiece:1.1), (realistic:1.6), 1girl, upper body, crop top,twin tails, cowboy shot",
          urls: [
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/6c7de2e52b8244fb84b4cf6b66b0c627~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/1453e6ece82d4a7994b97da11e5f3bff~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/c9975a46814142a9aa01232eecf4463e~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/0cf4f88e0ef3414297f8059eb59303cb~tplv-06k7mel0ff-image.image",
          ],
        },
        {
          author: "南城雨",
          live: 0,
          prompt:
            "((solo)),1 girl,Kpop idol,best quality, masterpiece,white hair,thighhighs over pantyhose,hanfu,Flower,hanfu girl,<lora:R2:0.5>,<lora:lora-hanfugirl-v1-5:0.8>,(detailed face:1.2)",
          urls: [
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/650a6e4646394571a41ca4138f42419b~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/1545824d05134079b8bd9be0704b8462~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/97fdeac82b454dc18c189c82fa486800~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/82a4d880da8b4fcd8023bf3846999ef7~tplv-06k7mel0ff-image.image",
          ],
        },
      ],
    };
  },
  mounted() {
    this.getUserInfo()
  },

  methods: {
    getUserInfo(){
      const token=localStorage.getItem("token")
      this.$api.post("/System/getUserInfo",null,{
        headers:{
          'Authorization':"Bearer "+token
        }
      }).then(response=>{
        if (response!={}) {
          response.image=process.env.VUE_APP_Header+response.image
          this.oneself=response
        }
      })
    },
    Upload(){
      this.$refs.upload.click()
    },
    uploadImage(event){
      const file = event.target.files[0];
      const formData=new FormData()
      formData.append('file',file)
      const token=localStorage.getItem("token")
      this.$api.post("/System/ChangeImage",formData,{
        headers:{
          'Authorization':"Bearer "+token
        }
      })
        .then(response=>{
          if (response=={}) {
            Message.error({
              type:"error",
              message:"上传失败"
            })
          }else{
            this.oneself.image=process.env.VUE_APP_Header+response.path
          }
        })
      event.target.value = '';
    },
    UpadateInfo(){
      const token=localStorage.getItem("token")
      this.$api.get("/System/UpadateInfo",{
        params:{
          newname:this.oneself.name
        },
        headers:{
          'Authorization':"Bearer "+token
        }
      }).then(response=>{
        if (response.status==200) {
          this.nameIsEdit=false
          localStorage.setItem('token',response.token)
        }
      })
      
    }
  },
};
</script>
<style>
.exhibition .top .image .upload .iconfont {
  color: red !important;
} 
</style>
<style  scoped>

.exhibition {
  width: 90%;
  margin-left: 5%;
  height: auto;
  border-radius: 20px;
  background-color: #2d2f31;
  /* overflow: hidden; */
  /* margin-right: 10%; */
}
.exhibition .top {
  width: 100%;
  height: 200px;
  /* margin-left: 100px;
  margin-top: 100px; */
  border-bottom: 1px solid white;
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
}
.exhibition .top .image {
  width: 100px;
  height: 100px;
  margin-left: 100px;
  margin-top: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 1px solid white;
}
.exhibition .top .image:hover .upload {
  width: 50px;
  height: 50px;
  position: absolute;
  font-size: 60px;
  top: 15%;
  left: 30%;
}
.exhibition .top .image:hover {
  background-color: #222324;
  opacity: 0.5;
}
.exhibition .top .image img {
  width: 100%;
  height: 100%;
}
.exhibition .top .info {
  width: 200px;
  height: 100px;
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: center;
}
.exhibition .edit-info {
  width: 100%;
  height: 150px;
  border-bottom: 1px solid white;
}
.exhibition .edit-info .item {
  margin-left: 50px;
}
.exhibition .edit-info .name {
  margin-left: 150px;
}
.exhibition .edit-info .password {
  margin-top: 20px;
  margin-left: 150px;
}
.exhibition .works {
  width: 100%;
}
.exhibition .works .item {
  margin-left: 50px;
}
.exhibition .works .works-box {
  width: 80%;
  margin-left: 10%;
}
</style>