<template>
  <div class="nqgkContainer">
    <header>
      <div>{{ district.city.city_name + countyName }}农情概况</div>
    </header>
    <main>
      <!-- 左边 -->
      <div class="left">
        <div class="information">
          <div class="chartsTit">预警信息</div>
          <warningInfo></warningInfo>
          <div class="chartsTit">气象信息</div>
          <!-- 天气 -->
          <weather></weather>
          <season></season>
          <!-- 土壤 -->
          <div class="soil">
            <div class="lineContainer">
              <temperature></temperature>
              <humidity></humidity>
            </div>
          </div>
          <!-- 气候信息 -->
          <climate></climate>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right">
        <lineChart></lineChart>
        <piece></piece>
        <bigPie></bigPie>
        <lose></lose>
        <div style="clear: both;"></div>
      </div>
    </main>
    <nqgkBottom></nqgkBottom>
  </div>
</template>

<script>
import { mapState } from "vuex";
import warningInfo from "./warningInfo";
import weather from "./weather";
import season from "./season";
import temperature from "./temperature";
import humidity from "./humidity";
import climate from "./climate";
import lineChart from "./lineChart";
import piece from "./piece";
import bigPie from "./bigPie";
import lose from "./lose";
import nqgkBottom from "./nqgkBottom";

export default {
  computed: {
    ...mapState(["district"]),
    countyName() {
      if (this.district.county == undefined) {
        return "";
      } else {
        return this.district.county.county_name;
      }
    }
  },
  components: {
    warningInfo,
    weather,
    season,
    temperature,
    humidity,
    climate,
    lineChart,
    piece,
    bigPie,
    lose,
    nqgkBottom
  }
};
</script>

