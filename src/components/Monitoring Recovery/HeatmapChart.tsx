import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HeatmapChart = () => {
  // Set initial state with useState hook
  const [options, setOptions] = useState<any>({
    chart: {
      height: 350,
      type: 'heatmap',
      toolbar: {
        show: false, // Disable the toolbar (menu in the top right corner)
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 20, color: "#D20C0C", name: "Very Low" },
            { from: 21, to: 40, color: "#FFDD61", name: "Low" },
            { from: 41, to: 60, color: "#FFF59B", name: "Medium" },
            { from: 61, to: 80, color: "#6EFF86", name: "High" },
            { from: 81, to: 100, color: "#0DCD47", name: "Very High" },
            { from: 101, to: 120, color: "#FF7D7D", name: "Extreme" },   
            { from: 121, to: 140, color: "#FFD7D7", name: "Severe" },    
            { from: 141, to: 160, color: "#C5FFCD", name: "Critical" } 
          ],
        },
      },
      
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    title: {
      text: 'Monthly Assessment',
    },
    legend: {
        position: 'top', // Move legend to the top
        horizontalAlign: 'right', // Align legend in the center
        offsetY: -20, // Adjust vertical spacing (decrease space between legend and chart)
      },
  });

  // Sample data representing the states and their respective heatmap values for each month
  const [series, setSeries] = useState( [
    { name: "UP", data: [70, 30, 150, 90, 30, 20, 50, 70, 60, 40, 90, 120] },
    { name: "MH", data: [30, 50, 120, 70, 60, 90, 80, 40, 100, 20, 50, 130] },
    { name: "TN", data: [60, 20, 30, 50, 70, 80, 90, 130, 20, 40, 60, 160] },
    { name: "MP", data: [110,20, 70, 50, 60, 90, 40, 30, 150, 50, 80, 100, ] },
    { name: "KA", data: [90, 100, 130, 50, 60, 40, 30, 150,70, 80, 20, 50, ] },
    { name: "HR", data: [120, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 130] },
    { name: "DL", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 130, 120] },
  ]);

  return (
    <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%] xl:w-[66%]  h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
      <ReactApexChart options={options} series={series} type="heatmap" height={480} width={"890px"} />
    </div>
  );
};

export default HeatmapChart;
