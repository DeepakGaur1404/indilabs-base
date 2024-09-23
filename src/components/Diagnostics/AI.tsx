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

  const datakey:DataItem[] = [
    { name: "Low", percentage: 15 },
    { name: "Medium", percentage: 15 },
    { name: "High", percentage: 80 },
  ];

  const COLORS = ["#E5E3ED", "#C9C4D9", "#776BA1"];

const AI = () => {
    return (
        <div className="bg-white rounded-xl w-[36%] h-[325px] py-3 px-3 shadow -mt-[73px]">
            <p className="text-[black] text-center font-['DM Sans'] font-[500] text-[14px] leading-[21px] mt-2">Share of balances</p>
            <ResponsiveContainer width="100%" height={270}>
          <PieChart>
            <Pie
              data={datakey}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
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
        </div>
    )
};

export default AI