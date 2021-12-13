import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function NbosOutcomeMetricsChart() {
  const chartTitle = 'Outcome Metrics Chart';
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: chartTitle,
    },
    xAxis: {
      categories: ['Loan Production', 'Deposit Growth'],
    },
    series: [
      {
        data: [3.1],
        name: 'Test Data',
      },
      {
        data: [5],
        name: 'Test Data',
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
