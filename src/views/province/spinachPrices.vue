<template>
  <div class="spinachPrices">
    <h2>蔬菜价格指数</h2>
    <div class="content">
      <div class>
        鲜菜的价格指数
        <span>{{date}}</span>
      </div>
      <div class>92.2</div>
      <div class>
        <span>最高：94.7</span>
        <span>最低：90</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  methods: {
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  },
  mounted() {
    this.date = this.getNowFormatDate();
  }
};
</script>

<style scoped>
.spinachPrices {
  background: url(./images/bk5.png) no-repeat;
  background-position: bottom;
  background-size: 95% 90%;
}
.spinachPrices h2 {
  background: url(./images/title2.png) no-repeat;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
  margin: 35px 0 0 25px;
  padding-left: 10px;
}
.content >:nth-child(1){
  height: 50px;
  line-height: 50px;
}
.content >:nth-child(2){
  height: 50px;
  line-height: 50px;
  color: #0ae;
  font-size: 32px;
  font-weight: 600;
}
.content >:nth-child(3){
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
</style>