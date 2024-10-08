import React from "react";
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

interface ExpandRecoveryProps {
  selectedSegment: any;
}

interface SegmentData {
  low: number[];
  "medium/high": number[];
}

interface Data {
  [key: string]: {
    recovery: SegmentData;
  };
}


const data:any = {
  "MOB": {
    recovery: {
      low: [
       0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.596455331123726, 7.0393767761501165,
        5.205468661783539, 4.916365047221005
      ],
    "medium/high": [
        20.71910161291822, 21.211391589810404, 25.96191895555065, 36.813604055739525,
        20.51348014091158, 13.77174262090898, 0.0, 10.647114783529513, 13.648284201498125,
        15.146770279007734, 11.323847865619218, 13.520556490099963
      ],
      name:[
        "Mob 1", "Mob 2", "Mob 3", "Mob 4", "Mob 5", "Mob 6", "Mob 7", "Mob 8","Mob 9", "Mob 10", "Mob 11","Mob 12"
      ]
    }
  },
  "Interest Rate": {
    recovery: {
      low: [
        0.0, 0.0, 0.0, 0.0,  10.138026457444342, 9.079358541563787, 7.513657804115867, 7.307580783040672,
        5.857907935134298, 4.860041286038653, 6.5617137142657285, 5.702755170077327
      ],
      "medium/high": [
        0.0, 0.0, 0.0, 19.31856411213582, 18.87354812789674, 17.885273436884365, 17.73327660544831,
        17.896090060695197, 0.0, 13.490021119025778, 14.184554834491724, 14.958245524074046
      ],
      name:[
        "Int rate 1", "Int rate 2", "Int rate 3", "Int rate 4", "Int rate 5", "Int rate 6", "Int rate 7", "Int rate 8", "Int rate 9", "Int rate 10", "Int rate 11","Int rate 12"
      ]
    }
  },
  "POS": {
    recovery: {
      low: [
        0.0,0.0,0.0,0.0,
        10.637434226391623, 11.832401739018582, 8.335495705808956, 9.538992455901207,
        8.211236267675188, 7.551753272114816, 6.422445436908483, 5.142053588562383
      ],
      "medium/high": [
        0.0,0.0,0.0,0.0,
        35.890032370756714, 24.50482149389005, 20.779294521901022, 16.606226157025215,
        16.267739715494013, 14.293554177564241, 12.648173989206038, 11.336999700758817
      ],
      name:[
        "POS 1", "POS 2", "POS 3", "POS 4", "POS 5", "POS 6", "POS 7", "POS 8", "POS 9", "POS 10", "POS 11","POS 12"
      ]
    }
  },
  "Loan Term": {
    "recovery": {
        "low": [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0,
            6.369525533907174,
            7.292152438319034,
            5.937026464327063
        ],
        "medium/high": [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            15.710120734879233,
            0.0,
            22.175085934985006,
            17.859764820576025
        ],
        name:[
          "Loan Term 1", "Loan Term 2", "Loan Term 3", "Loan Term 4", "Loan Term 5", "Loan Term 6", "Loan Term 7", "Loan Term 8", "Loan Term 9", "Loan Term 10", "Loan Term 11","Loan Term 12"
        ]
    },
  },
  "Loan Amt": {
    "recovery": {
        "low": [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 
            8.788619552092191,
            11.450458691881089,
            7.1337221911666155,
            8.523773929668131,
            7.000433913852569,
            5.116161380252763
        ],
        "medium/high": [
          0.0, 0.0, 0.0, 0.0, 0.0, 
            23.41581619235017,
            22.931149820919515,
            18.923349320349043,
            17.638598299133104,
            0.0,
            16.81067041120372,
            13.976060515402997
        ],
        name:[
          "Loan amt 1", "Loan amt 2", "Loan amt 3", "Loan amt 4", "Loan amt 5", "Loan amt 6", "Loan amt 7", "Loan amt 8", "Loan amt 9", "Loan amt 10", "Loan amt 11","Loan amt 12"
        ]
    },
  }
};

const getColorBySubSegment = ["#FFB200", "#4169E1"];

const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}%`);

const ExpandRecovery: React.FC<ExpandRecoveryProps> = ({ selectedSegment }) => {

  const segmentData = data[selectedSegment as keyof typeof data]?.recovery;

  const chartData = segmentData
    ? Object.keys(segmentData.low).map((key, index) => ({
        name:  segmentData.name,
        Low: segmentData.low[index],
        "Medium/High": segmentData["medium/high"][index],
      }))
    : [];

    // const chartData = segmentData ? segmentData.low.map((lowValue:any, index:any) => ({
    //   name: segmentData.name,
    //   Low: lowValue,
    //   "Medium/High": segmentData["medium/high"][index],
    // })) : [];

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
  return (
    <div className="  w-[100%] xl:w-[30%]  h-[325px] bg-white shadow rounded-xl py-4 px-3 gap-3">
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Expected Recovery 
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
      <ResponsiveContainer width="99%" height={280}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 5, left: 5, bottom: 42 }}
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
            // dataKey="medium/high"
            fontWeight={400}
            fontSize={11}
            fill={"#3B414B"}
            fontFamily="DM Sans"
            domain={[0, "dataMax"]}
              ticks={arrTicks(chartData)}
            width={35}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatYAxisTick}
          />
         <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(1)}%` : value;
                return [formattedValue, `${name}`];
              }}
            />
          <Line
            type="linear"
            dataKey="Low"
            name="L"
            stroke={getColorBySubSegment[0]}
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="linear"
            dataKey="Medium/High"
            name="H/M"
            stroke={getColorBySubSegment[1]}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpandRecovery;
