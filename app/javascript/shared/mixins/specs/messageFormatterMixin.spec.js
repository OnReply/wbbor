import { shallowMount } from '@vue/test-utils';
import messageFormatterMixin from '../messageFormatterMixin';

describe('messageFormatterMixin', () => {
  it('returns correct plain text', () => {
    const Component = {
      render() {},
      mixins: [messageFormatterMixin],
    };
    const wrapper = shallowMount(Component);
    const message =
      '<b>OnReply is an opensource tool. https://www.onreply.io</b>';
    expect(wrapper.vm.getPlainText(message)).toMatch(
      'OnReply is an opensource tool. https://www.onreply.io'
    );
  });
});
