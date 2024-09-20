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
      const { x_coordinate, metric, circle_diameter } = payload[0].payload;
      const yUpdated = payload[0].payload["Y Updated"];
      const monthLable = payload[0].payload["Month Labels"];
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{` ${metric}`}</p>
          <p className="label text-black">{` ${monthLable}`}</p>
          <p className="label text-black">{`X-Coordinate : ${x_coordinate.toFixed(
            2
          )}`}</p>
          {/* <p className="label text-black">{`Circle-Size : ${
            circle_diameter.toFixed(4) * 200
          }`}</p> */}
          <p className="intro text-black">{`Y-Coordinate : ${yUpdated.toFixed(
            2
          )}`}</p>
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
        categories: [
          {
            Category: "Location",
            metric: "TN",
            "Month Labels": "Jun2024",
            x_coordinate: 2.81448187456613,
            "Y Updated": 20.24038262220468,
            circle_color: "Red",
            circle_diameter: 0.172242474478432,
          },
          {
            Category: "Location",
            metric: "KA",
            "Month Labels": "Jun2024",
            x_coordinate: 1.5529443094291235,
            "Y Updated": 18.884513237352568,
            circle_color: "Red",
            circle_diameter: 0.14042087029685435,
          },
          {
            Category: "Location",
            metric: "DL",
            "Month Labels": "Jun2024",
            x_coordinate: 1.3324822984162636,
            "Y Updated": 5.949828115924044,
            circle_color: "Red",
            circle_diameter: 0.11407633892581312,
          },
          {
            Category: "Location",
            metric: "MH",
            "Month Labels": "Jun2024",
            x_coordinate: 1.882693012895705,
            "Y Updated": 15.302863187522924,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "OD",
            "Month Labels": "Jun2024",
            x_coordinate: 1.402910970469687,
            "Y Updated": 1.9582463888464459,
            circle_color: "Red",
            circle_diameter: 0.02151028636368723,
          },
          {
            Category: "Location",
            metric: "PC",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8450568955163977,
            "Y Updated": 0.8662625541077846,
            circle_color: "Red",
            circle_diameter: 0.004873314454266318,
          },
          {
            Category: "Location",
            metric: "PB",
            "Month Labels": "Jun2024",
            x_coordinate: 1.9984854858686925,
            "Y Updated": 6.155637039285626,
            circle_color: "Red",
            circle_diameter: 0.09755895003878644,
          },
          {
            Category: "Location",
            metric: "RJ",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8559211921766883,
            "Y Updated": 6.221873323313603,
            circle_color: "Red",
            circle_diameter: 0.10635935066022821,
          },
          {
            Category: "Location",
            metric: "HR",
            "Month Labels": "Jun2024",
            x_coordinate: 3.7549382884753895,
            "Y Updated": 10.578623892545535,
            circle_color: "Red",
            circle_diameter: 0.1402022746362115,
          },
          {
            Category: "Location",
            metric: "HP",
            "Month Labels": "Jun2024",
            x_coordinate: -1.0580417642776785,
            "Y Updated": 0.4271854693311965,
            circle_color: "#FFBF00",
            circle_diameter: 0.012785249660730944,
          },
          {
            Category: "Location",
            metric: "JK",
            "Month Labels": "Jun2024",
            x_coordinate: -4.800256369889793,
            "Y Updated": -0.35325004009602345,
            circle_color: "Green",
            circle_diameter: 0.002783793084350074,
          },
          {
            Category: "Location",
            metric: "JH",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6407626080106334,
            "Y Updated": 3.2245097031635184,
            circle_color: "Red",
            circle_diameter: 0.024296106680759603,
          },
          {
            Category: "Location",
            metric: "TL",
            "Month Labels": "Jun2024",
            x_coordinate: 4.44606484171821,
            "Y Updated": 10.50077380528091,
            circle_color: "Red",
            circle_diameter: 0.13007766329953593,
          },
          {
            Category: "Location",
            metric: "UP",
            "Month Labels": "Jun2024",
            x_coordinate: 4.151425606262142,
            "Y Updated": 11.73803653925116,
            circle_color: "Red",
            circle_diameter: 0.20960484411079114,
          },
          {
            Category: "Location",
            metric: "UK",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8390744670684946,
            "Y Updated": 3.16210326150182,
            circle_color: "Red",
            circle_diameter: 0.04127813848280559,
          },
          {
            Category: "Location",
            metric: "WB",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6302308168784307,
            "Y Updated": 8.620913621607626,
            circle_color: "Red",
            circle_diameter: 0.08859996503785028,
          },
          {
            Category: "Location",
            metric: "AP",
            "Month Labels": "Jun2024",
            x_coordinate: 2.0051190590173986,
            "Y Updated": 5.061021086603231,
            circle_color: "Red",
            circle_diameter: 0.1343335185972413,
          },
          {
            Category: "Location",
            metric: "MP",
            "Month Labels": "Jun2024",
            x_coordinate: 1.0704073055904242,
            "Y Updated": 2.7357506727196568,
            circle_color: "Red",
            circle_diameter: 0.15478010342492812,
          },
          {
            Category: "Location",
            metric: "GJ",
            "Month Labels": "Jun2024",
            x_coordinate: 0.2881871496928144,
            "Y Updated": 2.336107483110233,
            circle_color: "Red",
            circle_diameter: 0.12016195254221013,
          },
          {
            Category: "Location",
            metric: "AS",
            "Month Labels": "Jun2024",
            x_coordinate: 1.2315527195183755,
            "Y Updated": 2.4921010057728226,
            circle_color: "Red",
            circle_diameter: 0.029592376315578036,
          },
          {
            Category: "Location",
            metric: "BR",
            "Month Labels": "Jun2024",
            x_coordinate: 1.2292970789678372,
            "Y Updated": 2.8475567970705824,
            circle_color: "Red",
            circle_diameter: 0.020050661106805086,
          },
          {
            Category: "Location",
            metric: "CD",
            "Month Labels": "Jun2024",
            x_coordinate: 3.1583416389362906,
            "Y Updated": 0.3528264331910831,
            circle_color: "Red",
            circle_diameter: 0.003969927663344246,
          },
          {
            Category: "Location",
            metric: "CG",
            "Month Labels": "Jun2024",
            x_coordinate: 0.39527198619258613,
            "Y Updated": -0.0032529041728100857,
            circle_color: "#FFBF00",
            circle_diameter: 0.028745475916526854,
          },
          {
            Category: "Location",
            metric: "DH",
            "Month Labels": "Jun2024",
            x_coordinate: -0.15366897719046002,
            "Y Updated": 0.04514068873263216,
            circle_color: "#FFBF00",
            circle_diameter: 0.0016771165020214355,
          },
          {
            Category: "Location",
            metric: "GO",
            x_coordinate: 0.9064295919726548,
            "Y Updated": 0.83248150875941,
            circle_color: "Red",
            circle_diameter: 0.002777373858133034,
          },
          {
            Category: "Location",
            metric: "KR",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8300564126817456,
            "Y Updated": 1.9252024328377813,
            circle_color: "Red",
            circle_diameter: 0.018137872556531376,
          },
          {
            Category: "POS",
            metric: "<1L",
            "Month Labels": "Jun2024",
            x_coordinate: 2.0292485013770762,
            "Y Updated": 17.96660946646867,
            circle_color: "Red",
            circle_diameter: 0.024805874406328386,
          },
          {
            Category: "POS",
            metric: "1-5L",
            "Month Labels": "Jun2024",
            x_coordinate: 2.360779079307544,
            "Y Updated": 86.05078928878294,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "POS",
            metric: "5-10L",
            "Month Labels": "Jun2024",
            x_coordinate: 2.1256140764122806,
            "Y Updated": 33.67486044742911,
            circle_color: "Red",
            circle_diameter: 0.18052950887633792,
          },
          {
            Category: "POS",
            metric: ">10L",
            "Month Labels": "Jun2024",
            x_coordinate: 1.319104763264991,
            "Y Updated": 2.8651120795420204,
            circle_color: "Red",
            circle_diameter: 0.024560969735842007,
          },
          {
            Category: "Vintage",
            metric: "V1",
            "Month Labels": "Jun2024",
            x_coordinate: 1.035441991667794,
            "Y Updated": 28.371426855512038,
            circle_color: "Red",
            circle_diameter: 0.07304035613571705,
          },
          {
            Category: "Vintage",
            metric: "V2",
            "Month Labels": "Jun2024",
            x_coordinate: 3.8725847529144053,
            "Y Updated": 34.495447102693966,
            circle_color: "Red",
            circle_diameter: 0.0626325859853718,
          },
          {
            Category: "Vintage",
            metric: "V3",
            "Month Labels": "Jun2024",
            x_coordinate: 2.1783467461941433,
            "Y Updated": 19.379631314720218,
            circle_color: "Red",
            circle_diameter: 0.05902160916638152,
          },
          {
            Category: "Vintage",
            metric: "V4",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6697040662093394,
            "Y Updated": 13.393926420383703,
            circle_color: "Red",
            circle_diameter: 0.10995757688670854,
          },
          {
            Category: "Vintage",
            metric: "V5",
            "Month Labels": "Jun2024",
            x_coordinate: 1.0541704725115155,
            "Y Updated": 11.837783209982979,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V6",
            "Month Labels": "Jun2024",
            x_coordinate: 3.807256462594945,
            "Y Updated": 10.779630553346198,
            circle_color: "Red",
            circle_diameter: 0.12300919731238193,
          },
          {
            Category: "Vintage",
            metric: "V7",
            "Month Labels": "Jun2024",
            "X Coordinate": 2.4662736675180765,
            x_coordinate: 5.045813303547109,
            "Y Updated": 2.695213672118587,
            circle_color: "Red",
            circle_diameter: 0.026487818989841594,
          },
        ],
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
  const getYDomainAndTicks = (data: any) => {
    if (!data || data.length === 0)
      return {
        domain: [-10, 90],
        ticks: [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
      };

    const yValues = data.map((item: any) => item["Y Updated"]);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    const minAdjusted = Math.floor(minY);
    const maxAdjusted = Math.ceil(maxY);
    const domain = [minAdjusted - 1, maxAdjusted + 1];

    const tickInterval = (maxAdjusted - minAdjusted) / 11; // Adjust the interval based on range
    const ticks = [];

    for (let i = minAdjusted - 1; i <= maxAdjusted + 1; i += tickInterval) {
      ticks.push(i.toFixed(0)); // Keep 2 decimal places if necessary
    }

    return { domain, ticks };
  };

  const getXDomainAndTicksxaxis = (data: any) => {
    if (!data || data.length === 0)
      return {
        domain: [-6, 6],
        ticks: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
      };

    const xValues = data.map((item: any) => item.x_coordinate);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minAdjusted = Math.floor(minX);
    const maxAdjusted = Math.ceil(maxX);
    const domain = [minAdjusted - 1, maxAdjusted + 1];
    const tickInterval = (maxAdjusted - minAdjusted) / 10;
    const ticks = [];

    for (let i = minAdjusted - 1; i <= maxAdjusted + 1; i += tickInterval) {
      ticks.push(i.toFixed(2));
    }

    return { domain, ticks };
  };

  const { domain: xDomain, ticks: xTicks } = getXDomainAndTicksxaxis(
    impactAssessmentDataMetrics
  );

  const { domain, ticks } = getYDomainAndTicks(impactAssessmentDataMetrics);
  return (
    <div className="relative w-[100%]  h-[555px] p-3 bg-white rounded-xl shadow flex-col justify-start ml-6 flex gap-5 2xl:w-[58%]">
      <div className="px-2 flex justify-between items-center">
        <h1 className="text-black text-base font-medium font-['DM Sans'] text-left -ml-1 customClassOpper ">
          Impact Assessment
        </h1>
        <div className="border-[#FFA39B] rounded-lg border-[2px] w-[max] flex items-center gap-2 py-1 px-3 m">
          <img src={Monitoring} alt="" />
          <p className="text-[black] font-[500] text-[14px] font-['DM Sans']">
            Value at Risk:
          </p>
          <span className="text-[#EF0000] font-[700] text-[16px] font-['DM Sans']">
            $142.45
          </span>
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
                domain={xDomain}
                ticks={xTicks.map(Number)}
                // tickCount={12}
                // domain={[-6, 6]}
                // ticks={[-6,-5,-4,-3,-2,-1, 0, 1, 2, 3, 4,5,6]}
                axisLine={false}
                tickLine={false}
                tick={true}
                // width={60}
              />
              <YAxis
                type="number"
                dataKey="Y Updated"
                domain={domain}
                ticks={ticks.map(Number)}
                // domain={[-10, 90]}
                // padding={{top:1}}
                fontSize={14}
                // ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                // ticks={[-10, 0, 10, 20,30,40,50,60,70,80,90]}
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
              {/* <ReferenceLine y={5} stroke="#CDD1DB" />
              <ReferenceLine y={15} stroke="#CDD1DB" />
              <ReferenceLine y={25} stroke="#CDD1DB" />
              <ReferenceLine y={35} stroke="#CDD1DB" />
              <ReferenceLine y={45} stroke="#CDD1DB" />
              <ReferenceLine y={55} stroke="#CDD1DB" />
              <ReferenceLine y={65} stroke="#CDD1DB" />
              <ReferenceLine y={75} stroke="#CDD1DB" />
              <ReferenceLine y={85} stroke="#CDD1DB" />
              <ReferenceLine y={-5} stroke="#CDD1DB" />
              <ReferenceLine x={0.5} stroke="#CDD1DB" />
              <ReferenceLine x={1.5} stroke="#CDD1DB" />
              <ReferenceLine x={2.5} stroke="#CDD1DB" />
              <ReferenceLine x={3.5} stroke="#CDD1DB" />
              <ReferenceLine x={4.5} stroke="#CDD1DB" />
              <ReferenceLine x={5.5} stroke="#CDD1DB" />
              <ReferenceLine x={-0.5} stroke="#CDD1DB" />
              <ReferenceLine x={-1.5} stroke="#CDD1DB" />
              <ReferenceLine x={-2.5} stroke="#CDD1DB" />
              <ReferenceLine x={-3.5} stroke="#CDD1DB" />
              <ReferenceLine x={-4.5} stroke="#CDD1DB" />
              <ReferenceLine x={-5.5} stroke="#CDD1DB" /> */}
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
