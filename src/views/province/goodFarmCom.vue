<template>
  <div class="yns">
    <h2>益农社</h2>
    <div class="pies">
      <div id="pie1"></div>
      <div id="pie2"></div>
      <div id="pie3"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
    }
  },
  methods: {
    pie1() {
      var dom = document.getElementById("pie1");
      var myChart = echarts.init(dom);

      var option = {
        title: {
          text: "简易站14238",
          top: "75%",
          left: "center",
          textStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} : (101.66%)"
        },
        series: [
          {
            name: "简易站14238",
            center: ["50%", "40%"],
            radius: ["55%", "56%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            data: [
              {
                value: 100,
                name: "",
                label: {
                  normal: {
                    show: true,
                    formatter: "101.66 %",
                    textStyle: {
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#fff"
                    },
                    position: "center"
                  }
                },
                labelLine: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#5886f0",
                    borderColor: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: "#dfde00"
                        },
                        {
                          offset: 1,
                          color: "#da8800"
                        }
                      ]
                    ),
                    borderWidth: 10
                  },
                  emphasis: {
                    color: "#5886f0",
                    borderColor: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: "#dfde00"
                        },
                        {
                          offset: 1,
                          color: "#da8800"
                        }
                      ]
                    ),
                    borderWidth: 14
                  }
                }
              },
              {
                name: " ",
                value: 0,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    pie2(){
      var dom = document.getElementById("pie2");
      var myChart = echarts.init(dom);
      var option = {
        "title": {
          "text": '标准站12209',
          "top": '75%',
          "left": 'center',
          "textStyle": {
            "fontSize": 16,
            "fontWeight": "bold",
            "color": "#fff"
          }
        },
        "tooltip": {
          "trigger": 'item',
          "formatter": "{a} : (100.06%)"
        },
        "series": [{
          "name": "标准站12209",
          "center": [
            "50%",
            "40%"
          ],
          "radius": [
            "55%",
            "56%"
          ],
          "clockWise": false,
          "hoverAnimation": false,
          "type": "pie",
          "data": [{
            "value": 100,
            "name": "",
            "label": {
              "normal": {
                "show": true,
                "formatter": '100.06 %',
                "textStyle": {
                  "fontSize": 14,
                  "fontWeight": "bold",
                  "color": "#fff",
                },
                "position": "center"
              }
            },
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "normal": {
                "color": "#5886f0",
                "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#4ad4e3'
                }, {
                  offset: 1,
                  color: '#4ea9ea'
                }]),
                "borderWidth": 10
              },
              "emphasis": {
                "color": "#5886f0",
                "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#4ad4e3'
                }, {
                  offset: 1,
                  color: '#4ea9ea'
                }]),
                "borderWidth": 14
              }
            },
          }, {
            "name": " ",
            "value": 0,
            "itemStyle": {
              "normal": {
                "label": {
                  "show": false
                },
                "labelLine": {
                  "show": false
                },
                "color": 'rgba(0,0,0,0)',
                "borderColor": 'rgba(0,0,0,0)',
                "borderWidth": 0
              },
              "emphasis": {
                "color": 'rgba(0,0,0,0)',
                "borderColor": 'rgba(0,0,0,0)',
                "borderWidth": 0
              }
            }
          }]
        }, ]
      };
      myChart.setOption(option, true);
    },
    pie3(){
      var dom = document.getElementById("pie3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var option = {
      "title": {
        "text": '专业站11153',
        "top": '75%',
        "left": 'center',
        "textStyle": {
          "fontSize": 16,
          "fontWeight": "bold",
          "color": "#fff"
        }
      },
      "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : (107.89%)"
      },
      "series": [{
        "name": "专业站11153",
        "center": [
          "50%",
          "40%"
        ],
        "radius": [
          "55%",
          "56%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
          "value": 100,
          "name": "",
          "label": {
            "normal": {
              "show": true,
              "formatter": '107.89 %',
              "textStyle": {
                "fontSize": 14,
                "fontWeight": "bold",
                "color": "#fff",
              },
              "position": "center"
            }
          },
          "labelLine": {
            "show": false
          },
          "itemStyle": {
            "normal": {
              "color": "#5886f0",
              "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#91dd00'
              }, {
                offset: 1,
                color: '#55c349'
              }]),
              "borderWidth": 10
            },
            "emphasis": {
              "color": "#5886f0",
              "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#91dd00'
              }, {
                offset: 1,
                color: '#55c349'
              }]),
              "borderWidth": 14
            }
          },
        }, {
          "name": " ",
          "value": 0,
          "itemStyle": {
            "normal": {
              "label": {
                "show": false
              },
              "labelLine": {
                "show": false
              },
              "color": 'rgba(0,0,0,0)',
              "borderColor": 'rgba(0,0,0,0)',
              "borderWidth": 0
            },
            "emphasis": {
              "color": 'rgba(0,0,0,0)',
              "borderColor": 'rgba(0,0,0,0)',
              "borderWidth": 0
            }
          }
        }]
      }, ]
    };
    myChart.setOption(option, true);
    }
  },
  mounted() {
    this.pie1();
    this.pie2();
    this.pie3();
  }
};
</script>

<style scoped>
.yns {
  background: url("./images/bk4.png") no-repeat;
}
.yns > h2 {
  text-align: left;
  font-size: 16px;
  padding-left: 72px;
}
.pies{
  display: flex;
}
.pies div{
  flex: 1;
  height: 170px;
}
</style>
