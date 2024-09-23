import React from "react";
import NewDiagnostics from "./NewDiagnostics";

type Top5DriversProps = {
  onDriverClick: (driver: string) => void; 
  selectedSegment: string; 
};

const driverData = [
  { driver: "MOB", value: 80 },
  { driver: "Interest Rate", value: 90 },
  { driver: "Loan Term", value: 70 },
  { driver: "POS", value: 60 },
  { driver: "Loan Amt", value: 40 },
];

const Top5Drivers: React.FC<Top5DriversProps> = ({ onDriverClick, selectedSegment }) => {
  return (
    <div className="flex flex-col w-[30%] gap-3">
     <NewDiagnostics />
        <div className="w-[100%] shadow h-[325px] bg-white rounded-xl  px-3 gap-3">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] px-[2px] mt-4 leading-[21px]">
        Top 5 Drivers (SHAP values)
      </p>
      <div className="space-y-1 mt-2">
        {driverData.map((driver: any) => (
          <div
            key={driver.driver} 
            className={`flex justify-between items-center h-[50px] cursor-pointer rounded-lg px-2 ${
              selectedSegment === driver.driver ? "border-violet-600 border-2" : ""
            }`}
            onClick={() => onDriverClick(driver.driver)} 
          >
            <p className="w-[40%] text-[black] font-['DM Sans'] font-[400] text-[14px] leading-[21px]">
              {driver.driver}
            </p>

            <div className="w-[60%] overflow-hidden">
              <div
                className="bg-[#4169E1] h-[16px] rounded-md"
                style={{ width: `${driver.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Top5Drivers;
