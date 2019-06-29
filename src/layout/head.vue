<template>
  <div class="ly-head row">
    <div class="title col-6">
      Example Cli
    </div>
    <div class="menu col-6"></div>
  </div>
</template>
<script>
const name = 'Head'
export default {
  name,
  mounted() {}
}
</script>
<style lang="scss" scoped>
.ly-head {
  width: 100%;
  height: 60px;
  .title {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>


