import React, { useState, useEffect } from "react";

const driverData = [
  { driver: "MOB", value: 80 },
  { driver: "Interest Rate", value: 90 },
  { driver: "Loan Term", value: 70 },
  { driver: "POS", value: 60 },
  { driver: "Loan Amount", value: 40 },
];

const Top5Drivers = () => {
  const [activeDriver, setActiveDriver] = useState("MOB");

  // Handle driver click
  const handleHotspotClick = (driver: any) => {
    setActiveDriver(driver);
  };

  const [selectedSegment, setSelectedSegment] = useState("MOB");
  
  return (
    <>
      
        <div className="w-[30%] shadow h-[325px] bg-white rounded-xl  px-3 gap-3">
          <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px] py-3">
            Top 5 Drivers (SHAP values)
          </p>
          <div className="space-y-1  mt-2">
            {driverData.map((driver) => (
              <div
                className={`flex justify-between items-center h-[50px] cursor-pointer rounded-lg px-2  ${
                  activeDriver === driver.driver
                    ? "border-violet-600 border-2 "
                    : ""
                }`}
                onClick={() => handleHotspotClick(driver.driver)}
              >
                <p className="w-[40%] text-[black] font-['DM Sans'] font-[400] text-[14px] leading-[21px]">{driver.driver}</p>

                <div className="w-[60%]  overflow-hidden">
                  <div
                    className="bg-[#4169E1] h-[16px] rounded-md"
                    style={{ width: `${driver.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default Top5Drivers;
