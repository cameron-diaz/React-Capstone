import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function NbosOutcomeMetricsChart({ outcomeMetrics }) {
  const chartTitle = '';
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: chartTitle,
    },
    xAxis: {
      categories: [
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ],
    },
    series: [
      {
        name: 'RM',
        data: [`${outcomeMetrics.loanProdY1}`, 156, 947, 408, 6],
      },
      {
        name: 'This Time Last Year',
        data: [`${outcomeMetrics.loanProdY2}`, 841, 3714, 727, 0],
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      outcomeMetrics={outcomeMetrics}
    />
  );
}
