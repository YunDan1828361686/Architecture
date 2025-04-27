<template>
  <div>
    <h1>vue2-Worker</h1>
    <Button @click="openWorker">开启线程</Button>
    <p>F12打开浏览器控制台查看效果</p>
  </div>
</template>

<script>
  import Worker from "worker-loader!@/assets/workers/worker.js";
  export default {
    name: "worker",
    methods: {
      openWorker() {
        const worker = new Worker();
        // 向子线程发送消息postMessag
        console.log("向子线程发送消息:", "开启线程");
        worker.postMessage("开启线程");
        // 接收子线程传递过来的消息
        worker.onmessage = (e) => {
          console.log("主线程接受消息:", e.data);
          console.log("关闭线程");
          worker.postMessage("线程关闭");
          // terminate销毁线程
          worker.terminate();
        };
      },
    },
  };
</script>
