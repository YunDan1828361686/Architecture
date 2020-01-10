
<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="12">
        <div id="container"></div>
      </Col>
    </Row>
  </div>
</template>
 
<script>
import * as Three from "three";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null, // 相机
      scene: new Three.Scene(), // 场景
      renderer: new Three.WebGLRenderer(), // 渲染器
      mesh: null
    };
  },
  mounted() {},
  methods: {
    init() {
      // 选取要显示的区域
      let container = document.getElementById("container");
      // 设置相机
      this.camera = new Three.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        10000
      );
      this.camera.position.z = 0.5;
      // 将一个物体添加到场景中：
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();
      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      // 把渲染器放到显示区域里
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      // 实时渲染：就是需要不停的对画面进行渲染，即使画面中什么也没有改变，也需要重新渲染。
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      // 结合相机和场景来得到结果画面
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>
<style lang="less" scoped>
#container {
  width: 100%;
  height: 400px;
}
</style>