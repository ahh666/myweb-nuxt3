<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2023-07-31 11:53:47
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2023-07-31 11:53:47
 * @FilePath     : \myweb-v3\src\components\AiIcon.vue
 * @Description  : Description
-->
<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <i :class="`iconfont ${name}`" />
</template>
