import { generateCliCommands } from '@/utils/utils';

import code from '@content/Charts/HorizontalBarChart.jsx?raw';
import tailwind from '@tailwind/Charts/HorizontalBarChart.jsx?raw';
import tsCode from '@ts-default/Charts/HorizontalBarChart.tsx?raw';
import tsTailwind from '@ts-tailwind/Charts/HorizontalBarChart.tsx?raw';

export const horizontalBarChart = {
  ...(generateCliCommands('Charts/HorizontalBarChart')),
  installation: `npm i chart.js react-chartjs-2`,
  usage: `import { HorizontalBarChart } from 'tecokit-design-bits';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sales',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y', // This makes the bars horizontal
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        drawBorder: false
      },
      ticks: {
        color: '#ffffff'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        drawBorder: false
      },
      ticks: {
        color: '#ffffff'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    }
  },
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart'
  }
};

function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <HorizontalBarChart data={data} options={options} />
    </div>
  );
}`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}; 