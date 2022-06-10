import { shallowMount } from '@vue/test-utils'
import Settings from '@/components/Settings/Settings.vue'

describe('Settings component', () => {
    it('exports a valid component', () => {
        const wrapper = shallowMount(Settings)
        expect(wrapper.html()).toBeTruthy()
    })
})