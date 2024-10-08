import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";
import { tooltip } from "@material-tailwind/react";

type Props = {
  selectedSegment: string;
};
const OptimizeStackedBarChart: React.FC<Props> = (props) => {
  console.log(props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {
      MOB:[
        {
          name: "Mob 1",
          data: [0.0, 8.96169688238419],
          color: "#DC3C49",
        },
        {
          name: "Mob 2",
          data: [0.0, 14.649725085144732],
          color: "#FA7B33",
        },
        {
          name: "Mob 3",
          data: [0.0, 6.764091453430391],
          color: "#FFB200",
        },
        {
          name: "Mob 4",
          data: [0.0, 1.8841434677899658],
          color: "#496CD5",
        },
        {
          name: "Mob 5",
          data: [0.0, 10.155594006771846],
          color: "#8EB5F4",
        },
        {
          name: "Mob 6",
          data: [0.0, 15.510087191542743],
          color: "#6F91EA",
        },
        {
          name: "Mob 7",
          data: [0.0, 0.02597170365722904],
          color: "#4339F2",
        },
        {
          name: "Mob 8",
          data: [0.0, 20.79277300922161],
          color: "#34B53A",
        },
        {
          name: "Mob 9",
          data: [33.676129921699136, 8.865295626052022],
          color: "#79747E",
        },
        {
          name: "Mob 10",
          data: [29.109936763449568, 5.8691477743693286],
          color: "#FF7A00",
        },
        {
          name: "Mob 11",
          data: [17.650579446238833, 3.2131712236294083],
          color: "#4169E1",
        },
        {
          name: "Mob 12",
          data: [19.563353868612467, 3.3083025760065317],
          color: "#00A76F",
        },
      ],
      "Interest Rate": [
        {
          name: "Int rate 1",
          data: [0.0, 19.31856411213582],
          color: "#DC3C49",
        },
        {
          name: "Int rate 2",
          data: [10.138026457444342, 18.87354812789674],
          color: "#FA7B33",
        },
        {
          name: "Int rate 3",
          data: [9.079358541563787, 17.885273436884365],
          color: "#FFB200",
        },
        {
          name: "Int rate 4",
          data: [7.513657804115867, 17.73327660544831],
          color: "#496CD5",
        },
        {
          name: "Int rate 5",
          data: [7.307580783040672, 17.896090060695197],
          color: "#8EB5F4",
        },
        {
          name: "Int rate 6",
          data: [5.857907935134298, 0.0],
          color: "#6F91EA",
        },
        {
          name: "Int rate 7",
          data: [4.860041286038653, 13.490021119025778],
          color: "#4339F2",
        },
        {
          name: "Int rate 8",
          data: [6.5617137142657285, 14.184554834491724],
          color: "#34B53A",
        },
        {
          name: "Int rate 9",
          data: [5.702755170077327, 14.958245524074046],
          color: "#79747E",
        },
      ],
     "Loan Term": [
        {
          name: "Loan Term 1",
          data: [0.0, 15.710120734879233],
          color: "#DC3C49",
        },
        {
          name: "Loan Term 2",
          data: [6.369525533907174, 0.0],
          color: "#FA7B33",
        },
        {
          name: "Loan Term 3",
          data: [7.292152438319034, 22.175085934985006],
          color: "#FFB200",
        },
        {
          name: "Loan Term 4",
          data: [5.937026464327063,  17.859764820576025],
          color: "#496CD5",
        },
       
      ],
      "POS": [
        {
          name: "Pos 1",
          data: [0.13267036433814988, 7.082881946823048],
          color: "#DC3C49",
        },
        {
          name: "Pos 2",
          data: [ 0.2618194704266599, 3.277088165474608],
          color: "#FA7B33",
        },
        {
          name: "Pos 3",
          data: [2.0147140655870888, 12.081209789672727],
          color: "#FFB200",
        },
        {
          name: "Pos 4",
          data: [4.1252338951367875,  11.790685852352217],
          color: "#496CD5",
        },
        {
          name: "Pos 5",
          data: [9.957599492259597, 15.561138288324234],
          color: "#8EB5F4",
        },
        {
          name: "Pos 6",
          data: [12.796529536271331, 14.360012617394869],
          color: "#6F91EA",
        },
        {
          name: "Pos 7",
          data: [36.03529763032955, 22.549661475419423],
          color: "#4339F2",
        },
        {
          name: "Pos 8",
          data: [34.67613554565084, 13.297321864538869],
          color: "#34B53A",
        },
      ],
      "Loan Amt": [
        {
          name: "Loan amt 1",
          data: [0.0, 2.7356989065582966],
          color: "#DC3C49",
        },
        {
          name: "Loan amt 2",
          data: [0.6453820427598553, 4.264546702494749],
          color: "#FA7B33",
        },
        {
          name: "Loan amt 3",
          data: [0.6228739564336535, 4.087208633457824],
          color: "#FFB200",
        },
        {
          name: "Loan amt 4",
          data: [ 1.030530558813696,    19.788930473591826],
          color: "#496CD5",
        },
        {
          name: "Loan amt 5",
          data: [ 11.693375804678722,  0.02597170365722906],
          color: "#8EB5F4",
        },
        {
          name: "Loan amt 6",
          data: [ 47.200050744329545,  42.95334406231615],
          color: "#6F91EA",
        },
        {
          name: "Loan amt 7",
          data: [38.80778689298452, 26.14429951792393],
          color: "#4339F2",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false, // This will hide the menu
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "40%",
          borderRadius: 10,
          columnWidth: "80%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
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
        width: 0,
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
      // tooltip : {
      //   enabled: false,
      // },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }: { series: any[], seriesIndex: number, dataPointIndex: number, w: any }) {
          const seriesData = w.config.series[seriesIndex]; 
          const { name, color } = seriesData;
          if (series && series[seriesIndex] && typeof series[seriesIndex][dataPointIndex] !== 'undefined') {
            const formattedValue = series[seriesIndex][dataPointIndex].toFixed(1);
            return `
              <div class="arrow_box" style="color:${color}; padding: 10px; ">
                <span><strong>${name}</strong></span><br/>
               <span>Value: ${formattedValue}%</span>
              </div>`;
          }
          return '';
        }
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
        strokeDashArray: 5, // Make the vertical grid lines dashed
        padding: {
          left: 5, // Padding from the left
          right: 35, // Padding from the right
        },
      },
    },
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
  };

  (state.options.chart as any).type = "bar";
  // state.options.xaxis.show = false;

  // useEffect(() => {
  //   // Hide the menu icon after the chart is rendered
  //   const menuIcon = document.querySelector(
  //     ".apexcharts-menu-icon"
  //   ) as HTMLElement;
  //   if (menuIcon) {
  //     menuIcon.style.display = "none";
  //   ;
  //   }
  // });

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);
  const currentSeries = state.series[props.selectedSegment] || [];
  return (
    <div id="chart" className="  w-[100%] xl:w-[36%] h-[325px] bg-white rounded-xl shadow">
      <div className="flex justify-between items-center px-3 py-[15px]">
        <h1 className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px] ">
          Segmentation{" "}
        </h1>
        <div className="flex items-center gap-3 flex-wrap ml-3">
        
          {currentSeries.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-1">
              <div className="w-[13px] h-[13px]" style={{ backgroundColor: item.color, borderRadius: "3px" }}></div>
              <div className="text-[#333333] font-[400] text-[10px] font-['DM Sans']">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] flex xl:flex-row  items-start justify-start">
        <table cellPadding={13} className=" mt-[26px] ml-1">
          <tbody>
            <tr className="h-[54px] text-center text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>Total</td>
            </tr>
            <tr className="h-[140px] text-center text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>L</td>
            </tr>
          </tbody>
        </table>

        <div
          className={` -mt-7 w-[100%]
          ${
            props.selectedSegment === "Medium Risk"
              ? "w-[100%]  -ml-4"
              : "w-[100%]"
          }
           `}
        >
          {selectedReactApexCharts ? (
            <ReactApexChart
              options={state.options as any}
              series={state.series[props?.selectedSegment]}
              type="bar"
              height={260}
              width="99%"
              // width={350}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OptimizeStackedBarChart;
