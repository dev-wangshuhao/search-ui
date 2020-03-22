<!--
 * @Description: 项目概述文档
 * @Author: wangshuhao.com
 * @Date: 2020/03/21 01:32:12
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/23 00:35:58
 -->

# 用户界面：网络搜索结果预处理程序

> 一个致力于提供全新交互体验的网络搜索结果预处理（及相关衍生服务）程序

## 开发环境说明

### 依赖包警告：

``` txt
warning nuxt > @nuxt/webpack > @nuxt/babel-preset-app > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

warning stylelint > postcss-markdown > remark > unified > @types/vfile > @types/vfile-message@2.0.0: This is a stub types definition. vfile-message provides its own type definitions, so you do not need this installed.

warning commitlint > @commitlint/cli > babel-polyfill > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

warning commitlint > @commitlint/cli > babel-polyfill > babel-runtime > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```

### 注意事项：

- 如果你正在使用 vetur，请将 vetur.useWorkspaceDependencies 设为 true

- 使用 Typescript 语言进行开发

- 利用 @vue/composition-api 插件使用基于函数的逻辑复用机制（Vue3.0 新特性）进行开发

- 在 pre-commit 周期中启用半自动代码规范检查以及在 commit-msg 周期中启用提交日志格式校验

### 脚手架选项：

``` md
# Project name
search-ui

# Project description
用户界面：网络搜索结果预处理程序

# Author name
wangshuhao.com

# Choose programming language
TypeScript

# Choose the package manager
Yarn

# Choose UI framework
None

# Choose custom server framework
None (Recommended)

# Choose the runtime for TypeScript
@nuxt/typescript-runtime

# Choose Nuxt.js modules
Axios,
DotEnv

# Choose linting tools
ESLint,
Prettier,
Lint staged files,
StyleLint

# Choose test framework
None

# Choose rendering mode
Universal (SSR)

# Choose development tools
jsconfig.json (Recommended for VS Code),
Semantic Pull Requests
```

## 环境变量

根目录下存在一个 .env 文件（未启用版本控制）保存相关环境变量参数

开发环境下 .env 文件代码如下：

``` md
# 使用 大写字母 + 下划线 命名
# 推荐安装 DotENV 插件（VS Code）
# https://github.com/nuxt-community/dotenv-module

# 生产模式服务端口
PRODUCTION_PORT='80'

# 生产模式服务主机
PRODUCTION_HOST='127.0.0.1'

# Axios 接口服务器路径
AXIOS_PROXY_URL='http://127.0.0.1:8080'

```
