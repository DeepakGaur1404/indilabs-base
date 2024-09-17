// import TacticalActionPlanCard from "../../components/Diagnostics/TacticalActionP"
import Button from "../../components/Button";
import MonitoringRecoverySubtabsDashboardHeader from "../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import NewDiagnostics from "../../components/Diagnostics/NewDiagnostics";
import Top5Drivers from "../../components/Diagnostics/Top5Drivers";
import ExpectedRecovery from "../../components/Diagnostics/ExpectedRecovery";
import TwoCards from "../../components/Diagnostics/TwoCards";
import ActualBalance from "../../components/Diagnostics/ActualBalance";
import AI from "../../components/Diagnostics/AI";
import Segmentation from "../../components/Diagnostics/Segmentation";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";
const reviewHotspots = () => {};

const Diagnostics: React.FC = () => {
  const [isDiagnostic, setIsDiagnostic] = useState(false);
  const navigate = useNavigate();
  // const [selectedSegment, setSelectedSegment] = useState<string | null>(
  //   "Recovery % @ 12MOB%"
  // );
  const [selectedSegment, setSelectedSegment] = useState("Very High Risk");

  const deepdive = () => {
    navigate("/diagnostics/recovery/deep-dive");
  };

  return (
    <>
      <div className="px-[6px] h-full  lg:px-[49px]  lg:pt-[59px] -mt-10 lg:pb-20  bg-[#fafafb]">
        {/* <PerformanceDashboard /> */}
<HomeDashboard />
        <NewDiagnostics />
        <div className="flex flex-wrap gap-5 mt-3 ml-2 w-[100%]">
          <Top5Drivers />
          <ExpectedRecovery />
          <Segmentation selectedSegment={selectedSegment} />
        </div>
        <div className="flex flex-wrap gap-5 mt-4 ml-2 w-[100%]">
          <TwoCards />
          <ActualBalance />
          <AI />
        </div>

        <div className="w-[100%] flex items-center justify-end gap-5 mt-8">
          <button
            className="self-end w-20 h-10 px-4 py-2.5  rounded-3xl border border-zinc-500 text-center text-[#6750a4] text-sm font-medium"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <Button
            onClick={reviewHotspots}
            width="180px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div>
      </div>
    </>
  );
};

export default Diagnostics;