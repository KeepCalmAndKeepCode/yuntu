<template>
  <div class="averageprice">
    <div class="chartsTit">{{ countyName }}/周边/全国均价比对</div>
    <div class="charts">
      <div class="" id="line"></div>
      <div class="" id="line1"></div>
    </div>
  </div>
</template>

<script>
import { pricecmp } from "@/utils/interfaces.js";
import { mapState } from "vuex";
import axios from "axios";
import echarts from "echarts";

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
    return {};
  },
  methods: {
    renderLine() {
      let dom = document.getElementById("line");
      let myChart = echarts.init(dom);
      let lineOption = {
        title: {
          left: "left",
          textStyle: {
            fontSize: 16,
            fontWeight: 100,
            color: "#fff"
          },
          text: "干辣椒　元/公斤"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [this.countyName + "价格", "周边价格", "全国价格"],
          x: "center",
          top: "3%",
          icon: "rect",
          itemWidth: 7,
          itemHeight: 7,
          itemGap: 13,
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "5%",
          top: "15%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            data: ["4.09", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15"]
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 16.8,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: this.countyName + "价格",
            type: "line",
            data: [17.6, 17.5, 17.5, 17.4, 17.3, 17.2, 17.0],
            lineStyle: {
              color: "#67fffe"
            },
            itemStyle: {
              normal: {
                color: "#67fffe"
              }
            }
          },
          {
            name: "周边价格",
            type: "line",
            data: [17.5, 17.5, 17.5, 17.4, 17.3, 17.2, 17.1],
            lineStyle: {
              color: "#8a4fff"
            },
            itemStyle: {
              normal: {
                color: "#8a4fff"
              }
            }
          },
          {
            name: "全国价格",
            type: "line",
            data: [17.7, 17.6, 17.5, 17.5, 17.4, 17.2, 17.0],
            lineStyle: {
              color: "#0082fa"
            },
            itemStyle: {
              normal: {
                color: "#0082fa"
              }
            }
          }
        ]
      };
      myChart.setOption(lineOption);
    },
    renderLine1() {
      let dom1 = document.getElementById("line1");
      let myChart1 = echarts.init(dom1);
      let line1Option = {
        title: {
          left: "left",
          textStyle: {
            fontSize: 16,
            fontWeight: 100,
            color: "#fff"
          },
          text: "大蒜　元/公斤"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [this.countyName + "价格", "周边价格", "全国价格"],
          x: "center",
          top: "3%",
          icon: "rect",
          itemWidth: 7,
          itemHeight: 7,
          itemGap: 13,
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "5%",
          top: "15%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            data: ["4.09", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15"]
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 7.8,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: this.countyName + "价格",
            type: "line",
            data: [8.6, 8.5, 8.5, 8.4, 8.3, 8.1, 7.9],
            lineStyle: {
              color: "#67fffe"
            },
            itemStyle: {
              normal: {
                color: "#67fffe"
              }
            }
          },
          {
            name: "周边价格",
            type: "line",
            data: [8.5, 8.4, 8.3, 8.3, 8.2, 8.1, 8.0],
            lineStyle: {
              color: "#8a4fff"
            },
            itemStyle: {
              normal: {
                color: "#8a4fff"
              }
            }
          },
          {
            name: "全国价格",
            type: "line",
            data: [8.6, 8.5, 8.5, 8.4, 8.3, 8.2, 8.0],
            lineStyle: {
              color: "#0082fa"
            },
            itemStyle: {
              normal: {
                color: "#0082fa"
              }
            }
          }
        ]
      };
      myChart1.setOption(line1Option);
    },
    getPrice(params,token) {

      axios.post( pricecmp, { ...params }, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            token
          }
        }
      )
      .then(data => {
        this.renderLine();
        this.renderLine1();
      });
    }
  },
  mounted() {
    let token = '';
    let averagepriceParams = {};
    console.log(this.district);
    if ("county" in this.district) {
      averagepriceParams.district_code = this.district.county.county_id;
      averagepriceParams.province = this.district.province.province_name;
      averagepriceParams.city = this.district.city.city_name;
      averagepriceParams.zone = this.district.county.county_name;

      token = localStorage.getItem("token" + this.district.county.county_id);
    } else {
      averagepriceParams.district_code = this.district.city.city_id;
      averagepriceParams.province = this.district.province.province_name;
      averagepriceParams.city = this.district.city.city_name;

      token = localStorage.getItem("token" + this.district.city.city_id);
    }
    this.getPrice(averagepriceParams,token);
  }
};
</script>

<style scoped>
.averageprice {
  background-image: url(../../../assets/bg5.png);
  background-size: 100% 100%;
  height: 320px;
  padding-top: 10px;
  margin-top: 20px;
}
.chartsTit{
  background-image: url(../../../assets/d1.png);
  color: #4FE9FC;
  background-repeat: no-repeat;
  text-align: center;
  background-position: 129px 17px;
  font-size: 17px;
  height: 35px;
  background-size: 65%;
  width: 84%;
}
.charts{
  display: flex;
}
#line,#line1{
  width: 46%;
  height: 250px;
  justify-content: space-around;
  padding-top: 25px;
}
</style>
