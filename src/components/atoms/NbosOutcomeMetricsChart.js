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
        data: [
          parseFloat(outcomeMetrics.loanProdY1),
          parseFloat(outcomeMetrics.DepGrowthY1),
          parseFloat(outcomeMetrics.TmGrowthY1),
          parseFloat(outcomeMetrics.newClientsY1),
        ],
      },
      {
        name: 'This Time Last Year',
        data: [
          parseFloat(outcomeMetrics.loanProdY2),
          parseFloat(outcomeMetrics.DepGrowthY2),
          parseFloat(outcomeMetrics.TmGrowthY2),
          parseFloat(outcomeMetrics.newClientsY2),
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
