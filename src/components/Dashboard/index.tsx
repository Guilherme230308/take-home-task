import React from 'react';
import Table from './table';
import Chart from './chart';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement
)

const DataPage: React.FC = () => {
  const tableData = React.useMemo(
    () => [
      { name: 'João', age: 25 },
      { name: 'Maria', age: 30 },
      { name: 'Pedro', age: 35 },
    ],
    []
  );

  const tableColumns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );

  const barChartData = React.useMemo(
    () => ({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    }),
    []
  );

  const pieChartData = React.useMemo(
    () => ({
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Pie Chart Example',
          data: [10, 20, 30],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        },
      ],
    }),
    []
  );
  

  return (
    <div>
      <h1>Bar Table Example</h1>
      <Table data={tableData} columns={tableColumns} />
      <h1>Chart Example</h1>
      <Chart data={barChartData} />
      <h1>Table Example</h1>
      <Table data={tableData} columns={tableColumns} />
      <h1>Pie Chart Example</h1>
      <Chart data={pieChartData} />
    </div>
  );
};

export default DataPage;