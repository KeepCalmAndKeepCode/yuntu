<template>
  <marquee class="bottom" loop="-1">
    {{ msg }}
  </marquee>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["forcastWeather"])
  },
  watch:{
    forcastWeather(newData){
      var messageStr = '';
      for(let i in newData.weather.weather_index){
        messageStr += newData.weather.weather_index[i].desc;
      }
      this.msg = messageStr.replace(/\s*/g,"");
    }
  },
  data(){
    return {
      msg:"信息加载中，请稍等"
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
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
</style>
