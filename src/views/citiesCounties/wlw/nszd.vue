<template>
  <div class="nszd">
    <div class="nszdTit">农事指导</div>
    <div class="nszdCon">
      <div class="">
        <div>
          <img src="../../../assets/wlw-woniu.png" alt="" srcset="" />
          <div>喷灌指数</div>
        </div>
        <div>
          <div>适宜</div>
          <div>无需担心风力的影响</div>
        </div>
      </div>
      <div class="">
        <div>
          <img src="../../../assets/wlw-penhu.png" alt="" srcset="" />
          <div>打药指数</div>
        </div>
        <div>
          <div>不适宜</div>
          <div>天气干旱不宜用药</div>
        </div>
      </div>
      <div class="">
        <div>
          <img src="../../../assets/wlw-jiandao.png" alt="" srcset="" />
          <div>修剪指数</div>
        </div>
        <div>
          <div>较适宜</div>
          <div>无需担心伤口恶化</div>
        </div>
      </div>
      <div class="">
        <div>
          <img src="../../../assets/wlw-chucao.png" alt="" srcset="" />
          <div>除草指数</div>
        </div>
        <div>
          <div>适宜</div>
          <div>土壤较干杂草易死亡</div>
        </div>
      </div>
      <div class="">
        <div>
          <img src="../../../assets/wlw-shifei.png" alt="" srcset="" />
          <div>施肥指数</div>
        </div>
        <div>
          <div>适宜</div>
          <div>注意施肥后及时灌溉</div>
        </div>
      </div>
      <div class="">
        <div>
          <img src="../../../assets/wlw-xizao.png" alt="" srcset="" />
          <div>收获指数</div>
        </div>
        <div>
          <div>适宜</div>
          <div>天干易于作物收取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nszd {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 63%;
  height: 100px;
  /* background: url(../../../assets/nszd.png) no-repeat center center; */
}

.nszd > .nszdTit {
  color: #50e8fd;
  text-align: center;
  background-image: url(../../../assets/wlw-tit1.png);
  background-repeat: no-repeat;
  background-position: bottom;
  height: 25px;
}

.nszd > .nszdCon {
  display: grid;
  grid-template: 80px / repeat(6, 1fr);
  grid-gap: 5px;
  color: #fff;
  padding: 10px 15px;
}

.nszd > .nszdCon > div {
  display: flex;
  background-color: rgba(11, 54, 117, 0.8);
  align-items: center;
  padding: 0 4px;
}

.nszd > .nszdCon > div > :nth-child(1) {
  color: #50e8fd;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.nszd > .nszdCon > div > :nth-child(1) img {
  width: 50px;
  height: 50px;
}
.nszd > .nszdCon > div > :nth-child(2) > :nth-child(1) {
  font-size: 18px;
}
.nszd > .nszdCon > div > :nth-child(2) > :nth-child(2) {
  font-size: 12px;
}
</style>
