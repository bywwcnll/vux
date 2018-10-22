<template>
  <div class="container">
    <k12-file-preview v-for="(el, index) in fileList" :key="index" previewType="wx"
      :url="el.url" :filename="el.filename" :filesize="el.filesize"></k12-file-preview>

    <k12-file-preview url="http://www.baidu.com" filename="百度" previewType="url"></k12-file-preview>  
  </div>
</template>

<script>
import { K12FilePreview } from 'k12vux'

export default {
  components: {
    K12FilePreview
  },
  created () {},
  data () {
    return {
      fileList: [
        {
          url: 'http://demo.wysource.com.cn/test1/asserts/word.docx',
          filename: 'word.docx',
          filesize: 377437
        },
        {
          url: 'http://demo.wysource.com.cn/test1/asserts/excle.xlsx',
          filename: 'excle.xlsx',
          filesize: 26372
        },
        {
          url: 'http://demo.wysource.com.cn/test1/asserts/music.mp3',
          filename: 'music.mp3',
          filesize: 28915
        },
        {
          url: 'http://demo.wysource.com.cn/test1/asserts/movie.mp4',
          filename: 'movie.mp4',
          filesize: 1382521
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.container {
  margin-top: 15px;
}
</style>
