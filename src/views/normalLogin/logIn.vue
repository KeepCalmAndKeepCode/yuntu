<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-screen">
        <div class="well">
          <div class="login-form">
            <img
              id="profile-img"
              class="profile-img-card"
              src="./images/avatar.png"
            />
            <p id="profile-name" class="profile-name-card"></p>
            <div action="" method="post" id="login-form">
              <div id="errtips" class="hide"></div>
              <div class="input-group">
                <!-- <div class="input-group-addon">
                  <span
                    class="glyphicon glyphicon-user"
                    aria-hidden="true"
                  ></span>
                </div> -->
                <input
                  type="text"
                  class="form-control"
                  id="pd-form-username"
                  placeholder="用户名"
                  name="username"
                  autocomplete="off"
                  value=""
                  data-rule="用户名:required;username"
                  v-model="account"
                />
              </div>
              <div class="input-group">
                <!-- <div class="input-group-addon">
                  <span
                    class="glyphicon glyphicon-lock"
                    aria-hidden="true"
                  ></span>
                </div> -->
                <input
                  type="password"
                  class="form-control"
                  id="pd-form-password"
                  placeholder="密码"
                  name="password"
                  autocomplete="off"
                  value=""
                  data-rule="密码:required;password"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-success btn-lg btn-block"
                  @click="submitForm"
                >
                  登 录
                </button>
                <button
                  type="submit"
                  class="btn btn-success btn-lg btn-block"
                  @click="returnToCityPage"
                >
                  返 回
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logIn } from "@/utils/interfaces.js";
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    getToken(district_code) {
      axios.post( logIn ,{
        district_code,
        account:this.account,
        password:this.password
      }).then( data => {
        if(data.data.code == 1){
          // 根据地区存储token
          localStorage.setItem('token' + district_code, data.data.data.userinfo.token);
          this.$router.go(-1);
        }else{
          alert(data.data.msg);
        }
      })
    },
    submitForm(){
      let district_code = JSON.parse(localStorage.getItem('district'));
      if("county" in district_code){
        this.getToken(district_code.county.county_id);
      }else{
        this.getToken(district_code.city.city_id);
      }
    },
    // 返回首页
    returnToCityPage(){
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  background: url("./images/riverside.jpg");
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  height: 100%;
}
a {
  color: #fff;
}

.login-screen {
  max-width: 400px;
  padding: 0;
  margin: 0 auto;
}

.login-screen .well {
  border-radius: 3px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2);
}

.login-screen .copyright {
  text-align: center;
}

@media (max-width: 767px) {
  .login-screen {
    padding: 0 20px;
  }
}

.profile-img-card {
  width: 100px;
  height: 100px;
  margin: 10px auto;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.profile-name-card {
  text-align: center;
}

#login-form {
  margin-top: 20px;
}

#login-form .input-group {
  margin-bottom: 15px;
}

#video_wrapper {
  margin: 0px;
  padding: 0px;
}

#video_wrapper video {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -100;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}

.input-group .input-group-addon {
  border-radius: 0;
  border-color: #d2d6de;
  background-color: #fff;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.glyphicon-user:before {
  content: "\e008";
}

.glyphicon-lock:before {
  content: "\e033";
}

.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.login-wrapper {
  padding-top: 150px;
}
.btn {
  width: 100%;
  color: #fff;
  background-color: #18bc9c;
  border: none;
  height: 40px;
}
.input-group input {
  width: 100%;
  height: 40px;
  padding-left: 20px;
}

.form-group >:nth-child(2){
  margin-top: 20px;
}
</style>
