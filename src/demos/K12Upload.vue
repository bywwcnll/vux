<template>
  <div style="margin: 20px 0;">
    <group label-width="4.5em">
      <k12-upload v-model="localIds" title="故障描述" showType="form" :defaultFormData="defaultFormData"></k12-upload>
      <k12-upload title="故障描述" showType="cell" :data="uploadPreviewData">
        <p slot="desc">测试信息</p>
      </k12-upload>
    </group>
  </div>
</template>

<script>
import { Group, K12Upload } from 'k12vux'

const imgurl1 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530011862663&di=b61bde672c28a5bce0a8a7d033b60651&imgtype=0&src=http%3A%2F%2Fam.zdmimg.com%2F201511%2F12%2F5644a9d9cc6a8.jpg_a200.jpg'
const imgurl2 = 'https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/05/ChMkJlsZ4CCIChwoAAXw0q4yG1gAAo30wNa8a0ABfDq759.jpg'

export default {
  components: {
    Group, K12Upload
  },
  created () {},
  data () {
    return {
      localIds: [],
      uploadPreviewData: [
        {
          thumbnailUrl: imgurl1,
          previewUrl: imgurl1
        },
        {
          thumbnailUrl: imgurl2,
          previewUrl: imgurl2
        },
        {
          thumbnailUrl: imgurl2,
          previewUrl: imgurl2
        },
        {
          thumbnailUrl: imgurl1,
          previewUrl: imgurl1
        },
        {
          thumbnailUrl: imgurl1,
          previewUrl: imgurl1
        }
      ],
      defaultFormData: [
        {
          thumbnailUrl: imgurl1,
          srcData: imgurl1
        },
        {
          thumbnailUrl: imgurl2,
          srcData: imgurl2
        },
        {
          thumbnailUrl: imgurl1,
          srcData: imgurl1
        },
        {
          thumbnailUrl: imgurl2,
          srcData: imgurl2
        }
      ]
    }
  }
}
</script>

<style lang="less">

</style>
