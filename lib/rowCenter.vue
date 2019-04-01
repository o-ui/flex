<template>
  <div class="row-center" :class="{'top': top, 'bottom': bottom, 'wrap': wrap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rowCenter',
  props: {
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>

<style lang="scss" src="./flex.scss"></style>
