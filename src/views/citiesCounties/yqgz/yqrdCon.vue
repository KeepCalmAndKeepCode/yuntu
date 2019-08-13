<template>
  <div class="yqrdCon">
    <div class="yqrdTit">舆情热点</div>
    <div class="yqrdContent">
      <div>
        <img src="../../../assets/rd1.png" alt="" />
        <div>“化妆” 出来的土鸡蛋</div>
      </div>
      <div>
        <img src="../../../assets/rd2.png" alt="" />
        <div>安徽两地 现注水牛屠宰点</div>
      </div>
      <div>
        <img src="../../../assets/rd3.png" alt="" />
        <div>中央农村工作会议 在京召开</div>
      </div>
      <div>
        <img src="../../../assets/rd4.png" alt="" />
        <div>2019年 中央一号文件发布</div>
      </div>
      <div>
        <img src="../../../assets/rd5.png" alt="" />
        <div>农村 人居环境整治</div>
      </div>
      <div>
        <img src="../../../assets/rd6.png" alt="" />
        <div>2019年 中央一号文件发布</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.yqrdTit{
  background-image: url(../../../assets/yqTitBg.png);
  background-size: 76% 70%;
  color: #4FE9FC;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 20px 0;
}
.yqrdContent{
  display: grid;
  grid-template-columns:190px 190px 190px;
  grid-template-rows:100px 100px 100px;
  grid-gap:15px 10px;
  padding-left:30px; 
}
.yqrdContent>div{
  background-color: rgba(17,34,78,0.5);
  display: flex;
  color: #fff;
  align-items: center;
  padding:0 20px;
}
.yqrdContent>div>:nth-child(2){
  margin-left: 10px;
}
</style>
