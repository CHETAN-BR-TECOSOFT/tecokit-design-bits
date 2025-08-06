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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ 
  data, 
  options = {}, 
  width = '100%', 
  height = '400px',
  className = ''
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
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
      x: {
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
      easing: 'easeInOutQuart',
      onProgress: function(animation) {
        const chart = animation.chart;
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);
        
        if (!meta.hidden) {
          meta.data.forEach((bar, index) => {
            const data = dataset.data[index];
            const value = data;
            const x = bar.x;
            const y = bar.y;
            
            // Add glow effect
            ctx.save();
            ctx.shadowColor = dataset.borderColor[index] || '#ffffff';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.fillStyle = dataset.borderColor[index] || '#ffffff';
            ctx.fillRect(x - 1, y, 2, chart.height - y - 10);
            ctx.restore();
          });
        }
      }
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

  const mergedOptions = {
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
      style={{ width, height }}
      className={`bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-5 border border-white/10 backdrop-blur-md ${className}`}
    >
      <Bar data={data} options={mergedOptions} />
    </div>
  );
};

export default BarChart; 