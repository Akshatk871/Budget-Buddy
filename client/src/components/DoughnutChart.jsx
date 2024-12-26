import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const currentMonth = new Date().getMonth();

  const groupedData = props.transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const month = date.getMonth(); // 0-11
    const amount = transaction.amount;
    const category = transaction.category; // e.g., 'Rent', 'Education', etc.

    if (month === currentMonth && transaction.type === 'expense') {
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += amount;
    }

    return acc;
  }, {});

  const categories = Object.keys(groupedData);
  const amounts = categories.map(category => groupedData[category]);
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data:amounts,
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(234, 179, 8, 0.7)',
          'rgba(124, 58, 237, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout:'70%',
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut className="bg-white p-2 rounded-2xl " data={data} options={options} />;
};

export default DoughnutChart;
