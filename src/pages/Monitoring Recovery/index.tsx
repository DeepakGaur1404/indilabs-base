import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import RiskMonitoringExpanded from "../../components/Monitoring/RiskMoniteringExpanded";
import Button from "../../components/Button";
import ImpactAssessment from "../../components/Monitoring/ImpactAssessment";
import download from "../../assets/images/download.png";
import RiskMonitoringRecovery from "../../components/Monitoring Recovery/RiskMonitoringRecovery";
import ImpactAssessmentRecovery from "../../components/Monitoring Recovery/ImpactAssessmentRecovery";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import indilabslogo from "../../assets/images/indliabs.png";
import MonitoringRecoveryMetricDashboardHeader from "../../components/MonitoringRecoveryMetricHeader/MonitoringRecoveryMetricDashboardHeader";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import MonitoringRecoveryPieChart from "../../components/Monitoring Recovery/MonitoringRecoveryPieChart";
import RiskMonitoringRecoveryMonthlyView from "../../components/Monitoring Recovery/RiskMonitoringMonthlyView";
import MonitoringRecoveryLineChart from "../../components/Monitoring Recovery/MonitoringRecoveryLineChart";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";
import RiskMonitoringHotspot from "../../components/Monitoring Recovery/RiskmonitoringHotspot";
import HeatmapChart from "../../components/Monitoring Recovery/HeatmapChart";
// import MonitoringRecoveryLineChart from "../../components/Monitoring Recovery/MonitoringRecoveryLineChart";
const downloadReports = () => {};
// import { useHistory } from "react-router-dom";
const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "Risk Monitoring", label: "Risk Monitoring" },
  { id: "Heatmap", label: "Heatmap" },
];
const categoriesHeatmap = [
  { id: "Location", name: "Location" },
  { id: "POS", name: "POS" },
//  { id: "Vintage", name: "Vintage" },
];
type Props = {};
const staticDataRecoveryPerformance = {
  balance: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_book: 4904412211.45,
    ytd_recovery: 139595017.14,
    annualised_recovery_rate: 0.06831155838692202,
    fy_forecast: 0,
    variance_to_plan: 0,
  },
  units: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_accounts: 6633,
    total_payers: 645,
    payer_ratio: 0.09724106739032112,
    fy_forecast: 0,
    variance_to_plan: 0,
  },
  states: [
    {
      state: "ROMG_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.2,
          },
        },
      ],
      series: [
        {
          sub_segment: "ROMG_Payer%",
          value: [
            0.576645939192853, 1.03130841735919, 1.54066176992939,
            2.1717084891811, 2.78311456817841, 3.26262743677539,
            3.57097206299341, 3.81619864850877, 4.02398852647546,
            4.08986841472167, 4.18489584668812, 4.24288463268074,
          ],
        },
      ],
    },

    {
      state: "ROMG_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.2,
          },
        },
      ],
      series: [
        {
          sub_segment: "ROMG_MRR%",
          value: [
            0.872623458033109, 1.3169431938806, 1.94377932993445,
            2.66202173116728, 3.23378876663226, 3.59569278146069,
            3.9270667743267, 4.01557863526469, 4.1510443973459,
            4.03096910218555, 4.14746727190432, 4.18977691819955,
          ],
        },
      ],
    },

    {
      state: "MUM_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.1,
          },
        },
      ],
      series: [
        {
          sub_segment: "MUM_Payer%",
          value: [
            0.504316201596402, 0.928450878940626, 1.45122566353963,
            2.00969553523009, 2.50811632568083, 2.92962668720633,
            3.17678849865713, 3.35603486921756, 3.4632474571212,
            3.59492292529123, 3.78350059015837, 3.92560390950869,
          ],
        },
      ],
    },

    {
      state: "POS<5L_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 8,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "POS<5L_Payer%",
          value: [
            0.553246677064331, 0.880789829369032, 1.37180129270812,
            1.89291208863084, 2.37934864845543, 2.73732641699045,
            2.90557747193718, 3.49090524880775, 3.46620147744426,
            3.42065387478009, 3.40287536988057, 3.36030297091702,
          ],
        },
      ],
    },

    {
      state: "DEL_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 8,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "DEL_Payer%",
          value: [
            0.655547349621176, 0.84099302914026, 1.36761396778192,
            2.18817367214776, 2.33068219269252, 2.68509642561373,
            2.69173946492361, 2.41628032422987, 2.22002305813167,
            2.07764095765142, 2.02832536659724,
          ],
        },
      ],
    },

    {
      state: "MUM_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.8,
          },
        },
      ],
      series: [
        {
          sub_segment: "MUM_MRR%",
          value: [
            0.459942709064743, 0.825627206710427, 1.01133131788665,
            1.01133131788665, 1.30838450269827, 1.78840858977703,
            1.75405151027474, 2.08472641904102, 2.48534074602795,
            3.0385680442163, 3.19512603309792, 3.41459811540956,
          ],
        },
      ],
    },

    {
      state: "POS<5L_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.8,
          },
        },
      ],
      series: [
        {
          sub_segment: "POS<5L_MRR%",
          value: [
            0.667412562354217, 0.9789301205208, 1.17982278633469,
            1.60620733485666, 1.98662690702347, 2.25618861726895,
            2.30666663071786, 2.45877259732007, 2.62075215319862,
            2.19436760467665, 2.10452969034398, 1.89648741347682,
          ],
        },
      ],
    },

    {
      state: "TN_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 3,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.6,
          },
        },
      ],
      series: [
        {
          sub_segment: "TN_MRR%",
          value: [
            0.542458197487791, 0.877924760752354, 1.31141652259684,
            1.930282483875, 2.28625289340921, 2.63370485387618, 2.556320993424,
            2.41227355464953, 1.97878179280504, 1.35991583152688,
            1.00394542199267, 1.00394542199267,
          ],
        },
      ],
    },

    {
      state: "MOB_0_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 3,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.6,
          },
        },
      ],
      series: [
        {
          sub_segment: "MOB_0_Payer%",
          value: [
            0.108401581775661, 0.108401581775661, 0.585322996539136,
            1.06337369080491, 1.34087130941785, 1.65553587692327,
            2.56840680609854, 2.85976957030275, 2.38284815553928,
            2.13319655084485, 1.94794058107316, 1.69878108241759,
          ],
        },
      ],
    },

    {
      state: "DEL_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.3,
          },
        },
      ],
      series: [
        {
          sub_segment: "DEL_MRR%",
          value: [
            0.519464735347985, 0.519464735347985, 0.710537808148631,
            1.32902790571141, 1.52685209352896, 1.96889381843422,
            2.34025686151635, 2.34025686151635, 1.98477416099559,
            1.36628406343281, 0.813404767987392, 0.371363043082127,
          ],
        },
      ],
    },

    {
      state: "TN_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 0,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "TN_Payer%",
          value: [
            0.536200825088493, 0.624047358888049, 0.935274256330638,
            1.26815258767884, 1.45515413020241, 1.58271661594407,
            1.5849260368098, 1.57030851887737, 1.25908162143479,
            0.926203290086581, 0.739201747563011, 0.538066894007298,
          ],
        },
      ],
    },

    {
      state: "0_MOB_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Green",
            value: 7,
          },
        },
        {
          bar: {
            sub_segment: "Amber",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Red",
            value: 0,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 0.9,
          },
        },
      ],
      series: [
        {
          sub_segment: "0_MOB_MRR%",
          value: [
            1.11278326881604, 0.849464377206082, 0.849464377206082,
            1.14267067012398, 0.828271582198899, 0.515226947289105,
            1.16072417165701, 1.16072417165701, 1.16072417165701,
            0.699204996730939, 0.645497224367903, 0.645497224367903,
          ],
        },
      ],
    },
  ],
};

