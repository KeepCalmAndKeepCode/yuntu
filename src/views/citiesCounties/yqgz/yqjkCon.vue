<template>
  <div class="yqjkCon">
    <div class>舆情实时监控</div>
    <div class="yqjkContent">
      <div>
        <div>裂缝、漏水…墙砖一掰就碎，河南扶贫</div>
        <div>{{monthDay}}</div>
      </div>
      <div>
        <div>一季度全国自然灾害致139.6万人次受灾</div>
        <div>{{monthDay}}</div>
      </div>
      <div>
        <div>猪肉价格明显反弹 3月CPI料回“2时代”</div>
        <div>{{monthDay}}</div>
      </div>
      <div>
        <div>生猪市场将呈何走势</div>
        <div>{{monthDay}}</div>
      </div>
      <div>
        <div>青南地区抗击雪灾取得决定性胜利</div>
        <div>{{monthDay}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { nowDate } from "@/utils/getDate.js";
export default {
  data() {
    return {
      nowDate,
      monthDay:""
    };
  },
  mounted(){
  }
};
</script>

<style scoped>
.yqjkContent{
  color: #fff;
  padding: 0 15px;
}
.yqjkContent>div{
display: flex;
height: 45px;
align-items:flex-end;
border-bottom: dashed 1px #0D57AA;
padding-bottom: 5px;
}
.yqjkContent>div>:nth-child(1){
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.yqjkContent>div>:nth-child(2){
  width: 50px;
  text-align: center;
}
</style>
