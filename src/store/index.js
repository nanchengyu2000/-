import Vue from 'vue'
import Vuex from 'vuex'
import linkedList from '../util/LinkList'
Vue.use(Vuex)
 


// 新建并暴露store
export default new Vuex.Store({
  state:{
    building:"",
    Reversebuilding:"",
    Label:[],
    activeCard:function activeCard(){},
    scrollToChild:function scrollToChild(){},
  },
  mutations:{
    append(state,node){
      linkedList.append(node)
      state.building=linkedList.printObverse()
      state.Reversebuilding=linkedList.printReverse()
    },
    remove(state,node){
      linkedList.remove(node)
      state.building=linkedList.printObverse()
      state.Reversebuilding=linkedList.printReverse()
    },
    changeValue(state,node){
        linkedList.changeValue(node.oldtheme,node.theme)
        state.building=linkedList.printObverse()
    },
    setLabel(state,value){
      state.Label=value
    },
    setActiveCard(state,value){
      state.activeCard=value
    },
    update(state){
      state.building=linkedList.printObverse()
      state.Reversebuilding=linkedList.printReverse()
    }
  },
  getters:{
    
  },
  actions:{
    
  },
})
 