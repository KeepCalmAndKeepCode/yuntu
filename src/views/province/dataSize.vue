<template>
  <div class="dataSize">
    <h2 class="title">数据量</h2>
    <div class="time-axis">
      <div class="subHead">
        <span>地区</span>
        <span>数据量(GB)</span>
      </div>
      <div id="dom"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dimeAxis: [
        {
          region: "郑州市",
          color_block: "",
          data_quantity: "5.14"
        },
        {
          region: "开封市",
          color_block: "",
          data_quantity: "2.19"
        },
        {
          region: "平顶山市",
          color_block: "",
          data_quantity: "2.18"
        },
        {
          region: "洛阳市",
          color_block: "",
          data_quantity: "3.16"
        },
        {
          region: "商丘市",
          color_block: "",
          data_quantity: "2.13"
        },
        {
          region: "安阳市",
          color_block: "",
          data_quantity: "2.18"
        },
        {
          region: "新乡市",
          color_block: "",
          data_quantity: "3.08"
        },
        {
          region: "许昌市",
          color_block: "",
          data_quantity: "2.14"
        },
        {
          region: "鹤壁市",
          color_block: "",
          data_quantity: "1.10"
        },
        {
          region: "焦作市",
          color_block: "",
          data_quantity: "2.12"
        },
        {
          region: "濮阳市",
          color_block: "",
          data_quantity: "1.63"
        },
        {
          region: "漯河市",
          color_block: "",
          data_quantity: "1.04"
        },
        {
          region: "三门峡市",
          color_block: "",
          data_quantity: "2.63"
        },
        {
          region: "周口市",
          color_block: "",
          data_quantity: "3.10"
        },
        {
          region: "驻马店市",
          color_block: "",
          data_quantity: "2.04"
        },
        {
          region: "南阳市",
          color_block: "",
          data_quantity: "3.13"
        },
        {
          region: "信阳市",
          color_block: "",
          data_quantity: "3.10"
        },
        {
          region: "济源市",
          color_block: "",
          data_quantity: "1.02"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    let dom = document.getElementById("dom");
    let myChart = echarts.init(dom);
    let option = {
      grid: {
        left: "50px",
        right: "0",
        bottom: "0",
        top: "0",
        containLabel: true
      },
      xAxis: {
        show: false
      },
      yAxis: {
        type: "category",
        data: [
          "郑州市",
          "开封市",
          "平顶山市",
          "洛阳市",
          "商丘市",
          "安阳市",
          "新乡市",
          "许昌市",
          "鹤壁市",
          "焦作市",
          "濮阳市",
          "漯河市",
          "三门峡市",
          "周口市",
          "驻马店市",
          "南阳市",
          "信阳市",
          "济源市"
        ],
        inverse: true,
        boundaryGap: ["30%", "30%"],
        nameLocation: "start",

        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: "#0065B3",
            width: 10,
            type: "dashed"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#787878",
            type: "solid"
          }
        },
        axisLabel: {
          color: "#ffffff",
          margin: 50
        }
      },
      series: [
        {
          type: "bar",
          barwidth: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#47c5f9"
                },
                {
                  offset: 1,
                  color: "#4581ec"
                }
              ],
              false
            )
          },
          label: {
            show: true,
            position: "insideRight"
          },
          data: [
            5.14,
            2.19,
            2.18,
            3.16,
            2.13,
            2.18,
            3.08,
            2.14,
            1.1,
            2.12,
            1.63,
            1.04,
            2.63,
            3.1,
            2.04,
            3.13,
            3.1,
            1.02
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped>
.dataSize {
  background: url("./images/bk1.png") center 60px no-repeat;
}

.title {
  background: url("./images/title1.png") no-repeat;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  text-align: left;
  margin-left: 20px;
  margin-top: 6px;
  padding-left: 30px;
}
.subHead {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 50px;
}
.subHead span {
  width: 50%;
  text-align: center;
}
#dom {
  width: 95%;
  height: 655px;
}
</style>
