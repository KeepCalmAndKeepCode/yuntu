<template>
  <div class="totalContainer">
    <div class="">
      <h5 class="">辣椒总产量：</h5>
      <p class="">8.5万<span class="">吨</span></p>
    </div>
    <div class="">
      <h5 class="">辣椒总种植面积：</h5>
      <p class="">30万<span class="">亩</span></p>
    </div>
    <div class="">
      <h5 class="">辣椒总产值：</h5>
      <p class="">5.2<span class="">亿元</span></p>
    </div>
    <div class="">
      <h5 class="">大蒜总产量：</h5>
      <p class="">6.5万<span class="">吨</span></p>
    </div>
    <div class="">
      <h5 class=" ">大蒜总种植面积：</h5>
      <p class="">5万<span class="">亩</span></p>
    </div>
    <div class="">
      <h5 class=" ">大蒜总产值：</h5>
      <p class="">14.45<span class="">亿元</span></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.totalContainer {
  height: 260px;
  background-image: url("../../../assets/bg2.png");
  background-size: 100% 100%;
  margin-left: 30px;
  width: 62.5%;
  display: flex;
  flex-wrap: wrap;
}
.totalContainer > div {
  border: 2px solid #96dbf7;
  border-radius: 10px;
  text-align: center !important;
  margin: 30px 0 0 50px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
}
.totalContainer > :nth-child(4),.totalContainer > :nth-child(5),.totalContainer > :nth-child(6) {
  margin-top:10px;
}
.totalContainer > div > h5 {
  color: #fb7aa1;
  font-size: 16px;
  padding: 7px 0;
  margin:0;
}
.totalContainer > div > p {
  padding: 8px 0;
  color: #4fe9fc;
  font-size: 30px;
  font-weight: bold;
  line-height: 26px;
  margin:0;
}
.totalContainer > div > p > span {
  font-weight: bold;
  color: #4fe9fc;
  font-size: 24px;
}
</style>
