const state = {
  // 地域信息
  district: {
    city: {
      city_name: ""
    },
    county: {
      county_name: ""
    }
  },
  // 预警信息&气象信息&气候信息
  forcastWeather: {
    forcast: [{
      weekday: 1,
      day_weather: "",
      low_temperature: "",
      high_temperature: "",
      day_weather_pic: ''
    }, {
      weekday: 2,
      day_weather: "",
      low_temperature: "",
      high_temperature: "",
      day_weather_pic: ''
    }],
    weather: {
      alerts: [
        {
          signalLevel: "",
          issueContent: "加载数据中"
        },
        {
          signalLevel: "",
          issueContent: "加载数据中"
        }
      ],
      aqi_description: "",
      jieqi: {
        post: "",
        pre: ""
      }
    }
  },
  // 农情概况-获取光照/二氧化碳/土壤湿度（10cm）/土壤温度（10cm）等采集信息
  monitoing: {
    carbon_dioxide:[],
    soil_moisture:[],
    soil_temperature:[],
    sunlight:[],
    timeline:[],
  },
  // 气候信息
  climateInfo: {
    climate:""
  },
  // 农情核心数据一览 
  argricore:[{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  },{
    data_unit:"",
    data_value:"",
    icon_url:"",
    title:""
  }]
}

export default state