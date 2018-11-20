<template>
  <div class="k12-tree-container">
    <div v-transfer-dom>
      <popup v-model="showPopup" height="100%">
        <div class="k12-tree-popupC">
          <div ref="k12-tree-popup-deptPath" class="k12-tree-popup-deptPath">
            <div v-for="(el, index) in deptPathList" :key="index" class="k12-tree-popup-deptNameC"
              :class="{active: index === deptPathList.length - 1}"
              @click="onDeptPath(el, index)">
              <div class="k12-tree-popup-deptName">
                <span>{{el.deptName}}</span>
                <x-icon v-if="index !== deptPathList.length - 1" class="k12-tree-popup-icon" type="chevron-right" size="12"></x-icon>
              </div>
            </div>
          </div>
          <div class="k12-tree-popup-contentC">
            <template v-if="loaded">
              <div v-if="deptAndUserList && deptAndUserList.length > 0" class="k12-tree-popup-content">
                <k12-tree-cell v-for="(el, index) in deptAndUserList" :key="index"
                  :data="el" :selected="findSelectedIndex(el) > -1" :onlySelectUser="onlySelectUser"
                  @select="onSelect(el)" @navNext="onNavNext(el)"></k12-tree-cell>
              </div>
              <div v-if="!deptAndUserList || deptAndUserList.length === 0" class="k12-tree-popup-content-loading">
                <img class="k12-tree-popup-content-loading-text" :src="recordIcon" alt="" />
                <div class="k12-tree-popup-content-loading-text">~暂无数据~</div>
              </div>
            </template>
            <div v-if="!loaded" class="k12-tree-popup-content-loading">
              <spinner type="ios"></spinner>
              <div class="k12-tree-popup-content-loading-text">~正在加载中，请稍后~</div>
            </div>
          </div>
          <div class="k12-tree-popup-footer">
            <div @click="onView" class="k12-tree-popup-footer-selectedList">查看已选({{selectedList.length}})</div>
            <div @click="onConfirm" class="k12-tree-popup-footer-confirm">确定</div>
          </div>
          <div v-show="showViewPopup" class="k12-tree-popupC-mask" @click.prevent.stop="showViewPopup = false"></div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showViewPopup" :height="viewPopupHeight">
        <div class="k12-tree-popup-viewPopupC">
          <div class="k12-tree-popup-viewPopup-header">
            <div class="k12-tree-popup-viewPopup-header-left" @click="showViewPopup = false">取消</div>
            <div class="k12-tree-popup-viewPopup-header-title">已选择数据</div>
            <div class="k12-tree-popup-viewPopup-header-right" @click="onViewPopupComfirm">确定</div>
          </div>
          <div class="k12-tree-popup-viewPopup-contentC">
            <div v-if="viewPopupSelectedList.length > 0" class="k12-tree-popup-viewPopup-content">
              <k12-tree-cell v-for="(el, index) in viewPopupSelectedList" :key="index"
                             :data="el" :selected="el.viewPopupSelected" :onlySelectUser="onlySelectUser" :hideRightArrow="true"
                             @select="onViewPopupSelect(el, index)"></k12-tree-cell>
            </div>
            <div v-else class="k12-tree-popup-viewPopup-empty">~暂无数据~</div>
          </div>
        </div>
      </popup>
    </div>
    <toast v-model="showToastFlag" type="text" :time="800"
      is-show-mask position="middle">已包含选中项</toast>
  </div>
</template>

<script>
import recordIcon from './record.png'
import TransferDom from '../../directives/transfer-dom/index.js'
import popup from '../popup'
import spinner from '../spinner'
import k12TreeCell from './k12-tree-cell'
import toast from '../toast'

