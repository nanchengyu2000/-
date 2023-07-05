<template>
  <div>
    <div class="back" @click="back">
      <i class="el-icon-back"></i>
      <span>返回</span>
    </div>
    <div class="login">
        注册
    </div>
    <div class="info">
        <div class="name">
          <span class="caption"><p>用户名：</p></span>
          <span><input type="text" v-model="userinfo.username"></span>
        </div>
        <div class="password">
          <span class="caption"><p>密码：</p></span>
          <span><input type="password" v-model="userinfo.password"></span>
        </div>
        <div class="affirm">
          <span class="caption"><p>确认密码：</p></span>
          <span><input type="password" v-model="affirm"></span>
        </div>
    </div>
    <div class="loginBu">
          <el-button @click="login">注册</el-button>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
  name: 'TestSign',

  data() {
    return {
       userinfo:{
        username:"",
        password:""
      },
      affirm:""
    };
  },

  mounted() {
    
  },

  methods: {
    login(){
      if (this.userinfo.name=="") {
        Message.warning({
          message:"你的用户名为空！",
          type:"warning"
        })
      }else if(this.userinfo.password=="") {
        Message.warning({
          message:"你的密码为空！",
          type:"warning"
        })
      }else if(this.userinfo.password!=this.affirm) {
        Message.warning({
          message:"你的密码不正确！",
          type:"warning"
        })
      }else {
        //进行注册处理
        this.$api.post("/API/userSign",this.userinfo)
          .then(response=>{
            if (response.state==203) {
              Message.success({
                type:"success",
                message:response.message
              })
            }else{
              Message.error({
                type:"error",
                message:response.message
              })
            }
          })
      }
    },
    back(){
      this.$router.back()
    }
  },
};
</script>

<style  scoped>
.back {
  font-size: 20px;
  color: #409EFF;
  position: absolute;
  left: 20px;
  top: 10px;
}
.back:hover {
  cursor: default;
}
 .login {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  font-size: 30px;
  font-weight: 400;
}
 .info {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
}
 .info .name {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  
}
 .info .name .caption {
  width: 100px;
}
 .info .name span input {
  border: 0px;
  outline-style: none;
  background-color: rgba(0,0,0,.0);
  border-bottom: 1px solid black;
  color: black;
}
 .info .password,.affirm {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
 .info .password .caption {
  width: 100px;
}
 .info .password span input {
  border: 0px;
  outline-style: none;
  background-color: rgba(0,0,0,.0);
  border-bottom: 1px solid black;
  color: black;
}
.info .affirm span input {
  border: 0px;
  outline-style: none;
  background-color: rgba(0,0,0,.0);
  border-bottom: 1px solid black;
  color: black;
}
 .loginBu {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%);
}
</style>