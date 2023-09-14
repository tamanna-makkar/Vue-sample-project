<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <button
    :class="[
      'button',
      {'disabled': isDisabled}
    ]"
    @click="$emit('onClick')"
  >
    <span
      :class="[
        'button__text'
      ]"
      >{{ text }}</span
    >
  </button>
</template>

<style lang="sass" scoped>
.button
    height: 36px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    font-size: 15px
    border-radius: 3px
    border: none
    margin-top: 9px
    transition: all .2s
    background-color: #6E58F1
    color: #fff
    &.disabled
      background-color: #EDEEF8
      color: #A9ABC1
      pointer-events: none 
</style>
