<template>
  <div class="main_container">
    <div class="overlay">
      <div class="main_content">
          <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_container{
    width: 100%;
    height: 100vh;
    background-image: url("./assets/images/backgound.jpg");
    background-size: cover;
    background-position: center; 
    position: relative;
}
.main_container .overlay{
    background-color: #000000b5;
    width: 100%;
    height: 100%;
    padding: 15px;
}
.main_content{
    max-width: 500px;
    text-align: center;
    color: #fff;
    margin: 50vh auto;
    transform: translateY(-50%);
    padding: 38px 0;
}
</style>