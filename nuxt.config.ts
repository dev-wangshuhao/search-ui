/*
 * @Description: Nuxt.js 配置文件
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 16:57:15
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/23 22:30:00
 * @Documentation: https://nuxtjs.org/guide
 */

import { Configuration } from '@nuxt/types'

const dotenv = require('dotenv').config()
if (dotenv.error) throw new Error('未找到 .env 文件')

const config: Configuration = {
  /**
   * 项目渲染模式
   */
  mode: 'universal',
  /**
   * 项目服务器配置
   */
  server: {
    port:
      process.env.NODE_ENV === 'development'
        ? '3000'
        : process.env.PRODUCTION_PORT || '80',
    host:
      // 开发模式放通所有主机供局域网调试
      process.env.NODE_ENV === 'development'
        ? '0.0.0.0'
        : process.env.PRODUCTION_HOST || '127.0.0.1'
  },
  /**
   * 全局页面头信息
   */
  head: {
    title: 'search-ui',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'version',
        content: process.env.npm_package_version || ''
      },
      {
        name: 'author',
        content: process.env.npm_package_author_name || ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'search,search-ui'
      },
      {
        hid: 'description',
        name: 'description',
        content: '网络搜索结果预处理程序'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
   * 顶部进度条
   */
  loading: false,
  /**
   * 全局样式资源
   */
  css: [],
  /**
   * 根 Vue 实例挂载前执行的插件
   */
  plugins: [
    // 文档：https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md
    '@/plugins/composition-api'
  ],
  /**
   * Nuxt.js 开发模块
   */
  buildModules: [
    // 文档：https://typescript.nuxtjs.org/guide
    '@nuxt/typescript-build',
    // 文档：https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /**
   * Nuxt.js 模块
   */
  modules: [
    // 文档：https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 文档：https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /**
   * Axios 模块选项
   */
  axios: {
    proxy: true,
    prefix: '/api/',
    https: false,
    progress: false
  },
  /**
   * 接口跨域代理
   */
  proxy: {
    '/api/': {
      target: process.env.AXIOS_PROXY_URL || '',
      pathRewrite: { '^/api/': '/' }
    }
  },
  /**
   * Typescript 模块选项
   */
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  /**
   * 构建配置
   */
  build: {
    /**
     * 编程式扩展 webpack 配置
     */
    extend() {}
  }
}

export default config
