import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ComposedChart,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 2.8,
    pv: 200,
    amt: 5.1,
  },
  {
    name: "Feb",
    uv: 3.1,
    pv: 225,
    amt: 5.5,
  },
  {
    name: "Mar",
    uv: 3.8,
    pv: 260,
    amt: 4.9,
  },
  {
    name: "Apr",
    uv: 2.8,
    pv: 200,
    amt: 5,
  },
  {
    name: "May",
    uv: 2.8,
    pv: 198,
    amt: 5.3,
  },
  {
    name: "Jun",
    uv: 2.8,
    pv: 198,
    amt: 4.9,
  },
  // {
  //   name: "Jul",
  //   uv: 3.1,
  //   pv: 225,
  //   amt: 5.5,
  // },
];

const StrategyOptimisation = () => {
  // const formatYAxisTick = (tick: any) => `${tick}%`;
  const navigate = useNavigate();

  const handleHotspotReviewClick = () => {
    navigate("/strategy/recovery");
  };

  const handleStrategyReviewClick = () => {
    navigate("/strategy/recovery");
  };

  return (
    <div className="w-[32%] h-full rounded-xl shadow p-4 gap-3  bg-[#FFF8F2]">
      <div className="border border-[#9F90D4] bg-white w-max px-[8px] customClassStrategyOptimisationSixth rounded-[4px] cursor-pointer">
        <p className="font-[400] text-black text-center text-[13px] font-['DM Sans'] w-[130px] h-[20px] mt-1 leading-4 customClassSixth">
          Strategy Optimisation
        </p>
      </div>
      <div className="bg-white h-[116px] p-1 rounded-xl mt-4 flex flex-col items-center ">
        <span className="font-['DM Sans'] text-[32px] text-[#10B981] font-[500] customClassThird">
          5.1
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500] ">ROI Value</p>
        <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
          -10 vs last month
        </p>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Improvement Opportunity: $15Ok
        </p>
      </div>
      <div className="h-[364px] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] text-[#000000] customClassThird">
            Return on Investment
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] mr-1 customClassThird"
            onClick={handleStrategyReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center mt-1 w-[100%]  rounded-xl">
          <ComposedChart
            width={400}
            height={280}
            data={data}
            // margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            barGap={0}
            barCategoryGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontWeight={400}
              fontSize={10}
              fontFamily="DM Sans"
              fill={"#3B414B"}
            />
            <YAxis
              yAxisId="left"
              interval={0}
              // padding={{ top: 0, bottom: 0 }}
              axisLine={false}
              tickLine={false}
              // label={{
              //   value: `$ Writeoff, Recovery`,
              //   angle: -90,
              //   position: "insideLeft",
              //   fontFamily: "roboto",
              //   fontSize: "15px",
              //   dy: 60,
              //   fontWeight: "bold",
              // }}
              fontWeight={400}
              fontSize={9}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              ticks={[0, 50, 100, 150, 200, 250, 300]}
              domain={[0, 300]}

              // className="text-[#3B414B] text-[9px] font['DM Sans'] font-[400]"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              interval={0}
              tickLine={false}
              // padding={{ top: 0, bottom: 0,}}
              axisLine={false}
              // label={{
              //   value: `%Monthly Recovery Rate`,
              //   angle: -90,
              //   position: "outside",
              //   fontFamily: "roboto",
              //   fontSize: "15px",
              //   dy: -20,
              //   dx: 20,
              //   fontWeight: "bold",
              // }}
              ticks={[0, 1, 2, 3, 4, 5, 6]}
              domain={[0, 6]}
              fontWeight={400}
              fontSize={9}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              // className="text-[#3B414B] text-[9px] font['DM Sans'] font-[400]"
            />
            <Tooltip />
            <Bar
              dataKey="pv"
              fill="#FFB200"
              yAxisId="left"
              barSize={10}
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="uv"
              fill="#4339F2"
              yAxisId="right"
              barSize={10}
              radius={[10, 10, 10, 10]}
            />
            <Line
              type="linear"
              dataKey="amt"
              yAxisId="right"
              stroke="#FF7A00"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#4339F2] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
                $Cost
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FFB200] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#493b3b] customClassThird">
                $Liquidated
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FF7A00] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
                Rol
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[364px] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Segmentation
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird"
            onClick={handleHotspotReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <table className="w-[100%] p-2">
          <thead>
            <tr className="border-b-[1px] border-[#F3F4F6] flex justify-between text-left p-3">
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[87px] ">
                Segments
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[38px]">
                Volume
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[52px]">
                Current KPI
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[52px]">
                Benchmark
              </th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col  ">
            <tr className="border-b-[1px] border-[#F3F4F6] flex justify-between  p-3">
              <td className="text-start text-[#161D29] font-[400] text-[12px]  font-['DM Sans'] w-[87px]">
                Very High Payer
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[38px]">
                12000
              </td>
              <td className="text-center text-[#161D29] font-[400]  text-[12px] font-['DM Sans'] w-[52px]">
                65%
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[52px]">
                68%
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#F3F4F6]  flex justify-between p-3">
              <td className="text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[87px] ">
                High Payer
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[38px]">
                6200
              </td>
              <td className="text-center text-[#161D29] font-[400]  text-[12px] font-['DM Sans']   w-[52px] ">
                35%
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[52px]">
                30%
              </td>
            </tr>
            <tr className="  border-b-[1px] border-[#F3F4F6] flex justify-between p-3">
              <td className="text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[87px]">
                Medium Payer
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[38px]">
                2455
              </td>
              <td className="text-center text-[#ffffff] font-[700]  text-[12px] font-['DM Sans'] ">
                <div className="relative bottom-1 bg-[#10B981] rounded-sm  py-1  w-[52px] customClassSecond ">
                  25%
                </div>
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[52px]">
                20%
              </td>
            </tr>
            <tr className="  border-b-[1px] border-[#F3F4F6] flex justify-between p-3">
              <td className="text-start text-[#161D29] font-[400] text-[12px]  font-['DM Sans'] w-[87px]">
                Low Payer
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[38px]">
                8000
              </td>
              <td className="text-center text-[#ffffff] font-[700]  text-[12px] font-['DM Sans']  ">
                <div className="relative bottom-1 w-[52px] bg-[#F9C700] rounded-sm py-1 customClassSecond">
                  20%
                </div>
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[52px]">
                18%
              </td>
            </tr>
            <tr className=" flex justify-between p-3">
              <td className="text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[87px]">
                H Balance
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[38px]">
                1560
              </td>
              <td className="text-center text-[#ffffff] font-[700]  text-[12px] font-['DM Sans'] ">
                <div className="relative bottom-1 w-[52px] bg-[#F9C700] rounded-sm  py-1 customClassSecond">
                  20%
                </div>
              </td>
              <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[52px]">
                18%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StrategyOptimisation;
