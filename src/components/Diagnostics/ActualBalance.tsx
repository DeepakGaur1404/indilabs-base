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

interface ActualBalanceProps {
  selectedSegment: string;
}

const data: any = {
  MOB: {
    balances: {
      low: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 470472866.78000087,
        406680798.3200004, 246587678.91999978, 273310122.0300001,
      ],
      "medium/high": [
        187993853.68, 307314374.7500003, 141893620.7800001, 39524589.6,
        213038811.59999982, 325362607.13999987, 544821.0, 436180064.78000003,
        185971597.85999995, 123119954.00000004, 67404248.19000004,
        69399864.62000002,
      ],
      name: [
        "Mob 1",
        "Mob 2",
        "Mob 3",
        "Mob 4",
        "Mob 5",
        "Mob 6",
        "Mob 7",
        "Mob 8",
        "Mob 9",
        "Mob 10",
        "Mob 11",
        "Mob 12",
      ],
    },
  },
  "Interest Rate": {
    balances: {
      low: [
        0.0, 0.0, 0.0, 0.0, 8547758.32, 64267128.27, 195661537.3400001,
        257162391.7399998, 285262206.1499998, 176111514.62000003,
        208591163.61999995, 201447765.98999998,
      ],
      "medium/high": [
        0.0, 0.0, 0.0, 114968853.85000008, 206902254.39, 300588090.52999985,
        355918974.56, 404076733.38000005, 544821.0, 268418177.03999996,
        245837206.07999986, 200493297.16999996,
      ],
      name: [
        "Int rate 1",
        "Int rate 2",
        "Int rate 3",
        "Int rate 4",
        "Int rate 5",
        "Int rate 6",
        "Int rate 7",
        "Int rate 8",
        "Int rate 9",
        "Int rate 10",
        "Int rate 11",
        "Int rate 12",
      ],
    },
  },
  POS: {
    balances: {
      low: [
        0.0, 0.0, 0.0, 0.0, 1853473.27, 3657752.75, 28146592.389999993,
        57631640.61000003, 139112789.69000012, 178774103.48999998,
        503431653.84000015, 484443460.01000047,
      ],
      "medium/high": [
        0.0, 0.0, 0.0, 0.0, 148581043.27999988, 68745064.81999998,
        253433386.02999973, 247338924.7599998, 326433530.71, 301236936.06999993,
        473035164.61000013, 278944357.71999997,
      ],
      name: [
        "POS 1",
        "POS 2",
        "POS 3",
        "POS 4",
        "POS 5",
        "POS 6",
        "POS 7",
        "POS 8",
        "POS 9",
        "POS 10",
        "POS 11",
        "POS 12",
      ],
    },
  },
  "Loan Term": {
    balances: {
      low: [
        0.0,
        0.0,
        0.0,
        0.0,
        ,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        721495866.7699995,
        337698813.0499999,
        337856786.2299998,
      ],
      "medium/high": [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1521322963.6700008, 544821.0,
        224071968.45000005, 351808654.88000035,
      ],
      name: [
        "Loan Term 1",
        "Loan Term 2",
        "Loan Term 3",
        "Loan Term 4",
        "Loan Term 5",
        "Loan Term 6",
        "Loan Term 7",
        "Loan Term 8",
        "Loan Term 9",
        "Loan Term 10",
        "Loan Term 11",
        "Loan Term 12",
      ],
    },
  },
  "Loan Amt": {
    balances: {
      low: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 9016319.290000001, 8701869.739999998,
        14397042.280000001, 163362478.11000013, 659409000.9000002,
        542164755.7300003,
      ],
      "medium/high": [
        0.0, 0.0, 0.0, 0.0, 0.0, 57388080.26000003, 89459460.56,
        85739354.03999999, 415121973.969999, 544821.0, 901053091.2499988,
        548441626.9200004,
      ],
      name: [
        "Loan amt 1",
        "Loan amt 2",
        "Loan amt 3",
        "Loan amt 4",
        "Loan amt 5",
        "Loan amt 6",
        "Loan amt 7",
        "Loan amt 8",
        "Loan amt 9",
        "Loan amt 10",
        "Loan amt 11",
        "Loan amt 12",
      ],
    },
  },
};

const getColorBySubSegment = [ "#FFB200","#4169E1"];

const formatYAxisTick = (tick: any) => {
  if (tick === 0) {
    return `${tick}`;
  } else {
    return `${tick}`;
  }
};
const ActualBalance: React.FC<ActualBalanceProps> = ({ selectedSegment }) => {
  const segmentData = data[selectedSegment as keyof typeof data]?.balances;

  const chartData = segmentData
    ? Object.keys(segmentData.low).map((key, index) => ({
        name: segmentData.name,
        Low: segmentData.low[index],
        "Medium/High": segmentData["medium/high"][index],
      }))
    : [];
    
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

    const numberOfTicks = 6;
    let stepSize = maxNum / numberOfTicks;
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    let num1 = 0;
    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2); // You can adjust this if needed
    }
  };

  return (
    <div className="w-[30%] h-[325px] bg-white shadow rounded-xl py-4 px-3 gap-3 -mt-[73px]">
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
                  width: "12.48px",
                  height: "12.48px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">
                L
              </span>
            </div>
            <div className="flex items-center">
              <div
                className="legend-color"
                style={{
                  backgroundColor: getColorBySubSegment[1],
                  width: "12.48px",
                  height: "12.48px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">
                H/M
              </span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          //   width={200}
          //   height={100}
          data={chartData}
          margin={{
            top: 20,
            right: 5,
            left: 5,
            bottom: 50,
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
            padding={{ left: 10, right: 10 }}
            angle={-70}
            dy={0}
            dx={-4}
            textAnchor="end"
          />
          <YAxis
            fontWeight={400}
            fontSize={9}
            fill={"#3E4259"}
            fontFamily="DM Sans"
            domain={[0, "dataMax"]}
            ticks={arrTicks(chartData)}
            width={35}
            tickLine={false}
            axisLine={false}
            // tickFormatter={formatYAxisTick}
            tickFormatter={formatNumberMillion}
          />
          {/* <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(1)}` : value;
                return [formattedValue, `${name}`];
              }}
            /> */}
          <Tooltip
            formatter={(value: any, name) => {
              const formattedValue =
                typeof value === "number" && name === "L"
                  ? `${Math.floor(value).toLocaleString()}`
                  : typeof value === "number"
                  ? `${Math.floor(value).toLocaleString()}`
                  : `${parseFloat(value.toFixed(2)).toLocaleString()}`;
              return [formattedValue, `${name}`];
            }}
          />
          <Bar
            dataKey="Low"
            fill="#FFB200"
            name="L"
            barSize={10}
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="Medium/High"
            name="H/M"
            fill="#4339F2"
            barSize={10}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActualBalance;
