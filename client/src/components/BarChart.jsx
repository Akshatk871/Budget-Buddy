import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [8000, 7500, 8300, 7800, 8500, 8700, 8900, 7600, 9100, 9700, 9100, 8900],
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
      },
      {
        label: 'Expense',
        data: [5000, 5500, 4800, 4900, 4700, 5300, 5200, 5800, 5500, 5900, 5100, 5700],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar className="bg-white rounded-2xl" data={data} options={options} />;
};

export default BarChart;
