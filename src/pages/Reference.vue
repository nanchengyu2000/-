<template>
  <div>
    <works v-for="(work,index) in works" :work="work" :key="index"/>
  </div>
</template>

<script>
import Works from '../components/Works.vue';
export default {
  components: { Works },
  name: 'TestReference',
  computed:{
    Works
  },
  data() {
    return {
      works:[
        {
          author:"南城雨",
          live:0,
          prompt:"best quality, masterpiece,white hair, blue eyes, upper body",
          urls:[
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/ebb8c638a6f94475837c8fc11180cd07~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/75a693f49349417aa61ddcd3259928e5~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/3d457bd21b7448109f5a28aeaa70bbec~tplv-06k7mel0ff-webp.webp",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/b9b715ed4df04019afef986e2c4a75c6~tplv-06k7mel0ff-webp.webp"
          ]
        },{
          author:"南城雨",
          live:10,
          prompt:"best quality, masterpiece, aquamarine eyes, full body, ( best quality, ultra-detailed), (best illumination, best shadow, an extremely delicate and beautiful), dynamic angle, Depth of field, (bloom), (shine), (solo), light, best, ornate, colorful, cinematic angle, adorable, 1girl, holy virgin, (light smile:0.6), very long hair, braided light blonde hair, (((detailed eyes))), looking at viewer, lace-trimmed dress, white dress, white garter straps, tiara, hair ornament, jewelry, ribbon choker, pendant, heaven, snowy, holy,",
          urls:[
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/38688064c2454bca95acd1459214e8ef~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/2cf31f89e68841e786173523aebc90c6~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/26b04b992d544ffca2d5dd94d3ddc6da~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/de4b4f623bc04538ab5da708b0d8dba7~tplv-06k7mel0ff-image.image"
          ]
        },{
          author:"南城雨",
          live:0,
          prompt:"(best quality, masterpiece:1.1), (realistic:1.4), 1 girl,three-view drawing,anime, ANIME,PORTRAITS, CHARACTER, REALISTIC, 3D, PERSON, 2D, MIX,MODEL, REAL PERSON",
          urls:[
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/bdd70559b2ea48fb938e0233753e43f2~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/0f50c77fad6e4d14a0ae51cc2603c41e~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/30ac1bf6de69477984f71efe0226878d~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/07788dbcd78c460bbd7e1e5c81efaf0c~tplv-06k7mel0ff-image.image"
          ]
        },{
          author:"南城雨",
          live:0,
          prompt:"(best quality, masterpiece:1.1), (realistic:1.6), 1girl, upper body, crop top,twin tails, cowboy shot",
          urls:[
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/6c7de2e52b8244fb84b4cf6b66b0c627~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/1453e6ece82d4a7994b97da11e5f3bff~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/c9975a46814142a9aa01232eecf4463e~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/0cf4f88e0ef3414297f8059eb59303cb~tplv-06k7mel0ff-image.image"
          ]
        },{
          author:"南城雨",
          live:0,
          prompt:"((solo)),1 girl,Kpop idol,best quality, masterpiece,white hair,thighhighs over pantyhose,hanfu,Flower,hanfu girl,<lora:R2:0.5>,<lora:lora-hanfugirl-v1-5:0.8>,(detailed face:1.2)",
          urls:[
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/650a6e4646394571a41ca4138f42419b~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/1545824d05134079b8bd9be0704b8462~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/97fdeac82b454dc18c189c82fa486800~tplv-06k7mel0ff-image.image",
            "https://img.ai-creator.net/tos-cn-i-06k7mel0ff/82a4d880da8b4fcd8023bf3846999ef7~tplv-06k7mel0ff-image.image"
          ]
        }
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>