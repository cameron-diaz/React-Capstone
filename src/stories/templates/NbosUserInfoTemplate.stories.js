import React from 'react';
import NbosUserInfoTemplate from '../../components/templates/NbosUserInfoTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/NbosUserInfoTemplate',
  component: NbosUserInfoTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosUserInfoTemplate {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  subTextLabel: 'Name',
  topLabel: 'Number',
};
