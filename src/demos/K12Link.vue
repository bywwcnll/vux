<template>
  <div class="container">
    <k12-link v-for="(el, index) in list" :key="index" :id="index" :data="el"></k12-link>
    <k12-link id="id" :data="list[0]" hideDelete></k12-link>
  </div>
</template>

<script>
import { K12Link } from 'k12vux'

export default {
  components: {
    K12Link
  },
  created () {},
  data () {
    return {
      list: [
        {
          resourceName: '日本批准人兽杂交胚胎实验 让动物长出人类器官',
          resourceContent: 'https://m.weibo.cn/5336533996/4399854958244756'
        },
        {
          resourceName: '日本批准人兽杂交胚胎实验 让动物长出人类器官',
          resourceContent: 'https://m.weibo.cn/5336533996/4399854958244756'
        }
      ]
    }
  },
  methods: {
    onDelete (id) {
      if (typeof id !== 'undefined' && id !== null) {
        let tmp = [...this.list]
        tmp.splice(id, 1)
        this.list = tmp
      }
    }
  }
}
</script>

<style lang="less">
.container {
  margin-top: 15px;
  line-height: initial;
}
</style>
