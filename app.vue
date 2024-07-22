<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-05-15 16:35:35
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-31 16:28:25
 * @FilePath     : \myweb-nuxt3\app.vue
 * @Description  : Description
-->
<template>
  <NuxtLayout>
    <NuxtPage />
    <AiBackTop bind-id="home" />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  font-family: source-han-sans-simplified-c, sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background: #383c41;
}

html.dark {
  background: #222;
  color: white;
}
</style>
