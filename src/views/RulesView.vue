<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">قوانين اللعبة</h1>
        <icon class="icon" icon="fa-solid fa-list-check" />
      </div>
      <div class="screan_body">
        <ul class="rules_list">
          <li class="rule" v-for="rule in rules">{{ rule }}</li>
        </ul>
        <router-link class="btn_main btn_dimensions" to="/settings">ابدا اللعب</router-link>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        rules: [
        'ممنوع الشخص يتسال مرتين ورى بعض',
        'اى لاعب يقدر يصوت على اى لاعب شك فيه والاغلبية تفوز',
        'لو الاغلبية شكوا فى لاعب يطلع بره ',
        'اى لاعب طلع بره لا يشارك حتى اذا لم يكت جاسوس',
        'اذا نفذ الوقت يفوز الجواسيس الذيين لم يكشفوا',
        'كل دور فيه عدد فرص بناء على عدد اللاعبين',
        'اذا لم يستطع احد التخمين استمر فى الاسئله بشكل افضل',
        'اذا عرف الجاسوس المعلومة يمكنة قولها واذا صح يكون فائز اذا خطا يكون بره الدور',
        'هدف الجواسيس انهم يعرفوا المعلومة ولا ينكشفوا',
        'هدف باقى اللاعبين اكتشاف الجواسيس',
        'حد ادنى ثلاث لاعبين',
        ' اللعبة مقسمة لفريقين جواسيس ولاعبيين'
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

.screan_content .screan_body .rules_list{
  list-style: none;
  text-align: right;
  max-height: 250px;
  overflow-y: auto;
}
.screan_content .screan_body .rules_list .rule{
  width: 90%;
  margin: 8px 5%;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  color: #000;
  font-weight: bold;
}
</style>