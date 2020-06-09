<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24" style="position: relative;">
      <Menu style="position: absolute;" mode="horizontal" theme="light" active-name="1" @on-select="Menu_map_change">
        <MenuItem name="1">
        <Icon type="md-refresh" />初始化
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people" />Demo2
        </MenuItem>
        <MenuItem name="3">
        <Icon type="ios-construct" />Demo3
        </MenuItem>
        <Submenu name="4">
          <template slot="title">
            <Icon type="md-settings" />地图设置
          </template>
          <MenuItem name="4-1">3D模式</MenuItem>
          <MenuItem name="4-2">添加卫星图层</MenuItem>
          <MenuItem name="4-3">删除卫星图层</MenuItem>
          <MenuItem name="4-4">添加路网图层</MenuItem>
          <MenuItem name="4-5">删除路网图层</MenuItem>
          <MenuItem name="4-6">Demo4-6</MenuItem>
          <MenuItem name="4-7">Demo4-7</MenuItem>
        </Submenu>
      </Menu>
      <div id="container" style="height:800px"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Base_station from "@/assets/images/Base_station.jpg"
  import AMap from "AMap";
  export default {
    name: "Map1",
    data() {
      return {
        map: "",
        // 卫星图层
        satelliteLayer: new AMap.TileLayer.Satellite(),
        // 路网图层
        roadNetLayer: new AMap.TileLayer.RoadNet()
      };
    },
    mounted() {
      this.init();
      this.setMarker()
    },
    methods: {
      init() {
        this.map = new AMap.Map("container", {
          resizeEnable: true, //是否监控地图容器尺寸变化
          mapStyle: "amap://styles/normal", //初始化地图样式
          center: [116.397437, 39.909191], //初始化地图中心点
          expandZoomRange: true,//设置为true的时候，zooms的最大级别在PC上可以扩大到20级
          zoom: 17, //初始化地图层级
        });
        // 地图加载完成钩子
        this.map.on("complete", () => {
          this.$Message.success({
            content: "地图加载完成！当前为清爽模式！",
            duration: 3
          });
        });
      },
      set3D() {
        this.map = new AMap.Map("container", {
          resizeEnable: true, //是否监控地图容器尺寸变化
          mapStyle: "amap://styles/normal", //初始化地图样式
          center: [116.397437, 39.909191], //初始化地图中心点
          expandZoomRange: true,//设置为true的时候，zooms的最大级别在PC上可以扩大到20级
          zoom: 17, //初始化地图层级
          viewMode: '3D',//开启3D视图,默认为关闭
          pitch: 60,//设置视角越高视角就越斜
          buildingAnimation: true,//楼块出现是否带动画
          rotateEnable: true,//地图是否可旋转，默认false。3D视图默认为true，2D视图默认false
          pitchEnable: true,//是否允许设置俯仰角度，3D视图下为true，2D视图下无效
        });
        // 添加插件
        this.map.addControl(new AMap.ControlBar({
          showZoomBar: true,
          showControlButton: true,
          position: {
            right: '10px',
            top: '10px'
          }
        }))
        // 地图加载完成钩子
        this.map.on("complete", () => {
          this.$Message.success({
            content: "地图加载完成！当前为3D模式！",
            duration: 3
          });
        });
      },
      setMarker() {
        let marker = new AMap.Marker({
          // icon: Base_station,
          position: [116.397437, 39.909191]
        });
        marker.on('click', () => {
          let infoWindow;
          //构建信息窗体中显示的内容
          let info = [];
          info.push("<div>名称 : 天安门</div>");
          info.push("<div>国籍 : 中华人民共和国</div>");
          info.push("<div>口号 : 富强，民主，文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善</div>");
          infoWindow = new AMap.InfoWindow({
            content: info.join("")//使用默认信息窗体框样式，显示信息内容
            // content: info.join("<br/>")
          });
          // infoWindow.on('open', () => { })
          // infoWindow.on('close', () => { })
          infoWindow.open(this.map, this.map.getCenter());
        });
        this.map.add(marker);
        // this.map.setFitView();//根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别
      },
      // 构造点标记
      Menu_map_change(name) {
        // 初始化
        if (name == "1") {
          this.map.destroy();
          this.init()
          this.setMarker()
        }
        // 3D模式
        else if (name == "4-1") {
          this.map.destroy();
          this.set3D()
          this.setMarker()
        }
        // 添加卫星图层
        else if (name == "4-2") {
          this.map.add(this.satelliteLayer);
        }
        // 删除卫星图层
        else if (name == "4-3") {
          this.map.remove(this.satelliteLayer);
        }
        // 添加路网图层
        else if (name == "4-4") {
          this.map.add(this.roadNetLayer);
        }
        // 删除路网图层
        else if (name == "4-5") {
          this.map.remove(this.roadNetLayer);
        }
      }
    }
  };
</script>

<style lang="less" scoped>

</style>