<template>
  <div v-transfer-dom>
    <popup v-model="showPopup">
      <div class="k12-voice-upload-popupC">
        <div v-if="status === 'startRecord'" class="k12-voice-upload-startRecordC">
          <div v-if="!isRecording" class="k12-voice-upload-ws-timeLimit">录音时间不能超过{{maxRecordSeconds}}秒</div>
          <div v-else class="k12-voice-upload-ws-timeCount">{{recordSeconds | parseTimeFormat}}</div>
          <div class="k12-voice-upload-buttonC" :class="{'k12-voice-upload-button-recording': isRecording}"
            @touchstart.stop.prevent="onRecordStart" @touchend.stop.prevent="onRecordEnd"
            @mousedown.stop.prevent="onRecordStart" @mouseup.stop.prevent="onRecordEnd">
            <div v-if="isRecording" class="k12-voice-upload-button-processC">
              <commonLoopProgress :completeness="recordSeconds / maxRecordSeconds" :progressOption="progressOption"></commonLoopProgress>
            </div>
            <div class="k12-voice-upload-inlineButton">
              <svg width="40px" height="40px" viewBox="0 0 25 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill="#fff" d="M12.1332218,29.9270851 C7.74688982,29.9270851 4.17801953,26.3579916 4.17801953,21.9716597 L4.17801953,8.0069735 C4.17801953,3.62064156 7.74688982,0.0515481172 12.1332218,0.0515481172 C16.5197768,0.0515481172 20.0887029,3.6204742 20.0887029,8.0069735 L20.0887029,21.9716597 C20.0887029,26.3579916 16.5197768,29.9270851 12.1332218,29.9270851 Z M12.1332218,2.79866109 C15.0047978,2.79866109 17.34159,5.13545328 17.34159,8.0069735 L17.34159,21.9716597 C17.34159,24.8432357 15.0047978,27.1799721 12.1332218,27.1799721 C9.26192469,27.1799721 6.9251325,24.8432357 6.9251325,21.9716597 L6.9251325,8.0069735 C6.9251325,5.13545328 9.26192469,2.79866109 12.1332218,2.79866109 Z M13.5070014,37.2527755 L16.1682566,37.2527755 C16.9266388,37.2527755 17.5418689,37.8679498 17.5418689,38.6263319 C17.5418689,39.3847141 16.9266388,39.9998884 16.1682566,39.9998884 L8.09841004,39.9998884 C7.34002789,39.9998884 6.72485356,39.3847141 6.72485356,38.6263319 C6.72485356,37.8679498 7.34002789,37.2527755 8.09841004,37.2527755 L10.7596653,37.2527755 L10.7596653,34.6574042 C4.71404192,33.9730264 0,28.8268739 0,22.6012273 L0,18.8239888 C0,18.0656067 0.615174338,17.4502092 1.37355649,17.4502092 C2.13193863,17.4502092 2.74711297,18.0656067 2.74711297,18.8239888 L2.74711297,22.6012273 C2.74711297,27.7772943 6.95737796,31.9873361 12.1332218,31.9873361 C17.3093445,31.9873361 21.5195537,27.7772943 21.5195537,22.6012273 L21.5195537,18.8239888 C21.5195537,18.0656067 22.1347838,17.4502092 22.8931102,17.4502092 C23.6514923,17.4502092 24.2666667,18.0656067 24.2666667,18.8239888 L24.2666667,22.6012273 C24.2666667,28.8268121 19.5527182,33.9729243 13.5070014,34.6573838 L13.5070014,37.2527755 Z"></path>
              </svg>
            </div>
          </div>
          <div class="k12-voice-upload-ws-tutorial">{{(isRecording ? '松开话筒停止录音' : '按住话筒开始录音')}}</div>
        </div>
        <div v-if="status === 'endRecord'" class="k12-voice-upload-endRecordC">
          <div class="k12-voice-upload-progressC">
            <div class="k12-voice-upload-progressTime">{{this.playSeconds | parseTimeFormat}}</div>
            <div class="k12-voice-upload-progress">
              <div class="k12-voice-upload-currentProgress" :style="{width: currentProgressCount + '%'}"></div>
            </div>
            <div class="k12-voice-upload-progressTime">{{this.recordSeconds | parseTimeFormat}}</div>
          </div>
          <div class="k12-voice-upload-controlBtnC">
            <div class="k12-voice-upload-cb-deputy" @click="onReRecord">重录</div>
            <div class="k12-voice-upload-cb-main" @click="onPlayOrPause">
              <svg v-if="controlStatus === 'stop'" class="k12-voice-upload-icon-play" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M882.734114 459.147258l0.024559-0.024559L244.016061 21.12718l-0.199545 0.188288C230.582097 8.748245 212.62819 1.014096 192.840518 1.014096c-40.704051 0-73.699536 32.66905-73.699536 72.996524 0 22.148439-0.954745 65.513086 0 64.572668l0 373.422851 0 393.071354c0 0.325411 0 25.249057 0 44.935422 0 40.302915 32.995485 72.972988 73.699536 72.972988 19.862373 0 37.892005-7.78429 51.125401-20.466124l0.050142 0.025583 638.742613-437.982216-0.024559-0.038886c13.886265-13.270235 22.549575-31.889291 22.549575-52.531424 0-0.050142 0-0.088004 0-0.150426 0-0.050142 0-0.11154 0-0.149403C905.28369 491.048829 896.620379 472.41647 882.734114 459.147258z"/>
              </svg>
              <!-- <svg v-if="controlStatus === 'play'" class="k12-voice-upload-icon-pause" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M442.181818 709.818182c0 37.236364-30.254545 69.818182-69.818182 69.818182s-69.818182-30.254545-69.818181-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818181-69.818182s69.818182 30.254545 69.818182 69.818182v395.636364z m279.272727 0c0 37.236364-30.254545 69.818182-69.818181 69.818182s-69.818182-30.254545-69.818182-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818182-69.818182s69.818182 30.254545 69.818181 69.818182v395.636364z"/>
              </svg> -->
              <svg v-if="controlStatus === 'play'" class="k12-voice-upload-icon-stop" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M243.611344 62.597687l535.403013 0c98.565876 0 178.464601 80.265068 178.464601 179.283246l0 537.849738c0 99.008968-79.898725 179.283246-178.464601 179.283246L243.611344 959.013917c-98.556667 0-178.455391-80.274278-178.455391-179.283246l0-537.849738C65.155952 142.862755 145.054677 62.597687 243.611344 62.597687z"/>
              </svg>
            </div>
            <div class="k12-voice-upload-cb-deputy" @click="onSave">保存</div>
          </div>
          <div class="k12-voice-upload-cb-tip">{{(controlStatus === 'stop' ? '点击试听' : '点击停止')}}</div>
        </div>
        <div class="k12-voice-upload-cancel" @click="onCancelRecord">取消</div>
      </div>
    </popup>
  </div>
