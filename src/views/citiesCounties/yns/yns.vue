<template>
  <iframe class="ynsContainer" :src="countyName" frameborder="0"></iframe>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["district"]),
    countyName(){
      if (this.district.county == undefined) {
          return "http://www.365960.cn/dsj/city/index2.jsp?areaname=" + this.district.city.city_name;
        } else {
          return "http://www.365960.cn/dsj/city/index2.jsp?areaname=" + this.district.county.county_name;
        }
    }
  }
}
</script>

<style scoped>
.ynsContainer{
  width: 1600px;
  height: 1080px;
}
</style>
