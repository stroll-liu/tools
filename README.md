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
// 过滤的 规则 （目前只有 'onlyNumbers'）
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

```
