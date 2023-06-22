import React from 'react';
import { Pie } from 'react-chartjs-2';

interface ChartDataProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  options?: {
    plugins?: {
      tooltip?: {
        callbacks?: {
          label: (context: any) => string;
        };
      };
    };
  };
}

const ChartData: React.FC<ChartDataProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export default ChartData;
