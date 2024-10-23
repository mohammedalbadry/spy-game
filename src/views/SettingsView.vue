<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">اعدادات اللعب</h1>
        <icon class="icon" icon="fa-solid fa-sliders" />
      </div>
      <div class="screan_body">
        <div class="setting_box">
          <div class="input_container">
            <label>اجمالى عدد الاعبين</label>
            <div class="input_number">
              <span class="custom_icon">
                <icon class="icon" icon="fa-solid fa-circle-plus" />
              </span>
              <input class="custom_input" type="number" min="1" max="50">
              <span class="custom_icon">
                <icon class="icon" icon="fa-solid fa-circle-minus" />
              </span>
              </div>
          </div>
        </div>
        <router-link class="btn_main btn_dimensions" to="/options">اللى بعدة</router-link>
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


.input_container{
  width: 90%;
  margin: 20px 5% 0;
  text-align: right;
}
.input_container label{ 
  display: block;
  margin-bottom: 20px;
}
.input_container .input_number{
  display: flex;
}
.input_container .input_number .custom_input{
  padding: 10px 15px;
  height: 40px;
  width: 60%;
  border-radius: 5px;
  border: none;
}
.input_container .input_number .custom_icon{
  display: flex;
  align-items: center;
  height: 40px;
  width: 18%;
  margin: 0 1%;
  background-color: #fff;
  border-radius: 5px;
}
.input_container .input_number .custom_icon .icon{
  color: #000;
  margin: auto;
}
</style>