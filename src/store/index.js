import Vue from 'vue'
import Vuex from 'vuex'
import linkedList from '../util/LinkList'
Vue.use(Vuex)
 


// 新建并暴露store
export default new Vuex.Store({
  state:{
    building:[],
    buildingString:"",
    ReversebuildingString:"",
    Reversebuilding:[],
    Label:[],
    activeCard:function activeCard(){},
  },
  mutations:{
    append(state,node){
      linkedList.append(node)
      state.building=linkedList.getLable(true)
      state.buildingString=linkedList.printObverse()
      state.ReversebuildingString=linkedList.printReverse()
      state.Reversebuilding=linkedList.getLable(false)
    },
    remove(state,node){
      linkedList.remove(node)
      state.building=linkedList.getLable(true)
      state.Reversebuilding=linkedList.getLable(false)
      state.buildingString=linkedList.printObverse()
      state.ReversebuildingString=linkedList.printReverse()
    },
    // changeValue(state,node){
    //     linkedList.changeValue(node.oldtheme,node.theme)
    //     state.building=linkedList.printObverse()
    // },
    setLabel(state,value){
      state.Label=value
    },
    setActiveCard(state,value){
      state.activeCard=value
    },
    update(state){
      state.building=linkedList.getLable(true)
      state.Reversebuilding=linkedList.getLable(false)
      state.buildingString=linkedList.printObverse()
      state.ReversebuildingString=linkedList.printReverse()
    }
  },
  getters:{
    
  },
  actions:{
    
  },
})
 