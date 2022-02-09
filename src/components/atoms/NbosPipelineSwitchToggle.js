import React from 'react';
import SwitchSelector from 'react-switch-selector';

const options = [
  {
    label: 'All',
    value: 'all',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Credit',
    value: 'credit',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Deposit',
    value: 'deposit',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Capital Markets',
    value: 'capital',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Treasury Management',
    value: 'treasury',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Other',
    value: 'other',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
];

const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

export const NbosPipelineSwitchToggle = () => {
  return (
    <div className="tw-text-center tw-rounded-lg tw-p-2 tw-h-[3rem] tw-w-[80%] tw-items-center tw-mt-10 tw-mb-12 tw-ml-[10%] tw-pt-2">
      <SwitchSelector
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#ffffff'}
        fontColor={'#0166CC'}
        wrapperBorderRadius={18}
        border="2px solid rgba(1,102,204,100)"
        optionBorderRadius={18}
      />
    </div>
  );
};

export default NbosPipelineSwitchToggle;
