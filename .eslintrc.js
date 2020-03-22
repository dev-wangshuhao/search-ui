/*
 * @Description: ESLint 配置文件
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 16:57:15
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/22 22:20:48
 * @Documentation: https://eslint.org/docs/rules
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // 添加自定义规则
  rules: {}
}
