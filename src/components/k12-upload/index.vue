<template>
  <div class="k12-upload-container weui-cell" :class="{'k12-upload-container-form': showType === 'form'}">
    <div class="vux-cell-bd">
      <label class="vux-label k12-upload-label" :style="labelStyles" :class="labelClass">
        <slot name="title">{{ title }}</slot>
      </label>
    </div>
    <template v-if="showType === 'cell'">
      <div class="k12-upload-rightC">
        <div class="k12-upload-desc">
          <slot name="desc"></slot>
        </div>
        <div ref="k12UploadImgC" class="k12-upload-imgC">
          <div v-for="(el, index) in renderData" :key="index" class="k12-upload-imgCellC"
            :style="{height: imgCellCHeight + 'px', marginBottom: (index < renderData.length - 1 ? rowGap + 'px' : '0')}">
            <imgFix v-for="(item, itemIndex) in el" :key="itemIndex" class="k12-upload-imgCell"
              :style="{width: imgCellCHeight + 'px', marginRight: (itemIndex < rowLength - 1 ? rowGap + 'px' : '0')}"
              :src="item.thumbnailUrl" @click.native="onPerview(index, itemIndex)"></imgFix>
          </div>
        </div>
      </div>
    </template>
    <template v-if="showType === 'form'">
      <div class="k12-upload-rightC k12-upload-rightC-form">
        <div ref="k12UploadImgCForm" class="k12-upload-imgC-form">
          <div v-for="(el, index) in renderFormData" :key="index" class="k12-upload-imgCellC-form"
            :style="{height: imgCellCFormHeight + 'px', marginBottom: (index < renderFormData.length - 1 ? rowGap + 'px' : '0')}">
            <template v-for="(item, itemIndex) in el">
              <div v-if="item !== 'addBtn'" :key="itemIndex" class="k12-upload-imgCell-form"
                :style="{width: imgCellCFormHeight + 'px', marginRight: (itemIndex < rowLength - 1 ? rowGap + 'px' : '0')}">
                <imgFix :src="(item.thumbnailUrl ? item.thumbnailUrl : item.srcData)" class="k12-upload-imgCell-form-imgC"
                  @click.native="onPerview(index, itemIndex)"></imgFix>
                <div @click.prevent="onDeleteAddedImg(item)" class="k12-upload-img-close">
                  <x-icon class="k12-upload-img-close-icon" type="android-close" size="20"></x-icon>
                </div>
              </div>
              <div v-if="item === 'addBtn'" :key="itemIndex" @click="onAddBtn" class="k12-upload-imgCell-form k12-upload-addBtn"
                :style="{width: imgCellCFormHeight + 'px', marginRight: (itemIndex < rowLength - 1 ? rowGap + 'px' : '0')}">
                <x-icon type="ios-plus-empty" size="68" style="fill: #ccc;"></x-icon>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
    <previewer ref="previewer" :list="previewerList"></previewer>
  </div>
</template>

<script>
import previewer from '../previewer'
import imgFix from './imgFix'
import cleanStyle from '../../libs/clean-style'
import getParentProp from '../../libs/get-parent-prop'

