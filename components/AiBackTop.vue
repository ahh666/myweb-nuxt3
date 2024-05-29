<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-05-15 16:03:58
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-29 17:47:08
 * @FilePath     : \myweb-nuxt3\components\AiBackTop.vue
 * @Description  : Description
-->
<script setup>
import { computed, onMounted, ref } from 'vue'
import throttle from 'lodash/throttle'
import AiIcon from './AiIcon.vue'

const props = defineProps({
  bindId: {
    type: String,
    default: '',
  },
})

const scrollY = ref(0)
const el = ref(null)
const showBackTop = computed(() => scrollY.value > 400)

const scrollYListener = throttle(() => {
  scrollY.value = el.value.scrollTop
}, 300)

function backTop() {
  el.value.scrollTo({
    top: 0,
    left: window.screenX,
    behavior: 'smooth',
  })
}

onMounted(() => {
  if (props.bindId) {
    el.value = document.getElementById(props.bindId)
    el.value.onscroll = scrollYListener
  }
})
</script>

<template>
  <Transition>
    <div v-show="showBackTop" class="ai-back-top" @click="backTop">
      <AiIcon name="iconcontrol101" text="30px #636567" />
    </div>
  </Transition>
</template>

<style lang="less">
.ai-back-top {
  cursor: pointer;

  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 44px;
  height: 44px;
  line-height: 44px;

  border-radius: 50%;
  background: #141516;
  text-align: center;
}
/* 设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.v-enter-active {
  transition: all 0.4s ease;
}
.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-enter-from,
.v-leave-to {
  transform: translateX(60px);
}
</style>
