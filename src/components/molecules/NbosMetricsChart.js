import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const NbosMetricsChart = ({ chartData, chartType }) => {
  const chartTitle = '';
  const highChartOptions = {
    chart: {
      type: 'bar',
      marginLeft: 300,
      marginRight: 300,
    },
    title: {
      text: chartTitle,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        borderRadius: 5,
        pointWidth: 8,
        pointPadding: 0,
        groupPadding: 0.7,
      },
    },
    legend: {
      align: 'left',
    },
    xAxis: {
      lineWidth: 0,
      reverse: true,
      categories:
        chartType === 'behavior'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
    },
    yAxis: {
      visible: false,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },
    series: [],
  };

  useEffect(() => {
    const xAxis = {
      categories:
        chartType === 'outcome'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
    };
    const series = [
      {
        name: 'This Time Last Year',
        color: '#808080',
        legendIndex: 2,
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY2),
                parseFloat(chartData.DepGrowthY2),
                parseFloat(chartData.TmGrowthY2),
                parseFloat(chartData.newClientsY2),
              ]
            : [
                parseFloat(chartData.avgOverallRMSatY2),
                parseFloat(chartData.clientCallsY2),
                // parseFloat(chartData.prospectCallsY2),
                {
                  y: parseFloat(chartData.prospectCallsY2),
                  color: `${
                    chartData.prospectCallsY2 > 5 ? '#808080' : '#FF0000'
                  }`,
                },
                parseFloat(chartData.strategiesUploadedY2),
              ],
      },
      {
        name: 'RM',
        color: '#0000FF',
        legendIndex: 1,
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY1),
                parseFloat(chartData.DepGrowthY1),
                parseFloat(chartData.TmGrowthY1),
                parseFloat(chartData.newClientsY1),
              ]
            : [
                parseFloat(chartData.avgOverallRMSatY1),
                parseFloat(chartData.clientCallsY1),
                {
                  y: parseFloat(chartData.prospectCallsY1),
                  color: `${
                    chartData.prospectCallsY1 > 5 ? '#0000FF' : '#FF0000'
                  }`,
                },
                parseFloat(chartData.strategiesUploadedY1),
              ],
      },
    ];
    const newMetricChartData = {
      ...highChartOptions,
      xAxis: xAxis,
      series: series,
    };
    setMetricChartData(newMetricChartData);
  }, [chartData]);

  const [metricChartData, setMetricChartData] = useState(highChartOptions);

  return <HighchartsReact highcharts={Highcharts} options={metricChartData} />;
};
