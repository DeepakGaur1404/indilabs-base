import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "mob_1",
    L: 10,
    "H/M": 7.9,
  },
  {
    name: "mob_2",
    L: 12,
    "H/M": 10,
  },
  {
    name: "mob_3",
    L: 14,
    "H/M": 6,
  },
  {
    name: "mob_4",
    L: 10,
    "H/M": 8,
  },
  {
    name: "mob_5",
    L: 12.1,
    "H/M": 7.9,
  },
];

const getColorBySubSegment = ["#FFB200", "#34B53A"];

const formatYAxisTick = (tick: any) => {
  if (tick === 0) {
    return `${tick}`;
  } else {
    return `${tick}%`;
  }
};
const ExpandRecovery = () => {
  return (
    <div className="w-[30%] h-[325px] shadow bg-white rounded-xl py-4 px-3 gap-3">
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Expected Recovery @ 6mnths
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
                H/M
              </span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer  width="99%"  height={300} >
        <LineChart
            // width={350}
            // height={300}
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
            padding={{ left: 20, right: 25 }}
          />
          <YAxis
            dataKey="H/M"
            fontWeight={400}
            fontSize={11}
            fill={"#3B414B"}
            fontFamily="DM Sans"
            domain={[0, 16]}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
            width={25}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatYAxisTick}
          />
          <Tooltip />

          <Line type="linear" dataKey="L" stroke="#FFB200" dot={false}  strokeWidth={2}/>
          <Line type="linear" dataKey="H/M" stroke="#34B53A" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpandRecovery;
