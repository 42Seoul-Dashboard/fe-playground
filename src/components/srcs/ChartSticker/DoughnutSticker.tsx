import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import * as ChartData from './ChartData';
Chart.register(...registerables);

const DoughnutSticker = () => {
  return (
    <Doughnut options={ChartData.options} data={ChartData.data}/>
  )
}

export default DoughnutSticker;