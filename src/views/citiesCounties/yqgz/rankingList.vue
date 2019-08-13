<template>
  <div class="rankingList">
    <div class>
      <!-- 标题 -->
      <div class="rankingTit">
        <img src="../../../assets/xinwen.png" alt />
        <span>新闻排行榜</span>
      </div>
      <!-- 内容 -->
      <div class="rankingCont">
        <div class>
          <span>排名</span>
          <span>关键字</span>
          <span>搜索指数</span>
        </div>
        <div class="content xinwen">
          <div class v-for="(item, index) in newlist" :key="item.id">
            <span>{{ index + 1 }}</span>
            <span>{{ item.areaName }}</span>
            <span>{{ item.countNum }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <!-- 标题 -->
      <div class="rankingTit">
        <img src="../../../assets/weibo.png" alt />
        <span>微博排行榜</span>
      </div>
      <!-- 内容 -->
      <div class="rankingCont">
        <div class>
          <span>排名</span>
          <span>关键字</span>
          <span>搜索指数</span>
        </div>
        <div class="content weibo">
          <div class v-for="(item, index) in micbloglist" :key="item.id">
            <span>{{ index + 1 }}</span>
            <span>{{ item.areaName }}</span>
            <span>{{ item.countNum }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <!-- 标题 -->
      <div class="rankingTit">
        <img src="../../../assets/wechat.png" alt />
        <span>微信排行榜</span>
      </div>
      <!-- 内容 -->
      <div class="rankingCont">
        <div class>
          <span>排名</span>
          <span>关键字</span>
          <span>搜索指数</span>
        </div>
        <div class="content weixin">
          <div class v-for="(item, index) in weixin" :key="item.id">
            <span>{{ index + 1 }}</span>
            <span>{{ item.areaName }}</span>
            <span>{{ item.countNum }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <!-- 标题 -->
      <div class="rankingTit">
        <img src="../../../assets/diannao.png" alt />
        <span>论坛排行榜</span>
      </div>
      <!-- 内容 -->
      <div class="rankingCont">
        <div class>
          <span>排名</span>
          <span>关键字</span>
          <span>搜索指数</span>
        </div>
        <div class="content luntan">
          <div class v-for="(item, index) in bbslist" :key="item.id">
            <span>{{ index + 1 }}</span>
            <span>{{ item.areaName }}</span>
            <span>{{ item.countNum }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <!-- 标题 -->
      <div class="rankingTit">
        <img src="../../../assets/ben.png" alt />
        <span>博客排行榜</span>
      </div>
      <!-- 内容 -->
      <div class="rankingCont">
        <div class>
          <span>排名</span>
          <span>关键字</span>
          <span>搜索指数</span>
        </div>
        <div class="content boke">
          <div class v-for="(item, index) in bloglist" :key="item.id">
            <span>{{ index + 1 }}</span>
            <span>{{ item.areaName }}</span>
            <span>{{ item.countNum }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { toprank } from "@/utils/interfaces.js";
import axios from "axios";

export default {
  data(){
    return{
      newlist:"",
      bloglist:"",
      micbloglist:"",
      weixin:"",
      bbslist:"",
      bloglist:""
    }
  },
  computed: {
    ...mapState(["district"])
  },
  methods: {
    // 获取排行榜信息
    getToprank(params,token) {
      axios.post(
        toprank,
        {
          ...params
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            token
          }
        }
      ).then(data=>{
        let list =  data.data.data;
        this.newlist = list.bbslist.slice(5);
        this.bloglist = list.bloglist.slice(5);
        this.micbloglist = list.micbloglist.slice(5);
        this.weixin = list.weixin.slice(5);
        this.bbslist = list.bbslist.slice(5);
      })
    }
  },
  mounted() {
    let token = '';
    let channelParams = {};
    if ("county" in this.district) {
      channelParams.district_code = this.district.county.county_id;
      channelParams.province = this.district.province.province_name;
      channelParams.city = this.district.city.city_name;
      channelParams.zone = this.district.county.county_name;

      token = localStorage.getItem("token" + this.district.county.county_id);
    } else {
      channelParams.district_code = this.district.city.city_id;
      channelParams.province = this.district.province.province_name;
      channelParams.city = this.district.city.city_name;

      token = localStorage.getItem("token" + this.district.city.city_id);
    }
    this.getToprank(channelParams,token);
  }
};
</script>

<style scoped>
.rankingList {
  display: flex;
}
.rankingList > div {
  flex: 1;
}
.rankingTit {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.rankingTit img {
  margin-right: 10px;
}
.rankingCont {
  color: #01bffd;
}

.rankingCont > :nth-child(1) > :nth-child(1),
.rankingCont > :nth-child(1) > :nth-child(3) {
  width: 60px;
}
.rankingCont > :nth-child(1) > :nth-child(2) {
  flex: 1;
  border-left: solid 1px #1f416a;
  border-right: solid 1px #1f416a;
}
.rankingList > :nth-child(2),
.rankingList > :nth-child(4) {
  margin: 0 5px;
}
.rankingList > :nth-child(2) .rankingCont,
.rankingList > :nth-child(4) .rankingCont {
  border-left: solid 1px #1f416a;
  border-right: solid 1px #1f416a;
}

.content > div {
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 14px;
}
.rankingCont > :nth-child(1) {
  font-size: 13px;
  display: flex;
  border: solid 1px #1f416a;
  text-align: center;
  height: 20px;
}
.content > div > :nth-child(1) {
  color: #fff;
  background-color: #a0a0a0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 20px;
}
.content > div > :nth-child(2) {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
}
.content > div > :nth-child(3) {
  width: 60px;
  text-align: center;
}

.xinwen > :nth-child(-n + 3) > :nth-child(1) {
  background-color: #0c6ab2;
}
.weibo > :nth-child(-n + 3) > :nth-child(1) {
  background-color: #d81524;
}
.weixin > :nth-child(-n + 3) > :nth-child(1) {
  background-color: #22ac38;
}
.luntan > :nth-child(-n + 3) > :nth-child(1) {
  background-color: #f39800;
}
.boke > :nth-child(-n + 3) > :nth-child(1) {
  background-color: #00b7ee;
}
</style>
