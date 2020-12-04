//  函数防抖 (只执行最后一次点击)
//  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
export function _debounce(func, wait) {
    let timeout
    return function (...args) {
        let context = this
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(context, args)
        }, wait)
    }
}
//  函数节流
//  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则不会再次执行
export function _throttle(fn, interval) {
    let last;
    return function () {
        let now = +new Date();
        if (last && now - last < interval) { } else {
            last = now;
            fn.apply(this, arguments);
        }
    }
}