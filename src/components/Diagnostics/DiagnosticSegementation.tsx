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

const datakeyAccounts: DataItem[] = [
  { name: "Low Payer", percentage: 23.178861135651754 },
  { name: "High / Medium Payer", percentage: 76.82113886434824 },
];

const datakeyBalances: DataItem[] = [
  { name: "Low Payer", percentage: 39.97514926172313 },
  { name: "High / Medium Payer", percentage: 60.02485073827686 },
];

const bardata = [
  { name: "Low Payer", percentage: 6.487951568189118, fill: "#fcb400" },
  {
    name: "High / Medium Payer",
    percentage: 16.757110765019835,
    fill: "#4c74e6",
  },
];

const COLORS = ["#FFB200", "#4169E1"];
const getColorBySubSegment = ["#FFB200", "#4169E1"];

const renderCustomizedLabel = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    innerRadius,
    percent,
    value,
    payload,
  } = props;
  const RADIAN = Math.PI / 180; // Declare RADIAN here
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const formatYAxisTick = (tick: any) => {
  if (tick === 0) {
    return `${tick}%`;
  } else {
    return `${tick}%`;
  }
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
const DiagnosticSegementation = () => {
  return (
    <div className="bg-[white] w-[100%] mt-6 ml-2 shadow rounded-xl p-4 gap-4">
      <p className="text-[#000000] font-['DM Sans'] font-[700] text-[16px] leading-[21px]">
        Segmentation Results
      </p>
      <div className="flex flex-row  lg:flex-row sm:flex-col max-sm:flex-col justify-between items-center gap-4 mt-5">
        <div className="w-[36%] lg:w-[36%] sm:w-[100%] max-sm:w-[100%] h-[346px] border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[12px] sm:py-1 lg:py-4 py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
            Accounts
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={datakeyAccounts}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="percentage"
              >
                {datakeyAccounts.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    stroke="#ffffff"
                    strokeWidth={3}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue =
                    typeof value === "number" ? `${value.toFixed(2)}%` : value;
                  return [formattedValue, `${name}`];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
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
                  Low Payer
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
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36%] lg:w-[36%] sm:w-[100%]  max-sm:w-[100%]  h-[346px]  border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[12px] sm:py-1 lg:py-4  py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
            Balances
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={datakeyBalances}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="percentage"
              >
                {datakeyBalances.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    stroke="#ffffff"
                    strokeWidth={3}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue =
                    typeof value === "number" ? `${value.toFixed(2)}%` : value;
                  return [formattedValue, `${name}`];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
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
                  Low Payer
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
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36%] lg:w-[36%] sm:w-[100%]  max-sm:w-[100%]  h-[346px]  border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[12px] sm:py-1 lg:py-4  py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
            Performance
          </p>

          <ResponsiveContainer width="99%" height={250}>
            <BarChart
              layout="vertical"
              data={bardata}
              margin={{
                top: 5,
                right: 15,
                left: -40,
                bottom: 1,
              }}
            >
              <CartesianGrid horizontal={false} strokeDasharray="3 3" />
              <XAxis
                type="number"
                domain={[0, 20]}
                ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                fontWeight={400}
                fontFamily="DM Sans"
                fontSize={10}
                tickFormatter={formatYAxisTick}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tick={false}
              />
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue =
                    typeof value === "number" ? `${value.toFixed(2)}%` : value;
                  return [formattedValue, `${name}`];
                }}
              />
              <Bar dataKey="percentage" barSize={45} radius={[5, 5, 5, 5]} />
            </BarChart>
          </ResponsiveContainer>
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
                  Low Payer
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
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticSegementation;
