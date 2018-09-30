<template>
  <div style="margin: 20px 0;">
    <group title="部门人员选择控件">
      <cell title="普通用法" is-link @click.native="handleShow(1)"></cell>
      <cell title="只选人" is-link @click.native="handleShow(2)"></cell>
      <cell title="增加数量限制1" is-link @click.native="handleShow(3)"></cell>
      <cell title="增加数量限制5" is-link @click.native="handleShow(4)"></cell>
    </group>
    <group title="结果信息">
      <div>{{ selectedList && selectedList.length > 0 ? JSON.stringify(selectedList) : ''}}</div>
    </group>

    <k12-tree v-model="selectedList1" :show.sync="showTree1"
      :load="load"></k12-tree>
    <k12-tree v-model="selectedList2" :show.sync="showTree2" onlySelectUser
      :load="load"></k12-tree>
    <k12-tree v-model="selectedList3" :show.sync="showTree3" :limit="1"
      :load="load"></k12-tree>
    <k12-tree v-model="selectedList4" :show.sync="showTree4" :limit="5"
      :load="load"></k12-tree>
  </div>
</template>

<script>
import { Cell, Group, K12Tree } from 'k12vux'

export default {
  components: {
    Cell, Group, K12Tree
  },
  created () {},
  data () {
    return {
      showTree1: false,
      showTree2: false,
      showTree3: false,
      showTree4: false,
      selectedList1: [],
      selectedList2: [],
      selectedList3: [],
      selectedList4: [],

      showType: null
    }
  },
  computed: {
    selectedList () {
      return this['selectedList' + this.showType]
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
          resolve(Math.random() > 0.2 ? list : [])
        }, 500)
      })
    },
    handleShow (type) {
      this.showType = type
      this['showTree' + type] = true
    }
  }
}
</script>

<style lang="less">

</style>
