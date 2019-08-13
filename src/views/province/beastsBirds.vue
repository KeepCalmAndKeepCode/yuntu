<template>
  <div class="beastsBirds">
    <h2>全省畜禽产量</h2>
    <div class="content">
      <div class>
        <div>
          <strong class="color1">662.68万吨</strong>
          <div>猪牛羊禽肉总产量</div>
          <div>比上年增长2.4%</div>
        </div>
      </div>
      <div class>
        <div>
          <strong class="color2">413.61万吨</strong>
          <div>全年全省禽蛋产量</div>
          <div>相比去年增长3.1%</div>
        </div>
      </div>
      <div class>
        <div>
          <strong class="color3">202.65万吨</strong>
          <div>全年全省牛奶产量</div>
          <div>相比去年下降0.1%</div>
        </div>
      </div>
      <div class>
        <div>
          <strong class="color4">4337.15万吨</strong>
          <div>全省年末生猪存栏</div>
          <div>相比去年下降1.2%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.beastsBirds {
  background: url(./images/bk5.png) no-repeat;
  background-position: bottom;
  background-size: 95% 90%;
}
.beastsBirds h2 {
  background: url(./images/title2.png) no-repeat;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
  margin: 35px 0 0 25px;
  padding-left: 10px;
}
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.content>div{
  border: 1px solid #067bac;
  background: rgba(0,183,238,0.27);
  margin: 0 4px 10px;
  width: calc(44% - 10px);
  height: 74px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content>div strong{
  font-size: 20px;
}
.color1{
  color: #f1694e;
}
.color2{
  color: #da8800;
}
.color3{
  color: #0ae;
}
.color4{
  color: #2c7;
}
</style>
