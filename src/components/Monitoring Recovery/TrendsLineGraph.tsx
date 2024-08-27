import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  staticDataRecoveryPerformance: any;
  selectedCategoryButton: string;
  activeButton: any;
  staticDataUniqueAgency: any;
};

interface SeriesData {
  series: {
    sub_segment: string | null;
    value: number[];
  };
}

// Define the type for state
interface State {
  state: string;
  series: SeriesData[];
  bars: {
    bar: {
      sub_segment: string;
      value: number;
    };
  }[];
}

const allMonths = [
  "Jan 2023",
  "Feb  2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
  "Apr 2024",
  "May 2024",
];

const findMaxLength = (seriesData: any[]): number => {
  let maxLength = 0;
  seriesData.forEach((series) => {
    if (series.series.value.length > maxLength) {
      maxLength = series.series.value.length;
    }
  });
  return maxLength;
};

const getStartIndex = (numValues: number): number => {
  const lengthMapping: any = {
    17: 0,
    16: 1,
    15: 2,
    14: 3,
    13: 4,
    12: 5,
    11: 6,
    10: 7,
    9: 8,
    8: 9,
    7: 10,
    6: 11,
    5: 12,
    4: 13,
    3: 14,
    2: 15,
    1: 16,
    0: 17,
  };
  return lengthMapping[numValues];
};

