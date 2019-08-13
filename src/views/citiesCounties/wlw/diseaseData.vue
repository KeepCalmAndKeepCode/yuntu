<template>
  <div class="bk-bottom-r">
    <div class="line xs xw"></div>
    <div class="bottom-middle_bk">
      <div class="bh">
        <div class="bhTit">
          病害数据
        </div>
      </div>
      <div class="ljhy">
        <img src="../../../assets/wlw-yeban.png">
        <div class="bhsjCon">
          <div class="bhsjTit">辣椒叶黄斑</div>
          <div id="bhsj1"></div>
          <div>预警指数：29<span>（正常）</span></div>
        </div>
      </div>
      <div class="dsbf">
        <img src="../../../assets/wlw-baifubing.png">
        <div class="bhsjCon">
          <div class="bhsjTit">大蒜白腐病</div>
          <div id="bhsj2"></div>
          <div>预普指数：32<span>（正常）</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted(){
    let bhsj1 = document.getElementById("bhsj1");
    let bhsj2 = document.getElementById("bhsj2");

    let bhsj1MyChart = echarts.init(bhsj1);
    let bhsj2MyChart = echarts.init(bhsj2);

    let bhsj1Option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,

          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          data: ["0", "1", "2", "3"]
        },
        {
          axisPointer: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "transparent"
            }
          },
          axisTick: {
            show: false
          },

          position: "bottom",
          offset: 20
        }
      ],
      yAxis: {
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "transparent"
          }
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          data: [10, 12, 14, 16, 18, 20, 22],
          type: "line",
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                1,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(15,180,77,0.9)"
                  },
                  {
                    offset: 0.3,
                    color: "rgba(241,248,7, 0.9)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(253,2,2, 0.9)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "rgba(137,189,2,0.27)",
              borderWidth: 1
            }
          }
        }
      ]
    };

    let bhsj2Option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,

          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          data: ["0", "1", "2", "3"]
        },
        {
          axisPointer: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "transparent"
            }
          },
          axisTick: {
            show: false
          },

          position: "bottom",
          offset: 20
        }
      ],
      yAxis: {
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "transparent"
          }
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          data: [10, 12, 14, 16, 18, 20, 22],
          type: "line",
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                1,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(15,180,77,0.9)"
                  },
                  {
                    offset: 0.3,
                    color: "rgba(241,248,7, 0.9)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(253,2,2, 0.9)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "rgba(137,189,2,0.27)",
              borderWidth: 1
            }
          }
        }
      ]
    };

    bhsj1MyChart.setOption(bhsj1Option);
    bhsj2MyChart.setOption(bhsj2Option);
  }
}
</script>

<style scoped>
.bottom-middle_bk {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.bk-bottom-r {
  position: relative;
  float: left;
  width: 582px;
  height: 250px;
  background: url(../../../assets/bk-bg-small.png) no-repeat center center;
}
.xs {
  top: -4px;
}

.xw {
  width: 75px;
}

.bh {
  /* background: url(../../../assets/bh.png) no-repeat center center; */
  width: 100%;
  height: 38px;
}
.bh>.bhTit{
  color: #50E8FD;
  background-image: url(../../../assets/wlw-tit.png);
  text-align: center;
  background-repeat: no-repeat;
  height: 25px;
  background-size: 100% 55%;
  background-position: bottom;
  width: 145px;
  margin: 10px auto 0;
}
.ljhy,.dsbf {
  width: 270px;
  height: 200px;
  display: flex;
  align-items: center;
  /* background: url(../../../assets/ljhb.png) no-repeat center center; */
  
}

#bhsj1,#bhsj2{
  width: 150px;
  height: 50px;
  margin-left: 10px;
}
.bhsjCon>.bhsjTit{
  color: #50E8FD;
  text-align: center;
}
.bhsjCon>:nth-child(3){
  color: #fff;
  text-align: center;  
  font-size: 12px;
  padding-top: 10px;
}
.bhsjCon>:nth-child(3)>span{
  color: #50E8FD;
}
#bhsj1,#bhsj2{
  width: 150px;
  height: 50px;
  margin-left: 10px;
}
.ljhy,.dsbf {
  width: 270px;
  height: 200px;
  display: flex;
  align-items: center;
  /* background: url(../static/images/ljhb.png) no-repeat center center; */
}
</style>
