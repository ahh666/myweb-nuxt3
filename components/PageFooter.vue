<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-05-15 16:34:17
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-07-22 17:58:45
 * @FilePath     : \myweb-nuxt3\components\PageFooter.vue
 * @Description  : Description
-->
<script setup>
const captchaObj = ref(null)
const validPass = ref(false)
const currentInfo = ref('')

// 初始化验证码
function initCaptcha() {
  window.initGeetest4(
    {
      captchaId: 'c366396a62477f4def90c18b075983ad',
      product: 'bind',
      bgColor: '#00000099',
    },
    (cap) => {
      cap
        .onReady(() => {
          captchaObj.value = cap
        })
        .onSuccess(() => {
          validPass.value = true
        })
    },
  )
}
// 按钮点击获取信息
function showPersonalInfo(type) {
  currentInfo.value = type
  type && captchaObj.value && captchaObj.value.showBox()
}
onMounted(() => {
  initCaptcha()
})
</script>

<template>
  <div class="footer">
    <div class="about">
      <h1 class="title">
        关于我
      </h1>
      <div class="desc">
        你好，我叫右可，是一名设计师，从事视觉、界面、动效等设计工作。<br>

        因为对画画感兴趣，我小学时周末通常是在绘画兴趣班度过的，随后高中开始系统的学习美术，大学于湖北美术学院动画系就读。
        可能是在学习环境中接触「实验性」和「纯艺」比较多，我更向往贴近生活的表现形式，希望利用所学知识来解决实际问题。
        <br>
        我希望自己能一直热爱设计并敢于面对更多挑战。努力改变能改变的，平静接受不能改变的。
      </div>
    </div>
    <div class="contact">
      <h1 class="title">
        联系我
      </h1>
      <div class="desc">
        <span @click="showPersonalInfo">weixin</span>
      </div>
    </div>
    <div class="globalFooter">
      <div class="globalFooter_links">
        <a href="https://ahh.yananart.cn/ahh" target="_blank">不才的小站</a>
        <a href="https://yananart.cn/" target="_blank">Yananart</a>
      </div>
      <div
        class="globalFooter_copyright"
      >
        Designed & coded by Aihuanhuan. Site is hosted on aliyun and service process manage by pm2.
      </div>
    </div>
  </div>
</template>

<style lang="less">
.footer {
  margin-top: 150px;
  margin-bottom: 120px;
  .contact,
  .about {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .title {
    width: 200px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }
  .desc {
    width: 720px;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    color: hsla(0, 0%, 100%, 0.6);
    line-height: 20px;
  }

  .globalFooter {
    max-width: 1200px;
    width: calc(100% - 32px);
    padding: 24px 0 40px 0;
    margin: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;

    span {
      margin-right: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    &_links {
      a {
        margin-right: 16px;
        transition: all 0.3s ease;

        &:hover {
          color: white;
        }

        /* &:last-child {
        display: inline-block;
        height: 16px;
        padding-left: 10px;
        border-left: 1px solid $font-color-white-3;
      } */
      }
    }
    &_copyright {
      @include font(12px, rgba(255, 255, 255, 0.3), 400);
    }
  }

  @media screen and (max-width: 600px) {
    .globalFooter {
      width: 100%;
      padding: 24px 0px 40px 0px;

      flex-direction: column;
      align-items: flex-start;

      .globalFooter_links {
        display: flex;
        flex-direction: column;

        a {
          margin: 14px 0 0 0;

          &:last-child {
            border: none;
            padding-left: 0;
          }
        }
      }

      .globalFooter_copyright {
        max-width: 100%;
        text-align: left;
        line-height: 18px;
        margin-top: 16px;
      }
    }
  }
}
</style>
