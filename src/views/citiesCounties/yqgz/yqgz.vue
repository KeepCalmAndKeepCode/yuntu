<template>
  <div class="yqgzContainer">
    <header>{{ district.city.city_name + countyName }}舆情关注</header>
    <main>
      <div class="publicCharts">
        <!-- 舆情走势图 -->
        <div class="chartsCon">
          <chartsPie></chartsPie>
          <chartsLine></chartsLine>
        </div>
        <div class="">
          <!-- 舆情统计 -->
          <yqTotal></yqTotal>
          <!-- 舆情预警 -->
          <yqyjCon></yqyjCon>
          <!-- 舆情热点 -->
          <yqrdCon></yqrdCon>
        </div>
      </div>
      <!-- 事件+舆情监控 -->
      <div class="incident">
        <!-- 突发事件 -->
        <tfsjCon></tfsjCon>
        <!-- 热点事件 -->
        <wordCloud></wordCloud>
        <!-- 舆情实时监控 -->
        <yqjkCon></yqjkCon>
      </div>
      <rankingList></rankingList>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import chartsPie from "./chartsPie";
import chartsLine from "./chartsLine";
import yqTotal from "./yqTotal";
import yqyjCon from "./yqyjCon";
import yqrdCon from "./yqrdCon";
import tfsjCon from "./tfsjCon";
import wordCloud from "./wordCloud";
import yqjkCon from "./yqjkCon";
import rankingList from "./rankingList";

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
    chartsPie,
    chartsLine,
    yqTotal,
    yqyjCon,
    yqrdCon,
    tfsjCon,
    wordCloud,
    yqjkCon,
    rankingList
  }
};
</script>

<style scoped>
.yqgzContainer {
  width: 1600px;
  height: 1080px;
}
header {
  width: 100%;
  height: 100px;
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
  display: grid;
  width: 100%;
  height: 978px;
  grid-template-columns: 1155px 380px;
  grid-template-rows: 640px 324px;
  grid-gap: 0 20px;
  padding: 0 25px 25px;
  grid-template-areas:
    "publicCharts incident"
    "rankingList incident";
}
.publicCharts {
  grid-area: publicCharts;
  background-image: url("../../../assets/publicChartsBg.png");
  background-size: 100% 100%;
  position: relative;
  bottom: 15px;
  display: flex;
}
.rankingList{
  grid-area:rankingList;
  background-image: url("../../../assets/rankingListBg.png");
  background-size: 100% 100%;
}
.chartsCon {
  background-color: rgba(17, 34, 78, 0.5);
  width: 475px;
  height: 566px;
  margin: 50px 0 0 30px;
  padding: 20px 0 0 0;
}
.chartsCon > :nth-child(2) {
  margin-top: 30px;
}
.incident{
  display: grid;
  grid-template-columns:380px;
  grid-template-rows:320px 320px 320px;
  grid-area: incident;
  background-image: url('../../../assets/incidentBg.png');
  background-size: 100% 100%;
}
.incident>div>:nth-child(1){
  background-image: url('../../../assets/yqTitBg.png');
  color: #4FE9FC;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 20px 0;
}
</style>
