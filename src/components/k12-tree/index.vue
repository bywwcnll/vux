<template>
  <div class="k12-tree-container">
    <div v-transfer-dom>
      <popup v-model="showPopup" height="100%">
        <div class="k12-tree-popupC">
          <div class="k12-tree-popup-headerC" :class="{hasNoSearch: !showSearch}">
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
            <div @click="onHide" class="k12-tree-popup-header-close">关闭</div>
          </div>
          <div v-if="showSearch" class="k12-tree-popup-searchC">
            <search v-model="searchVal" auto-scroll-to-top position="absolute" :placeholder="searchPlaceholder"
                    @on-change="onSearchChange" :debounce="800"></search>
          </div>
          <div class="k12-tree-popup-contentC" :class="{hasNoSearch: !showSearch}">
            <template v-if="!isLoading">
              <div v-if="!deptAndUserListIsEmpty" class="k12-tree-popup-content">
                <k12-tree-cell v-for="(el, index) in renderDeptAndUserList" :key="index"
                               :data="el" :selected="findSelectedIndex(el) > -1" :onlySelectUser="onlySelectUser"
                               :showDeptNames="showDeptNamesFlag"
                               @select="onSelect(el)" @navNext="onNavNext(el)"></k12-tree-cell>
              </div>
              <template v-if="renderDeptAndUserList.length === 50 && searchVal.length > 0">
                <div class="k12-tree-popup-tip">查询结果最多显示50条</div>
              </template>
              <div v-if="deptAndUserListIsEmpty" class="k12-tree-popup-content-loading">
                <img class="k12-tree-popup-content-loading-text" :src="recordIcon" alt=""/>
                <div class="k12-tree-popup-content-loading-text">~暂无数据~</div>
              </div>
            </template>
            <div v-if="isLoading" class="k12-tree-popup-content-loading">
              <spinner type="ios"></spinner>
              <div class="k12-tree-popup-content-loading-text">~正在加载中，请稍后~</div>
            </div>
          </div>
          <div class="k12-tree-popup-footer">
            <div v-show="searchVal.length > 0 && limit === 0" @click="onSelectAll" class="k12-tree-popup-footer-confirm selectAll">
              <x-icon v-if="!selectedAllFlag" class="k12-tree-popup-cc-icon" type="ios-circle-outline" size="26"></x-icon>
              <x-icon v-if="selectedAllFlag" class="k12-tree-popup-cc-icon active" type="ios-checkmark" size="26"></x-icon>
              <span>全选</span>
            </div>
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
            <div class="k12-tree-popup-viewPopup-header-left" @click="onViewPopupClear">清空</div>
            <div class="k12-tree-popup-viewPopup-header-title">已选择数据</div>
            <div class="k12-tree-popup-viewPopup-header-right" @click="onViewPopupComfirm">确定</div>
          </div>
          <div class="k12-tree-popup-viewPopup-contentC">
            <div v-if="viewPopupSelectedList.length > 0" class="k12-tree-popup-viewPopup-content">
              <k12-tree-cell v-for="(el, index) in viewPopupSelectedList" :key="index"
                             :data="el" :selected="el.viewPopupSelected" :onlySelectUser="onlySelectUser"
                             showDeptNames hideRightArrow
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
import search from '../search'
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
    limit: Number,
    searchPlaceholder: {
      type: String,
      default: '按姓名和手机号搜索，查询多人用空格隔开'
    },
    showSearch: Boolean,
    clearSearchValAfterConfirm: Boolean,
    searchLoad: Function,
    parentMode: Boolean
  },
  directives: {
    TransferDom
  },
  components: {
    popup,
    search,
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
    // if (this.show) {
    //   this.showPopup = true
    //   if (this.deptAndUserList.length === 0) {
    //     this.commonLoad(this.deptPathList[this.deptPathList.length - 1])
    //   }
    // }
  },
  data () {
    return {
      recordIcon,
      showToastFlag: false,
      showPopup: false,
      showViewPopup: false,
      isLoading: true,
      showDeptNamesFlag: false,
      deptPathList: [],
      deptAndUserList: [],

      selectedList: [],
      viewPopupSelectedList: [],

      loadedCounts: 0,
      searchVal: '',
      isClearedSearchFlag: true
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
    },
    deptAndUserListIsEmpty () {
      return !this.deptAndUserList || this.deptAndUserList.length === 0
    },
    renderDeptAndUserList () {
      if (!this.parentMode) return this.deptAndUserList
      return (this.deptAndUserList || []).map(el => {
        if (!el.deptId && el.userId) el.userName += '的家长'
        return el
      })
    },
    selectedAllFlag () {
      return this.renderDeptAndUserList.filter(el => this.findSelectedIndex(el) === -1).length === 0
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
      this.loadedCounts++
      this.isLoading = true
      this.load(data).then(res => {
        if (res instanceof Array) {
          this.deptAndUserList = res
          this.showDeptNamesFlag = false
        } else if (res.hasOwnProperty('data')) {
          this.deptAndUserList = res.data
          this.showDeptNamesFlag = Boolean(res.showDeptNamesFlag)
        } else {
          this.deptAndUserList = res
          this.showDeptNamesFlag = false
        }
        this.isLoading = false
        if (this.loadedCounts < 2 && res.length === 1 && this.isDepth(res[0])) {
          this.deptPathList = [...this.deptPathList, res[0]]
          this.commonLoad(res[0])
        }
      }).catch(e => {
        this.isLoading = false
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
    onViewPopupClear () {
      this.viewPopupSelectedList = this.viewPopupSelectedList.map(el => {
        el.viewPopupSelected = false
        return el
      })
    },
    onViewPopupComfirm () {
      this.selectedList = this.viewPopupSelectedList.filter(el => el.viewPopupSelected).map(el => {
        delete el.viewPopupSelected
        return el
      })
      this.showViewPopup = false
    },
    onSelectAll () {
      if (!this.selectedAllFlag) {
        let deptList = this.selectedList.filter(el => this.isDepth(el))
        let userList = this.selectedList.filter(el => !this.isDepth(el))
        this.renderDeptAndUserList.filter(el => this.findSelectedIndex(el) === -1).forEach(el => {
          if (this.isDepth(el)) {
            deptList.push(el)
          } else {
            userList.push(el)
          }
        })
        this.selectedList = [...deptList, ...userList]
      } else {
        let willDelIndexList = []
        this.renderDeptAndUserList.forEach(el => {
          let index = this.findSelectedIndex(el)
          if (index > -1) {
            willDelIndexList.push(index)
          }
        })
        this.selectedList = this.selectedList.filter((el, index) => willDelIndexList.indexOf(index) === -1)
      }
    },
    onConfirm () {
      this.$emit('input', this.selectedList)
      this.$emit('confirm', this.selectedList)
      if (this.clearSearchValAfterConfirm) {
        this.searchVal = ''
      }
      this.showPopup = false
    },
    onHide () {
      if (this.clearSearchValAfterConfirm) {
        this.searchVal = ''
      }
      this.showPopup = false
    },
    async onSearchChange (v) {
      if (v) {
        this.isClearedSearchFlag = false
        this.isLoading = true
        let res = await this.searchLoad(v)
        this.deptAndUserList = res
        this.isLoading = false
        this.showDeptNamesFlag = true
      } else {
        if (!this.isClearedSearchFlag) {
          let deptPathLength = this.deptPathList.length
          if (deptPathLength > 0) {
            this.commonLoad(this.deptPathList[deptPathLength - 1])
          } else {
            this.deptAndUserList = []
          }
          this.isClearedSearchFlag = true
        }
      }
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
}
.k12-tree-popup-headerC {
  background-color: #fff;
  height: 50px;
  display: flex;
  &.hasNoSearch {
    z-index: 1;
    box-shadow: 1px 1px 5px #ddd;
  }
}
.k12-tree-popup-header-close {
  width: 54px;
  font-size: 16px;
  color: #3292FF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*
  &:after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 55px;
    width: 200px;
    background-image: linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  }
  */
}
.k12-tree-popup-searchC {
  position: relative;
  height: 44px;
  z-index: 1;
  box-shadow: 1px 1px 5px #ddd;
}
.k12-tree-popup-deptPath {
  flex: 1;
  width: 0;
  height: 100%;
  box-sizing: content-box;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
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
.k12-tree-popup-contentC {
  flex: 1;
  overflow: auto;
  font-size: 16px;
  &.hasNoSearch {
    margin-top: 10px;
  }
  .k12-tree-popup-content {
    border-width: 0 0 1px 0;
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
    &.selectAll {
      background-color: #fff;
      color: #000;
      > svg {
        margin-right: 5px;
      }
    }
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
.k12-tree-popup-tip {
  font-size: 14px;
  color: #999;
  line-height: 40px;
  text-align: center;
}
</style>