const TrendsLineGraph = ({
  staticDataRecoveryPerformance,
  selectedCategoryButton,
  activeButton,
  staticDataUniqueAgency,
}: Props) => {
  const [selectedCategories, setselectedCategory] = useState("");

  const formatYAxisTick = (tick: any) => {
    if (tick === 0) {
      return `${tick}`;
    } else {
      return `${tick}%`;
    }
  };

  // const colors = [
  //   "#6F91EA",
  //   "#4339F2",
  //   "#34B53A",
  //   "#FFB200",
  //   "#FA7B33",
  //   "#79747E",
  //   "#3182bd",
  //   "#9F90D4",
  //   "#5C4E8E",
  //   "#6A7691",
  //   "#4169E1",
  //   "#E5E3ED",
  //   "#C9C4D9",
  //   "#776BA1",
  //   "#EF4444",
  // ];
  const valueColorMapping: { [key: string]: string } = {
    "Very Small": "#6F91EA",
    Small: "#4339F2",
    Med: "#34B53A",
    Large: "#FFB200",
    Inhouse: "#FA7B33",
  };
  const getColorBySubSegment = (subSegment: string | null) => {
    if (subSegment && valueColorMapping[subSegment]) {
      return valueColorMapping[subSegment];
    }
    return "#79747E"; // default color if sub_segment is null or not found
  };

  useEffect(() => {
    setselectedCategory(selectedCategoryButton);
  }, [selectedCategoryButton]);

  const getStateData = (stateName: string) => {
    return staticDataRecoveryPerformance.states.find(
      (state: State) => state.state === stateName
    );
  };

  const arrTicks: any = (chartData: any[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (chartData && chartData.length > 0) {
      maxNum = Math.max(
        ...chartData.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 6; // You can adjust the number of ticks as needed
    let stepSize = maxNum / numberOfTicks;

    // Adjust maxNum to the next multiple of stepSize
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;

    let num1 = 0;

    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };
  // const arrTicks: any = (chartData: any[]): number[] => {
  //   let arr: number[] = [];
  //   let maxNum = 0;
  
  //   if (chartData && chartData.length > 0) {
  //     const numericValues = chartData.flatMap((item) => {
  //       return Object.values(item).filter(
  //         (value): value is number | undefined =>
  //           typeof value === "number" || value === undefined
  //       );
  //     }).filter((value): value is number => typeof value === "number");
  
  //     // If there are no numeric values, set maxNum to 0
  //     maxNum = numericValues.length > 0 ? Math.max(...numericValues) : 0;
  //   }
  
  //   const numberOfTicks = 6; // You can adjust the number of ticks as needed
  //   let stepSize = maxNum / numberOfTicks;
  
  //   // If stepSize is NaN or less than or equal to 0, set it to a default value
  //   if (isNaN(stepSize) || stepSize <= 0) {
  //     stepSize = 1; // Default step size
  //   }
  
  //   // Adjust maxNum to the next multiple of stepSize
  //   maxNum = Math.ceil(maxNum / stepSize) * stepSize;
  
  //   let num1 = 0;
  
  //   for (let i = 0; i <= numberOfTicks; i++) {
  //     arr.push(parseFloat(num1.toFixed(1)));
  //     num1 += stepSize;
  //   }
  
  //   return arr;
  // };
  
  const getChartData = (series: SeriesData[]) => {
    let chartData: any[] = new Array(allMonths.length)
      .fill(null)
      .map((_, i) => ({
        month: allMonths[i],
      }));

    series.forEach((seriesData) => {
      const startIndex = getStartIndex(seriesData.series.value.length);
      seriesData.series.value.forEach((value, index) => {
        chartData[startIndex + index][seriesData.series.sub_segment || "NULL"] =
          value;
      });
    });

    return chartData;
  };

  const selectedStateData =
    getStateData(selectedCategories) || staticDataRecoveryPerformance.states[0];
  const chartData = getChartData(selectedStateData.series);

  //unique pair
  const getStateUniqueData = (stateName: string) => {
    return staticDataUniqueAgency.states.find(
      (state: State) => state.state === stateName
    );
  };

  const getChartUniqueData = (series: SeriesData[]) => {
    let chartData: any[] = new Array(allMonths.length)
      .fill(null)
      .map((_, i) => ({
        month: allMonths[i],
      }));

    series.forEach((seriesData) => {
      const startIndex = getStartIndex(seriesData.series.value.length);
      seriesData.series.value.forEach((value, index) => {
        chartData[startIndex + index][seriesData.series.sub_segment || "NULL"] =
          value;
      });
    });

    return chartData;
  };

  const selectedStateUniqueData =
    getStateUniqueData(selectedCategories) || staticDataUniqueAgency.states[0];
  const chartUniqueData = getChartUniqueData(selectedStateUniqueData.series);
  const arrUniqueTicks: any = (chartUniqueData: any[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (chartUniqueData && chartUniqueData.length > 0) {
      maxNum = Math.max(
        ...chartUniqueData.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 10;
    let stepSize = maxNum / numberOfTicks;

    // Adjust maxNum to the next multiple of stepSize
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;

    let num1 = 0;

    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  return (
    <div className="w-full xl:w-[48%] h-[380px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      <div className="w-full flex justify-between px-0 mt-2 mb-3">
        <h1 className="text-center text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {activeButton === "$Recovery"
            ? "Recovery % (Coincidental)"
            : "Unique Payer %"}
        </h1>
        <div className="flex items-center flex-wrap gap-3 lg:gap-3">
          {selectedStateData.series.map((seriesData: any, index: any) => (
            <div className="flex items-center" key={index}>
              <div
                className="legend-color"
                style={{
                  backgroundColor: getColorBySubSegment(
                    seriesData.series.sub_segment
                  ),
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                {seriesData.series.sub_segment === null
                  ? "NULL"
                  : seriesData.series.sub_segment}
              </span>
            </div>
          ))}
        </div>
      </div>
      {activeButton === "$Recovery" && (
        <ResponsiveContainer width="99%" height={300}>
          <LineChart
            data={chartData}
            margin={{ left: 15, top: 25, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              fontWeight={400}
              fontSize={10}
              angle={-70}
              dy={20}
              dx={-4}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 25, right: 15 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              domain={[0, "dataMax"]}
              ticks={arrTicks(chartData)}
            />
            <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(2)}%` : value;
                return [formattedValue, `${name}`];
              }}
            />{" "}
            {selectedStateData.series.map((seriesData: any, index: any) => (
              <Line
                key={index}
                type="linear"
                dataKey={seriesData.series.sub_segment || "NULL"}
                name={seriesData.series.sub_segment || "NULL"}
                stroke={getColorBySubSegment(seriesData.series.sub_segment)}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
      {activeButton !== "$Recovery" && (
        <ResponsiveContainer width="99%" height={290}>
          <LineChart data={chartUniqueData} margin={{ left: 14, top: 8 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              fontWeight={400}
              fontSize={12}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 25, right: 25 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              domain={[0, "dataMax"]}
              ticks={arrUniqueTicks(chartUniqueData)}
            />
            <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(2)}%` : value;
                return [formattedValue, `${name}`];
              }}
            />{" "}
            {selectedStateUniqueData.series.map(
              (seriesData: any, index: any) => (
                <Line
                  key={index}
                  type="linear"
                  dataKey={seriesData.series.sub_segment || "NULL"}
                  name={seriesData.series.sub_segment || "NULL"}
                  stroke={getColorBySubSegment(seriesData.series.sub_segment)}
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 8 }}
                />
              )
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendsLineGraph;
