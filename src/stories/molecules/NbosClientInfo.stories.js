import React from 'react';

import { NbosClientInfo } from '../../components/molecules/NbosClientInfo';

export default {
  title: 'Molecules/NbosClientInfo',
  component: NbosClientInfo,
};

const Template = args => <NbosClientInfo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
