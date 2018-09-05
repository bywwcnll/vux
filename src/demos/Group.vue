<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <cell title="Cell" value="value" is-link></cell>
      <cell title="Cell" value="value" is-link value-align="left"></cell>
      <x-input title="上报人" v-model="value1"></x-input>
      <x-input placeholder="I'm placeholder">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人" v-model="value1"></x-input>
      <x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime required title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></selector>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value8"></selector>
      <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
      <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
      <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      <popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></popup-picker>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea required title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-textarea>
    </group>
    <br>
    <group>
      <group-title slot="title">I'm a title<span style="float:right;">right</span></group-title>
      <cell title="cell"></cell>
    </group>
    <br>
    <group title="justify" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <cell title="哈哈" value="value" is-link></cell>
      <cell title="哈哈哈哈哈" value="value" is-link value-align="left"></cell>
      <x-input title="上报人" v-model="value1"></x-input>
      <x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime title="时间" v-model="time1" value-text-align="left"></datetime>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>
      <x-switch title="选择"></x-switch>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <group label-width="4.5em" label-margin-right="2em">
      <k12-upload title="故障描述" showType="form"></k12-upload>
      <k12-upload title="故障描述" showType="cell" :data="uploadPreviewData"></k12-upload>
    </group>
    <br>
  </div>
</template>

<script>
  import { K12Upload, GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'k12vux'

  const imgurl1 = 'http://static.fuwo.com/upload/attachment/1602/19/a501971ad6da11e5a84b00163e00254c.jpg'
  const imgurl2 = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532078542&di=698138658162761e2f1951c45670ab3f&src=http://pic36.photophoto.cn/20150713/0032018153945140_b.jpg'

  export default {
    components: {
      K12Upload,
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch
    },
    data () {
      return {
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
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value1: '张三',
        value2: '工艺技术',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      }
    }
  }
</script>
