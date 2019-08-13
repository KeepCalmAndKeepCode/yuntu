<template>
  <div class="climatic">
    <div class="chartsTit">气候信息</div>
    <div class="climaticContainer">
      <div class="content">
        <span>●</span>
        <span class style="font-size:12px;">{{ climateInfo.climate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["climateInfo"])
  }
};
</script>

<style scoped>
.climaticContainer {
  display: flex;
  align-items: center;
  width: 100%;
}

.climaticContainer > div {
  display: flex;
  align-items: center;
}

.climaticContainer > :nth-child(1) {
  flex: 1;
}

.climaticContainer > :nth-child(1) > :nth-child(1) {
  color: #0ab7fb;
}

.climaticContainer > :nth-child(1) > img {
  margin: 0 5px;
}

.climaticContainer > :nth-child(2) > :nth-child(1) {
  color: #0ab7fb;
  margin-right: 5px;
  float: left;
}

.climaticContainer > :nth-child(2) > :nth-child(2) {
  font-size: 12px;
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
.climatic .content {
  padding-top: 10px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
