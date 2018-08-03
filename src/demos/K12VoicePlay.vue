<template>
  <div class="container">
    <p class="typeList">Url类型:</p>
    <div>
      <k12-voice-play v-for="(el, index) in list" :key="index" :hideDelete="el.hideDelete"
        :id="index" :audioSrc="el.audioSrc" :filename="el.filename" :filesize="el.filesize"
        @delete="onDelete"></k12-voice-play>
    </div>

    <p class="typeList">wx类型:</p>
    <div>
      <k12-voice-play v-for="(el, index) in uploadList" :key="index" audioType="wx"
        :id="index" :audioSrc="el.localId" :audioSeconds="el.recordSeconds" :filename="el.recordFileName"
        @delete="onUploadDelete"></k12-voice-play>
    </div>

    <div class="addVoiceBtn" @click="onAddVoice">添加语音</div>
    <k12-upload-voice :show.sync="showUploadVoice" @save="onSaveVoice" :maxRecordSeconds="10"></k12-upload-voice>

  </div>
</template>

<script>
import { K12UploadVoice, K12VoicePlay } from 'k12vux'

export default {
  components: {
    K12UploadVoice, K12VoicePlay
  },
  created () {},
  data () {
    return {
      showUploadVoice: false,
      list: [
        {
          audioSrc: 'http://k12.wisedu.com/test1/test.mp3',
          filename: 'test.mp3',
          filesize: 34,
          hideDelete: false
        },
        {
          audioSrc: 'http://k12.wisedu.com/test1/test.mp3',
          filename: 'test.mp3',
          filesize: 3400,
          hideDelete: false
        },
        {
          audioSrc: 'http://k12.wisedu.com/test1/test.mp3',
          filename: 'test.mp3',
          filesize: 2345400,
          hideDelete: true
        }
      ],
      uploadList: []
    }
  },
  methods: {
    onAddVoice () {
      this.showUploadVoice = true
    },
    onSaveVoice (data) {
      this.uploadList = [...this.uploadList, data]
    },
    onDelete (id) {
      if (typeof id !== 'undefined' && id !== null) {
        let tmp = [...this.list]
        tmp.splice(id, 1)
        this.list = tmp
      }
    },
    onUploadDelete (id) {
      if (typeof id !== 'undefined' && id !== null) {
        let tmp = [...this.uploadList]
        tmp.splice(id, 1)
        this.uploadList = tmp
      }
    }
  }
}
</script>

<style lang="less">
.container {
  margin-top: 15px;
  .typeList {
    margin-top: 30px;
  }
  .addVoiceBtn {
    padding: 3px 8px;
    background-color: #3292FF;
    color: #fff;
    display: inline-block;
    margin: 20px 15px;
    font-size: 14px;
    border-radius: 3px;
  }
}
</style>
