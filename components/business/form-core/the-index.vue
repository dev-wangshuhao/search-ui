<!--
 * @Description: 核心表单根组件
 * @Author: wangshuhao.com
 * @Date: 2020/03/26 20:45:08
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/26 20:51:35
 -->

<template>
  <form action="/search" method="get">
    <input-core />
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import InputCore from './input-core.vue'

export default defineComponent({
  name: 'form-core',
  components: { InputCore }
})
</script>
