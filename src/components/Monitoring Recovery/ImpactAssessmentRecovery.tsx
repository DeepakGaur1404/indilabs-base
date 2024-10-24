import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "../../NewPages/AllocationEngine/Allocation.scss";
import Monitoring from "../../assets/images/monitoringrisk.svg";
import Arrow1 from "../../assets/images/x-axisArrow1.svg";
import Arrow2 from "../../assets/images/y-axisArrow2.svg";
import { IoIosArrowForward } from "react-icons/io";
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
  // categoriesMatricHeatMap: any;
  categoriesMatricmonitoring:any
};

const ImpactAssessmentRecovery = ({
  Category,
  categoriesMatric,
  setIsCategoryVisible,
  isCategoryVisible,
  // categoriesMatricHeatMap,
  categoriesMatricmonitoring
}: Props) => {
  console.log("Category value", categoriesMatric,);
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
            3
          )}`}</p>
          {/* <p className="label text-black">{`Circle-Size : ${
            circle_diameter.toFixed(4) * 200
          }`}</p> */}
          <p className="intro text-black">{`Y-Coordinate : ${yUpdated.toFixed(
            3
          )}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload, x_coordinate } = props;
    const circle_diameter = payload.circle_diameter * 100;
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
              <p
                style={{
                  color: x_coordinate < 0 ? "black" : "white",
                }}
                className="text-[12px] text-center font-['DM Sans']  font-[500]"
              >
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
  }, [categoriesMatricmonitoring]);

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
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "KA",
            "Month Labels": "Jun2024",
            x_coordinate: 1.5529443094291235,
            "Y Updated": 18.884513237352568,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "DL",
            "Month Labels": "Jun2024",
            x_coordinate: 1.3324822984162636,
            "Y Updated": 5.949828115924044,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "MH",
            "Month Labels": "Jun2024",
            x_coordinate: 1.882693012895705,
            "Y Updated": 15.302863187522924,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "OD",
            "Month Labels": "Jun2024",
            x_coordinate: 1.402910970469687,
            "Y Updated": 1.9582463888464459,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "PC",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8450568955163977,
            "Y Updated": 0.8662625541077846,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "PB",
            "Month Labels": "Jun2024",
            x_coordinate: 1.9984854858686925,
            "Y Updated": 6.155637039285626,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "RJ",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8559211921766883,
            "Y Updated": 6.221873323313603,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "HR",
            "Month Labels": "Jun2024",
            x_coordinate: 3.7549382884753895,
            "Y Updated": 10.578623892545535,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "HP",
            "Month Labels": "Jun2024",
            x_coordinate: -1.0580417642776785,
            "Y Updated": 0.4271854693311965,
            circle_color: "#FBE472",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "JK",
            "Month Labels": "Jun2024",
            x_coordinate: -4.800256369889793,
            "Y Updated": -0.35325004009602345,
            circle_color: "#6AC21A",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "JH",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6407626080106334,
            "Y Updated": 3.2245097031635184,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "TL",
            "Month Labels": "Jun2024",
            x_coordinate: 4.44606484171821,
            "Y Updated": 10.50077380528091,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "UP",
            "Month Labels": "Jun2024",
            x_coordinate: 4.151425606262142,
            "Y Updated": 11.73803653925116,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "UK",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8390744670684946,
            "Y Updated": 3.16210326150182,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "WB",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6302308168784307,
            "Y Updated": 8.620913621607626,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "AP",
            "Month Labels": "Jun2024",
            x_coordinate: 2.0051190590173986,
            "Y Updated": 5.061021086603231,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "MP",
            "Month Labels": "Jun2024",
            x_coordinate: 1.0704073055904242,
            "Y Updated": 2.7357506727196568,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "GJ",
            "Month Labels": "Jun2024",
            x_coordinate: 0.2881871496928144,
            "Y Updated": 2.336107483110233,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "AS",
            "Month Labels": "Jun2024",
            x_coordinate: 1.2315527195183755,
            "Y Updated": 2.4921010057728226,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "BR",
            "Month Labels": "Jun2024",
            x_coordinate: 1.2292970789678372,
            "Y Updated": 2.8475567970705824,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "CD",
            "Month Labels": "Jun2024",
            x_coordinate: 3.1583416389362906,
            "Y Updated": 0.3528264331910831,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "CG",
            "Month Labels": "Jun2024",
            x_coordinate: 0.39527198619258613,
            "Y Updated": -0.0032529041728100857,
            circle_color: "#FD940F",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "DH",
            "Month Labels": "Jun2024",
            x_coordinate: -0.15366897719046002,
            "Y Updated": 0.04514068873263216,
            circle_color: "#FBE472",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "GO",
            x_coordinate: 0.9064295919726548,
            "Y Updated": 0.83248150875941,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "Location",
            metric: "KR",
            "Month Labels": "Jun2024",
            x_coordinate: 1.8300564126817456,
            "Y Updated": 1.9252024328377813,
            circle_color: "#FD6363",
            circle_diameter: 0.35,
          },
          {
            Category: "POS",
            metric: "<1L",
            "Month Labels": "Jun2024",
            x_coordinate: 2.0292485013770762,
            "Y Updated": 17.96660946646867,
            circle_color: "Red",
            circle_diameter: 0.35,
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
            circle_diameter: 0.35,
          },
          {
            Category: "POS",
            metric: ">10L",
            "Month Labels": "Jun2024",
            x_coordinate: 1.319104763264991,
            "Y Updated": 2.8651120795420204,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V1",
            "Month Labels": "Jun2024",
            x_coordinate: 1.035441991667794,
            "Y Updated": 28.371426855512038,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V2",
            "Month Labels": "Jun2024",
            x_coordinate: 3.8725847529144053,
            "Y Updated": 34.495447102693966,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V3",
            "Month Labels": "Jun2024",
            x_coordinate: 2.1783467461941433,
            "Y Updated": 19.379631314720218,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V4",
            "Month Labels": "Jun2024",
            x_coordinate: 1.6697040662093394,
            "Y Updated": 13.393926420383703,
            circle_color: "Red",
            circle_diameter: 0.35,
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
            circle_diameter: 0.35,
          },
          {
            Category: "Vintage",
            metric: "V7",
            "Month Labels": "Jun2024",
            "X Coordinate": 2.4662736675180765,
            x_coordinate: 5.045813303547109,
            "Y Updated": 2.695213672118587,
            circle_color: "Red",
            circle_diameter: 0.35,
          },
        ],
      },
      cached_output: false,
    };

    if (   categoriesMatricmonitoring === "Location") {
      const MRRCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "Location"
      );

      setImpactAssessmentDataMeterics(MRRCoordinates);
    } else if (   categoriesMatricmonitoring === "POS") {
      const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "POS"
      );

      setImpactAssessmentDataMeterics(POSCoordinates);
    } else if (   categoriesMatricmonitoring === "Vintage") {
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
        domain: [-90, 90],
        ticks: [
          -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50,
          60, 70, 80, 90,
        ],
      };

    const yValues = data.map((item: any) => item["Y Updated"]);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    const minAdjusted = Math.floor(minY);
    const maxAdjusted = Math.ceil(maxY);

    // Ensure the domain includes 0
    const domain = [
      minAdjusted > 0 ? 0 : minAdjusted - 1, // If minY is positive, set min to 0
      maxAdjusted < 0 ? 0 : maxAdjusted + 1, // If maxY is negative, set max to 0
    ];

    const tickInterval = (maxAdjusted - minAdjusted) / 36; // Adjust the interval based on range
    const ticks = [];

    for (let i = minAdjusted - 1; i <= maxAdjusted + 1; i += tickInterval) {
      ticks.push(i.toFixed(0)); // Use fixed precision as needed
    }

    return { domain, ticks, minY, maxY };
  };

  const {
    domain,
    ticks,
    minY = 0,
    maxY = 0,
  } = getYDomainAndTicks(impactAssessmentDataMetrics);

  const getXDomainAndTicksxaxis = (data: any) => {
    if (!data || data.length === 0) {
      return {
        domain: [0, 5],
        ticks: [0, 1, 2, 3, 4, 5],
      };
    }

    const xValues = data.map((item: any) => item.x_coordinate);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);

    // Ensure the domain includes 0, starting from 0 explicitly if minX is positive
    const minAdjusted = minX > 0 ? 0 : Math.floor(minX);
    const maxAdjusted = Math.ceil(maxX);

    const domain = [minAdjusted, maxAdjusted];

    // Adjust the tick interval to be finer to handle decimal values like 0.24 and 1.23
    const tickInterval = (maxAdjusted - minAdjusted) / 36; // Make ticks more granular
    const ticks = [];

    // Generate ticks from min to max with the finer interval
    for (let i = minAdjusted; i <= maxAdjusted; i += tickInterval) {
      ticks.push(i.toFixed(2)); // Keep precision with 2 decimal places
    }

    return { domain, ticks, minX: minAdjusted, maxX: maxAdjusted };
  };

  const {
    domain: xDomain,
    ticks: xTicks,
    minX = 0,
    maxX = 0,
  } = getXDomainAndTicksxaxis(impactAssessmentDataMetrics);

  return (
    <>
      <h1 className="text-black text-[16px] font-[500] font-['DM Sans'] text-left  mb-1 customClassOpper -mt-3">
        Impact Assessment
      </h1>
      <div className="relative w-[100%] mb-10 h-[590px] p-3 bg-white rounded-xl shadow flex-col justify-start  flex gap-5 2xl:w-[100%]">
        <div className="px-2 flex justify-between items-center">
          <div className=" w-[max] flex items-center gap-2 py-1 px-1 ">
            <img src={Monitoring} alt="" />
            <p className="text-[black] font-[500] text-[14px] font-['DM Sans']">
              Value at Risk:
            </p>
            <span className="text-[#EF0000] font-[700] text-[16px] font-['DM Sans']">
              ₹398.88 M
            </span>
          </div>

          <div>
            <button
              className="flex text-[#6750a4] items-center text-[14px] font-[500] justify-center gap-2  customClassThird"
              // onClick={handleHotspotReviewClick}
            >
              Review Diagnostics
              <span>
                <IoIosArrowForward className="text-[#6750a4] customClass" />
              </span>
            </button>
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
      <p
          className=" flex justify-center  
     text-[11px]  text-[#ADADAD] font-[500] 
    font-['DM Sans' !important] 
    -rotate-90 
     frequency_text2 customClassfour  -ml-1
  "
          style={{ zIndex: 100 }}
        >
          {/* Value(₹ Millions) */}
          Negative contribution to P&L <img src={Arrow2} alt=" " className="rotate-90 px-12 -mt-9" /> Positive contribution to P&L
        </p>
        <p
          className="
     text-[11px]  text-[#ADADAD] font-[500] 
    font-['DM Sans' !important] 
    -rotate-90 
     frequency_text customClassfour  -ml-3
  "
          style={{ zIndex: 100 }}
        >
          {/* Value(₹ Millions) */}
          YTD Value at Risk (₹ milllions)
        </p>
        {loader ? (
          <Loader />
        ) : (
          <>
            <ResponsiveContainer
              height={500}
              width="99%"
              style={{ marginLeft: 10, marginTop: -26 }}
            >
              <ScatterChart
                width={700}
                height={600}
                margin={{ top: 40, bottom: 10, right: 8, left: 10 }}
              >
                <CartesianGrid stroke="#DEDEDE" />
                <XAxis
                  type="number"
                  dataKey={"x_coordinate"}
                  fontSize={14}
                  // domain={xDomain}
                  // ticks={xTicks.map(Number)}
                  // tickCount={12}
                   domain={[-5, 5]}
                  // ticks={[-6,-5,-4,-3,-2,-1, 0, 0.3,0.6,0.9, 1.2,1.5,1.8,2.1,2.4,2.7,3.0,3.3,3.6,3.9,4.2,4.5]}
                  //  ticks={[-5,-4,-3,-2,-1, 0,1,1.05,1.1,1.15, 1.2, 1.3,1.4,1.5,1.6,1.7,1.8,1.9,2]}
                   ticks={[-5,-4,-3,-2,-1, 0,1,2,3,4,5]}
                  axisLine={false}
                  tickLine={false}
                  // tick={true}
                  tick={{ fill: "black" }}
                  // angle={-70}
                  // dy={0}
                  // dx={-4}
                  textAnchor="end"
                  // width={60}
                  // hide={true}
                />
                <YAxis
                  type="number"
                  dataKey="Y Updated"
                  // domain={domain}
                  // ticks={ticks.map(Number)}
                  domain={[-25, 25]}
                  // padding={{top:1}}
                  fontSize={14}
                  // ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                   ticks={[-25,-20,-15,-10,-5, 0, 5, 10,15,20,25]}
                  //  ticks={[-25,-20,-15,-10,-5, 0,1,2,3,4, 5,6,7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
                  // ticks={majorTicks}
                  interval={0}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black" }}
                  // width={95}
                  // hide={true}
                />

                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  content={<CustomTooltip />}
                  labelStyle={{ display: "none" }}
                />
                <ReferenceLine y={0} stroke="#141313" />
                <ReferenceLine x={0} stroke="#141313" />
                {/* <ReferenceLine
                  segment={[
                    {
                      x: 0,
                      y: 0,
                    },
                    {
                      x: 0,
                      y: 0,
                    },
                  ]}
                  label={{
                    // value: "(0,0)",
                    position: "bottom",
                  }}
                /> */}
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
            {maxY > 0 && minX < 0 && (
              <div className="px-2"
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "12%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "DM Sans",
                  color: "#5F4B06",
                  // fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: "11px",
                  zIndex: 1,
                  cursor: "pointer",
                  backgroundColor:"#FBE472",
                  paddingLeft:"8px",
                  paddingRight:"8px",
                  borderRadius:"3px"
                }}
              >
                Bright Spot
              </div>
            )}
            {maxX > 0 && maxY > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "93%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "DM Sans",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "11px",
                  zIndex: 1,
                  cursor: "pointer",
                  backgroundColor:"#E51B1B",
                  paddingLeft:"8px",
                  paddingRight:"8px",
                  borderRadius:"3px"
                }}
                className="hotspot_text"
              >
                High Risk
              </div>
            )}
            {minX < 0 && minY < 0 && (
              <div
                className="customClassfive "
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "12%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "DM Sans",
                  color: "#0B4913",
                  // fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: "11px",
                  zIndex: 1,
                  cursor: "pointer",
                  backgroundColor:"#ABD974",
                  paddingLeft:"8px",
                  paddingRight:"8px",
                  borderRadius:"3px"
                }}
              >
                High Return
              </div>
            )}
            {minY < 0 && maxX > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "93%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "DM Sans",
                  color: "#FFFFFF",
                  // fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: "11px",
                  zIndex: 1,
                  cursor: "pointer",
                  backgroundColor:"#F36513",
                  paddingLeft:"8px",
                  paddingRight:"8px",
                  borderRadius:"3px"
                }}
                className="Blind_Text customClassfive"
              >
                Early Warning
              </div>
            )}
             <p className="-mt-[25px] pb-2  text-center text-[11px] text-[#ADADAD] font-[500] font-['DM Sans'] benchmark_text customClasssix ">
              {/* Performance / Benchmark */}
              Performance in the month
            </p>
            <p className="  -mt-[25px] w-[100%] flex justify-center item center text-center text-[11px] text-[#ADADAD] font-[500] font-['DM Sans'] benchmark_text customClasssix ">
              {/* Performance / Benchmark */}
              Better than benchmark <img className="px-2" src={Arrow1} alt="" />
              Worse than benchmark
            </p>
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
    </>
  );
};

export default ImpactAssessmentRecovery;
