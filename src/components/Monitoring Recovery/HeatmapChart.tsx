import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  categoriesMatricHeatMap: any;
};
const HeatmapChart = ({ categoriesMatricHeatMap }: Props) => {
  console.log("categoriesMatricHeatMap", categoriesMatricHeatMap);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {
      Location: [
        {
          name: "UP",
          data: [70, 30, 150, 90, 30, 20, 50, 70, 60, 40, 90, 120],
        },
        {
          name: "MH",
          data: [30, 50, 120, 70, 60, 90, 80, 40, 100, 20, 50, 130],
        },
        {
          name: "TN",
          data: [60, 20, 30, 50, 70, 80, 90, 130, 20, 40, 60, 160],
        },
        {
          name: "MP",
          data: [110, 20, 70, 50, 60, 90, 40, 30, 150, 50, 80, 100],
        },
        {
          name: "KA",
          data: [90, 100, 130, 50, 60, 40, 30, 150, 70, 80, 20, 50],
        },
        {
          name: "HR",
          data: [120, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 130],
        },
        {
          name: "DL",
          data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 130, 120],
        },
      ],
      POS: [
        {
          name: "<1L",
          data: [80, 40, 50, 80, 50, 10, 50, 70, 60, 40, 90, 110],
        },
        {
          name: "1-5L",
          data: [40, 60, 130, 20, 70, 60, 90, 80, 40, 100, 20, 50],
        },
        {
          name: "5-10L",
          data: [40, 30, 30, 50, 80, 90, 40, 150, 20, 10, 40, 10],
        },
        {
          name: ">10L",
          data: [60, 80, 50, 60, 90, 40, 30, 20, 40, 80, 100, 140],
        },
        // { name: "KA", data: [70, 100, 20, 50, 60, 40, 30, 70, 80, 30, 50, 60] },
        // { name: "HR", data: [40, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 30] },
        // { name: "DL", data: [70, 20, 70, 50, 40, 40, 60, 70, 70, 90, 30, 20] },
      ],
      Vintage: [
        { name: "V1", data: [90, 40, 50, 70, 90, 120, 80, 40, 70, 60, 40, 90] },
        {
          name: "V2",
          data: [40, 60, 20, 60, 90, 80, 40, 40, 100, 130, 60, 50],
        },
        { name: "V3", data: [40, 30, 30, 40, 90, 80, 40, 20, 10, 70, 10, 140] },
        {
          name: "V4",
          data: [60, 150, 80, 50, 70, 90, 80, 40, 20, 40, 80, 100],
        },
        {
          name: "V5",
          data: [70, 100, 20, 80, 90, 80, 160, 40, 70, 80, 30, 60],
        },
        {
          name: "V6",
          data: [40, 30, 90, 90, 90, 80, 70, 40, 100, 70, 60, 130],
        },
        { name: "V7", data: [70, 20, 70, 40, 120, 90, 80, 70, 70, 70, 90, 30] },
      ],
    },
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
    options: {
      chart: {
        height: 350,
        type: "heatmap",
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
              { from: 0, to: 20, color: "#6EFF86", name: "Very Low" },
              { from: 21, to: 40, color: "#0DCD47", name: "Low" },
              { from: 41, to: 60, color: "#FFF59B", name: "Medium" },
              { from: 61, to: 80, color: "#FFDD61", name: "High" },
              { from: 81, to: 100, color: "#D20C0C", name: "Very High" },
              { from: 101, to: 120, color: "#FF7D7D", name: "Extreme" },
              { from: 121, to: 140, color: "#FFD7D7", name: "Severe" },
              { from: 141, to: 160, color: "#C5FFCD", name: "Critical" },
            ],
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        style: {
          colors: "#3B414B",
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: ["DM Sans"],
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#3B414B",
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: ["DM Sans"],
          },
        },
      },
      title: {
        text: "Monthly Assessment",
        style: {
          fontSize: "16px",
          fontWeight: "500",
          colors: "#000000",
          fontFamily: ["DM Sans"],
        },
      },
      legend: {
        position: "top", // Move legend to the top
        horizontalAlign: "left", // Align legend in the center
        offsetY: -40, // Adjust vertical spacing (decrease space between legend and chart)
        offsetX: 330,
      },
    },
  };

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [categoriesMatricHeatMap]);

  return (
    <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%] xl:w-[69%]  h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
      {selectedReactApexCharts ? (
        <ReactApexChart
          options={state.options as any}
          series={state.series[categoriesMatricHeatMap]}
          type="heatmap"
          height={480}
          width={"940px"}
          // width="99%"
        />
      ) : null}
    </div>
  );
};

export default HeatmapChart;
