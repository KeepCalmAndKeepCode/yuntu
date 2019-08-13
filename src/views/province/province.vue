<template>
  <div id="provinceBgc">
    <div class="header">河南省农业大数据平台</div>
    <dataSize></dataSize>
    <provinceMap></provinceMap>
    <grainOutput></grainOutput>
    <earlyWarning></earlyWarning>
    <goodFarmCom></goodFarmCom>
    <beastsBirds></beastsBirds>
    <spinachPrices></spinachPrices>
  </div>
</template>

<script>
import dataSize from "./dataSize";
import provinceMap from "./provinceMap";
import grainOutput from "./grainOutput";
import earlyWarning from "./earlyWarning";
import goodFarmCom from "./goodFarmCom";
import beastsBirds from "./beastsBirds";
import spinachPrices from "./spinachPrices";
export default {
  components: {
    dataSize,provinceMap,grainOutput,earlyWarning,goodFarmCom,beastsBirds,spinachPrices
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}
#provinceBgc {
  width: 1920px;
  height: 1080px;
  background: url("./images/bg.jpg") top center no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: 85px 263px 223px 66px 162px;
  grid-template-columns: 435px 800px 324px 324px;
  grid-gap: 30px 0;
  grid-template-areas:
    "hd hd hd hd"
    "ds map ew ew"
    "ds map yns yns"
    "ds map bb sp"
    "ds go bb sp";

  padding-left: 20px;
  box-sizing: border-box;

  color: #ffffff;
  text-align: center;
}
@font-face{
  font-family: mFont;
  src: url('../../assets/LcdD.ttf');
}
.header {
  grid-area: hd;
  font-family: mFont;
  /* background: url("./images/header.png") no-repeat; */
  font-size: 44px;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  /* background-image:-webkit-linear-gradient(left,#85F0FA,#43B9EA);  */
  background-image:-webkit-linear-gradient(left,#85F0FA,#43B9EA); 
  -webkit-background-clip:text; 
  -webkit-text-fill-color:transparent; 
}
.dataSize {
  grid-area: ds;
}
.provinceMap {
  grid-area: map;
}
.grainOutput {
  grid-area: go;
}
.earlyWarning {
  grid-area: ew;
}
.yns {
  grid-area: yns;
}
.beastsBirds {
  grid-area: bb;
}
.spinachPrices {
  grid-area: sp;
}
</style>