<style scoped>
.nqgkContainer {
  width: 1600px;
  height: 1080px;
}
header {
  width: 100%;
  height: 100px;
}
header div {
  font-size: 40px;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#ebf5ff),
    to(#92c0f4)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-align: center;
}
main {
  width: 100%;
  display: flex;
}
main .left {
  width: 434px;
  height: 875px;
  color: #fff;
  margin: 0 0 0 35px;
  float: left;
  font-size: 16px;
  padding: 0 25px 0 20px;
  background-image: url("../../../assets/bg001.png");
  background-size: 100% 100%;
}

main .left .tit {
  margin: 0 auto 25px;
  width: 34%;
  text-align: center;
  background-color: rgba(3, 61, 124, 0.4);
  min-width: 137px;
  border: solid 1px #026ed1;
}
main .left .information {
  width: 100%;
  padding: 20px 0 30px;
}
main .left .information .infoTitWor {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
main .left .information .infoTitWor div {
  width: 25%;
  background-color: #033d7b;
  margin: 0 15px;
  text-align: center;
  padding: 2px 0;
  border: solid 1px #026ed1;
}
main .left .information .infoTitWor hr {
  background-color: #026ed3;
  width: 30%;
  height: 1px;
  border: none;
}
.chartsTit {
  background-image: url(../../../assets/dabiao.png);
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
}

.soil {
  display: flex;
  align-items: center;
  height: 400px;
  margin-bottom: 14px;
}
.lineContainer {
  width: 100%;
  height: 100%;
}
.right {
  width: 1100px;
  height: 890px;
  float: right;
  position: relative;
  left: 20px;
  top: -17px;
  background-image: url(../../../assets/bg002.png);
  background-size: 100% 100%;
}

/*.weatherContainer {
  display: flex;
  width: 100%;
  padding: 10px;
  
  margin-bottom: 5px;
  margin-top: 5px;
}
.weatherContainer >div {
  width: 33%;
}
.weatherContainer .airQuality {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.weatherContainer .airQuality span{
  background: #a66a3c;
  border-radius: 2px;
  font-size: 12px;
  padding: 2px;
}
.weatherContainer .airQuality div>:nth-child(1) {
  margin-bottom: 15px;
}
.weatherContainer .todayTom {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.todayTom>div{
  font-size: 11px;
}
.weatherContainer img {
  width: 50px;
}

.tianqi {
	float: none;
	margin: 0 auto;
	height: 60px;
	line-height: 36px;
	border: 2px solid #34406b;
	color: #fecb00;
	border-radius: 4px;
}

.time {
	height: 60px;
	line-height: 40px;
	background: url(../../../assets/time.png) right center no-repeat;
}

.main_t {
	height: 510px;
}

.main_b {
	height: 280px;
}

.main_b>div>div {
	height: 270px;
}

.inset {
	background: rgba(5, 21, 47, 0.3);
	box-shadow: inset 0px 0px 30px #031a40;
}

.bg {
	border: 1px solid #175fb4;
	background: rgba(5, 21, 47, 0.3);
	box-shadow: inset 0px 0px 30px #031a40;
}

.box1-back {
	background-image: -webkit-radial-gradient(250px 250px at 50% 50%, hsla(209, 99%, 32%, 28), hsla(228, 100%, 0%, 0));
	background-image: radial-gradient(250px 250px at 50% 50%, hsla(209, 99%, 32%, 28), hsla(228, 100%, 0%, 0));
}

.cen {
	margin: 0 auto;
	float: none;
}

.data-box1 {
	border: 2px solid #2e5072;
	position: relative;
}

.topL {
	width: 20px;
	height: 20px;
	border-top-width: 2px;
	border-top-color: #4375b5;
	border-top-style: solid;
	border-left-width: 2px;
	border-left-color: #4375b5;
	border-left-style: solid;
	position: absolute;
	top: -8px;
	left: -8px;
}

.topR {
	width: 20px;
	height: 20px;
	border-top-width: 2px;
	border-top-color: #4375b5;
	border-top-style: solid;
	border-right-width: 2px;
	border-right-color: #4375b5;
	border-right-style: solid;
	position: absolute;
	top: -8px;
	right: -8px;
}

.bottomL {
	width: 20px;
	height: 20px;
	border-bottom-width: 2px;
	border-bottom-color: #4375b5;
	border-bottom-style: solid;
	border-left-width: 2px;
	border-left-color: #4375b5;
	border-left-style: solid;
	position: absolute;
	bottom: -8px;
	left: -8px;
}

.bottomR {
	width: 20px;
	height: 20px;
	border-bottom-width: 2px;
	border-bottom-color: #4375b5;
	border-bottom-style: solid;
	border-right-width: 2px;
	border-right-color: #4375b5;
	border-right-style: solid;
	position: absolute;
	bottom: -8px;
	right: -8px;
}

.f1 {
	text-align: justify;
	text-indent: 2em;
	line-height: 26px;
}

.triangle-bottomleft {
	width: 0;
	height: 0;
	border-bottom: 14px solid #155fb4;
	border-right: 14px solid transparent;
}

.triangle-bottomright {
	width: 0;
	height: 0;
	border-bottom: 14px solid #155fb4;
	border-left: 14px solid transparent;
}

.po_re {
	position: relative
}

.po_ab {
	position: absolute
}

.t1 {
	bottom: 5px;
	left: 5px;
}

.t2 {
	bottom: 5px;
	right: 5px;
}

.cor1 {
	color: #30c933
}

.cor2 {
	color: #0abdf8
}

.cor3 {
	color: #f8c30a
}

.cor4 {
	color: #fb7aa1
}

.cor5 {
	color: #3daef4
}

.bg1 {
	background: #ac7a35;
	border: 1px solid #ac7a35;
	margin: 10px;
	border-radius: 6px;
}

.bg1 span {
	height: 90px;
	line-height: 90px;
	display: block;
}

.bd {
	border-radius: 6px;
	border: 1px solid #ac7a35;
}



.left {
	width: 30%;
	color: #fff;
	margin: 0 0 0 35px;
	float: left;
	font-size: 16px;
	padding: 0 25px 0 20px;
}



.worning {
	
	width: 100%;
	padding: 0px 20px 30px;
}

.tit {
	margin: 0 auto 25px;
	width: 34%;
	text-align: center;
	
	min-width: 137px;
	border: solid 1px #026ED1;
}

.worningTit {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
}

.worningTit>hr {
	background-color: #026ED3;
	width: 30%;
}

.chartsTit {
	background-image: url(../../../assets/dabiao.png);
    background-size: 100% 70%;
    color: #4FE9FC;
    background-repeat: no-repeat;
    text-align: center;
    background-position: bottom;
		font-size: 17px;
}
.chartsTit2 {
	background-image: url(../../../assets/zhongbiao.png);
    background-size: 100% 70%;
    color: #4FE9FC;
    background-repeat: no-repeat;
    text-align: center;
    background-position: bottom;
		font-size: 17px;
		margin-top: 20px;
}

.soil,
.light {
	
	display: flex;
	align-items: center;
	height: 100px;
}
.soil2{
	
	height: 60px;
  margin:14px 0;
}
.soil2>div{
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 10px;
}
.soil2 img {
  width: 20px;
  height: 20px;
}
.soil2>div>span{
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
main .left .soil3{
	
	display: flex;
	align-items: center;
	height: 40px;
	margin-bottom: 5px;
	font-size: 12px;
	text-align: center;
}



.unit {
	font-size: 12px;
}

.light {
	margin: 0;
}

.light>:nth-child(1) {
	width: 20%;
	text-align: center;
}

.light>:nth-child(2) {
	width: 25%;
}

.light>:nth-child(1)>:nth-child(1) {
	color: #FEA337;
	font-size: 18px;
}

.light>:nth-child(1)>:nth-child(2) {
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.light>:nth-child(1)>:nth-child(2)>span {
	color: #5FB655;
	font-size: 18px;
	margin-left: 5px;
}

.pie {
	display: flex;
}

.pie>div {
	width: 70px;
	height: 70px;
}

.container {
	display: flex;
	align-items: center;
	width: 100%;
}

.container>div {
	display: flex;
	align-items: center;
} 

.container>:nth-child(1) {
	flex: 1;
}

.container>:nth-child(1)>:nth-child(1) {
	color: #0AB7FB;
}

.container>:nth-child(1)>img {
	margin: 0 5px;
}

.container>:nth-child(2)>:nth-child(1) {
	color: #0AB7FB;
	margin-right: 5px;
	float: left;
}

.container>:nth-child(2)>:nth-child(2) {
	font-size: 12px;
}

.data {
	width: 400px;
	float: left;
	color: #fff;
	margin-top: 20px;
	min-width: 400px;
}

.data>div {
	width: 45%;
	border: solid 1px #033D7C;
	float: left;
	margin-right: 20px;
	margin-bottom: 20px;
	height: 80px;
	text-align: center;
	padding: 10px;
}

.data>div>div {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	
}

.data>div>div>div>:nth-child(1) {
	font-size: 16px;
}

.data>div>div>div>:nth-child(2) {}

.data>div>div>div>:nth-child(2)>:nth-child(1) {
	font-size: 18px;
	color: rgb(235, 251, 10);
}


.bigPie {
	float: left;
	width: 670px;
	margin-top: 0px;
	margin-left: 20px;
	
	height: 405px;
	color: #FFFFFF;
}

.lineChart {
	float: left;
    width: 652px;
    height: 405px;
    margin-top: 36px;
    margin-left: 20px;
    color: #fff;
    margin-right: 23px;
}

.lose {
	width: 400px;
	height: 393px;
	float: left;
	margin-top: 12px;
}

.lose>.worningTit>div {
	color: #FFFFFF;
}

.loseContainer {
	color: #fff;
	display: flex;
	align-items: center;
}

.loseLeft {
	background-color: #1eaaf7;
	width: 120px;
  height: 120px;
  padding: 10px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
	left: 35px;
}

.loseLeft>div>:nth-child(1) {
	font-size: 17px;
}

.loseLeft>div>:nth-child(2)>:nth-child(1) {}

.loseLeft>div>:nth-child(2)>:nth-child(2) {}

.loseRight {
	height: 90px;
	border: solid 1px #026ED3;
	width: calc(100% - 140px);
	padding: 8px;
}

.loseRight>div {
	display: flex;
	align-items: center;
	height: 100%;
	
}

.loseRight>div>div {
	width: 20%;
	text-align: center;
	border-right: #367cba solid 1px;
}

.loseRight>div>div:last-child {
	border: none;
}



.loseRight>div>div>:nth-child(2)>:nth-child(1) {
	color: #1eaaf7;
	font-size: 17px;
}


.bottom {
	float: left;
	color: #fff;
	width: 1555px;
	display: flex;
	margin: 0 10px 0 35px;
	height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(../../../assets/nqyj-bottom.png);
  background-size: 100% 100%;
  font-size: 21.333px;
  font-family: "Microsoft YaHei";
  color: rgb(241, 171, 60);
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bottom>div {
	width: 15%;
	height: 71px;
	margin-left: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.bottom>div>div {
	font-size: 17px;
}

.bottom>div>div>div>:nth-child(1) {
	color: #0AB7FB;
	font-size: 20px;
}


#temperature,
#humidity {
  width: 100%;
  height: 50%;
}

.lose .total{
  display: flex;
  color: #fff;
}
.lose .total>div{
  background-color: rgba(26,50,99,0.7);
  width: 120px;
  margin: 0 4px;
  text-align: center;
  height: 54px;
  line-height: 27px;
}
.lose .total>div>:nth-child(1){
  font-weight: 600;
}
.lose .total>div>:nth-child(2){
  font-size: 15px;
}

.climatic .content{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
}*/
</style>
