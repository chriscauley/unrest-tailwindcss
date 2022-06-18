<template>
  <div>
    <div v-for="button in buttons" :key="button" class="story-row">
      <div :class="button">{{ button }}</div>
    </div>
  </div>
</template>

<script>
const button_types = [
  'primary',
  'secondary',
  'success',
  'danger',
  'error',
  'warning',
  'info',
  'light',
  'dark',
  'text',
  'link',
]

export default {
  computed: {
    buttons() {
      return button_types.map(t => `btn -${t}`)
    }
  }
}
</script>

<style>
.story-row {
  margin-bottom: 0.5rem;
}
</style>