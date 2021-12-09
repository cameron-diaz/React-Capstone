import React from 'react';

import { NbosSummaryInfo2 } from '../../components/molecules/NbosSummaryInfo2';

export default {
  title: 'Molecules/NbosSummaryInfo2',
  component: NbosSummaryInfo2,
};

const Template = args => <NbosSummaryInfo2 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
