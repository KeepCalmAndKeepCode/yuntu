<template>
  <div>
    <div class="chartsTit2" style="width:400px;height:22px;float:right">农情核心数据一览</div>
    <div class="data">
      <div
        v-for="item in argricore"
        :key="item.id"
        style=""
      >
        <div class>
          <div class style="width:158px;">
            <img :src="item.icon_url" alt style="float:left">
            <div class>
              <span class style="font-size:22px;color:item.color">{{ item.data_value }}</span>
              <span class>{{ item.data_unit }}</span>
            </div>
            <div class style="font-size:12px;">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      piece: [
        {
          title: "全市粮食总产量",
          amount: "137.29",
          unit: "万吨",
          srcimg: require("../../../assets/nong.png"),
          color: "yellow"
        },
        {
          title: "全市农村集体耕地面积",
          amount: "304.97",
          unit: "万亩",
          srcimg: require("../../../assets/gu.png")
        },
        {
          title: "全市面积",
          amount: "5988",
          unit: "平方公里",
          srcimg: require("../../../assets/tian.png")
        },
        {
          title: "全市50亩以上土地流转面积",
          amount: "166.69",
          unit: "万亩",
          srcimg: require("../../../assets/tu.png")
        },
        {
          title: "省级开发区",
          amount: "11",
          unit: "个",
          srcimg: require("../../../assets/zheng.png")
        },
        {
          title: "全市农业人口",
          amount: "210.55",
          unit: "万人",
          srcimg: require("../../../assets/chang.png")
        },
        {
          title: "全市农业产业化龙头企业",
          amount: "355",
          unit: "家",
          srcimg: require("../../../assets/chan.png")
        },
        {
          title: "全市农产品加工产值",
          amount: "652",
          unit: "亿元",
          srcimg: require("../../../assets/da.png")
        }
      ]
    };
  },
  computed: {
    ...mapState(["argricore"])
  },
};
</script>

<style scoped>
.chartsTit2 {
  background-image: url(../../../assets/zhongbiao.png);
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin-top: 20px;
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
  background-image: url(../../../assets/bg007.png);
  background-size: 100% 100%;
  border:none;
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
</style>
