<script setup>
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="not-found-page">
    <div class="out-box">
      <p class="main">
        I have bad
      </p>
      <p class="main">
        news for you
      </p>
      <p class="desc">
        The page you are looking for might be
      </p>
      <p class="desc">
        removed or is temporarily unavailable
      </p>
      <button class="btn" @click="goHome">
        Come Home
      </button>
      <img class="not-found-img" src="/404.svg" alt="404">
    </div>
  </div>
</template>

<style lang="less">
.not-found-page {
  background: #fff;
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  .out-box {
    width: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .main {
    color: #000;
    font-size: 50px;
    font-weight: bold;
    line-height: 20px;
  }
  .desc {
    line-height: 10px;
  }
  .btn {
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 4px;
    border: none;
    margin-top: 10px;
    color: #fff;
    background: #0890ffda;
  }
  .not-found-img {
    position: absolute;
    height: 600px;
    top: -200px;
    right: -200px;
  }
}
</style>
