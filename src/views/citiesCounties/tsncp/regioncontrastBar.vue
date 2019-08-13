<template>
  <div class="productionContainer">
    <div class="chartsTit">
      产区情况对比
    </div>
    <div>
      <div class="" id="bar" style="height: 200px;width:100%;"></div>
    </div>
    <div>
      <div class="" id="bar2" style="height: 200px;width:100%;"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapState } from "vuex";

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
  methods: {
    renderBar1() {
      let dom = document.getElementById("bar");
      let myChart = echarts.init(dom);
      let barOption = {
        title: {
          left: "left",
          textStyle: {
            fontSize: 14,
            fontWeight: 100,
            color: "#fff"
          },
          text: "大蒜价格（元/公斤）"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "0%",
          containLabel: true
        },
        legend: {
          data: [this.countyName, "邳州", "太仓", "金乡", "莱芜"],
          top: "10%",
          textStyle: {
            color: "#fff"
          }
        },

        grid: {
          left: "3%",
          right: "4%",
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["紫皮蒜", "四六瓣", "苏联蒜", "苔蒜"],
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#fff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 7,
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            name: this.countyName ,
            type: "bar",
            data: [8.5, 8.2, 8.1, 7.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 20
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#864efa"
                  },
                  {
                    offset: 0,
                    color: "#61d1ff"
                  }
                ])
              }
            }
          },
          {
            name: "邳州",
            type: "bar",
            data: [8.4, 8.2, 8.0, 7.7],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#822c87"
                  },
                  {
                    offset: 0,
                    color: "#d52786"
                  }
                ])
              }
            }
          },
          {
            name: "太仓",
            type: "bar",
            data: [8.5, 8.2, 8.1, 7.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#0c9aa8"
                  },
                  {
                    offset: 0,
                    color: "#22e2f7"
                  }
                ])
              }
            }
          },
          {
            name: "金乡",
            type: "bar",
            data: [8.3, 8.2, 8.1, 7.9],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#1c3788"
                  },
                  {
                    offset: 0,
                    color: "#0072e7"
                  }
                ])
              }
            }
          },
          {
            name: "莱芜",
            type: "bar",
            data: [8.2, 8.1, 8.0, 7.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#822c87"
                  },
                  {
                    offset: 0,
                    color: "#d52786"
                  }
                ])
              }
            }
          }
        ]
      };
      myChart.setOption(barOption);
    },
    renderBar2() {
      let dom2 = document.getElementById("bar2");
      let myChart2 = echarts.init(dom2);
      let bar2option = {
        title: {
          left: "left",
          textStyle: {
            fontSize: 14,
            fontWeight: 100,
            color: "#fff"
          },
          text: "干辣椒价格（元/公斤）"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "0%",
          containLabel: true
        },
        legend: {
          data: [this.countyName , "邳州", "太仓", "金乡", "莱芜"],
          top: "10%",
          textStyle: {
            color: "#fff"
          }
        },

        grid: {
          left: "3%",
          right: "4%",
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["子弹头", "辣椒王", "三樱6号", "三樱8号"],
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#fff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 16,
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            name: this.countyName ,
            type: "bar",
            data: [17.5, 17.3, 17.1, 16.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#864efa"
                  },
                  {
                    offset: 0,
                    color: "#61d1ff"
                  }
                ])
              }
            }
          },
          {
            name: "邳州",
            type: "bar",
            data: [17.6, 17.4, 17.2, 17],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#822c87"
                  },
                  {
                    offset: 0,
                    color: "#d52786"
                  }
                ])
              }
            }
          },
          {
            name: "太仓",
            type: "bar",
            data: [17.3, 17.2, 17.0, 16.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#0c9aa8"
                  },
                  {
                    offset: 0,
                    color: "#22e2f7"
                  }
                ])
              }
            }
          },
          {
            name: "金乡",
            type: "bar",
            data: [17.4, 17.2, 17.0, 16.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#1c3788"
                  },
                  {
                    offset: 0,
                    color: "#0072e7"
                  }
                ])
              }
            }
          },
          {
            name: "莱芜",
            type: "bar",
            data: [17.0, 17.2, 17.1, 16.8],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多

              emphasis: {
                barBorderRadius: 30
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],

                /* label: {
                show: true,//是否展示
                textStyle: {
                    
                    fontSize : '12',
                    fontFamily : '微软雅黑',
                }
            }, */
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#822c87"
                  },
                  {
                    offset: 0,
                    color: "#d52786"
                  }
                ])
              }
            }
          }
        ]
      };
      myChart2.setOption(bar2option);
    }
  },
  mounted(){
    this.renderBar1();
    this.renderBar2();
  }
};
</script>

<style scoped>
.productionContainer {
  height: 465px;
  background-image: url("../../../assets/bg3.png");
  background-size: 100% 100%;
  margin-top: 20px;
  width: 100%;
}
.chartsTit {
  background-image: url(../../../assets/d1.png);
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 0 auto;
  padding: 20px 8px 0;
  width: 66.6%;
}
</style>
