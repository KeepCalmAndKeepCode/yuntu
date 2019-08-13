<template>
  <div class="">
    <div class="chartsTit">舆情走势图</div>
    <div id="chartsLine"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapState } from "vuex";
import { trend } from "@/utils/interfaces.js";
import axios from "axios";

export default {
  computed: {
    ...mapState(["district"])
  },
  methods: {
    // 获取舆情走势数据
    getTrend(params,token) {
      return new Promise(res => {
        axios
          .post(
            trend,
            {
              ...params
            },
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
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
      let dataDetails =  data.data.data[0];
      let line = echarts.init(document.getElementById("chartsLine"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: dataDetails.names,
          y: "2%",
          left: "center",
          textStyle: {
            color: "#01bffd"
          }
        },
        grid: {
          left: "1%",
          top: "13%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: dataDetails.x.slice(-7),
          axisLabel: {
            textStyle: {
              color: "#01bffd"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#01bffd",
              fontSize: "10px"
            }
          }
        },
        series: [
          {
            name:dataDetails.names[0],
            type: "line",
            stack: "总量",
            data: dataDetails.ys[0].slice(-7),
            lineStyle: {
              color: "#27b0de"
            },
            itemStyle: {
              normal: {
                color: "#27b0de"
              }
            }
          },
          {
            name:dataDetails.names[1],
            type: "line",
            stack: "总量",
            data: dataDetails.ys[1].slice(-7),
            lineStyle: {
              color: "#e0833a"
            },
            itemStyle: {
              normal: {
                color: "#e0833a"
              }
            }
          },
          {
            name:dataDetails.names[2],
            type: "line",
            stack: "总量",
            data: dataDetails.ys[2].slice(-7),
            lineStyle: {
              color: "#ff0000"
            },
            itemStyle: {
              normal: {
                color: "#ff0000"
              }
            }
          },
          {
            name:dataDetails.names[3],
            type: "line",
            stack: "总量",
            data: dataDetails.ys[3].slice(-7),
            lineStyle: {
              color: "#e2e507"
            },
            itemStyle: {
              normal: {
                color: "#e2e507"
              }
            }
          },
          {
            name:dataDetails.names[4],
            type: "line",
            stack: "总量",
            data: dataDetails.ys[4].slice(-7),
            lineStyle: {
              color: "#A3CA56"
            },
            itemStyle: {
              normal: {
                color: "#A3CA56"
              }
            }
          }
        ]
      };
      line.setOption(option);
    }
  },
  mounted(){
    let token = '';
    let trendParams = {};
    if ("county" in this.district) {
      trendParams.district_code = this.district.county.county_id;
      trendParams.province = this.district.province.province_name;
      trendParams.city = this.district.city.city_name;
      trendParams.zone = this.district.county.county_name;

      token = localStorage.getItem("token" + this.district.county.county_id);
    } else {
      trendParams.district_code = this.district.city.city_id;
      trendParams.province = this.district.province.province_name;
      trendParams.city = this.district.city.city_name;

      token = localStorage.getItem("token" + this.district.city.city_id);
    }

    this.getTrend(trendParams,token).then(res => {
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
#chartsLine {
  width: 100%;
  height: 260px;
}
</style>
