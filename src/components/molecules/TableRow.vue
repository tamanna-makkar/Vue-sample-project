<script lang="ts" setup>
defineProps({
  isHeader: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['table-row', {'table-heading': isHeader}]">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.table-row
  padding: 0.8rem 0
  border-bottom: 1px solid #1414140D
  display: flex
  align-items: center
  cursor: pointer
  gap: 1.6rem
.table-heading
  background-color: #E9EBF9
  height: 50px
</style>
