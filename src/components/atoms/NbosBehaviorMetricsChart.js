import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function NbosBehaviorMetricsChart({ behaviorMetrics }) {
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
        'AVG Overall RM Satisfaction',
        'Client Calls',
        'Prospect Calls',
        'Strategies Updated',
      ],
    },
    series: [
      {
        name: 'RM',
        data: [
          parseFloat(behaviorMetrics.avgOverallRMSatY1),
          parseFloat(behaviorMetrics.clientCallsY1),
          parseFloat(behaviorMetrics.prospectCallsY1),
          parseFloat(behaviorMetrics.strategiesUploadedY1),
        ],
      },
      {
        name: 'This Time Last Year',
        data: [
          parseFloat(behaviorMetrics.avgOverallRMSatY2),
          parseFloat(behaviorMetrics.clientCallsY2),
          parseFloat(behaviorMetrics.prospectCallsY2),
          parseFloat(behaviorMetrics.strategiesUploadedY2),
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
