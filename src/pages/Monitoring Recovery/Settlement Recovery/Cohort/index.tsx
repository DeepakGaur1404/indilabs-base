import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import HomeDashboard from "../../../../components/PerformanceDashboardHeader/HomeDashboard";

import Button from "../../../../components/Button";
import NewSettlementRhs from "../../../../components/Monitoring Recovery/NewSettlementRhs";
import NewSettlementLhs from "../../../../components/Monitoring Recovery/NewSettlementLhs";
import CohortLHS from "../../../../components/Monitoring Recovery/CohortLHS";
import VintageRecoveryChart from "../../../../components/Monitoring Recovery/VintageRecoveryChart";
import CohortVintageGraph from "../../../../components/Monitoring Recovery/CohortVintageGraph";
import DelinquencySettlementRecovery from "../../../../components/Monitoring Recovery/DelinquencySettlementRecovery";
import CohortRHS from "../../../../components/Monitoring Recovery/CohortRHS";

const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "Recovery @ 6 months" },
     { id: "uniquePayer", label: "Cumulative Recovery" },
];
const categoriesButton = [
  { id: "all", name: "All" },]


const categories = [
  { id: "all", name: "" },
  { id: "pos", name: "POS" }
  // { id: "location", name: "Location" },
  // { id: "mob", name: "Vintage" },
  // { id: "placement", name: "Placement" },

  //   { id: "agency", name: "Agency" },
  // { id: "pos", name: "POS" },
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
  { id: "RJ", name: "RJ" },
  // { id: "DL", name: "DL" },
  { id: "OTHERS", name: "OTHERS" },
];
const subCategoriesTOS = [
  { id: "<1Lakh", name: "<1Lakh" },
  { id: ">=1 - 5Lakh", name: ">=1 - 5Lakh" },
  { id: ">=5 - 10Lakh", name: ">=5 - 10Lakh" },
  { id: ">=10L", name: ">=10L" },
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
const recoveryStaticData = {
  All: [
    // [{
    //     "segment": "All",
    //     "month": "Feb2023",
    //     "settlement_amount": 438253096.74,
    //     "Average_Waiver_%": 0.6259513827613615
    // },
    // {
    //     "segment": "All",
    //     "month": "Feb2023",
    //     "recovery": 32336936.7,
    //     "Recovery_%": 0.07378598563374067
    // }],
    //    [ {
    //         "segment": "All",
    //         "month": "Mar2023",
    //         "settlement_amount": 19543526.0,
    //         "Average_Waiver_%": 0.5621610814888958
    //     },
    //     {
    //         "segment": "All",
    //         "month": "Mar2023",
    //         "recovery": 2566483.0,
    //         "Recovery_%": 0.13132139000915188
    //     }],
    [
      {
        segment: "All",
        month: "1.0",
        settlement_amount: 83.60318748140317,
        "Average_Waiver_%":  61.18844829154344,
      },
      {
        segment: "All",
        month: "Apr2023",
        recovery: 254244.0,
        "Recovery_%": 0.01847066679917912,
      },
    ],
    [
      {
        segment: "All",
        month: "2.0",
        settlement_amount: 60.837818089087015,
        "Average_Waiver_%": 57.348434591877236,
      },
      {
        segment: "All",
        month: "May2023",
        recovery: 1323612.0,
        "Recovery_%": 0.07561417105031792,
      },
    ],
    [
      {
        segment: "All",
        month: "3.0",
        settlement_amount: 35.881918522541376,
        "Average_Waiver_%": 61.784279323979526,
      },
      {
        segment: "All",
        month: "Jun2023",
        recovery: 623762.12,
        "Recovery_%": 0.039145850462108084,
      },
    ],
    [
      {
        segment: "All",
        month: "4.0",
        settlement_amount: 45.46114261772884,
        "Average_Waiver_%": 60.97890081770419,
      },
      {
        segment: "All",
        month: "Jul2023",
        recovery: 713229.0,
        "Recovery_%": 0.044740192497954405,
      },
    ],
    [
      {
        segment: "All",
        month: "5.0",
        settlement_amount: 38.58809194325734,
        "Average_Waiver_%":  59.487857711328616,
      },
      {
        segment: "All",
        month: "Aug2023",
        recovery: 1258975.0,
        "Recovery_%": 0.057618892928241135,
      },
    ],
    [
      {
        segment: "All",
        month: "6.0",
        settlement_amount: 33.377452342630136,
        "Average_Waiver_%": 61.12738473024299,
      },
      {
        segment: "All",
        month: "Sep2023",
        recovery: 1132285.0,
        "Recovery_%": 0.04982666927824125,
      },
    ],
    // [
    //   {
    //     segment: "All",
    //     month: "Oct2023",
    //     settlement_amount: 19860202.0,
    //     "Average_Waiver_%": 0.5580977476184699,
    //   },
    //   {
    //     segment: "All",
    //     month: "Oct2023",
    //     recovery: 926637.0,
    //     "Recovery_%": 0.04665798464688325,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Nov2023",
    //     settlement_amount: 20674965.0,
    //     "Average_Waiver_%": 0.580002597032691,
    //   },
    //   {
    //     segment: "All",
    //     month: "Nov2023",
    //     recovery: 808148.0,
    //     "Recovery_%": 0.039088240294481755,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Dec2023",
    //     settlement_amount: 20506414.0,
    //     "Average_Waiver_%": 0.5878632698992504,
    //   },
    //   {
    //     segment: "All",
    //     month: "Dec2023",
    //     recovery: 1031989.0,
    //     "Recovery_%": 0.05032518118477468,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Jan2024",
    //     settlement_amount: 21245924.0,
    //     "Average_Waiver_%": 0.5781500999609039,
    //   },
    //   {
    //     segment: "All",
    //     month: "Jan2024",
    //     recovery: 1376488.0,
    //     "Recovery_%": 0.06478833304684702,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Feb2024",
    //     settlement_amount: 19363420.0,
    //     "Average_Waiver_%": 0.5921334060070695,
    //   },
    //   {
    //     segment: "All",
    //     month: "Feb2024",
    //     recovery: 740563.0,
    //     "Recovery_%": 0.03824546490237778,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Mar2024",
    //     settlement_amount: 21383545.0,
    //     "Average_Waiver_%": 0.6038615848980622,
    //   },
    //   {
    //     segment: "All",
    //     month: "Mar2024",
    //     recovery: 1256309.0,
    //     "Recovery_%": 0.05875120332012302,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Apr2024",
    //     settlement_amount: 18121865.0,
    //     "Average_Waiver_%": 0.579803497488492,
    //   },
    //   {
    //     segment: "All",
    //     month: "Apr2024",
    //     recovery: 568987.0,
    //     "Recovery_%": 0.03139781694654496,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "May2024",
    //     settlement_amount: 24194650.0,
    //     "Average_Waiver_%": 0.6026029315237845,
    //   },
    //   {
    //     segment: "All",
    //     month: "May2024",
    //     recovery: 1674071.0,
    //     "Recovery_%": 0.06919178413409575,
    //   },
    // ],
    // [
    //   {
    //     segment: "All",
    //     month: "Jun2024",
    //     settlement_amount: 15006384.0,
    //     "Average_Waiver_%": 0.5442799588036709,
    //   },
    //   {
    //     segment: "All",
    //     month: "Jun2024",
    //     recovery: 306685.0,
    //     "Recovery_%": 0.020436968692791015,
    //   },
    // ],
  ],
  location: [
    // [ {
    //      "segment": "AP",
    //      "month": "Feb2023",
    //      "settlement_amount": 17773409.57,
    //      "Average_Waiver_%": 0.41376917968975924
    //  },
    //  {
    //      "segment": "AP",
    //      "month": "Feb2023",
    //      "recovery": 1242964.0,
    //      "Recovery_%": 0.06993390857869033
    //  }],
    // [ {
    //      "segment": "AP",
    //      "month": "Mar2023",
    //      "settlement_amount": 303000.0,
    //      "Average_Waiver_%": 0.5019377530592485
    //  },
    //  {
    //      "segment": "AP",
    //      "month": "Mar2023",
    //      "recovery": 139000.0,
    //      "Recovery_%": 0.45874587458745875
    //  }],
    [
      {
        segment: "AP",
        month: "Apr2023",
        settlement_amount: 1096700.0,
        "Average_Waiver_%": 0.39950600992623986,
      },
      {
        segment: "AP",
        month: "Apr2023",
        recovery: 48294.0,
        "Recovery_%": 0.04403574359441962,
      },
    ],
    [
      {
        segment: "AP",
        month: "May2023",
        settlement_amount: 393000.0,
        "Average_Waiver_%": 0.5132381688774803,
      },
      {
        segment: "AP",
        month: "May2023",
        recovery: 32000.0,
        "Recovery_%": 0.08142493638676845,
      },
    ],
    [
      {
        segment: "AP",
        month: "Jun2023",
        settlement_amount: 180000.0,
        "Average_Waiver_%": 0.2848399266075115,
      },
      {
        segment: "AP",
        month: "Jun2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "AP",
        month: "Jul2023",
        settlement_amount: 571000.0,
        "Average_Waiver_%": 0.49620804503406934,
      },
      {
        segment: "AP",
        month: "Jul2023",
        recovery: 4000.0,
        "Recovery_%": 0.0070052539404553416,
      },
    ],
    [
      {
        segment: "AP",
        month: "Aug2023",
        settlement_amount: 1277000.0,
        "Average_Waiver_%": 0.387929600553204,
      },
      {
        segment: "AP",
        month: "Aug2023",
        recovery: 69289.0,
        "Recovery_%": 0.05425920125293657,
      },
    ],
    [
      {
        segment: "AP",
        month: "Sep2023",
        settlement_amount: 730000.0,
        "Average_Waiver_%": 0.4142959973393798,
      },
      {
        segment: "AP",
        month: "Sep2023",
        recovery: 8241.0,
        "Recovery_%": 0.011289041095890412,
      },
    ],
    [
      {
        segment: "AP",
        month: "Oct2023",
        settlement_amount: 355000.0,
        "Average_Waiver_%": 0.4682684049071258,
      },
      {
        segment: "AP",
        month: "Oct2023",
        recovery: 18650.0,
        "Recovery_%": 0.05253521126760563,
      },
    ],
    [
      {
        segment: "AP",
        month: "Nov2023",
        settlement_amount: 342000.0,
        "Average_Waiver_%": 0.46949502734753623,
      },
      {
        segment: "AP",
        month: "Nov2023",
        recovery: 10000.0,
        "Recovery_%": 0.029239766081871343,
      },
    ],
    [
      {
        segment: "AP",
        month: "Dec2023",
        settlement_amount: 1514470.0,
        "Average_Waiver_%": 0.3736668569407604,
      },
      {
        segment: "AP",
        month: "Dec2023",
        recovery: 43600.0,
        "Recovery_%": 0.02878894926938137,
      },
    ],
    [
      {
        segment: "AP",
        month: "Jan2024",
        settlement_amount: 750000.0,
        "Average_Waiver_%": 0.9403511918311918,
      },
      {
        segment: "AP",
        month: "Jan2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "AP",
        month: "Feb2024",
        settlement_amount: 1842050.0,
        "Average_Waiver_%": 0.47706320363196747,
      },
      {
        segment: "AP",
        month: "Feb2024",
        recovery: 7000.0,
        "Recovery_%": 0.0038001140034201026,
      },
    ],
    [
      {
        segment: "AP",
        month: "Mar2024",
        settlement_amount: 660000.0,
        "Average_Waiver_%": 0.3414056792245038,
      },
      {
        segment: "AP",
        month: "Mar2024",
        recovery: 40001.0,
        "Recovery_%": 0.060607575757575756,
      },
    ],
    [
      {
        segment: "AP",
        month: "Apr2024",
        settlement_amount: 1377750.0,
        "Average_Waiver_%": 0.5738785408425723,
      },
      {
        segment: "AP",
        month: "Apr2024",
        recovery: 47000.0,
        "Recovery_%": 0.03411359099981855,
      },
    ],
    [
      {
        segment: "AP",
        month: "May2024",
        settlement_amount: 180000.0,
        "Average_Waiver_%": 0.37772612815987316,
      },
      {
        segment: "AP",
        month: "May2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "AP",
        month: "Jun2024",
        settlement_amount: 405000.0,
        "Average_Waiver_%": 0.3695041492442039,
      },
      {
        segment: "AP",
        month: "Jun2024",
        recovery: 20000.0,
        "Recovery_%": 0.04938271604938271,
      },
    ],
    //  [{
    //      "segment": "GUJARAT",
    //      "month": "Feb2023",
    //      "settlement_amount": 14445188.0,
    //      "Average_Waiver_%": 0.3585821579890713
    //  },
    //  {
    //      "segment": "GJ",
    //      "month": "Feb2023",
    //      "recovery": 778587.0,
    //      "Recovery_%": 0.05389940234768838
    //  }],
    // [ {
    //      "segment": "GJ",
    //      "month": "Mar2023",
    //      "settlement_amount": 1069000.0,
    //      "Average_Waiver_%": 0.40661205518096066
    //  },
    //  {
    //      "segment": "GJ",
    //      "month": "Mar2023",
    //      "recovery": 103800.0,
    //      "Recovery_%": 0.0971000935453695
    //  }],
    [
      {
        segment: "GJ",
        month: "Apr2023",
        settlement_amount: 730000.0,
        "Average_Waiver_%": 0.5037151302424816,
      },
      {
        segment: "GJ",
        month: "Apr2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "GJ",
        month: "May2023",
        settlement_amount: 798000.0,
        "Average_Waiver_%": 0.4167151877019933,
      },
      {
        segment: "GJ",
        month: "May2023",
        recovery: 125000.0,
        "Recovery_%": 0.15664160401002505,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Jun2023",
        settlement_amount: 285000.0,
        "Average_Waiver_%": 0.5297658024352385,
      },
      {
        segment: "GJ",
        month: "Jun2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Jul2023",
        settlement_amount: 788730.0,
        "Average_Waiver_%": 0.5596564204997493,
      },
      {
        segment: "GJ",
        month: "Jul2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Aug2023",
        settlement_amount: 545000.0,
        "Average_Waiver_%": 0.3887179112561859,
      },
      {
        segment: "GJ",
        month: "Aug2023",
        recovery: 1999.9999999999995,
        "Recovery_%": 0.003669724770642201,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Sep2023",
        settlement_amount: 2005500.0,
        "Average_Waiver_%": 0.43802967190063963,
      },
      {
        segment: "GJ",
        month: "Sep2023",
        recovery: 30000.0,
        "Recovery_%": 0.014958863126402393,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Oct2023",
        settlement_amount: 1745600.0,
        "Average_Waiver_%": 0.396424499011329,
      },
      {
        segment: "GJ",
        month: "Oct2023",
        recovery: 24930.0,
        "Recovery_%": 0.014281622364802933,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Nov2023",
        settlement_amount: 875000.0,
        "Average_Waiver_%": 0.4416955088365326,
      },
      {
        segment: "GJ",
        month: "Nov2023",
        recovery: 12102.0,
        "Recovery_%": 0.013830857142857143,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Dec2023",
        settlement_amount: 1236480.0,
        "Average_Waiver_%": 0.5420779195010168,
      },
      {
        segment: "GJ",
        month: "Dec2023",
        recovery: 161280.0,
        "Recovery_%": 0.13043478260869565,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Jan2024",
        settlement_amount: 1342063.0,
        "Average_Waiver_%": 0.3845359893532656,
      },
      {
        segment: "GJ",
        month: "Jan2024",
        recovery: 70000.0,
        "Recovery_%": 0.052158505226654786,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Feb2024",
        settlement_amount: 1243300.0,
        "Average_Waiver_%": 0.4481274443454405,
      },
      {
        segment: "GJ",
        month: "Feb2024",
        recovery: 37453.0,
        "Recovery_%": 0.030123863910560603,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Mar2024",
        settlement_amount: 453000.0,
        "Average_Waiver_%": 0.30879666608667883,
      },
      {
        segment: "GJ",
        month: "Mar2024",
        recovery: 7600.0,
        "Recovery_%": 0.016777041942604858,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Apr2024",
        settlement_amount: 506800.0,
        "Average_Waiver_%": 0.399766627160132,
      },
      {
        segment: "GJ",
        month: "Apr2024",
        recovery: 18000.0,
        "Recovery_%": 0.035516969218626675,
      },
    ],
    [
      {
        segment: "GJ",
        month: "May2024",
        settlement_amount: 792000.0,
        "Average_Waiver_%": 0.4085028485620573,
      },
      {
        segment: "GJ",
        month: "May2024",
        recovery: 55000.0,
        "Recovery_%": 0.06944444444444445,
      },
    ],
    [
      {
        segment: "GJ",
        month: "Jun2024",
        settlement_amount: 317000.0,
        "Average_Waiver_%": 0.41077521706295456,
      },
      {
        segment: "GJ",
        month: "Jun2024",
        recovery: 10000.0,
        "Recovery_%": 0.031545741324921134,
      },
    ],
    // [ {
    //      "segment": "HR",
    //      "month": "Feb2023",
    //      "settlement_amount": 28982278.25,
    //      "Average_Waiver_%": 0.3226409043097995
    //  },
    //  {
    //      "segment": "HR",
    //      "month": "Feb2023",
    //      "recovery": 1569683.0,
    //      "Recovery_%": 0.054160096955110835
    //  }],
    //  [{
    //      "segment": "HR",
    //      "month": "Mar2023",
    //      "settlement_amount": 2052850.0,
    //      "Average_Waiver_%": 0.35699237886614366
    //  },
    //  {
    //      "segment": "HR",
    //      "month": "Mar2023",
    //      "recovery": 32500.0,
    //      "Recovery_%": 0.015831648683537522
    //  }],
    [
      {
        segment: "HR",
        month: "Apr2023",
        settlement_amount: 1608700.0,
        "Average_Waiver_%": 0.3829212686783613,
      },
      {
        segment: "HR",
        month: "Apr2023",
        recovery: 6999.999999999999,
        "Recovery_%": 0.004351339590974078,
      },
    ],
    [
      {
        segment: "HR",
        month: "May2023",
        settlement_amount: 1919280.0,
        "Average_Waiver_%": 0.3505388800150917,
      },
      {
        segment: "HR",
        month: "May2023",
        recovery: 270348.0,
        "Recovery_%": 0.140859072152057,
      },
    ],
    [
      {
        segment: "HR",
        month: "Jun2023",
        settlement_amount: 669200.0,
        "Average_Waiver_%": 0.32655176439573225,
      },
      {
        segment: "HR",
        month: "Jun2023",
        recovery: 13000.0,
        "Recovery_%": 0.019426180514046622,
      },
    ],
    [
      {
        segment: "HR",
        month: "Jul2023",
        settlement_amount: 758700.0,
        "Average_Waiver_%": 0.4446432488084314,
      },
      {
        segment: "HR",
        month: "Jul2023",
        recovery: 120000.0,
        "Recovery_%": 0.15816528272044286,
      },
    ],
    [
      {
        segment: "HR",
        month: "Aug2023",
        settlement_amount: 1495709.0,
        "Average_Waiver_%": 0.3543144164132478,
      },
      {
        segment: "HR",
        month: "Aug2023",
        recovery: 122800.0,
        "Recovery_%": 0.08210153178191747,
      },
    ],
    [
      {
        segment: "HR",
        month: "Sep2023",
        settlement_amount: 2540300.0,
        "Average_Waiver_%": 0.351634428605944,
      },
      {
        segment: "HR",
        month: "Sep2023",
        recovery: 104246.0,
        "Recovery_%": 0.041036885407235366,
      },
    ],
    [
      {
        segment: "HR",
        month: "Oct2023",
        settlement_amount: 765000.0,
        "Average_Waiver_%": 0.4052682262987897,
      },
      {
        segment: "HR",
        month: "Oct2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "HR",
        month: "Nov2023",
        settlement_amount: 1315850.0,
        "Average_Waiver_%": 0.32093560212084765,
      },
      {
        segment: "HR",
        month: "Nov2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "HR",
        month: "Dec2023",
        settlement_amount: 1445400.0,
        "Average_Waiver_%": 0.3504514437232008,
      },
      {
        segment: "HR",
        month: "Dec2023",
        recovery: 30000.0,
        "Recovery_%": 0.020755500207555,
      },
    ],
    [
      {
        segment: "HR",
        month: "Jan2024",
        settlement_amount: 2142800.0,
        "Average_Waiver_%": 0.3616842336424381,
      },
      {
        segment: "HR",
        month: "Jan2024",
        recovery: 108496.0,
        "Recovery_%": 0.05063281687511667,
      },
    ],
    [
      {
        segment: "HR",
        month: "Feb2024",
        settlement_amount: 1613600.0,
        "Average_Waiver_%": 0.31253293037813384,
      },
      {
        segment: "HR",
        month: "Feb2024",
        recovery: 110922.0,
        "Recovery_%": 0.06874194348041646,
      },
    ],
    [
      {
        segment: "HR",
        month: "Mar2024",
        settlement_amount: 2110900.0,
        "Average_Waiver_%": 0.35546822107704507,
      },
      {
        segment: "HR",
        month: "Mar2024",
        recovery: 68000.0,
        "Recovery_%": 0.03221374769055853,
      },
    ],
    [
      {
        segment: "HR",
        month: "Apr2024",
        settlement_amount: 1212900.0,
        "Average_Waiver_%": 0.3115733276780724,
      },
      {
        segment: "HR",
        month: "Apr2024",
        recovery: 11372.0,
        "Recovery_%": 0.009375875999670212,
      },
    ],
    [
      {
        segment: "HR",
        month: "May2024",
        settlement_amount: 1976200.0,
        "Average_Waiver_%": 0.3152336860637489,
      },
      {
        segment: "HR",
        month: "May2024",
        recovery: 121135.0,
        "Recovery_%": 0.061296933508754176,
      },
    ],
    [
      {
        segment: "HR",
        month: "Jun2024",
        settlement_amount: 1007100.0,
        "Average_Waiver_%": 0.4273035885117442,
      },
      {
        segment: "HR",
        month: "Jun2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    // [ {
    //      "segment": "KA",
    //      "month": "Feb2023",
    //      "settlement_amount": 43106272.0,
    //      "Average_Waiver_%": 0.4984044232165577
    //  },
    //  {
    //      "segment": "KA",
    //      "month": "Feb2023",
    //      "recovery": 3501212.0,
    //      "Recovery_%": 0.08122279746204915
    //  }],
    //  [{
    //      "segment": "KA",
    //      "month": "Mar2023",
    //      "settlement_amount": 1625999.0,
    //      "Average_Waiver_%": 0.547859927077036
    //  },
    //  {
    //      "segment": "KA",
    //      "month": "Mar2023",
    //      "recovery": 77500.0,
    //      "Recovery_%": 0.04766300594280808
    //  }],
    [
      {
        segment: "KA",
        month: "Apr2023",
        settlement_amount: 94300.0,
        "Average_Waiver_%": 0.4899690909000218,
      },
      {
        segment: "KA",
        month: "Apr2023",
        recovery: 15000.0,
        "Recovery_%": 0.15906680805938495,
      },
    ],
    [
      {
        segment: "KA",
        month: "May2023",
        settlement_amount: 1255000.0,
        "Average_Waiver_%": 0.543195054700283,
      },
      {
        segment: "KA",
        month: "May2023",
        recovery: 62930.0,
        "Recovery_%": 0.050143426294820714,
      },
    ],
    [
      {
        segment: "KA",
        month: "Jun2023",
        settlement_amount: 1310400.0,
        "Average_Waiver_%": 0.5515621782264584,
      },
      {
        segment: "KA",
        month: "Jun2023",
        recovery: 24500.0,
        "Recovery_%": 0.018696581196581196,
      },
    ],
    [
      {
        segment: "KA",
        month: "Jul2023",
        settlement_amount: 710000.0,
        "Average_Waiver_%": 0.5689635283560003,
      },
      {
        segment: "KA",
        month: "Jul2023",
        recovery: 80000.0,
        "Recovery_%": 0.11267605633802817,
      },
    ],
    [
      {
        segment: "KA",
        month: "Aug2023",
        settlement_amount: 1465600.0,
        "Average_Waiver_%": 0.48909684463255393,
      },
      {
        segment: "KA",
        month: "Aug2023",
        recovery: 92059.0,
        "Recovery_%": 0.06281318231441048,
      },
    ],
    [
      {
        segment: "KA",
        month: "Sep2023",
        settlement_amount: 559000.0,
        "Average_Waiver_%": 0.3206857328007464,
      },
      {
        segment: "KA",
        month: "Sep2023",
        recovery: 7715.0,
        "Recovery_%": 0.013801431127012523,
      },
    ],
    [
      {
        segment: "KA",
        month: "Oct2023",
        settlement_amount: 785000.0,
        "Average_Waiver_%": 0.42101052092956465,
      },
      {
        segment: "KA",
        month: "Oct2023",
        recovery: 35000.0,
        "Recovery_%": 0.044585987261146494,
      },
    ],
    [
      {
        segment: "KA",
        month: "Nov2023",
        settlement_amount: 450000.0,
        "Average_Waiver_%": 0.5466394344667631,
      },
      {
        segment: "KA",
        month: "Nov2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "KA",
        month: "Dec2023",
        settlement_amount: 1038200.0,
        "Average_Waiver_%": 0.4394220458158897,
      },
      {
        segment: "KA",
        month: "Dec2023",
        recovery: 135000.0,
        "Recovery_%": 0.13003274898863418,
      },
    ],
    [
      {
        segment: "KA",
        month: "Jan2024",
        settlement_amount: 491500.0,
        "Average_Waiver_%": 0.5336084400591831,
      },
      {
        segment: "KA",
        month: "Jan2024",
        recovery: 40500.0,
        "Recovery_%": 0.08240081383519837,
      },
    ],
    [
      {
        segment: "KA",
        month: "Feb2024",
        settlement_amount: 977300.0,
        "Average_Waiver_%": 0.38165604749296145,
      },
      {
        segment: "KA",
        month: "Feb2024",
        recovery: 7555.0,
        "Recovery_%": 0.007730481940038883,
      },
    ],
    [
      {
        segment: "KA",
        month: "Mar2024",
        settlement_amount: 1228604.0,
        "Average_Waiver_%": 0.4623130346662378,
      },
      {
        segment: "KA",
        month: "Mar2024",
        recovery: 74029.0,
        "Recovery_%": 0.06025456534408158,
      },
    ],
    [
      {
        segment: "KA",
        month: "Apr2024",
        settlement_amount: 1601000.0,
        "Average_Waiver_%": 0.5708456436410319,
      },
      {
        segment: "KA",
        month: "Apr2024",
        recovery: 65000.0,
        "Recovery_%": 0.04059962523422861,
      },
    ],
    [
      {
        segment: "KA",
        month: "May2024",
        settlement_amount: 880000.0,
        "Average_Waiver_%": 0.4959275640084831,
      },
      {
        segment: "KA",
        month: "May2024",
        recovery: 75000.0,
        "Recovery_%": 0.08522727272727272,
      },
    ],
    [
      {
        segment: "KA",
        month: "Jun2024",
        settlement_amount: 311000.0,
        "Average_Waiver_%": 0.5991892372357617,
      },
      {
        segment: "KA",
        month: "Jun2024",
        recovery: 18432.0,
        "Recovery_%": 0.05926688102893891,
      },
    ],
    // [ {
    //      "segment": "MP",
    //      "month": "Feb2023",
    //      "settlement_amount": 27428925.0,
    //      "Average_Waiver_%": 0.37238070244134164
    //  },
    //  {
    //      "segment": "MP",
    //      "month": "Feb2023",
    //      "recovery": 1568126.0,
    //      "Recovery_%": 0.057170523452887784
    //  }],
    // [ {
    //      "segment": "MP",
    //      "month": "Mar2023",
    //      "settlement_amount": 2108500.0,
    //      "Average_Waiver_%": 0.41143581526351203
    //  },
    //  {
    //      "segment": "MP",
    //      "month": "Mar2023",
    //      "recovery": 151201.0,
    //      "Recovery_%": 0.07171022053592602
    //  }],
    [
      {
        segment: "MP",
        month: "Apr2023",
        settlement_amount: 1051144.0,
        "Average_Waiver_%": 0.3668579178309378,
      },
      {
        segment: "MP",
        month: "Apr2023",
        recovery: 12700.0,
        "Recovery_%": 0.01208207438752445,
      },
    ],
    [
      {
        segment: "MP",
        month: "May2023",
        settlement_amount: 870000.0,
        "Average_Waiver_%": 0.3581775786467801,
      },
      {
        segment: "MP",
        month: "May2023",
        recovery: 47500.0,
        "Recovery_%": 0.05459770114942529,
      },
    ],
    [
      {
        segment: "MP",
        month: "Jun2023",
        settlement_amount: 828000.0,
        "Average_Waiver_%": 0.5399341104319803,
      },
      {
        segment: "MP",
        month: "Jun2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "MP",
        month: "Jul2023",
        settlement_amount: 1343000.0,
        "Average_Waiver_%": 0.46969686663051896,
      },
      {
        segment: "MP",
        month: "Jul2023",
        recovery: 160570.0,
        "Recovery_%": 0.11956068503350707,
      },
    ],
    [
      {
        segment: "MP",
        month: "Aug2023",
        settlement_amount: 1836550.0,
        "Average_Waiver_%": 0.548037840563383,
      },
      {
        segment: "MP",
        month: "Aug2023",
        recovery: 47132.0,
        "Recovery_%": 0.025663336146579185,
      },
    ],
    [
      {
        segment: "MP",
        month: "Sep2023",
        settlement_amount: 1858605.0,
        "Average_Waiver_%": 0.4572248766731711,
      },
      {
        segment: "MP",
        month: "Sep2023",
        recovery: 54443.0,
        "Recovery_%": 0.029292399407082195,
      },
    ],
    [
      {
        segment: "MP",
        month: "Oct2023",
        settlement_amount: 1344302.0,
        "Average_Waiver_%": 0.4433923936862112,
      },
      {
        segment: "MP",
        month: "Oct2023",
        recovery: 8056.0,
        "Recovery_%": 0.005992701044854504,
      },
    ],
    [
      {
        segment: "MP",
        month: "Nov2023",
        settlement_amount: 2205849.0,
        "Average_Waiver_%": 0.5784257681869911,
      },
      {
        segment: "MP",
        month: "Nov2023",
        recovery: 210001.0,
        "Recovery_%": 0.09520189278595226,
      },
    ],
    [
      {
        segment: "MP",
        month: "Dec2023",
        settlement_amount: 2228670.0,
        "Average_Waiver_%": 0.41626199863065944,
      },
      {
        segment: "MP",
        month: "Dec2023",
        recovery: 75522.0,
        "Recovery_%": 0.03388657809366124,
      },
    ],
    [
      {
        segment: "MP",
        month: "Jan2024",
        settlement_amount: 1647150.0,
        "Average_Waiver_%": 0.5791856857071689,
      },
      {
        segment: "MP",
        month: "Jan2024",
        recovery: 110048.0,
        "Recovery_%": 0.0668111586680023,
      },
    ],
    [
      {
        segment: "MP",
        month: "Feb2024",
        settlement_amount: 980400.0,
        "Average_Waiver_%": 0.36767831031069814,
      },
      {
        segment: "MP",
        month: "Feb2024",
        recovery: 20100.0,
        "Recovery_%": 0.020501835985312116,
      },
    ],
    [
      {
        segment: "MP",
        month: "Mar2024",
        settlement_amount: 1811000.0,
        "Average_Waiver_%": 0.40712974420579967,
      },
      {
        segment: "MP",
        month: "Mar2024",
        recovery: 110085.0,
        "Recovery_%": 0.06078685808945334,
      },
    ],
    [
      {
        segment: "MP",
        month: "Apr2024",
        settlement_amount: 1051000.0,
        "Average_Waiver_%": 0.37909836169054006,
      },
      {
        segment: "MP",
        month: "Apr2024",
        recovery: 90000.0,
        "Recovery_%": 0.08563273073263558,
      },
    ],
    [
      {
        segment: "MP",
        month: "May2024",
        settlement_amount: 1201660.0,
        "Average_Waiver_%": 0.40818445603047065,
      },
      {
        segment: "MP",
        month: "May2024",
        recovery: 50350.0,
        "Recovery_%": 0.04190037115323802,
      },
    ],
    [
      {
        segment: "MP",
        month: "Jun2024",
        settlement_amount: 1022100.0,
        "Average_Waiver_%": 0.5086912419498342,
      },
      {
        segment: "MP",
        month: "Jun2024",
        recovery: 85000.0,
        "Recovery_%": 0.08316211720966638,
      },
    ],
    //  [{
    //      "segment": "MH",
    //      "month": "Feb2023",
    //      "settlement_amount": 52180432.46,
    //      "Average_Waiver_%": 0.38297377534026056
    //  },
    //  {
    //      "segment": "MH",
    //      "month": "Feb2023",
    //      "recovery": 6239959.0,
    //      "Recovery_%": 0.11958427145622778
    //  }],
    // [ {
    //      "segment": "MH",
    //      "month": "Mar2023",
    //      "settlement_amount": 5435980.0,
    //      "Average_Waiver_%": 0.4731095825973523
    //  },
    //  {
    //      "segment": "MH",
    //      "month": "Mar2023",
    //      "recovery": 589952.0,
    //      "Recovery_%": 0.10852725727467724
    //  }],
    [
      {
        segment: "MH",
        month: "Apr2023",
        settlement_amount: 2990000.0,
        "Average_Waiver_%": 0.42422976528126166,
      },
      {
        segment: "MH",
        month: "Apr2023",
        recovery: 45000.0,
        "Recovery_%": 0.015050167224080268,
      },
    ],
    [
      {
        segment: "MH",
        month: "May2023",
        settlement_amount: 2476216.0,
        "Average_Waiver_%": 0.4743719072143357,
      },
      {
        segment: "MH",
        month: "May2023",
        recovery: 24008.0,
        "Recovery_%": 0.009695438523941368,
      },
    ],
    [
      {
        segment: "MH",
        month: "Jun2023",
        settlement_amount: 4487000.0,
        "Average_Waiver_%": 0.5192514830751617,
      },
      {
        segment: "MH",
        month: "Jun2023",
        recovery: 65000.0,
        "Recovery_%": 0.014486293737463784,
      },
    ],
    [
      {
        segment: "MH",
        month: "Jul2023",
        settlement_amount: 3564233.0,
        "Average_Waiver_%": 0.5014452743835739,
      },
      {
        segment: "MH",
        month: "Jul2023",
        recovery: 62186.0,
        "Recovery_%": 0.017447231985114327,
      },
    ],
    [
      {
        segment: "MH",
        month: "Aug2023",
        settlement_amount: 5810530.0,
        "Average_Waiver_%": 0.4015364276541155,
      },
      {
        segment: "MH",
        month: "Aug2023",
        recovery: 151646.0,
        "Recovery_%": 0.026098479828862427,
      },
    ],
    [
      {
        segment: "MH",
        month: "Sep2023",
        settlement_amount: 4275987.0,
        "Average_Waiver_%": 0.4271848518592158,
      },
      {
        segment: "MH",
        month: "Sep2023",
        recovery: 291500.0,
        "Recovery_%": 0.06817139528253945,
      },
    ],
    [
      {
        segment: "MH",
        month: "Oct2023",
        settlement_amount: 4986000.0,
        "Average_Waiver_%": 0.4567547706922768,
      },
      {
        segment: "MH",
        month: "Oct2023",
        recovery: 172001.0,
        "Recovery_%": 0.03449679101484156,
      },
    ],
    [
      {
        segment: "MH",
        month: "Nov2023",
        settlement_amount: 4688500.0,
        "Average_Waiver_%": 0.41446146895770225,
      },
      {
        segment: "MH",
        month: "Nov2023",
        recovery: 269700.0,
        "Recovery_%": 0.05752372827130212,
      },
    ],
    [
      {
        segment: "MH",
        month: "Dec2023",
        settlement_amount: 3589044.0,
        "Average_Waiver_%": 0.4443314768795916,
      },
      {
        segment: "MH",
        month: "Dec2023",
        recovery: 72500.0,
        "Recovery_%": 0.02020036533405553,
      },
    ],
    [
      {
        segment: "MH",
        month: "Jan2024",
        settlement_amount: 4950351.0,
        "Average_Waiver_%": 0.41400857543654257,
      },
      {
        segment: "MH",
        month: "Jan2024",
        recovery: 660919.0,
        "Recovery_%": 0.13350952286009618,
      },
    ],
    [
      {
        segment: "MH",
        month: "Feb2024",
        settlement_amount: 1578000.0,
        "Average_Waiver_%": 0.48117206342808916,
      },
      {
        segment: "MH",
        month: "Feb2024",
        recovery: 169250.0,
        "Recovery_%": 0.10725602027883396,
      },
    ],
    [
      {
        segment: "MH",
        month: "Mar2024",
        settlement_amount: 2848091.0,
        "Average_Waiver_%": 0.42287939688705584,
      },
      {
        segment: "MH",
        month: "Mar2024",
        recovery: 212261.0,
        "Recovery_%": 0.0745274641856598,
      },
    ],
    [
      {
        segment: "MH",
        month: "Apr2024",
        settlement_amount: 2281000.0,
        "Average_Waiver_%": 0.398308845252559,
      },
      {
        segment: "MH",
        month: "Apr2024",
        recovery: 114235.0,
        "Recovery_%": 0.050081104778605876,
      },
    ],
    [
      {
        segment: "MH",
        month: "May2024",
        settlement_amount: 3914686.0,
        "Average_Waiver_%": 0.4158738336240036,
      },
      {
        segment: "MH",
        month: "May2024",
        recovery: 171551.0,
        "Recovery_%": 0.04382241640836583,
      },
    ],
    [
      {
        segment: "MH",
        month: "Jun2024",
        settlement_amount: 3049420.0,
        "Average_Waiver_%": 0.47359728893530695,
      },
      {
        segment: "MH",
        month: "Jun2024",
        recovery: 40826.0,
        "Recovery_%": 0.013388119708010049,
      },
    ],
    //  [{
    //      "segment": "RJ",
    //      "month": "Feb2023",
    //      "settlement_amount": 20310730.0,
    //      "Average_Waiver_%": 0.35100568973166385
    //  },
    //  {
    //      "segment": "RJ",
    //      "month": "Feb2023",
    //      "recovery": 1590973.0,
    //      "Recovery_%": 0.07833165031488282
    //  }],
    // [ {
    //      "segment": "RJ",
    //      "month": "Mar2023",
    //      "settlement_amount": 382876.0,
    //      "Average_Waiver_%": 0.348031753429798
    //  },
    //  {
    //      "segment": "RJ",
    //      "month": "Mar2023",
    //      "recovery": 185000.0,
    //      "Recovery_%": 0.48318515655199074
    //  }],
    [
      {
        segment: "RJ",
        month: "Apr2023",
        settlement_amount: 720500.0,
        "Average_Waiver_%": 0.4108982980461327,
      },
      {
        segment: "RJ",
        month: "Apr2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "RJ",
        month: "May2023",
        settlement_amount: 1075000.0,
        "Average_Waiver_%": 0.29775214909468833,
      },
      {
        segment: "RJ",
        month: "May2023",
        recovery: 91933.0,
        "Recovery_%": 0.08551906976744186,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Jun2023",
        settlement_amount: 432500.0,
        "Average_Waiver_%": 0.44118771404936,
      },
      {
        segment: "RJ",
        month: "Jun2023",
        recovery: 35477.0,
        "Recovery_%": 0.08202774566473989,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Jul2023",
        settlement_amount: 412000.0,
        "Average_Waiver_%": 0.34073660522019567,
      },
      {
        segment: "RJ",
        month: "Jul2023",
        recovery: 30000.0,
        "Recovery_%": 0.07281553398058252,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Aug2023",
        settlement_amount: 180000.0,
        "Average_Waiver_%": 0.3115176054347777,
      },
      {
        segment: "RJ",
        month: "Aug2023",
        recovery: 26000.0,
        "Recovery_%": 0.14444444444444443,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Sep2023",
        settlement_amount: 628500.0,
        "Average_Waiver_%": 0.31047653341297077,
      },
      {
        segment: "RJ",
        month: "Sep2023",
        recovery: 115725.0,
        "Recovery_%": 0.18412887828162292,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Oct2023",
        settlement_amount: 210000.0,
        "Average_Waiver_%": 0.3473135413348927,
      },
      {
        segment: "RJ",
        month: "Oct2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Nov2023",
        settlement_amount: 506000.0,
        "Average_Waiver_%": 0.4163527050480503,
      },
      {
        segment: "RJ",
        month: "Nov2023",
        recovery: 36250.0,
        "Recovery_%": 0.0716403162055336,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Dec2023",
        settlement_amount: 182000.0,
        "Average_Waiver_%": 0.6207498460318686,
      },
      {
        segment: "RJ",
        month: "Dec2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Jan2024",
        settlement_amount: 915500.0,
        "Average_Waiver_%": 0.3884840215397437,
      },
      {
        segment: "RJ",
        month: "Jan2024",
        recovery: 10000.0,
        "Recovery_%": 0.010922992900054615,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Feb2024",
        settlement_amount: 421000.0,
        "Average_Waiver_%": 0.37842017003595746,
      },
      {
        segment: "RJ",
        month: "Feb2024",
        recovery: 5000.0,
        "Recovery_%": 0.011876484560570071,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Mar2024",
        settlement_amount: 212500.0,
        "Average_Waiver_%": 0.25026104582477604,
      },
      {
        segment: "RJ",
        month: "Mar2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Apr2024",
        settlement_amount: 410000.0,
        "Average_Waiver_%": 0.32013337287266785,
      },
      {
        segment: "RJ",
        month: "Apr2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "RJ",
        month: "May2024",
        settlement_amount: 499000.0,
        "Average_Waiver_%": 0.2941084646201987,
      },
      {
        segment: "RJ",
        month: "May2024",
        recovery: 19739.0,
        "Recovery_%": 0.03955711422845691,
      },
    ],
    [
      {
        segment: "RJ",
        month: "Jun2024",
        settlement_amount: 1425500.0,
        "Average_Waiver_%": 0.555500022872728,
      },
      {
        segment: "RJ",
        month: "Jun2024",
        recovery: 62426.0,
        "Recovery_%": 0.04379235356015433,
      },
    ],
    //  [{
    //      "segment": "TN",
    //      "month": "Feb2023",
    //      "settlement_amount": 59243155.46,
    //      "Average_Waiver_%": 0.3876057341184676
    //  },
    //  {
    //      "segment": "TN",
    //      "month": "Feb2023",
    //      "recovery": 4063295.7,
    //      "Recovery_%": 0.06858675349835933
    //  }],
    //  [{
    //      "segment": "TN",
    //      "month": "Mar2023",
    //      "settlement_amount": 1419304.0,
    //      "Average_Waiver_%": 0.5646878843625598
    //  },
    //  {
    //      "segment": "TN",
    //      "month": "Mar2023",
    //      "recovery": 364666.0,
    //      "Recovery_%": 0.25693297559930783
    //  }],
    [
      {
        segment: "TN",
        month: "Apr2023",
        settlement_amount: 1798500.0,
        "Average_Waiver_%": 0.4169064129666392,
      },
      {
        segment: "TN",
        month: "Apr2023",
        recovery: 73000.0,
        "Recovery_%": 0.040589380038921326,
      },
    ],
    [
      {
        segment: "TN",
        month: "May2023",
        settlement_amount: 1329200.0,
        "Average_Waiver_%": 0.4274707016221796,
      },
      {
        segment: "TN",
        month: "May2023",
        recovery: 33789.0,
        "Recovery_%": 0.025420553716521216,
      },
    ],
    [
      {
        segment: "TN",
        month: "Jun2023",
        settlement_amount: 1111000.0,
        "Average_Waiver_%": 0.4216577044921928,
      },
      {
        segment: "TN",
        month: "Jun2023",
        recovery: 19715.0,
        "Recovery_%": 0.017745274527452747,
      },
    ],
    [
      {
        segment: "TN",
        month: "Jul2023",
        settlement_amount: 1469679.0,
        "Average_Waiver_%": 0.5222781149485702,
      },
      {
        segment: "TN",
        month: "Jul2023",
        recovery: 40978.0,
        "Recovery_%": 0.02788227905549443,
      },
    ],
    [
      {
        segment: "TN",
        month: "Aug2023",
        settlement_amount: 1683055.0,
        "Average_Waiver_%": 0.48282167025048917,
      },
      {
        segment: "TN",
        month: "Aug2023",
        recovery: 117904.0,
        "Recovery_%": 0.07005356331195356,
      },
    ],
    [
      {
        segment: "TN",
        month: "Sep2023",
        settlement_amount: 980500.0,
        "Average_Waiver_%": 0.4139505061101164,
      },
      {
        segment: "TN",
        month: "Sep2023",
        recovery: 74718.0,
        "Recovery_%": 0.07620397756246813,
      },
    ],
    [
      {
        segment: "TN",
        month: "Oct2023",
        settlement_amount: 2337500.0,
        "Average_Waiver_%": 0.5108680964211331,
      },
      {
        segment: "TN",
        month: "Oct2023",
        recovery: 15000.0,
        "Recovery_%": 0.006417112299465241,
      },
    ],
    [
      {
        segment: "TN",
        month: "Nov2023",
        settlement_amount: 1120000.0,
        "Average_Waiver_%": 0.4629753679163974,
      },
      {
        segment: "TN",
        month: "Nov2023",
        recovery: 32588.0,
        "Recovery_%": 0.02909642857142857,
      },
    ],
    [
      {
        segment: "TN",
        month: "Dec2023",
        settlement_amount: 2069000.0,
        "Average_Waiver_%": 0.40253309230583034,
      },
      {
        segment: "TN",
        month: "Dec2023",
        recovery: 73000.0,
        "Recovery_%": 0.03528274528757854,
      },
    ],
    [
      {
        segment: "TN",
        month: "Jan2024",
        settlement_amount: 1126800.0,
        "Average_Waiver_%": 0.3717136017162058,
      },
      {
        segment: "TN",
        month: "Jan2024",
        recovery: 60000.0,
        "Recovery_%": 0.05324813631522897,
      },
    ],
    [
      {
        segment: "TN",
        month: "Feb2024",
        settlement_amount: 1427500.0,
        "Average_Waiver_%": 0.4514645985972117,
      },
      {
        segment: "TN",
        month: "Feb2024",
        recovery: 53500.0,
        "Recovery_%": 0.037478108581436076,
      },
    ],
    [
      {
        segment: "TN",
        month: "Mar2024",
        settlement_amount: 2757200.0,
        "Average_Waiver_%": 0.4247898409189315,
      },
      {
        segment: "TN",
        month: "Mar2024",
        recovery: 58750.0,
        "Recovery_%": 0.02130784854199913,
      },
    ],
    [
      {
        segment: "TN",
        month: "Apr2024",
        settlement_amount: 1747900.0,
        "Average_Waiver_%": 0.6015871051113613,
      },
      {
        segment: "TN",
        month: "Apr2024",
        recovery: 11200.0,
        "Recovery_%": 0.006407689227072487,
      },
    ],
    [
      {
        segment: "TN",
        month: "May2024",
        settlement_amount: 580000.0,
        "Average_Waiver_%": 0.6750493597837691,
      },
      {
        segment: "TN",
        month: "May2024",
        recovery: 12226.0,
        "Recovery_%": 0.021079310344827587,
      },
    ],
    [
      {
        segment: "TN",
        month: "Jun2024",
        settlement_amount: 1329664.0,
        "Average_Waiver_%": 0.4796188829374868,
      },
      {
        segment: "TN",
        month: "Jun2024",
        recovery: 24001.0,
        "Recovery_%": 0.01805042476896419,
      },
    ],
    // [ {
    //      "segment": "TG",
    //      "month": "Feb2023",
    //      "settlement_amount": 25878793.0,
    //      "Average_Waiver_%": 0.3882400149184733
    //  },
    //  {
    //      "segment": "TG",
    //      "month": "Feb2023",
    //      "recovery": 2231203.0,
    //      "Recovery_%": 0.08621742907406849
    //  }],
    // [ {
    //      "segment": "TG",
    //      "month": "Mar2023",
    //      "settlement_amount": 653900.0,
    //      "Average_Waiver_%": 0.4212633103647872
    //  },
    //  {
    //      "segment": "TG",
    //      "month": "Mar2023",
    //      "recovery": 118400.0,
    //      "Recovery_%": 0.18106744150481724
    //  }],
    [
      {
        segment: "TG",
        month: "Apr2023",
        settlement_amount: 464850.0,
        "Average_Waiver_%": 0.4446995770948636,
      },
      {
        segment: "TG",
        month: "Apr2023",
        recovery: 15250.0,
        "Recovery_%": 0.032806281596213835,
      },
    ],
    [
      {
        segment: "TG",
        month: "May2023",
        settlement_amount: 1472858.0,
        "Average_Waiver_%": 0.36803340732176026,
      },
      {
        segment: "TG",
        month: "May2023",
        recovery: 9665.0,
        "Recovery_%": 0.006562071835845683,
      },
    ],
    [
      {
        segment: "TG",
        month: "Jun2023",
        settlement_amount: 1728812.0,
        "Average_Waiver_%": 0.44547377053803294,
      },
      {
        segment: "TG",
        month: "Jun2023",
        recovery: 165000.0,
        "Recovery_%": 0.09544126255486426,
      },
    ],
    [
      {
        segment: "TG",
        month: "Jul2023",
        settlement_amount: 1807000.0,
        "Average_Waiver_%": 0.5420978457031612,
      },
      {
        segment: "TG",
        month: "Jul2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "TG",
        month: "Aug2023",
        settlement_amount: 440000.0,
        "Average_Waiver_%": 0.5782329691959396,
      },
      {
        segment: "TG",
        month: "Aug2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "TG",
        month: "Sep2023",
        settlement_amount: 1592000.0,
        "Average_Waiver_%": 0.41317972522312885,
      },
      {
        segment: "TG",
        month: "Sep2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "TG",
        month: "Oct2023",
        settlement_amount: 1505000.0,
        "Average_Waiver_%": 0.4487428329396239,
      },
      {
        segment: "TG",
        month: "Oct2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: "TG",
        month: "Nov2023",
        settlement_amount: 1101000.0,
        "Average_Waiver_%": 0.4425245052767952,
      },
      {
        segment: "TG",
        month: "Nov2023",
        recovery: 60000.0,
        "Recovery_%": 0.05449591280653951,
      },
    ],
    [
      {
        segment: "TG",
        month: "Dec2023",
        settlement_amount: 597000.0,
        "Average_Waiver_%": 0.3621154237150786,
      },
      {
        segment: "TG",
        month: "Dec2023",
        recovery: 31621.0,
        "Recovery_%": 0.052966499162479065,
      },
    ],
    [
      {
        segment: "TG",
        month: "Jan2024",
        settlement_amount: 690000.0,
        "Average_Waiver_%": 0.4892146670981398,
      },
      {
        segment: "TG",
        month: "Jan2024",
        recovery: 40000.0,
        "Recovery_%": 0.057971014492753624,
      },
    ],
    [
      {
        segment: "TG",
        month: "Feb2024",
        settlement_amount: 765500.0,
        "Average_Waiver_%": 0.3552680037630098,
      },
      {
        segment: "TG",
        month: "Feb2024",
        recovery: 38868.0,
        "Recovery_%": 0.05077465708687132,
      },
    ],
    [
      {
        segment: "TG",
        month: "Mar2024",
        settlement_amount: 1162650.0,
        "Average_Waiver_%": 0.4712933102398463,
      },
      {
        segment: "TG",
        month: "Mar2024",
        recovery: 185000.0,
        "Recovery_%": 0.159119253429665,
      },
    ],
    [
      {
        segment: "TG",
        month: "Apr2024",
        settlement_amount: 1446000.0,
        "Average_Waiver_%": 0.4387205736935953,
      },
      {
        segment: "TG",
        month: "Apr2024",
        recovery: 62948.0,
        "Recovery_%": 0.04353250345781466,
      },
    ],
    [
      {
        segment: "TG",
        month: "May2024",
        settlement_amount: 1770000.0,
        "Average_Waiver_%": 0.4072319189114282,
      },
      {
        segment: "TG",
        month: "May2024",
        recovery: 121296.0,
        "Recovery_%": 0.06852881355932203,
      },
    ],
    [
      {
        segment: "TG",
        month: "Jun2024",
        settlement_amount: 1455000.0,
        "Average_Waiver_%": 0.44413606512198317,
      },
      {
        segment: "TG",
        month: "Jun2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    //  [{
    //      "segment": "UP",
    //      "month": "Feb2023",
    //      "settlement_amount": 37776049.0,
    //      "Average_Waiver_%": 0.3270237966497088
    //  },
    //  {
    //      "segment": "UP",
    //      "month": "Feb2023",
    //      "recovery": 1653123.0,
    //      "Recovery_%": 0.04376114082232369
    //  }],
    // [ {
    //      "segment": "UP",
    //      "month": "Mar2023",
    //      "settlement_amount": 1690300.0,
    //      "Average_Waiver_%": 0.40617070158639274
    //  },
    //  {
    //      "segment": "UP",
    //      "month": "Mar2023",
    //      "recovery": 139000.0,
    //      "Recovery_%": 0.08223392297225345
    //  }],
    [
      {
        segment: "UP",
        month: "Apr2023",
        settlement_amount: 801410.0,
        "Average_Waiver_%": 0.39863672319131227,
      },
      {
        segment: "UP",
        month: "Apr2023",
        recovery: 23000.0,
        "Recovery_%": 0.0286994172770492,
      },
    ],
    [
      {
        segment: "UP",
        month: "May2023",
        settlement_amount: 1349820.0,
        "Average_Waiver_%": 0.36434096198775695,
      },
      {
        segment: "UP",
        month: "May2023",
        recovery: 255094.0,
        "Recovery_%": 0.18898371634736483,
      },
    ],
    [
      {
        segment: "UP",
        month: "Jun2023",
        settlement_amount: 1552000.0,
        "Average_Waiver_%": 0.4424800156409843,
      },
      {
        segment: "UP",
        month: "Jun2023",
        recovery: 9585.0,
        "Recovery_%": 0.00617590206185567,
      },
    ],
    [
      {
        segment: "UP",
        month: "Jul2023",
        settlement_amount: 939730.0,
        "Average_Waiver_%": 0.40894578578132235,
      },
      {
        segment: "UP",
        month: "Jul2023",
        recovery: 5000.0,
        "Recovery_%": 0.005320677215796026,
      },
    ],
    [
      {
        segment: "UP",
        month: "Aug2023",
        settlement_amount: 1046000.0,
        "Average_Waiver_%": 0.3352634443413675,
      },
      {
        segment: "UP",
        month: "Aug2023",
        recovery: 57144.0,
        "Recovery_%": 0.05463097514340344,
      },
    ],
    [
      {
        segment: "UP",
        month: "Sep2023",
        settlement_amount: 2813460.0,
        "Average_Waiver_%": 0.4320078870114915,
      },
      {
        segment: "UP",
        month: "Sep2023",
        recovery: 158763.0,
        "Recovery_%": 0.05642980529312661,
      },
    ],
    [
      {
        segment: "UP",
        month: "Oct2023",
        settlement_amount: 1575300.0,
        "Average_Waiver_%": 0.3919662099996156,
      },
      {
        segment: "UP",
        month: "Oct2023",
        recovery: 53000.0,
        "Recovery_%": 0.03364438519647051,
      },
    ],
    [
      {
        segment: "UP",
        month: "Nov2023",
        settlement_amount: 2524144.0,
        "Average_Waiver_%": 0.45118140446456606,
      },
      {
        segment: "UP",
        month: "Nov2023",
        recovery: 67500.0,
        "Recovery_%": 0.026741738981611193,
      },
    ],
    [
      {
        segment: "UP",
        month: "Dec2023",
        settlement_amount: 2409500.0,
        "Average_Waiver_%": 0.375089857721871,
      },
      {
        segment: "UP",
        month: "Dec2023",
        recovery: 144778.0,
        "Recovery_%": 0.06008632496368541,
      },
    ],
    [
      {
        segment: "UP",
        month: "Jan2024",
        settlement_amount: 1122000.0,
        "Average_Waiver_%": 0.3680687753499578,
      },
      {
        segment: "UP",
        month: "Jan2024",
        recovery: 40000.0,
        "Recovery_%": 0.035650623885918005,
      },
    ],
    [
      {
        segment: "UP",
        month: "Feb2024",
        settlement_amount: 1936000.0,
        "Average_Waiver_%": 0.4079244654021351,
      },
      {
        segment: "UP",
        month: "Feb2024",
        recovery: 75000.0,
        "Recovery_%": 0.038739669421487606,
      },
    ],
    [
      {
        segment: "UP",
        month: "Mar2024",
        settlement_amount: 3310400.0,
        "Average_Waiver_%": 0.34585277582034424,
      },
      {
        segment: "UP",
        month: "Mar2024",
        recovery: 163033.0,
        "Recovery_%": 0.04924873127114548,
      },
    ],
    [
      {
        segment: "UP",
        month: "Apr2024",
        settlement_amount: 1618500.0,
        "Average_Waiver_%": 0.382885596277261,
      },
      {
        segment: "UP",
        month: "Apr2024",
        recovery: 2500.0,
        "Recovery_%": 0.0015446400988569664,
      },
    ],
    [
      {
        segment: "UP",
        month: "May2024",
        settlement_amount: 3998390.0,
        "Average_Waiver_%": 0.368130056814798,
      },
      {
        segment: "UP",
        month: "May2024",
        recovery: 125500.0,
        "Recovery_%": 0.031387633522492804,
      },
    ],
    [
      {
        segment: "UP",
        month: "Jun2024",
        settlement_amount: 855100.0,
        "Average_Waiver_%": 0.39422823856550127,
      },
      {
        segment: "UP",
        month: "Jun2024",
        recovery: 13000.0,
        "Recovery_%": 0.01520290024558531,
      },
    ],
    //  [{
    //      "segment": "OTHERS",
    //      "month": "Feb2023",
    //      "settlement_amount": 111127864.0,
    //      "Average_Waiver_%": 0.35928484252288173
    //  },
    //  {
    //      "segment": "OTHERS",
    //      "month": "Feb2023",
    //      "recovery": 7897811.0,
    //      "Recovery_%": 0.0710695834124914
    //  }],
    // [ {
    //      "segment": "OTHERS",
    //      "month": "Mar2023",
    //      "settlement_amount": 2801817.0,
    //      "Average_Waiver_%": 0.41549302117877185
    //  },
    //  {
    //      "segment": "OTHERS",
    //      "month": "Mar2023",
    //      "recovery": 665464.0,
    //      "Recovery_%": 0.23751158623136343
    //  }],
    [
      {
        segment: "OTHERS",
        month: "Apr2023",
        settlement_amount: 2408640.0,
        "Average_Waiver_%": 0.3638864919250085,
      },
      {
        segment: "OTHERS",
        month: "Apr2023",
        recovery: 15000.0,
        "Recovery_%": 0.006227580709445994,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "May2023",
        settlement_amount: 4566440.0,
        "Average_Waiver_%": 0.3794096820587677,
      },
      {
        segment: "OTHERS",
        month: "May2023",
        recovery: 371345.0,
        "Recovery_%": 0.08132045970164943,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Jun2023",
        settlement_amount: 3350398.09,
        "Average_Waiver_%": 0.3801741386229103,
      },
      {
        segment: "OTHERS",
        month: "Jun2023",
        recovery: 291485.12,
        "Recovery_%": 0.08700014510812952,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Jul2023",
        settlement_amount: 3577500.0,
        "Average_Waiver_%": 0.3765916309745522,
      },
      {
        segment: "OTHERS",
        month: "Jul2023",
        recovery: 210495.0,
        "Recovery_%": 0.05883857442348008,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Aug2023",
        settlement_amount: 6070594.0,
        "Average_Waiver_%": 0.36716751231334693,
      },
      {
        segment: "OTHERS",
        month: "Aug2023",
        recovery: 573001.0,
        "Recovery_%": 0.09438960997885874,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Sep2023",
        settlement_amount: 4740625.0,
        "Average_Waiver_%": 0.3997965944561806,
      },
      {
        segment: "OTHERS",
        month: "Sep2023",
        recovery: 286934.0,
        "Recovery_%": 0.06052661832564272,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Oct2023",
        settlement_amount: 4251500.0,
        "Average_Waiver_%": 0.4462166759516784,
      },
      {
        segment: "OTHERS",
        month: "Oct2023",
        recovery: 600000.0,
        "Recovery_%": 0.1411266611784076,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Nov2023",
        settlement_amount: 5546622.0,
        "Average_Waiver_%": 0.3760183964613264,
      },
      {
        segment: "OTHERS",
        month: "Nov2023",
        recovery: 110007.0,
        "Recovery_%": 0.0198331525025502,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Dec2023",
        settlement_amount: 4196650.0,
        "Average_Waiver_%": 0.4197361717244861,
      },
      {
        segment: "OTHERS",
        month: "Dec2023",
        recovery: 264688.0,
        "Recovery_%": 0.06307125921866251,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Jan2024",
        settlement_amount: 6067760.0,
        "Average_Waiver_%": 0.41609314533098246,
      },
      {
        segment: "OTHERS",
        month: "Jan2024",
        recovery: 236525.0,
        "Recovery_%": 0.03898061228525848,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Feb2024",
        settlement_amount: 6578770.0,
        "Average_Waiver_%": 0.41131522772730733,
      },
      {
        segment: "OTHERS",
        month: "Feb2024",
        recovery: 215915.0,
        "Recovery_%": 0.03281996482625171,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Mar2024",
        settlement_amount: 4829200.0,
        "Average_Waiver_%": 0.42278942733039,
      },
      {
        segment: "OTHERS",
        month: "Mar2024",
        recovery: 337549.99999999994,
        "Recovery_%": 0.06989770562411993,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Apr2024",
        settlement_amount: 4869015.0,
        "Average_Waiver_%": 0.38788152147707905,
      },
      {
        segment: "OTHERS",
        month: "Apr2024",
        recovery: 146732.0,
        "Recovery_%": 0.03013586936988282,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "May2024",
        settlement_amount: 8402714.0,
        "Average_Waiver_%": 0.4138586361238008,
      },
      {
        segment: "OTHERS",
        month: "May2024",
        recovery: 922274.0,
        "Recovery_%": 0.1097590611795189,
      },
    ],
    [
      {
        segment: "OTHERS",
        month: "Jun2024",
        settlement_amount: 3829500.0,
        "Average_Waiver_%": 0.4277055683132574,
      },
      {
        segment: "OTHERS",
        month: "Jun2024",
        recovery: 33000.0,
        "Recovery_%": 0.008617312965139052,
      },
    ],
  ],

  pos: [
    // [{
    //     "segment": "<1Lakh",
    //     "month": "Feb2023",
    //     "settlement_amount": 18777111.82,
    //     "Average_Waiver_%": 0.49207040845612277
    // },
    // {
    //     "segment": "<1Lakh",
    //     "month": "Feb2023",
    //     "recovery": 2185529.7,
    //     "Recovery_%": 0.11639328353320741
    // }],
    //    [ {
    //         "segment": "<1Lakh",
    //         "month": "Mar2023",
    //         "settlement_amount": 886634.0,
    //         "Average_Waiver_%": 0.5182815126837843
    //     },
    //     {
    //         "segment": "<1Lakh",
    //         "month": "Mar2023",
    //         "recovery": 430950.0,
    //         "Recovery_%": 0.48605174175589927
    //     }],
    [
      {
        segment: "<1Lakh",
        month: "Apr2023",
        settlement_amount: 681050.0,
        "Average_Waiver_%": 0.46312690734690776,
      },
      {
        segment: "<1Lakh",
        month: "Apr2023",
        recovery: 13000.0,
        "Recovery_%": 0.019088172674546655,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "May2023",
        settlement_amount: 674964.0,
        "Average_Waiver_%": 0.5753218021045712,
      },
      {
        segment: "<1Lakh",
        month: "May2023",
        recovery: 153834.0,
        "Recovery_%": 0.2279143776556972,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Jun2023",
        settlement_amount: 480742.08999999997,
        "Average_Waiver_%": 0.5689144480482268,
      },
      {
        segment: "<1Lakh",
        month: "Jun2023",
        recovery: 64843.119999999995,
        "Recovery_%": 0.13488130402728,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Jul2023",
        settlement_amount: 863330.0,
        "Average_Waiver_%": 0.5442667574734077,
      },
      {
        segment: "<1Lakh",
        month: "Jul2023",
        recovery: 127745.0,
        "Recovery_%": 0.1479677527712462,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Aug2023",
        settlement_amount: 429143.0,
        "Average_Waiver_%": 0.47534292400446926,
      },
      {
        segment: "<1Lakh",
        month: "Aug2023",
        recovery: 44900.0,
        "Recovery_%": 0.10462712895235388,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Sep2023",
        settlement_amount: 654300.0,
        "Average_Waiver_%": 0.4895673812095763,
      },
      {
        segment: "<1Lakh",
        month: "sep2023",
        recovery: 96600.0,
        "Recovery_%": 0.14763869784502523,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Oct2023",
        settlement_amount: 575000.0,
        "Average_Waiver_%": 0.6498117258107783,
      },
      {
        segment: "<1Lakh",
        month: "Oct2023",
        recovery: 10000.0,
        "Recovery_%": 0.017391304347826087,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Nov2023",
        settlement_amount: 233684.0,
        "Average_Waiver_%": 0.47060463988335455,
      },
      {
        segment: "<1Lakh",
        month: "Nov2023",
        recovery: 40000.0,
        "Recovery_%": 0.17117132537957241,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Dec2023",
        settlement_amount: 798000.0,
        "Average_Waiver_%": 0.5982023479712023,
      },
      {
        segment: "<1Lakh",
        month: "Dec2023",
        recovery: 58325.0,
        "Recovery_%": 0.07308897243107769,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Jan2024",
        settlement_amount: 405600.0,
        "Average_Waiver_%": 0.42852810032341515,
      },
      {
        segment: "<1Lakh",
        month: "Jan2024",
        recovery: 6010.0,
        "Recovery_%": 0.014817554240631164,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Feb2024",
        settlement_amount: 311800.0,
        "Average_Waiver_%": 0.535215497533786,
      },
      {
        segment: "<1Lakh",
        month: "Feb2024",
        recovery: 47000.0,
        "Recovery_%": 0.1507376523412444,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Mar2024",
        settlement_amount: 634300.0,
        "Average_Waiver_%": 0.50538349751498,
      },
      {
        segment: "<1Lakh",
        month: "Mar2024",
        recovery: 60000.0,
        "Recovery_%": 0.09459246413369068,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Apr2024",
        settlement_amount: 823750.0,
        "Average_Waiver_%": 1.0606307252572942,
      },
      {
        segment: "<1Lakh",
        month: "Apr2024",
        recovery: 48000.0,
        "Recovery_%": 0.0582701062215478,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "May2024",
        settlement_amount: 322200.0,
        "Average_Waiver_%": 0.4658749154770312,
      },
      {
        segment: "<1Lakh",
        month: "May2024",
        recovery: 25500.0,
        "Recovery_%": 0.07914338919925512,
      },
    ],
    [
      {
        segment: "<1Lakh",
        month: "Jun2024",
        settlement_amount: 971000.0,
        "Average_Waiver_%": 2.124368448888548,
      },
      {
        segment: "<1Lakh",
        month: "Jun2024",
        recovery: 34432.0,
        "Recovery_%": 0.03546035015447992,
      },
    ],
    // [{
    //     "segment": ">=1 - 5Lakh",
    //     "month": "Feb2023",
    //     "settlement_amount": 275500268.46,
    //     "Average_Waiver_%": 0.38224570230754173
    // },
    // {
    //     "segment": ">=1 - 5Lakh",
    //     "month": "Feb2023",
    //     "recovery": 20451855.0,
    //     "Recovery_%": 0.0742353360100969
    // }],
    // [{
    //     "segment": ">=1 - 5Lakh",
    //     "month": "Mar2023",
    //     "settlement_amount": 12030393.0,
    //     "Average_Waiver_%": 0.43760773671926306
    // },
    // {
    //     "segment": ">=1 - 5Lakh",
    //     "month": "Mar2023",
    //     "recovery": 1505451.0,
    //     "Recovery_%": 0.12513730848194235
    // }],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Apr2023",
        settlement_amount: 8608050.0,
        "Average_Waiver_%": 0.41175648396889497,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Apr2023",
        recovery: 241244.0,
        "Recovery_%": 0.02802539483390547,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "May2023",
        settlement_amount: 11425780.0,
        "Average_Waiver_%": 0.3962412193478055,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "May2023",
        recovery: 1096566.0,
        "Recovery_%": 0.09597296639704248,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Jun2023",
        settlement_amount: 9631568.0,
        "Average_Waiver_%": 0.44272041684114466,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Jun2023",
        recovery: 428217.0,
        "Recovery_%": 0.044459739058064066,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Jul2023",
        settlement_amount: 10893342.0,
        "Average_Waiver_%": 0.4721598029048663,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Jul2023",
        recovery: 580484.0,
        "Recovery_%": 0.05328796250039703,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Aug2023",
        settlement_amount: 11548672.0,
        "Average_Waiver_%": 0.45078644937121065,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Aug2023",
        recovery: 804075.0,
        "Recovery_%": 0.06962488847202518,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Sep2023",
        settlement_amount: 13759477.0,
        "Average_Waiver_%": 0.4167804550595358,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Sep2023",
        recovery: 769985.0,
        "Recovery_%": 0.05596033919021777,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Oct2023",
        settlement_amount: 10314200.0,
        "Average_Waiver_%": 0.46289639146053213,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Oct2023",
        recovery: 752636.0,
        "Recovery_%": 0.07297085571348239,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Nov2023",
        settlement_amount: 14036781.0,
        "Average_Waiver_%": 0.4530940180591884,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Nov2023",
        recovery: 651641.0,
        "Recovery_%": 0.04642382039015926,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Dec2023",
        settlement_amount: 13634014.0,
        "Average_Waiver_%": 0.4426637291314449,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Dec2023",
        recovery: 866164.0,
        "Recovery_%": 0.06352963991382142,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Jan2024",
        settlement_amount: 14391273.0,
        "Average_Waiver_%": 0.43888669833283556,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Jan2024",
        recovery: 854085.0,
        "Recovery_%": 0.05934742534590234,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Feb2024",
        settlement_amount: 10964220.0,
        "Average_Waiver_%": 0.4058031832361754,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Feb2024",
        recovery: 535495.0,
        "Recovery_%": 0.048840227576608275,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Mar2024",
        settlement_amount: 13024745.0,
        "Average_Waiver_%": 0.4174171727332584,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Mar2024",
        recovery: 646980.0,
        "Recovery_%": 0.049673141393555116,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Apr2024",
        settlement_amount: 9844650.0,
        "Average_Waiver_%": 0.41508905398521073,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Apr2024",
        recovery: 343487.0,
        "Recovery_%": 0.034890727450950516,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "May2024",
        settlement_amount: 14066564.0,
        "Average_Waiver_%": 0.4240950206557696,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "May2024",
        recovery: 1112836.0,
        "Recovery_%": 0.07911214138719307,
      },
    ],
    [
      {
        segment: ">=1 - 5Lakh",
        month: "Jun2024",
        settlement_amount: 7534620.0,
        "Average_Waiver_%": 0.441471354859781,
      },
      {
        segment: ">=1 - 5Lakh",
        month: "Jun2024",
        recovery: 159827.0,
        "Recovery_%": 0.021212350456957352,
      },
    ],

    // [  {
    //     "segment": ">=5 - 10Lakh",
    //     "month": "Feb2023",
    //     "settlement_amount": 123040716.46,
    //     "Average_Waiver_%": 0.34881942417104783
    // },
    // {
    //     "segment": ">=5 - 10Lakh",
    //     "month": "Feb2023",
    //     "recovery": 9074552.0,
    //     "Recovery_%": 0.07375243139900033
    // }],
    //    [ {
    //         "segment": ">=5 - 10Lakh",
    //         "month": "Mar2023",
    //         "settlement_amount": 6026499.0,
    //         "Average_Waiver_%": 0.4239232845168198
    //     },
    //     {
    //         "segment": ">=5 - 10Lakh",
    //         "month": "Mar2023",
    //         "recovery": 630082.0,
    //         "Recovery_%": 0.10455191314227381
    //     }],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Apr2023",
        settlement_amount: 4115644.0,
        "Average_Waiver_%": 0.3842338730437077,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Apr2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "May2023",
        settlement_amount: 4704070.0,
        "Average_Waiver_%": 0.3888922196291683,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "May2023",
        recovery: 73212.0,
        "Recovery_%": 0.015563543909848281,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Jun2023",
        settlement_amount: 5822000.0,
        "Average_Waiver_%": 0.4483408831810072,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Jun2023",
        recovery: 130702.0,
        "Recovery_%": 0.022449673651666092,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Jul2023",
        settlement_amount: 4184900.0,
        "Average_Waiver_%": 0.4194128130418954,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Jul2023",
        recovery: 5000.0,
        "Recovery_%": 0.0011947716791321178,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Aug2023",
        settlement_amount: 8150473.0,
        "Average_Waiver_%": 0.3621652004191511,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Aug2023",
        recovery: 173000.0,
        "Recovery_%": 0.02122576198951889,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Sep2023",
        settlement_amount: 7170700.0,
        "Average_Waiver_%": 0.36670133776582636,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Sep2023",
        recovery: 265700.0,
        "Recovery_%": 0.03705356520283933,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Oct2023",
        settlement_amount: 5985002.0,
        "Average_Waiver_%": 0.38884283396631913,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Oct2023",
        recovery: 164001.0,
        "Recovery_%": 0.027401995855640484,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Nov2023",
        settlement_amount: 5469500.0,
        "Average_Waiver_%": 0.36665709496907256,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Nov2023",
        recovery: 114507.0,
        "Recovery_%": 0.020935551695767437,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Dec2023",
        settlement_amount: 5643400.0,
        "Average_Waiver_%": 0.3432655603839013,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Dec2023",
        recovery: 107500.0,
        "Recovery_%": 0.019048800368572136,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Jan2024",
        settlement_amount: 4903551.0,
        "Average_Waiver_%": 0.41848667003371043,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Jan2024",
        recovery: 481393.0,
        "Recovery_%": 0.0981723245052412,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Feb2024",
        settlement_amount: 6887400.0,
        "Average_Waiver_%": 0.39323272840657025,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Feb2024",
        recovery: 158068.0,
        "Recovery_%": 0.02295031506809536,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Mar2024",
        settlement_amount: 6814500.0,
        "Average_Waiver_%": 0.3566372179173227,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Mar2024",
        recovery: 549329.0,
        "Recovery_%": 0.08061178369652947,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Apr2024",
        settlement_amount: 7003465.0,
        "Average_Waiver_%": 0.40715150013509316,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Apr2024",
        recovery: 102500.0,
        "Recovery_%": 0.014635612514662385,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "May2024",
        settlement_amount: 7620886.0,
        "Average_Waiver_%": 0.35934644627133294,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "May2024",
        recovery: 459055.0,
        "Recovery_%": 0.060236434451322325,
      },
    ],
    [
      {
        segment: ">=5 - 10Lakh",
        month: "Jun2024",
        settlement_amount: 5020764.0,
        "Average_Waiver_%": 0.41806455158470857,
      },
      {
        segment: ">=5 - 10Lakh",
        month: "Jun2024",
        recovery: 112426.0,
        "Recovery_%": 0.022392209631840892,
      },
    ],

    // [ {
    //     "segment": ">=10L",
    //     "month": "Feb2023",
    //     "settlement_amount": 20935000.0,
    //     "Average_Waiver_%": 0.34884688072029574
    // },
    // {
    //     "segment": ">=10L",
    //     "month": "Feb2023",
    //     "recovery": 625000.0,
    //     "Recovery_%": 0.029854310962502986
    // }],
    //    [ {
    //         "segment": ">=10L",
    //         "month": "Mar2023",
    //         "settlement_amount": 600000.0,
    //         "Average_Waiver_%": 0.49247550371441035
    //     },
    //     {
    //         "segment": ">=10L",
    //         "month": "Mar2023",
    //         "recovery": 0.0,
    //         "Recovery_%": 0.0
    //     }],
    [
      {
        segment: ">=10L",
        month: "Apr2023",
        settlement_amount: 360000.0,
        "Average_Waiver_%": 0.311405719760128,
      },
      {
        segment: ">=10L",
        month: "Apr2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "May2023",
        settlement_amount: 700000.0,
        "Average_Waiver_%": 0.28307099418916715,
      },
      {
        segment: ">=10L",
        month: "May2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Aug2023",
        settlement_amount: 1721750.0,
        "Average_Waiver_%": 0.3320466246187288,
      },
      {
        segment: ">=10L",
        month: "Aug2023",
        recovery: 237000.0,
        "Recovery_%": 0.1376506461449107,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Sep2023",
        settlement_amount: 1140000.0,
        "Average_Waiver_%": 0.5444574484868988,
      },
      {
        segment: ">=10L",
        month: "Sep2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Oct2023",
        settlement_amount: 2986000.0,
        "Average_Waiver_%": 0.46773571052014196,
      },
      {
        segment: ">=10L",
        month: "Oct2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Nov2023",
        settlement_amount: 935000.0,
        "Average_Waiver_%": 0.3300620186533049,
      },
      {
        segment: ">=10L",
        month: "Nov2023",
        recovery: 2000.0,
        "Recovery_%": 0.0021390374331550803,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Dec2023",
        settlement_amount: 431000.0,
        "Average_Waiver_%": 0.3646137869913905,
      },
      {
        segment: ">=10L",
        month: "Dec2023",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Jan2024",
        settlement_amount: 1545500.0,
        "Average_Waiver_%": 0.3148002390322721,
      },
      {
        segment: ">=10L",
        month: "Jan2024",
        recovery: 35000.0,
        "Recovery_%": 0.022646392753154318,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Feb2024",
        settlement_amount: 1200000.0,
        "Average_Waiver_%": 0.5087047500818983,
      },
      {
        segment: ">=10L",
        month: "Feb2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Mar2024",
        settlement_amount: 910000.0,
        "Average_Waiver_%": 0.37695832854920736,
      },
      {
        segment: ">=10L",
        month: "Mar2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Apr2024",
        settlement_amount: 450000.0,
        "Average_Waiver_%": 0.31416400675056066,
      },
      {
        segment: ">=10L",
        month: "Apr2024",
        recovery: 75000.0,
        "Recovery_%": 0.16666666666666666,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "May2024",
        settlement_amount: 2185000.0,
        "Average_Waiver_%": 0.3757424421307973,
      },
      {
        segment: ">=10L",
        month: "May2024",
        recovery: 76680.0,
        "Recovery_%": 0.03509382151029748,
      },
    ],
    [
      {
        segment: ">=10L",
        month: "Jun2024",
        settlement_amount: 1480000.0,
        "Average_Waiver_%": 0.435900586132545,
      },
      {
        segment: ">=10L",
        month: "Jun2024",
        recovery: 0.0,
        "Recovery_%": 0.0,
      },
    ],
  ],
};
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
        active_recovery_accounts: 57334.0,
        "%Unique_payers": 10.555691212892873,
      },
      {
        month: "Feb2023",
        sub_segment: null,
        average_payment_size: 24606.70469762062,
        unique_payers: 6052.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: null,
        active_recovery_accounts: 57187.0,
        "%Unique_payers": 9.332540612376938,
      },
      {
        month: "Mar2023",
        sub_segment: null,
        average_payment_size: 24215.83632939854,
        unique_payers: 5337.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: null,
        active_recovery_accounts: 57690.0,
        "%Unique_payers": 7.436297451898076,
      },
      {
        month: "Apr2023",
        sub_segment: null,
        average_payment_size: 21284.588610722607,
        unique_payers: 4290.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: null,
        active_recovery_accounts: 59039.0,
        "%Unique_payers": 8.706109520825217,
      },
      {
        month: "May2023",
        sub_segment: null,
        average_payment_size: 22292.624918287936,
        unique_payers: 5140.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: null,
        active_recovery_accounts: 59518.0,
        "%Unique_payers": 8.654524681608924,
      },
      {
        month: "Jun2023",
        sub_segment: null,
        average_payment_size: 24522.521118229466,
        unique_payers: 5151.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: null,
        active_recovery_accounts: 59206.0,
        "%Unique_payers": 8.63426004121204,
      },
      {
        month: "Jul2023",
        sub_segment: null,
        average_payment_size: 22839.568961267607,
        unique_payers: 5112.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: null,
        active_recovery_accounts: 59237.0,
        "%Unique_payers": 8.157063997163934,
      },
      {
        month: "Aug2023",
        sub_segment: null,
        average_payment_size: 23824.106560430464,
        unique_payers: 4832.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: null,
        active_recovery_accounts: 59557.0,
        "%Unique_payers": 8.541397316856122,
      },
      {
        month: "Sep2023",
        sub_segment: null,
        average_payment_size: 23797.634202870064,
        unique_payers: 5087.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: null,
        active_recovery_accounts: 59847.0,
        "%Unique_payers": 7.9068290808227655,
      },
      {
        month: "Oct2023",
        sub_segment: null,
        average_payment_size: 24667.204940828404,
        unique_payers: 4732.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: null,
        active_recovery_accounts: 60214.0,
        "%Unique_payers": 7.478327299299166,
      },
      {
        month: "Nov2023",
        sub_segment: null,
        average_payment_size: 22213.086286919828,
        unique_payers: 4503.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: null,
        active_recovery_accounts: 60750.0,
        "%Unique_payers": 7.9259259259259265,
      },
      {
        month: "Dec2023",
        sub_segment: null,
        average_payment_size: 23414.10072274143,
        unique_payers: 4815.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: null,
        active_recovery_accounts: 60978.0,
        "%Unique_payers": 7.5191052510741585,
      },
      {
        month: "Jan2024",
        sub_segment: null,
        average_payment_size: 23208.042597600874,
        unique_payers: 4585.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: null,
        active_recovery_accounts: 61494.0,
        "%Unique_payers": 7.509675740722672,
      },
      {
        month: "Feb2024",
        sub_segment: null,
        average_payment_size: 22974.489335210048,
        unique_payers: 4618.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: null,
        active_recovery_accounts: 61916.0,
        "%Unique_payers": 7.666838943084178,
      },
      {
        month: "Mar2024",
        sub_segment: null,
        average_payment_size: 24942.929014114172,
        unique_payers: 4747.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: null,
        active_recovery_accounts: 62161.0,
        "%Unique_payers": 6.568427148855392,
      },
      {
        month: "Apr2024",
        sub_segment: null,
        average_payment_size: 19925.74624785697,
        unique_payers: 4083.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: null,
        active_recovery_accounts: 62922.0,
        "%Unique_payers": 7.455262070499984,
      },
      {
        month: "May2024",
        sub_segment: null,
        average_payment_size: 21401.85795992326,
        unique_payers: 4691.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: null,
        active_recovery_accounts: 63502.0,
        "%Unique_payers": 6.439167270322195,
      },
      {
        month: "Jun2024",
        sub_segment: null,
        average_payment_size: 21362.520643189044,
        unique_payers: 4089.0,
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
      },
      {
        month: "Feb2023",
        sub_segment: "V1",
        average_payment_size: 27963.12288990826,
        unique_payers: 1308.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V1",
        active_recovery_accounts: 2903.0,
        "%Unique_payers": 17.292456079917326,
      },
      {
        month: "Mar2023",
        sub_segment: "V1",
        average_payment_size: 36348.62382470119,
        unique_payers: 502.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V1",
        active_recovery_accounts: 3688.0,
        "%Unique_payers": 13.828633405639914,
      },
      {
        month: "Apr2023",
        sub_segment: "V1",
        average_payment_size: 28184.717647058824,
        unique_payers: 510.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V1",
        active_recovery_accounts: 4274.0,
        "%Unique_payers": 20.776789892372484,
      },
      {
        month: "May2023",
        sub_segment: "V1",
        average_payment_size: 35580.53335585586,
        unique_payers: 888.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V1",
        active_recovery_accounts: 4560.0,
        "%Unique_payers": 21.00877192982456,
      },
      {
        month: "Jun2023",
        sub_segment: "V1",
        average_payment_size: 34142.87639874739,
        unique_payers: 958.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V1",
        active_recovery_accounts: 4569.0,
        "%Unique_payers": 21.05493543444955,
      },
      {
        month: "Jul2023",
        sub_segment: "V1",
        average_payment_size: 34403.88312889813,
        unique_payers: 962.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V1",
        active_recovery_accounts: 4708.0,
        "%Unique_payers": 19.987255734919287,
      },
      {
        month: "Aug2023",
        sub_segment: "V1",
        average_payment_size: 35644.21765143465,
        unique_payers: 941.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V1",
        active_recovery_accounts: 4773.0,
        "%Unique_payers": 20.364550597108735,
      },
      {
        month: "Sep2023",
        sub_segment: "V1",
        average_payment_size: 33991.30721193415,
        unique_payers: 972.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V1",
        active_recovery_accounts: 4856.0,
        "%Unique_payers": 19.028006589785832,
      },
      {
        month: "Oct2023",
        sub_segment: "V1",
        average_payment_size: 39779.187694805194,
        unique_payers: 924.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V1",
        active_recovery_accounts: 4910.0,
        "%Unique_payers": 17.637474541751526,
      },
      {
        month: "Nov2023",
        sub_segment: "V1",
        average_payment_size: 30921.39993071594,
        unique_payers: 866.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V1",
        active_recovery_accounts: 4865.0,
        "%Unique_payers": 20.24665981500514,
      },
      {
        month: "Dec2023",
        sub_segment: "V1",
        average_payment_size: 37702.72959390863,
        unique_payers: 985.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V1",
        active_recovery_accounts: 4670.0,
        "%Unique_payers": 18.843683083511777,
      },
      {
        month: "Jan2024",
        sub_segment: "V1",
        average_payment_size: 36920.90514772727,
        unique_payers: 880.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V1",
        active_recovery_accounts: 4707.0,
        "%Unique_payers": 19.50286806883365,
      },
      {
        month: "Feb2024",
        sub_segment: "V1",
        average_payment_size: 35106.588344226584,
        unique_payers: 918.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V1",
        active_recovery_accounts: 4701.0,
        "%Unique_payers": 18.613061050840248,
      },
      {
        month: "Mar2024",
        sub_segment: "V1",
        average_payment_size: 35410.48193142857,
        unique_payers: 875.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V1",
        active_recovery_accounts: 4595.0,
        "%Unique_payers": 16.2132752992383,
      },
      {
        month: "Apr2024",
        sub_segment: "V1",
        average_payment_size: 31704.56034899329,
        unique_payers: 745.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V1",
        active_recovery_accounts: 4860.0,
        "%Unique_payers": 19.17695473251029,
      },
      {
        month: "May2024",
        sub_segment: "V1",
        average_payment_size: 31108.745826180257,
        unique_payers: 932.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V1",
        active_recovery_accounts: 4905.0,
        "%Unique_payers": 18.246687054026502,
      },
      {
        month: "Jun2024",
        sub_segment: "V1",
        average_payment_size: 30493.521463687153,
        unique_payers: 895.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V2",
        active_recovery_accounts: 3191.0,
        "%Unique_payers": 18.176120338451895,
      },
      {
        month: "Feb2023",
        sub_segment: "V2",
        average_payment_size: 24278.52179310345,
        unique_payers: 580.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V2",
        active_recovery_accounts: 4708.0,
        "%Unique_payers": 24.468988954970264,
      },
      {
        month: "Mar2023",
        sub_segment: "V2",
        average_payment_size: 22232.65861979167,
        unique_payers: 1152.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V2",
        active_recovery_accounts: 4119.0,
        "%Unique_payers": 19.446467589220685,
      },
      {
        month: "Apr2023",
        sub_segment: "V2",
        average_payment_size: 18307.628826466917,
        unique_payers: 801.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V2",
        active_recovery_accounts: 4146.0,
        "%Unique_payers": 20.791123974915582,
      },
      {
        month: "May2023",
        sub_segment: "V2",
        average_payment_size: 21037.45663573086,
        unique_payers: 862.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V2",
        active_recovery_accounts: 4081.0,
        "%Unique_payers": 20.240137221269297,
      },
      {
        month: "Jun2023",
        sub_segment: "V2",
        average_payment_size: 21987.298813559322,
        unique_payers: 826.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V2",
        active_recovery_accounts: 2631.0,
        "%Unique_payers": 12.770809578107183,
      },
      {
        month: "Jul2023",
        sub_segment: "V2",
        average_payment_size: 25242.65098214286,
        unique_payers: 336.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V2",
        active_recovery_accounts: 3265.0,
        "%Unique_payers": 13.047473200612558,
      },
      {
        month: "Aug2023",
        sub_segment: "V2",
        average_payment_size: 26058.260492957743,
        unique_payers: 426.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V2",
        active_recovery_accounts: 3595.0,
        "%Unique_payers": 14.687065368567453,
      },
      {
        month: "Sep2023",
        sub_segment: "V2",
        average_payment_size: 28152.623465909095,
        unique_payers: 528.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V2",
        active_recovery_accounts: 3747.0,
        "%Unique_payers": 14.198025086736054,
      },
      {
        month: "Oct2023",
        sub_segment: "V2",
        average_payment_size: 27129.0419924812,
        unique_payers: 532.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V2",
        active_recovery_accounts: 3840.0,
        "%Unique_payers": 12.760416666666666,
      },
      {
        month: "Nov2023",
        sub_segment: "V2",
        average_payment_size: 24097.34218367347,
        unique_payers: 490.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V2",
        active_recovery_accounts: 4060.0,
        "%Unique_payers": 14.113300492610836,
      },
      {
        month: "Dec2023",
        sub_segment: "V2",
        average_payment_size: 23288.080087260038,
        unique_payers: 573.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V2",
        active_recovery_accounts: 4156.0,
        "%Unique_payers": 14.148219441770934,
      },
      {
        month: "Jan2024",
        sub_segment: "V2",
        average_payment_size: 28993.07863945578,
        unique_payers: 588.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V2",
        active_recovery_accounts: 4261.0,
        "%Unique_payers": 13.377141516076039,
      },
      {
        month: "Feb2024",
        sub_segment: "V2",
        average_payment_size: 25842.231228070177,
        unique_payers: 570.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V2",
        active_recovery_accounts: 4324.0,
        "%Unique_payers": 13.459759481961148,
      },
      {
        month: "Mar2024",
        sub_segment: "V2",
        average_payment_size: 29247.138659793818,
        unique_payers: 582.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V2",
        active_recovery_accounts: 4220.0,
        "%Unique_payers": 12.511848341232227,
      },
      {
        month: "Apr2024",
        sub_segment: "V2",
        average_payment_size: 23411.403674242425,
        unique_payers: 528.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V2",
        active_recovery_accounts: 4135.0,
        "%Unique_payers": 14.123337363966144,
      },
      {
        month: "May2024",
        sub_segment: "V2",
        average_payment_size: 21991.194965753424,
        unique_payers: 584.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V2",
        active_recovery_accounts: 4156.0,
        "%Unique_payers": 11.645813282001924,
      },
      {
        month: "Jun2024",
        sub_segment: "V2",
        average_payment_size: 22181.783367768592,
        unique_payers: 484.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V3",
        active_recovery_accounts: 3567.0,
        "%Unique_payers": 17.802074572469863,
      },
      {
        month: "Feb2023",
        sub_segment: "V3",
        average_payment_size: 25033.386913385828,
        unique_payers: 635.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V3",
        active_recovery_accounts: 3370.0,
        "%Unique_payers": 15.19287833827893,
      },
      {
        month: "Mar2023",
        sub_segment: "V3",
        average_payment_size: 22480.339765624998,
        unique_payers: 512.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V3",
        active_recovery_accounts: 3212.0,
        "%Unique_payers": 11.79950186799502,
      },
      {
        month: "Apr2023",
        sub_segment: "V3",
        average_payment_size: 20641.810026385225,
        unique_payers: 379.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V3",
        active_recovery_accounts: 3001.0,
        "%Unique_payers": 13.195601466177942,
      },
      {
        month: "May2023",
        sub_segment: "V3",
        average_payment_size: 22042.537045454545,
        unique_payers: 396.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V3",
        active_recovery_accounts: 2944.0,
        "%Unique_payers": 12.839673913043478,
      },
      {
        month: "Jun2023",
        sub_segment: "V3",
        average_payment_size: 21956.818174603173,
        unique_payers: 378.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V3",
        active_recovery_accounts: 4261.0,
        "%Unique_payers": 19.009622154423845,
      },
      {
        month: "Jul2023",
        sub_segment: "V3",
        average_payment_size: 19420.906802469137,
        unique_payers: 810.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V3",
        active_recovery_accounts: 3631.0,
        "%Unique_payers": 18.97548884604792,
      },
      {
        month: "Aug2023",
        sub_segment: "V3",
        average_payment_size: 19524.65804063861,
        unique_payers: 689.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V3",
        active_recovery_accounts: 3528.0,
        "%Unique_payers": 17.9421768707483,
      },
      {
        month: "Sep2023",
        sub_segment: "V3",
        average_payment_size: 21305.914344391786,
        unique_payers: 633.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V3",
        active_recovery_accounts: 3478.0,
        "%Unique_payers": 15.842438182863713,
      },
      {
        month: "Oct2023",
        sub_segment: "V3",
        average_payment_size: 18655.06891107078,
        unique_payers: 551.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V3",
        active_recovery_accounts: 2334.0,
        "%Unique_payers": 9.768637532133676,
      },
      {
        month: "Nov2023",
        sub_segment: "V3",
        average_payment_size: 15926.15701754386,
        unique_payers: 228.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V3",
        active_recovery_accounts: 2949.0,
        "%Unique_payers": 10.308579179382841,
      },
      {
        month: "Dec2023",
        sub_segment: "V3",
        average_payment_size: 24077.808552631577,
        unique_payers: 304.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V3",
        active_recovery_accounts: 3248.0,
        "%Unique_payers": 10.775862068965516,
      },
      {
        month: "Jan2024",
        sub_segment: "V3",
        average_payment_size: 21844.328885714283,
        unique_payers: 350.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V3",
        active_recovery_accounts: 3396.0,
        "%Unique_payers": 11.42520612485277,
      },
      {
        month: "Feb2024",
        sub_segment: "V3",
        average_payment_size: 17092.78025773196,
        unique_payers: 388.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V3",
        active_recovery_accounts: 3503.0,
        "%Unique_payers": 12.018270054239224,
      },
      {
        month: "Mar2024",
        sub_segment: "V3",
        average_payment_size: 20402.61862232779,
        unique_payers: 421.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V3",
        active_recovery_accounts: 3711.0,
        "%Unique_payers": 10.212880625168417,
      },
      {
        month: "Apr2024",
        sub_segment: "V3",
        average_payment_size: 20175.171688654355,
        unique_payers: 379.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V3",
        active_recovery_accounts: 3813.0,
        "%Unique_payers": 11.591922370836611,
      },
      {
        month: "May2024",
        sub_segment: "V3",
        average_payment_size: 26167.96452488688,
        unique_payers: 442.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V3",
        active_recovery_accounts: 3926.0,
        "%Unique_payers": 10.315843097300052,
      },
      {
        month: "Jun2024",
        sub_segment: "V3",
        average_payment_size: 20893.418395061726,
        unique_payers: 405.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V4",
        active_recovery_accounts: 20813.0,
        "%Unique_payers": 12.131840676500264,
      },
      {
        month: "Feb2023",
        sub_segment: "V4",
        average_payment_size: 22779.225568316833,
        unique_payers: 2525.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V4",
        active_recovery_accounts: 19471.0,
        "%Unique_payers": 11.365620666632429,
      },
      {
        month: "Mar2023",
        sub_segment: "V4",
        average_payment_size: 22432.635910528694,
        unique_payers: 2213.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V4",
        active_recovery_accounts: 18931.0,
        "%Unique_payers": 9.45539062912683,
      },
      {
        month: "Apr2023",
        sub_segment: "V4",
        average_payment_size: 19906.146927374302,
        unique_payers: 1790.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V4",
        active_recovery_accounts: 18550.0,
        "%Unique_payers": 10.625336927223719,
      },
      {
        month: "May2023",
        sub_segment: "V4",
        average_payment_size: 18477.20177574835,
        unique_payers: 1971.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V4",
        active_recovery_accounts: 17721.0,
        "%Unique_payers": 10.507307714011626,
      },
      {
        month: "Jun2023",
        sub_segment: "V4",
        average_payment_size: 22178.047207303975,
        unique_payers: 1862.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V4",
        active_recovery_accounts: 17023.0,
        "%Unique_payers": 10.726663925277565,
      },
      {
        month: "Jul2023",
        sub_segment: "V4",
        average_payment_size: 19504.490388828042,
        unique_payers: 1826.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V4",
        active_recovery_accounts: 16326.0,
        "%Unique_payers": 9.922822491730981,
      },
      {
        month: "Aug2023",
        sub_segment: "V4",
        average_payment_size: 21138.34122839506,
        unique_payers: 1620.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V4",
        active_recovery_accounts: 11714.0,
        "%Unique_payers": 11.644186443571794,
      },
      {
        month: "Sep2023",
        sub_segment: "V4",
        average_payment_size: 19207.22267595308,
        unique_payers: 1364.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V4",
        active_recovery_accounts: 10025.0,
        "%Unique_payers": 10.683291770573566,
      },
      {
        month: "Oct2023",
        sub_segment: "V4",
        average_payment_size: 21067.703286647993,
        unique_payers: 1071.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V4",
        active_recovery_accounts: 10286.0,
        "%Unique_payers": 11.996888975306241,
      },
      {
        month: "Nov2023",
        sub_segment: "V4",
        average_payment_size: 19429.612739059972,
        unique_payers: 1234.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V4",
        active_recovery_accounts: 9169.0,
        "%Unique_payers": 12.171447267968153,
      },
      {
        month: "Dec2023",
        sub_segment: "V4",
        average_payment_size: 17255.933476702507,
        unique_payers: 1116.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V4",
        active_recovery_accounts: 8723.0,
        "%Unique_payers": 11.418090106614697,
      },
      {
        month: "Jan2024",
        sub_segment: "V4",
        average_payment_size: 19538.13145582329,
        unique_payers: 996.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V4",
        active_recovery_accounts: 8404.0,
        "%Unique_payers": 11.268443598286531,
      },
      {
        month: "Feb2024",
        sub_segment: "V4",
        average_payment_size: 20851.012270327352,
        unique_payers: 947.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V4",
        active_recovery_accounts: 8280.0,
        "%Unique_payers": 10.905797101449275,
      },
      {
        month: "Mar2024",
        sub_segment: "V4",
        average_payment_size: 20923.66666666667,
        unique_payers: 903.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V4",
        active_recovery_accounts: 8250.0,
        "%Unique_payers": 9.115151515151515,
      },
      {
        month: "Apr2024",
        sub_segment: "V4",
        average_payment_size: 14983.294042553192,
        unique_payers: 752.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V4",
        active_recovery_accounts: 8341.0,
        "%Unique_payers": 10.106701834312434,
      },
      {
        month: "May2024",
        sub_segment: "V4",
        average_payment_size: 16483.63824436536,
        unique_payers: 843.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V4",
        active_recovery_accounts: 8440.0,
        "%Unique_payers": 8.30568720379147,
      },
      {
        month: "Jun2024",
        sub_segment: "V4",
        average_payment_size: 19717.482624821685,
        unique_payers: 701.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V5",
        active_recovery_accounts: 18631.0,
        "%Unique_payers": 4.696473619236756,
      },
      {
        month: "Feb2023",
        sub_segment: "V5",
        average_payment_size: 25198.683074285713,
        unique_payers: 875.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V5",
        active_recovery_accounts: 19640.0,
        "%Unique_payers": 4.266802443991853,
      },
      {
        month: "Mar2023",
        sub_segment: "V5",
        average_payment_size: 25788.782183770887,
        unique_payers: 838.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V5",
        active_recovery_accounts: 20042.0,
        "%Unique_payers": 3.50264444666201,
      },
      {
        month: "Apr2023",
        sub_segment: "V5",
        average_payment_size: 22599.1844017094,
        unique_payers: 702.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V5",
        active_recovery_accounts: 20611.0,
        "%Unique_payers": 4.240454126437339,
      },
      {
        month: "May2023",
        sub_segment: "V5",
        average_payment_size: 19417.41704805492,
        unique_payers: 874.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V5",
        active_recovery_accounts: 21174.0,
        "%Unique_payers": 4.481911778596392,
      },
      {
        month: "Jun2023",
        sub_segment: "V5",
        average_payment_size: 23756.878619599578,
        unique_payers: 949.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V5",
        active_recovery_accounts: 21148.0,
        "%Unique_payers": 4.648193682617742,
      },
      {
        month: "Jul2023",
        sub_segment: "V5",
        average_payment_size: 20089.23553407935,
        unique_payers: 983.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V5",
        active_recovery_accounts: 21173.0,
        "%Unique_payers": 4.576583384499126,
      },
      {
        month: "Aug2023",
        sub_segment: "V5",
        average_payment_size: 19445.855438596493,
        unique_payers: 969.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V5",
        active_recovery_accounts: 25140.0,
        "%Unique_payers": 5.505171042163883,
      },
      {
        month: "Sep2023",
        sub_segment: "V5",
        average_payment_size: 21310.836950867055,
        unique_payers: 1384.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V5",
        active_recovery_accounts: 26224.0,
        "%Unique_payers": 5.548352654057352,
      },
      {
        month: "Oct2023",
        sub_segment: "V5",
        average_payment_size: 20211.571216494845,
        unique_payers: 1455.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V5",
        active_recovery_accounts: 26618.0,
        "%Unique_payers": 5.4962807122999475,
      },
      {
        month: "Nov2023",
        sub_segment: "V5",
        average_payment_size: 20000.91785372522,
        unique_payers: 1463.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V5",
        active_recovery_accounts: 26767.0,
        "%Unique_payers": 5.884111032241193,
      },
      {
        month: "Dec2023",
        sub_segment: "V5",
        average_payment_size: 19807.10403809524,
        unique_payers: 1575.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V5",
        active_recovery_accounts: 26571.0,
        "%Unique_payers": 5.682887358398254,
      },
      {
        month: "Jan2024",
        sub_segment: "V5",
        average_payment_size: 16745.128337748345,
        unique_payers: 1510.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V5",
        active_recovery_accounts: 26433.0,
        "%Unique_payers": 5.856315968675519,
      },
      {
        month: "Feb2024",
        sub_segment: "V5",
        average_payment_size: 18029.537487080102,
        unique_payers: 1548.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V5",
        active_recovery_accounts: 26136.0,
        "%Unique_payers": 6.473829201101928,
      },
      {
        month: "Mar2024",
        sub_segment: "V5",
        average_payment_size: 21954.902730496455,
        unique_payers: 1692.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V5",
        active_recovery_accounts: 25262.0,
        "%Unique_payers": 5.462750376058903,
      },
      {
        month: "Apr2024",
        sub_segment: "V5",
        average_payment_size: 16544.026347826086,
        unique_payers: 1380.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V5",
        active_recovery_accounts: 25252.0,
        "%Unique_payers": 6.324251544432125,
      },
      {
        month: "May2024",
        sub_segment: "V5",
        average_payment_size: 17497.972880400754,
        unique_payers: 1597.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V5",
        active_recovery_accounts: 25440.0,
        "%Unique_payers": 5.338050314465409,
      },
      {
        month: "Jun2024",
        sub_segment: "V5",
        average_payment_size: 17473.507673048603,
        unique_payers: 1358.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V6",
        active_recovery_accounts: 3230.0,
        "%Unique_payers": 2.538699690402477,
      },
      {
        month: "Feb2023",
        sub_segment: "V6",
        average_payment_size: 28711.457195121955,
        unique_payers: 82.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V6",
        active_recovery_accounts: 3674.0,
        "%Unique_payers": 2.286336418072945,
      },
      {
        month: "Mar2023",
        sub_segment: "V6",
        average_payment_size: 25569.68380952381,
        unique_payers: 84.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V6",
        active_recovery_accounts: 4219.0,
        "%Unique_payers": 1.82507703247215,
      },
      {
        month: "Apr2023",
        sub_segment: "V6",
        average_payment_size: 33005.93506493507,
        unique_payers: 77.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V6",
        active_recovery_accounts: 4877.0,
        "%Unique_payers": 2.3785113799466884,
      },
      {
        month: "May2023",
        sub_segment: "V6",
        average_payment_size: 19977.88844827586,
        unique_payers: 116.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V6",
        active_recovery_accounts: 5391.0,
        "%Unique_payers": 2.485624188462252,
      },
      {
        month: "Jun2023",
        sub_segment: "V6",
        average_payment_size: 21762.83440298507,
        unique_payers: 134.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V6",
        active_recovery_accounts: 5864.0,
        "%Unique_payers": 2.626193724420191,
      },
      {
        month: "Jul2023",
        sub_segment: "V6",
        average_payment_size: 21816.534350649352,
        unique_payers: 154.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V6",
        active_recovery_accounts: 6364.0,
        "%Unique_payers": 2.341294783155248,
      },
      {
        month: "Aug2023",
        sub_segment: "V6",
        average_payment_size: 22849.85073825503,
        unique_payers: 149.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V6",
        active_recovery_accounts: 6983.0,
        "%Unique_payers": 2.4344837462408706,
      },
      {
        month: "Sep2023",
        sub_segment: "V6",
        average_payment_size: 22064.959176470587,
        unique_payers: 170.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V6",
        active_recovery_accounts: 7605.0,
        "%Unique_payers": 2.0907297830374754,
      },
      {
        month: "Oct2023",
        sub_segment: "V6",
        average_payment_size: 17270.43779874214,
        unique_payers: 159.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V6",
        active_recovery_accounts: 8233.0,
        "%Unique_payers": 2.1498846107129843,
      },
      {
        month: "Nov2023",
        sub_segment: "V6",
        average_payment_size: 22847.155084745762,
        unique_payers: 177.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V6",
        active_recovery_accounts: 8880.0,
        "%Unique_payers": 2.40990990990991,
      },
      {
        month: "Dec2023",
        sub_segment: "V6",
        average_payment_size: 18855.72836448598,
        unique_payers: 214.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V6",
        active_recovery_accounts: 9499.0,
        "%Unique_payers": 2.200231603326666,
      },
      {
        month: "Jan2024",
        sub_segment: "V6",
        average_payment_size: 18224.56803827751,
        unique_payers: 209.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V6",
        active_recovery_accounts: 10109.0,
        "%Unique_payers": 2.0377881096053025,
      },
      {
        month: "Feb2024",
        sub_segment: "V6",
        average_payment_size: 21209.652718446603,
        unique_payers: 206.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V6",
        active_recovery_accounts: 10513.0,
        "%Unique_payers": 2.035575002378008,
      },
      {
        month: "Mar2024",
        sub_segment: "V6",
        average_payment_size: 21541.658878504673,
        unique_payers: 214.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V6",
        active_recovery_accounts: 11417.0,
        "%Unique_payers": 1.7254970657791013,
      },
      {
        month: "Apr2024",
        sub_segment: "V6",
        average_payment_size: 17428.996395939088,
        unique_payers: 197.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V6",
        active_recovery_accounts: 11630.0,
        "%Unique_payers": 2.0120378331900257,
      },
      {
        month: "May2024",
        sub_segment: "V6",
        average_payment_size: 17927.83188034188,
        unique_payers: 234.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V6",
        active_recovery_accounts: 11479.0,
        "%Unique_payers": 1.7510236083282515,
      },
      {
        month: "Jun2024",
        sub_segment: "V6",
        average_payment_size: 14672.873383084576,
        unique_payers: 201.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "V7",
        active_recovery_accounts: 3019.0,
        "%Unique_payers": 1.5568068896985758,
      },
      {
        month: "Feb2023",
        sub_segment: "V7",
        average_payment_size: 9479.511063829788,
        unique_payers: 47.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "V7",
        active_recovery_accounts: 3094.0,
        "%Unique_payers": 1.1635423400129283,
      },
      {
        month: "Mar2023",
        sub_segment: "V7",
        average_payment_size: 13018.790555555555,
        unique_payers: 36.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "V7",
        active_recovery_accounts: 3152.0,
        "%Unique_payers": 0.983502538071066,
      },
      {
        month: "Apr2023",
        sub_segment: "V7",
        average_payment_size: 13255.967741935483,
        unique_payers: 31.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "V7",
        active_recovery_accounts: 3243.0,
        "%Unique_payers": 1.0175763182238668,
      },
      {
        month: "May2023",
        sub_segment: "V7",
        average_payment_size: 12685.57303030303,
        unique_payers: 33.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "V7",
        active_recovery_accounts: 3319.0,
        "%Unique_payers": 1.3257005122024708,
      },
      {
        month: "Jun2023",
        sub_segment: "V7",
        average_payment_size: 8827.797272727272,
        unique_payers: 44.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "V7",
        active_recovery_accounts: 3380.0,
        "%Unique_payers": 1.21301775147929,
      },
      {
        month: "Jul2023",
        sub_segment: "V7",
        average_payment_size: 17663.69390243902,
        unique_payers: 41.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "V7",
        active_recovery_accounts: 3448.0,
        "%Unique_payers": 1.1020881670533642,
      },
      {
        month: "Aug2023",
        sub_segment: "V7",
        average_payment_size: 13994.506842105264,
        unique_payers: 38.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "V7",
        active_recovery_accounts: 3516.0,
        "%Unique_payers": 1.023890784982935,
      },
      {
        month: "Sep2023",
        sub_segment: "V7",
        average_payment_size: 6219.235555555556,
        unique_payers: 36.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "V7",
        active_recovery_accounts: 3604.0,
        "%Unique_payers": 1.1098779134295227,
      },
      {
        month: "Oct2023",
        sub_segment: "V7",
        average_payment_size: 13507.627250000001,
        unique_payers: 40.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "V7",
        active_recovery_accounts: 3688.0,
        "%Unique_payers": 1.2201735357917571,
      },
      {
        month: "Nov2023",
        sub_segment: "V7",
        average_payment_size: 11717.83,
        unique_payers: 45.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "V7",
        active_recovery_accounts: 3761.0,
        "%Unique_payers": 1.2762563148098909,
      },
      {
        month: "Dec2023",
        sub_segment: "V7",
        average_payment_size: 9355.128125000001,
        unique_payers: 48.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "V7",
        active_recovery_accounts: 3833.0,
        "%Unique_payers": 1.3566397078006782,
      },
      {
        month: "Jan2024",
        sub_segment: "V7",
        average_payment_size: 12903.384423076923,
        unique_payers: 52.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "V7",
        active_recovery_accounts: 3929.0,
        "%Unique_payers": 1.0435225248154747,
      },
      {
        month: "Feb2024",
        sub_segment: "V7",
        average_payment_size: 11742.731707317073,
        unique_payers: 41.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "V7",
        active_recovery_accounts: 4214.0,
        "%Unique_payers": 1.4238253440911248,
      },
      {
        month: "Mar2024",
        sub_segment: "V7",
        average_payment_size: 19281.563000000002,
        unique_payers: 60.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "V7",
        active_recovery_accounts: 4482.0,
        "%Unique_payers": 2.2757697456492636,
      },
      {
        month: "Apr2024",
        sub_segment: "V7",
        average_payment_size: 1937.3283333333331,
        unique_payers: 102.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "V7",
        active_recovery_accounts: 4688.0,
        "%Unique_payers": 1.2585324232081911,
      },
      {
        month: "May2024",
        sub_segment: "V7",
        average_payment_size: 16247.186610169492,
        unique_payers: 59.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "V7",
        active_recovery_accounts: 4978.0,
        "%Unique_payers": 0.9039775010044194,
      },
      {
        month: "Jun2024",
        sub_segment: "V7",
        average_payment_size: 8035.584666666666,
        unique_payers: 45.0,
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
      },
      {
        month: "Feb2023",
        sub_segment: "MH",
        average_payment_size: 23655.352875157627,
        unique_payers: 793.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "MH",
        active_recovery_accounts: 6926.0,
        "%Unique_payers": 10.55443257291366,
      },
      {
        month: "Mar2023",
        sub_segment: "MH",
        average_payment_size: 23182.85722298222,
        unique_payers: 731.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "MH",
        active_recovery_accounts: 7027.0,
        "%Unique_payers": 8.538494378824533,
      },
      {
        month: "Apr2023",
        sub_segment: "MH",
        average_payment_size: 20640.246566666665,
        unique_payers: 600.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "MH",
        active_recovery_accounts: 7254.0,
        "%Unique_payers": 10.063413289219742,
      },
      {
        month: "May2023",
        sub_segment: "MH",
        average_payment_size: 23550.991356164384,
        unique_payers: 730.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "MH",
        active_recovery_accounts: 7365.0,
        "%Unique_payers": 9.355057705363205,
      },
      {
        month: "Jun2023",
        sub_segment: "MH",
        average_payment_size: 24579.090870827284,
        unique_payers: 689.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "MH",
        active_recovery_accounts: 7393.0,
        "%Unique_payers": 9.387258217232517,
      },
      {
        month: "Jul2023",
        sub_segment: "MH",
        average_payment_size: 24241.529913544666,
        unique_payers: 694.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "MH",
        active_recovery_accounts: 7479.0,
        "%Unique_payers": 9.426393902928199,
      },
      {
        month: "Aug2023",
        sub_segment: "MH",
        average_payment_size: 23910.40565957447,
        unique_payers: 705.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "MH",
        active_recovery_accounts: 7603.0,
        "%Unique_payers": 8.98329606734184,
      },
      {
        month: "Sep2023",
        sub_segment: "MH",
        average_payment_size: 20713.369970717424,
        unique_payers: 683.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "MH",
        active_recovery_accounts: 7733.0,
        "%Unique_payers": 8.858140437087805,
      },
      {
        month: "Oct2023",
        sub_segment: "MH",
        average_payment_size: 28124.44569343065,
        unique_payers: 685.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "MH",
        active_recovery_accounts: 7878.0,
        "%Unique_payers": 8.707793856308708,
      },
      {
        month: "Nov2023",
        sub_segment: "MH",
        average_payment_size: 25432.94518950437,
        unique_payers: 686.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "MH",
        active_recovery_accounts: 7977.0,
        "%Unique_payers": 8.938197317287202,
      },
      {
        month: "Dec2023",
        sub_segment: "MH",
        average_payment_size: 26587.220603085552,
        unique_payers: 713.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "MH",
        active_recovery_accounts: 8089.0,
        "%Unique_payers": 9.34602546668315,
      },
      {
        month: "Jan2024",
        sub_segment: "MH",
        average_payment_size: 25772.39908730159,
        unique_payers: 756.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "MH",
        active_recovery_accounts: 8193.0,
        "%Unique_payers": 9.276211399975589,
      },
      {
        month: "Feb2024",
        sub_segment: "MH",
        average_payment_size: 26078.397592105266,
        unique_payers: 760.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "MH",
        active_recovery_accounts: 8324.0,
        "%Unique_payers": 9.851033157135992,
      },
      {
        month: "Mar2024",
        sub_segment: "MH",
        average_payment_size: 24467.348463414637,
        unique_payers: 820.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "MH",
        active_recovery_accounts: 8358.0,
        "%Unique_payers": 7.896625987078249,
      },
      {
        month: "Apr2024",
        sub_segment: "MH",
        average_payment_size: 22508.172757575758,
        unique_payers: 660.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "MH",
        active_recovery_accounts: 8512.0,
        "%Unique_payers": 8.43515037593985,
      },
      {
        month: "May2024",
        sub_segment: "MH",
        average_payment_size: 25506.010111420608,
        unique_payers: 718.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "MH",
        active_recovery_accounts: 8646.0,
        "%Unique_payers": 7.668285912560721,
      },
      {
        month: "Jun2024",
        sub_segment: "MH",
        average_payment_size: 24451.81491704374,
        unique_payers: 663.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "UP",
        active_recovery_accounts: 4377.0,
        "%Unique_payers": 12.017363490975553,
      },
      {
        month: "Feb2023",
        sub_segment: "UP",
        average_payment_size: 20092.827300380228,
        unique_payers: 526.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "UP",
        active_recovery_accounts: 4360.0,
        "%Unique_payers": 11.123853211009175,
      },
      {
        month: "Mar2023",
        sub_segment: "UP",
        average_payment_size: 21080.95375257732,
        unique_payers: 485.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "UP",
        active_recovery_accounts: 4396.0,
        "%Unique_payers": 9.303912647861692,
      },
      {
        month: "Apr2023",
        sub_segment: "UP",
        average_payment_size: 19050.330073349633,
        unique_payers: 409.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "UP",
        active_recovery_accounts: 4494.0,
        "%Unique_payers": 10.59190031152648,
      },
      {
        month: "May2023",
        sub_segment: "UP",
        average_payment_size: 20000.716827731096,
        unique_payers: 476.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "UP",
        active_recovery_accounts: 4525.0,
        "%Unique_payers": 9.966850828729282,
      },
      {
        month: "Jun2023",
        sub_segment: "UP",
        average_payment_size: 19143.236541019956,
        unique_payers: 451.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "UP",
        active_recovery_accounts: 4478.0,
        "%Unique_payers": 9.937472085752567,
      },
      {
        month: "Jul2023",
        sub_segment: "UP",
        average_payment_size: 18536.21168539326,
        unique_payers: 445.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "UP",
        active_recovery_accounts: 4485.0,
        "%Unique_payers": 8.918617614269788,
      },
      {
        month: "Aug2023",
        sub_segment: "UP",
        average_payment_size: 21443.959375,
        unique_payers: 400.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "UP",
        active_recovery_accounts: 4526.0,
        "%Unique_payers": 10.05302695536898,
      },
      {
        month: "Sep2023",
        sub_segment: "UP",
        average_payment_size: 17499.82085714286,
        unique_payers: 455.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "UP",
        active_recovery_accounts: 4563.0,
        "%Unique_payers": 9.335963182117029,
      },
      {
        month: "Oct2023",
        sub_segment: "UP",
        average_payment_size: 19710.695352112674,
        unique_payers: 426.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "UP",
        active_recovery_accounts: 4602.0,
        "%Unique_payers": 8.25727944372012,
      },
      {
        month: "Nov2023",
        sub_segment: "UP",
        average_payment_size: 18309.753105263157,
        unique_payers: 380.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "UP",
        active_recovery_accounts: 4675.0,
        "%Unique_payers": 9.262032085561497,
      },
      {
        month: "Dec2023",
        sub_segment: "UP",
        average_payment_size: 14917.193926097,
        unique_payers: 433.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "UP",
        active_recovery_accounts: 4693.0,
        "%Unique_payers": 8.331557639036863,
      },
      {
        month: "Jan2024",
        sub_segment: "UP",
        average_payment_size: 19747.199437340154,
        unique_payers: 391.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "UP",
        active_recovery_accounts: 4740.0,
        "%Unique_payers": 7.932489451476793,
      },
      {
        month: "Feb2024",
        sub_segment: "UP",
        average_payment_size: 20555.563856382978,
        unique_payers: 376.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "UP",
        active_recovery_accounts: 4772.0,
        "%Unique_payers": 7.858340318524728,
      },
      {
        month: "Mar2024",
        sub_segment: "UP",
        average_payment_size: 18715.43168,
        unique_payers: 375.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "UP",
        active_recovery_accounts: 4827.0,
        "%Unique_payers": 7.209446861404599,
      },
      {
        month: "Apr2024",
        sub_segment: "UP",
        average_payment_size: 18525.7233045977,
        unique_payers: 348.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "UP",
        active_recovery_accounts: 4914.0,
        "%Unique_payers": 8.241758241758241,
      },
      {
        month: "May2024",
        sub_segment: "UP",
        average_payment_size: 20048.18661728395,
        unique_payers: 405.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "UP",
        active_recovery_accounts: 4991.0,
        "%Unique_payers": 6.972550591063915,
      },
      {
        month: "Jun2024",
        sub_segment: "UP",
        average_payment_size: 15939.635747126438,
        unique_payers: 348.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "TN",
        active_recovery_accounts: 5833.0,
        "%Unique_payers": 14.057946168352478,
      },
      {
        month: "Feb2023",
        sub_segment: "TN",
        average_payment_size: 20377.268719512198,
        unique_payers: 820.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "TN",
        active_recovery_accounts: 5723.0,
        "%Unique_payers": 13.000174733531363,
      },
      {
        month: "Mar2023",
        sub_segment: "TN",
        average_payment_size: 22105.21510752688,
        unique_payers: 744.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "TN",
        active_recovery_accounts: 5726.0,
        "%Unique_payers": 10.059378274537199,
      },
      {
        month: "Apr2023",
        sub_segment: "TN",
        average_payment_size: 18679.89703125,
        unique_payers: 576.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "TN",
        active_recovery_accounts: 5835.0,
        "%Unique_payers": 10.265638389031704,
      },
      {
        month: "May2023",
        sub_segment: "TN",
        average_payment_size: 19112.5925542571,
        unique_payers: 599.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "TN",
        active_recovery_accounts: 5794.0,
        "%Unique_payers": 10.73524335519503,
      },
      {
        month: "Jun2023",
        sub_segment: "TN",
        average_payment_size: 21513.622138263665,
        unique_payers: 622.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "TN",
        active_recovery_accounts: 5683.0,
        "%Unique_payers": 11.402428294914657,
      },
      {
        month: "Jul2023",
        sub_segment: "TN",
        average_payment_size: 19983.757160493828,
        unique_payers: 648.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "TN",
        active_recovery_accounts: 5599.0,
        "%Unique_payers": 10.912662975531346,
      },
      {
        month: "Aug2023",
        sub_segment: "TN",
        average_payment_size: 18326.25968903437,
        unique_payers: 611.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "TN",
        active_recovery_accounts: 5533.0,
        "%Unique_payers": 11.078980661485632,
      },
      {
        month: "Sep2023",
        sub_segment: "TN",
        average_payment_size: 20245.415008156604,
        unique_payers: 613.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "TN",
        active_recovery_accounts: 5482.0,
        "%Unique_payers": 10.488872674206494,
      },
      {
        month: "Oct2023",
        sub_segment: "TN",
        average_payment_size: 22975.749791304348,
        unique_payers: 575.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "TN",
        active_recovery_accounts: 5407.0,
        "%Unique_payers": 10.3754392454226,
      },
      {
        month: "Nov2023",
        sub_segment: "TN",
        average_payment_size: 17099.712139037438,
        unique_payers: 561.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "TN",
        active_recovery_accounts: 5430.0,
        "%Unique_payers": 10.294659300184163,
      },
      {
        month: "Dec2023",
        sub_segment: "TN",
        average_payment_size: 16143.810715563508,
        unique_payers: 559.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "TN",
        active_recovery_accounts: 5343.0,
        "%Unique_payers": 9.058581321355044,
      },
      {
        month: "Jan2024",
        sub_segment: "TN",
        average_payment_size: 16509.84857438017,
        unique_payers: 484.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "TN",
        active_recovery_accounts: 5363.0,
        "%Unique_payers": 9.062092112623532,
      },
      {
        month: "Feb2024",
        sub_segment: "TN",
        average_payment_size: 19132.22864197531,
        unique_payers: 486.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "TN",
        active_recovery_accounts: 5329.0,
        "%Unique_payers": 9.607806342653406,
      },
      {
        month: "Mar2024",
        sub_segment: "TN",
        average_payment_size: 19584.246953125,
        unique_payers: 512.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "TN",
        active_recovery_accounts: 5314.0,
        "%Unique_payers": 7.8283778697779445,
      },
      {
        month: "Apr2024",
        sub_segment: "TN",
        average_payment_size: 15670.329326923076,
        unique_payers: 416.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "TN",
        active_recovery_accounts: 5320.0,
        "%Unique_payers": 8.721804511278195,
      },
      {
        month: "May2024",
        sub_segment: "TN",
        average_payment_size: 14780.498879310346,
        unique_payers: 464.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "TN",
        active_recovery_accounts: 5350.0,
        "%Unique_payers": 7.682242990654206,
      },
      {
        month: "Jun2024",
        sub_segment: "TN",
        average_payment_size: 16151.700729927008,
        unique_payers: 411.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "MP",
        active_recovery_accounts: 3940.0,
        "%Unique_payers": 10.862944162436548,
      },
      {
        month: "Feb2023",
        sub_segment: "MP",
        average_payment_size: 19384.873598130842,
        unique_payers: 428.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "MP",
        active_recovery_accounts: 3948.0,
        "%Unique_payers": 9.321175278622087,
      },
      {
        month: "Mar2023",
        sub_segment: "MP",
        average_payment_size: 19998.929701086956,
        unique_payers: 368.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "MP",
        active_recovery_accounts: 3988.0,
        "%Unique_payers": 7.3721163490471415,
      },
      {
        month: "Apr2023",
        sub_segment: "MP",
        average_payment_size: 21054.996598639456,
        unique_payers: 294.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "MP",
        active_recovery_accounts: 4063.0,
        "%Unique_payers": 9.032734432685208,
      },
      {
        month: "May2023",
        sub_segment: "MP",
        average_payment_size: 16310.403514986376,
        unique_payers: 367.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "MP",
        active_recovery_accounts: 4116.0,
        "%Unique_payers": 9.305150631681244,
      },
      {
        month: "Jun2023",
        sub_segment: "MP",
        average_payment_size: 25226.608198433423,
        unique_payers: 383.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "MP",
        active_recovery_accounts: 4108.0,
        "%Unique_payers": 9.031158714703018,
      },
      {
        month: "Jul2023",
        sub_segment: "MP",
        average_payment_size: 16235.47269541779,
        unique_payers: 371.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "MP",
        active_recovery_accounts: 4121.0,
        "%Unique_payers": 8.832807570977918,
      },
      {
        month: "Aug2023",
        sub_segment: "MP",
        average_payment_size: 24031.544395604396,
        unique_payers: 364.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "MP",
        active_recovery_accounts: 4143.0,
        "%Unique_payers": 10.209992758870385,
      },
      {
        month: "Sep2023",
        sub_segment: "MP",
        average_payment_size: 23039.391442080378,
        unique_payers: 423.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "MP",
        active_recovery_accounts: 4129.0,
        "%Unique_payers": 8.379752966820053,
      },
      {
        month: "Oct2023",
        sub_segment: "MP",
        average_payment_size: 21984.550924855488,
        unique_payers: 346.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "MP",
        active_recovery_accounts: 4128.0,
        "%Unique_payers": 7.3643410852713185,
      },
      {
        month: "Nov2023",
        sub_segment: "MP",
        average_payment_size: 20497.17631578947,
        unique_payers: 304.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "MP",
        active_recovery_accounts: 4170.0,
        "%Unique_payers": 9.256594724220623,
      },
      {
        month: "Dec2023",
        sub_segment: "MP",
        average_payment_size: 20399.093393782383,
        unique_payers: 386.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "MP",
        active_recovery_accounts: 4197.0,
        "%Unique_payers": 8.434596140100071,
      },
      {
        month: "Jan2024",
        sub_segment: "MP",
        average_payment_size: 20827.33183615819,
        unique_payers: 354.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "MP",
        active_recovery_accounts: 4208.0,
        "%Unique_payers": 9.529467680608365,
      },
      {
        month: "Feb2024",
        sub_segment: "MP",
        average_payment_size: 21111.620598503738,
        unique_payers: 401.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "MP",
        active_recovery_accounts: 4200.0,
        "%Unique_payers": 10.071428571428571,
      },
      {
        month: "Mar2024",
        sub_segment: "MP",
        average_payment_size: 25951.803593380613,
        unique_payers: 423.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "MP",
        active_recovery_accounts: 4227.0,
        "%Unique_payers": 8.705938017506504,
      },
      {
        month: "Apr2024",
        sub_segment: "MP",
        average_payment_size: 20488.380489130435,
        unique_payers: 368.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "MP",
        active_recovery_accounts: 4274.0,
        "%Unique_payers": 10.107627515208236,
      },
      {
        month: "May2024",
        sub_segment: "MP",
        average_payment_size: 17297.283587962964,
        unique_payers: 432.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "MP",
        active_recovery_accounts: 4296.0,
        "%Unique_payers": 7.844506517690874,
      },
      {
        month: "Jun2024",
        sub_segment: "MP",
        average_payment_size: 19657.546439169142,
        unique_payers: 337.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "KA",
        active_recovery_accounts: 3999.0,
        "%Unique_payers": 12.003000750187546,
      },
      {
        month: "Feb2023",
        sub_segment: "KA",
        average_payment_size: 41597.965,
        unique_payers: 480.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "KA",
        active_recovery_accounts: 3951.0,
        "%Unique_payers": 10.402429764616553,
      },
      {
        month: "Mar2023",
        sub_segment: "KA",
        average_payment_size: 34965.31476885644,
        unique_payers: 411.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "KA",
        active_recovery_accounts: 3952.0,
        "%Unique_payers": 7.844129554655871,
      },
      {
        month: "Apr2023",
        sub_segment: "KA",
        average_payment_size: 27339.83064516129,
        unique_payers: 310.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "KA",
        active_recovery_accounts: 4027.0,
        "%Unique_payers": 9.237645890240874,
      },
      {
        month: "May2023",
        sub_segment: "KA",
        average_payment_size: 26808.009677419355,
        unique_payers: 372.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "KA",
        active_recovery_accounts: 4029.0,
        "%Unique_payers": 10.622983370563416,
      },
      {
        month: "Jun2023",
        sub_segment: "KA",
        average_payment_size: 25617.777149532707,
        unique_payers: 428.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "KA",
        active_recovery_accounts: 3978.0,
        "%Unique_payers": 10.683760683760683,
      },
      {
        month: "Jul2023",
        sub_segment: "KA",
        average_payment_size: 23277.896023529414,
        unique_payers: 425.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "KA",
        active_recovery_accounts: 3942.0,
        "%Unique_payers": 8.853373921867073,
      },
      {
        month: "Aug2023",
        sub_segment: "KA",
        average_payment_size: 31001.76613180516,
        unique_payers: 349.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "KA",
        active_recovery_accounts: 3921.0,
        "%Unique_payers": 9.028309104820199,
      },
      {
        month: "Sep2023",
        sub_segment: "KA",
        average_payment_size: 24342.780028248584,
        unique_payers: 354.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "KA",
        active_recovery_accounts: 3915.0,
        "%Unique_payers": 8.403575989782887,
      },
      {
        month: "Oct2023",
        sub_segment: "KA",
        average_payment_size: 34571.52352583586,
        unique_payers: 329.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "KA",
        active_recovery_accounts: 3942.0,
        "%Unique_payers": 8.548959918822932,
      },
      {
        month: "Nov2023",
        sub_segment: "KA",
        average_payment_size: 24504.31934718101,
        unique_payers: 337.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "KA",
        active_recovery_accounts: 3954.0,
        "%Unique_payers": 8.118361153262518,
      },
      {
        month: "Dec2023",
        sub_segment: "KA",
        average_payment_size: 32598.228785046733,
        unique_payers: 321.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "KA",
        active_recovery_accounts: 3928.0,
        "%Unique_payers": 7.7647657841140525,
      },
      {
        month: "Jan2024",
        sub_segment: "KA",
        average_payment_size: 38127.17032786886,
        unique_payers: 305.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "KA",
        active_recovery_accounts: 3928.0,
        "%Unique_payers": 8.146639511201629,
      },
      {
        month: "Feb2024",
        sub_segment: "KA",
        average_payment_size: 27646.73696875,
        unique_payers: 320.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "KA",
        active_recovery_accounts: 3923.0,
        "%Unique_payers": 8.00407851134336,
      },
      {
        month: "Mar2024",
        sub_segment: "KA",
        average_payment_size: 29015.99576433121,
        unique_payers: 314.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "KA",
        active_recovery_accounts: 3929.0,
        "%Unique_payers": 6.08297276660728,
      },
      {
        month: "Apr2024",
        sub_segment: "KA",
        average_payment_size: 25662.804560669458,
        unique_payers: 239.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "KA",
        active_recovery_accounts: 3991.0,
        "%Unique_payers": 7.967927837634678,
      },
      {
        month: "May2024",
        sub_segment: "KA",
        average_payment_size: 25269.80795597484,
        unique_payers: 318.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "KA",
        active_recovery_accounts: 4003.0,
        "%Unique_payers": 7.144641518860855,
      },
      {
        month: "Jun2024",
        sub_segment: "KA",
        average_payment_size: 23600.68048951049,
        unique_payers: 286.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "HR",
        active_recovery_accounts: 3199.0,
        "%Unique_payers": 8.002500781494216,
      },
      {
        month: "Feb2023",
        sub_segment: "HR",
        average_payment_size: 28204.572421874997,
        unique_payers: 256.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "HR",
        active_recovery_accounts: 3211.0,
        "%Unique_payers": 7.007162877608223,
      },
      {
        month: "Mar2023",
        sub_segment: "HR",
        average_payment_size: 24230.544933333334,
        unique_payers: 225.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "HR",
        active_recovery_accounts: 3270.0,
        "%Unique_payers": 6.574923547400611,
      },
      {
        month: "Apr2023",
        sub_segment: "HR",
        average_payment_size: 23257.0,
        unique_payers: 215.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "HR",
        active_recovery_accounts: 3371.0,
        "%Unique_payers": 8.217146247404331,
      },
      {
        month: "May2023",
        sub_segment: "HR",
        average_payment_size: 22895.88610108303,
        unique_payers: 277.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "HR",
        active_recovery_accounts: 3413.0,
        "%Unique_payers": 7.412833284500439,
      },
      {
        month: "Jun2023",
        sub_segment: "HR",
        average_payment_size: 27601.569683794463,
        unique_payers: 253.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "HR",
        active_recovery_accounts: 3418.0,
        "%Unique_payers": 7.021650087770626,
      },
      {
        month: "Jul2023",
        sub_segment: "HR",
        average_payment_size: 24811.779291666662,
        unique_payers: 240.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "HR",
        active_recovery_accounts: 3409.0,
        "%Unique_payers": 6.424171311234966,
      },
      {
        month: "Aug2023",
        sub_segment: "HR",
        average_payment_size: 20101.462831050227,
        unique_payers: 219.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "HR",
        active_recovery_accounts: 3480.0,
        "%Unique_payers": 7.844827586206897,
      },
      {
        month: "Sep2023",
        sub_segment: "HR",
        average_payment_size: 25250.61285714286,
        unique_payers: 273.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "HR",
        active_recovery_accounts: 3494.0,
        "%Unique_payers": 7.46994848311391,
      },
      {
        month: "Oct2023",
        sub_segment: "HR",
        average_payment_size: 17453.18436781609,
        unique_payers: 261.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "HR",
        active_recovery_accounts: 3517.0,
        "%Unique_payers": 6.312197895934036,
      },
      {
        month: "Nov2023",
        sub_segment: "HR",
        average_payment_size: 20380.91261261261,
        unique_payers: 222.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "HR",
        active_recovery_accounts: 3550.0,
        "%Unique_payers": 6.957746478873239,
      },
      {
        month: "Dec2023",
        sub_segment: "HR",
        average_payment_size: 20128.81238866397,
        unique_payers: 247.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "HR",
        active_recovery_accounts: 3593.0,
        "%Unique_payers": 5.844698023935431,
      },
      {
        month: "Jan2024",
        sub_segment: "HR",
        average_payment_size: 19717.260000000002,
        unique_payers: 210.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "HR",
        active_recovery_accounts: 3632.0,
        "%Unique_payers": 6.029735682819383,
      },
      {
        month: "Feb2024",
        sub_segment: "HR",
        average_payment_size: 16643.087534246573,
        unique_payers: 219.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "HR",
        active_recovery_accounts: 3704.0,
        "%Unique_payers": 6.42548596112311,
      },
      {
        month: "Mar2024",
        sub_segment: "HR",
        average_payment_size: 17760.164915966387,
        unique_payers: 238.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "HR",
        active_recovery_accounts: 3756.0,
        "%Unique_payers": 5.005324813631523,
      },
      {
        month: "Apr2024",
        sub_segment: "HR",
        average_payment_size: 16990.862393617022,
        unique_payers: 188.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "HR",
        active_recovery_accounts: 3818.0,
        "%Unique_payers": 5.526453640649555,
      },
      {
        month: "May2024",
        sub_segment: "HR",
        average_payment_size: 22767.000047393365,
        unique_payers: 211.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "HR",
        active_recovery_accounts: 3887.0,
        "%Unique_payers": 4.6565474659120145,
      },
      {
        month: "Jun2024",
        sub_segment: "HR",
        average_payment_size: 20137.345690607737,
        unique_payers: 181.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "AP",
        active_recovery_accounts: 3062.0,
        "%Unique_payers": 9.274983670803397,
      },
      {
        month: "Feb2023",
        sub_segment: "AP",
        average_payment_size: 27903.15426056338,
        unique_payers: 284.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "AP",
        active_recovery_accounts: 3084.0,
        "%Unique_payers": 8.300907911802852,
      },
      {
        month: "Mar2023",
        sub_segment: "AP",
        average_payment_size: 29692.912343750002,
        unique_payers: 256.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "AP",
        active_recovery_accounts: 3124.0,
        "%Unique_payers": 6.9142125480153656,
      },
      {
        month: "Apr2023",
        sub_segment: "AP",
        average_payment_size: 24270.43986111111,
        unique_payers: 216.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "AP",
        active_recovery_accounts: 3213.0,
        "%Unique_payers": 7.469654528478058,
      },
      {
        month: "May2023",
        sub_segment: "AP",
        average_payment_size: 25233.479708333332,
        unique_payers: 240.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "AP",
        active_recovery_accounts: 3263.0,
        "%Unique_payers": 8.397180508734294,
      },
      {
        month: "Jun2023",
        sub_segment: "AP",
        average_payment_size: 27710.42277372263,
        unique_payers: 274.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "AP",
        active_recovery_accounts: 3248.0,
        "%Unique_payers": 8.220443349753696,
      },
      {
        month: "Jul2023",
        sub_segment: "AP",
        average_payment_size: 31902.4297752809,
        unique_payers: 267.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "AP",
        active_recovery_accounts: 3282.0,
        "%Unique_payers": 7.830591102985984,
      },
      {
        month: "Aug2023",
        sub_segment: "AP",
        average_payment_size: 30736.15968871595,
        unique_payers: 257.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "AP",
        active_recovery_accounts: 3302.0,
        "%Unique_payers": 7.813446396123562,
      },
      {
        month: "Sep2023",
        sub_segment: "AP",
        average_payment_size: 33788.32453488372,
        unique_payers: 258.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "AP",
        active_recovery_accounts: 3342.0,
        "%Unique_payers": 8.07899461400359,
      },
      {
        month: "Oct2023",
        sub_segment: "AP",
        average_payment_size: 26538.130407407407,
        unique_payers: 270.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "AP",
        active_recovery_accounts: 3375.0,
        "%Unique_payers": 7.437037037037037,
      },
      {
        month: "Nov2023",
        sub_segment: "AP",
        average_payment_size: 33753.17215139443,
        unique_payers: 251.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "AP",
        active_recovery_accounts: 3406.0,
        "%Unique_payers": 7.780387551379918,
      },
      {
        month: "Dec2023",
        sub_segment: "AP",
        average_payment_size: 34883.93362264151,
        unique_payers: 265.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "AP",
        active_recovery_accounts: 3437.0,
        "%Unique_payers": 7.652022112307244,
      },
      {
        month: "Jan2024",
        sub_segment: "AP",
        average_payment_size: 22458.37855513308,
        unique_payers: 263.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "AP",
        active_recovery_accounts: 3493.0,
        "%Unique_payers": 7.901517320354996,
      },
      {
        month: "Feb2024",
        sub_segment: "AP",
        average_payment_size: 28421.318297101447,
        unique_payers: 276.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "AP",
        active_recovery_accounts: 3538.0,
        "%Unique_payers": 7.91407574901074,
      },
      {
        month: "Mar2024",
        sub_segment: "AP",
        average_payment_size: 43986.43532142857,
        unique_payers: 280.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "AP",
        active_recovery_accounts: 3552.0,
        "%Unique_payers": 6.925675675675675,
      },
      {
        month: "Apr2024",
        sub_segment: "AP",
        average_payment_size: 25516.15524390244,
        unique_payers: 246.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "AP",
        active_recovery_accounts: 3624.0,
        "%Unique_payers": 8.167770419426049,
      },
      {
        month: "May2024",
        sub_segment: "AP",
        average_payment_size: 25555.49972972973,
        unique_payers: 296.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "AP",
        active_recovery_accounts: 3663.0,
        "%Unique_payers": 7.17990717990718,
      },
      {
        month: "Jun2024",
        sub_segment: "AP",
        average_payment_size: 21843.27060836502,
        unique_payers: 263.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "TG",
        active_recovery_accounts: 2582.0,
        "%Unique_payers": 12.083656080557708,
      },
      {
        month: "Feb2023",
        sub_segment: "TG",
        average_payment_size: 31204.337243589747,
        unique_payers: 312.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "TG",
        active_recovery_accounts: 2594.0,
        "%Unique_payers": 10.79414032382421,
      },
      {
        month: "Mar2023",
        sub_segment: "TG",
        average_payment_size: 33818.12849999999,
        unique_payers: 280.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "TG",
        active_recovery_accounts: 2635.0,
        "%Unique_payers": 9.184060721062618,
      },
      {
        month: "Apr2023",
        sub_segment: "TG",
        average_payment_size: 32464.512396694216,
        unique_payers: 242.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "TG",
        active_recovery_accounts: 2708.0,
        "%Unique_payers": 9.785819793205318,
      },
      {
        month: "May2023",
        sub_segment: "TG",
        average_payment_size: 32094.509207547177,
        unique_payers: 265.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "TG",
        active_recovery_accounts: 2752.0,
        "%Unique_payers": 9.956395348837209,
      },
      {
        month: "Jun2023",
        sub_segment: "TG",
        average_payment_size: 33139.79762773723,
        unique_payers: 274.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "TG",
        active_recovery_accounts: 2749.0,
        "%Unique_payers": 9.276100400145507,
      },
      {
        month: "Jul2023",
        sub_segment: "TG",
        average_payment_size: 34930.27831372549,
        unique_payers: 255.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "TG",
        active_recovery_accounts: 2764.0,
        "%Unique_payers": 10.20260492040521,
      },
      {
        month: "Aug2023",
        sub_segment: "TG",
        average_payment_size: 35826.05241134752,
        unique_payers: 282.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "TG",
        active_recovery_accounts: 2812.0,
        "%Unique_payers": 9.53058321479374,
      },
      {
        month: "Sep2023",
        sub_segment: "TG",
        average_payment_size: 34931.72470149254,
        unique_payers: 268.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "TG",
        active_recovery_accounts: 2827.0,
        "%Unique_payers": 8.737177219667492,
      },
      {
        month: "Oct2023",
        sub_segment: "TG",
        average_payment_size: 38567.78963562752,
        unique_payers: 247.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "TG",
        active_recovery_accounts: 2821.0,
        "%Unique_payers": 8.613966678482807,
      },
      {
        month: "Nov2023",
        sub_segment: "TG",
        average_payment_size: 28862.58534979424,
        unique_payers: 243.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "TG",
        active_recovery_accounts: 2842.0,
        "%Unique_payers": 8.831808585503166,
      },
      {
        month: "Dec2023",
        sub_segment: "TG",
        average_payment_size: 36947.95517928287,
        unique_payers: 251.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "TG",
        active_recovery_accounts: 2875.0,
        "%Unique_payers": 8.417391304347827,
      },
      {
        month: "Jan2024",
        sub_segment: "TG",
        average_payment_size: 31925.427933884297,
        unique_payers: 242.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "TG",
        active_recovery_accounts: 2924.0,
        "%Unique_payers": 7.694938440492476,
      },
      {
        month: "Feb2024",
        sub_segment: "TG",
        average_payment_size: 34843.68604444444,
        unique_payers: 225.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "TG",
        active_recovery_accounts: 2973.0,
        "%Unique_payers": 7.399932727884292,
      },
      {
        month: "Mar2024",
        sub_segment: "TG",
        average_payment_size: 35076.94463636364,
        unique_payers: 220.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "TG",
        active_recovery_accounts: 3009.0,
        "%Unique_payers": 7.2781655034895305,
      },
      {
        month: "Apr2024",
        sub_segment: "TG",
        average_payment_size: 30455.479223744296,
        unique_payers: 219.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "TG",
        active_recovery_accounts: 3057.0,
        "%Unique_payers": 8.374223094537129,
      },
      {
        month: "May2024",
        sub_segment: "TG",
        average_payment_size: 30546.511171874998,
        unique_payers: 256.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "TG",
        active_recovery_accounts: 3082.0,
        "%Unique_payers": 6.846203763789747,
      },
      {
        month: "Jun2024",
        sub_segment: "TG",
        average_payment_size: 32317.244834123223,
        unique_payers: 211.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2888.0,
        "%Unique_payers": 6.578947368421052,
      },
      {
        month: "Feb2023",
        sub_segment: "GJ",
        average_payment_size: 17910.85247368421,
        unique_payers: 190.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2928.0,
        "%Unique_payers": 5.703551912568306,
      },
      {
        month: "Mar2023",
        sub_segment: "GJ",
        average_payment_size: 22373.905688622755,
        unique_payers: 167.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "GJ",
        active_recovery_accounts: 2962.0,
        "%Unique_payers": 3.6124240378122887,
      },
      {
        month: "Apr2023",
        sub_segment: "GJ",
        average_payment_size: 19296.635514018693,
        unique_payers: 107.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3026.0,
        "%Unique_payers": 4.428288169200265,
      },
      {
        month: "May2023",
        sub_segment: "GJ",
        average_payment_size: 25741.63134328358,
        unique_payers: 134.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3068.0,
        "%Unique_payers": 4.758800521512386,
      },
      {
        month: "Jun2023",
        sub_segment: "GJ",
        average_payment_size: 33429.42020547945,
        unique_payers: 146.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3065.0,
        "%Unique_payers": 4.306688417618271,
      },
      {
        month: "Jul2023",
        sub_segment: "GJ",
        average_payment_size: 26123.915909090912,
        unique_payers: 132.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3076.0,
        "%Unique_payers": 4.9414824447334205,
      },
      {
        month: "Aug2023",
        sub_segment: "GJ",
        average_payment_size: 27042.695197368423,
        unique_payers: 152.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3105.0,
        "%Unique_payers": 5.152979066022544,
      },
      {
        month: "Sep2023",
        sub_segment: "GJ",
        average_payment_size: 25067.717249999998,
        unique_payers: 160.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3160.0,
        "%Unique_payers": 5.063291139240507,
      },
      {
        month: "Oct2023",
        sub_segment: "GJ",
        average_payment_size: 20374.0081875,
        unique_payers: 160.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3202.0,
        "%Unique_payers": 4.684572142410993,
      },
      {
        month: "Nov2023",
        sub_segment: "GJ",
        average_payment_size: 13389.105866666667,
        unique_payers: 150.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "GJ",
        active_recovery_accounts: 3258.0,
        "%Unique_payers": 5.402087170042972,
      },
      {
        month: "Dec2023",
        sub_segment: "GJ",
        average_payment_size: 16366.419318181817,
        unique_payers: 176.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3317.0,
        "%Unique_payers": 6.180283388604161,
      },
      {
        month: "Jan2024",
        sub_segment: "GJ",
        average_payment_size: 19050.273170731707,
        unique_payers: 205.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3381.0,
        "%Unique_payers": 6.329488317065957,
      },
      {
        month: "Feb2024",
        sub_segment: "GJ",
        average_payment_size: 18848.393411214955,
        unique_payers: 214.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3432.0,
        "%Unique_payers": 7.051282051282051,
      },
      {
        month: "Mar2024",
        sub_segment: "GJ",
        average_payment_size: 17283.357933884297,
        unique_payers: 242.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3443.0,
        "%Unique_payers": 5.605576532094104,
      },
      {
        month: "Apr2024",
        sub_segment: "GJ",
        average_payment_size: 15398.78238341969,
        unique_payers: 193.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3492.0,
        "%Unique_payers": 6.242840778923253,
      },
      {
        month: "May2024",
        sub_segment: "GJ",
        average_payment_size: 14456.83004587156,
        unique_payers: 218.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "GJ",
        active_recovery_accounts: 3527.0,
        "%Unique_payers": 5.557130705982422,
      },
      {
        month: "Jun2024",
        sub_segment: "GJ",
        average_payment_size: 19723.237346938775,
        unique_payers: 196.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "DL",
        active_recovery_accounts: 1952.0,
        "%Unique_payers": 11.219262295081968,
      },
      {
        month: "Feb2023",
        sub_segment: "DL",
        average_payment_size: 27918.06200913242,
        unique_payers: 219.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "DL",
        active_recovery_accounts: 1957.0,
        "%Unique_payers": 9.504343382728667,
      },
      {
        month: "Mar2023",
        sub_segment: "DL",
        average_payment_size: 22742.940860215054,
        unique_payers: 186.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "DL",
        active_recovery_accounts: 2001.0,
        "%Unique_payers": 8.695652173913043,
      },
      {
        month: "Apr2023",
        sub_segment: "DL",
        average_payment_size: 20470.333333333332,
        unique_payers: 174.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "DL",
        active_recovery_accounts: 2054.0,
        "%Unique_payers": 9.591041869522881,
      },
      {
        month: "May2023",
        sub_segment: "DL",
        average_payment_size: 21521.155989847717,
        unique_payers: 197.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "DL",
        active_recovery_accounts: 2080.0,
        "%Unique_payers": 8.365384615384615,
      },
      {
        month: "Jun2023",
        sub_segment: "DL",
        average_payment_size: 19475.770862068966,
        unique_payers: 174.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "DL",
        active_recovery_accounts: 2116.0,
        "%Unique_payers": 9.45179584120983,
      },
      {
        month: "Jul2023",
        sub_segment: "DL",
        average_payment_size: 23995.498900000002,
        unique_payers: 200.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "DL",
        active_recovery_accounts: 2159.0,
        "%Unique_payers": 8.846688281611858,
      },
      {
        month: "Aug2023",
        sub_segment: "DL",
        average_payment_size: 30048.952931937172,
        unique_payers: 191.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "DL",
        active_recovery_accounts: 2190.0,
        "%Unique_payers": 9.269406392694064,
      },
      {
        month: "Sep2023",
        sub_segment: "DL",
        average_payment_size: 27521.12536945813,
        unique_payers: 203.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "DL",
        active_recovery_accounts: 2222.0,
        "%Unique_payers": 9.045904590459045,
      },
      {
        month: "Oct2023",
        sub_segment: "DL",
        average_payment_size: 21266.924925373136,
        unique_payers: 201.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "DL",
        active_recovery_accounts: 2277.0,
        "%Unique_payers": 7.5098814229249005,
      },
      {
        month: "Nov2023",
        sub_segment: "DL",
        average_payment_size: 17435.549122807017,
        unique_payers: 171.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "DL",
        active_recovery_accounts: 2318.0,
        "%Unique_payers": 8.498705780845556,
      },
      {
        month: "Dec2023",
        sub_segment: "DL",
        average_payment_size: 26360.144974619292,
        unique_payers: 197.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "DL",
        active_recovery_accounts: 2342.0,
        "%Unique_payers": 7.557643040136636,
      },
      {
        month: "Jan2024",
        sub_segment: "DL",
        average_payment_size: 32431.35548022599,
        unique_payers: 177.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "DL",
        active_recovery_accounts: 2381.0,
        "%Unique_payers": 7.34985300293994,
      },
      {
        month: "Feb2024",
        sub_segment: "DL",
        average_payment_size: 23041.990400000002,
        unique_payers: 175.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "DL",
        active_recovery_accounts: 2420.0,
        "%Unique_payers": 6.9421487603305785,
      },
      {
        month: "Mar2024",
        sub_segment: "DL",
        average_payment_size: 31750.677857142855,
        unique_payers: 168.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "DL",
        active_recovery_accounts: 2447.0,
        "%Unique_payers": 6.742950551695954,
      },
      {
        month: "Apr2024",
        sub_segment: "DL",
        average_payment_size: 19327.37593939394,
        unique_payers: 165.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "DL",
        active_recovery_accounts: 2484.0,
        "%Unique_payers": 6.40096618357488,
      },
      {
        month: "May2024",
        sub_segment: "DL",
        average_payment_size: 23768.69893081761,
        unique_payers: 159.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "DL",
        active_recovery_accounts: 2524.0,
        "%Unique_payers": 6.3391442155309035,
      },
      {
        month: "Jun2024",
        sub_segment: "DL",
        average_payment_size: 23855.5611875,
        unique_payers: 160.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14039.0,
        "%Unique_payers": 11.859819075432723,
      },
      {
        month: "Feb2023",
        sub_segment: "OTHERS",
        average_payment_size: 22929.853297297297,
        unique_payers: 1665.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 13961.0,
        "%Unique_payers": 10.08523744717427,
      },
      {
        month: "Mar2023",
        sub_segment: "OTHERS",
        average_payment_size: 22392.55005681818,
        unique_payers: 1408.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14070.0,
        "%Unique_payers": 7.789623312011372,
      },
      {
        month: "Apr2023",
        sub_segment: "OTHERS",
        average_payment_size: 19083.980839416057,
        unique_payers: 1096.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14435.0,
        "%Unique_payers": 9.830273640457223,
      },
      {
        month: "May2023",
        sub_segment: "OTHERS",
        average_payment_size: 20995.597963354478,
        unique_payers: 1419.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14567.0,
        "%Unique_payers": 9.487197089311456,
      },
      {
        month: "Jun2023",
        sub_segment: "OTHERS",
        average_payment_size: 23827.576874095514,
        unique_payers: 1382.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14459.0,
        "%Unique_payers": 9.44048689397607,
      },
      {
        month: "Jul2023",
        sub_segment: "OTHERS",
        average_payment_size: 21907.010117216116,
        unique_payers: 1365.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14439.0,
        "%Unique_payers": 8.594778031719647,
      },
      {
        month: "Aug2023",
        sub_segment: "OTHERS",
        average_payment_size: 20504.548839645446,
        unique_payers: 1241.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14482.0,
        "%Unique_payers": 9.1907195138793,
      },
      {
        month: "Sep2023",
        sub_segment: "OTHERS",
        average_payment_size: 23795.115612321566,
        unique_payers: 1331.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14530.0,
        "%Unique_payers": 8.134893324156916,
      },
      {
        month: "Oct2023",
        sub_segment: "OTHERS",
        average_payment_size: 22903.55718274112,
        unique_payers: 1182.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14621.0,
        "%Unique_payers": 7.803843786334724,
      },
      {
        month: "Nov2023",
        sub_segment: "OTHERS",
        average_payment_size: 21583.707887817705,
        unique_payers: 1141.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14739.0,
        "%Unique_payers": 8.202727457765114,
      },
      {
        month: "Dec2023",
        sub_segment: "OTHERS",
        average_payment_size: 22593.832721257233,
        unique_payers: 1209.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14762.0,
        "%Unique_payers": 7.763175721446959,
      },
      {
        month: "Jan2024",
        sub_segment: "OTHERS",
        average_payment_size: 21183.79347294939,
        unique_payers: 1146.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14880.0,
        "%Unique_payers": 7.486559139784946,
      },
      {
        month: "Feb2024",
        sub_segment: "OTHERS",
        average_payment_size: 20880.855843806105,
        unique_payers: 1114.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14950.0,
        "%Unique_payers": 7.34448160535117,
      },
      {
        month: "Mar2024",
        sub_segment: "OTHERS",
        average_payment_size: 23403.55704007286,
        unique_payers: 1098.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 14977.0,
        "%Unique_payers": 6.236228884289244,
      },
      {
        month: "Apr2024",
        sub_segment: "OTHERS",
        average_payment_size: 17899.578950749466,
        unique_payers: 934.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 15214.0,
        "%Unique_payers": 7.565400289207309,
      },
      {
        month: "May2024",
        sub_segment: "OTHERS",
        average_payment_size: 20225.860721112076,
        unique_payers: 1151.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "OTHERS",
        active_recovery_accounts: 15343.0,
        "%Unique_payers": 6.432900997197419,
      },
      {
        month: "Jun2024",
        sub_segment: "OTHERS",
        average_payment_size: 21021.200141843976,
        unique_payers: 987.0,
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
      },
      {
        month: "Feb2023",
        sub_segment: "<1L",
        average_payment_size: 13820.52322327044,
        unique_payers: 1272.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "<1L",
        active_recovery_accounts: 16657.0,
        "%Unique_payers": 6.567809329411059,
      },
      {
        month: "Mar2023",
        sub_segment: "<1L",
        average_payment_size: 12905.01688299817,
        unique_payers: 1094.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "<1L",
        active_recovery_accounts: 16864.0,
        "%Unique_payers": 4.803130929791272,
      },
      {
        month: "Apr2023",
        sub_segment: "<1L",
        average_payment_size: 11559.908135802469,
        unique_payers: 810.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17347.0,
        "%Unique_payers": 6.2373897503891165,
      },
      {
        month: "May2023",
        sub_segment: "<1L",
        average_payment_size: 13054.152939001848,
        unique_payers: 1082.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17560.0,
        "%Unique_payers": 6.953302961275626,
      },
      {
        month: "Jun2023",
        sub_segment: "<1L",
        average_payment_size: 13878.832457002454,
        unique_payers: 1221.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17408.0,
        "%Unique_payers": 6.979549632352941,
      },
      {
        month: "Jul2023",
        sub_segment: "<1L",
        average_payment_size: 13985.145308641975,
        unique_payers: 1215.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17388.0,
        "%Unique_payers": 6.746031746031746,
      },
      {
        month: "Aug2023",
        sub_segment: "<1L",
        average_payment_size: 13540.263341858483,
        unique_payers: 1173.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17391.0,
        "%Unique_payers": 6.537864412627221,
      },
      {
        month: "Sep2023",
        sub_segment: "<1L",
        average_payment_size: 13690.383139841688,
        unique_payers: 1137.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17408.0,
        "%Unique_payers": 6.232766544117647,
      },
      {
        month: "Oct2023",
        sub_segment: "<1L",
        average_payment_size: 13567.145059907833,
        unique_payers: 1085.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17463.0,
        "%Unique_payers": 5.966901448777415,
      },
      {
        month: "Nov2023",
        sub_segment: "<1L",
        average_payment_size: 13118.177946257196,
        unique_payers: 1042.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "<1L",
        active_recovery_accounts: 17545.0,
        "%Unique_payers": 6.286691365061271,
      },
      {
        month: "Dec2023",
        sub_segment: "<1L",
        average_payment_size: 12621.49827742521,
        unique_payers: 1103.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17504.0,
        "%Unique_payers": 5.7586837294332724,
      },
      {
        month: "Jan2024",
        sub_segment: "<1L",
        average_payment_size: 11559.803849206352,
        unique_payers: 1008.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17606.0,
        "%Unique_payers": 5.8957173690787235,
      },
      {
        month: "Feb2024",
        sub_segment: "<1L",
        average_payment_size: 11447.663169556838,
        unique_payers: 1038.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17650.0,
        "%Unique_payers": 5.376770538243626,
      },
      {
        month: "Mar2024",
        sub_segment: "<1L",
        average_payment_size: 11948.78124341412,
        unique_payers: 949.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17757.0,
        "%Unique_payers": 4.803739370389142,
      },
      {
        month: "Apr2024",
        sub_segment: "<1L",
        average_payment_size: 8775.941817116061,
        unique_payers: 853.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "<1L",
        active_recovery_accounts: 17875.0,
        "%Unique_payers": 5.314685314685315,
      },
      {
        month: "May2024",
        sub_segment: "<1L",
        average_payment_size: 9694.03787368421,
        unique_payers: 950.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "<1L",
        active_recovery_accounts: 18056.0,
        "%Unique_payers": 4.463890119627824,
      },
      {
        month: "Jun2024",
        sub_segment: "<1L",
        average_payment_size: 10794.889292803971,
        unique_payers: 806.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 33896.0,
        "%Unique_payers": 11.753599244748642,
      },
      {
        month: "Feb2023",
        sub_segment: "1-5L",
        average_payment_size: 23748.423742469884,
        unique_payers: 3984.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 33741.0,
        "%Unique_payers": 10.610236803888444,
      },
      {
        month: "Mar2023",
        sub_segment: "1-5L",
        average_payment_size: 24358.402067039107,
        unique_payers: 3580.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34003.0,
        "%Unique_payers": 8.608063994353438,
      },
      {
        month: "Apr2023",
        sub_segment: "1-5L",
        average_payment_size: 20983.760761872225,
        unique_payers: 2927.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34728.0,
        "%Unique_payers": 9.865238424326192,
      },
      {
        month: "May2023",
        sub_segment: "1-5L",
        average_payment_size: 21978.191459427904,
        unique_payers: 3426.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34937.0,
        "%Unique_payers": 9.602999685147552,
      },
      {
        month: "Jun2023",
        sub_segment: "1-5L",
        average_payment_size: 24975.597099850973,
        unique_payers: 3355.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34774.0,
        "%Unique_payers": 9.524357278426411,
      },
      {
        month: "Jul2023",
        sub_segment: "1-5L",
        average_payment_size: 23902.648801328505,
        unique_payers: 3312.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34732.0,
        "%Unique_payers": 8.91396982609697,
      },
      {
        month: "Aug2023",
        sub_segment: "1-5L",
        average_payment_size: 24614.870768733846,
        unique_payers: 3096.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 34913.0,
        "%Unique_payers": 9.655429209749949,
      },
      {
        month: "Sep2023",
        sub_segment: "1-5L",
        average_payment_size: 24777.910548798573,
        unique_payers: 3371.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35064.0,
        "%Unique_payers": 8.809605293178189,
      },
      {
        month: "Oct2023",
        sub_segment: "1-5L",
        average_payment_size: 24555.84923599871,
        unique_payers: 3089.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35277.0,
        "%Unique_payers": 8.424752671712447,
      },
      {
        month: "Nov2023",
        sub_segment: "1-5L",
        average_payment_size: 23241.799212651415,
        unique_payers: 2972.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "1-5L",
        active_recovery_accounts: 35598.0,
        "%Unique_payers": 8.882521489971348,
      },
      {
        month: "Dec2023",
        sub_segment: "1-5L",
        average_payment_size: 23255.17750790639,
        unique_payers: 3162.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 35794.0,
        "%Unique_payers": 8.414818125942896,
      },
      {
        month: "Jan2024",
        sub_segment: "1-5L",
        average_payment_size: 23393.25237383798,
        unique_payers: 3012.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36119.0,
        "%Unique_payers": 8.413854204158476,
      },
      {
        month: "Feb2024",
        sub_segment: "1-5L",
        average_payment_size: 23353.49112207963,
        unique_payers: 3039.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36352.0,
        "%Unique_payers": 8.731294014084508,
      },
      {
        month: "Mar2024",
        sub_segment: "1-5L",
        average_payment_size: 24217.748279773157,
        unique_payers: 3174.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36403.0,
        "%Unique_payers": 7.471911655632778,
      },
      {
        month: "Apr2024",
        sub_segment: "1-5L",
        average_payment_size: 19700.17005882353,
        unique_payers: 2720.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 36928.0,
        "%Unique_payers": 8.511156845753899,
      },
      {
        month: "May2024",
        sub_segment: "1-5L",
        average_payment_size: 21611.42049952275,
        unique_payers: 3143.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "1-5L",
        active_recovery_accounts: 37241.0,
        "%Unique_payers": 7.36285276979673,
      },
      {
        month: "Jun2024",
        sub_segment: "1-5L",
        average_payment_size: 21447.981232676877,
        unique_payers: 2742.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6049.0,
        "%Unique_payers": 12.349148619606547,
      },
      {
        month: "Feb2023",
        sub_segment: "5-10L",
        average_payment_size: 43567.15006693441,
        unique_payers: 747.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6055.0,
        "%Unique_payers": 10.289017341040463,
      },
      {
        month: "Mar2023",
        sub_segment: "5-10L",
        average_payment_size: 40076.144205457465,
        unique_payers: 623.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6086.0,
        "%Unique_payers": 8.560630956293132,
      },
      {
        month: "Apr2023",
        sub_segment: "5-10L",
        average_payment_size: 36333.926679462566,
        unique_payers: 521.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6204.0,
        "%Unique_payers": 9.413281753707285,
      },
      {
        month: "May2023",
        sub_segment: "5-10L",
        average_payment_size: 38544.011900684935,
        unique_payers: 584.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6265.0,
        "%Unique_payers": 8.635275339185954,
      },
      {
        month: "Jun2023",
        sub_segment: "5-10L",
        average_payment_size: 42579.65171903881,
        unique_payers: 541.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6264.0,
        "%Unique_payers": 8.620689655172415,
      },
      {
        month: "Jul2023",
        sub_segment: "5-10L",
        average_payment_size: 33229.333611111106,
        unique_payers: 540.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6351.0,
        "%Unique_payers": 8.156195874665407,
      },
      {
        month: "Aug2023",
        sub_segment: "5-10L",
        average_payment_size: 35602.39594594595,
        unique_payers: 518.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6490.0,
        "%Unique_payers": 8.289676425269645,
      },
      {
        month: "Sep2023",
        sub_segment: "5-10L",
        average_payment_size: 36777.99646840149,
        unique_payers: 538.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6602.0,
        "%Unique_payers": 7.861254165404423,
      },
      {
        month: "Oct2023",
        sub_segment: "5-10L",
        average_payment_size: 46035.84026974952,
        unique_payers: 519.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6692.0,
        "%Unique_payers": 6.64973102211596,
      },
      {
        month: "Nov2023",
        sub_segment: "5-10L",
        average_payment_size: 34889.8851011236,
        unique_payers: 445.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "5-10L",
        active_recovery_accounts: 6825.0,
        "%Unique_payers": 7.384615384615385,
      },
      {
        month: "Dec2023",
        sub_segment: "5-10L",
        average_payment_size: 44406.80773809524,
        unique_payers: 504.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 6916.0,
        "%Unique_payers": 7.403123192596876,
      },
      {
        month: "Jan2024",
        sub_segment: "5-10L",
        average_payment_size: 41497.116953125,
        unique_payers: 512.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7021.0,
        "%Unique_payers": 7.135735650192281,
      },
      {
        month: "Feb2024",
        sub_segment: "5-10L",
        average_payment_size: 40711.885948103794,
        unique_payers: 501.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7167.0,
        "%Unique_payers": 8.05078833542626,
      },
      {
        month: "Mar2024",
        sub_segment: "5-10L",
        average_payment_size: 46468.45682842287,
        unique_payers: 577.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7269.0,
        "%Unique_payers": 6.424542578071262,
      },
      {
        month: "Apr2024",
        sub_segment: "5-10L",
        average_payment_size: 39561.80942184154,
        unique_payers: 467.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7391.0,
        "%Unique_payers": 7.360303071302936,
      },
      {
        month: "May2024",
        sub_segment: "5-10L",
        average_payment_size: 35416.83654411764,
        unique_payers: 544.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "5-10L",
        active_recovery_accounts: 7497.0,
        "%Unique_payers": 6.549286381219154,
      },
      {
        month: "Jun2024",
        sub_segment: "5-10L",
        average_payment_size: 36095.893279022406,
        unique_payers: 491.0,
      },
    ],
    [
      {
        month: "Feb2023",
        sub_segment: "10L+",
        active_recovery_accounts: 399.0,
        "%Unique_payers": 12.280701754385964,
      },
      {
        month: "Feb2023",
        sub_segment: "10L+",
        average_payment_size: 85340.61224489796,
        unique_payers: 49.0,
      },
    ],
    [
      {
        month: "Mar2023",
        sub_segment: "10L+",
        active_recovery_accounts: 407.0,
        "%Unique_payers": 9.828009828009828,
      },
      {
        month: "Mar2023",
        sub_segment: "10L+",
        average_payment_size: 73782.8195,
        unique_payers: 40.0,
      },
    ],
    [
      {
        month: "Apr2023",
        sub_segment: "10L+",
        active_recovery_accounts: 410.0,
        "%Unique_payers": 7.804878048780488,
      },
      {
        month: "Apr2023",
        sub_segment: "10L+",
        average_payment_size: 49934.875,
        unique_payers: 32.0,
      },
    ],
    [
      {
        month: "May2023",
        sub_segment: "10L+",
        active_recovery_accounts: 423.0,
        "%Unique_payers": 11.347517730496454,
      },
      {
        month: "May2023",
        sub_segment: "10L+",
        average_payment_size: 55260.660625,
        unique_payers: 48.0,
      },
    ],
    [
      {
        month: "Jun2023",
        sub_segment: "10L+",
        active_recovery_accounts: 428.0,
        "%Unique_payers": 7.943925233644859,
      },
      {
        month: "Jun2023",
        sub_segment: "10L+",
        average_payment_size: 74727.41176470589,
        unique_payers: 34.0,
      },
    ],
    [
      {
        month: "Jul2023",
        sub_segment: "10L+",
        active_recovery_accounts: 430.0,
        "%Unique_payers": 10.465116279069768,
      },
      {
        month: "Jul2023",
        sub_segment: "10L+",
        average_payment_size: 58989.15555555555,
        unique_payers: 45.0,
      },
    ],
    [
      {
        month: "Aug2023",
        sub_segment: "10L+",
        active_recovery_accounts: 444.0,
        "%Unique_payers": 10.135135135135135,
      },
      {
        month: "Aug2023",
        sub_segment: "10L+",
        average_payment_size: 101903.84444444445,
        unique_payers: 45.0,
      },
    ],
    [
      {
        month: "Sep2023",
        sub_segment: "10L+",
        active_recovery_accounts: 455.0,
        "%Unique_payers": 9.010989010989011,
      },
      {
        month: "Sep2023",
        sub_segment: "10L+",
        average_payment_size: 53163.439024390245,
        unique_payers: 41.0,
      },
    ],
    [
      {
        month: "Oct2023",
        sub_segment: "10L+",
        active_recovery_accounts: 465.0,
        "%Unique_payers": 8.38709677419355,
      },
      {
        month: "Oct2023",
        sub_segment: "10L+",
        average_payment_size: 57929.282051282054,
        unique_payers: 39.0,
      },
    ],
    [
      {
        month: "Nov2023",
        sub_segment: "10L+",
        active_recovery_accounts: 477.0,
        "%Unique_payers": 9.224318658280922,
      },
      {
        month: "Nov2023",
        sub_segment: "10L+",
        average_payment_size: 39903.63636363636,
        unique_payers: 44.0,
      },
    ],
    [
      {
        month: "Dec2023",
        sub_segment: "10L+",
        active_recovery_accounts: 483.0,
        "%Unique_payers": 9.523809523809524,
      },
      {
        month: "Dec2023",
        sub_segment: "10L+",
        average_payment_size: 63119.13043478261,
        unique_payers: 46.0,
      },
    ],
    [
      {
        month: "Jan2024",
        sub_segment: "10L+",
        active_recovery_accounts: 486.0,
        "%Unique_payers": 10.905349794238683,
      },
      {
        month: "Jan2024",
        sub_segment: "10L+",
        average_payment_size: 57539.49056603773,
        unique_payers: 53.0,
      },
    ],
    [
      {
        month: "Feb2024",
        sub_segment: "10L+",
        active_recovery_accounts: 493.0,
        "%Unique_payers": 8.113590263691684,
      },
      {
        month: "Feb2024",
        sub_segment: "10L+",
        average_payment_size: 71140.075,
        unique_payers: 40.0,
      },
    ],
    [
      {
        month: "Mar2024",
        sub_segment: "10L+",
        active_recovery_accounts: 502.0,
        "%Unique_payers": 9.362549800796813,
      },
      {
        month: "Mar2024",
        sub_segment: "10L+",
        average_payment_size: 72026.76595744681,
        unique_payers: 47.0,
      },
    ],
    [
      {
        month: "Apr2024",
        sub_segment: "10L+",
        active_recovery_accounts: 508.0,
        "%Unique_payers": 8.46456692913386,
      },
      {
        month: "Apr2024",
        sub_segment: "10L+",
        average_payment_size: 42118.976744186046,
        unique_payers: 43.0,
      },
    ],
    [
      {
        month: "May2024",
        sub_segment: "10L+",
        active_recovery_accounts: 525.0,
        "%Unique_payers": 10.285714285714285,
      },
      {
        month: "May2024",
        sub_segment: "10L+",
        average_payment_size: 73987.51851851853,
        unique_payers: 54.0,
      },
    ],
    [
      {
        month: "Jun2024",
        sub_segment: "10L+",
        active_recovery_accounts: 530.0,
        "%Unique_payers": 9.433962264150944,
      },
      {
        month: "Jun2024",
        sub_segment: "10L+",
        average_payment_size: 42344.36,
        unique_payers: 50.0,
      },
    ],
  ],
};

