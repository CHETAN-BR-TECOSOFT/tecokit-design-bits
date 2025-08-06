import { generateCliCommands } from '@/utils/utils';

import code from '@content/Charts/PieChart.jsx?raw';
import tailwind from '@tailwind/Charts/PieChart.jsx?raw';
import tsCode from '@ts-default/Charts/PieChart.tsx?raw';
import tsTailwind from '@ts-tailwind/Charts/PieChart.tsx?raw';

export const pieChart = {
  ...(generateCliCommands('Charts/PieChart')),
  installation: `npm i chart.js react-chartjs-2`,
  usage: `import { PieChart } from 'tecokit-design-bits';

const data = {
  labels: ['Windows', 'OS X', 'Linux', 'Chrome OS', 'Other'],
  datasets: [{
    label: 'Desktop OS Market Share',
    data: [72.72, 16.38, 3.83, 2.42, 4.65],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(255, 159, 64, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)'
    ],
    borderWidth: 2
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#ffffff',
        font: {
          size: 14,
          weight: '600'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      cornerRadius: 8
    }
  },
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart',
    animateRotate: true,
    animateScale: true
  },
  elements: {
    arc: {
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.1)'
    }
  },
  cutout: '0%'
};

function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <PieChart data={data} options={options} />
    </div>
  );
}`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}; 