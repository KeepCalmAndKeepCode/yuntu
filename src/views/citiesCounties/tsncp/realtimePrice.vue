<template>
  <div class="realtimePrice">
    <div class="tit">
      今日实时价格行情
    </div>
    <div class="tableContainer">
      <table class="monthTable">
        <thead class="monthThead">
          <tr class="cor3">
            <th colspan="1">种类</th>
            <th colspan="1" rowspan="1">价格/单位</th>
            <th colspan="1">种类</th>
            <th colspan="1" rowspan="1">价格/单位</th>
          </tr>
        </thead>
        <tbody class="monthTBody">
          <tr v-for="item in price" :key="item.id">
            <td colspan="1">{{ item[0].productname }}</td>
            <td colspan="1">{{ item[0].price }}元/斤</td>
            <td colspan="1">{{ item[1].productname }}</td>
            <td colspan="1">{{ item[1].price.length == 0 ? "" : item[1].price + '元/斤'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { rtmarket } from "@/utils/interfaces.js";
import axios from "axios";

export default {
  computed: {
    ...mapState(["district"])
  },
  data() {
    return {
      price: [
        [
          {
            price: "",
            productname: ""
          },
          {
            price: "",
            productname: ""
          }
        ],
        [
          {
            price: "",
            productname: ""
          },
          {
            price: "",
            productname: ""
          }
        ],
        [
          {
            price: "",
            productname: ""
          },
          {
            price: "",
            productname: ""
          }
        ]
      ]
    };
  },
  methods: {
    cutDecimals(array, size) {
      let result = [];
      for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    },
    // 获取今日价格行情
    getRtmarket(params,token) {
      axios
        .post(
          rtmarket,
          {
            ...params
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token
            }
          }
        )
        .then(data => {
          // this.price = data.data.data.data;
          console.log(data.data.data.data);
          if(data.data.data.data.length % 2 !== 0 ){
            data.data.data.data.push({
              price: "",
              productname: ""
            });
          }
          let newDecimal = data.data.data.data.map(item => {
            item.price =  item.price.length !==0 ? item.price.toFixed(1) : "";
            return item;
          });
          let newPrice = this.cutDecimals(newDecimal, 2);
          this.price = newPrice;
        });
    }
  },
  mounted() {
    let token = '';
    let rtmarketParams = {};
    if ("county" in this.district) {
      rtmarketParams.district_code = this.district.county.county_id;
      rtmarketParams.province = this.district.province.province_name;
      rtmarketParams.city = this.district.city.city_name;
      rtmarketParams.zone = this.district.county.county_name;

      token = localStorage.getItem("token" + this.district.county.county_id);
    } else {
      rtmarketParams.district_code = this.district.city.city_id;
      rtmarketParams.province = this.district.province.province_name;
      rtmarketParams.city = this.district.city.city_name;

      token = localStorage.getItem("token" + this.district.city.city_id);
    }
    this.getRtmarket(rtmarketParams,token);
  }
};
</script>

<style scoped>
.realtimePrice {
  width: 33.3%;
  height: 260px;
  background-image: url(../../../assets/b1.png);
  background-size: 100% 100%;
}
.realtimePrice .tit {
  background-image: url(../../../assets/d1.png);
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  background-position: bottom;
  font-size: 17px;
  margin: 0 auto;
  float: none;
  width: 66.6%;
  padding: 20px 0 8px;
}
.tableContainer {
  width: 83.3%;
  padding-top: 10px;
}
.monthTable {
  height: 180px;
  margin-left: 50px;
  width: 400px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #0d288c;
  border-collapse: collapse;
}
.cor3 {
  height: 40px;
  color: #4fe9fc;
}
.monthTBody td,
th {
  border: 1px solid #0d288c;
}
.monthTBody {
  border: 1px solid #0d288c;
  color: #fff;
}
</style>
