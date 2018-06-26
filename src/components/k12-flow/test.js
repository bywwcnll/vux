import Comp from './k12-flow.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('K12Flow', () => {
  it('basic', () => {
    const wrapper = mount(Comp)
    expect(wrapper.name()).to.equal('k12-flow')
  })
})
