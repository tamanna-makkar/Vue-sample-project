<script lang="ts" setup>

defineProps({
  isHeader: {
    type: Boolean,
    default: false
  },
  cols: {
    type: Number,
    default: 7
  }
})

</script>

<template>
  <span :class="['table-cell', { 'table-cell--header': isHeader }]">
    <slot></slot>
  </span>
</template>

<style lang="sass" scoped>
.table-cell
  flex: 1
  overflow-y: auto
  position: relative
  padding: 7px 12px
  display: flex
  align-items: center
  &--header
    color: #686B8A
    font-size: 16px
    font-family: 'DM sans Medium'
    font-weight: 600
</style>
