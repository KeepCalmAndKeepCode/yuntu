<template>
  <div class="bottom-middle_bk">
    <div class="sc">
      <div>生长模型</div>
    </div>
    <div class="ljl">
      <div class="scTit">辣椒本体数据</div>
      <div class="scContainer">
        <div>
          <img src="../../../assets/wlw-zhiwu1.png" alt="" />
          <div>未来5天降水量：0mm</div>

          <div class="scline"></div>
          <div class="szzq">
            生长周期：
            <br />
            夏天种植期—<span>定植期</span>
          </div>
          <div class="szzq1">
            <span>————</span>
            黄土
          </div>
          <div class="scline1"></div>
          <div class="szzq2">10cm墒情：22.625</div>
        </div>
        <div>
          <div class="zjjy">
            <div>专家建议：</div>
            <div>
              定植期辣椒生长含水量舒适期为80%，辣椒生长胁迫器，建议未来2天内补水至含水量78-83%。
            </div>
            <div>该生长周期施肥建议</div>
            <div>氨肥含量：1.5-1.8kg</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dsr">
      <div class="scTit">大蒜本体数据</div>
      <div class="scContainer">
        <div>
          <img src="../../../assets/wlw-zhiwu2.png" alt="" />
          <div>未来5天降水量：0mm</div>

          <div class="scline"></div>
          <div class="szzq">
            生长周期：
            <br />
            夏天种植期—<span>定植期</span>
          </div>
          <div class="szzq1">
            <span>————</span>
            黄土
          </div>
          <div class="scline1"></div>
          <div class="szzq2">10cm墒情：22.625</div>
        </div>
        <div>
          <div class="zjjy">
            <div>专家建议：</div>
            <div>
              麟芽花芽分化期大蒜生长含水量舒适期为90%，建议未来2天内补水至含水量90-92%。
            </div>
            <div>该生长周期施肥建议：</div>
            <div>氨肥含量：1.5-1.8kg</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottom-middle_bk {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.sc{
  width: 100%;
  margin-bottom: 10px;
}
.sc>div {
  /* background: url(../../../assets/sc.png) no-repeat center center;
  width: 100%;
  height: 30px; */
  color: #50E8FD;
  background-image: url(../../../assets/wlw-tit.png);
  text-align: center;
  background-repeat: no-repeat;
  height: 25px;
  background-size: 100% 55%;
  background-position: bottom;
  width: 145px;
  margin: 5px auto 0;
}
.scTit{
  color: #fff;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: -webkit-linear-gradient(left,rgba(10,40,87,1),rgba(6,64,126,1),rgba(10,40,87,1));
}
.scContainer{
  background-color: rgba(5,39,83,0.8);
  color: #fff;
  display: flex;
}
.scContainer>div{
  width: 50%;
  font-size: 15px;
  height: 160px;
}
.scContainer>:nth-child(1){
  position: relative;
}
.scContainer>:nth-child(1)>:nth-child(2){
  background-color: #035F9A;
  width: 140px;
  text-align: center;
  border-radius: 8px;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  margin-left: 20px;
  margin-top: 25px;
}
.scContainer>:nth-child(1)>img{
  margin-left: 15px
}
.scContainer .scline{
  border: solid 1px #4FE9FC;
  border-left: none;
  width: 10px;
  height: 40px;
  position: absolute;
  top: 0;
    left: 80px;
}
.scContainer .scline1{
  border: solid 1px #4FE9FC;
  border-right: none;
  position: absolute;
  width: 8px;
  height: 25px;
  top: 85px;
  left: 42px;
}
.scContainer .zjjy{
  font-size: 14px;
  padding:15px 0 0 0; 
}
.scContainer .szzq{
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: 95px;
}
.scContainer .szzq span,.scContainer .szzq1 span{
  color: #50E8FD;
}
.scContainer .szzq1{
  position: absolute;
  left: 70px;
  top: 70px;
}
.scContainer .szzq2{
  position: absolute;
  font-size: 12px;
  bottom: 50px;
  left: 50px;
}
.scContainer .zjjy>:nth-child(1),
.scContainer .zjjy>:nth-child(3){
  color: #50E8FD;
}
.scContainer .zjjy>:nth-child(2){
  padding-bottom: 20px;
}

.ljl {
  /* background: url(../static/images/btsj.png) no-repeat center center; */
  height: 200px;
  width: 456px;
}

.dsr {
  /* background: url(../static/images/ds.png) no-repeat center center; */
  height: 200px;
  width: 456px;
}
.dsr .scContainer>:nth-child(1)>img{
  margin-left: 50px;
}
</style>
