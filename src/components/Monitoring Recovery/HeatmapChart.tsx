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
        { name: "DL", data: [70, 30, 150, 90, 30, 20, 50, 70, 60, 40, 90, 120] },
        { name: "HR", data: [30, 50, 120, 70, 60, 90, 80, 40, 100, 20, 50, 130] },
        { name: "KA", data: [60, 20, 30, 50, 70, 80, 90, 130, 20, 40, 60, 160] },
        { name: "MP", data: [110, 20, 70, 50, 60, 90, 40, 30, 150, 50, 80, 100] },
        { name: "TN", data: [90, 100, 130, 50, 60, 40, 30, 150, 70, 80, 20, 50] },
        { name: "MH", data: [120, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 130] },
        { name: "UP", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 130, 120] },
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
      ],
      Vintage: [
        { name: "V1", data: [90, 40, 50, 70, 90, 120, 80, 40, 70, 60, 40, 90] },
        { name: "V2", data: [40, 60, 20, 60, 90, 80, 40, 40, 100, 130, 60, 50] },
        { name: "V3", data: [40, 30, 30, 40, 90, 80, 40, 20, 10, 70, 10, 140] },
        { name: "V4", data: [60, 150, 80, 50, 70, 90, 80, 40, 20, 40, 80, 100] },
        { name: "V5", data: [70, 100, 20, 80, 90, 80, 160, 40, 70, 80, 30, 60] },
        { name: "V6", data: [40, 30, 90, 90, 90, 80, 70, 40, 100, 70, 60, 130] },
        { name: "V7", data: [70, 20, 70, 40, 120, 90, 80, 70, 70, 70, 90, 30] },
      ],
    },
    options: {
      chart: {
        height: "100%",
        width: "100%",
        type: "heatmap",
        toolbar: {
          show: false,
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
              { from: 0, to: 50, color: "#00B050", name: "Low" }, // green
              { from: 51, to: 100, color: "#FFDD61", name: "Medium" }, // yellow
              { from: 101, to: 160, color: "#FF0000", name: "High" }, // red
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
        labels: {
          style: {
            colors: "#3B414B",
            fontSize: "12px",
            fontFamily: ["DM Sans"],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#3B414B",
            fontSize: "12px",
            fontFamily: ["DM Sans"],
          },
        },
      },
      title: {
        text: "Monthly Assessment",
        style: {
          fontSize: "18px",
          fontFamily: ["DM Sans"],
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -40,
        offsetX: 330,
      },
    },
  };

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [categoriesMatricHeatMap]);

  return (
    <div className="min-w-[300px]  sm:w-[600px] md:w-[768px] lg:w-[992px] xl:w-[68%] h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
      {selectedReactApexCharts ? (
        <div 
        style={{
          // minWidth: "900px", // Minimum width fixed at 890px
          // maxWidth: "900px", // Maximum width also fixed at 890px
          width: "100%",    // Ensures it stays exactly 890px
          overflow: "hidden", // Ensures no content goes beyond this width
        
        }}
      >
        <ReactApexChart
          options={state.options as any}
          series={state.series[categoriesMatricHeatMap]}
          type="heatmap"
          height={480}    // Fixed height
          width={"100%"}// Fixed width, will not change
        />
      </div>
      
      ) : null}
    </div>
  );
};

export default HeatmapChart;
