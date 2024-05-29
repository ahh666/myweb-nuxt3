<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2023-08-28 16:36:09
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2023-08-28 17:24:48
 * @FilePath     : \myweb-v3\src\components\AiButton.vue
 * @Description  : Description
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  ghost: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})
const customClass = computed(() => `${props.className} ${props.ghost ? 'ai-button--ghost' : ''}`)
</script>

<template>
  <div class="ai-button" :class="customClass">
    <slot />
  </div>
</template>

<style lang="less">
.ai-button {
  border-radius: 6px;
  min-width: 136px;
  height: 42px;

  font-size: 14px;
  line-height: 42px;
  text-align: center;

  transition: all 0.5s ease;

  cursor: pointer;

  &--ghost {
    background: none;
  }
}
</style>
