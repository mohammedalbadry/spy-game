<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">الجاسوس</h1>
        <icon class="icon" icon="fa-solid fa-user-secret" />
      </div>
      <div class="screan_body">
        <router-link class="btn_main btn_dimensions" to="/rules">توضيح اللعبة</router-link>
        <router-link class="btn_main btn_dimensions" to="/settings">ابدا اللعب</router-link>
      </div>
    </div>
</template>

<style scoped>
.screan_content .screan_head .title{
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 20px;
}
.screan_content .screan_head .icon{
    font-size: 80px;
}
.screan_content .screan_body {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>