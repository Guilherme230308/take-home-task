import React, { useState } from 'react';
import ChartData from './chart';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const PieChartBoard: React.FC = () => {
  const [inputValues, setInputValues] = useState<number[]>([10, 20, 30, 60, 80, 120]); // Initial input values for the chart

  const handleChange = (index: number, value: number) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const pieChartData = React.useMemo(
    () => ({
      labels: ['Communication', 'Electrical', 'Energy', 'Manufacturing', 'Medical', 'Medical'],
      datasets: [
        {
          label: 'Values',
          data: inputValues, // Use the input values for the chart data
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 56, 32, 0.4)', 'rgba(255, 22, 82, 0.9)', 'rgba(255, 75, 12, 0.1)'],
        },
      ],
    }),
    [inputValues]
  );

  return (
    <section>
    <div className="row">
      <div className="col">
        <h1 className="text-center">National Index of Projects per Industry Category</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="d-flex flex-wrap">
          {inputValues.map((value, index) => (
            <input
              key={index}
              type="number"
              value={value}
              onChange={(e) => handleChange(index, parseInt(e.target.value))}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-6 d-flex flex-column align-items-center">
        <ChartData data={pieChartData} />
      </div>
    </div>
  </section>
  );
};

export default PieChartBoard;
