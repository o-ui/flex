<template>
  <div class="absolute-center row-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'absoluteCenter'
}
</script>

<style lang="scss" src="./flex.scss"></style>
<style lang="scss" scoped>
  .absolute-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
</style>
