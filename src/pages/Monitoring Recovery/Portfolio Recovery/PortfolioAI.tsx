import AIinsight from "../../../assets/images/AIInsightvector.svg";
import closeAI from "../../../assets/images/closeAI.svg";
import React from "react";


interface PortfolioAIprops {
    onClose: any;
  }

const PortfolioAI: React.FC<PortfolioAIprops> = ({ onClose }) => {
  return (
    <div className="w-[780px] fixed  p-4  bg-gradient-to-r from-[rgba(138,199,255,0.12)] via-[rgba(122,22,252,0.12)] to-[rgba(255,158,69,0.12)]"    >
      <div className="flex justify-between">
      <div className="flex gap-[8px]">
        <img src={AIinsight} alt="AI Insight" />
        <p className="text-[#5C4E8E] font-['DM Sans'] font-bold text-[14px]">AI Insight</p>
      </div>
      <div     onClick={onClose}  className="flex cursor-pointer gap-[4px] items-center" aria-label="Close modal">
        <img src={closeAI} alt="Close" />
        <p className="text-[#5C4E8E] font-['DM Sans'] font-bold text-[14px]">Close</p>
      </div>
    </div>
    <ul className="text-gray-600 list-disc pl-5 mt-2 gap-5">
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
        The "Hotspots" section seems to track performance indicators with defined target ranges, aiming to stay within the green zones.
      </li>
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
        The "Diagnostics" section seems to evaluate financial impacts with certain business aspects, like portfolio flow and credit quality, against set targets, indicating areas of profit or loss.
      </li>
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
        Overall, while certain indicators like "1-2%" and "RPC %" are within target ranges, there are significant losses in areas such as portfolio flow and production hours, suggesting a need for strategic adjustments in these areas.
      </li>
    </ul>
      </div>
  
  );
};

export default PortfolioAI;