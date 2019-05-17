<template>
  <div class="row-start" :class="{'top': top, 'bottom': bottom, 'wrap': wrap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rowStart',
  props: {
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>
