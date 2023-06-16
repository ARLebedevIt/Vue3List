<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>
<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  }
}
</script>
<style scoped>
  .input{
    width: 100%;
    border: 2px solid #42B975;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #0B1015;
    color: #42B975;
    font-size: 20px;
  }
</style>