<template>
  <div class="tsncpContainer">
    <header>
      <div>{{ district.city.city_name + countyName }}特色农产品</div>
    </header>
    <main>
      <!-- 今日实时价格行情 -->
      <realtimePrice></realtimePrice>
      <totalValue></totalValue>
      <!-- 左下 -->
      <div class="productionSales">
        <regioncontrastBar></regioncontrastBar>
        <market></market>
      </div>
      <!-- 右下 -->
      <div class="averagepriceGrowing">
        <averagepriceLine></averagepriceLine>
        <growingMap></growingMap>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import realtimePrice from "./realtimePrice"
import totalValue from "./totalValue"
import regioncontrastBar from "./regioncontrastBar"
import market from "./market"
import averagepriceLine from "./averagepriceLine"
import growingMap from "./growingMap"

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
  components:{
    realtimePrice,totalValue,regioncontrastBar,market,averagepriceLine,growingMap
  }
};
</script>

<style scoped>
.tsncpContainer {
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
  margin-top: 20px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.productionSales{
  width: 33.3%;
}
.averagepriceGrowing{
  margin-left: 30px;
  width: 62.5%;
}
</style>
