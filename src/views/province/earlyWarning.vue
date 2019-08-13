<template>
  <div class="earlyWarning">
    <h2 class="title">舆情预警</h2>
    <div class="content">
      <div class="" style="">
        <h3 class="">舆情信息</h3>
        <ul class="">
          <li>
            <span class="num" style="background: #d65a69;">1</span>
            现代农业拼的就是想象力
          </li>
          <li>
            <span class="num" style="background:#eca92f">2</span>
            高现代农业需要突破小农意识
          </li>
          <li>
            <span class="num" style="background:#a6ca4d">3</span>
            纸上种菜，种出都市农业未来
          </li>
          <li>
            <span class="num" style="background:#5cd370">4</span>
            发展高端农业抓住机械化、……
          </li>
        </ul>
      </div>
      <div class="">
        <h3 class="">热词搜索</h3>
        <ul class="">
          <li>
            <span class="num" style="background: #d65a69;">1</span>扶贫&emsp;&emsp;1687次
          </li>
          <li>
            <span class="num" style="background:#eca92f">2</span>环保&emsp;&emsp;1465次
          </li>
          <li>
            <span class="num" style="background:#a6ca4d">3</span>产业&emsp;&emsp;1367次
          </li>
          <li>
            <span class="num" style="background:#5cd370">4</span>群众&emsp;&emsp;1314次
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.earlyWarning{
  background: url('./images/bk3.png') no-repeat;
  width: 726px;
  position: relative;
  right: 100px;
}
.title {
  background: url("./images/title3.png") no-repeat;
  height: 29px;
  line-height: 29px;
  font-size: 16px;
  text-align: left;
  padding-left: 30px;
  margin: 6px 0 0 20px;
}
.content{
  /* padding:20px 0 0 100px; */
  width: 100%;
  display: flex;
  height: 234px;
  align-items: center;
  padding-left: 115px;
}
.content>div{
  flex: 0.45;
}
.content>:nth-child(1){
  border-right:solid 1px #ffffff;
}
.content ul{
  margin-bottom: 0;
}
.content li{
  list-style: none;
  text-align: left;
  height: 30px;
  font-size: 14px;
}
.content h3{
  margin-top: 0;
  text-align: left;
  padding-left: 40px;
}
.num{
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  margin-right: 10px;
}
</style>
