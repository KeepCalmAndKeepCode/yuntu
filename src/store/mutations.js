const mutations = {
  // 地域信息
  SETDISTRICT(state, obj) {
    state.district = obj;
  },
  // 预警信息&气象信息&气候信息
  FORCASTWEATHER(state, obj) {
    obj.weather.alerts = obj.weather.alerts.slice(-2);
    state.forcastWeather = obj;
  },
  // 获取农情概况-获取光照/二氧化碳/土壤湿度（10cm）/土壤温度（10cm）等采集信息
  MONITOINGFUN(
    state, 
    obj = {
      carbon_dioxide:[],
      soil_moisture:[],
      soil_temperature:[],
      sunlight:[],
      timeline:[]
    }
  ) {
    obj.carbon_dioxide = obj.carbon_dioxide.slice(-100); // 二氧化碳
    obj.soil_moisture = obj.soil_moisture.slice(-100); // 土壤湿度
    obj.soil_temperature = obj.soil_temperature.slice(-100); // 土壤温度
    obj.sunlight = obj.sunlight.slice(-100); // 光照强度
    obj.timeline = obj.timeline.slice(-100); // 时间线
    state.monitoing = obj;
  },
  // 获取气候信息
  SETCLIMATINFO(
    state, 
    obj = {
      climateInfo:""
    }
  ) {
    state.climateInfo = obj;
  },
  // 获取农情核心数据一览
  SETARGRICORE(state,obj){
    state.argricore = obj;
  }
}

export default mutations
