<template>
  <div>
    <button-like-list type="btn" />
    <button-like-list type="badge" text="1" />
    <button-like-list type="pill" />
    <button-like-list type="alert" />
    <button-like-list type="toast" />
  </div>
</template>

<script>
import ButtonLikeList from '@/components/ButtonLikeList.vue'

export default {
  components: { ButtonLikeList },
}
</script>
