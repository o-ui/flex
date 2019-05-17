<template>
  <div class="row-end" :class="{'top': top, 'bottom': bottom, 'wrap': wrap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rowEnd',
  props: {
    top: Boolean,
    bottom: Boolean,
    wrap: Boolean
  }
}
</script>
