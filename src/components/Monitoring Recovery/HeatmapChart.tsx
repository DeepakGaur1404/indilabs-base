import { fontWeight } from "html2canvas/dist/types/css/property-descriptors/font-weight";
import { color } from "html2canvas/dist/types/css/types/color";
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
        { name: "TN", data: [70, 30, 50, 90, 30, 20, 50, 70, 60, 40, 90, 20,10,40,60,80,90] },
        { name: "KA", data: [20,10,40,60,80,30, 50, 20, 70, 60, 90, 80, 40, 100, 20, 50, 30] },
        { name: "DL", data: [60, 20, 30, 50, 70, 80, 90,20,10,40,60,80, 30, 20, 40, 60, 60] },
        { name: "MH", data: [10, 20, 70,20,10,40,60,80, 50, 60, 90, 40, 30, 50, 50, 80, 100] },
        { name: "OD", data: [90, 100, 30, 50, 60, 40, 30, 50, 70,20,10,40,60,80, 80, 20, 50] },
        { name: "PC", data: [20,10,40,60,80,20, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 30] },
        { name: "PB", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 30, 20,20,10,40,60,80,] },
        { name: "RJ", data: [70, 30, 50, 90, 30, 20, 50, 70, 60, 40, 90, 20,10,40,60,80,90] },
        { name: "HR", data: [20,10,40,60,80,30, 50, 20, 70, 60, 90, 80, 40, 100, 20, 50, 30] },
        { name: "HP", data: [60, 20, 30, 50, 70, 80, 90,20,10,40,60,80, 30, 20, 40, 60, 60] },
        { name: "JK", data: [10, 20, 70,20,10,40,60,80, 50, 60, 90, 40, 30, 50, 50, 80, 100] },
        { name: "JH", data: [90, 100, 30, 50, 60, 40, 30, 50, 70,20,10,40,60,80, 80, 20, 50] },
        { name: "TL", data: [20,10,40,60,80,20, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 30] },
        { name: "UP", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 30, 20,20,10,40,60,80,] },
        { name: "UK", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 30, 20,20,10,40,60,80,] },
        { name: "WB", data: [70, 30, 50, 90, 30, 20, 50, 70, 60, 40, 90, 20,10,40,60,80,90] },
        { name: "AP", data: [20,10,40,60,80,30, 50, 20, 70, 60, 90, 80, 40, 100, 20, 50, 30] },
        { name: "MP", data: [60, 20, 30, 50, 70, 80, 90,20,10,40,60,80, 30, 20, 40, 60, 60] },
        { name: "GJ", data: [10, 20, 70,20,10,40,60,80, 50, 60, 90, 40, 30, 50, 50, 80, 100] },
        { name: "AS", data: [90, 100, 30, 50, 60, 40, 30, 50, 70,20,10,40,60,80, 80, 20, 50] },
        { name: "BR", data: [20,10,40,60,80,20, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 30] },
        { name: "CD", data: [30, 20, 70, 50, 40, 90, 60, 80, 70, 100, 30, 20,20,10,40,60,80,] },
        { name: "CG", data: [60, 20, 30, 50, 70, 80, 90,20,10,40,60,80, 30, 20, 40, 60, 60] },
        { name: "DH", data: [10, 20, 70,20,10,40,60,80, 50, 60, 90, 40, 30, 50, 50, 80, 100] },
        { name: "GO", data: [90, 100, 30, 50, 60, 40, 30, 50, 70,20,10,40,60,80, 80, 20, 50] },
        { name: "KR", data: [20,10,40,60,80,20, 30, 90, 50, 70, 80, 60, 40, 100, 70, 20, 30] },
      
      ],
      POS: [
        {
          name: "<1L",
          data: [80, 40, 50, 80, 50, 10, 50, 70, 60, 40, 90, 10,20,10,40,60,80,],
        },
        {
          name: "1-5L",
          data: [20,10,40,60,80,40, 60, 30, 20, 70, 60, 90, 80, 40, 100, 20, 50],
        },
        {
          name: "5-10L",
          data: [40, 30, 30, 50, 80,20,10,40,60,80, 90, 40, 50, 20, 10, 40, 10],
        },
        {
          name: ">10L",
          data: [60, 80, 50, 60, 90, 40, 30, 20, 40,20,10,40,60,80, 80, 100, 40],
        },
      ],
      Vintage: [
        { name: "V1", data: [20,10,40,60,80,90, 40, 50, 70, 90, 20, 80, 40, 70, 60, 40, 90] },
        { name: "V2", data: [40, 60, 20, 60, 90, 80, 40, 40, 100, 30, 60, 50,20,10,40,60,80,] },
        { name: "V3", data: [40, 30, 20,10,40,60,80,30, 40, 90, 80, 40, 20, 10, 70, 10, 40] },
        { name: "V4", data: [60, 50, 80, 50, 70, 90, 80, 20,10,40,60,80,40, 20, 40, 80, 10] },
        { name: "V5", data: [70, 100,20,10,40,60,80, 20, 80, 90, 80, 60, 40, 70, 80, 30, 60] },
        { name: "V6", data: [40, 30, 90, 90, 90, 80, 20,10,40,60,80,70, 40, 100, 70, 60, 30] },
        { name: "V7", data: [70, 20, 20,10,40,60,80,70, 40, 20, 90, 80, 70, 70, 70, 90, 30] },
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
              { from: 0, to: 30, color: "#00B050", name: "Low" }, // green
              { from: 31, to: 60, color: "#FFDD61", name: "Medium" }, // yellow
              { from: 61, to: 100, color: "#FF0000", name: "High" }, // red
            ],
          },
        },
      },
      xaxis: {
        type: "category",
        
        categories: [
        
          "Feb2023",
          "Mar2023",
          "Apr2023",
          "May2023",
          "Jun2023",
          "Jul2023",
          "Aug2023",
          "Sep2023",
          "Oct2023",
          "Nov2023",
          "Dec2023",
          "Jan2024",
          "Feb2024",
          "Mar2024",
          "Apr2024",
          "May2024",
          "Jun2024",
        ],
        labels: {
          rotate: -70,  // Rotate the labels to -70 degrees
          offsetX: 0,   // Adjust the horizontal offset
          offsetY: 0,   // Adjust the vertical offset
          style: {
            colors: "#3B414B",     // Set the label color
            fontSize: "12px",      // Set the font size
            fontFamily: "DM Sans", // Set the font family
          },
          // `rotateAlways` forces the rotation even when space is small
          rotateAlways: true, 
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
          colors: "#000000",
          fontWeight: "500",
          fontSize: "16px",
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
const [selectLocation, SetSelectLocation]= useState()
  useEffect(() => {
    SetSelectLocation(categoriesMatricHeatMap)
    // if (categoriesMatricHeatMap && state.series[categoriesMatricHeatMap]) {
    //   setSelectedReactApexCharts(true);
    // } else {
      setSelectedReactApexCharts(true);
    // }
    
  }, [categoriesMatricHeatMap]);

  return (
    <>
   
   {selectLocation==="Location"&& <div className="min-w-[300px]  w-[100%] h-[1000px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
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
          height={980}    // Fixed height
          width={"100%"}// Fixed width, will not change
        />
      </div>
      
      ) : null}
    </div>}
    {selectLocation==="POS" && <div className="min-w-[300px]  w-[100%] h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
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
    </div>}
    { selectLocation==="Vintage" && <div className="min-w-[300px]  w-[100%] h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
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
    </div>}
    </>
  );
};

export default HeatmapChart;
