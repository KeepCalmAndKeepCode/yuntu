<template>
  <div id="app" class="container">
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="navbar">
      <!-- 导航条顶部旋转 -->
      <div class="titContain">
        <div class="titPlay">
          <div class="tit">
            <div>{{ countyName }}农业大数据平台</div>
            <div>LINYINGCOUNTYAGRICULTURAL DATA PLATFORM</div>
          </div>
        </div>
        <div class="titPlay position">
          <div class="veeteam">
            <div>北京农信通科技有限公司</div>
            <div class>BEIJINGNONGXINTONG TECHNOLOGY</div>
          </div>
        </div>
      </div>
      <!-- 导航条主体 -->
      <div class="navMain">
        <div :class="{ nqgk, nqgkClick: msg == 0 }" @click="gotoLink(nqgk, 0)">
          <div>
            <img src="../../assets/navbar/nqyj-logo.png" alt />
            <div>农情概况</div>
          </div>
        </div>
        <div :class="{ yqgz, yqgzClick: msg == 1 }" @click="gotoLink(yqgz, 1)">
          <div>
            <img src="../../assets/navbar/yqgz-logo.png" alt />
            <div>舆情关注</div>
          </div>
        </div>
        <div
          :class="{ tsncp, tsncpClick: msg == 2 }"
          @click="gotoLink(tsncp, 2)"
        >
          <div>
            <img src="../../assets/navbar/tsncp-logo.png" alt />
            <div>特色农产品</div>
          </div>
        </div>
        <div :class="{ yns, ynsClick: msg == 3 }" @click="gotoLink(yns, 3)">
          <div>
            <img src="../../assets/navbar/yns-logo.png" alt />
            <div>益农社大数据平台</div>
          </div>
        </div>
        <div :class="{ wlw, wlwClick: msg == 4 }" @click="gotoLink(wlw, 4)">
          <div>
            <img src="../../assets/navbar/wlw-logo.png" alt />
            <div>物联网</div>
          </div>
        </div>
      </div>
      <!-- 导航条底部 -->
      <div class="navBottom">
        <div>
          <div>{{ countyName }}农业</div>
          <div>大数据平台</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  district,
  scene,
  monitoing,
  climatinfo,
  argricore
} from "@/utils/interfaces.js";
import { parseUrl } from "@/utils/parseUrl.js";
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";

let url = document.URL;
// let urlArr = url.split("/");
// urlArr.pop();
// location.href = `citiesCounties.html#/${urlArr[4]}${('/' + urlArr[5]) || ''}` ;
// let url1 = document.URL;
let cityStr = parseUrl(url).params[0];
/**
 * 页面刷新时，路由无限叠加
 * 将字符串分割，如果第三(四)项不是县区的拼音，则重新赋值。
 */
