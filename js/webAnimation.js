function  horizontalAnimation(obj, target, callback) {
    clearInterval(obj.animateTimer);
    obj.animateTimer = setInterval(function() {
        // 停止动画 本质是停止定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.animateTimer);
            // 回调函数写到定时器结束里面
            if (callback) {
                callback();
            }
        } else {
            var step = (target - obj.offsetLeft)/10;
            // 把步长值改为整数 不要出现小数的问题
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15);
}
function  windowVerticalAnimation(target, callback) {
    clearInterval(window.animateTimer);
    window.animateTimer = setInterval(function() {
        // 停止动画 本质是停止定时器
        if (window.pageYOffset == target) {
            clearInterval(window.animateTimer);
            // 回调函数写到定时器结束里面
            callback && callback();
        } else {
            var step = (target - window.pageYOffset)/10;
            // 把步长值改为整数 不要出现小数的问题
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            window.scroll(window.scrollX, step);
        }
    }, 15);
}