const Cohort: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [recoveryData, setRecoveryData] = useState<RecoveryItem[]>([]);
  const [uniqueData, setUniqueData] = useState<RecoveryItem[]>([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [selectedSubCategory, setselectedSubCategory] = useState("V1");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("Very Small");
    const [selectedCategoryButton, setselectedCategoryButton] = useState("all");
    const [selectedCategoryAll, setselectedCategoryAll] = useState("pos");
  // const [
  //   selectedSubCategoryUniquePayerAgency,
  //   setselectedSubCategoryUniquePayerAgency,
  // ] = useState("Very Small");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("UP");
  const [selectedSubCategoryTOS, setselectedSubCategoryTOS] =
    useState("<1Lakh");

  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");

  const [delinquencyGraphTitle, setdelinquencyGraphTitle] = useState(
    "Recovery % and Waiver % by Installments"
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
  let navigate = useNavigate();
  // const [loader, setLoader] = useState(true);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery" || buttonId === "writeOff") {
      // setdelinquencyGraphTitle("Monthly Recovery");
      setdelinquencyGraphTitle("Recovery % and Waiver % by Installments");
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
    setPortfolioRecoveryGraphData(recoveryStaticData);
    setPortfolioRecoveryUniquePayerGraphData(uniqueStaticData);
  }, []);

  // useEffect(() => {
  //   // fetchNewdata();
  //   // fetchNewWithoutCorsData();
  //   // fetchNewDataWithoutCorsUniquePayer();
  //   // fetchNewDataUniquePayer();
  // }, []);

  // const fetchNewdata = async () => {
  //   // setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/portfolio/recovery";
  //   // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setDashboardNewdata(data?.balance);
  //       // setPortfolioRecoveryGraphData(data);
  //       setPortfolioRecoveryFlowGraphData(data);
  //       setRecoveryData(data.flow_rate);
  //       console.log(data, "Portfolio Buckets graph data");
  //       // setLoader(false);
  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  //   // setLoader(false);
  // };

  // const fetchNewWithoutCorsData = async () => {
  //   // setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/portfolio/recovery";
  //   // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setDashboardNewdata(data?.balance);
  //       setPortfolioRecoveryGraphData(data);
  //       setPortfolioRecoveryFlowGraphData(data);
  //       setRecoveryData(data.flow_rate);
  //       console.log(data, "Portfolio Buckets graph data");
  //       // setLoader(false);
  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // };

  // const fetchNewDataUniquePayer = async () => {
  //   // setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/portfolio/unique_payer";
  //   // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setDashboardNewdata(data?.balance);
  //       setPortfolioRecoveryUniquePayerGraphData(data);
  //       setPortfolioUniqueFlowGraphData(data);
  //       setUniqueData(data.flow_rate);
  //       console.log(data, "Portfolio Buckets unique payer graph data");
  //       // setLoader(false);
  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  //   // setLoader(false);
  // };

  // const fetchNewDataWithoutCorsUniquePayer = async () => {
  //   // setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/portfolio/unique_payer";
  //   // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setDashboardNewdata(data?.balance);
  //       setPortfolioRecoveryUniquePayerGraphData(data);
  //       setPortfolioUniqueFlowGraphData(data);
  //       setUniqueData(data.flow_rate);
  //       console.log(data, "Portfolio Buckets unique payer graph data");
  //       // setLoader(false);
  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  //   // setLoader(false);
  // };

  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard /> */}
        <HomeDashboard />
      </div>
      <div className=" w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
        <div className="flex ">
          <div className=" flex w-full justify-between rounded-xl B1TabsContain">
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

        {/* <div className="flex">
          <div className=" flex justify-between rounded-xl B1TabsContain">
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
        </div> */}

        {selectedCategory === "mob" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategory === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "placement" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
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
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
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
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
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
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
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
            <div className="flex">
              <div className=" flex w-full justify-between  rounded-xl">
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

        {selectedCategory === "segments" && activeButton === "uniquePayer" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
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
      <div className="flex flex-col  items-start  justify-center gap-6 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
       {activeButton==="$Recovery"&& <div
          className={`w-full flex flex-col xl:flex-row 
          } items-center justify-between xl:gap-6`}
        >
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <CohortLHS
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
          <CohortRHS
            activeButton={activeButton}
            selectedCategoryButton={selectedCategoryButton}
            selectedCategoryAll={selectedCategoryAll}
            />
          </div>
        </div>}
        {activeButton==="uniquePayer"&&
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
        <CohortVintageGraph
          activeButton={activeButton}
          selectedCategory={selectedCategory}
          selectedSubCategoryTwo={selectedSubCategoryTwo}
          selectedSubCategory={selectedSubCategory}
        />
      </div>}
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

export default Cohort;
