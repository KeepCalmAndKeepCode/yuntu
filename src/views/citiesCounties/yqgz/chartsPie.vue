<template>
  <div class>
    <div class="chartsTit">舆情载体统计</div>
    <div id="chartsPie"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapState } from "vuex";
import { channel } from "@/utils/interfaces.js";
import axios from "axios";

export default {
  computed: {
    ...mapState(["district"])
  },
  data() {
    return {};
  },
  methods: {
    // 获取舆情载体数据
    getChannel(params,token) {
      return new Promise(res => {
        axios.post(channel,
            {
              ...params
            },
            {
              headers: {
                "Content-Type":"application/x-www-form-urlencoded;charset=utf-8",
                token
              }
            }
          )
          .then(data => {
            res(data);
          });
      });
    },
    render(data) {
      let dataDetails = data.data.data;
      let pie = echarts.init(document.getElementById("chartsPie"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        color: ["#43d375", "#a3ca56", "#f2aa3d", "#e43f51", "#2c95df"],
        legend: {
          orient: "horizontal",
          left: "center",
          bottom: 0,
          data: ["新闻", "微博", "微信", "论坛", "博客"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "75%"],
            //roseType : 'area',
            label: {
              normal: {
                formatter: "{a} {b}{c} {d}% "
              }
            },
            data: [
              { value: dataDetails.news, name: "新闻" },
              { value: dataDetails.blo, name: "微博" },
              { value: dataDetails.web, name: "微信" },
              { value: dataDetails.bbs, name: "论坛" },
              { value: dataDetails.mic, name: "博客" }
            ]
          }
        ]
      };
      pie.setOption(option);
    }
  },
  mounted() {
    let token = '';
    let channelParams = {};
    if ("county" in this.district) {
      channelParams.district_code = this.district.county.county_id;
      channelParams.province = this.district.province.province_name;
      channelParams.city = this.district.city.city_name;
      channelParams.zone = this.district.county.county_name;

      token = localStorage.getItem("token" + this.district.county.county_id);
    } else {
      channelParams.district_code = this.district.city.city_id;
      channelParams.province = this.district.province.province_name;
      channelParams.city = this.district.city.city_name;

      token = localStorage.getItem("token" + this.district.city.city_id);
    }
    this.getChannel(channelParams,token).then(res => {
      this.render(res);
    });
  }
};
</script>

<style scoped>
.chartsTit {
  background-image: url("../../../assets/yqTitBg.png");
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
}
#chartsPie {
  width: 100%;
  height: 220px;
}
</style>
