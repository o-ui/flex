<template>
  <div class="row-between" :class="{'top': top, 'bottom': bottom, 'wrap': wrap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rowBetween',
  props: {
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>
