self.onmessage = (e) => {
  const { data } = e;
  console.log("子线程接受消息:", data);
  setTimeout(() => {
    console.log("两秒钟过去了，向主线程发送信息:", "线程完成");
    return self.postMessage("线程完成");
  }, 1000);
};