<template>
  <div style="margin: 20px 0;">
    <group label-width="4.5em">
      <k12-upload v-model="localIds" title="故障描述" showType="form"
        :defaultFormData="defaultFormData" :rowLength="4" :rowGap="10"></k12-upload>
      <k12-upload title="故障描述" showType="cell"
        :data="uploadPreviewData" :rowLength="3" :rowGap="10">
        <p slot="desc">测试信息</p>
      </k12-upload>
    </group>
  </div>
</template>

<script>
import { Group, K12Upload } from 'k12vux'

const imgurl1 = 'http://static.fuwo.com/upload/attachment/1602/19/a501971ad6da11e5a84b00163e00254c.jpg'
const imgurl2 = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532078542&di=698138658162761e2f1951c45670ab3f&src=http://pic36.photophoto.cn/20150713/0032018153945140_b.jpg'

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
          localId: 1,
          thumbnailUrl: imgurl1,
          srcData: imgurl1
        },
        {
          localId: 2,
          thumbnailUrl: imgurl2,
          srcData: imgurl2
        },
        {
          localId: 3,
          thumbnailUrl: imgurl1,
          srcData: imgurl1
        },
        {
          localId: 4,
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
