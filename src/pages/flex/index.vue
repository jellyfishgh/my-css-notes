<template>
  <page class="flex">
    <div class="container w-100">
      <div class="item1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        consectetur quas vitae cum obcaecati sed eos iste ab molestiae pariatur?
        Sed, natus totam animi sint numquam labore obcaecati dolores eligendi?
      </div>
      <div class="item2">2</div>
      <div class="item3">3</div>
    </div>
  </page>
</template>

<script>
import Page from '../../components/page/index.vue'
export default {
  name: 'flex',
  components: {
    Page
  }
}
</script>

<style lang="less">
.flex {
  .container {
    display: flex;
    .item1 {
      flex: 1 0 0;
      background-color: red;
    }
    .item2 {
      width: 30px;
      background-color: green;
    }
    .item3 {
      background-color: blue;
    }
  }
}
</style>
