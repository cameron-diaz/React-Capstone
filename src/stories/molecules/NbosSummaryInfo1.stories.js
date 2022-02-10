import React from 'react';
import { Provider } from 'react-redux';
import store from './../../store/index';

import NbosSummaryInfo1 from '../../components/molecules/NbosSummaryInfo1';

export default {
  title: 'Molecules/NbosSummaryInfo1',
  component: NbosSummaryInfo1,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = args => <NbosSummaryInfo1 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
