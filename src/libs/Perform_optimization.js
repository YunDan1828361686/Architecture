//  函数防抖 (只执行最后一次点击)
//  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
export function _debounce(func, wait, immediate = true) {
    let timeout
    return function () {
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            var callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) func.apply(this, arguments)
        }
    }
}
//  函数节流
//  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则不会再次执行
export function _throttle(fn, t) {
    let last;
    // let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) { } else {
            last = now;
            fn.apply(this, args);
        }
    }
}