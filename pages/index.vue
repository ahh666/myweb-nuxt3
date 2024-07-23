<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2023-06-19 14:41:52
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-07-23 18:05:13
 * @FilePath     : \myweb-nuxt3\pages\index.vue
 * @Description  : Description
-->
<script setup>
import { onMounted, ref } from 'vue'
import throttle from 'lodash/throttle'
import { projects } from '~/constants'

const homeRef = ref(null)
const isCover = ref(true)

// 顶部导航位置
const scrollHandler = throttle(() => {
  const { scrollTop } = homeRef.value
  isCover.value = scrollTop > 60
}, 300)

onMounted(() => {
  scrollHandler()
})
</script>

<template>
  <div id="home" ref="homeRef" class="home" @scroll="scrollHandler">
    <header class="head">
      <div class="head-nav-wrap" :class="{ 'head-nav-transition': isCover }">
        <div class="head-nav">
          <div class="head-nav-group">
            <span class="head-nav-item">项目</span>
            <span class="head-nav-item">作品</span>
            <span class="head-nav-item">关于我</span>
          </div>
          <AiIcon class="head-nav-git" name="iconGitHub" @click="goGithub" />
        </div>
      </div>
      <video
        class="head-banner"
        autoplay
        loop
        muted
        src="/assets/img/banner_video.webm"
      />
      <div class="head-container">
        <img class="avatar" src="https://cdn.ahh.yananart.cn/images/img_1614579709838_5.png">
        <div class="name">
          Archer
        </div>
        <div class="desc">
          Front-end engineer & Design
        </div>
      </div>
    </header>
    <main>
      <!-- 个人简介 -->
      <div class="card card-intro">
        <div class="card-intro-desc">
          <h1>你好，我是前端工程师 艾欢欢</h1>
          <p>在互联网公司担任前端负责人，主要负责前端架构设计、项目优化、技术选型、技术共建……</p>
          <h1>欢迎来到我的个人站点</h1>
          <p>你可以通过这个网站来了解我。😊</p>
        </div>
        <div class="card-intro-avatar">
          <img class="avatar" src="https://cdn.ahh.yananart.cn/images/img_1614579709838_5.png">
          <AiButton class-name="btn-more" @click="openUrl('https://ahh.yananart.cn/ahh/resume')">
            个人简历
            <AiIcon class="btn-more-icon" name="iconfenxiang" />
          </AiButton>
        </div>
        <div class="img-area" style="background-image: url(/assets/img/banner-bg-personal.png);" />
      </div>
      <!-- 项目 -->
      <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="less">
@keyframes ani-head-nav-group {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;

    transform: translateX(-52px);
  }
}

.home {
  overflow: hidden scroll;

  width: 100vw;
  height: 100vh;

  .head {
    position: relative;

    width: 100%;
    height: 680px;

    &-banner {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      width: 100%;
      height: 100%;

      object-fit: fill;
    }

    &-nav-wrap {
      display: flex;

      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 99;

      height: 38px;

      transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);

      justify-content: center;
    }

    &-nav {
      display: flex;

      position: relative;

      width: 90%;
      max-width: 1200px;

      transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);

      justify-content: center;

      &-transition {
        border-bottom: 1px solid rgba(76, 79, 84, 0.6);
        height: 62px;

        background: rgba(20, 21, 22, 0.85);

        backdrop-filter: blur(20px);

        .head-nav {
          flex-direction: row-reverse;
          justify-content: flex-start;

          &-group {
            margin-right: -30px;
            width: 210px;

            animation: ani-head-nav-group 0.8s cubic-bezier(0.4, 0, 0, 1)
              forwards;

            align-items: center;
          }

          &-git {
            right: -15px;
            top: 15px;
          }
        }
      }

      &-group {
        display: flex;

        width: 350px;
        height: 100%;

        color: rgba(255, 255, 255, 0.6);

        // transition: all .6s cubic-bezier(.4,0,0,1);

        align-items: flex-end;
        justify-content: space-around;
      }

      &-item {
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }

      &-git {
        position: absolute;
        top: 10px;
        right: 30px;

        font-size: 20px;

        color: rgba(255, 255, 255, 0.6);

        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);

        cursor: pointer;
      }
    }

    &-container {
      color: #fff;
      padding-top: 150px;
      width: 100%;

      text-align: center;

      .avatar {
        display: inline-block;
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }

      .name {
        font-size: 32px;
      }

      .desc {
        font-size: 20px;
      }
    }
  }

  main {
    margin: 0 auto;
    padding-bottom: 600px;
    width: 100%;
    max-width: 1200px;

    .card {
      overflow: hidden;

      position: relative;

      margin-top: 20px;
      border-radius: 8px;
      padding: 110px 0 0 120px;
      width: 100%;
      max-width: 1200px;
      height: 420px;
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

      &-intro {
        background-color: rgb(20, 21, 22);
        &-desc {
          position: absolute;
          z-index: 1;
          width: 100%;
          h1 {
            color: #f0f8ff;
            margin-bottom: 2px;

            font-size: 40px;
          }

          p {
            margin-bottom: 40px;

            color: rgba(255, 255, 255, 0.7);
          }
        }

        &-avatar {
          position: absolute;
          top: 120px;
          right: 120px;
          z-index: 1;

          .avatar {
            margin: 0 0 15px 5px;
            border-radius: 50%;
            width: 120px;
            height: 120px;
          }

          .btn-more {
            border: 1px solid #fff;

            color: #fff;
            background: none;

            &-icon {
              color: currentColor;
            }

            &:hover {
              color: #000;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
