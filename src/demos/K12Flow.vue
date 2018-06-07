<template>
  <div style="margin: 20px 0;">
    <k12-flow title="维修进度">
      <k12-flow-item v-for="(el, index) in list" :key="index" :data="el">
        <div slot="desc">ss</div>
      </k12-flow-item>
    </k12-flow>
  </div>
</template>

<script>
import { K12Flow, K12FlowItem } from 'k12vux'

export default {
  components: {
    K12Flow, K12FlowItem
  },
  created () {},
  data () {
    return {
      list: [{
        time: '9:00',
        date: '8月2日',
        status: '',
        name: '报修申请0'
      }, {
        time: '10:00',
        date: '8月2日',
        status: 'finish',
        name: '报修申请0'
      }, {
        time: '10:00',
        date: '8月2日',
        status: 'error',
        name: '报修申请'
      }, {
        time: '11:00',
        date: '8月2日',
        status: 'process',
        name: '报修申请2'
      }, {
        time: '11:00',
        date: '8月2日',
        name: '报修申请3'
      }]
    }
  }
}
</script>

<style lang="less">

</style>
