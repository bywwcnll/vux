<template>
  <div class="k12-file-preview-container">
    <div class="k12-file-preview-main" @click="onClick">
      <svg class="k12-file-preview-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M911.981714 272.018286c5.705143 5.705143 10.861714 12.580571 16.018286 20.553143H658.285714V22.857143a120.685714 120.685714 0 0 1 20.553143 16.018286zM640 365.714286H950.857143v603.428571a54.857143 54.857143 0 0 1-54.857143 54.857143h-768A54.857143 54.857143 0 0 1 73.142857 969.142857v-914.285714A54.857143 54.857143 0 0 1 128 0H585.142857v310.857143a54.857143 54.857143 0 0 0 54.857143 54.857143zM731.428571 786.285714v-36.571428c0-10.276571-8.009143-18.285714-18.285714-18.285715h-402.285714c-10.276571 0-18.285714 8.009143-18.285714 18.285715v36.571428c0 10.276571 8.009143 18.285714 18.285714 18.285715h402.285714c10.276571 0 18.285714-8.009143 18.285714-18.285715z m0-146.285714v-36.571429c0-10.276571-8.009143-18.285714-18.285714-18.285714h-402.285714c-10.276571 0-18.285714 8.009143-18.285714 18.285714v36.571429c0 10.276571 8.009143 18.285714 18.285714 18.285714h402.285714c10.276571 0 18.285714-8.009143 18.285714-18.285714z m0-146.285714v-36.571429c0-10.276571-8.009143-18.285714-18.285714-18.285714h-402.285714c-10.276571 0-18.285714 8.009143-18.285714 18.285714v36.571429c0 10.276571 8.009143 18.285714 18.285714 18.285714h402.285714c10.276571 0 18.285714-8.009143 18.285714-18.285714z"></path>
      </svg>
      <div class="k12-file-preview-info">
        <div class="k12-file-preview-info-name">{{filename}}</div>
        <div class="k12-file-preview-info-size">{{filesizeDisplay}}</div>
      </div>
      <div v-if="!hideRightArrow" class="k12-file-preview-right">
        <x-icon class="k12-file-preview-right-icon" type="chevron-right" size="14"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k12-file-preview',
  props: {
    url: String,
    previewType: {
      type: String,
      default: '',
      validator: value => {
        return ['', 'wx', 'url'].indexOf(value) !== -1
      }
    },
    filename: {
      type: String,
      default: '未知'
    },
    filesize: {
      type: [String, Number]
    },
    hideRightArrow: Boolean
  },
  data () {
    return {
    }
  },
  mounted () {
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
    }
  },
  watch: {},
  methods: {
    onClick () {
      if (!this.previewType) {
        return
      }
      if (!this.url) {
        alert('未设置url')
        return
      }
      if (this.previewType === 'wx') {
        if (this.filesize) {
          this.$wechat.previewFile({
            url: this.url,
            name: this.filename,
            size: this.filesize
          })
        } else {
          alert('未设置filesize')
        }
      } else if (this.previewType === 'url') {
        window.location.href = this.url
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-file-preview-container {
  position: relative;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  + .k12-file-preview-container {
    margin-top: 15px;
  }
  .k12-file-preview-main {
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
    .k12-file-preview-icon {
      width: 32px;
      height: 32px;
      overflow: hidden;
      fill: #3292FF;
    }
    .k12-file-preview-info {
      flex: 1;
      height: 38px;
      margin-left: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .k12-file-preview-info-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #333;
        height: 22px;
      }
      .k12-file-preview-info-size {
        font-size: 12px;
        color: #999;
        height: 19px;
      }
    }
  }
  .k12-file-preview-right {
    height: 100%;
    .k12-flex-center;
    .k12-file-preview-right-icon {
      fill: #999;
    }
  }
}
</style>
