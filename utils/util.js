const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function promisify(fn) {
  return function (data) {
    return new Promise((res, rej) => {
      fn({ ...data, success: res, fail: rej });
    });
  }
}

const chooseLocation = promisify(wx.chooseLocation);
const openLocation = promisify(wx.openLocation);

module.exports = {
  formatTime,
  promisify,
  chooseLocation,
  openLocation
}
