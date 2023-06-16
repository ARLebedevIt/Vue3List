<template>
  <button class="btn">
  <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped>
  .btn {
    padding: 10px 15px;
    background: none;
    color: #37a968d8;
    border: 1px solid #37a968d8;
    cursor: pointer;
  }
</style>