/*
 * @Description: CommitLint 配置文件
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 22:13:31
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/26 01:31:54
 * @Documentation: https://commitlint.js.org/
 */

// 版本提交日志书写规范说明：
// build：修改项目构建系统
// chore：不属于以上类型的其他类型
// ci：修改项目继续集成流程
// docs：文档更新
// feat：新增功能
// fix：修复缺陷
// improvement: 优化及改善
// perf：性能优化
// refactor：重构代码
// revert：回滚某个更早之前的提交
// style：不影响程序逻辑的代码修改
// test：新增测试用例或更新现有测试

module.exports = { extends: ['@commitlint/config-conventional'] }
