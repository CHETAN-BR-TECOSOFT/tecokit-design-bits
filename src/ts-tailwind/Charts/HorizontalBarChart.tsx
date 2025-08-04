import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ 
  data, 
  options = {}, 
  width = '100%', 
  height = '400px',
  className = ''
}) => {
  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // This makes the bars horizontal
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
          lineWidth: 1
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
            weight: '500'
          },
          padding: 10
        },
        border: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
          lineWidth: 1
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
            weight: '500'
          },
          padding: 10
        },
        border: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            size: 14,
            weight: '600'
          },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: '600'
        },
        bodyFont: {
          size: 13
        },
        padding: 12
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    elements: {
      bar: {
        borderRadius: 6,
        borderSkipped: false,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1
      }
    }
  };

  const mergedOptions: ChartOptions<'bar'> = {
    ...defaultOptions,
    ...options,
    scales: {
      ...defaultOptions.scales,
      ...options.scales
    },
    plugins: {
      ...defaultOptions.plugins,
      ...options.plugins
    }
  };

  return (
    <div 
      className={`bg-gradient-to-br from-white/5 to-white/2 rounded-xl p-5 border border-white/10 backdrop-blur-md ${className}`}
      style={{ width, height }}
    >
      <Bar data={data} options={mergedOptions} />
    </div>
  );
};

export default HorizontalBarChart; 