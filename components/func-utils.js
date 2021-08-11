

/*函数节流*/
export function throttle(fn, interval) {
  var enterTime = 0; //触发的时间
  var gapTime = interval || 300; //间隔时间，如果interval不传，则默认300ms
  return function () {
    var context = this;
    var backTime = new Date(); //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}

/*函数防抖*/
export function debounce(fn, interval) {
  var timer;
  var gapTime = interval || 1000; //间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}



/**
 * 跳转页面
 * @param {Event} e 
 */
export function toPage(e) {
  let url = e.currentTarget.dataset.to;
  let id = e.currentTarget.dataset.id;
  wx.navigateTo({
    url: id ? `${url}?id=${id}` : url,
  })
}


/**
 * 快速事件数据拿取
 * @param {Function} callback 回调事件
 */
export function event(callback) {
  return function (e) {
    callback(this, e.currentTarget.dataset, e.detail);
  }
}


/**
 * 预览图片
 * data-参数：[pidx:图片所在索引][plist:图片集合]
 * @param {Event} e 微信事件
 */
export function previewImage(e) {
  let list = e.currentTarget.dataset.plist;
  let url = e.currentTarget.dataset.purl;
  let idx = e.currentTarget.dataset.pidx;
  if(typeof(idx) == 'undefined' || idx === null){
    wx.previewImage({
      urls: [url],
    });
  }else{
    
    wx.previewImage({
      urls: list,
      current: list[idx]
    })
  }
  
}
