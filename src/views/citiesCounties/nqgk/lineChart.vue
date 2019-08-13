<template>
  <div class="lineChart">
    <div class="chartsTit">农业与其他产业对比分析</div>
    <div id="lineChart" style="width: 600px;height: 385px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      zrzh: [
        {
          name: "生产总值",
          data: [1873.63, 2099.53, 2307.9, 2457.32, 2699.44]
        },
        {
          name: "农业",
          data: [117.63, 128.6, 136.2, 120.02, 126.9],
          color: "#FFFF00"
        },
        {
          name: "工业",
          data: [1117.44, 1264.41, 1385.0, 1441.87, 1371.95]
        },
        {
          name: "服务业",
          data: [521.76, 582.7, 655.7, 796.7, 1060.82]
        }
      ]
    };
  },
  mounted() {
    let lineChart = echarts.init(document.getElementById("lineChart"));
    let LineData = this.zrzh;

    let lineOption = {
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: 80
      },
      legend: {
        right: 100,
        textStyle: {
          color: "#fff"
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["2012", "2013", "2014", "2015", "2016"],
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        }
      ],
      series: []
    };

    for (let i = 0; i < LineData.length; i++) {
      lineOption.series.push({
        name: LineData[i].name,
        type: "line",
        smooth: true,
        data: LineData[i].data,
        lineStyle: {
          color: LineData[i].color
        },
        label: {
          show: true,
          formatter: "{a}：{c}",
          color: LineData[i].color
        }
      });
    }

    lineChart.setOption(lineOption);
  }
};
</script>

<style scoped>
.lineChart {
  position: relative;
  background-image: url("../../../assets/bg004.png");
  background-size: 100% 100%;
  float: left;
  width: 652px;
  height: 405px;
  margin-top: 36px;
  margin-left: 20px;
  color: #fff;
  padding-top: 10px;
  margin-right: 23px;
}
.chartsTit {
  background-image: url("../../../assets/dabiao.png");
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
}
</style>
