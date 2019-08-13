<template>
  <div id="temperature"></div>
</template>

<script>
import { mapState } from "vuex";
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["monitoing"]),
  },
  watch: {
    monitoing(newData,oldData){
      let lineTemperatureChart = echarts.init(
        document.getElementById("temperature")
      );
      let lineTemperatureOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              extraCssText: "box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);",
              textStyle: {
                color: "#666"
              }
            }
          },
          backgroundColor: "rgba(255,255,255,0.8)",
          extraCssText: "box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);",
          textStyle: {
            color: "#666"
          }
        },
        toolbox: {
          show: false,
          feature: {
            magicType: {
              show: true,
              type: ["line", "line"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ["温度", "湿度"],
          textStyle: {
            color: "#fff",
            fontSize: "12"
          }
        },
        grid: {
          top: 40,
          left: 30,
          right: 20,
          bottom: 20,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: newData.timeline,
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              // interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              //rotate:-30,
              textStyle: {
                color: "#fff",
                fontSize: "12"
              },
              lineStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 1,
                width: "1"
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: "温度（℃）",
            type: "value",
            nameTextStyle: {
              fontSize: 14
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: "1"
              }
            },
            splitLine: {
              show: false
            }
          },
          {
            name: "湿度（%）",
            type: "value",
            nameTextStyle: {
              fontSize: 14
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "12"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#fff",
                opacity: 1
              }
            }
          }
        ],
        series: [
          {
            name: "温度",
            type: "line",
            // barWidth: 15,
            data: newData.soil_temperature,
            itemStyle: {
              normal: {
                //barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#229aff"
                  },
                  {
                    offset: 1,
                    color: "#13bfe8"
                  }
                ])
              }
            }
          },
          {
            name: "湿度",
            yAxisIndex: 1,
            type: "line",
            // showAllSymbol: true,
            // symbol: "emptyCircle",
            // symbolSize: 6,
            data: this.monitoing.soil_moisture,
            itemStyle: {
              normal: {
                color: "#fdb94e"
              }
            }
          }
        ]
      };
      lineTemperatureChart.setOption(lineTemperatureOption);
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
#temperature {
  width: 100%;
  height: 50%;
}
</style>
