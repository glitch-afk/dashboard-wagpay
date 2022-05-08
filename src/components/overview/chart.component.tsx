import React from 'react';

import LineChart from '@/charts/LineChart';
// eslint-disable-next-line import/order
import { hexToRGB, tailwindConfig } from '@/utils/Utils';

function ChartCard() {
  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Current',
        data: [
          5000, 8700, 7500, 12000, 11000, 9500, 10500, 10000, 15000, 9000,
          10000, 7000, 22000, 7200, 9800, 9000, 10000, 8000, 15000, 12000,
          11000, 13000, 11000, 15000, 17000, 18000,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          // @ts-ignore
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        // @ts-ignore
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        // @ts-ignore
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
    ],
  };

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-gray-200 bg-white font-inter shadow-lg xl:col-span-8">
      <header className="flex items-center border-b border-gray-100 px-5 py-4">
        <h2 className="font-semibold text-gray-900">Analytics</h2>
      </header>

      <div className="grow font-inter">
        <LineChart data={chartData} width={800} height={350} />
      </div>
    </div>
  );
}

export default ChartCard;
