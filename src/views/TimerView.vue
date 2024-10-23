<template>
    <div class="screan_content">
      <div class="screan_head">
        <h1 class="title">عداد تنازلى</h1>
        <icon class="icon" icon="fa-solid fa-stopwatch" />
      </div>
      <div class="screan_body">
        <div class="timer_box">
          <div class="unit">
            <span class="number">30</span>
            <span class="text">minutes</span>
          </div>
          <div class="unit">
            <span class="number">30</span>
            <span class="text">seconds</span>
          </div>
        </div>
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
.timer_box{
  width: 90%;
  margin: 20px 5% ;
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly
}

.timer_box .unit{
  width: 42%;
  background-color: #ffffff4d;
  display: flex;
  flex-direction: column;
}
.timer_box .unit .number{
  font-size: 44px;
  font-weight: bold;
}
.timer_box .unit .text{
  background-color: #ddd6;
  font-size: 32px;
  font-weight: 400;
}
</style>