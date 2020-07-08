<template>
  <page class="float">
    <section>
      <div class="left">1</div>
      <div class="left">2</div>
      <div class="right">3</div>
      <p>
        Lorem ipsum dolor sit amet
      </p>
      <h2 class="secondHeading">Floats Example</h2>
    </section>
  </page>
</template>

<script>
import Page from '../../components/page/index.vue'
export default {
  name: 'float',
  components: {
    Page
  }
}
</script>

<style lang="less">
.float {
  section {
    border: 1px solid blue;
  }
  div {
    margin: 5px;
    width: 50px;
    height: 50px;
  }
  .left {
    float: left;
    background: pink;
  }
  .right {
    float: right;
    background: cyan;
  }
  h2.secondHeading {
    clear: both;
  }
}
</style>
