import React from "react";
import Chart from "react-apexcharts";

function PowerChart() {
  const chartOptions = {
    chart: {
      type: "area",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "07:57 AM",
        "07:59 AM",
        "08:01 AM",
        "08:03 AM",
        "08:05 AM",
        "07:57 AM",
        "07:59 AM",
        "08:01 AM",
        "08:03 AM",
        "08:05 AM",
        "07:57 AM",
        "07:59 AM",
        "08:01 AM",
        "08:03 AM",
        "08:05 AM",
        "07:57 AM",
        "07:59 AM",
        "08:01 AM",
        "08:03 AM",
        "08:05 AM",
      ],
    },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    { name: "DK-1", data: [50.08, 49.8, 50.0, 49.92, 50.05, 49.85] },
    { name: "DK-2", data: [49.97, 49.89, 49.97, 50.05, 49.97, 50.2] },
    { name: "DK-Gas", data: [] },
  ];

  return (
    <div className="chart-box">
      <h4>Power Cost</h4>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={250}
      />
    </div>
  );
}

export default PowerChart;