</template>

<script>
import TransferDom from '../../directives/transfer-dom/index.js'
import popup from '../popup'
import commonLoopProgress from './commonLoopProgress'

export default {
  name: 'k12-upload-voice',
  props: {
    show: Boolean,
    sdkType: {
      type: String,
      default: 'wx',
      validator: value => {
        return ['', 'wx'].indexOf(value) !== -1
      }
    },
    maxRecordSeconds: {
      type: Number,
      default: 10,
      validator: value => {
        return value >= 3 && value <= 60
      }
    }
  },
  directives: {
    TransferDom
  },
  components: {
    popup,
    commonLoopProgress
  },
  created () {
    this.showPopup = this.show
  },
  data () {
    return {
      showPopup: false,
      status: 'startRecord',
      localId: null,

      progressOption: {
        radius: 37,
        strokeWidth: 6
      },
      isRecording: false,
      recordSeconds: 0,
      recordIntervalTimer: null,

      controlStatus: 'stop',
      playSeconds: 0,
      playIntervalTimer: null
    }
  },
  computed: {
    currentProgressCount () {
      if (this.recordSeconds === 0) return 0
      return this.playSeconds / this.recordSeconds * 100
    }
  },
  watch: {
    show (v) {
      this.showPopup = v
    },
    showPopup (v) {
      if (this.isRecording && this.recordIntervalTimer) {
        this.commonEndRecord()
      }
      this.initData()
      this.$emit('update:show', v)
    }
  },
  filters: {
    parseTimeFormat (v) {
      if (v) {
        let min = Math.floor(v / 60)
        let sec = v % 60
        return (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec)
      }
      return '00:00'
    }
  },
  methods: {
    clearRecordIntervalTimer () {
      if (this.recordIntervalTimer) {
        clearInterval(this.recordIntervalTimer)
        this.recordIntervalTimer = null
      }
    },
    clearPlayIntervalTimer () {
      if (this.playIntervalTimer) {
        clearInterval(this.playIntervalTimer)
        this.playIntervalTimer = null
      }
    },
    initData () {
      this.clearRecordIntervalTimer()
      this.clearPlayIntervalTimer()
      this.localId = null
      this.status = 'startRecord'
      this.isRecording = false
      this.recordSeconds = this.playSeconds = 0
    },
    commonStartRecord () {
      return new Promise((resolve, reject) => {
        if (this.sdkType === 'wx') {
          this.$wechat.startRecord({
            success: res => {
              resolve(res)
            },
            fail: res => {
              reject(res)
            }
          })
        }
      })
    },
    commonEndRecord () {
      return new Promise((resolve, reject) => {
        if (this.sdkType === 'wx') {
          this.$wechat.stopRecord({
            success: res => {
              resolve(res.localId)
            },
            fail: res => {
              reject(res)
            }
          })
        }
      })
    },
    commonPlayVoice (data) {
      return new Promise((resolve, reject) => {
        if (this.sdkType === 'wx') {
          this.$wechat.playVoice({
            localId: data,
            success: res => {
              resolve(res)
            },
            fail: res => {
              reject(res)
            }
          })
        }
      })
    },
    commonPauseVoice (data) {
      return new Promise((resolve, reject) => {
        if (this.sdkType === 'wx') {
          this.$wechat.pauseVoice({
            localId: data,
            success: res => {
              resolve(res)
            },
            fail: res => {
              reject(res)
            }
          })
        }
      })
    },
    commonStopVoice (data) {
      return new Promise((resolve, reject) => {
        if (this.sdkType === 'wx') {
          this.$wechat.stopVoice({
            localId: data,
            success: res => {
              resolve(res)
            },
            fail: res => {
              reject(res)
            }
          })
        }
      })
    },
    onRecordStart () {
      this.localId = null
      this.isRecording = true
      this.clearRecordIntervalTimer()
      this.recordSeconds = 0
      this.commonStartRecord()
        .then(res => {
          if (this.isRecording) {
            this.recordIntervalTimer = setInterval(() => {
              if (this.recordSeconds < this.maxRecordSeconds) {
                this.recordSeconds += 1
                if (this.recordSeconds >= this.maxRecordSeconds) {
                  this.clearRecordIntervalTimer()
                  setTimeout(() => {
                    this.onRecordEnd()
                  }, 500)
                }
              }
            }, 1000)
          }
        })
        .catch(e => { alert(e.errMsg) })
    },
    async onRecordEnd () {
      this.isRecording = false
      if (this.recordIntervalTimer) {
        /* 已经录音 */
        this.clearRecordIntervalTimer()
        this.commonEndRecord()
          .then(localId => {
            this.status = 'endRecord'
            this.localId = localId
          })
          .catch(e => alert((e.errMsg.indexOf('tooshort') > -1 ? '录音时间太短' : e.errMsg)))
      } else {
        /* 未启动录音 */
        alert('录音时间太短')
      }
    },
    onCancelRecord () {
      this.showPopup = false
    },
    onReRecord () {
      this.initData()
    },
    onPlayOrPause () {
      if (this.controlStatus === 'stop') {
        /* 播放 */
        this.controlStatus = 'play'
        this.clearPlayIntervalTimer()
        this.playSeconds = 0
        this.commonPlayVoice(this.localId)
          .then(res => {
            this.playIntervalTimer = setInterval(() => {
              if (this.playSeconds < this.recordSeconds) {
                this.playSeconds += 1
                if (this.playSeconds >= this.recordSeconds) {
                  this.controlStatus = 'stop'
                  this.clearPlayIntervalTimer()
                  this.commonStopVoice()
                }
              }
            }, 1000)
          })
          .catch(e => { alert(e.errMsg) })
      } else {
        /* 停止 */
        this.playSeconds = 0
        this.controlStatus = 'stop'
        this.clearPlayIntervalTimer()
        this.commonStopVoice(this.localId)
          .then(res => {})
          .catch(e => { alert(e.errMsg) })
      }
    },
    onSave () {
      this.showPopup = false
      let zerofill = (num) => {
        if (num < 10) return '0' + num
        return num
      }
      let dateStr = []
      let date = new Date()
      dateStr[0] = date.getFullYear()
      dateStr[1] = zerofill(date.getMonth() + 1)
      dateStr[2] = zerofill(date.getDate())
      dateStr[3] = zerofill(date.getHours())
      dateStr[4] = zerofill(date.getMinutes())
      dateStr[5] = zerofill(date.getSeconds())
      this.$emit('save', {
        localId: this.localId,
        recordFileName: dateStr.join('') + '.amr',
        recordSeconds: this.recordSeconds
      })
    }
  }
}
</script>

