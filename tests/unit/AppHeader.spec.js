import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  const wrapper = mount(AppHeader)
  test('If user in not logged in, do not show logout button', () => {
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('If user in logged in, show logout button', async () => {
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
