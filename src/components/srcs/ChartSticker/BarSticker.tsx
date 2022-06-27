import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import * as ChartData from './ChartData';
Chart.register(...registerables);

const BarSticker = () => {
  return (
      <Bar options={ChartData.options} data={ChartData.data}/>
  )
}
export default BarSticker;