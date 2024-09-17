import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import graphBallAll from "../../assets/images/graphBallAll.png";
import graphBallOrigination from "../../assets/images/graphBallOrigination.png";
import graphBallPortfolio from "../../assets/images/graphBallPortfolio.png";
import graphBallCollections from "../../assets/images/graphBallCollections.png";
import graphBallRecovery from "../../assets/images/graphBallRecovery.png";
import { useNavigate } from "react-router-dom";
import UporangeArrow from "../../assets/icons/shift-orange.svg";
import arrow from "../../assets/images/HotspotArrow.svg";
import SentinelImage from "../../assets/images/Sentinel.svg";

const Riskmonitoringscore = [
  {
    Categories: "All",
    JulRiskScore: graphBallCollections,
    JunRiskScore: graphBallAll,
    id: 0,
  },
  {
    Categories: "Portfolio",
    JulRiskScore: graphBallRecovery,
    JunRiskScore: graphBallPortfolio,
    id: 1,
  },
  {
    Categories: "Performance",
    JulRiskScore: graphBallAll,
    JunRiskScore: graphBallOrigination,
    id: 2,
  },
  {
    Categories: "Placement",
    JulRiskScore: graphBallPortfolio,
    JunRiskScore: graphBallRecovery,
    id: 3,
  },
  {
    Categories: "Agency",
    JulRiskScore: graphBallOrigination,
    JunRiskScore: graphBallRecovery,
    id: 4,
  },
];

const hotspot = [
  {
    title: "MRR%",
    values: ["1", "3", "8"],
  },
  {
    title: "Recovery% @12MOB%",
    values: ["10", "14", "20"],
  },
  {
    title: "Unique Payer%",
    values: ["15", "20", "30"],
  },
  {
    title: "Contact%",
    values: ["5", "7", "10"],
  },
  {
    title: "Settlement Accept%",
    values: ["15", "18", "40"],
  },
];

const valuesArray = hotspot[0].values;
const [firstValue, secondValue, thirdValue] = valuesArray.map(parseFloat);
const arrowPosition = `${
  ((secondValue - firstValue) / (thirdValue - firstValue)) * 100
}%`;

const MonitoringDiagnostics = () => {
  // const [firstValue, secondValue, thirdValue] = hotspot.values.map(
  //   parseFloat
  // );
  // const arrowPosition = `${
  //   ((secondValue - firstValue) / (thirdValue - firstValue)) * 100
  // }%`;
  const navigate = useNavigate();

  const handleHotspotReviewClick = () => {
    navigate("/diagnostics/recovery");
  };

  const handleRiskMonitoringReviewClick = () => {
    navigate("/monitoring/recovery");
  };
  return (
    <div className="lg:w-[32%] sm:w-[90%]  h-full rounded-xl shadow p-4 gap-3   bg-[#F2EFFE]">
      {/* <p className="font-[400] text-[13px] font-['DM Sans'] cursor-pointer leading-4 border border-[#9F90D4] bg-white w-max px-[8px] py-[4px] rounded-[4px]">
          Monitoring & Diagnostics
        </p> */}
      <div className="border border-[#9080CC] bg-white w-max  customClassFifth rounded-[4px] cursor-pointer">
        {/* <p className="font-[400] text-black text-center text-[13px] font-['DM Sans'] w-[150px] h-[20px] mt-1 customClassFifth leading-4">
          Monitoring & Diagnostics
        </p> */}
         <img className="h-[30px] py-[6px] px-2" src={SentinelImage} alt="SentinelImage" />
      </div>

      <div className="bg-white h-[116px] p-1  rounded-xl mt-4 flex flex-col items-center ">
        <span className="font-['DM Sans'] text-[32px] text-[#FAC907] font-[500] customClassThird">
          05
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500]">Hotspots</p>
        <div className="flex gap-1">
          <img
            src={UporangeArrow}
            alt=""
            className="w-[14px] h-[14px] customClass"
          />
          <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
            +2 vs last month
          </p>
        </div>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Potential risk: $25Ok
        </p>
      </div>
      <div className=" h-[364px] w-[100%] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-3 w-[100%]">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Risk Monitoring
          </p>
          <button
            className="text-[#6750a4]  text-[12px] font-[500] gap-2 w-[22%] flex items-center justify-center customClassThird"
            onClick={handleRiskMonitoringReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <table className="w-[100%]">
          <thead className="w-[100%]">
            <tr className="w-[100%] flex items-center justify-between border-t border-gray-100 p-3">
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px]  text-left">
                Categories
              </th>
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] ">
                Jul
              </th>
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mr-5">
                Jun
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%] border-b  border-gray-100 flex flex-col justify-between ">
            {Riskmonitoringscore.map((each) => (
              <tr
                key={each.id}
                className="border-t border-gray-100 flex  justify-between items-center px-3 py-1 w-[100%]"
              >
                <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px]  text-left w-[100px]">
                  {each.Categories}
                </td>
                <td className="">
                  <img src={each.JulRiskScore} alt="" className="" />
                </td>
                <td className="">
                  <img src={each.JunRiskScore} alt="" className="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-[364px] w-[100%] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2 w-[100%]">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Hotspots
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird"
            onClick={handleHotspotReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        {hotspot.map((each) => (
          <div
            className="w-[100%] self-stretch px-3 py-3 justify-between items-center gap-10 flex border-b  border-gray-100"
            key={each.title}
          >
            <div className="w-[40%]  text-[#000000] text-[12px] font-[400] font-['DM Sans']">
              {each.title}
            </div>
            <div className="w-[60%] flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="flex w-full h-[18px] relative">
                  {each.values.map(
                    (value, index) =>
                      index !== 2 && (
                        <div
                          key={index}
                          className={`text-[#000000] text-[12px] font-[400] font-['DM Sans'] ${
                            index === 1 ? "special-style" : ""
                          }`}
                          style={
                            index === 1
                              ? {
                                  position: "absolute",
                                  left: arrowPosition,
                                  marginLeft: "5px",
                                }
                              : {}
                          }
                        >
                          {value}%
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="w-full h-[18px] relative">
                <div
                  className="text-black text-[12px] font-400 font-['DM Sans'] absolute right-1"
                  style={{ top: "-20px", textAlign: "right" }}
                >
                  {each.values[2]}%
                </div>
                <div className="w-full h-2  top-[2px] absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
                {each.values[1] && (
                  <img
                    src={arrow}
                    className="customClassFourth"
                    style={{
                      width: "10px",
                      height: "15px",
                      margin: "4px",
                      position: "absolute",
                      left: arrowPosition,
                      top: "5px",
                    }}
                    alt="Arrow"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringDiagnostics;
