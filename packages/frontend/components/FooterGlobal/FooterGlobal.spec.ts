import { shallowMount } from '@vue/test-utils'
import FooterGlobal from '@/components/FooterGlobal/FooterGlobal.vue'

describe('FooterGlobal component', () => {
    it('exports a valid component', () => {
        const wrapper = shallowMount(FooterGlobal)
        expect(wrapper.html()).toBeTruthy()
    })
})
