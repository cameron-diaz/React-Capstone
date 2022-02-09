import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { formattingChartValues } from '../../utilities';

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
          formatter: function () {
            if (
              this.key === 'Client Calls' ||
              this.key === 'Prospect Calls' ||
              this.key === 'Strategies Updated' ||
              this.key === 'New Clients' ||
              this.key === 'Avg Overall RM Satisfaction'
            ) {
              return this.y;
            }
            const hundredThousand = this.y * 1000;
            if (this.y < 100) {
              return this.y + '';
            } else if (hundredThousand > 10000 && hundredThousand < 1000000) {
              return `$` + this.y + `K`;
            } else if (this.y > 1000000) {
              return `$` + this.y + `MM`;
            }
          },
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
        chartType === 'outcome'
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
        color: '#C4C4C4',
        legendIndex: 2,
        data:
          chartType === 'outcome'
            ? [
                parseFloat(formattingChartValues(chartData.loanProdY2)),
                parseFloat(formattingChartValues(chartData.DepGrowthY2)),
                parseFloat(formattingChartValues(chartData.tmGrowthY2)),
                {
                  y: parseFloat(chartData.newClientsY2),
                  color: `${
                    chartData.newClientsY2 > 2 ? '#c4c4c4' : '##FF0000'
                  }`,
                },
              ]
            : [
                parseFloat(formattingChartValues(chartData.avgOverallRMSatY2)),
                parseFloat(chartData.clientCallsY2),
                {
                  y: parseFloat(chartData.prospectCallsY2),
                  color: `${
                    chartData.prospectCallsY2 > 5 ? '#c4c4c4' : '##FF0000'
                  }`,
                },
                parseFloat(chartData.strategiesUploadedY2),
              ],
      },
      {
        name: 'RM',
        color: '#0166cc',
        legendIndex: 1,
        data:
          chartType === 'outcome'
            ? [
                parseFloat(formattingChartValues(chartData.loanProdY1)),
                parseFloat(formattingChartValues(chartData.DepGrowthY1)),
                parseFloat(formattingChartValues(chartData.tmGrowthY1)),
                {
                  y: parseFloat(chartData.newClientsY1),
                  color: `${
                    chartData.newClientsY1 > 2 ? '#0166cc' : '##FF0000'
                  }`,
                },
              ]
            : [
                parseFloat(formattingChartValues(chartData.avgOverallRMSatY1)),
                parseFloat(chartData.clientCallsY1),
                {
                  y: parseFloat(chartData.prospectCallsY1),
                  color: `${
                    chartData.prospectCallsY1 > 5 ? '#0166CC' : '#FF0000'
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
