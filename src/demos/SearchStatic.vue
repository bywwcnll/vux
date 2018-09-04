<template>
  <div>
    <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq685v5csyj208c06ygm0.jpg" style="width: 100%">
    <br>
    <search v-model="value1" @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <divider>set value</divider>
    <search :auto-fixed="false" :debounce="500"
     @on-focus="onFocus" @on-cancel="onCancel"
     @on-change="onChange" @on-submit="onSubmit"></search>
  </div>
</template>

<script>
import { Search, Divider } from 'k12vux'

export default {
  components: {
    Search,
    Divider
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
    },
    onFocus () {
      console.log('on focus')
    },
    onChange (v) {
      console.log('onChange: ', v)
    }
  },
  data () {
    return {
      results: [],
      autoFixed: false,
      value: '',
      value1: 'hello'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
</style>
