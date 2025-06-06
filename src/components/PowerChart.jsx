import React from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchPowerDataForChart } from "../api/endpoints/power";
import { useState } from "react";

import "../styles/PowerChart.css";

function PowerChart() {
  //   const chartOptions = {
  //     chart: {
  //       type: "area",
  //       height: 250,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     xaxis: {
  //       categories: [
  //         "07:57 AM",
  //         "07:59 AM",
  //         "08:01 AM",
  //         "08:03 AM",
  //         "08:05 AM",
  //         "07:57 AM",
  //         "07:59 AM",
  //         "08:01 AM",
  //         "08:03 AM",
  //         "08:05 AM",
  //         "07:57 AM",
  //         "07:59 AM",
  //         "08:01 AM",
  //         "08:03 AM",
  //         "08:05 AM",
  //         "07:57 AM",
  //         "07:59 AM",
  //         "08:01 AM",
  //         "08:03 AM",
  //         "08:05 AM",
  //       ],
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       width: 2,
  //     },
  //     marker: {
  //       size: 5,
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //   };

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "area",
        height: 800,
        toolbar: { show: false },
      },
      grid: {
        show: true,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: { categories: [] },
      stroke: { curve: "smooth", width: 2 },
      marker: { size: 5 },
      fill: { opacity: 1 },
      dataLabels: { enabled: false },
    },
    series: [
      { name: "DK-1", data: [] },
      { name: "DK-2", data: [] },
      { name: "DK-Gas", data: [] },
    ],
  });

  //   const chartSeries = [
  //     { name: "DK-1", data: [50.08, 49.8, 50.0, 49.92, 50.05, 49.85] },
  //     { name: "DK-2", data: [49.97, 49.89, 49.97, 50.05, 49.97, 50.2] },
  //     { name: "DK-Gas", data: [] },
  //     ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      let res = await fetchPowerDataForChart();
      setChartData((prev) => ({
        options: {
          ...prev.options,
          xaxis: {
            ...prev.options.xaxis,
            categories: res.data.categories,
          },
        },
        series: res.data.series,
      }));
    } catch (error) {
      console.log("Error fetching power data: ", error);
    }
  };

  return (
    <div className="chart-box">
      <div className="power-cost-header">
        <h4 className="power-cost-title">Power Cost</h4>

        <div className="power-cost-controls">
          <select className="power-cost-dropdown">
            <option>December 14th</option>
            <option>December 13th</option>
            <option>December 12th</option>
            <option>December 11th</option>
          </select>

          <i className="fa-solid fa-gear power-cost-icon"></i>
        </div>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={250}
      />
    </div>
  );
}

export default PowerChart;
