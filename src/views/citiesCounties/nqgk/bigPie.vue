<template>
  <div class="bigPie">
    <div class="chartsTit">农林牧渔/产业占比</div>
    <div id="pieBig" style></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    let pieBig = echarts.init(document.getElementById("pieBig"));
    let LineData = this.zrzh;

    let lineOption = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        data: ["种植业", "畜牧业", "林业", "渔业"],
        itemGap: 50,
        y: "350px",
        textStyle: {
          color: "#fff" // 图例文字颜色
        }
      },
      series: [
        {
          name: "产值分布",
          type: "pie",
          radius: ["35%", "60%"],
          center: ["50%", "50%"],
          data: [
            { value: 305, name: "种植业" },
            { value: 310, name: "畜牧业" },
            { value: 284, name: "林业" },
            { value: 235, name: "渔业" }
          ],
          label: {
            normal: {
              formatter: "{b|{b}}：{c}万元 \n {per|{d}%}  ",
              rich: {
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 20,
                  lineHeight: 33
                },
                per: {
                  fontSize: 22,
                  lineHeight: 23
                }
              }
            }
          },
          labelLine: {
            show: true,
            length: 15,
            length2: 50
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ],
      color: ["#45d272", "#f1ab3c", "#e43f50", "#2d94df"]
    };

    pieBig.setOption(lineOption);
  }
};
</script>

<style scoped>
.bigPie {
  float: left;
  width: 670px;
  margin-top: 0px;
  margin-left: 20px;

  height: 405px;
  color: #ffffff;
}
.chartsTit {
  background-image: url(../../../assets/dabiao.png);
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
}
#pieBig {
  width: 650px;
  height: 392px;
  bottom: 30px;
  background-image: url(../../../assets/bg003.png);
  background-size: 100% 100%;
}
</style>
