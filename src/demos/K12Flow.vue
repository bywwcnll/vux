<template>
  <div style="margin: 20px 0;">
    <k12-flow title="维修进度">
      <k12-flow-item v-for="(el, index) in list" :key="index" :data="el">
        <div slot="desc">紧急事务，尽快打款</div>
      </k12-flow-item>
    </k12-flow>
    <div style="height: 20px;"></div>
    <k12-flow title="维修进度" align="right">
      <k12-flow-item v-for="(el, index) in list" :key="index" :data="el">
        <div slot="desc">
          <p class="username" style="color: #5cba33;">张慧</p>
          <p class="msg" style="color: #333;">紧急事务，尽快打款</p>
        </div>
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
        date: '2019-07-30',
        status: '',
        name: '报修申请0'
      }, {
        time: '10:00',
        date: '2019-07-30',
        status: 'finish',
        name: '报修申请0'
      }, {
        time: '10:00',
        date: '2019-07-30',
        status: 'error',
        name: '报修申请'
      }, {
        time: '11:00',
        date: '2019-07-30',
        status: 'process',
        name: '国际能源联合国际能源联合部门'
      }, {
        time: '11:00',
        date: '2019-07-30',
        name: '报修申请3'
      }]
    }
  }
}
</script>

<style lang="less">

</style>
