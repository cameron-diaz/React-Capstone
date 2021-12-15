import React from 'react';
import SwitchSelector from 'react-switch-selector';

const options = [
  {
    label: 'All',
    value: 'all',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Credit',
    value: 'credit',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Deposit',
    value: 'deposit',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Capital Markets',
    value: 'capital',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Treasury Management',
    value: 'treasury',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Other',
    value: 'other',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
];

const onChange = newValue => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

export const NbosPipelineSwitchToggle = () => {
  return (
    <div className="tw-text-center tw-rounded-lg tw-p-2 tw-w-1/2 tw-h-[3rem]">
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#0166CC'}
        fontColor={'#f5f6fa'}
        wrapperBorderRadius={18}
        optionBorderRadius={4}
      />
    </div>
  );
};

export default NbosPipelineSwitchToggle;
