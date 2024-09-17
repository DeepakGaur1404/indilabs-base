import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "../../NewPages/AllocationEngine/Allocation.scss";
import Monitoring from "../../assets/images/monitoringrisk.svg";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
  ReferenceLine,
} from "recharts";
import Location from "../../pages/Monitoring/Location";
import { number } from "yup";
import { direction } from "html2canvas/dist/types/css/property-descriptors/direction";

type Props = {
  Category: any;
  categoriesMatric: any;
  setIsCategoryVisible: any;
  isCategoryVisible: any;
};

const ImpactAssessmentRecovery = ({
  Category,
  categoriesMatric,
  setIsCategoryVisible,
  isCategoryVisible,
}: Props) => {
  console.log("Category value", categoriesMatric);
  const [impactAssessmentData, setImpactAssessmentData] = useState<any>();
  const [impactAssessmentDataMetrics, setImpactAssessmentDataMeterics] =
    useState<any>();
  const [loader, setLoader] = useState(false);
  const Loader = () => {
    return <span className="loader"></span>;
  };
  const handleDoubleClick = () => {
    setIsCategoryVisible(false);
  };
  const CustomTooltip = ({ active, payload }: any) => {
    console.log("Payload", payload);
    if (active && payload && payload.length) {
      const { x_coordinate, metric } = payload[0].payload;
      const yUpdated = payload[0].payload["Y Updated"];
      const monthLable = payload[0].payload["Month Labels"];
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{` ${metric}`}</p>
          <p className="label text-black">{` ${monthLable}`}</p>
          <p className="label text-black">{` Severity : ${x_coordinate.toFixed(2)}`}</p>
          <p className="intro text-black">{`Likelihood : ${yUpdated.toFixed(2)}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const circle_diameter = payload.circle_diameter * 110;
    const circle_color = payload.circle_color;
    const nameofState = payload.metric;

    const getColor = (color: string) => {
      switch (color) {
        case "red":
          return "red";
        case "green":
          return "green";
        case "pink":
          return "pink";
        case "orange":
          return "orange";
        case "violet":
          return "violet";
        case "yellow":
          return "yellow";
        default:
          return "#FFFFFF"; // Default color
      }
    };
    const backgroundColor = getColor(payload.color);

    return (
      <g className="cursor-pointer" onDoubleClick={handleDoubleClick}>
        <foreignObject
          x={cx - 20}
          y={cy - 20}
          width={circle_diameter}
          height={circle_diameter}
          // style={{ display: "flex", flexDirection: "column" }}
          // clipPath="url(#clip)"
        >
          <div
            style={{
              border: "1px solid #CDD1DB ",
              width: `${
                payload.circle_diameter >= 0.1
                  ? circle_diameter
                  : payload.circle_diameter <= 0.1
                  ? circle_diameter * 1.1
                  : circle_diameter
              }px`,
              height: `${
                payload.circle_diameter >= 0.1
                  ? circle_diameter
                  : payload.circle_diameter <= 0.1
                  ? circle_diameter * 1.2
                  : circle_diameter
              }px`,
              borderRadius: "100%",
              backgroundColor: circle_color,
              display: "flex",
    justifyContent: "center",
    alignItems: "center",
            }}
          >
            <div className="flex justify-center text-center items-center">
              <p className="text-white text-[12px] text-center text-[500] font-['DM Sans']">
                {nameofState}
              </p>
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };
  // console.log("set loader value", loader);

  useEffect(() => {
    fetchImpactAssessmentData();
  }, [categoriesMatric]);

  const fetchImpactAssessmentData = async () => {
    setLoader(true);
    // {
    //   Category: "Location",
    //   metric: "MRR@GUJ",
    //   "Month Labels": "Jun2024",
    //   "X Coordinate": 2.9514540440915984,
    //   "Y Coordinate": 2,
    //   circle_diameter: 1.2,
    //   circle_color: "#ffc752c7",
    //   "Dollar Impact Metric": 6747134.15943325,
    //   "Y Updated": 200.23,
    //   x_coordinate: 2,
    //   name:"GUJ"
    // }
    const data: any = {
      impact_assessment: {
        categories: 
        [
          {
              "Category": "Location",
              "metric": "TN",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.9514540440915984,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 6747134.15943325,
              "Y Updated": 3.0,
              "x_coordinate": 2.189525403785825
          },
          {
              "Category": "Location",
              "metric": "KA",
              "Month Labels": "Jun2024",
              "X Coordinate": 3.6652377909729545,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 6145176.81282216,
              "Y Updated": 2.910783255173682,
              "x_coordinate": 2.719043269644101
          },
          {
              "Category": "Location",
              "metric": "DL",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.5784210176505942,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 1897966.47691915,
              "Y Updated": 2.2812996499062614,
              "x_coordinate": 1.1709458674899134
          },
          {
              "Category": "Location",
              "metric": "MH",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.6876269353433293,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 5598009.486954599,
              "Y Updated": 2.829686998164688,
              "x_coordinate": 1.9938062266676557
          },
          {
              "Category": "Location",
              "metric": "HR",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.4411217655238775,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 3780752.0126527203,
              "Y Updated": 2.5603493162155084,
              "x_coordinate": 1.8109372666834433
          },
          {
              "Category": "Location",
              "metric": "TEL",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.6228903177200866,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 3902553.38042416,
              "Y Updated": 2.578401627744122,
              "x_coordinate": 1.9457816033044673
          },
          {
              "Category": "Location",
              "metric": "UP",
              "Month Labels": "Jun2024",
              "X Coordinate": 4.043964101519468,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 4998826.134086149,
              "Y Updated": 2.740881389930157,
              "x_coordinate": 3.0
          },
          {
              "Category": "Location",
              "metric": "AP",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.6437717603172395,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 2870752.71723008,
              "Y Updated": 2.425477343327529,
              "x_coordinate": 1.2194260772737422
          },
          {
              "Category": "Location",
              "metric": "MP",
              "Month Labels": "Jun2024",
              "X Coordinate": 0.8133111263637133,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FFA500",
              "Dollar Impact Metric": 1269865.0539566996,
              "Y Updated": 2.188208063445913,
              "x_coordinate": 0.6033518888494499
          },
          {
              "Category": "Location",
              "metric": "GUJ",
              "Month Labels": "Jun2024",
              "X Coordinate": 0.30201842066239665,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FFA500",
              "Dollar Impact Metric": 266261.477010439,
              "Y Updated": 2.039462899464979,
              "x_coordinate": 0.22405126238552692
          },
          {
              "Category": "POS",
              "metric": "<1L",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.0533538582701993,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 5862158.864378482,
              "Y Updated": 2.188937426000041,
              "x_coordinate": 1.752537442909445
          },
          {
              "Category": "POS",
              "metric": "1-5L",
              "Month Labels": "Jun2024",
              "X Coordinate": 3.1666021182765927,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 31026985.96294628,
              "Y Updated": 3.0,
              "x_coordinate": 2.7026947920955107
          },
          {
              "Category": "POS",
              "metric": "5-10L",
              "Month Labels": "Jun2024",
              "X Coordinate": 3.514938639247603,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 12455655.843364496,
              "Y Updated": 2.4014458851478375,
              "x_coordinate": 3.0
          },
          {
              "Category": "POS",
              "metric": ">10L",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.6598412773850841,
              "Y Coordinate": 1,
              "circle_diameter": 0.35,
              "circle_color": "#FFA500",
              "Dollar Impact Metric": 1550913.07756656,
              "Y Updated": 1.049985940607274,
              "x_coordinate": 1.416674469521082
          },
          {
              "Category": "Vintage",
              "metric": "V1",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.8237591791012921,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 9315314.453950198,
              "Y Updated": 2.7415665268019165,
              "x_coordinate": 1.3527853964559564
          },
          {
              "Category": "Vintage",
              "metric": "V2",
              "Month Labels": "Jun2024",
              "X Coordinate": 3.666716483862412,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 12561670.621951438,
              "Y Updated": 3.0,
              "x_coordinate": 2.7198111292071574
          },
          {
              "Category": "Vintage",
              "metric": "V3",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.9724490919943993,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 7977219.007373799,
              "Y Updated": 2.635044433774092,
              "x_coordinate": 1.4630771197640873
          },
          {
              "Category": "Vintage",
              "metric": "V4",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.4023635709421112,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 4217241.255602019,
              "Y Updated": 2.335722960943779,
              "x_coordinate": 1.0402124255391887
          },
          {
              "Category": "Vintage",
              "metric": "V5",
              "Month Labels": "Jun2024",
              "X Coordinate": 1.4245353752350802,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 5136220.251215241,
              "Y Updated": 2.4088803476696588,
              "x_coordinate": 1.0566585075681703
          },
          {
              "Category": "Vintage",
              "metric": "V6",
              "Month Labels": "Jun2024",
              "X Coordinate": 4.044453430409284,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 4114254.146870171,
              "Y Updated": 2.327524440871785,
              "x_coordinate": 3.0
          },
          {
              "Category": "Vintage",
              "metric": "V7",
              "Month Labels": "Jun2024",
              "X Coordinate": 2.4662736675180765,
              "Y Coordinate": 2,
              "circle_diameter": 0.35,
              "circle_color": "#FF0000",
              "Dollar Impact Metric": 1265014.3873074001,
              "Y Updated": 2.100704311184278,
              "x_coordinate": 1.8293747547998087
          }
      ]
      },
      cached_output: false,
    };

    if (categoriesMatric === "Location") {
      const MRRCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "Location"
      );

      setImpactAssessmentDataMeterics(MRRCoordinates);
    } else if (categoriesMatric === "POS") {
      const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "POS"
      );

      setImpactAssessmentDataMeterics(POSCoordinates);
    } else if (categoriesMatric === "Vintage") {
      const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "Vintage"
      );

      setImpactAssessmentDataMeterics(POSCoordinates);
    }
    setLoader(false);
  };

  return (
    <div className="relative w-[100%]  h-[555px] p-3 bg-white rounded-xl shadow flex-col justify-start ml-6 flex gap-5 2xl:w-[58%]">
      <div className="px-2 flex justify-between items-center">
      <h1 className="text-black text-base font-medium font-['DM Sans'] text-left -ml-1 customClassOpper ">
        Impact Assessment
      </h1>
      <div className="border-[#FFA39B] rounded-lg border-[2px] w-[max] flex items-center gap-2 py-1 px-3 m">
        <img src={Monitoring} alt="" />
        <p className="text-[black] font-[500] text-[14px] font-['DM Sans']">Value at Risk:</p>
        <span className="text-[#EF0000] font-[700] text-[16px] font-['DM Sans']">$3,092,12</span>
      </div>
      </div>
      {/* <div className="w-[100%] flex flex-col justify-center items-center -mt-6 -mr-4">
        <div className="w-[85%] h-2  bg-gradient-to-r from-[#09FF4E] via-[#FFF509] to-[#ED0E00]">
          {" "}
        </div>
        <div className="w-[85%] flex justify-between">
          <p className="text-[12px] text-[#000000] font-['DM Sans'] -ml-6">
            Low Risk
          </p>
          <p className="text-[12px] text-[#000000] font-['DM Sans'] -mr-6">
            High Risk
          </p>
        </div>
      </div> */}
      {/* <p
        className="
     text-[14px] italic text-[#6A7691] font-[400] 
    font-['DM Sans' !important] 
    -rotate-90 
     frequency_text customClassfour 
  "
        style={{ zIndex: 100 }}
      >
        Likelihood
      </p> */}
      {loader ? (
        <Loader />
      ) : (
        <>
          <ResponsiveContainer
            height={455}
            width="95%"
            style={{ marginLeft: 10, marginTop: -26 }}
          >
            <ScatterChart
              width={700}
              height={500}
              margin={{ top: 40, bottom: -1, right: 8, left: -48 }}
            >
              <CartesianGrid stroke="#9ca3af" />
              <XAxis
                type="number"
                dataKey={"x_coordinate"}
                fontSize={14}
                // tickCount={12}
                domain={[0, 3.5]}
                ticks={[0, 1, 2, 3, 3.5]}
                axisLine={false}
                tickLine={false}
                tick={true}
                // width={60}
              />
              <YAxis
                type="number"
                dataKey="Y Updated"
                domain={[0, 3.5]}
                // padding={{top:1}}
                fontSize={14}
                // ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                ticks={[1, 2, 3, 3.5]}
                // ticks={majorTicks}
                interval={0}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "black" }}
                width={95}
              />

              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
                labelStyle={{ display: "none" }}
              />
              <ReferenceLine x={0.5} stroke="#CDD1DB" />
              <ReferenceLine x={1.5} stroke="#CDD1DB" />
              <ReferenceLine x={2.5} stroke="#CDD1DB" />
              <ReferenceLine y={0.5} stroke="#CDD1DB" />
              <ReferenceLine y={1.5} stroke="#CDD1DB" />
              <ReferenceLine y={2.5} stroke="#CDD1DB" />
            
              <Scatter
                name="Data"
                data={impactAssessmentDataMetrics}
                fill="#8884d8"
                shape={<CustomDot />}
              />
             
            </ScatterChart>
          </ResponsiveContainer>

          {/* <p className="-mt-[22px]  text-center text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans'] benchmark_text customClasssix ">
            Severity
          </p> */}
        </>
      )}
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip">
            <rect x="5" y="23" width="700" height="600" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ImpactAssessmentRecovery;