<style lang="less">
  .k12-voice-upload-popupC {
    height: 230px;
    background-color: #dfdfe6;
    .k12-voice-upload-startRecordC {
      box-sizing: border-box;
      padding: 10px 0;
      height: 175px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .k12-voice-upload-ws-timeLimit {
        font-size: 12px;
        color: #999;
        height: 20px;
        line-height: 20px;
      }
      .k12-voice-upload-ws-timeCount {
        font-size: 12px;
        color: #333;
        height: 20px;
        line-height: 20px;
      }
      .k12-voice-upload-buttonC {
        position: relative;
        width: 80px;
        height: 80px;
        background-color: #3292FF;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &.k12-voice-upload-button-recording {
          background-color: #1d5299;
          .k12-voice-upload-inlineButton {
            background-color: #2369c5;
          }
        }
        .k12-voice-upload-button-processC {
          position: absolute;
          top: -3px;
          left: -3px;
        }
        .k12-voice-upload-inlineButton {
          width: 74px;
          height: 74px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .k12-voice-upload-ws-tutorial {
        font-size: 14px;
        color: #333;
        height: 20px;
        line-height: 20px;
      }
    }
    .k12-voice-upload-endRecordC {
      box-sizing: border-box;
      padding: 10px 0;
      height: 175px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .k12-voice-upload-progressC {
        position: relative;
        margin: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .k12-voice-upload-progressTime {
          font-size: 12px;
          color: #333;
        }
        .k12-voice-upload-progress {
          position: relative;
          height: 3px;
          width: calc(~"100% - 100px");
          background-color: #EBEEF5;
          border-radius: 100px;
          overflow: hidden;
          .k12-voice-upload-currentProgress {
            height: 100%;
            background-color: #EBEEF5;
            border-radius: 100px;
            background-color: #3292FF;
          }
        }
      }
      .k12-voice-upload-controlBtnC {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > div {
          width: 56px;
          height: 56px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #333;
        }
        .k12-voice-upload-cb-deputy {
          border: 1px solid #C9C9C9;
        }
        .k12-voice-upload-cb-main {
          background-color: #3292FF;
          .k12-voice-upload-icon-play {
            fill: #fff;
            width: 20px;
            margin-left: 5px;
          }
          .k12-voice-upload-icon-pause {
            fill: #fff;
            width: 40px;
          }
          .k12-voice-upload-icon-stop {
            fill: #fff;
            width: 20px;
          }
        }
      }
      .k12-voice-upload-cb-tip {
        text-align: center;
        font-size: 14px;
        color: #666;
      }
    }
    .k12-voice-upload-cancel {
      margin-top: 5px;
      height: 50px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3292FF;
      font-size: 18px;
    }
  }
</style>
