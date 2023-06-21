import React from 'react';
import { Pie } from 'react-chartjs-2';

interface ChartProps {
  data: any;
}

const ChartData: React.FC<ChartProps> = ({ data }) => {
  return (
    <div style={{ margin: 'auto', width: '50%' }}>
      <Pie data={data} />
    </div>
  );
};

export default ChartData;
