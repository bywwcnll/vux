<template>
  <div class="container">
    <k12-voice-play v-for="(el, index) in list" :key="index"
      :id="index" :audioSrc="el.audioSrc" :filename="el.filename" :filesize="el.filesize"
      @delete="onDelete"></k12-voice-play>
  </div>
</template>

<script>
import { K12VoicePlay } from 'k12vux'

export default {
  components: {
    K12VoicePlay
  },
  created () {},
  data () {
    return {
      list: [
        {
          audioSrc: 'http://www.w3school.com.cn/i/horse.ogg',
          filename: '1.ogg',
          filesize: 34
        },
        {
          audioSrc: 'http://www.w3school.com.cn/i/horse.ogg',
          filename: '2.ogg',
          filesize: 3400
        },
        {
          audioSrc: 'http://www.w3school.com.cn/i/horse.ogg',
          filename: '3.ogg',
          filesize: 2345400
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
}
</style>
