<template>
  <div class="app">
    <Navbar/>
    <RouterView/>
  </div>
</template> 

<script>
import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  html, body{
    background-color: #0B1015;
    color: #42B975;
    overflow-x: hidden;
    height: 100%;
	  width: 100%;
  }
  *{
    font-family: vueFont;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: vueFont;
    src: url('@/font/Bluecurve-Regular.ttf');
  }
  .app {
    display: grid;
    grid-template: minmax(auto,auto) 1fr / 1fr;
    max-width: 100%;
	  min-height: 100vh;
    padding: 0px 15px;
  }
  *{
	padding: 0;
	margin: 0;
	border: 0;
 }
  *,*:before,*:after{
  	-moz-box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	box-sizing: border-box;
  }
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
/*____________________*/
</style>
