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
  ReferenceLine,
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
        0, 0.2, 0.4, 0.6, 0.8, 1
      ],
    "medium/high": [
        0.0, 0.82, 0.86, 0.90, 0.96, 1
      ],
      name:[
       0, 0.2, 0.4, 0.6, 0.8, 1
      ]
    }
  },
  "Interest Rate": {
    recovery: {
      low: [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ],
    "medium/high": [
        0.0, 0.82, 0.86, 0.90, 0.96, 1
      ],
      name:[
       0, 0.2, 0.4, 0.6, 0.8, 1
      ]
    }
  },
  "POS": {
    recovery: {
      low: [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ],
    "medium/high": [
        0.0, 0.82, 0.86, 0.90, 0.96, 1
      ],
      name:[
       0, 0.2, 0.4, 0.6, 0.8, 1
      ]
    }
  },
  "Loan Term": {
    recovery: {
      low: [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ],
    "medium/high": [
        0.0, 0.82, 0.86, 0.90, 0.96, 1
      ],
      name:[
       0, 0.2, 0.4, 0.6, 0.8, 1
      ]
    }
  },
  "Loan Amt": {
    recovery: {
      low: [
        0, 0.2, 0.4, 0.6, 0.8, 1
      ],
    "medium/high": [
        0.0, 0.82, 0.86, 0.90, 0.96, 1
      ],
      name:[
       0, 0.2, 0.4, 0.6, 0.8, 1
      ]
    }
  }
};

const getColorBySubSegment = ["#FFB200", "#4169E1"];

const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}%`);

const AUCROCCurve: React.FC<ExpandRecoveryProps> = ({ selectedSegment }) => {

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
  
      const numberOfTicks = 5; 
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
    <div className="  w-[100%] xl:w-[100%]  h-[390px] bg-white shadow rounded-xl py-4 px-3 gap-3">
        <div className="border border-[#E3E3E3] rounded-lg p-2"
    //   style={{
    //     border: "1px solid #E3E3E3",
    //     borderRadius: "8px",
    //     padding: "10px",
    //   }}
    >
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
        AUC-ROC Curve
        </p>
        <div className="flex items-center flex-wrap gap-3 lg:gap-3">
          <div className=" flex items-center gap-3">
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
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              AUC-ROC Curve
              </span>
            </div>
            
            <div className="flex items-center">
            <div
              className="legend-line"
              style={{
                width: "25px", // Length of the line
                height: "6px", // No height for a horizontal line
                marginRight: "5px",
                borderBottom: "4px dashed #E51B1B", // Dotted horizontal line
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Random Classifier
            </span>
          </div>
            
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="99%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 5, left: 15, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
           label={{
            value: "False Positive Rate",
            position: "insideBottom",
            offset: -20,
            fontSize: 12,
            fontFamily: "DM Sans",
          }}
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
          label={{
            value: "True Positive Rate",
            angle: -90, // Rotate the label vertically
            position: "insideLeft", // Keep the label inside the chart, aligned left
            offset: 0, // Adjust this to move the label closer or further from the Y-axis
            dx: -8, // Fine-tune horizontal positioning
            dy: 8, // Fine-tune vertical positioning (should help center it)
            fontSize: 12,
            fontFamily: "DM Sans",
            fill: "#3B414B",
            style: { textAnchor: "middle" }, // Ensure label is centered properly
          }}
             dataKey="medium/high"
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
          {/* <Line
            type="linear"
            dataKey="Low"
            name="L"
            stroke={getColorBySubSegment[0]}
            dot={false}
            strokeWidth={2}
          /> */}
           <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 5, y: 1 }]} stroke="#E51B1B" strokeDasharray="5 5"  strokeWidth={2} /> 
          <Line
            type="linear"
            dataKey="Medium/High"
            name="AUC-ROC Curve"
            stroke={getColorBySubSegment[1]}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AUCROCCurve;
