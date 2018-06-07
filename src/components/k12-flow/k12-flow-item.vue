<template>
  <div class="k12-flow-step">
    <div class="k12-flow-datetime">
      <div v-if="data.time">{{data.time}}</div>
      <div v-if="data.date">{{data.date}}</div>
    </div>
    <div class="k12-flow-status">
      <div v-if="!data.status" class="k12-flow-top-line"></div>
      <x-icon v-if="!data.status" type="record" size="12" class="k12-flow-record"></x-icon>
      <x-icon v-if="data.status === 'error'" type="android-alert" size="32" class="k12-flow-icon k12-flow-warn"></x-icon>
      <x-icon v-else-if="data.status === 'finish'" type="ios-checkmark" size="32" class="k12-flow-icon k12-flow-success"></x-icon>
      <x-icon v-else-if="data.status === 'process'" type="ios-clock" size="32" class="k12-flow-icon k12-flow-waiting"></x-icon>
      <div class="k12-flow-line"></div>
    </div>
    <div class="k12-flow-infos">
      <div class="k12-flow-name" :class="{'k12-flow-current-stauts': data.status === 'process'}">{{data.name}}</div>
      <div class="k12-flow-desc">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k12-flow-item',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less">
@import '../../styles/k12.less';
.k12-flow-step {
  display: flex;
  .k12-flow-datetime {
    width: 85px;
    text-align: right;
    font-size: 12px;
    line-height: 16px;
    color: #9B9B9B;
  }
  .k12-flow-status {
    width: 26px;
    margin: 0 10px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .k12-flow-infos {
    flex: 1;
  }
}
.k12-flow-icon {
  margin: -2px;
}
.k12-flow-record {
  fill: @k12-flow-border-color;
}
.k12-flow-warn {
  fill: #F26666;
}
.k12-flow-success {
  fill: #49CB15;
}
.k12-flow-waiting {
  fill: #FFBC1A;
}
.k12-flow-top-line {
  height: 8px;
  width: 1px;
  background: @k12-flow-border-color;
  margin-bottom: -1px;
}
.k12-flow-line {
  flex: 1;
  width: 1px;
  background: @k12-flow-border-color;
  margin-top: -1px;
}
.k12-flow-name {
  font-size: 17px;
  color: #9B9B9B;
  line-height: 18px;
  font-weight: Medium;
  margin: 4px 0;
  &.k12-flow-current-stauts {
    color: #000;
  }
}
.k12-flow-desc {
  color: #9B9B9B;
  font-size: 14px;
  font-weight: Medium;
  line-height: 20px;
}
</style>
