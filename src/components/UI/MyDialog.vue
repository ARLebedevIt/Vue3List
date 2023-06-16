<template>
  <div class="dialog" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'MyDialog',
  mixins: [toggleMixin],
}
</script>
<style scoped>
  .dialog{ 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    color: #37a968d8;
    font-size: 40px;
    background: rgba(0, 0, 0, 0.666);
    display: flex;
  }
  .dialog__content{
    padding: 15px;
    margin: auto;
    background: rgba(0, 0, 0, 0.889);
    border-radius: 10px;
    border: 2px solid #37a968d8;
    min-height: 40vh;
    min-width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>