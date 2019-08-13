<template>
  <div class="soil3">
    <span style="color:#fcff00;margin-left: 20px;">时令</span>
    ：已过{{forcastWeather.weather.jieqi.pre}}，即将{{forcastWeather.weather.jieqi.post}}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["forcastWeather"])
  },
  mounted() {}
};
</script>

<style scoped>
main .left .soil3 {
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 5px;
  font-size: 12px;
  text-align: center;
}
</style>
