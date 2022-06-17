import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export const ChartBar = (props: any) => {
  const { data, options } = props;
  return (
    <Bar data={data} options={options}/>
  );
}