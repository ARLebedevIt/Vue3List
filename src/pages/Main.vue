<template>
  <div class="homepage__wrapper">
    <div class="homepage__items">
      <div class="homepage__item">
        <h1>Добро пожаловать!</h1>
      </div>
      <div class="homepage__item homepage__item_img">
        <img src="@/image/vueIcon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .homepage__wrapper{
    display: grid;
   }
  .homepage__items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
  .homepage__item_img {
    position: relative;
    padding-bottom: 30%;
  }
  .homepage__item_img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 100;
  }
</style>