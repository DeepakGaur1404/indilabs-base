import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ComposedChart,
} from "recharts";
import NewSettlementLhs from "./NewSettlementLhs";

type Props = {
  delinquencyGraphTitle: string;
  delinquencyUniqueGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryAgency: string;
  selectedSubCategoryTOS: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  portfolioRecoveryUniquePayerGraphData: any;
};

type SubCategories = [
  {
    month: any;
    segment: any;
    active_recovery_balance: any;
    recovery: any;
  },
  {
    month: any;
    segment: any;
    value: any;
  }
];

interface Entry {
  month: string;
  segment: string;
  active_recovery_balance: number;
  recovery: number;
  value: number;
}

const colors = ["#4169E1", "#FFB200"];

const NewSettlementRhs = ({
  delinquencyGraphTitle,
  delinquencyUniqueGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryAgency,
  selectedSubCategoryTOS,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
  portfolioRecoveryUniquePayerGraphData,
}: Props) => {
  const [selectedActiveButton, setselectedActiveButton] = useState("");
  const [selectedCategories, setselectedCategory] = useState("");
  const [selectedSubCategories, setselectedSubCategory] = useState("");
  const [selectedSubCategoriesTwo, setselectedSubCategoryTwo] = useState("");
  const [selectedSubCategoriesAgency, setselectedSubCategoryAgency] =
    useState("");
  const [selectedSubCategoriesTOS, setselectedSubCategoryTOS] = useState("");
  const [selectedSubCategoriesPayment, setselectedSubCategoryPayment] =
    useState("");
  const [selectedSubCategoriesLocation, setselectedSubCategoryLocation] =
    useState("");
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  const [
    selectedSubCategoriesSegmentsUniquePayer,
    setselectedSubCategoriesSegmentsUniquePayer,
  ] = useState("");
  const [
    selectedSubCategoriesAgencyUniquePayer,
    setselectedSubCategoriesAgencyUniquePayer,
  ] = useState("");

  const formatYAxisTick = (tick: any) => {
    const value = tick;
    if (value === 0) {
      return `${value}`;
    } else {
      return `${value.toFixed(1)}%`;
    }
  };
  const formatYAxisTickRight = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed()}`;
    }
  };
  const formatYAxisTickRecovery = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };

  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryTOS(selectedSubCategoryTOS);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    // setselectedSubCategoriesAgencyUniquePayer(
    //   selectedSubCategoryUniquePayerAgency
    // );
    setselectedSubCategoriesSegmentsUniquePayer(
      selectedSubCategoryUniquePayerSegments
    );
    // fetchNewdata();
  }, [
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategoryTOS,
    selectedSubCategorySegments,
    selectedSubCategoryUniquePayerSegments,
  ]);

  const graphData =
    selectedCategory === "all" && selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.All.map((item: any) => ({
          month: item[1].month,
          recovery: item[1].recovery,
          "Recovery_%": item[1]["Recovery_%"] * 100,
        }))
      : selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "UP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "MH")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "TN")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "MP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "KA")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "HR")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "AP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "TG")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "GJ")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "RJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "RJ")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].segment === "OTHERS")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "<1Lakh" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].segment === "<1Lakh")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === ">=1 - 5Lakh" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].segment === ">=1 - 5Lakh")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === ">=5 - 10Lakh" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].segment === ">=5 - 10Lakh")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === ">=10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery" &&
        portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].segment === ">=10L")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "Recovery_%": item[1]["Recovery_%"] * 100,
            // value: item[1].value,
          }));

  const formatNumberCroreBar = (num: any) => {
    if (num >= 1e7) {
      // 1 crore and above
      return (num / 1e7).toFixed(2);
    } else if (num >= 1e6) {
      // 10 lakh to 1 crore
      return (num / 1e7).toFixed(2);
    } else if (num >= 1e5) {
      // 1 lakh to 10 lakh
      return (num / 1e7).toFixed(3);
    } else if (num == 0) {
      return "0";
    } else {
      // Less than 1 lakh
      return (num / 1e7).toFixed(3); // You can adjust this if needed
    }
  };
  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2); // You can adjust this if needed
    }
  };
  const arrGraphTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item["Recovery_%"]));
    } else {
      return [0];
    }
    console.log("maxNum value rhs", maxNum);

    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr;
  };
  const arrGraphleft = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item?.recovery));
    } else {
      return [0];
    }
    let num1 = 0;
    let increment = Math.ceil(maxNum / 10);

    for (let i = 0; i <= 10; i++) {
      arr.push(num1);
      num1 += increment;
    }

    return arr;
  };

  //========================
  const uniqueGraphData =
    selectedCategory === "all" && selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.all.map((item: any) => ({
          month: item[0].month,
          unique_payers: item[1].unique_payers,
          "%Unique_payers": item[0]["%Unique_payers"],
        }))
      : selectedSubCategories === "V0" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V0")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V1" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V1")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V2" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V2")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V3" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V3")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V4" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V4")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V5" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V5")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V6" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V6")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V7" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].segment === "V7")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "UP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "MH")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "TN")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "MP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "KA")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "HR")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "AP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "TG")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "GJ")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              unique_payers: item[1].unique_payers,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesLocation === "DL" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "DL")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].segment === "OTHERS")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesTOS === "<1L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].segment === "<1L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesTOS === "1-5L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].segment === "1-5L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "5-10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].segment === "5-10L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }))
      : selectedSubCategoriesTOS === "10L+" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer" &&
        portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].segment === "10L+")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
          }));

  const arrGraphUniqueTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item["%Unique_payers"])
      );
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr;
  };
  const arrGraphUniqueleft = () => {
    let arr = [];
    let maxNum = 0;
    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item?.unique_payers)
      );
    } else {
      return [0];
    }
    let num1 = 0;
    let increment = Math.ceil(maxNum / 10);

    for (let i = 0; i <= 10; i++) {
      arr.push(num1);
      num1 += increment;
    }

    return arr;
  };
  const formatNumber = (num: any) => {
    if (num >= 1e7) {
      return (num / 1e7).toFixed(0);
    } else if (num >= 1e5) {
      return (num / 1e7).toFixed(0);
    } else {
      return num.toString();
    }
  };
  return (
    <div className="w-full xl:w-[100%] ml-3 h-[405px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3">
      <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyUniqueGraphTitle}
        </h1>
        <div
          className={`flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7 ${
            delinquencyUniqueGraphTitle === "Recovery (millions)"
              ? "mr-4"
              : "mr-6"
          }`}
        >
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              {delinquencyUniqueGraphTitle === "Payer%"
                ? "Payers (left scale)"
                : "Recovery (left scale)"}
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FF7A00",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              {delinquencyUniqueGraphTitle === "Payer%"
                ? "% Payer (right scale) "
                : "Recovery % (right scale)"}
            </span>
          </div>
        </div>
      </div>

      {delinquencyUniqueGraphTitle === "Recovery (millions)" &&
        selectedActiveButton === "$Recovery" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 35, left: 10, bottom: 25 }}
              barGap={0}
              barCategoryGap={0}
              data={graphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatNumberMillion}
                ticks={arrGraphleft()}
                interval={0}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                fontSize={11}
                fontWeight={400}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={25}
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />
              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "Recovery %"
                      ? `${value.toFixed(1)}%`
                      : typeof value === "number"
                      ? `₹ ${Math.floor(value).toLocaleString()}`
                      : `₹ ${parseFloat(value.toFixed(2)).toLocaleString()}`;
                  return [formattedValue, `${name}`];
                }}
              />
              <Bar
                yAxisId="left"
                dataKey="recovery"
                name="Recovery"
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              <Line
                yAxisId="right"
                type="linear"
                dataKey="Recovery_%"
                name="Recovery %"
                stroke="#FF7A00"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      {delinquencyUniqueGraphTitle === "Payer%" &&
        selectedActiveButton === "uniquePayer" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 15, left: 10, bottom: 25 }}
              barGap={0}
              barCategoryGap={0}
              data={uniqueGraphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                fontWeight={400}
                fontSize={10}
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickFormatter={formatNumber}
                tickLine={false}
                axisLine={false}
                ticks={arrGraphUniqueleft()}
                interval={0}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                fontSize={11}
                fontWeight={400}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={25}
                axisLine={false}
                tickFormatter={formatYAxisTick}
                tickLine={false}
                ticks={arrGraphUniqueTicks()}
              />

              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "Value"
                      ? `${value.toFixed(2)}%`
                      : `${parseFloat(value.toFixed(2)).toLocaleString()}`;
                  return [formattedValue, `${name}`];
                }}
              />

              <Bar
                yAxisId="left"
                dataKey="unique_payers"
                name="Payers"
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              {/* <Bar
                yAxisId="left"
                dataKey="recovery"
                stackId="a"
                fill={colors[1]}
                barSize={10}
                radius={[10, 10, 0, 0]}
              /> */}
              <Line
                yAxisId="right"
                type="linear"
                dataKey="%Unique_payers"
                name="% Payers"
                stroke="#FF7A00"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
    </div>
  );
};

export default NewSettlementRhs;
