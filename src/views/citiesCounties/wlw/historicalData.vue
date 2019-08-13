<template>
  <div class="tr">
    <div class="tr-top">
      <ul>
        <li>
          <img src="../../../assets/wdj.png" alt="" />
          <p><span>空气温/湿度</span><span>20℃/39.0%</span></p>
        </li>
        <li>
          <img src="../../../assets/1.png" alt="" />
          <p><span>二氧化碳</span><span>459ppm</span></p>
        </li>
        <li>
          <img src="../../../assets/2.png" alt="" />
          <p><span>土壤温/湿度</span><span>59.8/-2.6</span></p>
        </li>
        <li>
          <img src="../../../assets/3.png" alt="" />
          <p><span>光照强度</span><span>150LX</span></p>
        </li>
        <li>
          <img src="../../../assets/4.png" alt="" />
          <p><span>风力</span><span>2级</span></p>
        </li>
        <li>
          <img src="../../../assets/5.png" alt="" />
          <p><span>降雨量</span><span>无</span></p>
        </li>
      </ul>
    </div>
    <div class="tr-bottom">
      <div class="ls"></div>
      <div id="zzt" class="zzt"></div>
      <div class="title-bk">
        <div class="title-bk-l kq">
          <div style="height:3px; width:35px;background:#a8524a;margin: 22px 0;"></div>
          <p>空气温度(℃)</p>
        </div>
        <div class="title-bk-r kq">
          <div style="height:3px; width:35px;background:#5f9157;margin: 22px 0;"></div>
          <p>空气湿度(%)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted(){
    var dom = document.getElementById("zzt");
    var myChart = echarts.init(dom);
    //对话框图片
    //对话框图片
    // var uploadedDataURL = "/asset/get/s/data-1547533200844-7eBMgp66l.png";
    var option = {
      backgroundColor: "transparent",
      grid: {
        top: "9%",
        bottom: "12%",
        left: "15%",
        right: "4%"
      },
      // tooltip: {
      //     trigger: 'axis',
      //     label: {
      //         show: true
      //     }
      // },

      xAxis: {
        boundaryGap: true, //默认，坐标轴留白策略
        axisLine: {
          show: false,
          lineStyle: {
            color: "#fff"
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        data: ["4.07", "4.08", "4.09", "4.10", "4.11", "4.12", "4.13"]
      },
      yAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: "#fff"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            // type: 'dashed',
            color: "rgba(33,148,246,0.2)"
          }
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: "transparent"
          }
        }
      },
      series: [
        {
          type: "line",
          symbol: "circle",
          symbolSize: 7,
          lineStyle: {
            color: "#a8524a",
            shadowBlur: 12,
            shadowColor: "rgb(33,148,246,0.9)",
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
          itemStyle: {
            color: "#a8524a",
            borderWidth: 1,
            borderColor: "#FFF"
          },
          label: {
            show: false,
            distance: 1,
            emphasis: {
              show: true,
              offset: [25, -2],
              //borderWidth:1,
              // borderColor:'rgb(33,148,246)',
              //formatter:'{bg|{b}\n数据量:{c}}',
              // backgroundColor: {
              //   image: uploadedDataURL
              // },
              color: "#FFF",
              padding: [8, 20, 8, 6],
              //width:60,
              height: 36,
              formatter: function(params) {
                var name = params.name;
                var value = params.data;
                var str = name + "\n空气温度：" + value + "℃";
                return str;
              },
              rich: {
                bg: {
                  // backgroundColor: {
                  //   image: uploadedDataURL
                  // },
                  width: 78,
                  //height:42,
                  color: "#FFF",
                  padding: [20, 0, 20, 10]
                },
                br: {
                  width: "100%",
                  height: "100%"
                }
              }
            }
          },
          data: [12, 20, 29, 9, 22, 16, 8]
        },
        {
          type: "line",
          symbol: "circle",
          symbolSize: 7,
          lineStyle: {
            color: "#5f9157",
            shadowBlur: 12,
            shadowColor: "rgb(33,148,246,0.9)",
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
          itemStyle: {
            color: "#5f9157",
            borderWidth: 1,
            borderColor: "#FFF"
          },
          label: {
            show: false,
            distance: 1,
            emphasis: {
              show: true,
              offset: [25, -2],
              //borderWidth:1,
              // borderColor:'rgb(33,148,246)',
              //formatter:'{bg|{b}\n数据量:{c}}',
              // backgroundColor: {
              //   image: uploadedDataURL
              // },
              color: "#FFF",
              padding: [8, 20, 8, 6],
              //width:60,
              height: 36,
              formatter: function(params) {
                var name = params.name;
                var value = params.data;
                var str = name + "\n空气湿度：" + value + "%";
                return str;
              },
              rich: {
                bg: {
                  // backgroundColor: {
                  //   image: uploadedDataURL
                  // },
                  width: 78,
                  //height:42,
                  color: "#FFF",
                  padding: [20, 0, 20, 10]
                },
                br: {
                  width: "100%",
                  height: "100%"
                }
              }
            }
          },
          data: [16, 27, 36, 14, 28, 20, 12]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped>
.tr {
  position: absolute;
  top: 50px;
  right: 600px;
  height: 535px;
}

.tr-bottom {
  position: absolute;
  bottom: 0;
  right: 6px;
}

.ls {
  margin: 0 auto;
  height: 20px;
  width: 257px;
  background: url(../../../assets/ls.png) no-repeat center center;
}

.zzt {
  width: 256px;
  height: 200px;
}

.title-bk {
  display: flex;
  justify-content: space-around;
  height: 60px;
  width: 100%;
}

.kq {
  display: flex;
  justify-content: space-around;
  width: 120px;
  color: #fff;
  line-height: 45px;
  font-size: 15px;
  /* padding: 20px 0; */
}
.tr-top ul{
  margin: 0;
}
.tr-top ul li {
  margin: 5px;
  width: 225px;
  display: flex;
  justify-content: space-between;
  background: #083570;
  color: #fff;
  font-size: 14px;
  line-height: 36px;
}

.tr-top ul li p {
  display: flex;
  justify-content: space-around;
  width: 175px;
  margin: 0;
}
</style>
