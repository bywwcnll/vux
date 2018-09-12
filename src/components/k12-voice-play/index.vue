<template>
  <div class="k12-voice-play-container">
    <div class="k12-voice-play-main">
      <div class="k12-voice-play-controlBtn" @click="onControl">
        <svg v-if="controlStatus === 'stop'" class="k12-voice-play-icon-play" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M882.734114 459.147258l0.024559-0.024559L244.016061 21.12718l-0.199545 0.188288C230.582097 8.748245 212.62819 1.014096 192.840518 1.014096c-40.704051 0-73.699536 32.66905-73.699536 72.996524 0 22.148439-0.954745 65.513086 0 64.572668l0 373.422851 0 393.071354c0 0.325411 0 25.249057 0 44.935422 0 40.302915 32.995485 72.972988 73.699536 72.972988 19.862373 0 37.892005-7.78429 51.125401-20.466124l0.050142 0.025583 638.742613-437.982216-0.024559-0.038886c13.886265-13.270235 22.549575-31.889291 22.549575-52.531424 0-0.050142 0-0.088004 0-0.150426 0-0.050142 0-0.11154 0-0.149403C905.28369 491.048829 896.620379 472.41647 882.734114 459.147258z"/>
        </svg>
        <svg v-if="controlStatus === 'play'" class="k12-voice-play-icon-stop" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M243.611344 62.597687l535.403013 0c98.565876 0 178.464601 80.265068 178.464601 179.283246l0 537.849738c0 99.008968-79.898725 179.283246-178.464601 179.283246L243.611344 959.013917c-98.556667 0-178.455391-80.274278-178.455391-179.283246l0-537.849738C65.155952 142.862755 145.054677 62.597687 243.611344 62.597687z"/>
        </svg>
      </div>
      <div class="k12-voice-play-info">
        <div class="k12-voice-play-info-name">{{filename}}</div>
        <div class="k12-voice-play-info-size">
          <span>{{filesizeDisplay}}</span>
          <span v-if="audioSeconds">{{currentTime | timeFilter}}/{{audioSeconds | timeFilter}}</span>
        </div>
      </div>
    </div>
    <div v-if="!hideDelete" class="k12-voice-play-delete" @click="onDelete">
      <img class="k12-voice-play-icon-delete" :src="deleteIcon" alt=""/>
    </div>
    <div class="k12-voice-play-audioC">
      <audio ref="audio" :src="audioSrc">您的浏览器不支持 audio 标签。</audio>
    </div>
  </div>
</template>