// 判断 "市” 的路由情况
// let cityRot = (cityStr[2] == "nqgk" || cityStr[2] == "tsncp" || cityStr[2] == "wlw" || cityStr[2] == "yns" || cityStr[2] == "yqgz");
// // 如果 cityStr 第二项不是以上情况，则可判定为这是县一级
// let countiesRot = (cityStr[3] == "nqgk" || cityStr[3] == "tsncp" || cityStr[3] == "wlw" || cityStr[3] == "yns" || cityStr[3] == "yqgz");
// if(cityRot){
//   cityStr = cityStr[1];
//
// }else if(countiesRot){
//
//   cityStr = `${cityStr[1]}/${cityStr[2]}`;
// }
let autoSwitch;
export default {
  data() {
    return {
      cityes: cityStr,
      nqgk: "nqgk",
      tsncp: "tsncp",
      wlw: "wlw",
      yns: "yns",
      yqgz: "yqgz",

      skip: "nqgk",
      msg: 0,
      ScrollNum: 0,
      ScrollControl: true
    };
  },
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
  methods: {
    ...mapMutations([
      "FORCASTWEATHER",
      "MONITOINGFUN",
      "SETCLIMATINFO",
      "SETARGRICORE"
    ]),
    ...mapActions(["getDistrict"]),
    autoSwitchFun() {
      autoSwitch = setInterval(() => {
        this.ScrollNum++;
        if (this.ScrollNum == 0) {
          this.$router.push({ path: `nqgk` });
          this.msg = 0;
        }
        if (this.ScrollNum == 1) {
          this.$router.push({ path: `yqgz` });
          this.msg = 1;
        }
        if (this.ScrollNum == 2) {
          this.$router.push({ path: `tsncp` });
          this.msg = 2;
        }
        if (this.ScrollNum == 3) {
          this.$router.push({ path: `yns` });
          this.msg = 3;
        }
        if (this.ScrollNum == 4) {
          this.$router.push({ path: `wlw` });
          this.msg = 4;
          this.ScrollNum = -1;
        }
      }, 100000);
    },
    gotoLink(url, i) {
      // this.$router.push({ path: `${this.cityes}/${url}` });
      this.$router.push({ path: url });
      this.msg = i;
      clearInterval(autoSwitch);
    },
    // 获取预警信息
    getScene(params, token, jump) {
      axios
        .post(
          scene,
          {
            ...params
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token
            }
          }
        )
        .then(data => {
          /**
           * code == 401时，密令登录/普通登录，过期，需重新密令登录/普通登录
           * @param code 判断登录是否到期
           * @param login_type.type 判断用户登录类型 1.普通登录 2.密令登录
           * @param jump 县区一级别需要二级回跳，市级别需要一级回跳
           */
          console.log("预警信息", data);
          // if (data.data.code != undefined) {
          //   if (data.data.code == 401 && this.district.login_type.type == 2) {
          //     alert("登录过期，请重新登录");
          //     localStorage.removeItem("token" + token);
          //     this.$router.push("/secretRegistration");
          //     return;
          //   }
          //   if (data.data.code == 401 && this.district.login_type.type == 1) {
          //     alert("登录过期，请重新登录");
          //     localStorage.removeItem("token" + token);
          //     this.$router.push("/login");
          //     return;
          //   }
          // }
          // if(data.data.code == 401 && this.district.login_type.type == 2 && jump == 1){
          //   alert("登录过期，请重新登录");
          //   localStorage.removeItem("token" + token);
          //   this.$router.push('/secretRegistration');
          //   return
          // }
          // if(data.data.code == 401 && this.district.login_type.type == 1 && jump == 1){
          //   alert("登录过期，请重新登录");
          //   localStorage.removeItem("token" + token);
          //   this.$router.push('/login');
          //   return
          // }
          this.FORCASTWEATHER(
            data.data.data || {
              forcast: [
                {
                  weekday: 1,
                  day_weather: "",
                  low_temperature: "",
                  high_temperature: "",
                  day_weather_pic: ""
                },
                {
                  weekday: 2,
                  day_weather: "",
                  low_temperature: "",
                  high_temperature: "",
                  day_weather_pic: ""
                }
              ],
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
            }
          );
        });
    },

    // 获取农情概况-获取光照/二氧化碳/土壤湿度（10cm）/土壤温度（10cm）等采集信息
    getMonitoing(params, token) {
      axios
        .post(
          monitoing,
          {
            ...params
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token
            }
          }
        )
        .then(data => {
          this.MONITOINGFUN(
            data.data.data || {
              carbon_dioxide: [],
              soil_moisture: [],
              soil_temperature: [],
              sunlight: [],
              timeline: []
            }
          );
        });
    },
    // 获取气候信息
    getClimateinfo(params, token) {
      axios
        .post(
          climatinfo,
          {
            ...params
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token
            }
          }
        )
        .then(data => {
          /**
           * code == 401时，密令登录/普通登录，过期，需重新密令登录/普通登录
           * @param code 判断登录是否到期
           * @param login_type.type 判断用户登录类型 1.普通登录 2.密令登录
           * @param jump 县区一级别需要二级回跳，市级别需要一级回跳
           */
          console.log("气候信息", data);
          if (data.data.code != undefined) {
            if (data.data.code == 401 && this.district.login_type.type == 2) {
              alert("登录过期，请重新登录");
              localStorage.removeItem("token" + token);
              this.$router.push("/secretRegistration");
              return;
            }
            if (data.data.code == 401 && this.district.login_type.type == 1) {
              alert("登录过期，请重新登录");
              localStorage.removeItem("token" + token);
              this.$router.push("/login");
              return;
            }
          }
          this.SETCLIMATINFO(
            data.data.data || {
              climate: ""
            }
          );
        });
    },
    // 获取农情核心数据一览
    getArgricore(params, token) {
      axios
        .post(
          argricore,
          {
            ...params
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token
            }
          }
        )
        .then(data => {
          console.log("农情核心数据一览", data);
          this.SETARGRICORE(
            data.data.data || [
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              },
              {
                data_unit: "",
                data_value: "",
                icon_url: "",
                title: ""
              }
            ]
          );
        });
    }
  },
  mounted() {
    // this.autoSwitchFun();
    // 获取地域信息后调用的接口合集
    this.getDistrict().then(res => {
      if ("county" in res) {
        /**
         * 跳转密令登录
         * ① 没有token
         * ② login_type.type == 2
         */
        let token = localStorage.getItem("token" + res.county.county_id);
        if (!token && res.login_type.type == 2) {
          this.$router.push("/secretRegistration");
          return;
        }
        /**
         * 跳转普通登录
         * ① 没有token
         * ② login_type.type == 1
         */
        if (!token && res.login_type.type == 1) {
          this.$router.push("/login");
          return;
        }
        // 获取预警&气象信息
        this.getScene(
          {
            district_name: res.county.county_name,
            district_code: res.county.county_id
          },
          token,
          2
        );
        // 获取农情概况-获取光照/二氧化碳/土壤湿度（10cm）/土壤温度（10cm）等采集信息
        this.getMonitoing(
          {
            district_code: res.county.county_id,
            type: "sunlight,carbon_dioxide,soil_moisture,soil_temperature"
          },
          token
        );
        // 获取气候信息
        this.getClimateinfo({ district_code: res.county.county_id }, token);
        //获取农情核心数据一览
        this.getArgricore({ district_code: res.county.county_id }, token);
      } else {
        let token = localStorage.getItem("token" + res.city.city_id);
        console.log(token);
        if (!token && res.login_type.type == 2) {
          this.$router.push("/secretRegistration");
          return;
        }
        if (!token && res.login_type.type == 1) {
          this.$router.push("/login");
          return;
        }
        this.getScene(
          {
            district_name: res.city.city_name,
            district_code: res.city.city_id
          },
          token,
          1
        );
        this.getMonitoing(
          {
            district_code: res.city.city_id,
            type: "sunlight,carbon_dioxide,soil_moisture,soil_temperature"
          },
          token
        );
        this.getClimateinfo(
          {
            district_code: res.city.city_id
          },
          token
        );
        this.getArgricore({ district_code: res.city.city_id }, token);
      }
    });
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.container {
  width: 1920px;
  height: 1080px;
  background-image: url("../../assets/bg.png");
  background-size: 100% 100%;
  display: flex;
}
.navbar {
  width: 320px;
}
.navbar .titPlay {
  width: 320px;
  height: 100px;
  color: #fff;
  font-size: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: play 10s linear infinite;
}

.navbar .titPlay :nth-child(2) {
  font-size: 10px;
}
.navbar .tit {
  animation: fadeTit 20s linear infinite;
}
.navbar .position {
  position: absolute;
  top: 0;
}
.navbar .veeteam {
  animation: fadeVeeteam 20s linear infinite;
}

.navbar .tit {
  animation: fadeTit 20s linear infinite;
}
.navMain > .nqgk:hover,
.navMain > .nqgkClick {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navMain > .yqgz:hover,
.navMain > .yqgzClick {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navMain > .tsncp:hover,
.navMain > .tsncpClick {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navMain > .yns:hover,
.navMain > .ynsClick {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navMain > .wlw:hover,
.navMain > .wlwClick {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navMain > div {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  cursor: pointer;
  background-image: url("../../assets/navbar/logo-bg.png");
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  text-align: center;
}
.navMain > div > div {
  padding-top: 10px;
}
.navMain > div:hover {
  background-image: url("../../assets/navbar/logo-bg-hover.png");
}
.navBottom {
  border: 1px solid #175fb4;
  width: 100%;
  height: 150px;
  background: rgba(3, 61, 124, 0.4);
  color: #fff;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@-moz-keyframes play {
  0% {
    transform: rotateY(360deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@-webkit-keyframes play {
  0% {
    transform: rotateY(360deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@-o-keyframes play {
  0% {
    transform: rotateY(360deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@keyframes play {
  0% {
    transform: rotateY(360deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@-moz-keyframes fadeTit {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  37.5% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  62.5% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  87.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeTit {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  37.5% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  62.5% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  87.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeTit {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  37.5% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  62.5% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  87.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeTit {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  37.5% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  62.5% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  87.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeVeeteam {
  0% {
    opacity: 1;
  }
  12.5% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  37.5% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  62.5% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeVeeteam {
  0% {
    opacity: 1;
  }
  12.5% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  37.5% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  62.5% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeVeeteam {
  0% {
    opacity: 1;
  }
  12.5% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  37.5% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  62.5% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeVeeteam {
  0% {
    opacity: 1;
  }
  12.5% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  37.5% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  62.5% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
