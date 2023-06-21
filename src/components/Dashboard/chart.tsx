import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

interface ChartProps {
  data: any;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <Bar data={data} />
      <Pie data={data} />
    </div>
  );
};

export default Chart;
