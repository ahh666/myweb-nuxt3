<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-05-15 17:52:01
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-07-23 17:52:03
 * @FilePath     : \myweb-nuxt3\components\ProjectCard.vue
 * @Description  : Description
-->
<script setup lang="ts">
import type { ProjectProps } from '../types/project'

const props = defineProps<{
  project: ProjectProps
}>()

const { title, desc, btnGroup, bg, btnGroupStyle } = props.project
</script>

<template>
  <div class="project-card">
    <div class="project-card-mask" />
    <div class="project-card-desc">
      <h2 class="project-card-desc-title">
        {{ title }}
      </h2>
      <ul>
        <li v-for="(d, i) in desc" :key="i">
          {{ d }}
        </li>
      </ul>
    </div>
    <div class="btn-group" :style="btnGroupStyle">
      <AiButton
        v-for="b in btnGroup" :key="b.jumpUrl"
        :class-name="`btn-${b.theme}`"
        @click="openUrl(b.jumpUrl)"
      >
        {{ b.text }}
        <AiIcon text-current-color :name="b.icon" />
      </AiButton>
    </div>
    <div
      class="img-area" :style="{
        backgroundImage: `url(${bg})`,
      }"
    />
  </div>
</template>

<style lang="less">
// 按钮主题
.btn {
  &-white {
    border: 1px solid #3a4151;

    color: #2c313e;
    background-color: #f5f6f8;

    &:hover {
      filter: invert(1);
    }
  }

  &-blue {
    border: 1px solid transparent;

    color: #fff;
    background-color: #3973ff;

    &:hover {
      border: 1px solid #3973ff;

      color: #3973ff;
      background-color: #f5f6f8;
    }
  }

  &-icon {
    color: currentColor;
  }
}

.project-card {
  overflow: hidden;

  position: relative;

  margin-top: 20px;
  border-radius: 8px;
  padding: 110px 0 0 120px;
  width: 100%;
  max-width: 1200px;
  height: 420px;

  color: rgba(0, 0, 0, 0.8);
  background: #f5f6f8;

  .img-area {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;

    width: 590px;
    height: 420px;

    background-size: cover;

    opacity: 1;
  }

  .btn-group {
    display: flex;

    position: absolute;
    bottom: 100px;
    left: 120px;
    z-index: 2;

    width: 290px;

    justify-content: space-between;
  }

  &-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 50%;
    height: 100%;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }

  &-desc {
    position: absolute;
    z-index: 1;

    width: 100%;

    &-title {
      margin-bottom: 10px;

      font-size: 1.1em;
      font-weight: 600;
    }

    ul {
      padding-left: 16px;
      width: 50%;
      min-width: 550px;

      color: rgba(0, 0, 0, 0.8);

      li {
        list-style-type: disc;

        margin-bottom: 6px;

        font-size: 16px;
        line-height: 24px;
      }
    }

    p {
      font-size: 16px;
    }

    &--intro {
      h1 {
        margin-bottom: 2px;

        font-size: 40px;

        color: #fff;
      }

      p {
        margin-bottom: 40px;

        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>
