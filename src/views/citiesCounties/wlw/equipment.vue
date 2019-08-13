<template>
  <div class="dt">
    <div class="dtsb">
      <div></div>
      <span>大田设备</span>
    </div>
    <div class="scsb">
      <div></div>
      <span>水产设备</span>
    </div>
    <div class="yzsb">
      <div></div>
      <span>养殖设备</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dt {
  position: absolute;
  height: 160px;
  width: 163px;
  top: 135px;
  left: 20px;
  display: grid;
  grid-gap: 8px;
  /* background: url(../../../assets/sbxz.png) no-repeat center center; */
}

.dt > div {
  border: solid 1px #074a90;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dt > div > div {
}

.dt > div > :nth-child(1) {
  background-color: #fff;
  height: 15px;
  width: 15px;
  margin-right: 15px;
  border-radius: 50%;
}

.dt > .dtsb {
  background-color: #074a90;
}

.dt > .dtsb > :nth-child(1) {
  background-color: #47dd93;
}

.dt > .scsb > :nth-child(1) {
  background-color: #4fe9fc;
}

.dt > .yzsb > :nth-child(1) {
  background-color: #d8373f;
}
</style>
