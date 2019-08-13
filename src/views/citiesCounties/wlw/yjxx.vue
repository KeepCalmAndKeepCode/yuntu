<template>
  <div class="yj">
    <div class="yqTit">预警信息</div>
    <div class="yqContent">
      &emsp;&emsp;临颗县中农公司辣椒基地大梁区监测点于2019年4月11日，发生虫害预警，建议及时打农药<span>（详情）</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.yj {
  position: absolute;
  top: 27px;
  left: 17px;
  height: 100px;
  width: 352px;
  background-color: rgba(11, 54, 117, 0.8);
  z-index: 1;
}

.yj > .yqTit {
  color: #50e8fd;
  background-image: url(../../../assets/wlw-tit.png);
  text-align: center;
  background-repeat: no-repeat;
  height: 25px;
  background-size: 100% 55%;
  background-position: bottom;
  width: 145px;
  margin: 0 auto;
}

.yj > .yqContent {
  color: #fff;
  font-size: 14px;
  padding: 10px;
}

.yj > .yqContent span {
  color: #50e8fd;
}
</style>
