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

type DataItem = {
  [key: string]: { name: string; percentage: number }[];
};

interface AIProps {
  selectedSegment: any;
}

const datakey: DataItem = {
  MOB: [
    { name: "Payer", percentage: 47.59457071721147 },
    { name: "Non Payer", percentage: 52.40542928278853 },
  ],
  "Interest Rate": [
    { name: "Payer", percentage: 47.59457071721147 },
    { name: "Non Payer", percentage: 52.40542928278853 },
  ],
  POS: [
    { name: "Payer", percentage: 47.59457071721147 },
    { name: "Non Payer", percentage: 52.40542928278853 },
  ],
  "Loan Term": [
    { name: "Payer", percentage: 47.59457071721147 },
    { name: "Non Payer", percentage: 52.40542928278853 },
  ],
  "Loan Amt": [
    { name: "Payer", percentage: 47.59457071721147 },
    { name: "Non Payer", percentage: 52.40542928278853 },
  ],
};

const COLORS = ["#FFB200", "#4169E1"];


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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
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

const getColorBySubSegment = ["#FFB200", "#4169E1"];
const ShareOfBalances: React.FC<AIProps> = ({ selectedSegment},percentage) => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center border-[#E3E3E3] border-[1px]   w-[100%] xl:w-[49%]  h-[321px] py-3 px-3 ">
      <p className="text-[black] text-center font-['DM Sans'] font-[500] text-[14px] leading-[21px] mt-2">
        Share of balances
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={datakey[selectedSegment]}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={105}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="percentage"
          >
            {datakey[selectedSegment].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
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
                  Payer 
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
                  Non Payer
                </span>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ShareOfBalances;
