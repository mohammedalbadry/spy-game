<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">المعلومة السرية</h1>
        <icon class="icon" icon="fa-solid fa-brain" />
      </div>
      <div class="screan_body">

        <h1 class="secret">مطبخ</h1>

        <button class="btn_main btn_dimensions">
          <icon class="icon" icon="fa-solid fa-eye" />
          <span class="btn_text">اظهر المعلومة</span>
        </button>
        <button class="btn_main btn_dimensions">
          <icon class="icon" icon="fa-solid fa-eye-slash" />
          <span class="btn_text">اخفى المعلومة</span>
        </button>
        <button class="btn_main btn_dimensions">
          <icon class="icon" icon="fa-solid fa-hourglass-half" />
          <span class="btn_text">ابدا الوقت</span>
        </button>
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
.btn_text{
  margin: 0 10px;
}
.secret{
  font-size: 44px;
  margin: 20px 0 40px;
  font-weight: bold;
}
</style>