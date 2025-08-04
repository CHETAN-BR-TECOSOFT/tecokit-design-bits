import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = ({ 
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
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
        padding: 12,
        animation: {
          duration: 0
        },
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y;
          }
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
        hoverRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 2,
        hitRadius: 10,
        hoverBorderWidth: 3
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
      axis: 'x'
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
      className={`bg-gradient-to-br from-white/5 to-white/2 rounded-xl p-5 border border-white/10 backdrop-blur-md ${className}`}
      style={{ width, height }}
    >
      <Line data={data} options={mergedOptions} />
    </div>
  );
};

export default AreaChart; 