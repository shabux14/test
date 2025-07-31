// src/components/ChartComponent.tsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// ثبت عناصر مورد نیاز Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
  }[];
};

interface ChartComponentProps {
  data: ChartData;
}

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const, // مقدار مجاز: 'top' | 'bottom' | 'left' | 'right' | 'chartArea' :contentReference[oaicite:1]{index=1}
      labels: {
        boxWidth: 40,
      },
    },
    title: {
      display: true,
      text: 'نمودار وضعیت سرورها',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#e5e7eb',
      },
    },
  },
};

export default function ChartComponent({ data }: ChartComponentProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
}
