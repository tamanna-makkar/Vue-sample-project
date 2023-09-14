<script lang="ts" setup></script>
<template>
  <div class="table">
    <slot name="tableHeader"></slot>
    <slot name="tableBody"></slot>
  </div>
</template>

<style lang="sass" scoped>
.table
  width: 100%
  border-spacing: 0
</style>
  