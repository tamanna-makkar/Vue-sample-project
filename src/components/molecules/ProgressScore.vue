<script lang="ts" setup>
import type { PropType } from 'vue'




defineProps({
  text: {
    type: String
  },
  /**
   * Radial progress
   * @values number as a percentage
   * -1: waiting
   * 0-99: progress
   * 100: complete
   */
  progress: {
    type: Number,
    required: true
  }
})

const getProgressColor = (progress: number) => {
  switch (progress) {
    case 0:
      return 'rgba(14, 30, 54, 0.1)'
    case 100:
      return '#3FD177'
    default:
      return '#5ECA39'
  }
}
</script>

<template>
  <div
    class="circular-progress"
    :style="{
      background: `conic-gradient(${getProgressColor(progress)} ${progress}%, rgba(14, 30, 54, 0.1) 0deg)`
    }"
  >
    <span :class="'progress-value'">{{ text }}</span>
  </div>
</template>

<style lang="sass" scoped>
.circular-progress
  position: relative
  height: 41px
  width: 41px
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center

  &::before
    content: ""
    position: absolute
    height: 32px
    width: 32px
    border-radius: 50%
    background-color: #fff
.progress-value
  color: #282B42
  font-size: 10px 
  position: relative    
</style>
