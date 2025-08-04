import { generateCliCommands } from '@/utils/utils';

import code from '@content/Charts/AreaChart.jsx?raw';
import tailwind from '@tailwind/Charts/AreaChart.jsx?raw';
import tsCode from '@ts-default/Charts/AreaChart.tsx?raw';
import tsTailwind from '@ts-tailwind/Charts/AreaChart.tsx?raw';

export const areaChart = {
  ...(generateCliCommands('Charts/AreaChart')),
  installation: `npm i chart.js react-chartjs-2`,
  usage: `import { AreaChart } from 'tecokit-design-bits';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Desktop',
      data: [186, 305, 237, 73, 209, 214],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    },
    {
      label: 'Mobile',
      data: [80, 200, 120, 190, 130, 140],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        drawBorder: false
      },
      ticks: {
        color: '#ffffff'
      }
    },
    x: {
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
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      fill: true
    },
    point: {
      radius: 4,
      hoverRadius: 6
    }
  }
};

function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <AreaChart data={data} options={options} />
    </div>
  );
}`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}; 