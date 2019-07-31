<template>
  <div class="k12-flow-container">
    <div v-if="title" class="k12-flow-title">{{title}}</div>
    <div class="k12-flow-steps">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k12-flow',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
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
.k12-flow-container {
  position: relative;
  background-color: #ffffff;
  border-top: 1px solid @k12-flow-border-color;
  border-bottom: 1px solid @k12-flow-border-color;
}
.k12-flow-title {
  font-size: 17px;
  margin-left: 15px;
  padding: 10px 15px 10px 0;
  border-bottom: 1px solid @k12-flow-border-color;
}
.k12-flow-steps {
  min-height: 116px;
  padding: 20px 0;
  > .k12-flow-step {
    &:not(:last-child) {
      min-height: 76px;
    }
    &:first-child {
      .k12-flow-top-line {
        visibility: hidden;
      }
    }
    &:last-child {
      .k12-flow-line {
        display: none;
      }
    }
  }
}
</style>
