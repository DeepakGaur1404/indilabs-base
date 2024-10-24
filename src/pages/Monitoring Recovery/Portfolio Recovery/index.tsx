
import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/common/Sidebar";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
import DelinquencyBuckets from "../../../components/Monitoring/DelinquencyBuckets";
import ForwardFlowRates from "../../../components/Monitoring/ForwardFlowRates";
import BenchmarkTable from "../../../components/Monitoring/BenchmarkTable";
import Button from "../../../components/Button";
import SubTabs from "../../../components/SubTabs/SubTabs";
import DelinquencyBucketsPortfolioRecovery from "../../../components/Monitoring Recovery/DelinquencyBucketsPortfolioRecovery";
import ForwardFlowRatesPortfolioRecovery from "../../../components/Monitoring Recovery/ForwardFlowRatesPortfolioRecovery";
import PortfolioBenchmarkTable from "../../../components/Monitoring Recovery/PortfolioBenchmarkTable";
import "../../../NewPages/AllocationEngine/Allocation.scss";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
// import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
// import "../Monitoring.scss";
import { useNavigate } from "react-router-dom";
import PortfolioGraph from "../../../components/Monitoring Recovery/PortfolioGraph";
import BarAndLineCombaineGraph from "../../../components/Monitoring Recovery/BarAndLineCombaineGraph";
import PerformanceDashboard from "../../../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
import AIButtons from "../../../assets/images/AIButton.svg";
import PortfolioAI from "./PortfolioAI";
import "../../../NewPages/AllocationEngine/Allocation.scss";
const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "$ Value" },
  { id: "uniquePayer", label: "# Accounts" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "mob", name: "Vintage" },
  // { id: "placement", name: "Placement" },
  { id: "location", name: "Location" },
  //   { id: "agency", name: "Agency" },
  { id: "pos", name: "POS" },
  // { id: "segments", name: "Segments" },
  // { id: "payment", name: "Payment" },
];

const subCategories = [
  { id: "V1", name: "V1" },
  { id: "V2", name: "V2" },
  { id: "V3", name: "V3" },
  { id: "V4", name: "V4" },
  { id: "V5", name: "V5" },
  { id: "V6", name: "V6" },
  { id: "V7", name: "V7" },
];

const subCategoriesPlacements = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6+", name: "6+" },
];

const subCategoriesAgents = [
  { id: "Very Small", name: "Very Small" },
  { id: "Small", name: "Small" },
  { id: "Medium", name: "Medium" },
  { id: "Large", name: "Large" },
  // { id: "DCA5", name: "DCA5" },
];

