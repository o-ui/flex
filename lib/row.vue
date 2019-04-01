<template>
  <div class="row" :class="{
    'row-between': between,
    'row-around': around,
    'row-start': start,
    'row-end': end,
    'row-center': center,
    'top': top,
    'bottom': bottom,
    'wrap': wrap
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'row',
  props: {
    between: Boolean,
    around: Boolean,
    start: Boolean,
    end: Boolean,
    center: Boolean,
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>

<style lang="scss" src="./flex.scss"></style>
