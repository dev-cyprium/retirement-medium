import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type Props = {
  numOfYears: number;
};

export function YearsChart({ numOfYears }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Bar
      data={{
        labels: Array.from(
          { length: numOfYears },
          (_, i) => currentYear + i + 1
        ),
        datasets: [{ data: [100, 50, 30, 20, 2] }],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
}
