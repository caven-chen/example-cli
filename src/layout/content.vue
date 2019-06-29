<template>
  <div class="ly-content row">
    <router-view />
  </div>
</template>
<script>
const name = 'Content'
export default {
  name,
  mounted() {}
}
</script>

<style lang="scss" scoped>
.ly-content {
  width: 100%;
  height: calc(100% - 60px);
  overflow: hidden;
}
</style>






