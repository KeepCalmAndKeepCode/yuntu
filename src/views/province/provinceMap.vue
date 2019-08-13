<template>
  <div class="provinceMap">
    <h2 class="title">地市农业大数据平台</h2>
    <div id="map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import Json from "./js/41.json";

export default {
  data() {
    return {};
  },
  mounted() {
    echarts.registerMap("henan", Json); // 注册地图
    var that = this;
    var mapChart = echarts.init(document.getElementById("map"));
    var data = [
      {
        name: "郑州市",
        value: 5.14
      },
      {
        name: "开封市",
        value: 2.19
      },
      {
        name: "洛阳市",
        value: 3.16
      },
      {
        name: "平顶山市",
        value: 3.6
      },
      {
        name: "安阳市",
        value: 2.18
      },
      {
        name: "鹤壁市",
        value: 1.1
      },
      {
        name: "新乡市",
        value: 3.6
      },
      {
        name: "焦作市",
        value: 2.12
      },
      {
        name: "濮阳市",
        value: 3.6
      },
      {
        name: "许昌市",
        value: 2.14
      },
      {
        name: "漯河市",
        value: 1.04
      },
      {
        name: "三门峡市",
        value: 2.63
      },
      {
        name: "南阳市",
        value: 3.13
      },
      {
        name: "商丘市",
        value: 2.13
      },
      {
        name: "信阳市",
        value: 3.1
      },
      {
        name: "周口市",
        value: 3.1
      },
      {
        name: "驻马店市",
        value: 2.04
      },
      {
        name: "济源市",
        value: 1.02
      }
    ];
    var yData = [];
    data.sort(function(o1, o2) {
      if (isNaN(o1.value) || o1.value == null) return -1;
      if (isNaN(o2.value) || o2.value == null) return 1;
      return o1.value - o2.value;
    });

    var option = {
      title: {
        text: "",
        textStyle: {
          color: "#04A4F1",
          fontSize: 22
        },
        //subtext:'',
        x: "left",
        y: "top"
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>" //鼠标悬停是显示
      },

      // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
      //layoutSize: 100,
      visualMap: {
        type: "continuous",
        text: ["", ""],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 7,
        inRange: {
          color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"]
        },
        textStyle: {
          color: "#fff"
        },
        bottom: 30,
        left: "50px" //色阶的位置
      },
      grid: {
        map: "henan",
        left: 350,
        top: 80,
        bottom: 30,
        width: "22%"
      },
      xAxis: {
        type: "value",
        scale: true,
        position: "top",
        splitNumber: 1,
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 2,
          textStyle: {
            color: "#c5c5c5"
          }
        }
      },
      yAxis: {
        type: "category",
        nameGap: 16,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#ddd"
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: "#ddd"
          }
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#c5c5c5"
          }
        },
        data: yData
      },
      center: [113.832026, 34.031381], //当前视角的中心点，用经纬度表示
      series: [
        {
          name: "数据量",
          type: "map",
          //geoIndex: 0,
          map: "henan",
          mapType: "henan",
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: "{b}\n",
                textStyle: {
                  fontSize: "12",
                  color: "#921818",
                  fontWeight: "bold"
                }
              },
              borderWidth: 1,
              borderColor: "#fff"
            },
            emphasis: {
              label: {
                show: false
              },
              areaColor: "rgb(213, 214, 79)"
            }
          },
          data: data
        }
      ]
    };
    mapChart.on("click", function(params) {
      var city = params.name;
      if (city == "郑州市") {
        city = "zhengzhou";
      } else if (city == "新乡市") {
        city = "xinxiang";
      } else if (city == "洛阳市") {
        city = "luoyang";
      } else if (city == "安阳市") {
        city = "anyang";
      } else if (city == "焦作市") {
        city = "jiaozuo";
      } else if (city == "许昌市") {
        city = "xuchang";
      } else if (city == "平顶山市") {
        city = "pingdingshan";
      } else if (city == "漯河市") {
        city = "luohe/linying";
      } else if (city == "开封市") {
        city = "kaifeng";
      } else if (city == "濮阳市") {
        city = "puyang";
      } else if (city == "鹤壁市") {
        city = "hebi";
      } else if (city == "南阳市") {
        city = "nanyang";
      } else if (city == "三门峡市") {
        city = "sanmenxia";
      } else if (city == "驻马店市") {
        city = "zhumadian";
      } else if (city == "商丘市") {
        city = "shangqiu";
      } else if (city == "信阳市") {
        city = "xinyang";
      } else if (city == "周口市") {
        city = "zhoukou";
      } else if (city == "济源市") {
        city = "sanmenxia/jiyuan";
      }
      // window.open("/" + city + "/nqgk");
      // window.open("/" + city);
      that.$router.push({path:"/" + city + "/nqgk"})

    });
    mapChart.setOption(option);
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 600px;
}
.provinceMap {
  position: relative;
  background: url(./images/map_bg.png) center center no-repeat;
}
.title {
  position: absolute;
  background: url("./images/title1.png") no-repeat;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  text-align: left;
  margin-left: 20px;
  margin-top: 6px;
  padding-left: 30px;
  width: 300px;
}
</style>
