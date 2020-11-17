function debounce(fn, timer) {
    var t = null
    return function () {
        var firstClick = !t
        if (t) clearTimeout(t)
        if (!firstClick) {
            fn.apply(this, arguments)
        }
        t = setTimeout(() => {
            t = null
        }, timer)
    }
}
// 防抖

function throttle(fn, delay) {
    var begin = 0;
    return function () {
        var cur = new Date().getTime()
        if (cur - begin > delay) {
            fn.apply(this, arguments)
            begin = cur
        }
    }
}
//节流

// 浅拷贝
// function simpleClone(obj) {
//     var cloneObj = {}
//     for (var i in obj) {
//         cloneObj[i] = obj[i]
//     }
//     return cloneObj
// }

/* function simpleClone(obj) {
    var cloneObj = {}
    for (var i of Object.keys(obj)) {
        cloneObj[i] = obj[i]
    }
    return cloneObj;
} */


/* function simpleClone(obj) {
    var cloneObj = {}
    for (var [key, value] of Object.entries(obj)) {
        cloneObj[key] = value;
    }
    return cloneObj;
} */


function simpleClone(obj) {
    var cloneObj = {}
    Object.getOwnPropertyNames(obj).forEach(function (key) {
        var des = Object.getOwnPropertyDescriptor(obj, key);
        Object.defineProperty(cloneObj, key, des)
    })
    return cloneObj
}

function deepClone(obj, cloneObj) {
    var cloneObj = cloneObj || {}
    for (var i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            cloneObj[i] = Array.isArray(obj[i]) ? [] : {}
            deepClone(obj[i], cloneObj[i]);
        } else {
            cloneObj[i] = obj[i]
        }
    }
    return cloneObj
}