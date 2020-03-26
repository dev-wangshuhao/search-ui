<!--
 * @Description: 首页视图
 * @Author: wangshuhao.com
 * @Date: 2020/03/22 16:57:15
 * @LastEditors: wangshuhao.com
 * @LastEditTime: 2020/03/26 21:10:55
 -->

<template>
  <core-form />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CoreForm from '@/components/business/form-core/the-index.vue'

export default defineComponent({
  name: 'page-index',
  components: { CoreForm }
})
</script>
