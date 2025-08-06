import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const AreaChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 160,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#3b82f6"],
  };

  const series = [
    {
      name: "Users",
      data: [1200, 1500, 1400, 1800, 1900, 2200, 2400],
    },
  ];

  return <Chart options={options} series={series} type="area" height={300} />;
};

export default AreaChart;
