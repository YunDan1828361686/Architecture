export function createConcurrency(maxConcurrent) {
  let queue = []; // 等待队列
  let activeCount = 0; // 当前运行任务数

  // 执行下一个任务
  const next = () => {
    // 如果当前运行任务数已经达到最大并发数，或者队列为空，则不执行任何操作
    if (activeCount >= maxConcurrent || !queue.length) return;
    try {
      activeCount++;
      const { task, resolve, reject } = queue.shift();
      task()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          activeCount--;
          next(); // 当前任务完成后立即触发下一个
          next(); // 并行处理（确保补充任务）
        });
    } catch (err) {
      console.error("任务执行异常:", err);
      activeCount--;
      next();
    }
  };

  // 添加任务方法
  const addTask = (task) => {
    return new Promise((resolve, reject) => {
      queue.push({ task, resolve, reject });
      next();
    });
  };

  return {
    addTask,
    getPendingCount: () => queue.length,
    getActiveCount: () => activeCount,
  };
}
