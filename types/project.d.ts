/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 15:41:01
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-16 18:37:51
 * @FilePath     : \myweb-nuxt3\types\project.d.ts
 * @Description  : Description
 */

interface btnGroup {
  text: string
  jumpUrl: string
  icon?: string
  theme: string
}

export interface ProjectProps {
  title: string
  desc: Array<string>
  bg: string
  btnGroup: Array<btnGroup>
  btnGroupStyle?: string
}
