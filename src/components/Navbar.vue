<template>
  <div class="navbar">
    <div class="navbar__homeBtn" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns" :class="{'_openNav': menuOpen == true}">
      <MyButton @click="$router.push('/posts'), toggleMenu(false)">Посты</MyButton>
      <MyButton @click="$router.push('/about'), toggleMenu(false)">О сайте</MyButton>
      <MyButton @click="$router.push('/store'), toggleMenu(false)">Store</MyButton>
      <MyButton @click="$router.push('/composition'), toggleMenu(false)">Composition</MyButton>
    </div>
    <input :class="{'openBurger': menuOpen == true}" id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span @click="toggleMenu"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = this.menuOpen == true ? false : true
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: #0B1015;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #42B975;
  align-items: center;
  padding: 0 20px;
}

.navbar__homeBtn {
  cursor: pointer;
}

.navbar__btns {
  gap: 20px;
  display: flex;
}
#menu__toggle, .menu__btn{
  display: none;
}

@media (max-width: 650px) {
  .menu__btn{
  display: block;
  z-index: 12;
}
._openNav.navbar__btns{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.845);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1;
}
._openNav button{
  font-size: 40px;
}
  .navbar__btns {
    display: none;
  }
.openBurger+.menu__btn>span {
  transform: rotate(45deg);
}
.openBurger+.menu__btn>span::before {
  top: 0;
  transform: rotate(0deg);
}
.openBurger+.menu__btn>span::after {
  top: 0;
  transform: rotate(90deg);
}.openBurger~.menu__box {
  right: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #42B975;
  transition-duration: .25s;
}
.menu__btn>span::before {
  content: '';
  top: -8px;
}
.menu__btn>span::after {
  content: '';
  top: 8px;
}
}
</style>