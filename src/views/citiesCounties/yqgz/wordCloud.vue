<template>
  <div class="rdsjCon">
    <div class>热点事件</div>
    <div class="con">
      <canvas width="380" height="300" id="myCanvas"></canvas>
      <div id="tags" style="display: none;">
        <a href="">智慧农场管理</a>
        <a href="">行情早知道</a>
        <a href="">智能农产管理</a>
        <a href="">专家预测</a>
        <a href="">远程专家诊断</a>
        <a href="">买卖行情</a>
        <a href="">设备自动化控制</a>
        <a href="">水肥一体化管理</a>
        <a href="">粮仓储备</a>
        <a href="">农产品采购</a>
        <a href="">农药种子补贴</a>
        <a href="">智慧畜禽管理</a>
        <a href="">智慧羊场</a>
        <a href="">智慧猪场</a>
        <a href="">贫困户</a>
        <a href="">智能机器人</a>
        <a href="">信息化进村</a>
        <a href="">农业大数据</a>
        <a href="">精准扶贫</a>
        <a href="">种粮大户管理</a>
        <a href="">土地确权颁证</a>大牛
      </div>
    </div>
  </div>
</template>

<script>
import "../../../utils/tagcanvas.min.js"
export default {
  mounted() {
    var i, et = document.getElementById("tags").childNodes;
    for (i in et) {
      et[i].nodeName == "A" && et[i].addEventListener("click", function(e) {
          e.preventDefault();
        });
    }

    TagCanvas.Start("myCanvas", "tags", {
      textFont: "微软雅黑",
      textHeight: 10,
      textColour: "#01BFFD",
      fontSize: 18,
      outlineColour: "#fff",
      reverse: true,
      depth: 0.8,
      dragControl: true,
      decel: 0.95,
      maxSpeed: 0.05,
      initial: [-0.2, 0]
    });
  }
};
</script>

<style>
</style>
