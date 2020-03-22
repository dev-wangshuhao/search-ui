/*
 * @Description: 使用基于函数的逻辑复用机制
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 19:19:05
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/22 22:57:21
 * @Documentation: https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md
 */

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

/**
 * 警告：SetupContext.refs 并不属于 Vue 3.0 的一部分
 * @vue/composition-api 将其曝光在 SetupContext 中只是临时提供一种变通方案
 */
declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
  }
}
