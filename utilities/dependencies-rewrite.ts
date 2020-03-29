/*
 * @Description: 重写第三方依赖的使用方式，实现逻辑低耦合
 * @Author: wangshuhao.com
 * @Date: 2020/03/29 18:12:21
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/29 19:29:00
 */

import { debounce } from 'throttle-debounce'

/**
 * 防抖：避免短时间内重复触发同一逻辑
 * fn：执行回调（默认防抖）
 * pause：暂停防抖功能
 * unpause：重启防抖功能
 * destroy：销毁整个方法，包括回调函数在内的所有方法将被移除
 */
/** 类型：防抖回调函数 */
type DebounceFn = (...args: any[]) => any
/** 类：生成具有防抖功能的回调函数 */
export class Debounce {
  private _isPaused: boolean = false
  private _fn: DebounceFn
  private _fnDebounce: debounce<DebounceFn>

  fn = () => {
    if (this._isPaused) {
      this._fn()
      return
    }
    this._fnDebounce()
  }

  pause = () => {
    this._isPaused = true
  }

  unpause = () => {
    this._isPaused = false
  }

  destroy = () => {
    this._fn = this._fnDebounce
    this._fnDebounce.cancel()
  }

  constructor(fn: DebounceFn, delay: number, immediate: boolean = false) {
    this._fn = fn
    this._fnDebounce = debounce(delay, immediate, fn)
  }
}
