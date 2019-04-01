<template>
  <div class="demo">
    <p>row-start with wrap</p>
    <row-start wrap>
      <div class="demo-item"></div>
      <div class="demo-item"></div>
      <div class="demo-item"></div>
      <div class="demo-item"></div>
      <div class="demo-item"></div>
      <div class="demo-item"></div>
    </row-start>
    <p>row-start top align + row-unit</p>
    <row-start top>
      <span>pre label</span>
      <row-unit>
        <div>
          <div class="demo-unit"></div>
          <br>
          <div class="demo-unit"></div>
        </div>
      </row-unit>
      <span>after label</span>
    </row-start>
  </div>
</template>

<script>
import Vue from 'vue'
import flex from '../lib'
Vue.use(flex)
export default {
  name: 'flex'
}
</script>

<style lang="scss">
  .demo {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    border: 1px solid #eee;
    padding: 10px;
    .demo-unit {
      height: 30px;
      background-color: #eee;
    }
    .demo-item {
      width: 100px;
      height: 30px;
      background-color: #ddd;
      margin-top: 10px;
      + .demo-item {
        margin-left: 10px;
      }
    }
  }
</style>
