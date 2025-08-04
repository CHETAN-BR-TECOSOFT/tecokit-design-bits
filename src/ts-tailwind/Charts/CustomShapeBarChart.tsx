import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const colors = [
  'rgba(255, 99, 132, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(255, 205, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(201, 203, 207, 0.8)'
];

const getPath = (x: number, y: number, width: number, height: number, borderRadius: number = 2): string => {
  const radius = Math.min(borderRadius, width / 2, height / 2);
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y + radius}
  C${x + width / 2},${y + radius} ${x + width / 2},${y} ${x + width / 2},${y}
  C${x + width / 2},${y} ${x + width / 2},${y + radius} ${x + width / 2},${y + radius}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

interface TriangleBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius?: number;
}

const TriangleBar: React.FC<TriangleBarProps> = ({ fill, x, y, width, height, borderRadius = 2 }) => {
  return <path d={getPath(x, y, width, height, borderRadius)} stroke="none" fill={fill} />;
};

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }>;
}

interface CustomShapeBarChartProps {
  data: ChartData;
  options?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const CustomShapeBarChart: React.FC<CustomShapeBarChartProps> = ({ 
  data, 
  options = {}, 
  width = '100%', 
  height = '400px',
  className = ''
}) => {
  // Convert Chart.js data format to Recharts format
  const rechartsData = data.labels.map((label, index) => ({
    name: label,
    value: data.datasets[0].data[index],
    color: Array.isArray(data.datasets[0].backgroundColor) 
      ? data.datasets[0].backgroundColor[index] 
      : data.datasets[0].backgroundColor || colors[index % colors.length]
  }));

    // Handle customization options
  const showLegend = options.showLegend !== undefined ? options.showLegend : true;
  const animationDuration = options.animationDuration || 2000;
  const borderRadius = options.borderRadius || 2;
  const barWidth = options.barWidth || 2; // Default 2cm width for better visibility

  return (
    <div 
      className={`bg-gradient-to-br from-white/5 to-white/2 rounded-xl p-5 border border-white/10 backdrop-blur-md ${className}`}
      style={{ width, height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={rechartsData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#ffffff', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          />
          <YAxis 
            tick={{ fill: '#ffffff', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff'
            }}
            labelStyle={{ color: '#ffffff', fontWeight: 600 }}
          />
          {showLegend && (
            <Legend 
              wrapperStyle={{ color: '#ffffff' }}
            />
          )}
          <Bar 
            dataKey="value" 
            fill="#8884d8" 
            shape={(props: any) => <TriangleBar {...props} borderRadius={borderRadius} />} 
            label={{ 
              position: 'top', 
              fill: '#ffffff',
              fontSize: 12,
              fontWeight: 500
            }}
            animationDuration={animationDuration}
            barSize={barWidth * 20} // Convert cm to pixels (1cm ≈ 20px)
            onMouseOver={(data, index) => {
              // Reduce hover brightness by using a darker version
              const cell = document.querySelector(`[data-testid="cell-${index}"]`) as HTMLElement;
              if (cell) {
                cell.style.filter = 'brightness(0.9)';
              }
            }}
            onMouseOut={(data, index) => {
              // Restore original brightness
              const cell = document.querySelector(`[data-testid="cell-${index}"]`) as HTMLElement;
              if (cell) {
                cell.style.filter = 'none';
              }
            }}
          >
            {rechartsData.map((entry, index) => (
              <Cell key={`cell-${index}`} data-testid={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomShapeBarChart; 