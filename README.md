# tools
工具类

## 安装

```js
npm i @stroll/tools

```
## 引入
```js
import Vue from 'vue'
import Tools from '@stroll/tools'

Vue.prototype.$tools = Tools

```
## 调用
```js
// 字段排查，如果有就返回，没有返回自定义值 或 默认值（''）
// obj 比传参数
// replaceVal 可选参数，自定义值（默认 ''）
// exec 可选参数，截至符（默认 _）
ask(obj, replaceVal, exec).a.b.c._

// 数字转汉字
// num 比传参数,需要转换的数字
DTC(num)

// 数组去重
dedupe(arr)

// 简易提示
// str 提示文案，默认 '未知错误',
// t显示时间，单位毫秒，默认 2000,
// tipStyle 提示框样式,
// fn 提示框消失后的回调
textTip({ str, t, tipStyle, fn })

// 获取操作系统
detectOS()

// 参数过滤
// 只传第一个参，返回参数的所有key
// 传两个参数，把第二个参数合并到第一个里
// 第三个参数，第二个参数需要过滤调的key
// 前两个参数为json对象，第三个为数组
jsonTreat(jsonObjA, jsonObjB, arr)

// 过滤
// v 需要过滤的值
// format 过滤的 规则 （目前只有 'onlyNumbers'）
fromVerify(v, format)

// 设置session
// name 参数 session 的 key
// obj 参数 session 的 value
setSession({ name }, obj)

// 获取session
// name 参数 session 的 key
getSession({ name })

// 更新session
// name 参数 session 的 key
// arr 参数 需要更新的 key
// obj 参数 需要更新的
pushSession({ name, arr }, obj = {})

// 导出 csv
// tHeader 数组, 表头
// filterKey 数组， 需要导出的字段key
// list 数组， 需要导出的数组
exportCSV({tHeader, filterKey, list})

// 导出 Excel
// tableJson 数组，表设置 （支持多sheet）示例：[{header, filterKey, list, sheetName}, {header, filterKey, list, sheetName}, {header, filterKey, list, sheetName}]
  // header 数组，表头 示例：["序号", "标题", "作者", "服务"]
  // filterKey 数组，过滤需要展示的字段 示例：["id", "title", "author", "reviewer"]
  // list 数组， 展示的数据 示例： [{...}, {...}, {...}]
  // sheetName 字符串，sheet名称
// merges 数组， 合并单元格（目前不支持）
// filename 字符串，文件名称 默认 `${随机字符串}-${当前时间戳}`
// bookType 字符串，文件格式 默认 xlsx
exportExcel({ tableJson, merges, filename, bookType })

```
