import React, { PureComponent } from "react";
import { BarChart } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";

const data = [
  {
    name: "mob_1",
    L: 1800,
    Total: 2300,
  },
  {
    name: "mob_2",
    L: 1800,
    Total: 2200,
  },
  {
    name: "mob_3",
    L: 2100,
    Total: 2450,
  },
  {
    name: "mob_4",
    L: 1700,
    Total: 2300,
  },
  {
    name: "mob_5",
    L: 1600,
    Total: 2100,
  },
];

const getColorBySubSegment = ["#4169E1", "#FFB200"];

const formatYAxisTick = (tick: any) => {
  if (tick === 0) {
    return `${tick}`;
  } else {
    return `${tick}`;
  }
};
const ActualBalance = () => {
  return (
    <div className="w-[30%] h-[325px] shadow bg-white rounded-xl py-4 px-3 gap-3">
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Actual Balances
        </p>
        <div className="flex items-center flex-wrap gap-3 lg:gap-3">
          <div className=" flex items-center gap-3">
            <div className="flex items-center">
              <div
                className="legend-color"
                style={{
                  backgroundColor: getColorBySubSegment[0],
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                L
              </span>
            </div>
            <div className="flex items-center">
              <div
                className="legend-color"
                style={{
                  backgroundColor: getColorBySubSegment[1],
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                Total
              </span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          //   width={200}
          //   height={100}
          data={data}
          margin={{
            top: 20,
            right: 5,
            left: 5,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            fontWeight={400}
            fontFamily="DM Sans"
            fontSize={11}
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
            // padding={{ left: 20, right: 25 }}
          />
          <YAxis
            fontWeight={400}
            fontSize={9}
            fill={"#3E4259"}
            fontFamily="DM Sans"
            // domain={[0, 18]}
            ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
            width={35}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />

          <Bar
            dataKey="L"
             fill="#4339F2"
            barSize={10}
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="Total"
          
               fill="#FFB200"
          
            barSize={10}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActualBalance;
