<template>
  <select class="select" :value="modelValue" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    changeOptions(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>

.select {
    display: inline-block;
    padding: 4px 3px 3px 5px;
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    outline: none;
    background: black;
    color: #42B975;
    border: 2px solid seagreen;
}
</style>