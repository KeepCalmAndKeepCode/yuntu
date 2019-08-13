<template>
  <div class="video-bk">
    <div class="sp"></div>
    <div id="videoContainer" class="videoContainer">
      <div
        v-for="(item, index) in videos"
        v-show="control == index"
        :key="item.id"
      >
        <video
          :id="'my-video' + index"
          class="video-js vjs-defluat-skin"
          muted
          controls
          preload="auto"
          style="object-fit: fill;"
        >
          <source :src="videos[index]" type="application/x-mpegURL" />
        </video>
      </div>
      <img
        src="../../../assets/w1.png"
        alt=""
        :class="{ addBorder: control == 1 }"
        @click="switchVideo(1)"
        class="img"
      />
      <img
        src="../../../assets/w2.png"
        alt=""
        :class="{ addBorder: control == 2 }"
        @click="switchVideo(2)"
        class="img"
      />
      <img
        src="../../../assets/w1.png"
        alt=""
        :class="{ addBorder: control == 3 }"
        @click="switchVideo(3)"
        class="img"
      />
    </div>
    <div class="jy">
      <div class="jyTit">报告及技术建议</div>
      <div class="jyContent">
        &emsp;&emsp;临颍县中农公司辣椒基地大梁区监测点于2019年4月11日，发生虫害预警，建议及时打农药。
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "videojs-contrib-hls";

export default {
  data() {
    return {
      videos: [
        "http://jnbv22.365960.com:7780/cam/cama2c34153a64609fd0042eeef997e5654/index.m3u8",
        "http://jnbv14.365960.com:7780/cam/cam0802a773235bbd0aae1babeaa3b3f44e/index.m3u8",
        "http://jnbv22.365960.com:7780/cam/cam78f30a71912f3b31c60977f213c194cc/index.m3u8",
        "http://jnbv23.365960.com:7780/cam/camd348dcd08a45a96631430361eb2d38f2/index.m3u8"
      ],
      control: 0
    };
  },
  methods: {
    init() {
      for (let i = 0; i < this.videos.length; i++) {
        let videoObj = videojs(
          "my-video" + i,
          {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            width: 540,
            height: 375,
            muted: false,
            controlBar: true
          },
          function() {
            this.play();
          }
        );
      }
    },
    switchVideo(index) {
      this.control = index;
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
};
</script>

<style scoped>
.video-bk {
  position: absolute;
  height: 91%;
  right: 25px;
  top: 30px;
  padding: 15px 7px;
  background: url(../../../assets/sp.png) no-repeat center center;
}

.sp {
  position: absolute;
  top: -15px;
  left: 37%;
  background: url(../../../assets/xj.png) no-repeat center center;
  z-index: 9;
  width: 175px;
  height: 30px;
}
#videoCon {
  width: 540px;
  height: 375px;
}
.img {
  height: 141px;
  margin-top: 10px;
}
.jy {
  position: absolute;
  bottom: -13px;
  left: 0;
  height: 96px;
  width: 100%;
  background-color: rgba(11, 54, 117, 0.8);
}
.jy > .jyTit {
  color: rgb(80, 232, 253);
  background-image: url(../../../assets/wlw-tit.png);
  text-align: center;
  height: 25px;
  background-size: 100% 55%;
  width: 187px;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin: 0px auto;
}
.jy > .jyContent {
  font-size: 13.333px;
  color: #fff;
  padding: 18px 28px;
}
.addBorder {
  border: solid 3px red;
}
.video-js {
  width: 100%;
  height: 360px;
}
</style>
