import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

type Props = {
  selectedSegment: string;
};
const OptimizeStackedBarChart: React.FC<Props> = (props) => {
  console.log(props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {
      "Very High Risk": [
        {
          name: "mob_1",
          data: [10, 20],
          color: "#DC3C49",
        },
        {
          name: "mob_2",
          data: [30, 40],
          color: "#FA7B33",
        },
        {
          name: "mob_3",
          data: [20, 10],
          color: "#FFB200",
        },
        {
          name: "mob_4",
          data: [10, 20],
          color: "#496CD5",
        },
        {
          name: "mob_5",
          data: [30, 10],
          color: "#8EB5F4",
        },
      ],
      "High Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [12, 4, 11, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [10, 12, 6, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [4, 5, 10, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [4, 9, 3, 0, 0],
          color: "#FF0000",
        },
      ],
      "Medium Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [8, 12, 0, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 19, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [8, 8, 8, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3, 0, 0],
          color: "#FF0000",
        },
      ],
      "Low Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [12, 17, 11, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [44, 55, 41, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 0, 0],
          color: "#FF0000",
        },
      ],
      "H Balance": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [7, 11, 0, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 18, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [9, 9, 9, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3, 0, 0],
          color: "#FF0000",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        stackType: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "40%",
          borderRadius: 10,
          columnWidth: "80%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
          // borderRadiusApplication: "end",
          // distributed: true,
          // dataLabels: {
          //   enabled: true, // Disable data labels on bars
          //   style:{
          //     colors: ['#000000'],
          //     fontSize: "30px",
          //   }
          // },
        },
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        width: 1,
        colors: ["#7f7f7f"],
      },
      title: {
        text: "",
      },
      xaxis: {
        show: true,
        tickAmount: 5, // Controls the number of ticks (0, 20, 40, 60, 80, 100)
        min: 0, // Set the minimum value of the x-axis
        max: 100, // Set the maximum value of the x-axis
        labels: {
          formatter: (val: number) => {
            return Math.floor(val).toString() + "%"; // Rounds the ticks to whole numbers (0, 20, 40...)
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + "%";
          },
        },
      },
      yaxis: {
        show: false,
        formatter: (val: number) => {
          return val + 5;
        },
        labels: {
          offsetX: -15,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        }, // Hide the vertical axis
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
    //   menu: {
    //     show: false,
    //   },
      grid: {
        show: true, // Overall grid setting
        borderColor: "#e0e0e0", // Grid line color
        xaxis: {
          lines: {
            show: true, // Show vertical grid lines on x-axis
          },
        },
        yaxis: {
          lines: {
            show: false, // Disable horizontal grid lines
          },
        },
        strokeDashArray: 10, // Make the vertical grid lines dashed
        padding: {
          left: 5, // Padding from the left
          right: 40, // Padding from the right
        },
      },
    },
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
  };

  (state.options.chart as any).type = "bar";
  // state.options.xaxis.show = false;

  useEffect(() => {
    // Hide the menu icon after the chart is rendered
    const menuIcon = document.querySelector(
      ".apexcharts-menu-icon"
    ) as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none";
    ;
    }
  });

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);

  return (
    <div
      id="chart"
      className="w-[36%] shadow h-[325px] bg-white rounded-xl"
    >
      <div className="flex justify-between items-center px-3 py-[15px]">
        <h1 className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px] ">
          Segmentation{" "}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
        
          <div className="flex items-center gap-1">
            <div className="w-[13px] h-[13px] bg-[#DC3C49] rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
              mob_1
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[13px] h-[13px] bg-[#FA7B33] rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
              mob_2
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[13px] h-[13px] bg-[#FFB200] rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
              mob_3
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[13px] h-[13px] bg-[#496CD5] rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
              mob_4
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[13px] h-[13px] bg-[#8EB5F4] rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
              mob_5
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col sm:flex-row items-start justify-start">
       
          <table cellPadding={13} className="w-[90%] sm:w-[30%] mt-[40px] ml-1">
          <tbody>
            <tr className="h-[54px] text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>Total</td>
            </tr>
            <tr className="h-[170px]  text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>L</td>
            </tr>
           
          </tbody>
        </table>
        
        <div
          className={` -mt-7
          ${
            props.selectedSegment === "Medium Risk"
              ? "w-[100%] sm:w-[70%] -ml-4"
              : "w-[100%]"
          }
           `}
        >
          {selectedReactApexCharts ? (
            <ReactApexChart
              options={state.options as any}
              series={state.series[props?.selectedSegment]}
              type="bar"
              height={300}
              width={410}
            />
          ) : null}
        </div>
      </div>
     
    </div>
  );
};

export default OptimizeStackedBarChart;
