<template>
  <div>
    <div class="login">
        登录
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
      </div>
      <div class="hint">
        <span><el-checkbox label="记住密码"></el-checkbox></span>
        <span style="margin-left:30px"><el-link type="primary">找回密码</el-link></span>
      </div>
      <div class="loginBu">
          <el-button @click="login">登录</el-button>
      </div>
      <div class="logon">
        <span>需要一个帐户？<el-link type="primary" @click="goto">立即注册！</el-link></span>
      </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
  name: 'TestLogin',

  data() {
    return {
      userinfo:{
        username:"",
        password:""
      }
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
      }else {
        //进行登录处理
        this.$api.post("/API/userLogin",this.userinfo)
          .then(response=>{
            if (response.status==200) {
              Message.success({
                message:"登录成功！",
                type:"success"
              })
              localStorage.setItem("token",response.token)
              this.$router.replace("/Home")
            }else{
              Message.error({
                message:"登录失败！",
                type:"error"
              })
            }
          })
        // 
      }
    },
    goto(){
      this.$router.push("/Login/sign")
    }
  },
};
</script>

<style scoped>
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
 .info .password {
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
 .hint {    
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%);
}
 .loginBu {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%);
}
 .logon {
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%);
}
 .logon .el-link {
  font-size: 20px;
  font-weight: 500;
}
</style>