<script>
import deleteIcon from './delete.png'
export default {
  name: 'k12-voice-play',
  props: {
    id: [Object, String, Number],
    audioType: {
      type: String,
      default: 'url',
      validator: value => {
        return ['url', 'wx'].indexOf(value) !== -1
      }
    },
    audioSrc: {
      type: String,
      required: true
    },
    audioSeconds: Number,
    filename: {
      type: String,
      default: '未知'
    },
    filesize: {
      type: [String, Number]
    },
    hideDelete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      deleteIcon,
      controlStatus: 'stop',
      audioStatus: 'stoped',

      h5PlayVoiceSeconds: 0,

      wxPlayVoiceIntervalTimer: null,
      wxPlayVoiceSeconds: 0
    }
  },
  mounted () {
    if (this.isHttpAudio) {
      let audioDom = this.$refs.audio
      audioDom.onplay = () => {
        this.audioStatus = 'playing'
      }
      audioDom.ontimeupdate = () => {
        this.h5PlayVoiceSeconds = audioDom.currentTime
      }
      audioDom.onended = () => {
        this.audioStatus = 'stoped'
        this.h5PlayVoiceSeconds = 0
      }
    }
  },
  computed: {
    filesizeDisplay () {
      let filesize = this.filesize
      if (filesize) {
        if (typeof filesize === 'string') {
          return filesize
        } else if (typeof filesize === 'number') {
          if (filesize >= 1024 * 1024) {
            return Math.round(filesize / 1024 / 1024 * 10) / 10 + 'M'
          } else if (filesize >= 1024) {
            return Math.round(filesize / 1024 * 10) / 10 + 'K'
          } else {
            return filesize + 'B'
          }
        } else {
          return ''
        }
      }
      return ''
    },
    isHttpAudio () {
      return this.audioType === 'url' && this.audioSrc
    },
    isWXAudio () {
      return this.audioType === 'wx' && this.audioSrc
    },
    currentTime () {
      if (this.isHttpAudio) {
        return Math.floor(this.h5PlayVoiceSeconds)
      } else if (this.isWXAudio) {
        return this.wxPlayVoiceSeconds
      }
    }
  },
  watch: {
    audioStatus (v) {
      if (v === 'stoped') {
        this.controlStatus = 'stop'
      }
    }
  },
  filters: {
    timeFilter (v) {
      v = Number(v)
      let fillZero = (t) => String((t < 10 ? '0' + t : t))
      if (v) {
        let min = 0
        let sec = 0
        min = Math.floor(v / 60)
        if (min > 0) {
          sec = v % 60
        } else {
          sec = v
        }
        return min + ':' + fillZero(sec)
      }
      return '0:00'
    }
  },
  methods: {
    clearWXPlayVoiceIntervalTimer () {
      if (this.wxPlayVoiceIntervalTimer) {
        clearInterval(this.wxPlayVoiceIntervalTimer)
        this.wxPlayVoiceIntervalTimer = null
        this.wxPlayVoiceSeconds = 0
        this.audioStatus = 'stoped'
      }
    },
    commonPlay () {
      if (this.isHttpAudio) {
        this.h5PlayVoiceSeconds = 0
        this.$refs.audio.play()
      } else if (this.isWXAudio) {
        this.$wechat.playVoice({
          localId: this.audioSrc,
          success: res => {
            this.audioStatus = 'playing'
            this.wxPlayVoiceSeconds = 0
            this.wxPlayVoiceIntervalTimer = setInterval(() => {
              if (this.wxPlayVoiceSeconds >= this.audioSeconds) {
                this.clearWXPlayVoiceIntervalTimer()
              } else {
                this.wxPlayVoiceSeconds += 1
              }
            }, 1000)
          }
        })
      }
    },
    commonStop () {
      if (this.isHttpAudio) {
        this.h5PlayVoiceSeconds = 0
        this.$refs.audio.pause()
        this.$refs.audio.currentTime = 0
        this.audioStatus = 'stoped'
      } else if (this.isWXAudio) {
        this.$wechat.stopVoice({
          localId: this.audioSrc,
          success: res => {
            this.clearWXPlayVoiceIntervalTimer()
          }
        })
      }
    },
    async onControl () {
      if (this.controlStatus === 'stop') {
        if (!this.audioSrc) {
          alert('未设置音频源')
          return
        }
        this.controlStatus = 'play'
        this.commonPlay()
      } else {
        this.controlStatus = 'stop'
        this.commonStop()
      }
    },
    onDelete () {
      this.$emit('delete', this.id)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-voice-play-container {
  position: relative;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  + .k12-voice-play-container {
    margin-top: 15px;
  }
  .k12-voice-play-main {
    flex: 1;
    padding: 10px;
    height: 58px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid @k12-flow-border-color;
    border-radius: 4px;
    background-color: #fff;
    .k12-voice-play-controlBtn {
      width: 38px;
      height: 38px;
      background-color: #3292FF;
      border-radius: 100%;
      .k12-flex-center;
      .k12-voice-play-icon-play {
        margin-left: 3px;
        width: 15px;
        fill: #fff;
      }
      .k12-voice-play-icon-stop {
        width: 15px;
        fill: #fff;
      }
    }
    .k12-voice-play-info {
      flex: 1;
      height: 38px;
      margin-left: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .k12-voice-play-info-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #333;
        height: 22px;
      }
      .k12-voice-play-info-size {
        font-size: 12px;
        color: #999;
        height: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .k12-voice-play-delete {
    margin-left: 15px;
    .k12-flex-center;
    .k12-voice-play-icon-delete {
      display: block;
      width: 18px;
    }
  }
}
</style>
