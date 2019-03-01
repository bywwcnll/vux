<template>
  <div class="k12-tree-popup-content-cell">
    <div class="k12-tree-popup-cc-iconC" @click="onSelect(data)">
      <template v-if="(!isDepth || !onlySelectUser) && !data.groupMode">
        <x-icon v-if="!selected" class="k12-tree-popup-cc-icon" type="ios-circle-outline" size="26"></x-icon>
        <x-icon v-if="selected" class="k12-tree-popup-cc-icon active" type="ios-checkmark" size="26"></x-icon>
      </template>
    </div>
    <div class="k12-tree-popup-cc-textC" @click="onNavNext(data)">
      <template v-if="!data.groupMode">
        <div v-if="isDepth" class="k12-tree-popup-cct-icon">
          <x-icon class="k12-tree-popup-cct-icon-folder" type="ios-folder" size="20"></x-icon>
        </div>
        <img v-else :src="data.avatar" class="k12-tree-popup-cct-icon" alt="">
      </template>
      <div class="k12-tree-popup-cc-text">
        <div class="k12-tree-main-div">
          <p>
            <span v-if="!isDepth && showDeptNames">{{data.userName}}</span>
            <span v-else>{{data.deptName || data.userName}}</span>
          </p>
          <p v-if="data.corpName && showDeptNames"><span class="k12-tree-popup-cct-corpName">@{{data.corpName}}</span></p>
        </div>
        <div v-if="!isDepth && showDeptNames && data.deptNames" class="k12-tree-other-div">
          <p><span class="k12-tree-deptNames k12-tree-multiOmit">{{data.deptNames}}</span></p>
        </div>
        <div v-if="isDepth && showDeptNames && data.parentDeptName" class="k12-tree-other-div">
          <p><span class="k12-tree-deptNames k12-tree-multiOmit">{{data.parentDeptName}}</span></p>
        </div>
        <div v-if="isDepth && !hideRightArrow" class="k12-tree-popup-cct-rightC">
          <x-icon class="k12-tree-popup-cct-right" type="chevron-right" size="12"></x-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k12-tree-cell',
  props: {
    selected: Boolean,
    data: {
      type: Object,
      default: () => { return {} }
    },
    hideRightArrow: Boolean,
    onlySelectUser: Boolean,
    showDeptNames: Boolean
  },
  components: {},
  created () {},
  mounted () {},
  data () {
    return {}
  },
  computed: {
    isDepth () {
      return this.data.deptId && !this.data.userId
    }
  },
  watch: {},
  filters: {},
  methods: {
    onSelect (data) {
      this.$emit('select', data)
    },
    onNavNext (data) {
      if (this.isDepth) {
        this.$emit('navNext', data)
      } else {
        this.$emit('select', data)
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-tree-popup-content-cell {
  display: flex;
  align-items: center;
  height: 50px;
  outline: none;
  .k12-no-user-select;
  &:active {
    background-color: @k12-flow-background-hover-color;
  }
  &:not(:last-child) {
    .k12-tree-popup-cc-textC {
      border-bottom: 1px solid @k12-flow-border-color;
    }
  }
}
.k12-tree-popup-cc-iconC {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.k12-tree-popup-cc-icon {
  fill: #999;
  &.active {
    fill: @k12-flow-border-active-color;
  }
}
.k12-tree-popup-cc-textC {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.k12-tree-popup-cct-icon {
  width: 38px;
  height: 38px;
  border-radius: 4px;
  background-color: #e9eef5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.k12-tree-popup-cct-icon-folder {
  fill: #6fa0e2;
}
.k12-tree-popup-cc-text {
  padding: 6px 0;
  flex: 1;
  width: 0;
  height: 100%;
  display: flex;
  align-items: stretch;
  > div {
    &.k12-tree-main-div {
      flex: 4;
    }
    &.k12-tree-other-div {
      flex: 3;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      width: 100%;
      display: flex;
      align-items: center;
      &:first-child {
        flex: 1;
      }
      > span {
        flex: 1;
        width: 0;
        &:not(.k12-tree-multiOmit) {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
.k12-tree-deptNames {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.k12-tree-popup-cct-corpName {
  flex: 1;
  width: 0;
  font-size: 12px;
  color: #FF6633;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.k12-tree-popup-cct-rightC {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.k12-tree-popup-cct-right {
  fill: #999;
}
</style>
