<template>
  <div class="weatherContainer">
    <div class="airQuality">
      <div>
        <div class>{{countyName}}</div>
        <div>
          空气质量：
          <span>{{forcastWeather.weather.aqi_description}}</span>
        </div>
      </div>
    </div>
    <div class="todayTom">
      <img :src="forcastWeather.forcast[0].day_weather_pic" alt>
      <div>
        <div>
          明天
          <br>
          （星期{{ weekday(forcastWeather.forcast[0].weekday) }}）
        </div>
        <div>{{forcastWeather.forcast[0].low_temperature}}~{{forcastWeather.forcast[0].high_temperature}}℃</div>
        <div>{{forcastWeather.forcast[0].day_weather}}</div>
      </div>
    </div>
    <div class="todayTom">
      <img :src="forcastWeather.forcast[0].day_weather_pic" alt>
      <div>
        <div>
          后天
          <br>
          （星期{{ weekday(forcastWeather.forcast[1].weekday) }}）
        </div>
        <div>{{forcastWeather.forcast[1].low_temperature}}~{{forcastWeather.forcast[1].high_temperature}}℃</div>
        <div>{{forcastWeather.forcast[1].day_weather}}</div>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["district","forcastWeather"]),
    countyName() {
      if (this.district.county == undefined) {
        return this.district.city.city_name;
      } else {
        return this.district.county.county_name;
      }
    }
  },
  methods:{
    weekday(i){
      if(i == 1){
        return  "一"
      }
      if(i == 2){
        return  "二"
      }
      if(i == 3){
        return  "三"
      }
      if(i == 4){
        return  "四"
      }
      if(i == 5){
        return  "五"
      }
      if(i == 6){
        return  "六"
      }
      if(i == 7){
        return  "日"
      }
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
.weatherContainer {
  display: flex;
  width: 100%;
  padding: 10px;
  
  margin-bottom: 5px;
  margin-top: 5px;
}
.weatherContainer > div {
  width: 33%;
}
.weatherContainer .airQuality {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.weatherContainer .airQuality span {
  background: #a66a3c;
  border-radius: 2px;
  font-size: 12px;
  padding: 2px;
}
.weatherContainer .airQuality div > :nth-child(1) {
  margin-bottom: 15px;
}
.weatherContainer .todayTom {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.todayTom > div {
  font-size: 11px;
}
.weatherContainer img {
  width: 50px;
}
</style>
