<template>
  <div class="k12-link-container" @click="onContainer">
    <div>
      <img :src="linkIcon" alt="">
      <p>{{data.resourceName}}</p>
      <div v-if="!hideDelete" @click.stop="onDelete">
        <img :src="deleteIcon" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import linkIcon from './link.png'
import deleteIcon from '../k12-voice-play/delete.png'
export default {
  props: {
    id: [Object, String, Number],
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    hideDelete: Boolean
  },
  created () {},
  mounted () {},
  data () {
    return {
      linkIcon,
      deleteIcon
    }
  },
  computed: {},
  watch: {},
  filters: {},
  methods: {
    onContainer () {
      if (/^https?:\/\//.test(this.data.resourceContent)) {
        window.open(this.data.resourceContent)
      } else {
        this.$wisToast(`无效的链接地址：${this.data.resourceContent.substr(0, 20)}`, 'info')
      }
    },
    onDelete () {
      this.$emit('delete', this.id)
    }
  }
}
</script>

<style scoped lang="less">
  .k12-link-container {
    padding: 0 15px;
    + .k12-link-container {
      margin-top: 10px;
    }
    > div {
      display: flex;
      padding: 10px;
      height: 58px;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      background-color: #fff;
      box-sizing: border-box;
      > img {
        display: block;
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
      > p {
        flex: 1;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
      }
      > div {
        padding: 0 5px 0 15px;
        display: flex;
        align-items: center;
        > img {
          display: block;
          width: 20px;
        }
      }
    }
  }
</style>