export default {
  name: 'k12-tree',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    show: Boolean,
    onlySelectUser: Boolean,
    defaultDeptId: {
      type: String,
      default: '-1'
    },
    load: {
      type: Function,
      required: true
    },
    viewPopupHeight: {
      type: String,
      default: '100%'
    },
    limit: Number
  },
  directives: {
    TransferDom
  },
  components: {
    popup,
    spinner,
    k12TreeCell,
    toast
  },
  created () {
    this.selectedList = this.value
    this.showPopup = this.show
    this.deptPathList.push({
      deptId: this.defaultDeptId,
      deptName: '全部'
    })
  },
  data () {
    return {
      recordIcon,
      showToastFlag: false,
      showPopup: false,
      showViewPopup: false,
      loaded: false,
      deptPathList: [],
      deptAndUserList: [],

      selectedList: [],
      viewPopupSelectedList: []
    }
  },
  mounted () {},
  computed: {
    selectedDeptIdAndUserIDList () {
      return this.selectedList.map(el => {
        if (this.isDepth(el)) {
          return el.deptId
        } else {
          return el.userId
        }
      })
    }
  },
  watch: {
    value (v) {
      this.selectedList = v
    },
    show (v) {
      this.showPopup = v
      if (v && this.deptAndUserList.length === 0) {
        this.commonLoad(this.deptPathList[this.deptPathList.length - 1])
      }
    },
    showPopup (v) {
      this.$emit('update:show', v)
    },
    deptPathList (v) {
      let dom = this.$refs['k12-tree-popup-deptPath']
      if (dom) {
        this.$nextTick(() => {
          let clientWidth = dom.clientWidth
          let scrollWidth = dom.scrollWidth
          if (scrollWidth > clientWidth) {
            dom.scrollLeft = scrollWidth - clientWidth
          }
        })
      }
    }
  },
  filters: {},
  methods: {
    isDepth (data) {
      return data.deptId && !data.userId
    },
    findSelectedIndex (data) {
      if (data) {
        if (this.isDepth(data)) {
          return this.selectedDeptIdAndUserIDList.indexOf(data.deptId)
        } else {
          return this.selectedDeptIdAndUserIDList.indexOf(data.userId)
        }
      }
      return -1
    },
    commonLoad (data) {
      this.loaded = false
      this.load(data).then(res => {
        this.deptAndUserList = res
        this.loaded = true
      }).catch(e => {
        this.loaded = true
      })
    },
    async onDeptPath (data, index) {
      this.deptPathList = [...this.deptPathList.slice(0, index + 1)]
      this.commonLoad(data)
    },
    onNavNext (data) {
      this.deptPathList = [...this.deptPathList, data]
      this.commonLoad(data)
    },
    onSelect (data) {
      let index = this.findSelectedIndex(data)
      if (index > -1) {
        let tmp = [...this.selectedList]
        tmp.splice(index, 1)
        this.selectedList = tmp
      } else {
        if (this.limit) {
          if (this.limit === 1) {
            this.selectedList = [data]
            return
          } else if (this.limit <= this.selectedList.length) {
            return
          }
        }
        let deptList = this.selectedList.filter(el => this.isDepth(el))
        let userList = this.selectedList.filter(el => !this.isDepth(el))
        if (this.isDepth(data)) {
          // if (data.deptPath && deptList.some(el => data.deptPath.indexOf(el.deptPath) === 0)) {
          //   this.showToastFlag = true
          // } else {
          deptList.push(data)
          // }
        } else {
          userList.push(data)
        }
        this.selectedList = [...deptList, ...userList]
      }
    },
    onView () {
      this.showViewPopup = true
      this.viewPopupSelectedList = this.selectedList.map(el => Object.assign(el, {viewPopupSelected: true}))
    },
    onViewPopupSelect (data, index) {
      let tmp = [...this.viewPopupSelectedList]
      let { viewPopupSelected } = tmp[index]
      tmp[index].viewPopupSelected = !viewPopupSelected
      this.viewPopupSelectedList = tmp
    },
    onViewPopupComfirm () {
      this.selectedList = this.viewPopupSelectedList.filter(el => el.viewPopupSelected).map(el => {
        delete el.viewPopupSelected
        return el
      })
      this.showViewPopup = false
    },
    onConfirm () {
      this.$emit('input', this.selectedList)
      this.$emit('confirm', this.selectedList)
      this.showPopup = false
    }
  }
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-tree-popupC {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  .k12-tree-popup-deptPath {
    z-index: 1;
    box-shadow: 1px 1px 5px #ddd;
    background-color: #fff;
    white-space: nowrap;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    .k12-tree-popup-deptNameC {
      display: inline-block;
      padding: 0 20px;
      height: 50px;
      font-size: 16px;
      &.active {
        .k12-tree-popup-deptName {
          color: @k12-flow-border-active-color;
          border-bottom: 2px solid @k12-flow-border-active-color;
        }
      }
      .k12-tree-popup-deptName {
        height: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        color: #333;
        border-bottom: 2px solid #fff;
        .k12-tree-popup-icon {
          position: absolute;
          right: -22px;
          top: 18px;
          fill: #999;
        }
      }
    }
  }
  .k12-tree-popup-contentC {
    flex: 1;
    overflow: auto;
    margin-top: 10px;
    font-size: 16px;
    .k12-tree-popup-content {
      border-width: 1px 0 1px 0;
      border-style: solid;
      border-color: @k12-flow-border-color;
      background-color: #fff;
    }
    .k12-tree-popup-content-loading {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .k12-tree-popup-content-loading-text {
        margin-top: 20px;
        color: #999;
      }
    }
  }
  .k12-tree-popup-footer {
    z-index: 1;
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 1px -1px 5px #ddd;
    font-size: 16px;
    .k12-tree-popup-footer-selectedList {
      flex: 1;
      margin-right: 20px;
      .k12-flex-center;
    }
    .k12-tree-popup-footer-confirm {
      width: 80px;
      height: 35px;
      background-color: @k12-flow-border-active-color;
      color: #fff;
      border-radius: 3px;
      padding: 5px 0;
      box-sizing: border-box;
      .k12-flex-center;
    }
  }
  .k12-tree-popupC-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.k12-tree-popup-viewPopupC {
  height: 100%;
  display: flex;
  flex-direction: column;
  .k12-tree-popup-viewPopup-header {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    background-color: #fbf9fe;
    .k12-tree-popup-viewPopup-header-left {
      padding-left: 15px;
      color: #828282;
    }
    .k12-tree-popup-viewPopup-header-title {
      flex: 1;
      text-align: center;
      color: #222;
    }
    .k12-tree-popup-viewPopup-header-right {
      padding-right: 15px;
      color: #3292FF;
    }
  }
  .k12-tree-popup-viewPopup-contentC {
    flex: 1;
    overflow: auto;
    .k12-tree-popup-viewPopup-content {
      border-width: 1px 0 1px 0;
      border-style: solid;
      border-color: @k12-flow-border-color;
      background-color: #fff;
    }
    .k12-tree-popup-viewPopup-empty {
      height: 200px;
      font-size: 16px;
      color: #999;
      .k12-flex-center;
    }
  }
}
</style>
