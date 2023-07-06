<template>
  <div class="naviline">
    <div class="overline">
      <div class="list">
        <div class="before">
          <span class="logo">
            <img src="../assets/logo.png" alt="" />
          </span>
          <span @click="Guide('/Home')"> 提词组合 </span>
          <span @click="Guide('/Reference')"> 参考库 </span>
        </div>
        <div class="after-nologin" v-if="!isLogin">
            <el-link href="#/Login/register" type="primary">登录|注册</el-link>
        </div>
        <el-dropdown>
          <div class="after" v-if="isLogin">
            <span>
              <img :src="oneself.image" alt="">
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="Guide('/OneSelf')">个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="Guide('/Share')">分享题词</el-dropdown-item>
            <el-dropdown-item @click.native="Guide('/Login')">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "TestNavigation",

  data() {
    return {
      oneself:{},
      isLogin:localStorage.getItem("token")?true:false
    };
  },
  mounted() {
    this.getUserInfo()
  },

  methods: {
    Guide(value) {
      if (this.$route.path!=value) {
        if (value=="/Login") {
          localStorage.removeItem("token")
        }
        this.$router.push(value)
      }
    },
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
    }
  },
};
</script>

<style scoped>
.naviline {
  width: 90%;
  height: 100px;
  margin-left: 5%;
}
.naviline .overline .list {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.naviline .overline .list .before {
  width: 30%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.naviline .overline .list .after {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  background: darkgoldenrod;
}
.naviline .overline .list .after span img {
  width: 100%;
  height: 100%;
}
.naviline .overline .list .before span {
  height: 60px;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
}
.naviline .overline .list .before span:hover {
  color: aliceblue;
}
.naviline .overline .list .before .logo {
  height: 60px;
}
.naviline .overline .list .before .logo img {
  width: 100%;
  height: 100%;
}
</style>