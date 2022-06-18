<template>
  <div>
    <h2>.{{ type }}.-${variant}</h2>
    <div v-for="button in buttons" :key="button" class="story-row">
      <div :class="button">{{ text || button }}</div>
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
  props: {
    type: String,
    text: String,
  },
  computed: {
    buttons() {
      return button_types.map(t => `${this.type} -${t}`)
    }
  }
}
</script>

<style>
.story-row {
  margin-bottom: 0.5rem;
}
</style>