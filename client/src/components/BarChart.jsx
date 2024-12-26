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

const BarChart = (props) => {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const groupedData = props.transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    console.log(date);
    const month = date.getMonth(); // 0-11
    const amount = transaction.amount;
    const type = transaction.type; // 'income' or 'expense'

    if (!acc[month]) {
      acc[month] = { income: 0, expense: 0 };
    }

    if (type === 'income') {
      acc[month].income += amount;
    } else if (type === 'expense') {
      acc[month].expense += amount;
    }

    return acc;
  }, {});
  const incomeData = months.map((_, index) => groupedData[index]?.income || 0);
  const expenseData = months.map((_, index) => groupedData[index]?.expense || 0);
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
      },
      {
        label: 'Expense',
        data: expenseData,
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
