/*
 * @Description: StyleLint 配置文件
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 16:57:15
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/23 00:10:46
 * @Documentation: https://stylelint.io/user-guide/configuration
 */

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  // 添加自定义规则
  rules: {
    // Prettier 宽度检测优先
    'declaration-colon-newline-after': null
  }
}
