<template>
  <div class="yqTotal">
    <div class="">
      <div class="yqTotalTit">今日舆情</div>
      <div class="yqTotalContent">
        <span>2</span>
        <span>3</span>
        <span>0</span>
        <span>0</span>
        <span>3</span>
        <div>条</div>
      </div>
    </div>
    <div class="">
      <div class="yqTotalTit">累计舆情</div>
      <div class="yqTotalContent">
        <span>0</span>
        <span>1</span>
        <span>7</span>
        <span>6</span>
        <span>3</span>
        <div>万条</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .yqTotal{
  display: flex;
  color: #7AEEFF;
  margin-top: 30px;
  padding-left: 20px;
  height: 130px;
}
.yqTotal>div{
  background-color: rgba(4,26,65,0.8);
}
.yqTotal>:nth-child(1){
  margin-right: 20px;
}
.yqTotalTit{
  color: #01BFFD;
  padding-left: 15px;
  width: 290px;
  height: 32px;
  line-height: 32px;
  background-color: rgba(11,54,117,0.8);
}
.yqTotalContent{
  display: flex;
  width: 100%;
  height: 74px;
  padding: 5px 10px;
}
@font-face {
  font-family: mFont;
  src: url('../../../assets/LcdD.ttf');
}
.yqTotalContent>span{
  font-size: 60px;
  font-family: mFont;
  background-color: #13306F;
  margin-right: 4px;
  width: 46px;
  height: 84px;
  text-align: center;
  line-height: 84px;
}
.yqTotalContent>div{
  width: 15px;
  font-size: 25px;
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  height: 84px;
}
</style>
