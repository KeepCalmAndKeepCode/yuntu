<template>
  <div class="tfsjCon">
    <div class>突发事件</div>
    <div class="tfsjContent">
      <div>
        <div>1</div>
        <div>裂缝、漏水…墙砖一掰就碎，河南扶贫</div>
      </div>
      <div>
        <div>2</div>
        <div>一季度全国自然灾害致139.6万人次受灾</div>
      </div>
      <div>
        <div>3</div>
        <div>猪肉价格明显反弹 3月CPI料回“2时代”</div>
      </div>
      <div>
        <div>4</div>
        <div>生猪市场将呈何走势</div>
      </div>
      <div>
        <div>5</div>
        <div>青南地区抗击雪灾取得决定性胜利</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tfsjContent{
  color: #fff;
}
.tfsjContent>div{
  display: flex;
  align-items: center;
  height: 50px;
}
.tfsjContent>div>:nth-child(1){
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.tfsjContent>:nth-child(1)>:nth-child(1){
  background-color: #DE5C6B;
}
.tfsjContent>:nth-child(2)>:nth-child(1){
  background-color: #F2AA3D;
}
.tfsjContent>:nth-child(3)>:nth-child(1){
  background-color: #A3CA56;
}
.tfsjContent>:nth-child(4)>:nth-child(1){
  background-color: #43D375;
}
.tfsjContent>:nth-child(5)>:nth-child(1){
  background-color: #2C95DF;
}
.tfsjContent>div>:nth-child(2){
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
