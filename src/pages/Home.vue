<template>
  <div class="big-box" id="big-box">
    <el-container>
      <el-main> 
        <div class="select">
          <collapse
            v-for="(item, index) in types"
            :type="item"
            :menuObjects="data[item]"
            :key="index"
            :click="click"
          />
        </div>
      </el-main>
      <el-aside>
        <div class="forward">
          <p>正向：</p>
          <Collapsemin
            v-for="(item, index) in buildingtype"
            :type="item"
            :menuObjects="buildings[item]"
            :key="index"
            :click="click"
          />
          <div class="option">
            <span>
              <el-button
                id="first"
                type="info"
                @click="copyText('#first')"
                icon="el-icon-document-copy"
                plain
                :data-clipboard-text="buildingString"
                :round="false"
                >复制</el-button
              >
            </span>
          </div>
        </div>
        <div class="reverse">
          <p>反向：</p>
          <Collapsemin
            v-for="(item, index) in Reversebuildingtype"
            :type="item"
            :menuObjects="Reversebuildings[item]"
            :key="index"
            :click="click"
          />
          <div class="option">
            <span>
              <el-button
                id="second"
                type="info"
                @click="copyText('#second')"
                :data-clipboard-text="ReversebuildingString"
                icon="el-icon-document-copy"
                plain
                >复制</el-button
              >
            </span>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Collapse from "../components/Collapse.vue";
import Collapsemin from "../components/Collapsemin.vue";
import Operate from "../util/Operate";
import { mapState } from "vuex";
import { Message } from "element-ui";
import Clipboard from "clipboard";
export default {
  name: "TestHome",
  components: {
    Collapse,
    Collapsemin
  },
  data() {
    return {
      otherDescribe: {
        item: 1,
        oldValue: "",
        newValue: "",
      },
      menuObjects:[],
      flag:true,
      i:1
    };
  },
  computed: {
    ...mapState(["building"]),
    ...mapState(["Reversebuilding"]),
    ...mapState(["buildingString"]),
    ...mapState(["ReversebuildingString"]),
    data(){ 
      return this.getdatabytype(this.menuObjects)
    },
    types(){
      return Object.keys(this.data)
    },
    buildings(){
      return this.getdatabytype(this.building)
    },
    buildingtype(){
      return Object.keys(this.buildings)
    },
    Reversebuildings(){
      return this.getdatabytype(this.Reversebuilding)
    },
    Reversebuildingtype(){
      return Object.keys(this.Reversebuildings)
    }
  },
  mounted() {
  //  this.getdata()
  this.getType()
  },
  methods: {
    // async getFile(e) {
    //   const file = e.target.files[0];
    //   let jsonData = await resolveFile(file);
    //   for (let i = 0; i < jsonData.length; i++) {
    //       const element = jsonData[i];
    //       element.weight=0
    //       element.isactive=0
    //     }
    //   //这里可以上传数据
    //   this.$axios({
    //     method:"post",
    //     url:"http://localhost:8082/System/adddata",
    //     data:jsonData
    //   }).then((respone)=>{
    //     console.log(respone);
    //   })
    //   this.$axios()

    //   this.getJSon(jsonData)
    //   // const blob = new Blob([JSON.stringify(jsonData)], {
    //   //   type: "application/json",
    //   // });
    //   // saveAs(blob, "data.json");
    // },
    // getdata() {
    //   let jsonData=[];
    //   const xhr = new XMLHttpRequest();
    //   xhr.overrideMimeType("application/json");
    //   xhr.open("GET", "data.json", true);
    //   xhr.onreadystatechange =  () =>{
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //       jsonData = JSON.parse(xhr.responseText);
    //       delete jsonData[0]
    //       this.getJSon(jsonData)
    //     }
    //   }
    //   xhr.send();
    // },
    // getJSon(data){
    //   if (typeof data === 'object' && data !== null) {
    //         const categorizedData =data.reduce((result, item) => {
    //         if (!result[item.type]) {
    //           result[item.type] = [];
    //         }
    //         result[item.type].push(item);
    //         return result
    //   }, {});
    //   this.menuObjects=categorizedData
    //   }
            
    // },
    getType(){
      this.$api.get('/API/getAll')
      .then(response=>{
        this.menuObjects=response
      })
      .catch(error=>{
        console.log(error);
      })
    },
    handle(value) {
      Operate.handle(this, value);
    },
    copyText(select) {
      const clipboard = new Clipboard(select);
      clipboard.on("success", () => {
        Message.success({
          message: "复制成功！",
          type: "success",
        });
        clipboard.destroy();
      });

      clipboard.on("error", () => {
        Message.error({
          message: "复制成功！",
          type: "error",
        });
        clipboard.destroy();
      });
    },
    getdatabytype(value){
      if (typeof value === 'object' && value !== null) {
            const categorizedData =value.reduce((result, item) => {
            if (!result[item.type]) {
              result[item.type] = [];
            }
            result[item.type].push(item);
            return result
      }, {});
      return categorizedData
      }
      return {}
    }
  },
  }
</script>
<style>
</style>
<style scoped>
.big-box {
  width: 100%;
  /* height: 900px; */
}
.big-box .el-container {
  width: 100%;
  height: 100%;
}
.big-box .el-aside {
  width: 400px !important;
  /* position: fixed;
  right: 50px;
  height: 500px; */
  /* display: flex;
  flex-flow: column; */
}
.big-box .el-aside .forward {
  width: 100%;
  margin-bottom: 10px;
}
.big-box .el-aside .forward .context {
  width: 100%;
  height:200px;
}
.big-box .el-aside .reverse .context {
  width: 100%;
  height: 200px;
}

.big-box .el-aside .forward .option span .el-button {
  width: 100%;
}
.big-box .el-aside .reverse .context:hover {
  cursor: default;
  user-select: none;
}
.big-box .el-aside .reverse .option span .el-button {
  width: 100%;
}
.big-box .el-main {
  width: 100%;
}
.big-box .select {
  margin-top: 20px;
  width: 70%;
  /* height: auto; */
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  /* background-color: #0C0C0C !important; */
}
</style>