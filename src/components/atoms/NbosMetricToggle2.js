import React from 'react';
// import { Switch } from 'antd';
import SwitchSelector from 'react-switch-selector';

export default function NbosMetricsToggle2({ changeHandler }) {
  const options = [
    {
      label: 'Outcome Metrics',
      value: 'outcome',
      selectedBackgroundColor: '#0166CC',
      // innerHeight: 50,
      selectedFontColor: '#ffffff',
    },
    {
      label: 'Behavior Metrics',
      value: 'behavior',
      selectedBackgroundColor: '#0166CC',
      selectedFontColor: '#ffffff',
    },
  ];

  const handleToggleSwitch = newValue => {
    console.log(newValue);
    changeHandler(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === 'outcome',
  );

  return (
    <div className="tw-min-w-[40%] tw-h-9">
      <SwitchSelector
        style={{}}
        onChange={handleToggleSwitch}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#ffffff'}
        fontColor={'#0166CC'}
        wrapperBorderRadius={5}
        optionBorderRadius={5}
        border="solid rgba(1,102,204,100)"
      />
      {/* <Switch
        checkedChildren="Outcome Metrics"
        unCheckedChildren="Behavior Metrics"
        onChange={handleToggleSwitch}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
      /> */}
    </div>
  );
}
