<template>
  <div class="container">
    <k12-voice-play audioSrc="http://www.w3school.com.cn/i/horse.ogg"></k12-voice-play>
    <k12-voice-play></k12-voice-play>
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
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.container {
  margin-top: 15px;
  /*padding: 15px 0 15px 15px;*/
  /*box-sizing: border-box;*/
}
</style>