const MonitoringRecovery = (props: Props) => {
  const [activeButton, setActiveButton] = useState<string>("Risk Monitoring");
  const [loader, setLoader] = useState(false);
  const [profileUsername, setProfileUsername] = useState<any>();
  const [categories, setCategories] = useState("All");
  const [categoriesMatric, setCategoriesMatric] = useState("Location");
  const [selectedCategory, setselectedCategory] = useState("location");
  const [categoriesMatricHeatMap, setCategoriesMatricHeatMap] =
    useState("Location");
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const location = useLocation();
  let navigate = useNavigate();
  // const navigate=useNavigate()
  useEffect(() => {
    setCategoriesMatric("Location");
  }, [activeButton]);
  const runDiagnostics = () => {
    navigate("/diagnostics/recovery");
  };
  useEffect(() => {
    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, []);
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };
  // const [selectedCategory, setselectedCategory] = useState("location");
  const handleCategoryClick = async (cityId: string) => {
    setCategoriesMatricHeatMap(cityId);
  };
  // const dispatch = useDispatch();

  // const fetchData = async () => {
  //   const res = await fetchDashboardData();
  //   console.log(res?.data);
  //   dispatch(saveDashboardData(res?.data));
  // };

  useEffect(() => {
    // fetchData();
    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, []);

  const downloadReport = async () => {
    setLoader(true);
    const reportContent = document.getElementById("reportContent");
    const hiddenButton = document.getElementById("hiddenbutton");
    const hiddenButton2 = document.getElementById("hiddenbutton2");
    const backButtons = document.getElementById("backButtons");
    const indilabsHeader = document.getElementById("indilabsheader");
    const indilabslogo = document.getElementById("indilabslogo");

    if (hiddenButton) {
      hiddenButton.style.display = "none"; // Hide the button container
    }
    if (hiddenButton2) {
      hiddenButton2.style.display = "none"; // Hide the button container
    }

    if (backButtons) {
      backButtons.style.display = "none"; // Hide the button container
    }

    if (indilabsHeader) {
      indilabsHeader.classList.remove("hidden"); // Show the header for PDF generation
    }
    if (indilabslogo) {
      indilabslogo.classList.remove("hidden"); // Show the header for PDF generation
    }

    window.scrollTo(0, 0);

    // await new Promise((resolve) => setTimeout(resolve, 500));

    html2canvas(reportContent!, {
      scale: 2,
      scrollX: 0,
      scrollY: -window.screenY,
      windowWidth: document.documentElement.offsetWidth + 30,
      windowHeight: document.documentElement.scrollHeight + 180,
      onclone: (clonedDoc) => {
        const clonedContent = clonedDoc.getElementById("reportContent");
        if (clonedContent) {
          // Select all elements with the custom class and move them up
          const customClassMonitoringDashboardElements =
            clonedContent.getElementsByClassName(
              "customClassMonitoringDashboardHeader"
            );
          Array.from(customClassMonitoringDashboardElements).forEach(
            (element) => {
              (element as HTMLElement).style.position = "relative";
              (element as HTMLElement).style.top = "-8px"; // Adjust the value as needed
            }
          );
          const customClassFirstElements =
            clonedContent.getElementsByClassName("customClassFirst");
          Array.from(customClassFirstElements).forEach((element) => {
            (element as HTMLElement).style.height = "35px";
            (element as HTMLElement).style.marginTop = "-15px"; // Adjust the value as needed
          });
          const customClassSecondElements =
            clonedContent.getElementsByClassName("customClassSecond");
          Array.from(customClassSecondElements).forEach((element) => {
            (element as HTMLElement).style.fontSize = "14px";
            (element as HTMLElement).style.textAlign = "start";
            // (element as HTMLElement).style.padding  = "2px";
            (element as HTMLElement).style.marginLeft = "50px"; // Adjust the value as needed
          });
          const customClassThirdElements =
            clonedContent.getElementsByClassName("customClassThird");
          Array.from(customClassThirdElements).forEach((element) => {
            (element as HTMLElement).style.height = "36px";
            (element as HTMLElement).style.width = "165px";
          });
          const customClassFourElements =
            clonedContent.getElementsByClassName("customClassfour");
          Array.from(customClassFourElements).forEach((element) => {
            (element as HTMLElement).style.position = "absolute";
            (element as HTMLElement).style.left = "-18px";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassFourthElements =
            clonedContent.getElementsByClassName("customClassFourth");
          Array.from(customClassFourthElements).forEach((element) => {
            (element as HTMLElement).style.height = "36px";
            (element as HTMLElement).style.width = "145px";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassFiveElements =
            clonedContent.getElementsByClassName("customClassfive");
          Array.from(customClassFiveElements).forEach((element) => {
            (element as HTMLElement).style.position = "absolute";
            (element as HTMLElement).style.top = "89%";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassSixElements =
            clonedContent.getElementsByClassName("customClasssix");
          Array.from(customClassSixElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-36px";
            (element as HTMLElement).style.textAlign = "center";
          });
          const customClassDashboardElements =
            clonedContent.getElementsByClassName("customClassDashboardHeader");
          Array.from(customClassDashboardElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.right = "-28px"; // Adjust the value as needed
          });
          const customClassTableElements =
            clonedContent.getElementsByClassName("customClassTable");
          Array.from(customClassTableElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-2px"; // Adjust the value as needed
          });
          const customClassDoubleElements =
            clonedContent.getElementsByClassName("customClassDouble");
          Array.from(customClassDoubleElements).forEach((element) => {
            (element as HTMLElement).style.marginBottom = "10px"; // Adjust the value as needed
          });
          const customClassOppertunityElements =
            clonedContent.getElementsByClassName("customClassOpper");
          Array.from(customClassOppertunityElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-16px"; // Adjust the value as needed
          });
          const customClassRiskElements =
            clonedContent.getElementsByClassName("customClassRisk");
          Array.from(customClassRiskElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-16px"; // Adjust the value as needed
          });
        }
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      // const img = pdf.getImageProperties(imgData);
      // const imgWidth = pdf.internal.pageSize.getWidth();
      // const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? "landscape" : "portrait",
        unit: "px",
        format: [imgWidth, imgHeight],
      });
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("report.pdf");
      setLoader(false);
    });

    if (hiddenButton) {
      hiddenButton.style.display = "flex"; // Show the button container again
    }

    if (hiddenButton2) {
      hiddenButton2.style.display = "flex"; // Show the button container again
    }

    if (backButtons) {
      backButtons.style.display = "flex"; // Show the button container again
    }

    if (indilabsHeader) {
      indilabsHeader.classList.add("hidden"); // Hide the header again
    }
    if (indilabslogo) {
      indilabslogo.classList.add("hidden"); // Hide the header again
    }
  };
  const formattedDate = () => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${day} ${month} ${year}`;
  };

  const selectedState = "TN_Payer%";

  return (
    <div id="reportContent">
      <div
        className="w-full flex bg-neutral-50 justify-between items-center px-4 hidden"
        // style={{ display: "none" }}
        id="indilabsheader"
      >
        <h1
          className={`text-3xl font-bold ml-4 py-2 customClassDashboardHeader`}
        >
          Monitoring
        </h1>
        <div className="justify-end p-8  items-center gap-11 flex h-21 leftContainHeader">
          <div className="justify-start items-center gap-2 lg:gap-4 flex">
            <div className="flex justify-start items-center items-end gap-[12px] inline-flex profileIConHeader">
              <div className="nameHeader">
                <p className="text-[black] italic font-[500] text-[14x] lg:text-sm">
                  Report Generated On: &nbsp;
                  {`${formattedDate()}`}
                </p>
                <p className="text-[#6750A4] italic text-sm lg:text-base flex justify-end font-medium">
                  {profileUsername}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CommonBodyWrap px-[6px] lg:px-[59px] lg:pt-[47px] bg-[#fafafb]">
        {isCategoryVisible === true ? (
          // <PerformanceDashboard />
          <HomeDashboard />
        ) : (
          <MonitoringRecoveryMetricDashboardHeader />
        )}
      
        {/* <div className="w-full flex justify-between mt-6 mb-6 ml-1 "> */}
        <div className=" w-full flex flex-col gap-5 mt-5 items-start ml-[10px] ">
          {/* <div className="pl-3 flex w-full rounded-xl B1TabsContainer"> */}
          <div className="w-[100%] flex justify-between items-center">
      
              <div className=" flex w-max justify-between  itemrounded-xl B1TabsContain">
                {Buttons.map((buttons, index) => (
                  <div
                    key={buttons.id}
                    onClick={() => handleProductClick(buttons.id)}
                    className={`w-max text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans p' !important] h-10 
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activeButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
                    }`}
                  >
                    {buttons.label}
                  </div>
                ))}
              </div>
              
         
            {/* <div className="w-full flex justify-end items-center ">
            <div
              className="w-[160px] min-w-[160px] h-[40px] flex justify-around items-center cursor-pointer "
              onClick={downloadReport}
            >
              <div className="w-[18px] h-[18px]" id="hiddenbutton">
                {loader ? "" : <img src={download} alt="download" />}
              </div>
              <div
                className="w-[120px] min-w-[120px] h-[20px] text-[#6750A4] text-[14px] font-[500] font-['DM Sans']"
                id="hiddenbutton2"
              >
                {loader ? "Downloading...." : "Download Report"}
              </div>
            </div>
          </div> */}
          </div>
           
            {/* {activeButton ==="Heatmap" &&  */}
           <div className="flex">
          <div className=" flex w-full justify-between  rounded-xl">
            {categoriesHeatmap.map((city:any, index:any) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  categoriesMatricHeatMap === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesHeatmap.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
        {/* } */}
          {/* </div> */}
         
         
          </div>
          
    
        {activeButton === "Risk Monitoring" && (
          <div className="flex flex-wrap  items-start  justify-center  px-[6px] lg:px-[2px] ml-0 lg:ml-2 mt-7 bg-[#fafafb]">
            <div className=" w-full flex items-start gap-1 justify-start flex-wrap">
              {/* <RiskMonitoringRecovery
                setCategory={setCategories}
                setCategoriesMatric={setCategoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
              /> */}
              <ImpactAssessmentRecovery
                Category={categories}
                categoriesMatric={categoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
                // activeButton={activeButton}
                categoriesMatricHeatMap={categoriesMatricHeatMap}
              />
            </div>
          </div>
        )}
        {activeButton === "Heatmap" && (
          <div className="flex flex-wrap  mt-7 items-start  justify-center  px-[6px] lg:px-[6px] ml-0 lg:ml-2 bg-[#fafafb]">
            <div className=" w-full flex items-start gap-4 justify-start flex-wrap">
              {/* <RiskMonitoringRecoveryMonthlyView
                setCategory={setCategories}
                setCategoriesMatricHeatMap={setCategoriesMatricHeatMap}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
              /> */}

              {/* <MonitoringRecoveryPieChart
                categoriesMatricHeatMap={categoriesMatricHeatMap}
              /> */}

              {/* <MonitoringRecoveryLineChart
                categoriesMatricHeatMap={categoriesMatricHeatMap}
                staticDataRecoveryPerformance={staticDataRecoveryPerformance}
              /> */}
              {/* <RiskMonitoringHotspot
                setCategory={setCategories}
                setCategoriesMatricHeatMap={setCategoriesMatricHeatMap}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
              /> */}
              <HeatmapChart categoriesMatricHeatMap={categoriesMatricHeatMap} />
            </div>
          </div>
        )}

        {/* <div
          className="w-full flex items-center justify-end gap-3 mt-8 mr-2 mb-8"
          id="backButtons"
        >
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>

          <Button
            onClick={runDiagnostics}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div> */}
        <div
          id="indilabslogo"
          className="flex items-center justify-center gap-1  text-['italic'] font-[500] text-[#000000] h-[20px] mt-24 hidden"
        >
          <span className="italic">Made By</span>{" "}
          <img src={indilabslogo} className="mt-4" alt="indilabs.ai" />
        </div>
      </div>
    </div>
  );
};

export default MonitoringRecovery;
