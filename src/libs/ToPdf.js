import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// Horizontal是横
export const Save_PDF_Horizontal = (className, fileName) => {
  return new Promise((resolve, reject) => {
    let title = fileName || '标题';// 导出文件名，默认为“标题”
    const children = document.getElementsByClassName(className);
    let canvas = [];
    let i = 0;
    function toCanvas_l() {
      if (children.length > 1) {
        html2canvas(children[i], {
          dpi: 600, // 提升导出的文件的分辨率
          scale: 4 // 提升导出的文件的分辨率
        }).then(res => { // 计算每个dom的高度，方便后面计算分页
          // 设置padding也就是要导出的元素在pdf中的边距
          res.imgWidth = 841.89 - 60;
          res.imgHeight = (841.89 - 60) / res.width * res.height;
          // res.imgWidth = 841.89;
          // res.imgHeight = 841.89 / res.width * res.height;
          canvas.push(res);
          i++;
          if (canvas.length === children.length) {
            paging_l();
            toPdf_l();
          } else {
            toCanvas_l();
          }
        });
      }
    }
    /**
     * [根据dom的高度初步进行分页，会将canvas组装为一个二维数组]
     */
    function paging_l() {
      const imgArr = [[]];
      let pageH = 0;// 页面的高度
      let allH = 0;// 当前组所有dom的高度和
      let j = 0;
      for (let k = 0; k < canvas.length; k++) { // 涉及到k--的操作，使用for循环方便
        pageH += canvas[k].imgHeight;
        if (pageH > 565.28 && canvas[k].imgHeight < 565.28) { // 当某个页面装不下下一个dom时，则分页
          imgArr[j][0].allH = allH - canvas[k].imgHeight;
          allH = pageH = 0;
          k--;
          j++;
          imgArr.push([]);
        } else {
          if (canvas[k].imgHeight > 565.28) { // 特殊情况：某个dom高度大于了页面高度，特殊处理
            canvas[k].topH = 565.28 - (pageH - canvas[k].imgHeight);// 该dom顶部距离页面上方的距离
            pageH = (2 * canvas[k].imgHeight - pageH) % 565.28;
            canvas[k].pageH = pageH;// 该dom底部距离页面上方的距离
          }
          imgArr[j].push(canvas[k]);
          allH += canvas[k].imgHeight;
        }
        if (k === canvas.length - 1) imgArr[j][0].allH = allH;
      }
      canvas = imgArr;
    }
    /**
     * [生成PDF文件]
     */
    function toPdf_l() {
      const PDF = new jsPDF('l', 'pt', 'a4');
      for (let i = 0; i < canvas.length; i++) {
        const page = canvas[i];
        let allH = page[0].allH;
        let position = 30;// pdf页面偏移
        if (i !== 0 && allH <= 565.28) PDF.addPage();
        for (let k = 0; k < page.length; k++) {
          const img = page[k];
          if (img.imgHeight < 565.28) { // 当某个dom高度小于页面宽度，直接添加图片
            if (img.imgHeight != 0) {
              PDF.addImage(img.toDataURL('image/jpeg', 1.0), 'JPEG', 30, position, img.imgWidth, img.imgHeight);
              position += img.imgHeight;
              allH -= img.imgHeight;
            }
          } else { // 当某个dom高度大于页面宽度，则需另行处理
            while (allH > 0) {
              PDF.addImage(img.toDataURL('image/jpeg', 1.0), 'JPEG', 30, position, img.imgWidth, img.imgHeight);
              allH -= img.topH || 565.28;
              position -= img.topH || 565.28;
              img.topH = 0;
              if (allH > 0) PDF.addPage();
            }
            position = img.pageH;
          }
        }
      }
      PDF.save(title + '.pdf');
      resolve();
    }
    toCanvas_l();
  });
};
// Vertical是竖
export const Save_PDF_Vertical = (className, fileName) => {
  return new Promise((resolve, reject) => {
    let title = fileName || '标题';// 导出文件名，默认为“标题”
    const children = document.getElementsByClassName(className);
    let canvas = [];
    let i = 0;
    function toCanvas() {
      if (children.length > 1) {
        html2canvas(children[i], {
          dpi: 600, // 提升导出的文件的分辨率
          scale: 4 // 提升导出的文件的分辨率
        }).then(res => { // 计算每个dom的高度，方便后面计算分页
          // 设置padding也就是要导出的元素在pdf中的边距
          res.imgWidth = 595.28 - 60;
          res.imgHeight = (595.28 - 60) / res.width * res.height;
          // res.imgWidth = 595.28;
          // res.imgHeight = 592.28 / res.width * res.height;
          canvas.push(res);
          i++;
          if (canvas.length === children.length) {
            paging();
            toPdf();
          } else {
            toCanvas();
          }
        });
      }
    }
    /**
     * [根据dom的高度初步进行分页，会将canvas组装为一个二维数组]
     */
    function paging() {
      const imgArr = [[]];
      let pageH = 0;// 页面的高度
      let allH = 0;// 当前组所有dom的高度和
      let j = 0;
      for (let k = 0; k < canvas.length; k++) { // 涉及到k--的操作，使用for循环方便
        pageH += canvas[k].imgHeight;
        if (pageH > 811.89 && canvas[k].imgHeight < 811.89) { // 当某个页面装不下下一个dom时，则分页
          imgArr[j][0].allH = allH - canvas[k].imgHeight;
          allH = pageH = 0;
          k--;
          j++;
          imgArr.push([]);
        } else {
          if (canvas[k].imgHeight > 811.89) { // 特殊情况：某个dom高度大于了页面高度，特殊处理
            canvas[k].topH = 811.89 - (pageH - canvas[k].imgHeight);// 该dom顶部距离页面上方的距离
            pageH = (2 * canvas[k].imgHeight - pageH) % 811.89;
            canvas[k].pageH = pageH;// 该dom底部距离页面上方的距离
          }
          imgArr[j].push(canvas[k]);
          allH += canvas[k].imgHeight;
        }
        if (k === canvas.length - 1) imgArr[j][0].allH = allH;
      }
      canvas = imgArr;
    }
    /**
     * [生成PDF文件]
     */
    function toPdf() {
      const PDF = new jsPDF('p', 'pt', 'a4');
      for (let i = 0; i < canvas.length; i++) {
        const page = canvas[i];
        let allH = page[0].allH;
        let position = 30;// pdf页面偏移
        if (i !== 0 && allH <= 811.89) PDF.addPage();
        for (let k = 0; k < page.length; k++) {
          const img = page[k];
          if (img.imgHeight < 811.89) { // 当某个dom高度小于页面宽度，直接添加图片
            if (img.imgHeight != 0) {
              PDF.addImage(img.toDataURL('image/jpeg', 1.0), 'JPEG', 30, position, img.imgWidth, img.imgHeight);
              position += img.imgHeight;
              allH -= img.imgHeight;
            }
          } else { // 当某个dom高度大于页面宽度，则需另行处理
            while (allH > 0) {
              PDF.addImage(img.toDataURL('image/jpeg', 1.0), 'JPEG', 30, position, img.imgWidth, img.imgHeight);
              allH -= img.topH || 811.89;
              position -= img.topH || 811.89;
              img.topH = 0;
              if (allH > 0) PDF.addPage();
            }
            position = img.pageH;
          }
        }
      }
      PDF.save(title + '.pdf');
      resolve();
    }
    toCanvas();
  });
};
// 添加水印 通过插入元素实现
export const WatermarkAdd = (str1, str2, dom) => {
  return new Promise((resolve, reject) => {
    const can = document.createElement('canvas')
    // 设置canvas画布大小
    can.width = 500
    can.height = 250
    const cans = can.getContext('2d')
    cans.rotate(-25 * Math.PI / 180) // 水印旋转角度
    cans.font = '1.2rem Vedana'
    cans.fillStyle = '#666'
    cans.textAlign = 'center'
    cans.textBaseline = 'Middle'
    cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
    cans.fillText(str2, can.width / 2, can.height + 25)
    const div = document.createElement('div')
    div.setAttribute('class', "pdf-cell-watermark")
    div.style.pointerEvents = 'none'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.opacity = '0.2'
    div.style.position = 'absolute'
    div.style.zIndex = '10'
    div.style.width = dom.offsetWidth + 'px';
    div.style.height = dom.offsetHeight + 'px';
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    dom.appendChild(div);
    resolve();
  });
}

// 移除水印方法
export const WatermarkDelete = () => {
  let chArr = document.getElementsByClassName("pdf-cell-watermark");
  for (let i = 0; i < chArr.length; i++) {
    //删除元素 元素.parentNode.removeChild(元素);
    chArr[i].parentNode.removeChild(chArr[i]);
  }
}