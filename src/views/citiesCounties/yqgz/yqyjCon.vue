<template>
  <div class="yqyjCon">
    <div class="yqyjTit">{{countyName}}及周边舆情预警</div>
    <div class="">
      <div class="yqyjInfo">
        <span>【周边】百亿央企扶贫基金覆盖集中连片特困百亿央企扶贫基金覆盖集中连片特困</span>
        <span>蓝色预警</span>
        <span>{{ nowDate }}</span>
      </div>
      <div class="yqyjInfo">
        <span>【周边】南昌幼儿园疑似食物中毒 涉事食品店南昌幼儿园疑似食物中毒
          涉事食品店...</span>
        <span>蓝色预警</span>
        <span>{{ nowDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { nowDate } from "@/utils/getDate.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["district"]),
    countyName() {
      if (this.district.county == undefined) {
        return this.district.city.city_name;
      } else {
        return this.district.county.county_name;
      }
    }
  },
  data() {
    return {
      nowDate
    };
  },
  mounted() {}
};
</script>

<style scoped>
.yqyjCon {
  color: #01bffd;
}
.yqyjTit,
.yqrdTit {
  background-image: url(../../../assets/yqTitBg.png);
  background-size: 135% 100%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 20px 0;
}
.yqyjInfo {
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 30px;
  font-size: 19px;
}
.yqyjInfo > :nth-child(1) {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 307px;
}
.yqyjInfo > :nth-child(2) {
  color: #fff;
  background-color: #01bffd;
  font-size: 15px;
  height: 30px;
  width: 60px;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  font-size: 12px;
  margin-left: 60px;
}
.yqyjInfo > :nth-child(3) {
  flex: 1;
  text-align: right;
}
</style>
