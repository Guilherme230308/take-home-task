import React, { useMemo, useState } from 'react'
=======
import React, { useState } from 'react';
>>>>>>> Stashed changes
import ChartData from './chart';
import './Dashboard.css';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const PieChartBoard: React.FC = () => {
  const [inputValues, setInputValues] = useState<number[]>([42, 240, 150, 420, 80, 320, 96]); // Initial input values for the chart

  const handleChange = (index: number, value: number) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const labels = useMemo(
    () => ['Communication', 'Electrical', 'Energy', 'Manufacturing', 'Medical', 'Agriculture', 'Construction'], // Labels for each input
    []
  );

  const pieChartData = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          label: 'Values',
          data: inputValues,
          backgroundColor: ['rgb(279, 0, 0)', 'rgb(128, 191, 255)', 'rgb(179, 255, 179)', 'rgb(255, 125, 185)', 'rgb(190, 190, 220)', 'rgb(204, 255, 255)', 'rgb(255, 255, 0)'],
        },
      ],
    }),
    [inputValues, labels]
  );

  return (
    <section>
      <div className="row">
        <div className="col">
          <h2 className="title">Amount Spent on Market Research per Industry Category</h2>
          <h5 className="info">*in millions U$</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="data-container d-flex flex-wrap">
            {inputValues.map((value, index) => (
              <div key={index} className="input-container">
                <label htmlFor={`input-${index}`} className="input-label">
                  {labels[index]}
                </label>
                <input
                  className="chart-data"
                  id={`input-${index}`}
                  type="number"
                  value={value}
                  onChange={(e) => handleChange(index, parseInt(e.target.value))}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-7 d-flex flex-column align-items-center pie-chart">
          <ChartData data={pieChartData} />
        </div>
      </div>
      <div className="col-lg-12 d-flex flex-column align-items-center">
        <button onClick={() => window.location.href = '/'} className='button'>
          Logout
        </button>
      </div>
    </section>
  );
};

export default PieChartBoard;