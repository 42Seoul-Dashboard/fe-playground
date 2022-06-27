import React from "react";
import { Line } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export const ChartLine = (props: any) => {
  const { data, options } = props;
  return (
    <Line options={options} data={data}/>
  );
}