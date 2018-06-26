<template>
  <div class="k12-template-container">
    k12-template-container
  </div>
</template>

<script>
export default {
  name: 'k12-template',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  mounted () {},
  computed: {}
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-template-container {
  position: relative;
  background-color: #ffffff;
  border-top: 1px solid @k12-flow-border-color;
  border-bottom: 1px solid @k12-flow-border-color;
}
</style>
