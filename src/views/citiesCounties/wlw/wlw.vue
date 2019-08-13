<template>
  <div class="wlwContainer">
    <header>
      <div>{{ district.city.city_name + countyName }}农业物联网</div>
    </header>
    <div class="bk-top">
      <div class="line"></div>
      <yjxx></yjxx>
      <equipment></equipment>
      <equipmentData></equipmentData>
      <mapWlw></mapWlw>
      <historicalData></historicalData>
      <nszd></nszd>
      <videoInspection></videoInspection>
    </div>
    <div class="bk-bottom-l">
      <div class="line xs"></div>
      <growthModel></growthModel>
    </div>
    <diseaseData></diseaseData>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mapWlw from "./mapWlw";
import yjxx from "./yjxx";
import equipment from "./equipment";
import equipmentData from "./equipmentData";
import historicalData from "./historicalData";
import nszd from "./nszd";
import videoInspection from "./videoInspection";
import growthModel from "./growthModel";
import diseaseData from "./diseaseData";

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
    mapWlw,
    yjxx,
    equipment,
    equipmentData,
    historicalData,
    nszd,
    videoInspection,
    growthModel,
    diseaseData
  },
  mounted() {
  
  }
};
</script>

<style scoped>
.wlwContainer {
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
.bk-top {
  position: relative;
  width: 1560px;
  height: 693px;
  background: url(../../../assets/bk-bg.png) no-repeat center center;
  margin: 0 0 15px 15px;
}
.line {
  position: absolute;
  width: 130px;
  height: 8px;
  top: 12px;
  left: 50px;
  background: url(../../../assets/lightblueline.png) no-repeat center center;
}

.bk-bottom-l {
  position: relative;
  float: left;
  width: 961px;
  height: 250px;
  background: url(../../../assets/bk-bg-middle.png) no-repeat center center;
  margin-right: 10px;
}
.xs {
  top: -4px;
}
</style>
