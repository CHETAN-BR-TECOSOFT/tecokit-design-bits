import { generateCliCommands } from '@/utils/utils';

import code from '@content/Charts/CustomShapeBarChart.jsx?raw';
import tailwind from '@tailwind/Charts/CustomShapeBarChart.jsx?raw';
import tsCode from '@ts-default/Charts/CustomShapeBarChart.tsx?raw';
import tsTailwind from '@ts-tailwind/Charts/CustomShapeBarChart.tsx?raw';

export const customShapeBarChart = {
  ...(generateCliCommands('Charts/CustomShapeBarChart')),
  installation: `npm i recharts`,
  usage: `import { CustomShapeBarChart } from 'tecokit-design-bits';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sales',
    data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(201, 203, 207, 0.7)'
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
  showLegend: true,
  animationDuration: 2000,
  borderRadius: 2,
  barWidth: 2
};

function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <CustomShapeBarChart data={data} options={options} />
    </div>
  );
}`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}; 