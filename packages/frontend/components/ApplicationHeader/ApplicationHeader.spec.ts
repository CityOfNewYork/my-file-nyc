import { shallowMount } from '@vue/test-utils'
import ApplicationHeader from '@/components/ApplicationHeader/ApplicationHeader.vue'

describe('ApplicationHeader component', () => {
  it('exports a valid component', () => {
    const wrapper = shallowMount(ApplicationHeader)
    expect(wrapper.html()).toBeTruthy()
  })
})
