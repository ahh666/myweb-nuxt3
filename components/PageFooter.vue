<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-05-15 16:34:17
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-07-23 16:21:01
 * @FilePath     : \myweb-nuxt3\components\PageFooter.vue
 * @Description  : Description
-->
<script setup>
import { contact } from '~/constants'

const captchaObj = ref(null)
const showWechat = ref(false)
const showEmail = ref(false)
const currentShowInfo = ref('')

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
          if (!showEmail.value)
            showEmail.value = currentShowInfo.value === 'email'

          if (!showWechat.value)
            showWechat.value = currentShowInfo.value === 'wechat'
        })
    },
  )
}
// 按钮点击获取信息
function showPersonalInfo(type) {
  if ((showWechat.value && type === 'wechat') || (showEmail.value && type === 'email'))
    return

  currentShowInfo.value = type
  type && captchaObj.value && captchaObj.value.showBox()
}
const openUrl = url => window.open(url)
onMounted(() => {
  initCaptcha()
})
</script>

<template>
  <footer class="page-footer">
    <div class="about">
      <h1 class="title">
        关于我
      </h1>
      <div class="content">
        你好，我叫艾欢欢，是一名前端工程师，负责过前端架构设计、技术选型、基建开发、网站重构等重要工作。
        <br><br>

        大学就读于湖北理工，计算机科学与技术专业。喜欢社交，学习能力、动手能力较强。
        大学期间获得国家奖学金、中国大学生计算机设计大赛国家奖（有奖状），曾任职学生会主席。
        <br><br>

        熟悉 Vue2、Vue3、React、Node 等前端框架，对设计和拍照构图也有一些兴趣。
        我始终相信业务推动技术升级，而技术推动业务发展。希望能用所学知识解决实际问题。
        <br><br>

        我希望自己能一直热爱生活并敢于面对更多挑战。努力改变能改变的，平静接受不能改变的。
      </div>
    </div>
    <div class="contact" mt80px>
      <h1 class="title">
        联系我
      </h1>
      <div class="content">
        <div class="contact-list">
          <div v-for="c in contact" :key="c.type" class="contact-item">
            <AiIcon :name="c.icon" text-22px :title="c.type" @click="openUrl(c.url)" />
          </div>
        </div>
        <div class="email">
          <AiIcon name="iconyouxiang" text-14px />
          <span @click="showPersonalInfo('email')">{{ showEmail ? 'ahh666@qq.com' : '查看我的邮箱' }}</span>
        </div>
        <div class="wechat">
          <AiIcon name="iconsocial-wechat" text-14px />
          <span @click="showPersonalInfo('wechat')">{{ showWechat ? 'ah2121' : '查看我的微信' }}</span>
        </div>
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
  </footer>
</template>

<style lang="less">
.page-footer {
  margin-top: 150px;

  .contact,
  .about {
    display: flex;

    align-items: flex-start;
    justify-content: center;

    .title {
      width: 200px;

      font-size: 30px;
      font-weight: 700;
      line-height: 34px;

      color: #fff;
    }

    .content {
      width: 720px;

      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      line-height: 20px;

      color: rgba(255, 255, 255, 0.6);
    }

    .contact-list {
      display: flex;

      margin-bottom: 10px;

      .contact-item {
        margin-right: 20px;

        cursor: pointer;
      }
    }
  }

  .email,
  .wechat {
    display: inline-block;

    position: relative;

    margin-right: 20px;
    border-radius: 8px;
    padding: 12px 16px;

    font-size: 13px;

    color: rgba(255, 255, 255, 0.6);
    background-color: #40454b;

    transition: all 0.3s ease;

    cursor: pointer;

    &:hover {
      filter: brightness(1.1);
    }

    i {
      display: inline-block;

      margin-right: 8px;
      width: 16px;
      height: 16px;

      transition: all 0.3s ease;
    }
  }

  .globalFooter {
    display: flex;

    margin: 16px auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px 0 40px 0;
    width: calc(100% - 32px);
    max-width: 1200px;

    color: rgba(255, 255, 255, 0.6);

    justify-content: space-between;

    .globalFooter_links {
      a {
        margin-right: 16px;

        transition: all 0.3s ease;

        &:hover {
          color: #fff;
        }
      }
    }

    .globalFooter_copyright {
      font-size: 12px;
      letter-spacing: 0.5px;

      color: rgba(255, 255, 255, 0.3);
    }
  }

  @media screen and (max-width: 600px) {
    .globalFooter {
      padding: 24px 0 40px 0;
      width: 100%;

      align-items: flex-start;
      flex-direction: column;

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
        margin-top: 16px;
        max-width: 100%;

        line-height: 18px;
        text-align: left;
      }
    }
  }
}
</style>