const subCategoriesPayment = [
  { id: "PA", name: "PA" },
  { id: "FFS", name: "FFS" },
];
const subCategoriesLocation = [
  { id: "UP", name: "UP" },
  { id: "MH", name: "MH" },
  { id: "TN", name: "TN" },
  { id: "MP", name: "MP" },
  { id: "KA", name: "KA" },
  { id: "HR", name: "HR" },
  { id: "AP", name: "AP" },
  { id: "TG", name: "TG" },
  { id: "GJ", name: "GJ" },
  { id: "DL", name: "DL" },
  { id: "OTHERS", name: "OTHERS" },
];
const subCategoriesTOS = [
  { id: "<1L", name: "<1L" },
  { id: "1-5L", name: "1-5L" },
  { id: "5-10L", name: "5-10L" },
  { id: "10L+", name: "10L+" },
];
const subCategoriesSegment = [
  { id: "Score", name: "Score" },
  { id: "Age", name: "Age" },
  { id: "Industry", name: "Industry" },
  { id: "Employment", name: "Employment" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];
const subCategoriesSegmentUniquePayer = [
  { id: "Seg1", name: "Seg1" },
  { id: "Seg2", name: "Seg2" },
  { id: "Seg3", name: "Seg3" },
  { id: "Seg4", name: "Seg4" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];

interface RecoveryItem {
  [key: string]: {
    name: string;
    value: string;
  };
}

const uniqueStaticData = {
  balance: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_book: 2500000000,
    total_delinquency: 127500000,
    plus_2_delinquency: 75000000,
    gross_wo: 50000000,
    gross_recovery: 12500000,
  },
  all: [
    [
      {
        month: "Feb2023",
        sub_segment: null,
        active_recovery_accounts: 57007.0,
        "%Unique_payers": 10.616240110863579,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Feb2023",
        sub_segment: null,
        average_payment_size: 24606.704697620622,
        unique_payers: 6052.0,
        benchmark_recov_accounts: 5091.671716504117,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: null,
        active_recovery_accounts: 56860.0,
        "%Unique_payers": 9.38621174815336,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Mar2023",
        sub_segment: null,
        average_payment_size: 24215.83632939854,
        unique_payers: 5337.0,
        benchmark_recov_accounts: 5078.542175529744,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: null,
        active_recovery_accounts: 57363.0,
        "%Unique_payers": 7.478688353119607,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Apr2023",
        sub_segment: null,
        average_payment_size: 21284.588610722607,
        unique_payers: 4290.0,
        benchmark_recov_accounts: 5123.468427979471,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: null,
        active_recovery_accounts: 58702.0,
        "%Unique_payers": 8.756090082109639,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "May2023",
        sub_segment: null,
        average_payment_size: 22292.624918287936,
        unique_payers: 5140.0,
        benchmark_recov_accounts: 5243.063362433118,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: null,
        active_recovery_accounts: 59190.0,
        "%Unique_payers": 8.70248352762291,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Jun2023",
        sub_segment: null,
        average_payment_size: 24522.521118229466,
        unique_payers: 5151.0,
        benchmark_recov_accounts: 5286.649865803826,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: null,
        active_recovery_accounts: 58876.0,
        "%Unique_payers": 8.682655071676065,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Jul2023",
        sub_segment: null,
        average_payment_size: 22839.568961267607,
        unique_payers: 5112.0,
        benchmark_recov_accounts: 5258.604451749722,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: null,
        active_recovery_accounts: 58915.0,
        "%Unique_payers": 8.201646439786133,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Aug2023",
        sub_segment: null,
        average_payment_size: 23824.106560430464,
        unique_payers: 4832.0,
        benchmark_recov_accounts: 5262.0877993551685,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: null,
        active_recovery_accounts: 59249.0,
        "%Unique_payers": 8.585798916437408,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Sep2023",
        sub_segment: null,
        average_payment_size: 23797.634202870064,
        unique_payers: 5087.0,
        benchmark_recov_accounts: 5291.919545514629,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: null,
        active_recovery_accounts: 59539.0,
        "%Unique_payers": 7.947731738860243,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Oct2023",
        sub_segment: null,
        average_payment_size: 24667.204940828404,
        unique_payers: 4732.0,
        benchmark_recov_accounts: 5317.8213610423045,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: null,
        active_recovery_accounts: 59909.0,
        "%Unique_payers": 7.51639987314093,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Nov2023",
        sub_segment: null,
        average_payment_size: 22213.086286919828,
        unique_payers: 4503.0,
        benchmark_recov_accounts: 5350.8685049914075,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: null,
        active_recovery_accounts: 60451.0,
        "%Unique_payers": 7.965128781988719,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Dec2023",
        sub_segment: null,
        average_payment_size: 23414.10072274143,
        unique_payers: 4815.0,
        benchmark_recov_accounts: 5399.27810504658,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: null,
        active_recovery_accounts: 60700.0,
        "%Unique_payers": 7.553542009884678,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Jan2024",
        sub_segment: null,
        average_payment_size: 23208.042597600874,
        unique_payers: 4585.0,
        benchmark_recov_accounts: 5421.517939758274,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: null,
        active_recovery_accounts: 61239.0,
        "%Unique_payers": 7.540946129100737,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Feb2024",
        sub_segment: null,
        average_payment_size: 22974.489335210048,
        unique_payers: 4618.0,
        benchmark_recov_accounts: 5469.659589997644,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: null,
        active_recovery_accounts: 61671.0,
        "%Unique_payers": 7.6972969467010435,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Mar2024",
        sub_segment: null,
        average_payment_size: 24942.929014114172,
        unique_payers: 4747.0,
        benchmark_recov_accounts: 5508.244363473353,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: null,
        active_recovery_accounts: 61937.0,
        "%Unique_payers": 6.592182378868851,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Apr2024",
        sub_segment: null,
        average_payment_size: 19925.74624785697,
        unique_payers: 4083.0,
        benchmark_recov_accounts: 5532.0025804746,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: null,
        active_recovery_accounts: 62719.0,
        "%Unique_payers": 7.47939220969722,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "May2024",
        sub_segment: null,
        average_payment_size: 21401.85795992326,
        unique_payers: 4691.0,
        benchmark_recov_accounts: 5601.8481657940565,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: null,
        active_recovery_accounts: 63324.0,
        "%Unique_payers": 6.457267386772787,
        benchmark_rate: 8.931660526784636,
      },
      {
        month: "Jun2024",
        sub_segment: null,
        average_payment_size: 21362.520643189044,
        unique_payers: 4089.0,
        benchmark_recov_accounts: 5655.8847119811035,
      },
    ],
  ],
  mob: [
    [
      {
        month: "Feb2023",
        sub_segment: "V1",
        active_recovery_accounts: 4556.0,
        "%Unique_payers": 28.709394205443374,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Feb2023",
        sub_segment: "V1",
        average_payment_size: 27963.12288990826,
        unique_payers: 1308.0,
        benchmark_recov_accounts: 951.6565376782078,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V1",
        active_recovery_accounts: 2903.0,
        "%Unique_payers": 17.292456079917326,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Mar2023",
        sub_segment: "V1",
        average_payment_size: 36348.62382470119,
        unique_payers: 502.0,
        benchmark_recov_accounts: 606.37816700611,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V1",
        active_recovery_accounts: 3688.0,
        "%Unique_payers": 13.828633405639914,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Apr2023",
        sub_segment: "V1",
        average_payment_size: 28184.717647058824,
        unique_payers: 510.0,
        benchmark_recov_accounts: 770.3488391038696,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V1",
        active_recovery_accounts: 4274.0,
        "%Unique_payers": 20.776789892372484,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "May2023",
        sub_segment: "V1",
        average_payment_size: 35580.53335585586,
        unique_payers: 888.0,
        benchmark_recov_accounts: 892.7524236252546,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V1",
        active_recovery_accounts: 4560.0,
        "%Unique_payers": 21.00877192982456,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Jun2023",
        sub_segment: "V1",
        average_payment_size: 34142.87639874739,
        unique_payers: 958.0,
        benchmark_recov_accounts: 952.4920570264766,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V1",
        active_recovery_accounts: 4569.0,
        "%Unique_payers": 21.05493543444955,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Jul2023",
        sub_segment: "V1",
        average_payment_size: 34403.88312889813,
        unique_payers: 962.0,
        benchmark_recov_accounts: 954.3719755600815,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V1",
        active_recovery_accounts: 4708.0,
        "%Unique_payers": 19.987255734919287,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Aug2023",
        sub_segment: "V1",
        average_payment_size: 35644.21765143465,
        unique_payers: 941.0,
        benchmark_recov_accounts: 983.4062729124237,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V1",
        active_recovery_accounts: 4773.0,
        "%Unique_payers": 20.364550597108735,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Sep2023",
        sub_segment: "V1",
        average_payment_size: 33991.30721193415,
        unique_payers: 972.0,
        benchmark_recov_accounts: 996.9834623217922,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V1",
        active_recovery_accounts: 4856.0,
        "%Unique_payers": 19.028006589785832,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Oct2023",
        sub_segment: "V1",
        average_payment_size: 39779.187694805194,
        unique_payers: 924.0,
        benchmark_recov_accounts: 1014.3204887983707,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V1",
        active_recovery_accounts: 4910.0,
        "%Unique_payers": 17.637474541751526,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Nov2023",
        sub_segment: "V1",
        average_payment_size: 30921.39993071594,
        unique_payers: 866.0,
        benchmark_recov_accounts: 1025.6,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V1",
        active_recovery_accounts: 4865.0,
        "%Unique_payers": 20.24665981500514,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Dec2023",
        sub_segment: "V1",
        average_payment_size: 37702.72959390863,
        unique_payers: 985.0,
        benchmark_recov_accounts: 1016.2004073319756,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V1",
        active_recovery_accounts: 4670.0,
        "%Unique_payers": 18.843683083511777,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Jan2024",
        sub_segment: "V1",
        average_payment_size: 36920.90514772727,
        unique_payers: 880.0,
        benchmark_recov_accounts: 975.4688391038696,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V1",
        active_recovery_accounts: 4707.0,
        "%Unique_payers": 19.50286806883365,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Feb2024",
        sub_segment: "V1",
        average_payment_size: 35106.588344226584,
        unique_payers: 918.0,
        benchmark_recov_accounts: 983.1973930753564,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V1",
        active_recovery_accounts: 4701.0,
        "%Unique_payers": 18.613061050840248,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Mar2024",
        sub_segment: "V1",
        average_payment_size: 35410.48193142857,
        unique_payers: 875.0,
        benchmark_recov_accounts: 981.9441140529532,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V1",
        active_recovery_accounts: 4595.0,
        "%Unique_payers": 16.2132752992383,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Apr2024",
        sub_segment: "V1",
        average_payment_size: 31704.56034899329,
        unique_payers: 745.0,
        benchmark_recov_accounts: 959.8028513238289,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V1",
        active_recovery_accounts: 4860.0,
        "%Unique_payers": 19.17695473251029,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "May2024",
        sub_segment: "V1",
        average_payment_size: 31108.745826180257,
        unique_payers: 932.0,
        benchmark_recov_accounts: 1015.1560081466396,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V1",
        active_recovery_accounts: 4905.0,
        "%Unique_payers": 18.246687054026502,
        benchmark_rate: 20.887983706720977,
      },
      {
        month: "Jun2024",
        sub_segment: "V1",
        average_payment_size: 30493.521463687153,
        unique_payers: 895.0,
        benchmark_recov_accounts: 1024.5556008146639,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V2",
        active_recovery_accounts: 3191.0,
        "%Unique_payers": 18.176120338451895,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Feb2023",
        sub_segment: "V2",
        average_payment_size: 24278.52179310345,
        unique_payers: 580.0,
        benchmark_recov_accounts: 635.6612607099144,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V2",
        active_recovery_accounts: 4708.0,
        "%Unique_payers": 24.468988954970264,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Mar2023",
        sub_segment: "V2",
        average_payment_size: 22232.65861979167,
        unique_payers: 1152.0,
        benchmark_recov_accounts: 937.8543451652388,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V2",
        active_recovery_accounts: 4119.0,
        "%Unique_payers": 19.446467589220685,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Apr2023",
        sub_segment: "V2",
        average_payment_size: 18307.628826466917,
        unique_payers: 801.0,
        benchmark_recov_accounts: 820.5229498164015,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V2",
        active_recovery_accounts: 4146.0,
        "%Unique_payers": 20.791123974915582,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "May2023",
        sub_segment: "V2",
        average_payment_size: 21037.45663573086,
        unique_payers: 862.0,
        benchmark_recov_accounts: 825.9014687882498,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V2",
        active_recovery_accounts: 4081.0,
        "%Unique_payers": 20.240137221269297,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Jun2023",
        sub_segment: "V2",
        average_payment_size: 21987.298813559322,
        unique_payers: 826.0,
        benchmark_recov_accounts: 812.953182374541,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V2",
        active_recovery_accounts: 2631.0,
        "%Unique_payers": 12.770809578107183,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Jul2023",
        sub_segment: "V2",
        average_payment_size: 25242.65098214286,
        unique_payers: 336.0,
        benchmark_recov_accounts: 524.1067931456548,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V2",
        active_recovery_accounts: 3265.0,
        "%Unique_payers": 13.047473200612558,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Aug2023",
        sub_segment: "V2",
        average_payment_size: 26058.260492957743,
        unique_payers: 426.0,
        benchmark_recov_accounts: 650.4023867809058,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V2",
        active_recovery_accounts: 3595.0,
        "%Unique_payers": 14.687065368567453,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Sep2023",
        sub_segment: "V2",
        average_payment_size: 28152.623465909095,
        unique_payers: 528.0,
        benchmark_recov_accounts: 716.139840881273,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V2",
        active_recovery_accounts: 3747.0,
        "%Unique_payers": 14.198025086736054,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Oct2023",
        sub_segment: "V2",
        average_payment_size: 27129.0419924812,
        unique_payers: 532.0,
        benchmark_recov_accounts: 746.4189106487148,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V2",
        active_recovery_accounts: 3840.0,
        "%Unique_payers": 12.760416666666666,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Nov2023",
        sub_segment: "V2",
        average_payment_size: 24097.34218367347,
        unique_payers: 490.0,
        benchmark_recov_accounts: 764.9449204406366,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V2",
        active_recovery_accounts: 4060.0,
        "%Unique_payers": 14.113300492610836,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Dec2023",
        sub_segment: "V2",
        average_payment_size: 23288.080087260038,
        unique_payers: 573.0,
        benchmark_recov_accounts: 808.7698898408813,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V2",
        active_recovery_accounts: 4156.0,
        "%Unique_payers": 14.148219441770934,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Jan2024",
        sub_segment: "V2",
        average_payment_size: 28993.07863945578,
        unique_payers: 588.0,
        benchmark_recov_accounts: 827.8935128518972,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V2",
        active_recovery_accounts: 4261.0,
        "%Unique_payers": 13.377141516076039,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Feb2024",
        sub_segment: "V2",
        average_payment_size: 25842.231228070177,
        unique_payers: 570.0,
        benchmark_recov_accounts: 848.8099755201958,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V2",
        active_recovery_accounts: 4324.0,
        "%Unique_payers": 13.459759481961148,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Mar2024",
        sub_segment: "V2",
        average_payment_size: 29247.138659793818,
        unique_payers: 582.0,
        benchmark_recov_accounts: 861.3598531211751,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V2",
        active_recovery_accounts: 4220.0,
        "%Unique_payers": 12.511848341232227,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Apr2024",
        sub_segment: "V2",
        average_payment_size: 23411.403674242425,
        unique_payers: 528.0,
        benchmark_recov_accounts: 840.6425948592412,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V2",
        active_recovery_accounts: 4135.0,
        "%Unique_payers": 14.123337363966144,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "May2024",
        sub_segment: "V2",
        average_payment_size: 21991.194965753424,
        unique_payers: 584.0,
        benchmark_recov_accounts: 823.7102203182375,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V2",
        active_recovery_accounts: 4156.0,
        "%Unique_payers": 11.645813282001924,
        benchmark_rate: 19.920440636474908,
      },
      {
        month: "Jun2024",
        sub_segment: "V2",
        average_payment_size: 22181.783367768592,
        unique_payers: 484.0,
        benchmark_recov_accounts: 827.8935128518972,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V3",
        active_recovery_accounts: 3567.0,
        "%Unique_payers": 17.802074572469863,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Feb2023",
        sub_segment: "V3",
        average_payment_size: 25033.386913385828,
        unique_payers: 635.0,
        benchmark_recov_accounts: 544.9948415622697,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V3",
        active_recovery_accounts: 3370.0,
        "%Unique_payers": 15.19287833827893,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Mar2023",
        sub_segment: "V3",
        average_payment_size: 22480.339765624998,
        unique_payers: 512.0,
        benchmark_recov_accounts: 514.8956030459346,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V3",
        active_recovery_accounts: 3212.0,
        "%Unique_payers": 11.79950186799502,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Apr2023",
        sub_segment: "V3",
        average_payment_size: 20641.810026385225,
        unique_payers: 379.0,
        benchmark_recov_accounts: 490.75509702775736,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V3",
        active_recovery_accounts: 3001.0,
        "%Unique_payers": 13.195601466177942,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "May2023",
        sub_segment: "V3",
        average_payment_size: 22042.537045454545,
        unique_payers: 396.0,
        benchmark_recov_accounts: 458.51682633259645,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V3",
        active_recovery_accounts: 2944.0,
        "%Unique_payers": 12.839673913043478,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Jun2023",
        sub_segment: "V3",
        average_payment_size: 21956.818174603173,
        unique_payers: 378.0,
        benchmark_recov_accounts: 449.8079096045198,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V3",
        active_recovery_accounts: 4261.0,
        "%Unique_payers": 19.009622154423845,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Jul2023",
        sub_segment: "V3",
        average_payment_size: 19420.906802469137,
        unique_payers: 810.0,
        benchmark_recov_accounts: 651.0297224269221,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V3",
        active_recovery_accounts: 3631.0,
        "%Unique_payers": 18.97548884604792,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Aug2023",
        sub_segment: "V3",
        average_payment_size: 19524.65804063861,
        unique_payers: 689.0,
        benchmark_recov_accounts: 554.7732743797593,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V3",
        active_recovery_accounts: 3528.0,
        "%Unique_payers": 17.9421768707483,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Sep2023",
        sub_segment: "V3",
        average_payment_size: 21305.914344391786,
        unique_payers: 633.0,
        benchmark_recov_accounts: 539.036109064112,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V3",
        active_recovery_accounts: 3478.0,
        "%Unique_payers": 15.842438182863713,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Oct2023",
        sub_segment: "V3",
        average_payment_size: 18655.06891107078,
        unique_payers: 551.0,
        benchmark_recov_accounts: 531.3967084254483,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V3",
        active_recovery_accounts: 2334.0,
        "%Unique_payers": 9.768637532133676,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Nov2023",
        sub_segment: "V3",
        average_payment_size: 15926.15701754386,
        unique_payers: 228.0,
        benchmark_recov_accounts: 356.60722181282244,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V3",
        active_recovery_accounts: 2949.0,
        "%Unique_payers": 10.308579179382841,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Dec2023",
        sub_segment: "V3",
        average_payment_size: 24077.808552631577,
        unique_payers: 304.0,
        benchmark_recov_accounts: 450.57184966838616,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V3",
        active_recovery_accounts: 3248.0,
        "%Unique_payers": 10.775862068965516,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Jan2024",
        sub_segment: "V3",
        average_payment_size: 21844.328885714283,
        unique_payers: 350.0,
        benchmark_recov_accounts: 496.25546548759525,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V3",
        active_recovery_accounts: 3396.0,
        "%Unique_payers": 11.42520612485277,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Feb2024",
        sub_segment: "V3",
        average_payment_size: 17092.78025773196,
        unique_payers: 388.0,
        benchmark_recov_accounts: 518.8680913780398,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V3",
        active_recovery_accounts: 3503.0,
        "%Unique_payers": 12.018270054239224,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Mar2024",
        sub_segment: "V3",
        average_payment_size: 20402.61862232779,
        unique_payers: 421.0,
        benchmark_recov_accounts: 535.2164087447802,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V3",
        active_recovery_accounts: 3711.0,
        "%Unique_payers": 10.212880625168417,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Apr2024",
        sub_segment: "V3",
        average_payment_size: 20175.171688654355,
        unique_payers: 379.0,
        benchmark_recov_accounts: 566.9963154016212,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V3",
        active_recovery_accounts: 3813.0,
        "%Unique_payers": 11.591922370836611,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "May2024",
        sub_segment: "V3",
        average_payment_size: 26167.96452488688,
        unique_payers: 442.0,
        benchmark_recov_accounts: 582.5806927044953,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V3",
        active_recovery_accounts: 3926.0,
        "%Unique_payers": 10.315843097300052,
        benchmark_rate: 15.278801277327439,
      },
      {
        month: "Jun2024",
        sub_segment: "V3",
        average_payment_size: 20893.418395061726,
        unique_payers: 405.0,
        benchmark_recov_accounts: 599.8457381478753,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V4",
        active_recovery_accounts: 20813.0,
        "%Unique_payers": 12.131840676500264,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Feb2023",
        sub_segment: "V4",
        average_payment_size: 22779.225568316826,
        unique_payers: 2525.0,
        benchmark_recov_accounts: 2254.4688069398894,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V4",
        active_recovery_accounts: 19471.0,
        "%Unique_payers": 11.365620666632429,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Mar2023",
        sub_segment: "V4",
        average_payment_size: 22432.635910528694,
        unique_payers: 2213.0,
        benchmark_recov_accounts: 2109.103067310171,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V4",
        active_recovery_accounts: 18931.0,
        "%Unique_payers": 9.45539062912683,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Apr2023",
        sub_segment: "V4",
        average_payment_size: 19906.146927374302,
        unique_payers: 1790.0,
        benchmark_recov_accounts: 2050.610146743816,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V4",
        active_recovery_accounts: 18550.0,
        "%Unique_payers": 10.625336927223719,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "May2023",
        sub_segment: "V4",
        average_payment_size: 18477.20177574835,
        unique_payers: 1971.0,
        benchmark_recov_accounts: 2009.3401416775548,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V4",
        active_recovery_accounts: 17721.0,
        "%Unique_payers": 10.507307714011626,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Jun2023",
        sub_segment: "V4",
        average_payment_size: 22178.047207303975,
        unique_payers: 1862.0,
        benchmark_recov_accounts: 1919.542676585873,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V4",
        active_recovery_accounts: 17023.0,
        "%Unique_payers": 10.726663925277565,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Jul2023",
        sub_segment: "V4",
        average_payment_size: 19504.490388828042,
        unique_payers: 1826.0,
        benchmark_recov_accounts: 1843.935160742696,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V4",
        active_recovery_accounts: 16326.0,
        "%Unique_payers": 9.922822491730981,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Aug2023",
        sub_segment: "V4",
        average_payment_size: 21138.34122839506,
        unique_payers: 1620.0,
        benchmark_recov_accounts: 1768.43596512279,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V4",
        active_recovery_accounts: 11714.0,
        "%Unique_payers": 11.644186443571794,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Sep2023",
        sub_segment: "V4",
        average_payment_size: 19207.22267595308,
        unique_payers: 1364.0,
        benchmark_recov_accounts: 1268.8630953968127,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V4",
        active_recovery_accounts: 10025.0,
        "%Unique_payers": 10.683291770573566,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Oct2023",
        sub_segment: "V4",
        average_payment_size: 21067.703286647993,
        unique_payers: 1071.0,
        benchmark_recov_accounts: 1085.9102382920478,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V4",
        active_recovery_accounts: 10286.0,
        "%Unique_payers": 11.996888975306241,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Nov2023",
        sub_segment: "V4",
        average_payment_size: 19429.612739059972,
        unique_payers: 1234.0,
        benchmark_recov_accounts: 1114.1818165657858,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V4",
        active_recovery_accounts: 9169.0,
        "%Unique_payers": 12.171447267968153,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Dec2023",
        sub_segment: "V4",
        average_payment_size: 17255.933476702507,
        unique_payers: 1116.0,
        benchmark_recov_accounts: 993.1881271720484,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V4",
        active_recovery_accounts: 8723.0,
        "%Unique_payers": 11.418090106614697,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Jan2024",
        sub_segment: "V4",
        average_payment_size: 19538.13145582329,
        unique_payers: 996.0,
        benchmark_recov_accounts: 944.8773075931704,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V4",
        active_recovery_accounts: 8404.0,
        "%Unique_payers": 11.268443598286531,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Feb2024",
        sub_segment: "V4",
        average_payment_size: 20851.012270327352,
        unique_payers: 947.0,
        benchmark_recov_accounts: 910.3231563697127,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V4",
        active_recovery_accounts: 8280.0,
        "%Unique_payers": 10.905797101449275,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Mar2024",
        sub_segment: "V4",
        average_payment_size: 20923.66666666667,
        unique_payers: 903.0,
        benchmark_recov_accounts: 896.8914486841053,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V4",
        active_recovery_accounts: 8250.0,
        "%Unique_payers": 9.115151515151515,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Apr2024",
        sub_segment: "V4",
        average_payment_size: 14983.294042553192,
        unique_payers: 752.0,
        benchmark_recov_accounts: 893.6418419859745,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V4",
        active_recovery_accounts: 8341.0,
        "%Unique_payers": 10.106701834312434,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "May2024",
        sub_segment: "V4",
        average_payment_size: 16483.63824436536,
        unique_payers: 843.0,
        benchmark_recov_accounts: 903.498982303638,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V4",
        active_recovery_accounts: 8440.0,
        "%Unique_payers": 8.30568720379147,
        benchmark_rate: 10.83202232710272,
      },
      {
        month: "Jun2024",
        sub_segment: "V4",
        average_payment_size: 19717.482624821685,
        unique_payers: 701.0,
        benchmark_recov_accounts: 914.2226844074696,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V5",
        active_recovery_accounts: 18631.0,
        "%Unique_payers": 4.696473619236756,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Feb2023",
        sub_segment: "V5",
        average_payment_size: 25198.683074285713,
        unique_payers: 875.0,
        benchmark_recov_accounts: 802.2734853108557,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V5",
        active_recovery_accounts: 19640.0,
        "%Unique_payers": 4.266802443991853,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Mar2023",
        sub_segment: "V5",
        average_payment_size: 25788.782183770887,
        unique_payers: 838.0,
        benchmark_recov_accounts: 845.7222506309487,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V5",
        active_recovery_accounts: 20042.0,
        "%Unique_payers": 3.50264444666201,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Apr2023",
        sub_segment: "V5",
        average_payment_size: 22599.1844017094,
        unique_payers: 702.0,
        benchmark_recov_accounts: 863.0328588159609,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V5",
        active_recovery_accounts: 20611.0,
        "%Unique_payers": 4.240454126437339,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "May2023",
        sub_segment: "V5",
        average_payment_size: 19417.41704805492,
        unique_payers: 874.0,
        benchmark_recov_accounts: 887.5346898041997,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V5",
        active_recovery_accounts: 21174.0,
        "%Unique_payers": 4.481911778596392,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Jun2023",
        sub_segment: "V5",
        average_payment_size: 23756.878619599578,
        unique_payers: 949.0,
        benchmark_recov_accounts: 911.778153506095,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V5",
        active_recovery_accounts: 21148.0,
        "%Unique_payers": 4.648193682617742,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Jul2023",
        sub_segment: "V5",
        average_payment_size: 20089.23553407935,
        unique_payers: 983.0,
        benchmark_recov_accounts: 910.6585619319401,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V5",
        active_recovery_accounts: 21173.0,
        "%Unique_payers": 4.576583384499126,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Aug2023",
        sub_segment: "V5",
        average_payment_size: 19445.855438596493,
        unique_payers: 969.0,
        benchmark_recov_accounts: 911.7350922917045,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V5",
        active_recovery_accounts: 25140.0,
        "%Unique_payers": 5.505171042163883,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Sep2023",
        sub_segment: "V5",
        average_payment_size: 21310.836950867055,
        unique_payers: 1384.0,
        benchmark_recov_accounts: 1082.5589297791269,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V5",
        active_recovery_accounts: 26224.0,
        "%Unique_payers": 5.548352654057352,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Oct2023",
        sub_segment: "V5",
        average_payment_size: 20211.571216494845,
        unique_payers: 1455.0,
        benchmark_recov_accounts: 1129.2372861785132,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V5",
        active_recovery_accounts: 26618.0,
        "%Unique_payers": 5.4962807122999475,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Nov2023",
        sub_segment: "V5",
        average_payment_size: 20000.91785372522,
        unique_payers: 1463.0,
        benchmark_recov_accounts: 1146.2034046484007,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V5",
        active_recovery_accounts: 26767.0,
        "%Unique_payers": 5.884111032241193,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Dec2023",
        sub_segment: "V5",
        average_payment_size: 19807.10403809524,
        unique_payers: 1575.0,
        benchmark_recov_accounts: 1152.6195255925968,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V5",
        active_recovery_accounts: 26571.0,
        "%Unique_payers": 5.682887358398254,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Jan2024",
        sub_segment: "V5",
        average_payment_size: 16745.128337748345,
        unique_payers: 1510.0,
        benchmark_recov_accounts: 1144.1795275720435,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V5",
        active_recovery_accounts: 26433.0,
        "%Unique_payers": 5.856315968675519,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Feb2024",
        sub_segment: "V5",
        average_payment_size: 18029.537487080102,
        unique_payers: 1548.0,
        benchmark_recov_accounts: 1138.237079986144,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V5",
        active_recovery_accounts: 26136.0,
        "%Unique_payers": 6.473829201101928,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Mar2024",
        sub_segment: "V5",
        average_payment_size: 21954.902730496455,
        unique_payers: 1692.0,
        benchmark_recov_accounts: 1125.4478993121422,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V5",
        active_recovery_accounts: 25262.0,
        "%Unique_payers": 5.462750376058903,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Apr2024",
        sub_segment: "V5",
        average_payment_size: 16544.026347826086,
        unique_payers: 1380.0,
        benchmark_recov_accounts: 1087.8123979347772,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V5",
        active_recovery_accounts: 25252.0,
        "%Unique_payers": 6.324251544432125,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "May2024",
        sub_segment: "V5",
        average_payment_size: 17497.972880400754,
        unique_payers: 1597.0,
        benchmark_recov_accounts: 1087.3817857908714,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V5",
        active_recovery_accounts: 25440.0,
        "%Unique_payers": 5.338050314465409,
        benchmark_rate: 4.306121439057783,
      },
      {
        month: "Jun2024",
        sub_segment: "V5",
        average_payment_size: 17473.507673048603,
        unique_payers: 1358.0,
        benchmark_recov_accounts: 1095.4772940963,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V6",
        active_recovery_accounts: 3230.0,
        "%Unique_payers": 2.538699690402477,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Feb2023",
        sub_segment: "V6",
        average_payment_size: 28711.457195121955,
        unique_payers: 82.0,
        benchmark_recov_accounts: 76.67620620069712,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V6",
        active_recovery_accounts: 3674.0,
        "%Unique_payers": 2.286336418072945,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Mar2023",
        sub_segment: "V6",
        average_payment_size: 25569.68380952381,
        unique_payers: 84.0,
        benchmark_recov_accounts: 87.21621720785177,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V6",
        active_recovery_accounts: 4219.0,
        "%Unique_payers": 1.82507703247215,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Apr2023",
        sub_segment: "V6",
        average_payment_size: 33005.93506493507,
        unique_payers: 77.0,
        benchmark_recov_accounts: 100.1538433314988,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V6",
        active_recovery_accounts: 4877.0,
        "%Unique_payers": 2.3785113799466884,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "May2023",
        sub_segment: "V6",
        average_payment_size: 19977.88844827586,
        unique_payers: 116.0,
        benchmark_recov_accounts: 115.77394973399376,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V6",
        active_recovery_accounts: 5391.0,
        "%Unique_payers": 2.485624188462252,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Jun2023",
        sub_segment: "V6",
        average_payment_size: 21762.83440298507,
        unique_payers: 134.0,
        benchmark_recov_accounts: 127.97567418822234,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V6",
        active_recovery_accounts: 5864.0,
        "%Unique_payers": 2.626193724420191,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Jul2023",
        sub_segment: "V6",
        average_payment_size: 21816.534350649352,
        unique_payers: 154.0,
        benchmark_recov_accounts: 139.20410933773618,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V6",
        active_recovery_accounts: 6364.0,
        "%Unique_payers": 2.341294783155248,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Aug2023",
        sub_segment: "V6",
        average_payment_size: 22849.85073825503,
        unique_payers: 149.0,
        benchmark_recov_accounts: 151.07349110254998,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V6",
        active_recovery_accounts: 6983.0,
        "%Unique_payers": 2.4344837462408706,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Sep2023",
        sub_segment: "V6",
        average_payment_size: 22064.959176470587,
        unique_payers: 170.0,
        benchmark_recov_accounts: 165.76778572738948,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V6",
        active_recovery_accounts: 7605.0,
        "%Unique_payers": 2.0907297830374754,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Oct2023",
        sub_segment: "V6",
        average_payment_size: 17270.43779874214,
        unique_payers: 159.0,
        benchmark_recov_accounts: 180.53329664281785,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V6",
        active_recovery_accounts: 8233.0,
        "%Unique_payers": 2.1498846107129843,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Nov2023",
        sub_segment: "V6",
        average_payment_size: 22847.155084745762,
        unique_payers: 177.0,
        benchmark_recov_accounts: 195.44124013942397,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V6",
        active_recovery_accounts: 8880.0,
        "%Unique_payers": 2.40990990990991,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Dec2023",
        sub_segment: "V6",
        average_payment_size: 18855.72836448598,
        unique_payers: 214.0,
        benchmark_recov_accounts: 210.80022014309301,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V6",
        active_recovery_accounts: 9499.0,
        "%Unique_payers": 2.200231603326666,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Jan2024",
        sub_segment: "V6",
        average_payment_size: 18224.56803827751,
        unique_payers: 209.0,
        benchmark_recov_accounts: 225.4945147679325,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V6",
        active_recovery_accounts: 10109.0,
        "%Unique_payers": 2.0377881096053025,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Feb2024",
        sub_segment: "V6",
        average_payment_size: 21209.652718446603,
        unique_payers: 206.0,
        benchmark_recov_accounts: 239.9751605210053,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V6",
        active_recovery_accounts: 10513.0,
        "%Unique_payers": 2.035575002378008,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Mar2024",
        sub_segment: "V6",
        average_payment_size: 21541.658878504673,
        unique_payers: 214.0,
        benchmark_recov_accounts: 249.56562098697486,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V6",
        active_recovery_accounts: 11417.0,
        "%Unique_payers": 1.7254970657791013,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Apr2024",
        sub_segment: "V6",
        average_payment_size: 17428.996395939088,
        unique_payers: 197.0,
        benchmark_recov_accounts: 271.0254632177582,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V6",
        active_recovery_accounts: 11630.0,
        "%Unique_payers": 2.0120378331900257,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "May2024",
        sub_segment: "V6",
        average_payment_size: 17927.83188034188,
        unique_payers: 234.0,
        benchmark_recov_accounts: 276.0818198495689,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V6",
        active_recovery_accounts: 11479.0,
        "%Unique_payers": 1.7510236083282515,
        benchmark_rate: 2.373876352962759,
      },
      {
        month: "Jun2024",
        sub_segment: "V6",
        average_payment_size: 14672.873383084576,
        unique_payers: 201.0,
        benchmark_recov_accounts: 272.4972665565951,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V7",
        active_recovery_accounts: 3019.0,
        "%Unique_payers": 1.5568068896985758,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Feb2023",
        sub_segment: "V7",
        average_payment_size: 9479.511063829788,
        unique_payers: 47.0,
        benchmark_recov_accounts: 36.466288332378824,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V7",
        active_recovery_accounts: 3094.0,
        "%Unique_payers": 1.1635423400129283,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Mar2023",
        sub_segment: "V7",
        average_payment_size: 13018.790555555555,
        unique_payers: 36.0,
        benchmark_recov_accounts: 37.372208049148746,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V7",
        active_recovery_accounts: 3152.0,
        "%Unique_payers": 0.983502538071066,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Apr2023",
        sub_segment: "V7",
        average_payment_size: 13255.967741935483,
        unique_payers: 31.0,
        benchmark_recov_accounts: 38.072785963450826,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V7",
        active_recovery_accounts: 3243.0,
        "%Unique_payers": 1.0175763182238668,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "May2023",
        sub_segment: "V7",
        average_payment_size: 12685.57303030303,
        unique_payers: 33.0,
        benchmark_recov_accounts: 39.17196855313167,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V7",
        active_recovery_accounts: 3319.0,
        "%Unique_payers": 1.3257005122024708,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Jun2023",
        sub_segment: "V7",
        average_payment_size: 8827.797272727272,
        unique_payers: 44.0,
        benchmark_recov_accounts: 40.089967199458535,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V7",
        active_recovery_accounts: 3380.0,
        "%Unique_payers": 1.21301775147929,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Jul2023",
        sub_segment: "V7",
        average_payment_size: 17663.69390243902,
        unique_payers: 41.0,
        benchmark_recov_accounts: 40.82678190243141,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V7",
        active_recovery_accounts: 3448.0,
        "%Unique_payers": 1.1020881670533642,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Aug2023",
        sub_segment: "V7",
        average_payment_size: 13994.506842105264,
        unique_payers: 38.0,
        benchmark_recov_accounts: 41.64814911230281,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V7",
        active_recovery_accounts: 3516.0,
        "%Unique_payers": 1.023890784982935,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Sep2023",
        sub_segment: "V7",
        average_payment_size: 6219.235555555556,
        unique_payers: 36.0,
        benchmark_recov_accounts: 42.46951632217421,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V7",
        active_recovery_accounts: 3604.0,
        "%Unique_payers": 1.1098779134295227,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Oct2023",
        sub_segment: "V7",
        average_payment_size: 13507.627250000001,
        unique_payers: 40.0,
        benchmark_recov_accounts: 43.53246212318426,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V7",
        active_recovery_accounts: 3688.0,
        "%Unique_payers": 1.2201735357917571,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Nov2023",
        sub_segment: "V7",
        average_payment_size: 11717.83,
        unique_payers: 45.0,
        benchmark_recov_accounts: 44.54709220596658,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V7",
        active_recovery_accounts: 3761.0,
        "%Unique_payers": 1.2762563148098909,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Dec2023",
        sub_segment: "V7",
        average_payment_size: 9355.128125000001,
        unique_payers: 48.0,
        benchmark_recov_accounts: 45.42885406362264,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V7",
        active_recovery_accounts: 3833.0,
        "%Unique_payers": 1.3566397078006782,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Jan2024",
        sub_segment: "V7",
        average_payment_size: 12903.384423076923,
        unique_payers: 52.0,
        benchmark_recov_accounts: 46.29853699172177,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V7",
        active_recovery_accounts: 3929.0,
        "%Unique_payers": 1.0435225248154747,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Feb2024",
        sub_segment: "V7",
        average_payment_size: 11742.731707317073,
        unique_payers: 41.0,
        benchmark_recov_accounts: 47.458114229187274,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V7",
        active_recovery_accounts: 4214.0,
        "%Unique_payers": 1.4238253440911248,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Mar2024",
        sub_segment: "V7",
        average_payment_size: 19281.563000000002,
        unique_payers: 60.0,
        benchmark_recov_accounts: 50.900609152913,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V7",
        active_recovery_accounts: 4482.0,
        "%Unique_payers": 2.2757697456492636,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Apr2024",
        sub_segment: "V7",
        average_payment_size: 1937.3283333333331,
        unique_payers: 102.0,
        benchmark_recov_accounts: 54.137762274170875,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V7",
        active_recovery_accounts: 4688.0,
        "%Unique_payers": 1.2585324232081911,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "May2024",
        sub_segment: "V7",
        average_payment_size: 16247.186610169492,
        unique_payers: 59.0,
        benchmark_recov_accounts: 56.626021762898944,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V7",
        active_recovery_accounts: 4978.0,
        "%Unique_payers": 0.9039775010044194,
        benchmark_rate: 1.207892955693237,
      },
      {
        month: "Jun2024",
        sub_segment: "V7",
        average_payment_size: 8035.584666666666,
        unique_payers: 45.0,
        benchmark_recov_accounts: 60.12891133440933,
      },
    ],
  ],
  location: [
    [
      {
        month: "Feb2023",
        sub_segment: "MH",
        active_recovery_accounts: 6903.0,
        "%Unique_payers": 11.487758945386064,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Feb2023",
        sub_segment: "MH",
        average_payment_size: 23655.352875157627,
        unique_payers: 793.0,
        benchmark_recov_accounts: 682.2807455444621,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "MH",
        active_recovery_accounts: 6926.0,
        "%Unique_payers": 10.55443257291366,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Mar2023",
        sub_segment: "MH",
        average_payment_size: 23182.85722298222,
        unique_payers: 731.0,
        benchmark_recov_accounts: 684.554026313334,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "MH",
        active_recovery_accounts: 7027.0,
        "%Unique_payers": 8.538494378824533,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Apr2023",
        sub_segment: "MH",
        average_payment_size: 20640.246566666665,
        unique_payers: 600.0,
        benchmark_recov_accounts: 694.5366940375105,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "MH",
        active_recovery_accounts: 7254.0,
        "%Unique_payers": 10.063413289219742,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "May2023",
        sub_segment: "MH",
        average_payment_size: 23550.991356164384,
        unique_payers: 730.0,
        benchmark_recov_accounts: 716.972986843333,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "MH",
        active_recovery_accounts: 7365.0,
        "%Unique_payers": 9.355057705363205,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Jun2023",
        sub_segment: "MH",
        average_payment_size: 24579.090870827284,
        unique_payers: 689.0,
        benchmark_recov_accounts: 727.9440375104974,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "MH",
        active_recovery_accounts: 7393.0,
        "%Unique_payers": 9.387258217232517,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Jul2023",
        sub_segment: "MH",
        average_payment_size: 24241.529913544666,
        unique_payers: 694.0,
        benchmark_recov_accounts: 730.7115097508631,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "MH",
        active_recovery_accounts: 7479.0,
        "%Unique_payers": 9.426393902928199,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Aug2023",
        sub_segment: "MH",
        average_payment_size: 23910.40565957447,
        unique_payers: 705.0,
        benchmark_recov_accounts: 739.211603060558,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "MH",
        active_recovery_accounts: 7603.0,
        "%Unique_payers": 8.98329606734184,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Sep2023",
        sub_segment: "MH",
        average_payment_size: 20713.369970717424,
        unique_payers: 683.0,
        benchmark_recov_accounts: 751.4675515536064,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "MH",
        active_recovery_accounts: 7733.0,
        "%Unique_payers": 8.858140437087805,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Oct2023",
        sub_segment: "MH",
        average_payment_size: 28124.44569343065,
        unique_payers: 685.0,
        benchmark_recov_accounts: 764.3165298124476,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "MH",
        active_recovery_accounts: 7878.0,
        "%Unique_payers": 8.707793856308708,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Nov2023",
        sub_segment: "MH",
        average_payment_size: 25432.94518950437,
        unique_payers: 686.0,
        benchmark_recov_accounts: 778.6480824857703,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "MH",
        active_recovery_accounts: 7977.0,
        "%Unique_payers": 8.938197317287202,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Dec2023",
        sub_segment: "MH",
        average_payment_size: 26587.220603085552,
        unique_payers: 713.0,
        benchmark_recov_accounts: 788.4330736213493,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "MH",
        active_recovery_accounts: 8089.0,
        "%Unique_payers": 9.34602546668315,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Jan2024",
        sub_segment: "MH",
        average_payment_size: 25772.39908730159,
        unique_payers: 756.0,
        benchmark_recov_accounts: 799.5029625828124,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "MH",
        active_recovery_accounts: 8193.0,
        "%Unique_payers": 9.276211399975589,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Feb2024",
        sub_segment: "MH",
        average_payment_size: 26078.397592105266,
        unique_payers: 760.0,
        benchmark_recov_accounts: 809.7821451898852,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "MH",
        active_recovery_accounts: 8324.0,
        "%Unique_payers": 9.851033157135992,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Mar2024",
        sub_segment: "MH",
        average_payment_size: 24467.348463414637,
        unique_payers: 820.0,
        benchmark_recov_accounts: 822.7299617430251,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "MH",
        active_recovery_accounts: 8358.0,
        "%Unique_payers": 7.896625987078249,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Apr2024",
        sub_segment: "MH",
        average_payment_size: 22508.172757575758,
        unique_payers: 660.0,
        benchmark_recov_accounts: 826.0904637491836,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "MH",
        active_recovery_accounts: 8512.0,
        "%Unique_payers": 8.43515037593985,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "May2024",
        sub_segment: "MH",
        average_payment_size: 25506.010111420608,
        unique_payers: 718.0,
        benchmark_recov_accounts: 841.3115610711953,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "MH",
        active_recovery_accounts: 8646.0,
        "%Unique_payers": 7.668285912560721,
        benchmark_rate: 9.883829429877764,
      },
      {
        month: "Jun2024",
        sub_segment: "MH",
        average_payment_size: 24451.81491704374,
        unique_payers: 663.0,
        benchmark_recov_accounts: 854.5558925072315,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "UP",
        active_recovery_accounts: 4377.0,
        "%Unique_payers": 12.017363490975553,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Feb2023",
        sub_segment: "UP",
        average_payment_size: 20092.827300380228,
        unique_payers: 526.0,
        benchmark_recov_accounts: 458.9028914757792,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "UP",
        active_recovery_accounts: 4360.0,
        "%Unique_payers": 11.123853211009175,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Mar2023",
        sub_segment: "UP",
        average_payment_size: 21080.95375257732,
        unique_payers: 485.0,
        benchmark_recov_accounts: 457.1205407435224,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "UP",
        active_recovery_accounts: 4396.0,
        "%Unique_payers": 9.303912647861692,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Apr2023",
        sub_segment: "UP",
        average_payment_size: 19050.330073349633,
        unique_payers: 409.0,
        benchmark_recov_accounts: 460.8949305294781,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "UP",
        active_recovery_accounts: 4494.0,
        "%Unique_payers": 10.59190031152648,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "May2023",
        sub_segment: "UP",
        average_payment_size: 20000.716827731096,
        unique_payers: 476.0,
        benchmark_recov_accounts: 471.1696582801352,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "UP",
        active_recovery_accounts: 4525.0,
        "%Unique_payers": 9.966850828729282,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Jun2023",
        sub_segment: "UP",
        average_payment_size: 19143.236541019956,
        unique_payers: 451.0,
        benchmark_recov_accounts: 474.41982726248597,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "UP",
        active_recovery_accounts: 4478.0,
        "%Unique_payers": 9.937472085752567,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Jul2023",
        sub_segment: "UP",
        average_payment_size: 18536.21168539326,
        unique_payers: 445.0,
        benchmark_recov_accounts: 469.49215170859935,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "UP",
        active_recovery_accounts: 4485.0,
        "%Unique_payers": 8.918617614269788,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Aug2023",
        sub_segment: "UP",
        average_payment_size: 21443.959375,
        unique_payers: 400.0,
        benchmark_recov_accounts: 470.2260608336463,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "UP",
        active_recovery_accounts: 4526.0,
        "%Unique_payers": 10.05302695536898,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Sep2023",
        sub_segment: "UP",
        average_payment_size: 17499.82085714286,
        unique_payers: 455.0,
        benchmark_recov_accounts: 474.52467142320694,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "UP",
        active_recovery_accounts: 4563.0,
        "%Unique_payers": 9.335963182117029,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Oct2023",
        sub_segment: "UP",
        average_payment_size: 19710.695352112674,
        unique_payers: 426.0,
        benchmark_recov_accounts: 478.4039053698836,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "UP",
        active_recovery_accounts: 4602.0,
        "%Unique_payers": 8.25727944372012,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Nov2023",
        sub_segment: "UP",
        average_payment_size: 18309.753105263157,
        unique_payers: 380.0,
        benchmark_recov_accounts: 482.49282763800227,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "UP",
        active_recovery_accounts: 4675.0,
        "%Unique_payers": 9.262032085561497,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Dec2023",
        sub_segment: "UP",
        average_payment_size: 14917.193926097,
        unique_payers: 433.0,
        benchmark_recov_accounts: 490.1464513706347,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "UP",
        active_recovery_accounts: 4693.0,
        "%Unique_payers": 8.331557639036863,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Jan2024",
        sub_segment: "UP",
        average_payment_size: 19747.199437340154,
        unique_payers: 391.0,
        benchmark_recov_accounts: 492.0336462636125,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "UP",
        active_recovery_accounts: 4740.0,
        "%Unique_payers": 7.932489451476793,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Feb2024",
        sub_segment: "UP",
        average_payment_size: 20555.563856382978,
        unique_payers: 376.0,
        benchmark_recov_accounts: 496.9613218174991,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "UP",
        active_recovery_accounts: 4772.0,
        "%Unique_payers": 7.858340318524728,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Mar2024",
        sub_segment: "UP",
        average_payment_size: 18715.43168,
        unique_payers: 375.0,
        benchmark_recov_accounts: 500.3163349605708,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "UP",
        active_recovery_accounts: 4827.0,
        "%Unique_payers": 7.209446861404599,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Apr2024",
        sub_segment: "UP",
        average_payment_size: 18525.7233045977,
        unique_payers: 348.0,
        benchmark_recov_accounts: 506.08276380022534,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "UP",
        active_recovery_accounts: 4914.0,
        "%Unique_payers": 8.241758241758241,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "May2024",
        sub_segment: "UP",
        average_payment_size: 20048.18661728395,
        unique_payers: 405.0,
        benchmark_recov_accounts: 515.2042057829516,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "UP",
        active_recovery_accounts: 4991.0,
        "%Unique_payers": 6.972550591063915,
        benchmark_rate: 10.484416072099137,
      },
      {
        month: "Jun2024",
        sub_segment: "UP",
        average_payment_size: 15939.635747126438,
        unique_payers: 348.0,
        benchmark_recov_accounts: 523.277206158468,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "TN",
        active_recovery_accounts: 5833.0,
        "%Unique_payers": 14.057946168352478,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Feb2023",
        sub_segment: "TN",
        average_payment_size: 20377.268719512198,
        unique_payers: 820.0,
        benchmark_recov_accounts: 675.969734636064,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "TN",
        active_recovery_accounts: 5723.0,
        "%Unique_payers": 13.000174733531363,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Mar2023",
        sub_segment: "TN",
        average_payment_size: 22105.21510752688,
        unique_payers: 744.0,
        benchmark_recov_accounts: 663.2221483494247,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "TN",
        active_recovery_accounts: 5726.0,
        "%Unique_payers": 10.059378274537199,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Apr2023",
        sub_segment: "TN",
        average_payment_size: 18679.89703125,
        unique_payers: 576.0,
        benchmark_recov_accounts: 663.5698097936058,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "TN",
        active_recovery_accounts: 5835.0,
        "%Unique_payers": 10.265638389031704,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "May2023",
        sub_segment: "TN",
        average_payment_size: 19112.5925542571,
        unique_payers: 599.0,
        benchmark_recov_accounts: 676.2015089321848,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "TN",
        active_recovery_accounts: 5794.0,
        "%Unique_payers": 10.73524335519503,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Jun2023",
        sub_segment: "TN",
        average_payment_size: 21513.622138263665,
        unique_payers: 622.0,
        benchmark_recov_accounts: 671.4501358617101,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "TN",
        active_recovery_accounts: 5683.0,
        "%Unique_payers": 11.402428294914657,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Jul2023",
        sub_segment: "TN",
        average_payment_size: 19983.757160493828,
        unique_payers: 648.0,
        benchmark_recov_accounts: 658.5866624270104,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "TN",
        active_recovery_accounts: 5599.0,
        "%Unique_payers": 10.912662975531346,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Aug2023",
        sub_segment: "TN",
        average_payment_size: 18326.25968903437,
        unique_payers: 611.0,
        benchmark_recov_accounts: 648.8521419899404,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "TN",
        active_recovery_accounts: 5533.0,
        "%Unique_payers": 11.078980661485632,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Sep2023",
        sub_segment: "TN",
        average_payment_size: 20245.415008156604,
        unique_payers: 613.0,
        benchmark_recov_accounts: 641.2035902179568,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "TN",
        active_recovery_accounts: 5482.0,
        "%Unique_payers": 10.488872674206494,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Oct2023",
        sub_segment: "TN",
        average_payment_size: 22975.749791304348,
        unique_payers: 575.0,
        benchmark_recov_accounts: 635.2933456668786,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "TN",
        active_recovery_accounts: 5407.0,
        "%Unique_payers": 10.3754392454226,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Nov2023",
        sub_segment: "TN",
        average_payment_size: 17099.712139037438,
        unique_payers: 561.0,
        benchmark_recov_accounts: 626.6018095623518,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "TN",
        active_recovery_accounts: 5430.0,
        "%Unique_payers": 10.294659300184163,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Dec2023",
        sub_segment: "TN",
        average_payment_size: 16143.810715563508,
        unique_payers: 559.0,
        benchmark_recov_accounts: 629.2672139677401,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "TN",
        active_recovery_accounts: 5343.0,
        "%Unique_payers": 9.058581321355044,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Jan2024",
        sub_segment: "TN",
        average_payment_size: 16509.84857438017,
        unique_payers: 484.0,
        benchmark_recov_accounts: 619.185032086489,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "TN",
        active_recovery_accounts: 5363.0,
        "%Unique_payers": 9.062092112623532,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Feb2024",
        sub_segment: "TN",
        average_payment_size: 19132.22864197531,
        unique_payers: 486.0,
        benchmark_recov_accounts: 621.5027750476961,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "TN",
        active_recovery_accounts: 5329.0,
        "%Unique_payers": 9.607806342653406,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Mar2024",
        sub_segment: "TN",
        average_payment_size: 19584.246953125,
        unique_payers: 512.0,
        benchmark_recov_accounts: 617.562612013644,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "TN",
        active_recovery_accounts: 5314.0,
        "%Unique_payers": 7.8283778697779445,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Apr2024",
        sub_segment: "TN",
        average_payment_size: 15670.329326923076,
        unique_payers: 416.0,
        benchmark_recov_accounts: 615.8243047927386,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "TN",
        active_recovery_accounts: 5320.0,
        "%Unique_payers": 8.721804511278195,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "May2024",
        sub_segment: "TN",
        average_payment_size: 14780.498879310346,
        unique_payers: 464.0,
        benchmark_recov_accounts: 616.5196276811007,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "TN",
        active_recovery_accounts: 5350.0,
        "%Unique_payers": 7.682242990654206,
        benchmark_rate: 11.588714806035728,
      },
      {
        month: "Jun2024",
        sub_segment: "TN",
        average_payment_size: 16151.700729927008,
        unique_payers: 411.0,
        benchmark_recov_accounts: 619.9962421229114,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "MP",
        active_recovery_accounts: 3940.0,
        "%Unique_payers": 10.862944162436548,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Feb2023",
        sub_segment: "MP",
        average_payment_size: 19384.873598130842,
        unique_payers: 428.0,
        benchmark_recov_accounts: 360.52394156354757,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "MP",
        active_recovery_accounts: 3948.0,
        "%Unique_payers": 9.321175278622087,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Mar2023",
        sub_segment: "MP",
        average_payment_size: 19998.929701086956,
        unique_payers: 368.0,
        benchmark_recov_accounts: 361.2559698712908,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "MP",
        active_recovery_accounts: 3988.0,
        "%Unique_payers": 7.3721163490471415,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Apr2023",
        sub_segment: "MP",
        average_payment_size: 21054.996598639456,
        unique_payers: 294.0,
        benchmark_recov_accounts: 364.91611141000703,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "MP",
        active_recovery_accounts: 4063.0,
        "%Unique_payers": 9.032734432685208,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "May2023",
        sub_segment: "MP",
        average_payment_size: 16310.403514986376,
        unique_payers: 367.0,
        benchmark_recov_accounts: 371.77887679509996,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "MP",
        active_recovery_accounts: 4116.0,
        "%Unique_payers": 9.305150631681244,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Jun2023",
        sub_segment: "MP",
        average_payment_size: 25226.608198433423,
        unique_payers: 383.0,
        benchmark_recov_accounts: 376.6285643338989,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "MP",
        active_recovery_accounts: 4108.0,
        "%Unique_payers": 9.031158714703018,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Jul2023",
        sub_segment: "MP",
        average_payment_size: 16235.47269541779,
        unique_payers: 371.0,
        benchmark_recov_accounts: 375.8965360261557,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "MP",
        active_recovery_accounts: 4121.0,
        "%Unique_payers": 8.832807570977918,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Aug2023",
        sub_segment: "MP",
        average_payment_size: 24031.544395604396,
        unique_payers: 364.0,
        benchmark_recov_accounts: 377.08608202623844,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "MP",
        active_recovery_accounts: 4143.0,
        "%Unique_payers": 10.209992758870385,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Sep2023",
        sub_segment: "MP",
        average_payment_size: 23039.391442080378,
        unique_payers: 423.0,
        benchmark_recov_accounts: 379.09915987253237,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "MP",
        active_recovery_accounts: 4129.0,
        "%Unique_payers": 8.379752966820053,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Oct2023",
        sub_segment: "MP",
        average_payment_size: 21984.550924855488,
        unique_payers: 346.0,
        benchmark_recov_accounts: 377.8181103339817,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "MP",
        active_recovery_accounts: 4128.0,
        "%Unique_payers": 7.3643410852713185,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Nov2023",
        sub_segment: "MP",
        average_payment_size: 20497.17631578947,
        unique_payers: 304.0,
        benchmark_recov_accounts: 377.7266067955138,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "MP",
        active_recovery_accounts: 4170.0,
        "%Unique_payers": 9.256594724220623,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Dec2023",
        sub_segment: "MP",
        average_payment_size: 20399.093393782383,
        unique_payers: 386.0,
        benchmark_recov_accounts: 381.56975541116583,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "MP",
        active_recovery_accounts: 4197.0,
        "%Unique_payers": 8.434596140100071,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Jan2024",
        sub_segment: "MP",
        average_payment_size: 20827.33183615819,
        unique_payers: 354.0,
        benchmark_recov_accounts: 384.0403509497993,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "MP",
        active_recovery_accounts: 4208.0,
        "%Unique_payers": 9.529467680608365,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Feb2024",
        sub_segment: "MP",
        average_payment_size: 21111.620598503738,
        unique_payers: 401.0,
        benchmark_recov_accounts: 385.0468898729462,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "MP",
        active_recovery_accounts: 4200.0,
        "%Unique_payers": 10.071428571428571,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Mar2024",
        sub_segment: "MP",
        average_payment_size: 25951.803593380613,
        unique_payers: 423.0,
        benchmark_recov_accounts: 384.314861565203,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "MP",
        active_recovery_accounts: 4227.0,
        "%Unique_payers": 8.705938017506504,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Apr2024",
        sub_segment: "MP",
        average_payment_size: 20488.380489130435,
        unique_payers: 368.0,
        benchmark_recov_accounts: 386.78545710383645,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "MP",
        active_recovery_accounts: 4274.0,
        "%Unique_payers": 10.107627515208236,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "May2024",
        sub_segment: "MP",
        average_payment_size: 17297.283587962964,
        unique_payers: 432.0,
        benchmark_recov_accounts: 391.086123411828,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "MP",
        active_recovery_accounts: 4296.0,
        "%Unique_payers": 7.844506517690874,
        benchmark_rate: 9.150353846790548,
      },
      {
        month: "Jun2024",
        sub_segment: "MP",
        average_payment_size: 19657.546439169142,
        unique_payers: 337.0,
        benchmark_recov_accounts: 393.0992012581219,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "KA",
        active_recovery_accounts: 3999.0,
        "%Unique_payers": 12.003000750187546,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Feb2023",
        sub_segment: "KA",
        average_payment_size: 41597.965,
        unique_payers: 480.0,
        benchmark_recov_accounts: 405.3130848930481,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "KA",
        active_recovery_accounts: 3951.0,
        "%Unique_payers": 10.402429764616553,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Mar2023",
        sub_segment: "KA",
        average_payment_size: 34965.31476885644,
        unique_payers: 411.0,
        benchmark_recov_accounts: 400.44811163101605,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "KA",
        active_recovery_accounts: 3952.0,
        "%Unique_payers": 7.844129554655871,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Apr2023",
        sub_segment: "KA",
        average_payment_size: 27339.83064516129,
        unique_payers: 310.0,
        benchmark_recov_accounts: 400.54946524064167,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "KA",
        active_recovery_accounts: 4027.0,
        "%Unique_payers": 9.237645890240874,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "May2023",
        sub_segment: "KA",
        average_payment_size: 26808.009677419355,
        unique_payers: 372.0,
        benchmark_recov_accounts: 408.15098596256684,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "KA",
        active_recovery_accounts: 4029.0,
        "%Unique_payers": 10.622983370563416,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Jun2023",
        sub_segment: "KA",
        average_payment_size: 25617.777149532707,
        unique_payers: 428.0,
        benchmark_recov_accounts: 408.3536931818182,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "KA",
        active_recovery_accounts: 3978.0,
        "%Unique_payers": 10.683760683760683,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Jul2023",
        sub_segment: "KA",
        average_payment_size: 23277.896023529414,
        unique_payers: 425.0,
        benchmark_recov_accounts: 403.18465909090907,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "KA",
        active_recovery_accounts: 3942.0,
        "%Unique_payers": 8.853373921867073,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Aug2023",
        sub_segment: "KA",
        average_payment_size: 31001.76613180516,
        unique_payers: 349.0,
        benchmark_recov_accounts: 399.535929144385,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "KA",
        active_recovery_accounts: 3921.0,
        "%Unique_payers": 9.028309104820199,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Sep2023",
        sub_segment: "KA",
        average_payment_size: 24342.780028248584,
        unique_payers: 354.0,
        benchmark_recov_accounts: 397.40750334224595,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "KA",
        active_recovery_accounts: 3915.0,
        "%Unique_payers": 8.403575989782887,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Oct2023",
        sub_segment: "KA",
        average_payment_size: 34571.52352583586,
        unique_payers: 329.0,
        benchmark_recov_accounts: 396.79938168449195,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "KA",
        active_recovery_accounts: 3942.0,
        "%Unique_payers": 8.548959918822932,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Nov2023",
        sub_segment: "KA",
        average_payment_size: 24504.31934718101,
        unique_payers: 337.0,
        benchmark_recov_accounts: 399.535929144385,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "KA",
        active_recovery_accounts: 3954.0,
        "%Unique_payers": 8.118361153262518,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Dec2023",
        sub_segment: "KA",
        average_payment_size: 32598.228785046733,
        unique_payers: 321.0,
        benchmark_recov_accounts: 400.752172459893,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "KA",
        active_recovery_accounts: 3928.0,
        "%Unique_payers": 7.7647657841140525,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Jan2024",
        sub_segment: "KA",
        average_payment_size: 38127.17032786886,
        unique_payers: 305.0,
        benchmark_recov_accounts: 398.1169786096257,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "KA",
        active_recovery_accounts: 3928.0,
        "%Unique_payers": 8.146639511201629,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Feb2024",
        sub_segment: "KA",
        average_payment_size: 27646.73696875,
        unique_payers: 320.0,
        benchmark_recov_accounts: 398.1169786096257,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "KA",
        active_recovery_accounts: 3923.0,
        "%Unique_payers": 8.00407851134336,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Mar2024",
        sub_segment: "KA",
        average_payment_size: 29015.99576433121,
        unique_payers: 314.0,
        benchmark_recov_accounts: 397.6102105614973,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "KA",
        active_recovery_accounts: 3929.0,
        "%Unique_payers": 6.08297276660728,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Apr2024",
        sub_segment: "KA",
        average_payment_size: 25662.804560669458,
        unique_payers: 239.0,
        benchmark_recov_accounts: 398.2183322192513,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "KA",
        active_recovery_accounts: 3991.0,
        "%Unique_payers": 7.967927837634678,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "May2024",
        sub_segment: "KA",
        average_payment_size: 25269.80795597484,
        unique_payers: 318.0,
        benchmark_recov_accounts: 404.50225601604274,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "KA",
        active_recovery_accounts: 4003.0,
        "%Unique_payers": 7.144641518860855,
        benchmark_rate: 10.135360962566844,
      },
      {
        month: "Jun2024",
        sub_segment: "KA",
        average_payment_size: 23600.68048951049,
        unique_payers: 286.0,
        benchmark_recov_accounts: 405.7184993315508,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "HR",
        active_recovery_accounts: 3199.0,
        "%Unique_payers": 8.002500781494216,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Feb2023",
        sub_segment: "HR",
        average_payment_size: 28204.572421874997,
        unique_payers: 256.0,
        benchmark_recov_accounts: 235.8783824564933,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "HR",
        active_recovery_accounts: 3211.0,
        "%Unique_payers": 7.007162877608223,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Mar2023",
        sub_segment: "HR",
        average_payment_size: 24230.544933333334,
        unique_payers: 225.0,
        benchmark_recov_accounts: 236.76320289709287,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "HR",
        active_recovery_accounts: 3270.0,
        "%Unique_payers": 6.574923547400611,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Apr2023",
        sub_segment: "HR",
        average_payment_size: 23257.0,
        unique_payers: 215.0,
        benchmark_recov_accounts: 241.1135700633739,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "HR",
        active_recovery_accounts: 3371.0,
        "%Unique_payers": 8.217146247404331,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "May2023",
        sub_segment: "HR",
        average_payment_size: 22895.88610108303,
        unique_payers: 277.0,
        benchmark_recov_accounts: 248.56080877175336,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "HR",
        active_recovery_accounts: 3413.0,
        "%Unique_payers": 7.412833284500439,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Jun2023",
        sub_segment: "HR",
        average_payment_size: 27601.569683794463,
        unique_payers: 253.0,
        benchmark_recov_accounts: 251.65768031385173,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "HR",
        active_recovery_accounts: 3418.0,
        "%Unique_payers": 7.021650087770626,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Jul2023",
        sub_segment: "HR",
        average_payment_size: 24811.779291666662,
        unique_payers: 240.0,
        benchmark_recov_accounts: 252.02635549743488,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "HR",
        active_recovery_accounts: 3409.0,
        "%Unique_payers": 6.424171311234966,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Aug2023",
        sub_segment: "HR",
        average_payment_size: 20101.462831050227,
        unique_payers: 219.0,
        benchmark_recov_accounts: 251.36274016698522,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "HR",
        active_recovery_accounts: 3480.0,
        "%Unique_payers": 7.844827586206897,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Sep2023",
        sub_segment: "HR",
        average_payment_size: 25250.61285714286,
        unique_payers: 273.0,
        benchmark_recov_accounts: 256.5979277738658,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "HR",
        active_recovery_accounts: 3494.0,
        "%Unique_payers": 7.46994848311391,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Oct2023",
        sub_segment: "HR",
        average_payment_size: 17453.18436781609,
        unique_payers: 261.0,
        benchmark_recov_accounts: 257.63021828789863,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "HR",
        active_recovery_accounts: 3517.0,
        "%Unique_payers": 6.312197895934036,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Nov2023",
        sub_segment: "HR",
        average_payment_size: 20380.91261261261,
        unique_payers: 222.0,
        benchmark_recov_accounts: 259.32612413238104,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "HR",
        active_recovery_accounts: 3550.0,
        "%Unique_payers": 6.957746478873239,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Dec2023",
        sub_segment: "HR",
        average_payment_size: 20128.81238866397,
        unique_payers: 247.0,
        benchmark_recov_accounts: 261.7593803440298,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "HR",
        active_recovery_accounts: 3593.0,
        "%Unique_payers": 5.844698023935431,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Jan2024",
        sub_segment: "HR",
        average_payment_size: 19717.260000000002,
        unique_payers: 210.0,
        benchmark_recov_accounts: 264.9299869228448,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "HR",
        active_recovery_accounts: 3632.0,
        "%Unique_payers": 6.029735682819383,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Feb2024",
        sub_segment: "HR",
        average_payment_size: 16643.087534246573,
        unique_payers: 219.0,
        benchmark_recov_accounts: 267.80565335479326,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "HR",
        active_recovery_accounts: 3704.0,
        "%Unique_payers": 6.42548596112311,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Mar2024",
        sub_segment: "HR",
        average_payment_size: 17760.164915966387,
        unique_payers: 238.0,
        benchmark_recov_accounts: 273.11457599839054,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "HR",
        active_recovery_accounts: 3756.0,
        "%Unique_payers": 5.005324813631523,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Apr2024",
        sub_segment: "HR",
        average_payment_size: 16990.862393617022,
        unique_payers: 188.0,
        benchmark_recov_accounts: 276.94879790765515,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "HR",
        active_recovery_accounts: 3818.0,
        "%Unique_payers": 5.526453640649555,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "May2024",
        sub_segment: "HR",
        average_payment_size: 22767.000047393365,
        unique_payers: 211.0,
        benchmark_recov_accounts: 281.5203701840861,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "HR",
        active_recovery_accounts: 3887.0,
        "%Unique_payers": 4.6565474659120145,
        benchmark_rate: 7.373503671662811,
      },
      {
        month: "Jun2024",
        sub_segment: "HR",
        average_payment_size: 20137.345690607737,
        unique_payers: 181.0,
        benchmark_recov_accounts: 286.60808771753346,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "AP",
        active_recovery_accounts: 3062.0,
        "%Unique_payers": 9.274983670803397,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Feb2023",
        sub_segment: "AP",
        average_payment_size: 27903.15426056338,
        unique_payers: 284.0,
        benchmark_recov_accounts: 247.77792987259133,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "AP",
        active_recovery_accounts: 3084.0,
        "%Unique_payers": 8.300907911802852,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Mar2023",
        sub_segment: "AP",
        average_payment_size: 29692.912343750002,
        unique_payers: 256.0,
        benchmark_recov_accounts: 249.55817626618932,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "AP",
        active_recovery_accounts: 3124.0,
        "%Unique_payers": 6.9142125480153656,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Apr2023",
        sub_segment: "AP",
        average_payment_size: 24270.43986111111,
        unique_payers: 216.0,
        benchmark_recov_accounts: 252.7949878909129,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "AP",
        active_recovery_accounts: 3213.0,
        "%Unique_payers": 7.469654528478058,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "May2023",
        sub_segment: "AP",
        average_payment_size: 25233.479708333332,
        unique_payers: 240.0,
        benchmark_recov_accounts: 259.9968937559229,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "AP",
        active_recovery_accounts: 3263.0,
        "%Unique_payers": 8.397180508734294,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Jun2023",
        sub_segment: "AP",
        average_payment_size: 27710.42277372263,
        unique_payers: 274.0,
        benchmark_recov_accounts: 264.0429082868274,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "AP",
        active_recovery_accounts: 3248.0,
        "%Unique_payers": 8.220443349753696,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Jul2023",
        sub_segment: "AP",
        average_payment_size: 31902.4297752809,
        unique_payers: 267.0,
        benchmark_recov_accounts: 262.82910392755605,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "AP",
        active_recovery_accounts: 3282.0,
        "%Unique_payers": 7.830591102985984,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Aug2023",
        sub_segment: "AP",
        average_payment_size: 30736.15968871595,
        unique_payers: 257.0,
        benchmark_recov_accounts: 265.5803938085711,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "AP",
        active_recovery_accounts: 3302.0,
        "%Unique_payers": 7.813446396123562,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Sep2023",
        sub_segment: "AP",
        average_payment_size: 33788.32453488372,
        unique_payers: 258.0,
        benchmark_recov_accounts: 267.1987996209329,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "AP",
        active_recovery_accounts: 3342.0,
        "%Unique_payers": 8.07899461400359,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Oct2023",
        sub_segment: "AP",
        average_payment_size: 26538.130407407407,
        unique_payers: 270.0,
        benchmark_recov_accounts: 270.4356112456565,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "AP",
        active_recovery_accounts: 3375.0,
        "%Unique_payers": 7.437037037037037,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Nov2023",
        sub_segment: "AP",
        average_payment_size: 33753.17215139443,
        unique_payers: 251.0,
        benchmark_recov_accounts: 273.10598083605345,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "AP",
        active_recovery_accounts: 3406.0,
        "%Unique_payers": 7.780387551379918,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Dec2023",
        sub_segment: "AP",
        average_payment_size: 34883.93362264151,
        unique_payers: 265.0,
        benchmark_recov_accounts: 275.6145098452143,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "AP",
        active_recovery_accounts: 3437.0,
        "%Unique_payers": 7.652022112307244,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Jan2024",
        sub_segment: "AP",
        average_payment_size: 22458.37855513308,
        unique_payers: 263.0,
        benchmark_recov_accounts: 278.12303885437507,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "AP",
        active_recovery_accounts: 3493.0,
        "%Unique_payers": 7.901517320354996,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Feb2024",
        sub_segment: "AP",
        average_payment_size: 28421.318297101447,
        unique_payers: 276.0,
        benchmark_recov_accounts: 282.6545751289881,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "AP",
        active_recovery_accounts: 3538.0,
        "%Unique_payers": 7.91407574901074,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Mar2024",
        sub_segment: "AP",
        average_payment_size: 43986.43532142857,
        unique_payers: 280.0,
        benchmark_recov_accounts: 286.2959882068021,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "AP",
        active_recovery_accounts: 3552.0,
        "%Unique_payers": 6.925675675675675,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Apr2024",
        sub_segment: "AP",
        average_payment_size: 25516.15524390244,
        unique_payers: 246.0,
        benchmark_recov_accounts: 287.4288722754554,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "AP",
        active_recovery_accounts: 3624.0,
        "%Unique_payers": 8.167770419426049,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "May2024",
        sub_segment: "AP",
        average_payment_size: 25555.49972972973,
        unique_payers: 296.0,
        benchmark_recov_accounts: 293.25513319995787,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "AP",
        active_recovery_accounts: 3663.0,
        "%Unique_payers": 7.17990717990718,
        benchmark_rate: 8.092029061808992,
      },
      {
        month: "Jun2024",
        sub_segment: "AP",
        average_payment_size: 21843.27060836502,
        unique_payers: 263.0,
        benchmark_recov_accounts: 296.41102453406336,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "TG",
        active_recovery_accounts: 2582.0,
        "%Unique_payers": 12.083656080557708,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Feb2023",
        sub_segment: "TG",
        average_payment_size: 31204.337243589747,
        unique_payers: 312.0,
        benchmark_recov_accounts: 262.3905118601748,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "TG",
        active_recovery_accounts: 2594.0,
        "%Unique_payers": 10.79414032382421,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Mar2023",
        sub_segment: "TG",
        average_payment_size: 33818.12849999999,
        unique_payers: 280.0,
        benchmark_recov_accounts: 263.6099875156055,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "TG",
        active_recovery_accounts: 2635.0,
        "%Unique_payers": 9.184060721062618,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Apr2023",
        sub_segment: "TG",
        average_payment_size: 32464.512396694216,
        unique_payers: 242.0,
        benchmark_recov_accounts: 267.77652933832707,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "TG",
        active_recovery_accounts: 2708.0,
        "%Unique_payers": 9.785819793205318,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "May2023",
        sub_segment: "TG",
        average_payment_size: 32094.509207547177,
        unique_payers: 265.0,
        benchmark_recov_accounts: 275.1950062421973,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "TG",
        active_recovery_accounts: 2752.0,
        "%Unique_payers": 9.956395348837209,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Jun2023",
        sub_segment: "TG",
        average_payment_size: 33139.79762773723,
        unique_payers: 274.0,
        benchmark_recov_accounts: 279.6664169787765,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "TG",
        active_recovery_accounts: 2749.0,
        "%Unique_payers": 9.276100400145507,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Jul2023",
        sub_segment: "TG",
        average_payment_size: 34930.27831372549,
        unique_payers: 255.0,
        benchmark_recov_accounts: 279.36154806491885,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "TG",
        active_recovery_accounts: 2764.0,
        "%Unique_payers": 10.20260492040521,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Aug2023",
        sub_segment: "TG",
        average_payment_size: 35826.05241134752,
        unique_payers: 282.0,
        benchmark_recov_accounts: 280.88589263420727,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "TG",
        active_recovery_accounts: 2812.0,
        "%Unique_payers": 9.53058321479374,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Sep2023",
        sub_segment: "TG",
        average_payment_size: 34931.72470149254,
        unique_payers: 268.0,
        benchmark_recov_accounts: 285.76379525593006,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "TG",
        active_recovery_accounts: 2827.0,
        "%Unique_payers": 8.737177219667492,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Oct2023",
        sub_segment: "TG",
        average_payment_size: 38567.78963562752,
        unique_payers: 247.0,
        benchmark_recov_accounts: 287.2881398252185,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "TG",
        active_recovery_accounts: 2821.0,
        "%Unique_payers": 8.613966678482807,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Nov2023",
        sub_segment: "TG",
        average_payment_size: 28862.58534979424,
        unique_payers: 243.0,
        benchmark_recov_accounts: 286.6784019975031,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "TG",
        active_recovery_accounts: 2842.0,
        "%Unique_payers": 8.831808585503166,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Dec2023",
        sub_segment: "TG",
        average_payment_size: 36947.95517928287,
        unique_payers: 251.0,
        benchmark_recov_accounts: 288.8124843945069,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "TG",
        active_recovery_accounts: 2875.0,
        "%Unique_payers": 8.417391304347827,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Jan2024",
        sub_segment: "TG",
        average_payment_size: 31925.427933884297,
        unique_payers: 242.0,
        benchmark_recov_accounts: 292.16604244694133,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "TG",
        active_recovery_accounts: 2924.0,
        "%Unique_payers": 7.694938440492476,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Feb2024",
        sub_segment: "TG",
        average_payment_size: 34843.68604444444,
        unique_payers: 225.0,
        benchmark_recov_accounts: 297.1455680399501,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "TG",
        active_recovery_accounts: 2973.0,
        "%Unique_payers": 7.399932727884292,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Mar2024",
        sub_segment: "TG",
        average_payment_size: 35076.94463636364,
        unique_payers: 220.0,
        benchmark_recov_accounts: 302.1250936329588,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "TG",
        active_recovery_accounts: 3009.0,
        "%Unique_payers": 7.2781655034895305,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Apr2024",
        sub_segment: "TG",
        average_payment_size: 30455.479223744296,
        unique_payers: 219.0,
        benchmark_recov_accounts: 305.78352059925095,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "TG",
        active_recovery_accounts: 3057.0,
        "%Unique_payers": 8.374223094537129,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "May2024",
        sub_segment: "TG",
        average_payment_size: 30546.511171874998,
        unique_payers: 256.0,
        benchmark_recov_accounts: 310.6614232209738,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "TG",
        active_recovery_accounts: 3082.0,
        "%Unique_payers": 6.846203763789747,
        benchmark_rate: 10.162297128589264,
      },
      {
        month: "Jun2024",
        sub_segment: "TG",
        average_payment_size: 32317.244834123223,
        unique_payers: 211.0,
        benchmark_recov_accounts: 313.2019975031211,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2888.0,
        "%Unique_payers": 6.578947368421052,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Feb2023",
        sub_segment: "GJ",
        average_payment_size: 17910.85247368421,
        unique_payers: 190.0,
        benchmark_recov_accounts: 141.04298377655127,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2928.0,
        "%Unique_payers": 5.703551912568306,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Mar2023",
        sub_segment: "GJ",
        average_payment_size: 22373.905688622755,
        unique_payers: 167.0,
        benchmark_recov_accounts: 142.99648770697442,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2962.0,
        "%Unique_payers": 3.6124240378122887,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Apr2023",
        sub_segment: "GJ",
        average_payment_size: 19296.635514018693,
        unique_payers: 107.0,
        benchmark_recov_accounts: 144.6569660478341,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3026.0,
        "%Unique_payers": 4.428288169200265,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "May2023",
        sub_segment: "GJ",
        average_payment_size: 25741.63134328358,
        unique_payers: 134.0,
        benchmark_recov_accounts: 147.78257233651112,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3068.0,
        "%Unique_payers": 4.758800521512386,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Jun2023",
        sub_segment: "GJ",
        average_payment_size: 33429.42020547945,
        unique_payers: 146.0,
        benchmark_recov_accounts: 149.83375146345543,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3065.0,
        "%Unique_payers": 4.306688417618271,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Jul2023",
        sub_segment: "GJ",
        average_payment_size: 26123.915909090912,
        unique_payers: 132.0,
        benchmark_recov_accounts: 149.6872386686737,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3076.0,
        "%Unique_payers": 4.9414824447334205,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Aug2023",
        sub_segment: "GJ",
        average_payment_size: 27042.695197368423,
        unique_payers: 152.0,
        benchmark_recov_accounts: 150.22445224954006,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3105.0,
        "%Unique_payers": 5.152979066022544,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Sep2023",
        sub_segment: "GJ",
        average_payment_size: 25067.717249999998,
        unique_payers: 160.0,
        benchmark_recov_accounts: 151.64074259909685,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3160.0,
        "%Unique_payers": 5.063291139240507,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Oct2023",
        sub_segment: "GJ",
        average_payment_size: 20374.0081875,
        unique_payers: 160.0,
        benchmark_recov_accounts: 154.32681050342867,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3202.0,
        "%Unique_payers": 4.684572142410993,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Nov2023",
        sub_segment: "GJ",
        average_payment_size: 13389.105866666667,
        unique_payers: 150.0,
        benchmark_recov_accounts: 156.37798963037298,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3258.0,
        "%Unique_payers": 5.402087170042972,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Dec2023",
        sub_segment: "GJ",
        average_payment_size: 16366.419318181817,
        unique_payers: 176.0,
        benchmark_recov_accounts: 159.11289513296538,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3317.0,
        "%Unique_payers": 6.180283388604161,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Jan2024",
        sub_segment: "GJ",
        average_payment_size: 19050.273170731707,
        unique_payers: 205.0,
        benchmark_recov_accounts: 161.99431343033953,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3381.0,
        "%Unique_payers": 6.329488317065957,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Feb2024",
        sub_segment: "GJ",
        average_payment_size: 18848.393411214955,
        unique_payers: 214.0,
        benchmark_recov_accounts: 165.11991971901656,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3432.0,
        "%Unique_payers": 7.051282051282051,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Mar2024",
        sub_segment: "GJ",
        average_payment_size: 17283.357933884297,
        unique_payers: 242.0,
        benchmark_recov_accounts: 167.61063723030608,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3443.0,
        "%Unique_payers": 5.605576532094104,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Apr2024",
        sub_segment: "GJ",
        average_payment_size: 15398.78238341969,
        unique_payers: 193.0,
        benchmark_recov_accounts: 168.14785081117245,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3492.0,
        "%Unique_payers": 6.242840778923253,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "May2024",
        sub_segment: "GJ",
        average_payment_size: 14456.83004587156,
        unique_payers: 218.0,
        benchmark_recov_accounts: 170.54089312594078,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3527.0,
        "%Unique_payers": 5.557130705982422,
        benchmark_rate: 4.88375982605787,
      },
      {
        month: "Jun2024",
        sub_segment: "GJ",
        average_payment_size: 19723.237346938775,
        unique_payers: 196.0,
        benchmark_recov_accounts: 172.25020906506106,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "DL",
        active_recovery_accounts: 1952.0,
        "%Unique_payers": 11.219262295081968,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Feb2023",
        sub_segment: "DL",
        average_payment_size: 27918.06200913242,
        unique_payers: 219.0,
        benchmark_recov_accounts: 184.60526315789474,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "DL",
        active_recovery_accounts: 1957.0,
        "%Unique_payers": 9.504343382728667,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Mar2023",
        sub_segment: "DL",
        average_payment_size: 22742.940860215054,
        unique_payers: 186.0,
        benchmark_recov_accounts: 185.078125,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "DL",
        active_recovery_accounts: 2001.0,
        "%Unique_payers": 8.695652173913043,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Apr2023",
        sub_segment: "DL",
        average_payment_size: 20470.333333333332,
        unique_payers: 174.0,
        benchmark_recov_accounts: 189.2393092105263,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "DL",
        active_recovery_accounts: 2054.0,
        "%Unique_payers": 9.591041869522881,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "May2023",
        sub_segment: "DL",
        average_payment_size: 21521.155989847717,
        unique_payers: 197.0,
        benchmark_recov_accounts: 194.2516447368421,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "DL",
        active_recovery_accounts: 2080.0,
        "%Unique_payers": 8.365384615384615,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Jun2023",
        sub_segment: "DL",
        average_payment_size: 19475.770862068966,
        unique_payers: 174.0,
        benchmark_recov_accounts: 196.71052631578945,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "DL",
        active_recovery_accounts: 2116.0,
        "%Unique_payers": 9.45179584120983,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Jul2023",
        sub_segment: "DL",
        average_payment_size: 23995.498900000002,
        unique_payers: 200.0,
        benchmark_recov_accounts: 200.11513157894737,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "DL",
        active_recovery_accounts: 2159.0,
        "%Unique_payers": 8.846688281611858,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Aug2023",
        sub_segment: "DL",
        average_payment_size: 30048.952931937172,
        unique_payers: 191.0,
        benchmark_recov_accounts: 204.18174342105263,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "DL",
        active_recovery_accounts: 2190.0,
        "%Unique_payers": 9.269406392694064,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Sep2023",
        sub_segment: "DL",
        average_payment_size: 27521.12536945813,
        unique_payers: 203.0,
        benchmark_recov_accounts: 207.11348684210526,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "DL",
        active_recovery_accounts: 2222.0,
        "%Unique_payers": 9.045904590459045,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Oct2023",
        sub_segment: "DL",
        average_payment_size: 21266.924925373136,
        unique_payers: 201.0,
        benchmark_recov_accounts: 210.13980263157893,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "DL",
        active_recovery_accounts: 2277.0,
        "%Unique_payers": 7.5098814229249005,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Nov2023",
        sub_segment: "DL",
        average_payment_size: 17435.549122807017,
        unique_payers: 171.0,
        benchmark_recov_accounts: 215.34128289473682,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "DL",
        active_recovery_accounts: 2318.0,
        "%Unique_payers": 8.498705780845556,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Dec2023",
        sub_segment: "DL",
        average_payment_size: 26360.144974619292,
        unique_payers: 197.0,
        benchmark_recov_accounts: 219.21875,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "DL",
        active_recovery_accounts: 2342.0,
        "%Unique_payers": 7.557643040136636,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Jan2024",
        sub_segment: "DL",
        average_payment_size: 32431.35548022599,
        unique_payers: 177.0,
        benchmark_recov_accounts: 221.48848684210526,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "DL",
        active_recovery_accounts: 2381.0,
        "%Unique_payers": 7.34985300293994,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Feb2024",
        sub_segment: "DL",
        average_payment_size: 23041.990400000002,
        unique_payers: 175.0,
        benchmark_recov_accounts: 225.1768092105263,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "DL",
        active_recovery_accounts: 2420.0,
        "%Unique_payers": 6.9421487603305785,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Mar2024",
        sub_segment: "DL",
        average_payment_size: 31750.677857142855,
        unique_payers: 168.0,
        benchmark_recov_accounts: 228.86513157894737,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "DL",
        active_recovery_accounts: 2447.0,
        "%Unique_payers": 6.742950551695954,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Apr2024",
        sub_segment: "DL",
        average_payment_size: 19327.37593939394,
        unique_payers: 165.0,
        benchmark_recov_accounts: 231.41858552631578,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "DL",
        active_recovery_accounts: 2484.0,
        "%Unique_payers": 6.40096618357488,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "May2024",
        sub_segment: "DL",
        average_payment_size: 23768.69893081761,
        unique_payers: 159.0,
        benchmark_recov_accounts: 234.91776315789474,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "DL",
        active_recovery_accounts: 2524.0,
        "%Unique_payers": 6.3391442155309035,
        benchmark_rate: 9.457236842105262,
      },
      {
        month: "Jun2024",
        sub_segment: "DL",
        average_payment_size: 23855.5611875,
        unique_payers: 160.0,
        benchmark_recov_accounts: 238.70065789473682,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14039.0,
        "%Unique_payers": 11.859819075432723,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Feb2023",
        sub_segment: "OTHERS",
        average_payment_size: 22929.853297297297,
        unique_payers: 1665.0,
        benchmark_recov_accounts: 1368.1012147642375,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 13961.0,
        "%Unique_payers": 10.08523744717427,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Mar2023",
        sub_segment: "OTHERS",
        average_payment_size: 22392.55005681818,
        unique_payers: 1408.0,
        benchmark_recov_accounts: 1360.5001110708397,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14070.0,
        "%Unique_payers": 7.789623312011372,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Apr2023",
        sub_segment: "OTHERS",
        average_payment_size: 19083.980839416057,
        unique_payers: 1096.0,
        benchmark_recov_accounts: 1371.1221662321263,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14435.0,
        "%Unique_payers": 9.830273640457223,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "May2023",
        sub_segment: "OTHERS",
        average_payment_size: 20995.597963354478,
        unique_payers: 1419.0,
        benchmark_recov_accounts: 1406.6914335153335,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14567.0,
        "%Unique_payers": 9.487197089311456,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Jun2023",
        sub_segment: "OTHERS",
        average_payment_size: 23827.576874095514,
        unique_payers: 1382.0,
        benchmark_recov_accounts: 1419.554839765699,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14459.0,
        "%Unique_payers": 9.44048689397607,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Jul2023",
        sub_segment: "OTHERS",
        average_payment_size: 21907.010117216116,
        unique_payers: 1365.0,
        benchmark_recov_accounts: 1409.0302346517637,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14439.0,
        "%Unique_payers": 8.594778031719647,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Aug2023",
        sub_segment: "OTHERS",
        average_payment_size: 20504.548839645446,
        unique_payers: 1241.0,
        benchmark_recov_accounts: 1407.0812337047387,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14482.0,
        "%Unique_payers": 9.1907195138793,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Sep2023",
        sub_segment: "OTHERS",
        average_payment_size: 23795.115612321566,
        unique_payers: 1331.0,
        benchmark_recov_accounts: 1411.2715857408425,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14530.0,
        "%Unique_payers": 8.134893324156916,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Oct2023",
        sub_segment: "OTHERS",
        average_payment_size: 22903.55718274112,
        unique_payers: 1182.0,
        benchmark_recov_accounts: 1415.9491880137027,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14621.0,
        "%Unique_payers": 7.803843786334724,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Nov2023",
        sub_segment: "OTHERS",
        average_payment_size: 21583.707887817705,
        unique_payers: 1141.0,
        benchmark_recov_accounts: 1424.8171423226665,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14739.0,
        "%Unique_payers": 8.202727457765114,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Dec2023",
        sub_segment: "OTHERS",
        average_payment_size: 22593.832721257233,
        unique_payers: 1209.0,
        benchmark_recov_accounts: 1436.3162479101145,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14762.0,
        "%Unique_payers": 7.763175721446959,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Jan2024",
        sub_segment: "OTHERS",
        average_payment_size: 21183.79347294939,
        unique_payers: 1146.0,
        benchmark_recov_accounts: 1438.5575989991933,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14880.0,
        "%Unique_payers": 7.486559139784946,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Feb2024",
        sub_segment: "OTHERS",
        average_payment_size: 20880.855843806105,
        unique_payers: 1114.0,
        benchmark_recov_accounts: 1450.056704586641,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14950.0,
        "%Unique_payers": 7.34448160535117,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Mar2024",
        sub_segment: "OTHERS",
        average_payment_size: 23403.55704007286,
        unique_payers: 1098.0,
        benchmark_recov_accounts: 1456.8782079012287,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14977.0,
        "%Unique_payers": 6.236228884289244,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Apr2024",
        sub_segment: "OTHERS",
        average_payment_size: 17899.578950749466,
        unique_payers: 934.0,
        benchmark_recov_accounts: 1459.5093591797126,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 15214.0,
        "%Unique_payers": 7.565400289207309,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "May2024",
        sub_segment: "OTHERS",
        average_payment_size: 20225.860721112076,
        unique_payers: 1151.0,
        benchmark_recov_accounts: 1482.6050204019596,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 15343.0,
        "%Unique_payers": 6.432900997197419,
        benchmark_rate: 9.745004735125276,
      },
      {
        month: "Jun2024",
        sub_segment: "OTHERS",
        average_payment_size: 21021.200141843976,
        unique_payers: 987.0,
        benchmark_recov_accounts: 1495.176076510271,
      },
    ],
  ],
  pos: [
    [
      {
        month: "Feb2023",
        sub_segment: "<1L",
        active_recovery_accounts: 16663.0,
        "%Unique_payers": 7.633679409470083,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Feb2023",
        sub_segment: "<1L",
        average_payment_size: 13820.52322327044,
        unique_payers: 1272.0,
        benchmark_recov_accounts: 1088.2264412335728,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "<1L",
        active_recovery_accounts: 16657.0,
        "%Unique_payers": 6.567809329411059,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Mar2023",
        sub_segment: "<1L",
        average_payment_size: 12905.01688299817,
        unique_payers: 1094.0,
        benchmark_recov_accounts: 1087.8345935082293,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "<1L",
        active_recovery_accounts: 16864.0,
        "%Unique_payers": 4.803130929791272,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Apr2023",
        sub_segment: "<1L",
        average_payment_size: 11559.908135802469,
        unique_payers: 810.0,
        benchmark_recov_accounts: 1101.3533400325855,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17347.0,
        "%Unique_payers": 6.2373897503891165,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "May2023",
        sub_segment: "<1L",
        average_payment_size: 13054.152939001848,
        unique_payers: 1082.0,
        benchmark_recov_accounts: 1132.8970819227504,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17560.0,
        "%Unique_payers": 6.953302961275626,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Jun2023",
        sub_segment: "<1L",
        average_payment_size: 13878.832457002456,
        unique_payers: 1221.0,
        benchmark_recov_accounts: 1146.8076761724503,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17408.0,
        "%Unique_payers": 6.979549632352941,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Jul2023",
        sub_segment: "<1L",
        average_payment_size: 13985.145308641975,
        unique_payers: 1215.0,
        benchmark_recov_accounts: 1136.880867130411,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17388.0,
        "%Unique_payers": 6.746031746031746,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Aug2023",
        sub_segment: "<1L",
        average_payment_size: 13540.263341858483,
        unique_payers: 1173.0,
        benchmark_recov_accounts: 1135.574708045932,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17391.0,
        "%Unique_payers": 6.537864412627221,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Sep2023",
        sub_segment: "<1L",
        average_payment_size: 13690.383139841688,
        unique_payers: 1137.0,
        benchmark_recov_accounts: 1135.770631908604,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17408.0,
        "%Unique_payers": 6.232766544117647,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Oct2023",
        sub_segment: "<1L",
        average_payment_size: 13567.145059907833,
        unique_payers: 1085.0,
        benchmark_recov_accounts: 1136.880867130411,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17463.0,
        "%Unique_payers": 5.966901448777415,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Nov2023",
        sub_segment: "<1L",
        average_payment_size: 13118.177946257196,
        unique_payers: 1042.0,
        benchmark_recov_accounts: 1140.472804612728,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17545.0,
        "%Unique_payers": 6.286691365061271,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Dec2023",
        sub_segment: "<1L",
        average_payment_size: 12621.49827742521,
        unique_payers: 1103.0,
        benchmark_recov_accounts: 1145.8280568590912,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17504.0,
        "%Unique_payers": 5.7586837294332724,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Jan2024",
        sub_segment: "<1L",
        average_payment_size: 11559.803849206352,
        unique_payers: 1008.0,
        benchmark_recov_accounts: 1143.1504307359096,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17606.0,
        "%Unique_payers": 5.8957173690787235,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Feb2024",
        sub_segment: "<1L",
        average_payment_size: 11447.663169556838,
        unique_payers: 1038.0,
        benchmark_recov_accounts: 1149.8118420667518,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17650.0,
        "%Unique_payers": 5.376770538243626,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Mar2024",
        sub_segment: "<1L",
        average_payment_size: 11948.78124341412,
        unique_payers: 949.0,
        benchmark_recov_accounts: 1152.6853920526053,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17757.0,
        "%Unique_payers": 4.803739370389142,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Apr2024",
        sub_segment: "<1L",
        average_payment_size: 8775.941817116061,
        unique_payers: 853.0,
        benchmark_recov_accounts: 1159.6733431545672,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17875.0,
        "%Unique_payers": 5.314685314685315,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "May2024",
        sub_segment: "<1L",
        average_payment_size: 9694.03787368421,
        unique_payers: 950.0,
        benchmark_recov_accounts: 1167.3796817529926,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "<1L",
        active_recovery_accounts: 18056.0,
        "%Unique_payers": 4.463890119627824,
        benchmark_rate: 6.530795422394364,
      },
      {
        month: "Jun2024",
        sub_segment: "<1L",
        average_payment_size: 10794.889292803971,
        unique_payers: 806.0,
        benchmark_recov_accounts: 1179.2004214675264,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 33896.0,
        "%Unique_payers": 11.753599244748642,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Feb2023",
        sub_segment: "1-5L",
        average_payment_size: 23748.42374246988,
        unique_payers: 3984.0,
        benchmark_recov_accounts: 3385.6689133778796,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 33741.0,
        "%Unique_payers": 10.610236803888444,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Mar2023",
        sub_segment: "1-5L",
        average_payment_size: 24358.402067039107,
        unique_payers: 3580.0,
        benchmark_recov_accounts: 3370.1868894938348,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34003.0,
        "%Unique_payers": 8.608063994353438,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Apr2023",
        sub_segment: "1-5L",
        average_payment_size: 20983.760761872225,
        unique_payers: 2927.0,
        benchmark_recov_accounts: 3396.356504059123,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34728.0,
        "%Unique_payers": 9.865238424326192,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "May2023",
        sub_segment: "1-5L",
        average_payment_size: 21978.191459427904,
        unique_payers: 3426.0,
        benchmark_recov_accounts: 3468.772422226428,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34937.0,
        "%Unique_payers": 9.602999685147552,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Jun2023",
        sub_segment: "1-5L",
        average_payment_size: 24975.597099850973,
        unique_payers: 3355.0,
        benchmark_recov_accounts: 3489.6481834636234,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34774.0,
        "%Unique_payers": 9.524357278426411,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Jul2023",
        sub_segment: "1-5L",
        average_payment_size: 23902.648801328505,
        unique_payers: 3312.0,
        benchmark_recov_accounts: 3473.367087379112,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34732.0,
        "%Unique_payers": 8.91396982609697,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Aug2023",
        sub_segment: "1-5L",
        average_payment_size: 24614.870768733846,
        unique_payers: 3096.0,
        benchmark_recov_accounts: 3469.1719583266613,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34913.0,
        "%Unique_payers": 9.655429209749949,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Sep2023",
        sub_segment: "1-5L",
        average_payment_size: 24777.910548798573,
        unique_payers: 3371.0,
        benchmark_recov_accounts: 3487.250966862223,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35064.0,
        "%Unique_payers": 8.809605293178189,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Oct2023",
        sub_segment: "1-5L",
        average_payment_size: 24555.84923599871,
        unique_payers: 3089.0,
        benchmark_recov_accounts: 3502.3334546460337,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35277.0,
        "%Unique_payers": 8.424752671712447,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Nov2023",
        sub_segment: "1-5L",
        average_payment_size: 23241.799212651415,
        unique_payers: 2972.0,
        benchmark_recov_accounts: 3523.6087519834628,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35598.0,
        "%Unique_payers": 8.882521489971348,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Dec2023",
        sub_segment: "1-5L",
        average_payment_size: 23255.17750790639,
        unique_payers: 3162.0,
        benchmark_recov_accounts: 3555.6715240271933,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 35794.0,
        "%Unique_payers": 8.414818125942896,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Jan2024",
        sub_segment: "1-5L",
        average_payment_size: 23393.25237383798,
        unique_payers: 3012.0,
        benchmark_recov_accounts: 3575.2487929386302,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36119.0,
        "%Unique_payers": 8.413854204158476,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Feb2024",
        sub_segment: "1-5L",
        average_payment_size: 23353.49112207963,
        unique_payers: 3039.0,
        benchmark_recov_accounts: 3607.7111010825947,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36352.0,
        "%Unique_payers": 8.731294014084508,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Mar2024",
        sub_segment: "1-5L",
        average_payment_size: 24217.748279773157,
        unique_payers: 3174.0,
        benchmark_recov_accounts: 3630.9840789211903,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36403.0,
        "%Unique_payers": 7.471911655632778,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Apr2024",
        sub_segment: "1-5L",
        average_payment_size: 19700.17005882353,
        unique_payers: 2720.0,
        benchmark_recov_accounts: 3636.078164199166,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36928.0,
        "%Unique_payers": 8.511156845753899,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "May2024",
        sub_segment: "1-5L",
        average_payment_size: 21611.42049952275,
        unique_payers: 3143.0,
        benchmark_recov_accounts: 3688.5172773548006,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 37241.0,
        "%Unique_payers": 7.36285276979673,
        benchmark_rate: 9.988402505835142,
      },
      {
        month: "Jun2024",
        sub_segment: "1-5L",
        average_payment_size: 21447.981232676877,
        unique_payers: 2742.0,
        benchmark_recov_accounts: 3719.7809771980646,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6049.0,
        "%Unique_payers": 12.349148619606547,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Feb2023",
        sub_segment: "5-10L",
        average_payment_size: 43567.15006693441,
        unique_payers: 747.0,
        benchmark_recov_accounts: 582.5703220215042,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6055.0,
        "%Unique_payers": 10.289017341040463,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Mar2023",
        sub_segment: "5-10L",
        average_payment_size: 40076.144205457465,
        unique_payers: 623.0,
        benchmark_recov_accounts: 583.1481732253609,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6086.0,
        "%Unique_payers": 8.560630956293132,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Apr2023",
        sub_segment: "5-10L",
        average_payment_size: 36333.926679462566,
        unique_payers: 521.0,
        benchmark_recov_accounts: 586.1337377786205,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6204.0,
        "%Unique_payers": 9.413281753707285,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "May2023",
        sub_segment: "5-10L",
        average_payment_size: 38544.011900684935,
        unique_payers: 584.0,
        benchmark_recov_accounts: 597.4981447878017,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6265.0,
        "%Unique_payers": 8.635275339185954,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Jun2023",
        sub_segment: "5-10L",
        average_payment_size: 42579.65171903881,
        unique_payers: 541.0,
        benchmark_recov_accounts: 603.3729653603446,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6264.0,
        "%Unique_payers": 8.620689655172415,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Jul2023",
        sub_segment: "5-10L",
        average_payment_size: 33229.333611111106,
        unique_payers: 540.0,
        benchmark_recov_accounts: 603.2766568263685,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6351.0,
        "%Unique_payers": 8.156195874665407,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Aug2023",
        sub_segment: "5-10L",
        average_payment_size: 35602.39594594595,
        unique_payers: 518.0,
        benchmark_recov_accounts: 611.6554992822902,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6490.0,
        "%Unique_payers": 8.289676425269645,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Sep2023",
        sub_segment: "5-10L",
        average_payment_size: 36777.99646840149,
        unique_payers: 538.0,
        benchmark_recov_accounts: 625.0423855049698,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6602.0,
        "%Unique_payers": 7.861254165404423,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Oct2023",
        sub_segment: "5-10L",
        average_payment_size: 46035.84026974952,
        unique_payers: 519.0,
        benchmark_recov_accounts: 635.8289413102945,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6692.0,
        "%Unique_payers": 6.64973102211596,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Nov2023",
        sub_segment: "5-10L",
        average_payment_size: 34889.8851011236,
        unique_payers: 445.0,
        benchmark_recov_accounts: 644.4967093681446,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6825.0,
        "%Unique_payers": 7.384615384615385,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Dec2023",
        sub_segment: "5-10L",
        average_payment_size: 44406.80773809524,
        unique_payers: 504.0,
        benchmark_recov_accounts: 657.3057443869675,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 6916.0,
        "%Unique_payers": 7.403123192596876,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Jan2024",
        sub_segment: "5-10L",
        average_payment_size: 41497.116953125,
        unique_payers: 512.0,
        benchmark_recov_accounts: 666.0698209787937,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7021.0,
        "%Unique_payers": 7.135735650192281,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Feb2024",
        sub_segment: "5-10L",
        average_payment_size: 40711.885948103794,
        unique_payers: 501.0,
        benchmark_recov_accounts: 676.1822170462856,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7167.0,
        "%Unique_payers": 8.05078833542626,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Mar2024",
        sub_segment: "5-10L",
        average_payment_size: 46468.45682842287,
        unique_payers: 577.0,
        benchmark_recov_accounts: 690.243263006798,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7269.0,
        "%Unique_payers": 6.424542578071262,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Apr2024",
        sub_segment: "5-10L",
        average_payment_size: 39561.80942184154,
        unique_payers: 467.0,
        benchmark_recov_accounts: 700.0667334723614,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7391.0,
        "%Unique_payers": 7.360303071302936,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "May2024",
        sub_segment: "5-10L",
        average_payment_size: 35416.83654411764,
        unique_payers: 544.0,
        benchmark_recov_accounts: 711.8163746174472,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7497.0,
        "%Unique_payers": 6.549286381219154,
        benchmark_rate: 9.630853397611245,
      },
      {
        month: "Jun2024",
        sub_segment: "5-10L",
        average_payment_size: 36095.893279022406,
        unique_payers: 491.0,
        benchmark_recov_accounts: 722.025079218915,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "10L+",
        active_recovery_accounts: 399.0,
        "%Unique_payers": 12.280701754385964,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Feb2023",
        sub_segment: "10L+",
        average_payment_size: 85340.61224489796,
        unique_payers: 49.0,
        benchmark_recov_accounts: 39.6283540248298,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "10L+",
        active_recovery_accounts: 407.0,
        "%Unique_payers": 9.828009828009828,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Mar2023",
        sub_segment: "10L+",
        average_payment_size: 73782.8195,
        unique_payers: 40.0,
        benchmark_recov_accounts: 40.42290748898678,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "10L+",
        active_recovery_accounts: 410.0,
        "%Unique_payers": 7.804878048780488,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Apr2023",
        sub_segment: "10L+",
        average_payment_size: 49934.875,
        unique_payers: 32.0,
        benchmark_recov_accounts: 40.72086503804565,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "10L+",
        active_recovery_accounts: 423.0,
        "%Unique_payers": 11.347517730496454,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "May2023",
        sub_segment: "10L+",
        average_payment_size: 55260.660625,
        unique_payers: 48.0,
        benchmark_recov_accounts: 42.01201441730076,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "10L+",
        active_recovery_accounts: 428.0,
        "%Unique_payers": 7.943925233644859,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Jun2023",
        sub_segment: "10L+",
        average_payment_size: 74727.41176470589,
        unique_payers: 34.0,
        benchmark_recov_accounts: 42.508610332398874,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "10L+",
        active_recovery_accounts: 430.0,
        "%Unique_payers": 10.465116279069768,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Jul2023",
        sub_segment: "10L+",
        average_payment_size: 58989.15555555555,
        unique_payers: 45.0,
        benchmark_recov_accounts: 42.70724869843812,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "10L+",
        active_recovery_accounts: 444.0,
        "%Unique_payers": 10.135135135135135,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Aug2023",
        sub_segment: "10L+",
        average_payment_size: 101903.84444444445,
        unique_payers: 45.0,
        benchmark_recov_accounts: 44.097717260712855,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "10L+",
        active_recovery_accounts: 455.0,
        "%Unique_payers": 9.010989010989011,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Sep2023",
        sub_segment: "10L+",
        average_payment_size: 53163.439024390245,
        unique_payers: 41.0,
        benchmark_recov_accounts: 45.19022827392871,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "10L+",
        active_recovery_accounts: 465.0,
        "%Unique_payers": 8.38709677419355,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Oct2023",
        sub_segment: "10L+",
        average_payment_size: 57929.282051282054,
        unique_payers: 39.0,
        benchmark_recov_accounts: 46.18342010412495,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "10L+",
        active_recovery_accounts: 477.0,
        "%Unique_payers": 9.224318658280922,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Nov2023",
        sub_segment: "10L+",
        average_payment_size: 39903.63636363636,
        unique_payers: 44.0,
        benchmark_recov_accounts: 47.37525030036043,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "10L+",
        active_recovery_accounts: 483.0,
        "%Unique_payers": 9.523809523809524,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Dec2023",
        sub_segment: "10L+",
        average_payment_size: 63119.13043478261,
        unique_payers: 46.0,
        benchmark_recov_accounts: 47.97116539847817,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "10L+",
        active_recovery_accounts: 486.0,
        "%Unique_payers": 10.905349794238683,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Jan2024",
        sub_segment: "10L+",
        average_payment_size: 57539.49056603773,
        unique_payers: 53.0,
        benchmark_recov_accounts: 48.26912294753704,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "10L+",
        active_recovery_accounts: 493.0,
        "%Unique_payers": 8.113590263691684,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Feb2024",
        sub_segment: "10L+",
        average_payment_size: 71140.075,
        unique_payers: 40.0,
        benchmark_recov_accounts: 48.96435722867441,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "10L+",
        active_recovery_accounts: 502.0,
        "%Unique_payers": 9.362549800796813,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Mar2024",
        sub_segment: "10L+",
        average_payment_size: 72026.76595744681,
        unique_payers: 47.0,
        benchmark_recov_accounts: 49.858229875851016,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "10L+",
        active_recovery_accounts: 508.0,
        "%Unique_payers": 8.46456692913386,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Apr2024",
        sub_segment: "10L+",
        average_payment_size: 42118.976744186046,
        unique_payers: 43.0,
        benchmark_recov_accounts: 50.45414497396876,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "10L+",
        active_recovery_accounts: 525.0,
        "%Unique_payers": 10.285714285714285,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "May2024",
        sub_segment: "10L+",
        average_payment_size: 73987.51851851853,
        unique_payers: 54.0,
        benchmark_recov_accounts: 52.14257108530236,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "10L+",
        active_recovery_accounts: 530.0,
        "%Unique_payers": 9.433962264150944,
        benchmark_rate: 9.931918301962355,
      },
      {
        month: "Jun2024",
        sub_segment: "10L+",
        average_payment_size: 42344.36,
        unique_payers: 50.0,
        benchmark_recov_accounts: 52.63916700040048,
      },
    ],
  ],
};


const PortfolioRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [recoveryData, setRecoveryData] = useState<RecoveryItem[]>([]);
  const [uniqueData, setUniqueData] = useState<RecoveryItem[]>([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [selectedSubCategory, setselectedSubCategory] = useState("V1");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("Very Small");
  // const [
  //   selectedSubCategoryUniquePayerAgency,
  //   setselectedSubCategoryUniquePayerAgency,
  // ] = useState("Very Small");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("UP");
  const [selectedSubCategoryTOS, setselectedSubCategoryTOS] = useState("<1L");

  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");

  const [delinquencyGraphTitle, setdelinquencyGraphTitle] = useState(
    "POS Balances (millions)"
  );

  const [delinquencyUniqueGraphTitle, setdelinquencyUniqueGraphTitle] =
    useState("Recovery (millions)");

  const [forwardFlowRateTitle, setforwardFlowRateTitle] = useState(
    "Monthly Recovery % (Coincidental)"
  );

  const [portfolioRecoveryGraphData, setPortfolioRecoveryGraphData] =
    useState<any>();
  const [
    portfolioRecoveryUniquePayerGraphData,
    setPortfolioRecoveryUniquePayerGraphData,
  ] = useState<any>();

  const [portfolioRecoveryFlowGraphData, setPortfolioRecoveryFlowGraphData] =
    useState<any>();
  const [portfolioUniqueFlowGraphData, setPortfolioUniqueFlowGraphData] =
    useState<any>();
  // const [loader, setLoader] = useState(false);
  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };
  // const [isImageVisible, setIsImageVisible] = useState(true);

  // const handleImageClick = () => {
  //     setIsImageVisible(false);
  //   };
  //   const handlePortfolioClose = () => {
  //     setIsImageVisible(true);
  //   };

  const [isImageVisible, setIsImageVisible] = useState(true);
  const [loader, setLoader] = useState(false);

  const Loader = () => {
    return <span className="loader"></span>;
  };

  const handleImageClick = () => {
     setIsImageVisible(false);
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    //  setIsImageVisible(false)
    }, 2000);
  };

  const handlePortfolioClose = () => {
      setIsImageVisible(true);  
  };

  let navigate = useNavigate();

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery" || buttonId === "writeOff") {
      // setdelinquencyGraphTitle("Monthly Recovery");
      setdelinquencyGraphTitle("POS Balances (millions)");
      setdelinquencyUniqueGraphTitle("Recovery (millions)");
      setforwardFlowRateTitle("Monthly Recovery % (Coincidental)");
    } else if (buttonId === "uniquePayer") {
      setdelinquencyGraphTitle("Total Accounts");
      setforwardFlowRateTitle("Unique Payer Rate");
      setdelinquencyUniqueGraphTitle("Payer%");
    }
  };

  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
  };

  const handleSubCategoryClick = async (cityId: string) => {
    setselectedSubCategory(cityId);
  };

  const handleSubCategoryTwoClick = async (cityId: string) => {
    setselectedSubCategoryTwo(cityId);
  };
  const handleSubCategoryAgencyClick = async (cityId: string) => {
    setselectedSubCategoryAgency(cityId);
  };

  // const handleSubCategoryUniquePayerAgencyClick = async (cityId: string) => {
  //   setselectedSubCategoryUniquePayerAgency(cityId);
  // };

  const handleSubCategoryPaymentClick = async (cityId: string) => {
    setselectedSubCategoryPayment(cityId);
  };
  const handleSubCategoryLocationClick = async (cityId: string) => {
    setselectedSubCategoryLocation(cityId);
  };
  const handleSubCategoryTOSClick = async (cityId: string) => {
    setselectedSubCategoryTOS(cityId);
  };
  // const handleSubCategoryTOSClickUnique = async (cityId: string) => {
  //   setselectedSubCategoryTOSUnique(cityId);
  // };
  const handleSubCategorySegmentClick = async (cityId: string) => {
    setselectedSubCategorySegments(cityId);
  };
  const handleSubCategoryUniquePayerSegmentClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerSegments(cityId);
  };

  useEffect(() => {
    // setPortfolioRecoveryGraphData(recoveryStaticData);
    setPortfolioRecoveryUniquePayerGraphData(uniqueStaticData);
  }, []);


  const [error, setError] = useState<string | null>(null);
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/portfolio?blob=recovery_potfolio`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
   
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data,"fetched data");
      setPortfolioRecoveryGraphData(result.data);
      
    } catch (err: any) {
      setError(err.message);
    }
  };

  // const fetchUniqueData = async (blob: any) => {
  //   const url = `https://indilab-apim.azure-api.net/api/portfolio?blob=unique_payers_portfolio`;
  //   const headers = {
  //     "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
  //   };
   
  //   try {
  //     const response = await fetch(url, { method: "GET", headers });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     console.log(result.data,"fetched data");
  //     setPortfolioRecoveryUniquePayerGraphData(result.data);
      
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };
  useEffect(() => {
    fetchData("recovery_potfolio");
    // fetchUniqueData("unique_payers_portfolio")
  }, []);

  return (
    <div className="CommonBodyWrap bg-[#fafafb] ">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard /> */}
        <HomeDashboard />
      </div>
      <div className="w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
        <div className="relative flex justify-between w-full">
          <div className="flex flex-col gap-3">
            <div className="">
              <div className=" flex w-full rounded-xl B1TabsContain">
                {Buttons.map((buttons, index) => (
                  <div
                    key={buttons.id}
                    onClick={() => handleProductClick(buttons.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 
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
            </div>
            <div className="flex">
              <div className=" flex  rounded-xl B1TabsContain">
                {categories.map((city, index) => (
                  <div
                    key={city.id}
                    onClick={() => handleCategoryClick(city.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                      selectedCategory === city.id
                        ? " bg-[#E8DEF8] "
                        : "bg-[#fafafb]"
                    } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === categories.length - 1 ? "rounded-r-[4px]" : ""
                    }`}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            </div>

            {selectedCategory === "mob" && (
              <div className="">
                <div className=" flex w-full  rounded-xl">
                  {subCategories.map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => handleSubCategoryClick(city.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                        selectedSubCategory === city.id
                          ? " bg-[#E8DEF8] "
                          : "bg-[#fafafb]"
                      } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === subCategories.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "placement" && (
              <div className="">
                <div className=" flex w-full  rounded-xl">
                  {subCategoriesPlacements.map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => handleSubCategoryTwoClick(city.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                        selectedSubCategoryTwo === city.id
                          ? " bg-[#E8DEF8] "
                          : "bg-[#fafafb]"
                      } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === subCategoriesPlacements.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "pos" && (
              <div className="">
                <div className=" flex w-full   rounded-xl">
                  {subCategoriesTOS.map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => handleSubCategoryTOSClick(city.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                        selectedSubCategoryTOS === city.id
                          ? " bg-[#E8DEF8] "
                          : "bg-[#fafafb]"
                      } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === subCategoriesTOS.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "agency" && (
              <div className="">
                <div className=" flex w-full  rounded-xl">
                  {subCategoriesAgents.map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => handleSubCategoryAgencyClick(city.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                        selectedSubCategoryAgency === city.id
                          ? " bg-[#E8DEF8] "
                          : "bg-[#fafafb]"
                      } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === subCategoriesAgents.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "location" && (
              <div className="">
                <div className=" flex w-full  rounded-xl">
                  {subCategoriesLocation.map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => handleSubCategoryLocationClick(city.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                        selectedSubCategoryLocation === city.id
                          ? " bg-[#E8DEF8] "
                          : "bg-[#fafafb]"
                      } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === subCategoriesLocation.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "segments" &&
              (activeButton === "$Recovery" || activeButton === "writeOff") && (
                <div className="">
                  <div className=" flex w-full  rounded-xl">
                    {subCategoriesSegment.map((city, index) => (
                      <div
                        key={city.id}
                        onClick={() => handleSubCategorySegmentClick(city.id)}
                        className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                          selectedSubCategorySegments === city.id
                            ? " bg-[#E8DEF8] "
                            : "bg-[#fafafb]"
                        } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                          index === subCategoriesSegment.length - 1
                            ? "rounded-r-[4px]"
                            : ""
                        }`}
                      >
                        {city.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {selectedCategory === "segments" &&
              activeButton === "uniquePayer" && (
                <div className="">
                  <div className=" flex w-full  rounded-xl">
                    {subCategoriesSegmentUniquePayer.map((city, index) => (
                      <div
                        key={city.id}
                        onClick={() =>
                          handleSubCategoryUniquePayerSegmentClick(city.id)
                        }
                        className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                          selectedSubCategoryUniquePayerSegments === city.id
                            ? " bg-[#E8DEF8] "
                            : "bg-[#fafafb]"
                        } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                          index === subCategoriesSegmentUniquePayer.length - 1
                            ? "rounded-r-[4px]"
                            : ""
                        }`}
                      >
                        {city.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
          {isImageVisible || loader ? (
        <div className="">
          {isImageVisible && (
            <div className="flex place-items-end">
                <img
              className="mr-32 cursor-pointer "
              src={AIButtons} 
              alt="AIGenImage"
              onClick={handleImageClick}
            />
             </div>
          
          )}
          {loader && (
            <div className="relative flex justify-end  mr-52 inset-0 ">
              <Loader />
            </div>
          )}
        </div>
      ) : (

        <div className="sticky bg-white flex justify-end items-end right-16 z-500">
          <PortfolioAI onClose={handlePortfolioClose} />
        </div>
      )}
        </div>
      </div>
      <div className="flex flex-col  items-start  justify-center gap-6 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div
          className={`w-full flex flex-col xl:flex-row 
          } items-center justify-between xl:gap-6`}
        >
          {/* <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          <DelinquencyBucketsPortfolioRecovery
            delinquencyGraphTitle={delinquencyGraphTitle}
            activeButton={activeButton}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedSubCategoryTwo={selectedSubCategoryTwo}
            selectedSubCategoryLocation={selectedSubCategoryLocation}
            selectedSubCategoryAgency={selectedSubCategoryAgency}
            selectedSubCategorySegments={selectedSubCategorySegments}
            selectedSubCategoryPayment={selectedSubCategoryPayment}
            selectedSubCategoryUniquePayerAgency={
              selectedSubCategoryUniquePayerAgency
            }
            selectedSubCategoryUniquePayerSegments={
              selectedSubCategoryUniquePayerSegments
            }
            portfolioRecoveryGraphData={portfolioRecoveryGraphData}
            portfolioRecoveryUniquePayerGraphData={
              portfolioRecoveryUniquePayerGraphData
            }
          />
          <ForwardFlowRatesPortfolioRecovery
            forwardFlowRateTitle={forwardFlowRateTitle}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedSubCategoryTwo={selectedSubCategoryTwo}
            selectedSubCategoryAgency={selectedSubCategoryAgency}
            selectedSubCategoryPayment={selectedSubCategoryPayment}
            selectedSubCategoryLocation={selectedSubCategoryLocation}
            selectedSubCategorySegments={selectedSubCategorySegments}
            selectedSubCategoryUniquePayerSegments={
              selectedSubCategoryUniquePayerSegments
            }
            activeButton={activeButton}
            selectedSubCategoryUniquePayerAgency={
              selectedSubCategoryUniquePayerAgency
            }
            portfolioRecoveryFlowGraphData={portfolioRecoveryFlowGraphData}
            portfolioUniqueFlowGraphData={portfolioUniqueFlowGraphData}
          />
        </div> */}
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <PortfolioGraph
              delinquencyGraphTitle={delinquencyGraphTitle}
              delinquencyUniqueGraphTitle={delinquencyUniqueGraphTitle}
              activeButton={activeButton}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSubCategoryTwo={selectedSubCategoryTwo}
              selectedSubCategoryLocation={selectedSubCategoryLocation}
              selectedSubCategoryAgency={selectedSubCategoryAgency}
              selectedSubCategoryTOS={selectedSubCategoryTOS}
              selectedSubCategorySegments={selectedSubCategorySegments}
              selectedSubCategoryPayment={selectedSubCategoryPayment}
              selectedSubCategoryUniquePayerSegments={
                selectedSubCategoryUniquePayerSegments
              }
              portfolioRecoveryGraphData={portfolioRecoveryGraphData}
              portfolioRecoveryUniquePayerGraphData={
                portfolioRecoveryUniquePayerGraphData
              }
            />{" "}
          </div>
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <BarAndLineCombaineGraph
              delinquencyGraphTitle={delinquencyGraphTitle}
              delinquencyUniqueGraphTitle={delinquencyUniqueGraphTitle}
              activeButton={activeButton}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSubCategoryTwo={selectedSubCategoryTwo}
              selectedSubCategoryLocation={selectedSubCategoryLocation}
              selectedSubCategoryAgency={selectedSubCategoryAgency}
              selectedSubCategoryTOS={selectedSubCategoryTOS}
              selectedSubCategorySegments={selectedSubCategorySegments}
              selectedSubCategoryPayment={selectedSubCategoryPayment}
              selectedSubCategoryUniquePayerSegments={
                selectedSubCategoryUniquePayerSegments
              }
              portfolioRecoveryGraphData={portfolioRecoveryGraphData}
              portfolioRecoveryUniquePayerGraphData={
                portfolioRecoveryUniquePayerGraphData
              }
            />{" "}
          </div>
        </div>
        <div className="w-full BenchmarkTableMain">
          {/* {loader ? (
            <div className="w-full flex justify-center items-center ">
              <Loader />
            </div>
          ) : ( */}
          {/* <PortfolioBenchmarkTable
            activeButton={activeButton}
            recoveryData={recoveryData}
            uniqueData={uniqueData}
          /> */}
          {/* )} */}
        </div>
        <div className="w-full flex items-center justify-end gap-5 mt-8">
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          <Button
            // onClick={reviewHotspots}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRecovery;
