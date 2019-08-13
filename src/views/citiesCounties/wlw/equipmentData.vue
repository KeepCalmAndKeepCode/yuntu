<template>
  <div class="sj">
    <div class="sjTit">设备数据</div>
    <div class="sjContent">
      <div>监测点：<span>85处</span></div>
      <div>已接入设备：<span>2005台</span></div>
      <div>视频设备：<span>805台</span></div>
      <div>控制设备：<span>3000台</span></div>
      <div>预警数据：<span>150条</span></div>
      <div>已处理数据：<span>102条</span></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .sj {
  position: absolute;
  height: 237px;
  width: 163px;
  top: 310px;
  left: 20px;
  background-color: rgba(11, 54, 117, 0.8);
  /* background: url(../../../assets/sbei.png) no-repeat center center; */
}

.sj > .sjTit {
  color: #50e8fd;
  background-image: url(../../../assets/wlw-tit.png);
  text-align: center;
  background-repeat: no-repeat;
  height: 25px;
  background-size: 100% 55%;
  background-position: bottom;
  margin: 6px auto;
}

.sj > .sjContent {
  color: #fff;
}

.sj > .sjContent div {
  font-size: 15px;
  padding-left: 20px;
  height: 30px;
}

.sj > .sjContent span {
  color: #50e8fd;
}
</style>
