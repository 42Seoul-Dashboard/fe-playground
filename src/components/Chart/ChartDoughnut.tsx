import React from "react";
import { Doughnut } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export const ChartDoughnut = (props: any) => {
  const { data, options } = props;
  return (
    <Doughnut options={options} data={data}/>
  );
}