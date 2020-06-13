// 字段排查
export async function ask (obj, replaceVal = '', exec = '_') {
  return new Proxy({}, {
    get: (target, key) => {
      if (key === exec) {
        return obj || replaceVal
      } else {
        return ask(!!obj && obj[key], replaceVal, exec)
      }
    }
  })
}

// 数字转汉字
export async function DTC (num) {
  let chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let chnUnitSection = ['', '万', '亿', '万亿', '亿亿']
  let chnUnitChar = ['', '十', '百', '千']

  function SectionToChinese (section) {
    let strIns = ''
    let chnStr = ''
    let unitPos = 0
    let zero = true
    while (section > 0) {
      let v = section % 10
      if (v === 0) {
        if (!zero) {
          zero = true
          chnStr = chnNumChar[v] + chnStr
        }
      } else {
        zero = false
        strIns = chnNumChar[v]
        strIns += chnUnitChar[unitPos]
        chnStr = strIns + chnStr
      }
      unitPos++
      section = Math.floor(section / 10)
    }
    return chnStr
  }

  let unitPos = 0
  let strIns = ''
  let chnStr = ''
  let needZero = false

  if (num === 0) {
    return chnNumChar[0]
  }

  while (num > 0) {
    let section = num % 10000
    if (needZero) {
      chnStr = chnNumChar[0] + chnStr
    }
    strIns = SectionToChinese(section)
    strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0]
    chnStr = strIns + chnStr
    needZero = (section < 1000) && (section > 0)
    num = Math.floor(num / 10000)
    unitPos++
  }
  return chnStr
}

// 去重
export async function dedupe (arr) {
  return [...new Set(arr)]
}

// 简易提示
let textTipShow = false
export async function textTip ({ str = '未知错误', t = 2000, tipStyle, fn }) {
  if (textTipShow) return
  tipStyle = tipStyle || `
      background:rgba(0,0,0,.3); color: #fff; border-radius: 3px; padding: 20px 10px;
      line-height: 40px; text-align: center; font-size: 30px;
      position: fixed; left: 50%; top: 20%; z-index: 9999;
      -webkit-transform: translate(-50%); transform: translate(-50%);`
  textTipShow = true
  var dom = document.createElement('div')
  dom.setAttribute('style', tipStyle)
  dom.innerHTML = str

  document.body.appendChild(dom)

  if ((dom.offsetHeight - 20) / 18 > 1) {
    dom.style.width = '55%'
  }

  setTimeout(function () {
    dom.parentNode.removeChild(dom)
    textTipShow = false
    if (fn) { fn() }
  }, t)
}

// 获取操作系统
export async function detectOS () {
  const sUserAgent = navigator.userAgent
  if (['Win32', 'Windows'].includes(navigator.platform)) {
    if (sUserAgent.includes('Windows NT 5.0') || sUserAgent.includes('Windows 2000')) {
      return 'Windows2000'
    } else if (sUserAgent.includes('Windows NT 5.1') || sUserAgent.includes('Windows XP')) {
      return 'WindowsXP'
    } else if (sUserAgent.includes('Windows NT 5.2') || sUserAgent.includes('Windows 2003')) {
      return 'Windows2003'
    } else if (sUserAgent.includes('Windows NT 6.0') || sUserAgent.includes('Windows Vista')) {
      return 'Windows Vista'
    } else if (sUserAgent.includes('Windows NT 6.1') || sUserAgent.includes('Windows 7')) {
      return 'Windows7'
    } else if (sUserAgent.includes('Windows NT 10.0') || sUserAgent.includes('Windows 10')) {
      return 'Windows10'
    } else {
      return 'Windows other'
    }
  } else if (['Mac68K', 'MacPPC', 'Macintosh', 'MacIntel'].includes(navigator.platform)) {
    return 'MacOS'
  } else if (navigator.platform === 'X11') {
    return 'Unix'
  } else if (String(navigator.platform).includes('Linux')) {
    return 'Linux'
  } else {
    return 'other'
  }
}

// 参数过滤
export async function jsonTreat (a, b, arr) {
  const keyArr = []
  if (b) {
    Object.keys(b).forEach(key => {
      if (arr) {
        if (!arr.includes(key)) {
          a[key] = b[key]
        }
      } else {
        a[key] = b[key]
      }
    })
  } else if (a) {
    Object.keys(a).forEach(key => {
      if (a[key]) {
        keyArr.push(key)
      }
    })
  }
  return keyArr
}

function randomString(len){
  len = len || 30
  let str = ''
  while (str.length < len) {
    str += Math.random().toString(36).substring(2)
  }
  return str.substring(0,len);
}

// 设置 session
export async function setSession ({ name }, obj) {
  return sessionStorage.setItem(name, obj)
}

// 获取 session
export async function getSession ({ name }) {
  return sessionStorage.getItem(name)
}

// 更新 session
export async function pushSession ({ name, arr }, obj = {}) {
  const msg = getSession({ name: name })
  let msgKey = null
  let index = 0
  if (arr && typeof arr === 'string') {
    arr = arr.split('.')
  }
  async function getMsgKey (item) {
    if (arr.length > index) {
      if (item[arr[index]]) {
        msgKey = item[arr[index]]
      } else {
        console.log(`没有 ${arr[index]} 集合`)
        return
      }
      index++
      await getMsgKey(msgKey)
    }
  }
  if (arr && arr.length) {
    await getMsgKey(msg)
    for (let key in obj) {
      msgKey[key] = obj[key]
    }
  } else {
    for (let key in obj) {
      msg[key] = obj[key]
    }
  }

  return setSession({ name: name }, msg)
}

// 导出 csv
export async function exportCSV ({ header = [], filterKey = [], list = [] }) {
  const mainStr = []
  mainStr.push(header.join("\t,")+"\n")
  list.forEach( item => {
    const temp = []
    filterKey.forEach(el => {
      temp.push(item[el])
    })
    mainStr.push(temp.join("\t,")+"\n")
  })

  const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(mainStr.join(""))
  let link = document.createElement('a')
  link.href = uri
  link.download = `${Math.random().toString(36).slice(-8)}-${new Date().getTime()}.csv`
  document.body.appendChild(link)
  link.click()
}

// 导出 excel
import { export_json_to_excel } from './core/Export2Excel'
export async function exportExcel ({ tableJson = [], filename, bookType }) {
  function formatJson (filterKey, jsonData) {
    return jsonData.map(v => filterKey.map(j => v[j]))
  }

  const header = []
  const data = []
  const sheetname = []
  const multiHeader = []
  const merges = []

  tableJson.forEach((item, i) => {
    header.push(item.header || item.filterKey || [])
    merges.push(item.merges || [])
    multiHeader.push(item.multiHeader || [])
    data.push(formatJson(item.filterKey, item.list || []))
    sheetname.push(item.sheetName || `${Math.random().toString(36).slice(-8)}-${new Date().getTime()}-${i}`)
  })

  export_json_to_excel({
    multiHeader,
    header,
    data,
    sheetname,
    merges,
    bookType,
    filename: filename || `${Math.random().toString(36).slice(-8)}-${new Date().getTime()}`
  })
}

export default {
  ask,
  DTC,
  dedupe,
  textTip,
  detectOS,
  jsonTreat,
  fromVerify,
  setSession,
  getSession,
  pushSession,
  exportCSV,
  exportExcel
}
