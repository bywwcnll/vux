<template>
  <div class="pageContainer">
    <div class="warning">此组件无法在示例中直接使用，请直接按照示例代码开发</div>
    <div>添加语音</div>
    <div class="localIds">saveLocalId: {{saveLocalId}}</div>
    <div @click="show = true" class="addBtn">+</div>
    <k12-upload-voice :show.sync="show" @save="handleSave"></k12-upload-voice>
  </div>
</template>

<script>
import { K12UploadVoice } from 'k12vux'
export default {
  components: {
    K12UploadVoice
  },
  async created () {},
  async mounted () {},
  data () {
    return {
      saveLocalId: null,
      show: false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  methods: {
    handleSave (data) {
      this.saveLocalId = JSON.stringify(data)
    }
  }
}
</script>

<style scoped lang="less">
  .pageContainer {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    .warning {
      padding: 5px;
      border-radius: 4px;
      font-size: 12px;
      color: #efa300;
      background-color: #fdedcf;
    }
    .addBtn {
      margin-top: 10px;
      width: 72px;
      height: 72px;
      line-height: 58px;
      display: flex;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 3px;
      background-color: #f1f1f1;
      font-size: 80px;
      font-weight: 200;
      color: #999;
    }
  }
</style>
