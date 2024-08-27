import { IoIosArrowForward } from "react-icons/io";
import downorangeArrow from "../../assets/icons/down-orange-shift.svg";

import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  percentage: number;
}

const datakey: DataItem[] = [
  { name: "Payment%", percentage: 5 },
  { name: "Contacts", percentage: 10 },
  { name: "No Contacts", percentage: 85 },
];

// interface DataKey {
//   name:string;
//   uv: number;
//   pv: number;
// }

const data = [
  {
    name: "Jan",
    uv: 5.3,
    pv: 3.1,
  },
  {
    name: "Feb",
    uv: 5.1,
    pv: 3,
  },
  {
    name: "Mar",
    uv: 3.8,
    pv: 5.3,
  },
  {
    name: "Apr",
    uv: 5.1,
    pv: 3,
  },
  {
    name: "May",
    uv: 4.9,
    pv: 2.9,
  },
  {
    name: "Jun",
    uv: 5.1,
    pv: 3,
  },
];

const COLORS = ["#E5E3ED", "#C9C4D9", "#776BA1"];
const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const Execution = () => {
  return (
    <div className="w-[32%] h-full rounded-xl shadow p-4 gap-3 bg-[#E8F3ED]">
      <div className="border border-[#9F90D4] bg-white w-max px-[8px] py-[4px] rounded-[4px] customClassExecutionSeventh cursor-pointer">
        <p className="font-[400] text-black text-center text-[13px] font-['DM Sans'] w-[60px] h-[16px] -mt-[2px] leading-4 customClassSeventh">
          Execution
        </p>
      </div>
      <div className="bg-white p-1 h-[116px] rounded-xl mt-4 flex flex-col items-center">
        <span className="font-['DM Sans'] text-[32px] text-[#EF4444] font-[500] customClassThird">
          10%
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500] ">
          Recovery Rate
        </p>
        <div className="flex items-center gap-1">
          <img
            src={downorangeArrow}
            alt=""
            className="w-[14px] h-[14px] customClass"
          />
          <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
            -5 vs last month
          </p>
        </div>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Risk to Plan: $15Ok
        </p>
      </div>
      <div className="h-[364px] p-2  w-[100%] bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-3  w-[100%]">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Key Results
          </p>
          <button className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird">
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={datakey}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="percentage"
            >
              {datakey.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-2 -mt-6">
          <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#E5E3ED] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              Payment%: <span className="ml-[2px]">5%</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#C9C4D9] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              Contacts%: <span className="ml-[2px]">10%</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#776BA1] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              No Contacts%: <span className="ml-[2px]">85%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[364px] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-3">
          <p className="font-[DM Sans] text-[#000000] font-[500] text-[14px] leading-[18px] customClassThird">
            Operational Controls
          </p>
          <button className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird">
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center w-[100%]">
          <ResponsiveContainer
            width={360}
            height={280}
            className="mr-12 mt-2 w-[100%]"
          >
            <BarChart
              // width={400}
              // height={100}
              data={data}
              // margin={{
              //   top: 20,
              //   right: 30,
              //   left: 20,
              //   bottom: 5,
              // }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                // className="text-[#3B414B] text-[10px] font['DM Sans'] font-[400]"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 10]}
                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                // className="text-[#3B414B] text-[9px] font['DM Sans'] font-[400]"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3E4259"}
              />
              <Tooltip />
              <Bar
                dataKey="pv"
                stackId="a"
                fill="#4339F2"
                barSize={10}
                radius={[0, 0, 10, 10]}
              />
              <Bar
                dataKey="uv"
                stackId="a"
                fill="#FFB200"
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#4339F2] rounded-xl"></div>
              <div className="text-[12px] font-[400] text-[#000000] font-['DM Sans'] customClassThird">
                Within CL
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FFB200] rounded-xl"></div>
              <div className="text-[12px] text-[#000000] font-[400] font-['DM Sans'] customClassThird">
                Exceed CL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;
