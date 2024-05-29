/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-16 19:11:27
 * @FilePath     : \myweb-nuxt3\constants\index.ts
 * @Description  : Description
 */
import type { ProjectProps } from '../types/project'

export const appName = 'Archer 艾欢欢 | Website'
export const appDescription = '艾欢欢的网站'
export const keywords = '艾欢欢的网站,aihuanhuan website,archer website,aihuanhuan,archer'

export const projects: Array<ProjectProps> = [
  {
    // 项目1 恒生light云
    title: 'Light 云平台',
    desc: [
      '原恒生云，恒生公司旗下云服务品牌，提供一站式云计算行业解决方案。',
      '负责将 PC 端项目独立出来单独维护，用以将 Light 云作为品牌独立出来。',
      '自定义表单模板组件设计和开发。',
    ],
    bg: '/assets/img/banner_2_bg.png',
    btnGroup: [
      {
        text: '前往网站',
        jumpUrl: 'https://www.hs.net/openplat-front/mainIndex',
        icon: 'iconfenxiang',
        theme: 'white',
      },
      {
        text: '模板组件示例',
        jumpUrl: 'https://ahh.yananart.cn/project/questionnaire/',
        icon: '',
        theme: 'blue',
      },
    ],
  },
  {
    // 项目2 Light 云统一控台
    title: 'Light 云统一控台',
    desc: [
      '新立项的公司级项目，为实现统一，将现有自研控台的各类产品服务都接入到本控台统一管理。',
      '主要负责人，技术选型、规范定制、框架搭建、用户中心模块处理，头部组件封装导出和接入方对接试用。',
      '使用微前端框架，并根据对接情况更新版本发布日志。',
    ],
    bg: '/assets/img/banner_3_bg.png',
    btnGroupStyle: 'bottom: 60px',
    btnGroup: [
      {
        text: '前往网站',
        jumpUrl: 'https://www.hs.net/cloud-console/',
        icon: 'iconfenxiang',
        theme: 'white',
      },
    ],
  },
  {
    // 项目3 万和e阳指 投顾模块 H5 / 招行行情板块 H5
    title: '万和 e 阳指(投顾模块 H5)',
    desc: [
      '万和证券一站式移动端投资理财平台。',
      '投顾流程核心页面的开发和用户模块开发。',
      '折线图、饼图、进度条的开发和后期抽离组件化。',
      '主要技术栈：Vue2.x + TypeScript + TSX + React + Rollup。React 和 Rollup 主要是用来单独写富文本组件并打包。。',
    ],
    bg: '/assets/img/banner_5_bg.png',
    btnGroupStyle: 'bottom: 60px',
    btnGroup: [
      {
        text: '万和e阳指',
        jumpUrl: 'https://apps.apple.com/cn/app/%E4%B8%87%E5%92%8Ce%E9%98%B3%E6%8C%87/id1434028538',
        icon: 'iconfenxiang',
        theme: 'white',
      },
      {
        text: '招行行情板块',
        jumpUrl: 'https://market.cmbchina.com/MPage/online/201229173418544/admin/html/index.html',
        icon: '',
        theme: 'blue',
      },
    ],
  },
  {
    // 项目4 税友 个税app/自然人电子税务局
    title: '个税App / 自然人电子税务局',
    desc: [
      '用于纳税人自主申报个人所得税专项附加扣除的平台（app端和web端）。',
      '负责申报模块开发：申报模块的重构及组件抽离（CSS样式隔离（BEM）、单独的状态共享），切合业务的同时，提高复用性。',
      '负责个税记忆专题开发 —— 用户个税操作年终总结。',
      '前端规范制定，推动代码评审的进行和前端 mock。',
    ],
    bg: '/assets/img/banner_4_bg.png',
    btnGroupStyle: 'bottom: 60px',
    btnGroup: [
      {
        text: '个税App',
        jumpUrl: 'https://apps.apple.com/cn/app/%E4%B8%AA%E4%BA%BA%E6%89%80%E5%BE%97%E7%A8%8E/id1436002627',
        icon: 'iconfenxiang',
        theme: 'white',
      },
      {
        text: '电子税务局',
        jumpUrl: 'https://etax.chinatax.gov.cn/',
        icon: '',
        theme: 'blue',
      },
    ],
  },
]
