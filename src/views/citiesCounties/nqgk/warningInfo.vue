<template>
  <div class="soil2">
    <div>
      <img :src="imgsrc(0)">
      <span style="font-size:12px;" :title="forcastWeather.weather.alerts[0].issueContent">{{forcastWeather.weather.alerts[0].issueContent }}</span>
    </div>
    <div>
      <img :src="imgsrc(1)">
      <span style="font-size:12px;" :title="forcastWeather.weather.alerts[0].issueContent">{{forcastWeather.weather.alerts[1].issueContent }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["forcastWeather"]),
  },
  methods: {
    imgsrc(i) {
      switch (this.forcastWeather.weather.alerts[i].signalLevel) {
        case "蓝色":
          return require("../../../assets/yujinglan.png");
        case "黄色":
          return require("../../../assets/yujinghuang.png");
        case "橙色":
          return require("../../../assets/yujingcheng.png");
        case "红色":
          return require("../../../assets/yujinghong.png");
        case "无":
          return require("../../../assets/yujinglv.png");
      }
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
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
</style>
