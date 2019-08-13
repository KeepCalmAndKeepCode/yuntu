<template>
  <div class="market">
    <div class="chartsTit" style="margin-top:20px">
      销路情况
    </div>
    <div class="sale">
      <img src="../../../assets/lg.png" />
      <div class="sale2">
        销往
      </div>
      <div class="sale3">
        <div class="">
          云南昆明
        </div>
        <div class="">
          贵州
        </div>
        <div class=" ">
          十三香
        </div>
      </div>
    </div>
    <div class="sale">
      <img src="../../../assets/dasuan.png" />
      <div class="sale2">
        销往
      </div>
      <div class="sale3">
        <div class="">
          广东
        </div>
        <div class="">
          山东
        </div>
        <div class=" ">
          上海
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.market {
  background-image: url(../../../assets/bg4.png);
  background-size: 100% 100%;
  height: 188px;
}
.chartsTit {
  background-image: url(../../../assets/d1.png);
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 0 auto;
  padding: 8px 0;
  width: 66.6%;
}
.sale {
  width: 91.66666667%;
  display: flex;
  align-items: center;
  margin: 10px auto 0;
  justify-content: center;
}
.sale2{
  background-image: url('../../../assets/jtncp.png');
  background-size: 100% 100%;
  width: 70px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sale>img{
  width: 50px;
}
.sale1 {
  padding-left: 60px;
  width: 25%;
}
.sale3{
  display: flex;
  align-items: center;
}
.sale3>div{
  width: 82px;
  height: 32px;
  border: 1px solid #2f9bfe;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
</style>
