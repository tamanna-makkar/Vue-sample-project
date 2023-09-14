<script lang="ts" setup>
import { type PropType, ref, watch } from 'vue'
import IconSearch from '../icons/IconSearch.vue';

type InputType = 'text' | 'email' | 'password' | 'number' | 'search'
interface ModelValueType {
  valueTypes: string | number | null
}

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  modelValue: {
    type: [String, null, Number] as PropType<ModelValueType['valueTypes']>,
    required: false
  },
})
const inputValue = ref<string | number | null>(props.modelValue ?? '')

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      inputValue.value = newValue
    }
  }
)
</script>

<template>
  <div class="input-control-wrap" :class="{ 'search': type == 'search' }">
    <input
      :class="['input-control']"
      :type="type"
      v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)"
    />
    <div v-if="type == 'search'" class="search-icon"><IconSearch></IconSearch></div>
  </div>
</template>

<style lang="sass" scoped>
.search
  position: relative
  display: flex
  align-items: center
  input
    padding-left: 30px
.input-control
  width: 100%
  height: 40px
  border: 1px solid #C6C7DB
  border-radius: 3px
  padding: 0 15px
  outline: none
.search-icon
  position: absolute
  left: 10px
  svg
    width: 13px
    height: 13px
</style>
