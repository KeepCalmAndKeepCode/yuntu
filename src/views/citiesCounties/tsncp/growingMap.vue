<template>
  <div class="growing">
    <div class="chartsTit" style="margin-top:20px">
      种植点及分布点地图
    </div>
    <div class="">
      <div class="site">
        <div class="">
          <img src="../../../assets/dalj.png" />
          <div class="">辣椒种植点</div>
        </div>
        <div class=" ">
          <img src="../../../assets/dds.png" />
          <div class="">大蒜种植点</div>
        </div>
        <div class="  ">
          <img src="../../../assets/dzs.png" />
          <div class="">追溯监测点</div>
        </div>
      </div>
      <div class="count">
        <div class=" ">
          <img src="../../../assets/zs2.png" alt="" />
        </div>
        <div class=" ">
          <div class=" ">监测追溯点数量:<span class="">20</span>个</div>
        </div>
      </div>
      <div class="count">
        <div class=" ">
          <img src="../../../assets/zs2.png" alt="" />
        </div>
        <div class="time">
          <div class=" ">监测次数:<span class="">20000</span>次</div>
        </div>
      </div>
    </div>
    <div class="" id="maps"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["district"]),
    countyName() {
      if (this.district.county == undefined) {
        return this.district.city.city_name;
      } else {
        return this.district.county.county_name;
      }
    },
    // 坐标
    coordinate(){
      if (this.district.county == undefined) {
        return [this.district.city.lng,this.district.city.lat];
      } else {
        return [this.district.county.lng,this.district.county.lat];
      }
    },
    // 缩放比例
    scaling(){
      if (this.district.county == undefined) {
        return 9;
      }else{
        return 11;
      }
    }
  },
  methods:{

  },
  mounted() {
    var that = this;
    //百度地图API功能
    var map = new BMap.Map("maps", {
      enableMapClick: false
    });
    map.setMapStyle({
      styleJson: [
        {
          featureType: "land",
          elementType: "geometry",
          stylers: {
            color: "#3272B9"
          }
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: {
            color: "#96b5d6"
          }
        },
        {
          featureType: "green",
          elementType: "all",
          stylers: {
            color: "#b0d3dd"
          }
        },
        {
          featureType: "highway",
          elementType: "geometry.fill",
          stylers: {
            color: "#a6cfcf"
          }
        },
        {
          featureType: "highway",
          elementType: "geometry.stroke",
          stylers: {
            color: "#7dabb3"
          }
        },
        {
          featureType: "arterial",
          elementType: "geometry.fill",
          stylers: {
            color: "#e7f7fc"
          }
        },
        {
          featureType: "arterial",
          elementType: "geometry.stroke",
          stylers: {
            color: "#b0d5d4"
          }
        },
        {
          featureType: "local",
          elementType: "labels.text.fill",
          stylers: {
            color: "#7a959a"
          }
        },
        {
          featureType: "local",
          elementType: "labels.text.stroke",
          stylers: {
            color: "#d6e4e5"
          }
        },
        {
          featureType: "arterial",
          elementType: "labels.text.fill",
          stylers: {
            color: "#374a46"
          }
        },
        {
          featureType: "highway",
          elementType: "labels.text.fill",
          stylers: {
            color: "#374a46"
          }
        },
        {
          featureType: "highway",
          elementType: "labels.text.stroke",
          stylers: {
            color: "#e9eeed"
          }
        }
      ]
    });
    map.centerAndZoom(new BMap.Point(...this.coordinate), this.scaling);
    map.enableScrollWheelZoom();
    map.disableInertialDragging();
    map.enableDragging();
    // var b = new BMap.Bounds(
    //   new BMap.Point(112.519441, 22.308888),
    //   new BMap.Point(114.21926, 24.036528)
    // );
    // try {
    //   BMapLib.AreaRestriction.setBounds(map, b);
    // } catch (e) {
    //   alert(e);
    // }
    // var tubiao = require("../../../assets/lajiaoicon.png");
    // var tubiao1 = require("../../../assets/dasuanicon.png");
    // var tubiao2 = require("../../../assets/zhuisudianicon.png");
    // var myIcon = new BMap.Icon(tubiao, new BMap.Size(32, 32)); //地图上图表的样式
    // var myIcon1 = new BMap.Icon(tubiao1, new BMap.Size(32, 32)); //地图上图表的样式
    // var myIcon2 = new BMap.Icon(tubiao2, new BMap.Size(32, 32)); //地图上图表的样式
    // var data_info = [
    //   [113.807294, 33.751896, ""],
    //   [113.876099, 33.855296, ""],
    //   [113.947646, 33.939707, ""],
    //   [114.060068, 33.807093, ""],
    //   [114.031837, 33.885224, ""],
    //   [113.974399, 33.952299, ""]
    // ];

    // for (var i = 0; i < data_info.length; i++) {
    //   if (i % 3 == 0) {
    //     var marker = new BMap.Marker(
    //       new BMap.Point(data_info[i][0], data_info[i][1]),
    //       {
    //         icon: myIcon
    //       }
    //     ); // 创建标注
    //   } else if (i % 3 == 1) {
    //     var marker = new BMap.Marker(
    //       new BMap.Point(data_info[i][0], data_info[i][1]),
    //       {
    //         icon: myIcon1
    //       }
    //     ); // 创建标注
    //   } else if (i % 3 == 2) {
    //     var marker = new BMap.Marker(
    //       new BMap.Point(data_info[i][0], data_info[i][1]),
    //       {
    //         icon: myIcon2
    //       }
    //     ); // 创建标注
    //   }

    //   // var id = data_info[i][3];
    //   // var name = data_info[i][2];
    //   map.addOverlay(marker); // 将标注添加到地图中
    //   // addClickHandler(id, name, marker);
    //   var label = new BMap.Label(data_info[i][2], {
    //     offset: new BMap.Size(0, 0)
    //   });
    //   marker.setLabel(label);
    // }

    function initMap() {
      var blist = [];
      var districtLoading = 0;

      function getBoundary() {
        addDistrict(that.countyName);
      }

      function addDistrict(districtName) {
        //使用计数器来控制加载过程
        districtLoading++;
        var bdary = new BMap.Boundary();
        bdary.get(districtName, function(rs) {
          //获取行政区域
          var count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
            alert("未能获取当前输入行政区域");
            return;
          }
          for (var i = 0; i < count; i++) {
            blist.push({
              points: rs.boundaries[i],
              name: districtName
            });
          }
          //加载完成区域点后计数器-1
          districtLoading--;
          if (districtLoading == 0) {
            //全加载完成后画端点
            drawBoundary();
          }
        });
      }
      /**
       * 各种鼠标事件绑定
       */
      function click(evt) {
        // alert(evt.target.name);
      }

      function mouseover(evt) {
        evt.target.label.setZIndex(99);
        evt.target.label.setPosition(evt.point);
        //   evt.target.label.show();
      }

      function mousemove(evt) {
        //    evt.target.label.setPosition(evt.point);
      }

      function mouseout(evt) {
        evt.target.label.hide();
      }

      function drawBoundary() {
        //包含所有区域的点数组
        var pointArray = [];

        /*画遮蔽层的相关方法
         *思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
         *      这样就做出了一个经过多次西北角的闭合多边形*/
        //定义中国东南西北端点，作为第一层
        var pNW = {
          lat: 59.0,
          lng: 7.0
        };
        var pNE = {
          lat: 59.0,
          lng: 136.0
        };
        var pSE = {
          lat: 3.0,
          lng: 136.0
        };
        var pSW = {
          lat: 3.0,
          lng: 73.0
        };
        //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
        var pArray = [];
        pArray.push(pNW);
        pArray.push(pSW);
        pArray.push(pSE);
        pArray.push(pNE);
        pArray.push(pNW);
        //循环添加各闭合区域
        for (var i = 0; i < blist.length; i++) {
          //添加显示用标签层
          var label = new BMap.Label(blist[i].name, {
            offset: new BMap.Size(20, -10)
          });
          label.hide();
          map.addOverlay(label);

          //添加多边形层并显示  添加边界
          var ply = new BMap.Polygon(blist[i].points, {
            strokeWeight: 1,
            strokeColor: "#0181bd",
            fillOpacity: 0.01,
            fillColor: " #FFFFFF"
          }); //建立多边形覆盖物
          ply.name = blist[i].name;
          ply.label = label;
          ply.addEventListener("click", click);
          ply.addEventListener("mouseover", mouseover);
          ply.addEventListener("mouseout", mouseout);
          ply.addEventListener("mousemove", mousemove);
          map.addOverlay(ply);

          //添加名称标签层
          // var centerlabel = new BMap.Label(blist[i].name, { offset: new BMap.Size(0, 0) });
          //centerlabel.setPosition(ply.getBounds().getCenter());
          //map.addOverlay(centerlabel);

          //将点增加到视野范围内
          var path = ply.getPath();
          pointArray = pointArray.concat(path);
          //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
          pArray = pArray.concat(path);
          pArray.push(pArray[0]);
        }

        //添加遮蔽层  隐藏其它地区不可见
        var plyall = new BMap.Polygon(pArray, {
          strokeOpacity: 0.0000001,
          strokeColor: "#000000",
          strokeWeight: 0.00001,
          fillColor: "#01061A",
          fillOpacity: 1
        }); //建立多边形覆盖物
        map.addOverlay(plyall);
      }
      setTimeout(function() {
        getBoundary();
      }, 100);
    }
    initMap();
  }
};
</script>

<style scoped>
#maps {
  width: 400px;
  height: 250px;
}
.growing {
  width: 100%;
  background-image: url(../../../assets/bg6.png);
  height: 340px;
  background-size: 100% 100%;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.growing > :nth-child(2) {
  width: 400px;
  padding-top: 32px;
}
.chartsTit {
  position: absolute;
  background-image: url(../../../assets/d1.png);
  color: #4fe9fc;
  background-repeat: no-repeat;
  text-align: center;
  top: -12px;
  left: 5px;
  background-position: 129px 17px;
  width: 84%;
  height: 35px;
  background-size: 65%;
  font-size: 17px;
}
.site {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.site > div {
  text-align: center;
}
.site > div > div {
  height: 50px;
  line-height: 50px;
}
.count {
  display: flex;
  margin-bottom: 15px;
  height: 48px;
  align-items: center;
  justify-content: flex-start;
}
.count > :nth-child(2) {
  background-image: url(../../../assets/z1.png);
  background-size: 100% 100%;
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  margin-left: 20px;
}
.count > .time {
  background-image: url(../../../assets/z2.png);
  width: 250px;
}
</style>
