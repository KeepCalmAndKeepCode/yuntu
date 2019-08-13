<template>
  <div class="grainOutput">
    <h2 class="title">2018全年粮食产量6648.91万吨</h2>
    <div class="content">
      <div class="">
        <div class="">夏粮产量</div>
        <div>
          <strong>3613.70</strong>万吨
        </div>
      </div>
      <div class="">
        <div class="">秋粮产量</div>
        <div>
          <strong>3035.21</strong>万吨
        </div>
      </div>
      <div class="">
        <div class="">夏粮产量</div>
        <div>
          <strong>3602.85</strong>万吨
        </div>
      </div>
      <div class="">
        <div class="">夏粮产量</div>
        <div>
          <strong>2351.38</strong>万吨
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.grainOutput{
  background: url('./images/bk2.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 162px;
}
.title{
  color: #f1694e; 
}
.content{
  display: flex;
}
.content>div{
  flex: 1;
}
.content > :not(:first-child){
  border-left: #ffffff 1px solid;
}
.content strong{
  font-size: 20px;
  color: #0ae;
}
</style>
