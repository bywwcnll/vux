import Comp from './k12-upload.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('K12Upload', () => {
  it('basic', () => {
    const wrapper = mount(Comp)
    expect(wrapper.name()).to.equal('k12-upload')
  })
})
