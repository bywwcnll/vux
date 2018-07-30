<template>
  <svg class="k12-commonLoopProgress" :height="option.size" :width="option.size" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="option.outerColor"
      :stroke-width="option.strokeWidth"
      fill="none"
      stroke-linecap="round"/>
    <circle
      :stroke-dasharray="completenessHandle"
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke-width="option.strokeWidth"
      :stroke="option.innerColor"
      fill="none"
      class="k12-commonLoopProgress-progressRound"
    />
  </svg>
</template>
<script>
export default {
  props: {
    completeness: {
      type: Number,
      required: true
    },
    progressOption: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  computed: {
    completenessHandle () {
      let circleLength = Math.floor(2 * Math.PI * this.option.radius)
      let completenessLength = this.completeness * circleLength
      return `${completenessLength},100000000`
    },
    option () {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 20,
        strokeWidth: 5,
        outerColor: '#1d5299',
        innerColor: '#3292FF'
      }
      Object.assign(baseOption, this.progressOption)
      // 中心位置自动生成
      baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeWidth
      baseOption.size = (baseOption.radius + baseOption.strokeWidth) * 2
      return baseOption
    }
  }
}
</script>
<style lang="less">
  .k12-commonLoopProgress {
    position: relative;
    display: block;
    .k12-commonLoopProgress-progressRound {
      transform-origin: center;
      transform: rotate(-90deg);
      transition: stroke-dasharray 0.3s ease-in;
    }
  }
</style>
