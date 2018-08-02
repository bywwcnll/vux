<template>
  <div style="margin: 20px 0;">
    <button @click="onClick">点我</button>
    <k12-tree v-model="selectedList" :show.sync="showTree"
      :load="load"></k12-tree>
    <div>已选择：</div>
    <div>{{JSON.stringify(selectedList)}}</div>
  </div>
</template>

<script>
import { K12Tree } from 'k12vux'

export default {
  components: {
    K12Tree
  },
  created () {},
  data () {
    return {
      showTree: false,
      selectedList: []
    }
  },
  methods: {
    load (deptData) {
      let { deptId } = deptData
      return new Promise((resolve, reject) => {
        let list = []
        for (let i = 1; i <= 10; i++) {
          if (i <= 5) {
            list.push({
              deptId: deptId !== '-1' ? `${deptId}-${i}` : String(i),
              deptName: deptId !== '-1' ? `部门${deptId}-${i}` : `部门${i}`
            })
          } else {
            list.push({
              userId: Math.random(),
              avatar: 'http://p.qpic.cn/wwhead/duc2TvpEgSQO4BpE0WZSZ0icl0MpO2Dz6e0ZiaTxoNDKHOWLpoEmatgibrTDrgp1kyktqgfsroKLxo/0',
              userName: '人员' + Math.round(Math.random() * 1000)
            })
          }
        }
        setTimeout(() => {
          resolve(Math.random() > 0.5 ? list : [])
        }, 1000)
      })
    },
    onClick () {
      this.showTree = true
    }
  }
}
</script>

<style lang="less">

</style>
