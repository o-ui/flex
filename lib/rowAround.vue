<template>
  <div class="row-around" :class="{'top': top, 'bottom': bottom, 'wrap': wrap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rowAround',
  props: {
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>

<style lang="scss" src="./flex.scss"></style>
