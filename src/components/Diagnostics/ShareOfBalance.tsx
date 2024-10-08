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
interface AIProps {
  selectedSegment: any;
}

const ShareOfBalances: React.FC<AIProps> = ({ selectedSegment }) => {
  return (
    <div className="bg-white rounded-xl   w-[100%] xl:w-[36%]  h-[325px] py-3 px-3 shadow xl:-mt-[73px]">
      <p className="text-[black] text-center font-['DM Sans'] font-[500] text-[14px] leading-[21px] mt-2">
        Share of balances
      </p>
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            data={datakey[selectedSegment]}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
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
    </div>
  );
};

export default ShareOfBalances;
