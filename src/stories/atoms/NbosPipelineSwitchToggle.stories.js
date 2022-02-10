import React from 'react';
import NbosPipelineSwitchToggle from '../../components/atoms/NbosPipelineSwitchToggle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NbosPipelineSwitchToggle',
  component: NbosPipelineSwitchToggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosPipelineSwitchToggle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  subTextLabel: 'Name',
  topLabel: 'Number',
};
