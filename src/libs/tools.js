export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}

// 获取两个时间之间的距离
export const Range_value = (start, end) => {
  var regTime = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g
  var interval =
    Math.abs(
      Date.parse(start.replace(regTime, '$2-$3-$1$4')) -
      Date.parse(end.replace(regTime, '$2-$3-$1$4'))
    ) / 1000
  var h = Math.floor(interval / 3600)
  var m = Math.floor((interval % 3600) / 60)
  return h
  // alert(start + "距离" + end + "有" + h + " 小时 " + m + " 分");
}

// 获取几天前的时间可传入两个参数
export const fun_date = (num1, num2) => {
  var nowdate = new Date()
  var before = new Date(nowdate - 1000 * 60 * 60 * 24 * num1)
  var after = new Date(nowdate - 1000 * 60 * 60 * 24 * num2)
  // 第一个参数的时间
  var beforyear = before.getFullYear()
  var beformonth = before.getMonth() + 1
  var beforday = before.getDate()
  var beforeDate = beforyear + '-' + (beformonth < 10 ? '0' + beformonth : beformonth) + '-' + (beforday < 10 ? '0' + beforday : beforday)
  // 第二个参数的时间
  var afteryear = after.getFullYear()
  var aftermonth = after.getMonth() + 1
  var afterday = after.getDate()
  var afterDate = afteryear + '-' + (aftermonth < 10 ? '0' + aftermonth : aftermonth) + '-' + (afterday < 10 ? '0' + afterday : afterday)
  return [beforeDate, afterDate]
}
// 递归树形结构取值
export const flatten = (
  data,
  childKey,
  level
) => {
  let arr = []
  data.forEach(item => {
    item.level = level
    item.routerName = item.modulePath.substr(1)
    arr.push(item)
    if (item[childKey]) {
      arr.push(
        ...flatten(
          item[childKey],
          childKey,
          level + 1
        )
      )
    }
  })
  return arr
}
// 获取几天前的时间可传入两个参数
export const time_format = (date) => {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
