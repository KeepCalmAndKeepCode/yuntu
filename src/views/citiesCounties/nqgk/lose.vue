<template>
  <div class="lose" style>
    <div class="chartsTit2">农民可支配收入及构成</div>
    <div id="losePie" style></div>
    <div class="total">
      <div class>
        <div style="color:#C23531">4781.70</div>
        <div>工资性收入</div>
      </div>
      <div class>
        <div style="color:#CA8622">6624.28</div>
        <div>经营净收入</div>
      </div>
      <div class>
        <div style="color:#61A0A8">470.74</div>
        <div>财产净收入</div>
      </div>
      <div class>
        <div style="color:#BDA29A">1718.10</div>
        <div>转移净收入</div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted(){
    let losePie = echarts.init(document.getElementById("losePie"));
    let LineData = this.zrzh;

    let lineOption = {
      title:{
        text:"数据来自年鉴",
        textStyle:{
          color:"#fff"
        },
        top:20,
        left:"center"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['工资', '实物福利', '其他', '农业', "工业", "服务业"],
        textStyle: {
          color: '#fff'          // 图例文字颜色
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fff'
          }
        },

        type: 'category',
        data: ['2014', '2015', '2016']

      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        type: 'value'
      },
      series: [
        {
          name: '工资',
          type: 'bar',
          stack: '工资性收入',
          data: [4680.77, 4702.43, 4781.70]
        },
        {
          name: '实物福利',
          type: 'bar',
          stack: '工资性收入',
          data: [0, 0, 0]
        },
        {
          name: '其他',
          type: 'bar',
          stack: '工资性收入',
          data: [341.12, 360.12, 373.12]
        },
        {
          name: '农业',
          type: 'bar',
          stack: '经营净收入',
          data: [4773.43,4801.43,4873.43]
        },
        {
          name: '工业',
          type: 'bar',
          stack: '经营净收入',
          data: [196.11, 201.55, 213.12]
        },
        {
          name: '服务业',
          type: 'bar',
          stack: '经营净收入',
          data: [150, 232, 201]
        },
        {
          name: '财产净收入',
          type: 'bar',
          stack: '财产净收入',
          data: [450.74,464.74, 470.74]
        }, {
          name: '转移净收入',
          type: 'bar',
          stack: '转移净收入',
          data: [1588.56, 1648.86, 1718.10]
        },


      ]
    };
    losePie.setOption(lineOption);
  }
};
</script>

<style scoped>
.lose {
  background-image: url(../../../assets/bg005.png);
  background-size: 100% 100%;
  width: 400px;
  height: 393px;
  float: left;    
  margin-top: -6px;
}
.chartsTit2 {
  background-image: url(../../../assets/zhongbiao.png);
  background-size: 100% 70%;
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 10px 0;
}
#losePie {
  width: 400px;
  height: 280px;
}
.lose .total{
  display: flex;
  color: #fff;
}
.lose .total>div{
  background-color: rgba(26,50,99,0.7);
  width: 120px;
  margin: 0 4px;
  text-align: center;
  height: 54px;
  line-height: 27px;
}
.lose .total>div>:nth-child(1){
  font-weight: 600;
}
.lose .total>div>:nth-child(2){
  font-size: 15px;
}

</style>
