<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">الاختيارات</h1>
        <icon class="icon" icon="fa-solid fa-sitemap"/>
      </div>
      <div class="screan_body">
        <ul class="options_list">
          <li class="option" v-for="option in options">{{ option }}</li>
        </ul>

        <router-link class="btn_main btn_dimensions" to="/game">انطلق</router-link>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        options: [
        "اماكن و وسائل مواصلات",
        "اكل وشرب",
        "لاعبين",
        "اندية ومنتخبات",
        "مشاهير",
        "حيوانات",
        "ملابس",
        "افلام ومسلسلات",
        "شخصيات افتراضية",
        "وظائف",
        ],
      }
    }
}
</script>

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

.screan_content .screan_body .options_list{
  list-style: none;
  text-align: center;
  max-height: 250px;
  overflow-y: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.screan_content .screan_body .options_list .option{
  width: 40%;
  margin: 8px 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  color: #000;
  font-weight: bold;
}
</style>