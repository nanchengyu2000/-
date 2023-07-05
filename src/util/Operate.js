class Operate {
     handle ($vue,Message){   //$vue指的是vue的对象引用，message,即是消息的对象
      if (Message.oldValue!=""&&Message.newValue!="") {
        $vue.$store.commit('changeValue',Message)
      }else if(Message.newValue==""){
        $vue.$store.commit("remove",Message)
        Message.oldValue=""   //将消息的旧值和新值进行重置
        Message.newValue=""
      }else if(Message.oldValue==""&&Message.newValue!=""){
        $vue.$store.commit('append',Message)
      }
      Message.oldValue=Message.newValue
    }
}
export default new Operate()