export default {
  name: 'k12-upload',
  components: {
    previewer, imgFix
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    showType: {
      type: String,
      default: 'cell',
      validator: function (value) {
        return ['cell', 'form'].indexOf(value) !== -1
      }
    },
    sdkType: {
      type: String,
      default: 'wx',
      validator: function (value) {
        return ['', 'wx'].indexOf(value) !== -1
      }
    },
    defaultFormData: {
      type: Array,
      default: () => []
    },
    rowLength: {
      type: Number,
      default: 3
    },
    rowGap: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 9
    }
  },
  data () {
    return {
      imgCellCHeight: 0,
      imgCellCFormHeight: 0,
      formData: []
    }
  },
  created () {
    this.formData = [...this.defaultFormData]
  },
  mounted () {
    this.rebuildHeight()
  },
  computed: {
    labelStyles () {
      return cleanStyle({
        width: getParentProp(this, 'labelWidth'),
        textAlign: getParentProp(this, 'labelAlign'),
        marginRight: getParentProp(this, 'labelMarginRight')
      })
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    },
    renderData () {
      if (!this.data || !(this.data instanceof Array) || this.data.length < 1) {
        return []
      }
      let result = []
      for (let i = 0; i < Math.floor(this.data.length / this.rowLength); i++) {
        result.push(this.data.slice(i * this.rowLength, (i + 1) * this.rowLength))
      }
      if (this.data.length % this.rowLength > 0) {
        result.push(this.data.slice(-(this.data.length % this.rowLength)))
      }
      return result
    },
    renderFormData () {
      if (!this.formData || !(this.formData instanceof Array) || this.formData.length < 1) {
        return [['addBtn']]
      }
      let result = []
      for (let i = 0; i < Math.floor(this.formData.length / this.rowLength); i++) {
        result.push(this.formData.slice(i * this.rowLength, (i + 1) * this.rowLength))
      }
      if (this.formData.length % this.rowLength > 0) {
        result.push(this.formData.slice(-(this.formData.length % this.rowLength)))
      }
      if (this.formData.length < this.count) {
        if (result[result.length - 1].length < this.rowLength) {
          result[result.length - 1].push('addBtn')
        } else {
          result.push(['addBtn'])
        }
      }
      return result
    },
    previewerList () {
      if (this.showType === 'cell') {
        if (!this.data || !(this.data instanceof Array) || this.data.length < 1) {
          return []
        }
        return this.data.map(el => {
          return {
            msrc: el.thumbnailUrl,
            src: el.previewUrl
          }
        })
      } else if (this.showType === 'form') {
        if (!this.formData || !(this.formData instanceof Array) || this.formData.length < 1) {
          return []
        }
        return this.formData.map(el => {
          return {
            msrc: el.thumbnailUrl ? el.thumbnailUrl : el.srcData,
            src: el.srcData
          }
        })
      }
      return []
    }
  },
  watch: {
    showType () {
      this.rebuildHeight()
    },
    formData (v) {
      this.$emit('input', v)
    },
    defaultFormData (v) {
      this.formData = [...v]
    }
  },
  methods: {
    rebuildHeight () {
      if (this.$refs.k12UploadImgC) {
        this.imgCellCHeight = (this.$refs.k12UploadImgC.clientWidth - (this.rowGap * (this.rowLength - 1))) / this.rowLength
      }
      if (this.$refs.k12UploadImgCForm) {
        this.imgCellCFormHeight = (this.$refs.k12UploadImgCForm.clientWidth - (this.rowGap * (this.rowLength - 1))) / this.rowLength
      }
    },
    onPerview (index, itemIndex) {
      this.$refs.previewer.show((index * this.rowLength) + itemIndex)
    },
    getLocalImgDataPromise (localId) {
      return new Promise((resolve, reject) => {
        this.$wechat.getLocalImgData({
          localId,
          success: res => {
            /* localData是图片的base64数据，可以用img标签显示 */
            resolve({
              localId,
              srcData: res.localData,
              isLocal: true
            })
          }
        })
      })
    },
    onAddBtn () {
      if (!this.sdkType) {
        throw new Error('未指定SDK类型')
      }
      if (this.sdkType === 'wx') {
        if (!this.$wechat && !this.$wechat.chooseImage) {
          throw new Error('this.$wechat未定义，请先引入微信jssdk')
        }
        this.$wechat.chooseImage({
          count: this.count - this.formData.length, /* 默认9 */
          sizeType: ['original', 'compressed'], /* 可以指定是原图还是压缩图，默认二者都有 */
          sourceType: ['album', 'camera'], /* 可以指定来源是相册还是相机，默认二者都有 */
          defaultCameraMode: 'batch', /* 表示进入拍照界面的默认模式，目前有normal与batch两种选择，normal表示普通单拍模式，batch表示连拍模式，不传该参数则为normal模式。（注：用户进入拍照界面仍然可自由切换两种模式） */
          success: async res => {
            /* 返回选定照片的本地ID列表，
            andriod中localId可以作为img标签的src属性显示图片；
            而在IOS中需通过getLocalImgData获取图片base64数据，从而用于img标签的显示 */
            let localIds = res.localIds
            let allLocalImgData = []
            if (window.navigator.userAgent.indexOf('iPhone') > -1) {
              /* Iphone手机 */
              let allLocalImgDataPromise = []
              for (let i = 0; i < localIds.length; i++) {
                allLocalImgDataPromise.push(this.getLocalImgDataPromise(localIds[i]))
              }
              allLocalImgData = await Promise.all(allLocalImgDataPromise)
            } else {
              allLocalImgData = localIds.map(localId => {
                return {
                  localId,
                  srcData: localId,
                  isLocal: true
                }
              })
            }
            this.formData = [...this.formData, ...allLocalImgData]
          }
        })
      }
    },
    onDeleteAddedImg (data) {
      let delIndex = this.formData.map(el => el.localId).indexOf(data.localId)
      if (delIndex > -1) {
        this.formData.splice(delIndex, 1)
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.vux-label {
  display: block;
  word-wrap: break-word;
  word-break: break-all;
}
.k12-upload-container {
  display: flex;
  align-items: flex-start !important;
  &.k12-upload-container-form {
    flex-direction: column;
  }
  .k12-upload-leftC {
    min-width: 80px;
  }
  .k12-upload-rightC {
    width: 100%;
    &.k12-upload-rightC-form {
      margin-top: 6px;
    }
    .k12-upload-imgC {
      margin-top: 6px;
      width: 100%;
      & .k12-upload-imgCellC {
        display: flex;
        align-items: stretch;
      }
    }
    .k12-upload-imgC-form {
      width: 100%;
      .k12-upload-imgCellC-form {
        display: flex;
        align-items: stretch;
        .k12-upload-imgCell-form {
          height: 100%;
          position: relative;
          > .k12-upload-imgCell-form-imgC {
            width: 100%;
            height: 100%;
          }
        }
        .k12-upload-addBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid @k12-flow-border-color;
        }
        .k12-upload-img-close {
          position: absolute;
          right: -10px;
          top: -10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          overflow: hidden;
          .k12-upload-img-close-icon {
            fill: #fff;
          }
        }
      }
    }
  }
}
</style>
