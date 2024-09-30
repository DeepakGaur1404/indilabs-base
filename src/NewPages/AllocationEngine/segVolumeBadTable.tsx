import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  showButtons?: any;
  setSelectedSegment: any;
};

function SegVolumeBadTable(props: Props) {
  const [activeData, setActiveData] = useState<any>();
  const navigate = useNavigate();
  const { showButtons } = props;
  console.log("activeData value", activeData);

  const tableData = [
    {
      segment: "Very High Risk",
      Value: "15%",
      Bad: "65%",
      Performance: "Review",
      id: 0,
    },
    {
      segment: "High Risk",
      Value: "20%",
      Bad: "35%",
      Performance: "Review",
      id: 1,
    },
    {
      segment: "Medium Risk",
      Value: "6%",
      Bad: "20%",
      Performance: "Review",
      id: 2,
    },
    {
      segment: "Low Risk",
      Value: "6%",
      Bad: "20%",
      Performance: "Review",
      id: 3,
    },
    {
      segment: "H Balance",
      Value: "13%",
      Bad: "18%",
      Performance: "Review",
      id: 4,
    },
  ];

  const onClickButtons = (id: number, segment: string) => {
    console.log(segment);

    // if (segment == "Medium Risk") {
    //   // alert("ajsahsahsajhgs");
    //   props.setSelectedSegment("Medium Risk");
    // } else {
    //   props.setSelectedSegment("Very High Risk");
    // }
    props.setSelectedSegment(segment);
    setActiveData(id);
    showButtons(id);
    localStorage.setItem("segment", JSON.stringify(segment));
  };

  const navigateToReviewPerformance = () => {
    navigate("/strategy/allocationEngine/reviewPerformance/recovery");
  };

  return (
    <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%]  xl:w-[43%] bg-white pt-3 pl-3 pr-3 -ml-2 rounded-xl border-2 lg:ml-1 overflow-x-auto">
      <h1 className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] mb-1 leading-[18px]">
        Segmentation
      </h1>
      <table className="w-full" cellPadding={16}>
        <thead>
          <tr className="border-b-[1px] border-[#F3F4F6] flex justify-between">
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[30%] text-start">
              Segment
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%] ">
              Value
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%]">
              Bad%
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%]">
              Performance
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tableData.map((each, idx) => (
            <tr
              onClick={() => {
                onClickButtons(each.id, each.segment);
              }}
              className={` h-[60px] rounded-xl mt-[10px] text-center flex justify-between items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ${
                each.id !== activeData
                  ? "border-b-[1px] border-[#F3F4F6]"
                  : null
              }
               ${
                 each.id === activeData &&
                 "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
               } 
              
              cursor-pointer `}
            >
              <td className="text-left  w-[30%] ">{each.segment}</td>
              <td className="text-center w-[24%]">
                {each.Value}
              </td>
              <td className= "text-center  w-[24%]">
                {each.Bad}
              </td>
              <td
                className="text-[#6750A4] text-[12px]  font-[500] font-['DM Sans' !important] w-[24%]"
                onClick={() => {
                  navigateToReviewPerformance();
                }}
              >
                {each.Performance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SegVolumeBadTable;
