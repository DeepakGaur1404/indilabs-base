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
const recoveryStaticData =
{
  "balance": {
      "portfolio": "Personal Loan",
      "date_range": "Jan 2019 - Apr 2023",
      "total_book": 2500000000,
      "total_delinquency": 127500000,
      "plus_2_delinquency": 75000000,
      "gross_wo": 50000000,
      "gross_recovery": 12500000
  },
  "all": [
      [
          {
              "month": "Feb2023",
              "sub_segment": null,
              "active_recovery_balance": 13565366084.657913,
              "average_recovery_balance": 237959.6555626136
          },
          {
              "month": "Feb2023",
              "sub_segment": null,
              "benchmark_recovery": 118934029.21736495,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 148919776.83,
              "%Recovery": 1.0977940138189453
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": null,
              "active_recovery_balance": 13556476574.627928,
              "average_recovery_balance": 238418.51168884855
          },
          {
              "month": "Mar2023",
              "sub_segment": null,
              "benchmark_recovery": 118856090.64651945,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 129239918.49000001,
              "%Recovery": 0.9533444606977248
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": null,
              "active_recovery_balance": 13673376816.157938,
              "average_recovery_balance": 238365.79007649422
          },
          {
              "month": "Apr2023",
              "sub_segment": null,
              "benchmark_recovery": 119881010.77435674,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 91310885.13999999,
              "%Recovery": 0.6678005467683534
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": null,
              "active_recovery_balance": 13977005860.997944,
              "average_recovery_balance": 238101.0163367167
          },
          {
              "month": "May2023",
              "sub_segment": null,
              "benchmark_recovery": 122543071.30887364,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 114584092.08,
              "%Recovery": 0.8198042786813199
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": null,
              "active_recovery_balance": 14093509560.777935,
              "average_recovery_balance": 238106.26053012224
          },
          {
              "month": "Jun2023",
              "sub_segment": null,
              "benchmark_recovery": 123564514.76621135,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 126315506.27999997,
              "%Recovery": 0.8962672195684634
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": null,
              "active_recovery_balance": 14068738906.647964,
              "average_recovery_balance": 238955.41318445487
          },
          {
              "month": "Jul2023",
              "sub_segment": null,
              "benchmark_recovery": 123347338.6366737,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 116755876.53,
              "%Recovery": 0.8298958229641239
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": null,
              "active_recovery_balance": 14157476340.327965,
              "average_recovery_balance": 240303.4259582104
          },
          {
              "month": "Aug2023",
              "sub_segment": null,
              "benchmark_recovery": 124125342.00673442,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 115118082.9,
              "%Recovery": 0.8131257304106027
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": null,
              "active_recovery_balance": 14334175795.317978,
              "average_recovery_balance": 241931.10086782862
          },
          {
              "month": "Sep2023",
              "sub_segment": null,
              "benchmark_recovery": 125674550.33707522,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 121058565.19000001,
              "%Recovery": 0.8445450015308295
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": null,
              "active_recovery_balance": 14473036198.847973,
              "average_recovery_balance": 243084.9728555732
          },
          {
              "month": "Oct2023",
              "sub_segment": null,
              "benchmark_recovery": 126892005.67056967,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 116725213.78,
              "%Recovery": 0.8065012218327148
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": null,
              "active_recovery_balance": 14627335134.837973,
              "average_recovery_balance": 244159.22707503
          },
          {
              "month": "Nov2023",
              "sub_segment": null,
              "benchmark_recovery": 128244817.97557616,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 100025527.54999998,
              "%Recovery": 0.6838260464257009
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": null,
              "active_recovery_balance": 14829085253.417969,
              "average_recovery_balance": 245307.5259866333
          },
          {
              "month": "Dec2023",
              "sub_segment": null,
              "benchmark_recovery": 130013657.41183272,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 112738894.97999999,
              "%Recovery": 0.7602552217711116
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": null,
              "active_recovery_balance": 14958138341.757946,
              "average_recovery_balance": 246427.32029255264
          },
          {
              "month": "Jan2024",
              "sub_segment": null,
              "benchmark_recovery": 131145127.33925158,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 106408875.31,
              "%Recovery": 0.711377799020238
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": null,
              "active_recovery_balance": 15140584901.717955,
              "average_recovery_balance": 247237.62474432884
          },
          {
              "month": "Feb2024",
              "sub_segment": null,
              "benchmark_recovery": 132744723.2777226,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 106096191.75,
              "%Recovery": 0.7007403771961386
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": null,
              "active_recovery_balance": 15330037670.89799,
              "average_recovery_balance": 248577.73784919962
          },
          {
              "month": "Mar2024",
              "sub_segment": null,
              "benchmark_recovery": 134405745.9913265,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 118404084.02999997,
              "%Recovery": 0.772366556246461
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": null,
              "active_recovery_balance": 15436735181.647957,
              "average_recovery_balance": 249232.85244115724
          },
          {
              "month": "Apr2024",
              "sub_segment": null,
              "benchmark_recovery": 135341213.91616997,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 81356821.93,
              "%Recovery": 0.5270338641730505
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": null,
              "active_recovery_balance": 15692101026.737938,
              "average_recovery_balance": 250196.92639770944
          },
          {
              "month": "May2024",
              "sub_segment": null,
              "benchmark_recovery": 137580127.9780174,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 100396115.69000001,
              "%Recovery": 0.6397875945288269
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": null,
              "active_recovery_balance": 15873597075.367949,
              "average_recovery_balance": 250672.68453300404
          },
          {
              "month": "Jun2024",
              "sub_segment": null,
              "benchmark_recovery": 139171390.33067968,
              "benchmark_rate": 0.8767476563118805,
              "recovery": 87351346.91,
              "%Recovery": 0.5502933361307787
          }
      ]
  ],
  "mob": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1103079059.4080026,
              "average_recovery_balance": 242115.68468129996
          },
          {
              "month": "Feb2023",
              "sub_segment": "V1",
              "benchmark_recovery": 28782246.822378885,
              "benchmark_rate": 2.60926418436641,
              "recovery": 36575764.74,
              "%Recovery": 3.315788150273597
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V1",
              "active_recovery_balance": 782606254.3080009,
              "average_recovery_balance": 269585.3442328629
          },
          {
              "month": "Mar2023",
              "sub_segment": "V1",
              "benchmark_recovery": 20420264.698270172,
              "benchmark_rate": 2.60926418436641,
              "recovery": 18247009.16,
              "%Recovery": 2.3315695548758986
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V1",
              "active_recovery_balance": 985448370.0600002,
              "average_recovery_balance": 267204.0048969632
          },
          {
              "month": "Apr2023",
              "sub_segment": "V1",
              "benchmark_recovery": 25712951.375398144,
              "benchmark_rate": 2.60926418436641,
              "recovery": 14374206.0,
              "%Recovery": 1.4586462808929108
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1116296749.07,
              "average_recovery_balance": 261183.1420379036
          },
          {
              "month": "May2023",
              "sub_segment": "V1",
              "benchmark_recovery": 29127131.264730085,
              "benchmark_rate": 2.60926418436641,
              "recovery": 31595513.620000005,
              "%Recovery": 2.830386601620277
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1185715286.4000006,
              "average_recovery_balance": 260025.2821052633
          },
          {
              "month": "Jun2023",
              "sub_segment": "V1",
              "benchmark_recovery": 30938444.296592817,
              "benchmark_rate": 2.60926418436641,
              "recovery": 32708875.589999996,
              "%Recovery": 2.758577540929642
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1211715793.7500005,
              "average_recovery_balance": 265203.7193587219
          },
          {
              "month": "Jul2023",
              "sub_segment": "V1",
              "benchmark_recovery": 31616866.22262992,
              "benchmark_rate": 2.60926418436641,
              "recovery": 33096535.57,
              "%Recovery": 2.7313777488674402
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1298932953.3900027,
              "average_recovery_balance": 275899.098001275
          },
          {
              "month": "Aug2023",
              "sub_segment": "V1",
              "benchmark_recovery": 33892592.331738174,
              "benchmark_rate": 2.60926418436641,
              "recovery": 33541208.810000006,
              "%Recovery": 2.582212478516534
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1364586578.3900003,
              "average_recovery_balance": 285897.0413555417
          },
          {
              "month": "Sep2023",
              "sub_segment": "V1",
              "benchmark_recovery": 35605668.854601346,
              "benchmark_rate": 2.60926418436641,
              "recovery": 33039550.61,
              "%Recovery": 2.4212132182174564
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1421055675.3700001,
              "average_recovery_balance": 292639.14237438224
          },
          {
              "month": "Oct2023",
              "sub_segment": "V1",
              "benchmark_recovery": 37079096.777335614,
              "benchmark_rate": 2.60926418436641,
              "recovery": 36755969.43,
              "%Recovery": 2.5865256419619067
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1463335043.7799993,
              "average_recovery_balance": 298031.5771446027
          },
          {
              "month": "Nov2023",
              "sub_segment": "V1",
              "benchmark_recovery": 38182277.19463405,
              "benchmark_rate": 2.60926418436641,
              "recovery": 26777932.340000004,
              "%Recovery": 1.8299249002353457
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V1",
              "active_recovery_balance": 1451540664.4199986,
              "average_recovery_balance": 298363.9597985609
          },
          {
              "month": "Dec2023",
              "sub_segment": "V1",
              "benchmark_recovery": 37874530.67822525,
              "benchmark_rate": 2.60926418436641,
              "recovery": 37137188.650000006,
              "%Recovery": 2.5584669834130445
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1387065164.1299987,
              "average_recovery_balance": 297016.09510278347
          },
          {
              "month": "Jan2024",
              "sub_segment": "V1",
              "benchmark_recovery": 36192194.54146722,
              "benchmark_rate": 2.60926418436641,
              "recovery": 32490396.53,
              "%Recovery": 2.342384292404804
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1397964327.12,
              "average_recovery_balance": 296996.88275334606
          },
          {
              "month": "Feb2024",
              "sub_segment": "V1",
              "benchmark_recovery": 36476582.49776103,
              "benchmark_rate": 2.60926418436641,
              "recovery": 32227848.1,
              "%Recovery": 2.305341236166865
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1400635376.8899987,
              "average_recovery_balance": 297944.1346288021
          },
          {
              "month": "Mar2024",
              "sub_segment": "V1",
              "benchmark_recovery": 36546277.24275622,
              "benchmark_rate": 2.60926418436641,
              "recovery": 30984171.69,
              "%Recovery": 2.212151156627068
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1376580130.6199994,
              "average_recovery_balance": 299582.1829423285
          },
          {
              "month": "Apr2024",
              "sub_segment": "V1",
              "benchmark_recovery": 35918612.31737199,
              "benchmark_rate": 2.60926418436641,
              "recovery": 23619897.46,
              "%Recovery": 1.715838906476284
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1446170275.2600002,
              "average_recovery_balance": 297565.90025925933
          },
          {
              "month": "May2024",
              "sub_segment": "V1",
              "benchmark_recovery": 37734403.037312314,
              "benchmark_rate": 2.60926418436641,
              "recovery": 28993351.11,
              "%Recovery": 2.004836609215151
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V1",
              "active_recovery_balance": 1441788742.180001,
              "average_recovery_balance": 293942.6589561674
          },
          {
              "month": "Jun2024",
              "sub_segment": "V1",
              "benchmark_recovery": 37620077.263929725,
              "benchmark_rate": 2.60926418436641,
              "recovery": 27291701.71,
              "%Recovery": 1.8929057296379381
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V2",
              "active_recovery_balance": 755066777.0599998,
              "average_recovery_balance": 236623.87247257907
          },
          {
              "month": "Feb2023",
              "sub_segment": "V2",
              "benchmark_recovery": 13651023.535397483,
              "benchmark_rate": 1.807922683150014,
              "recovery": 14081542.64,
              "%Recovery": 1.8649400381287125
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V2",
              "active_recovery_balance": 1092372139.080002,
              "average_recovery_balance": 232024.66845369627
          },
          {
              "month": "Mar2023",
              "sub_segment": "V2",
              "benchmark_recovery": 19749243.686838377,
              "benchmark_rate": 1.807922683150014,
              "recovery": 25612022.730000004,
              "%Recovery": 2.344624310133953
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V2",
              "active_recovery_balance": 961064355.3480011,
              "average_recovery_balance": 233324.67961835425
          },
          {
              "month": "Apr2023",
              "sub_segment": "V2",
              "benchmark_recovery": 17375300.48000597,
              "benchmark_rate": 1.807922683150014,
              "recovery": 14664410.690000001,
              "%Recovery": 1.5258510638124774
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V2",
              "active_recovery_balance": 985887593.5280008,
              "average_recovery_balance": 237792.47311336247
          },
          {
              "month": "May2023",
              "sub_segment": "V2",
              "benchmark_recovery": 17824085.433754537,
              "benchmark_rate": 1.807922683150014,
              "recovery": 18134287.62,
              "%Recovery": 1.8393869381301793
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V2",
              "active_recovery_balance": 983260120.2780008,
              "average_recovery_balance": 240936.07455966694
          },
          {
              "month": "Jun2023",
              "sub_segment": "V2",
              "benchmark_recovery": 17776582.748874087,
              "benchmark_rate": 1.807922683150014,
              "recovery": 18161508.82,
              "%Recovery": 1.8470706220511748
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V2",
              "active_recovery_balance": 705730807.188001,
              "average_recovery_balance": 268236.7188095785
          },
          {
              "month": "Jul2023",
              "sub_segment": "V2",
              "benchmark_recovery": 12759067.34512956,
              "benchmark_rate": 1.807922683150014,
              "recovery": 8481530.73,
              "%Recovery": 1.201808202733112
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V2",
              "active_recovery_balance": 876797271.4499997,
              "average_recovery_balance": 268544.34041347617
          },
          {
              "month": "Aug2023",
              "sub_segment": "V2",
              "benchmark_recovery": 15851816.755784946,
              "benchmark_rate": 1.807922683150014,
              "recovery": 11100818.969999999,
              "%Recovery": 1.2660644976280626
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V2",
              "active_recovery_balance": 958360660.03,
              "average_recovery_balance": 266581.54660083447
          },
          {
              "month": "Sep2023",
              "sub_segment": "V2",
              "benchmark_recovery": 17326419.75906856,
              "benchmark_rate": 1.807922683150014,
              "recovery": 14864585.190000001,
              "%Recovery": 1.5510429225605618
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V2",
              "active_recovery_balance": 1006636672.7500012,
              "average_recovery_balance": 268651.3671603953
          },
          {
              "month": "Oct2023",
              "sub_segment": "V2",
              "benchmark_recovery": 18199212.743553847,
              "benchmark_rate": 1.807922683150014,
              "recovery": 14432650.34,
              "%Recovery": 1.4337497063932576
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V2",
              "active_recovery_balance": 1044003343.5100006,
              "average_recovery_balance": 271875.8707057293
          },
          {
              "month": "Nov2023",
              "sub_segment": "V2",
              "benchmark_recovery": 18874773.26016186,
              "benchmark_rate": 1.807922683150014,
              "recovery": 11807697.67,
              "%Recovery": 1.1310019018044355
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V2",
              "active_recovery_balance": 1153981890.0800014,
              "average_recovery_balance": 284231.9926305422
          },
          {
              "month": "Dec2023",
              "sub_segment": "V2",
              "benchmark_recovery": 20863100.350199606,
              "benchmark_rate": 1.807922683150014,
              "recovery": 13344069.89,
              "%Recovery": 1.156350026348759
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1209730645.450001,
              "average_recovery_balance": 291080.52104186744
          },
          {
              "month": "Jan2024",
              "sub_segment": "V2",
              "benchmark_recovery": 21870994.74410764,
              "benchmark_rate": 1.807922683150014,
              "recovery": 17047930.24,
              "%Recovery": 1.409233559893693
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1266113159.5600007,
              "average_recovery_balance": 297139.91071579454
          },
          {
              "month": "Feb2024",
              "sub_segment": "V2",
              "benchmark_recovery": 22890347.006032582,
              "benchmark_rate": 1.807922683150014,
              "recovery": 14730071.8,
              "%Recovery": 1.1634087908160589
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1309381695.7700007,
              "average_recovery_balance": 302817.2284389456
          },
          {
              "month": "Mar2024",
              "sub_segment": "V2",
              "benchmark_recovery": 23672608.68684015,
              "benchmark_rate": 1.807922683150014,
              "recovery": 17021834.700000003,
              "%Recovery": 1.2999902744165115
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1271511146.1099997,
              "average_recovery_balance": 301305.9587938388
          },
          {
              "month": "Apr2024",
              "sub_segment": "V2",
              "benchmark_recovery": 22987938.4293034,
              "benchmark_rate": 1.807922683150014,
              "recovery": 12361221.14,
              "%Recovery": 0.972167737405789
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1230017462.8699996,
              "average_recovery_balance": 297464.9245151148
          },
          {
              "month": "May2024",
              "sub_segment": "V2",
              "benchmark_recovery": 22237764.717933025,
              "benchmark_rate": 1.807922683150014,
              "recovery": 12842857.86,
              "%Recovery": 1.0441199615193886
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V2",
              "active_recovery_balance": 1236343333.2599998,
              "average_recovery_balance": 297483.95891722804
          },
          {
              "month": "Jun2024",
              "sub_segment": "V2",
              "benchmark_recovery": 22352131.563620508,
              "benchmark_rate": 1.807922683150014,
              "recovery": 10735983.149999999,
              "%Recovery": 0.8683658382895368
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V3",
              "active_recovery_balance": 805530396.8299983,
              "average_recovery_balance": 225828.5385001397
          },
          {
              "month": "Feb2023",
              "sub_segment": "V3",
              "benchmark_recovery": 11783911.87834074,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 15896200.690000001,
              "%Recovery": 1.9733830967218966
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V3",
              "active_recovery_balance": 756935600.2099987,
              "average_recovery_balance": 224609.97038872365
          },
          {
              "month": "Mar2023",
              "sub_segment": "V3",
              "benchmark_recovery": 11073030.199176973,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 11509933.959999999,
              "%Recovery": 1.5205961982507847
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V3",
              "active_recovery_balance": 714224569.7399987,
              "average_recovery_balance": 222361.32308219137
          },
          {
              "month": "Apr2023",
              "sub_segment": "V3",
              "benchmark_recovery": 10448220.730444007,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 7823246.0,
              "%Recovery": 1.0953482043957015
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V3",
              "active_recovery_balance": 687976608.3999999,
              "average_recovery_balance": 229249.11976007992
          },
          {
              "month": "May2023",
              "sub_segment": "V3",
              "benchmark_recovery": 10064245.569936294,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 8728844.67,
              "%Recovery": 1.2687705604265136
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V3",
              "active_recovery_balance": 693431724.3900001,
              "average_recovery_balance": 235540.66725203808
          },
          {
              "month": "Jun2023",
              "sub_segment": "V3",
              "benchmark_recovery": 10144047.159504188,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 8299677.27,
              "%Recovery": 1.1968989848713776
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V3",
              "active_recovery_balance": 989515194.5100014,
              "average_recovery_balance": 232226.04893452275
          },
          {
              "month": "Jul2023",
              "sub_segment": "V3",
              "benchmark_recovery": 14475381.56259781,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 15730934.510000002,
              "%Recovery": 1.5897617941874873
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V3",
              "active_recovery_balance": 854281417.8880007,
              "average_recovery_balance": 235274.41968824036
          },
          {
              "month": "Aug2023",
              "sub_segment": "V3",
              "benchmark_recovery": 12497078.927514024,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 13452489.39,
              "%Recovery": 1.5747140354823532
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V3",
              "active_recovery_balance": 856524484.8380009,
              "average_recovery_balance": 242779.04899036305
          },
          {
              "month": "Sep2023",
              "sub_segment": "V3",
              "benchmark_recovery": 12529892.218458772,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 13486643.780000001,
              "%Recovery": 1.5745777288025575
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V3",
              "active_recovery_balance": 860758743.8179992,
              "average_recovery_balance": 247486.70035020105
          },
          {
              "month": "Oct2023",
              "sub_segment": "V3",
              "benchmark_recovery": 12591834.182271348,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 10278942.969999999,
              "%Recovery": 1.1941723559387276
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V3",
              "active_recovery_balance": 643374801.508,
              "average_recovery_balance": 275653.2997035133
          },
          {
              "month": "Nov2023",
              "sub_segment": "V3",
              "benchmark_recovery": 9411776.38429361,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 3631163.8,
              "%Recovery": 0.56439322638825
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V3",
              "active_recovery_balance": 806580041.8399997,
              "average_recovery_balance": 273509.67848084087
          },
          {
              "month": "Dec2023",
              "sub_segment": "V3",
              "benchmark_recovery": 11799266.884619923,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 7319653.8,
              "%Recovery": 0.9074925513036673
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V3",
              "active_recovery_balance": 879840720.2299984,
              "average_recovery_balance": 270886.9212530783
          },
          {
              "month": "Jan2024",
              "sub_segment": "V3",
              "benchmark_recovery": 12870979.859937226,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 7645515.109999999,
              "%Recovery": 0.8689658178131825
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V3",
              "active_recovery_balance": 921874070.8800008,
              "average_recovery_balance": 271458.79590106034
          },
          {
              "month": "Feb2024",
              "sub_segment": "V3",
              "benchmark_recovery": 13485875.712359738,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 6631998.74,
              "%Recovery": 0.7194039782103037
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V3",
              "active_recovery_balance": 961834020.1300014,
              "average_recovery_balance": 274574.370576649
          },
          {
              "month": "Mar2024",
              "sub_segment": "V3",
              "benchmark_recovery": 14070440.270665726,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 8589502.44,
              "%Recovery": 0.8930337522100792
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V3",
              "active_recovery_balance": 1059362595.920001,
              "average_recovery_balance": 285465.53379682056
          },
          {
              "month": "Apr2024",
              "sub_segment": "V3",
              "benchmark_recovery": 15497162.523795024,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 7646390.07,
              "%Recovery": 0.7217915848123286
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V3",
              "active_recovery_balance": 1110379601.6900012,
              "average_recovery_balance": 291208.9173065831
          },
          {
              "month": "May2024",
              "sub_segment": "V3",
              "benchmark_recovery": 16243478.12238237,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 11566240.32,
              "%Recovery": 1.0416474062020002
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V3",
              "active_recovery_balance": 1165064029.5800014,
              "average_recovery_balance": 296755.9932705047
          },
          {
              "month": "Jun2024",
              "sub_segment": "V3",
              "benchmark_recovery": 17043443.563673142,
              "benchmark_rate": 1.4628761279169524,
              "recovery": 8461834.45,
              "%Recovery": 0.7262978029671416
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V4",
              "active_recovery_balance": 5838683489.620028,
              "average_recovery_balance": 280530.605372605
          },
          {
              "month": "Feb2023",
              "sub_segment": "V4",
              "benchmark_recovery": 48147108.43395839,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 57517544.55999999,
              "%Recovery": 0.9851115351988902
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V4",
              "active_recovery_balance": 5385585813.570026,
              "average_recovery_balance": 276595.23463458614
          },
          {
              "month": "Mar2023",
              "sub_segment": "V4",
              "benchmark_recovery": 44410762.221882135,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 49643423.269999996,
              "%Recovery": 0.9217831632152954
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V4",
              "active_recovery_balance": 5228801199.520022,
              "average_recovery_balance": 276203.11655591475
          },
          {
              "month": "Apr2023",
              "sub_segment": "V4",
              "benchmark_recovery": 43117880.73124097,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 35632003.0,
              "%Recovery": 0.6814564493917045
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V4",
              "active_recovery_balance": 5078671016.590022,
              "average_recovery_balance": 273782.80412884214
          },
          {
              "month": "May2023",
              "sub_segment": "V4",
              "benchmark_recovery": 41879873.18902855,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 36418564.7,
              "%Recovery": 0.7170884780887532
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V4",
              "active_recovery_balance": 4858548024.070016,
              "average_recovery_balance": 274168.9534490162
          },
          {
              "month": "Jun2023",
              "sub_segment": "V4",
              "benchmark_recovery": 40064689.06258812,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 41295523.9,
              "%Recovery": 0.8499560711433836
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V4",
              "active_recovery_balance": 4669037857.320014,
              "average_recovery_balance": 274278.20344945154
          },
          {
              "month": "Jul2023",
              "sub_segment": "V4",
              "benchmark_recovery": 38501945.24130184,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 35615199.45,
              "%Recovery": 0.7627952597163735
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V4",
              "active_recovery_balance": 4469445920.340003,
              "average_recovery_balance": 273762.45990077197
          },
          {
              "month": "Aug2023",
              "sub_segment": "V4",
              "benchmark_recovery": 36856064.85586828,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 34244112.79,
              "%Recovery": 0.7661825067433629
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V4",
              "active_recovery_balance": 2872892045.8899965,
              "average_recovery_balance": 245252.8637433837
          },
          {
              "month": "Sep2023",
              "sub_segment": "V4",
              "benchmark_recovery": 23690519.463579275,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 26198651.729999997,
              "%Recovery": 0.9119260769815625
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V4",
              "active_recovery_balance": 2383586898.5099998,
              "average_recovery_balance": 237764.27915311718
          },
          {
              "month": "Oct2023",
              "sub_segment": "V4",
              "benchmark_recovery": 19655598.230037317,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 22563510.22,
              "%Recovery": 0.9466199966992871
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V4",
              "active_recovery_balance": 2387350502.510003,
              "average_recovery_balance": 232097.07393641875
          },
          {
              "month": "Nov2023",
              "sub_segment": "V4",
              "benchmark_recovery": 19686633.76231318,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 23976142.120000005,
              "%Recovery": 1.0042992051142916
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V4",
              "active_recovery_balance": 2121281259.7280016,
              "average_recovery_balance": 231353.6110511508
          },
          {
              "month": "Dec2023",
              "sub_segment": "V4",
              "benchmark_recovery": 17492566.43430326,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 19257621.759999998,
              "%Recovery": 0.9078297218573119
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V4",
              "active_recovery_balance": 2056994102.7879996,
              "average_recovery_balance": 235812.69090771518
          },
          {
              "month": "Jan2024",
              "sub_segment": "V4",
              "benchmark_recovery": 16962439.95603057,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 19459978.93,
              "%Recovery": 0.94603960719306
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V4",
              "active_recovery_balance": 1999164673.0079994,
              "average_recovery_balance": 237882.51701665868
          },
          {
              "month": "Feb2024",
              "sub_segment": "V4",
              "benchmark_recovery": 16485565.360714419,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 19745908.62,
              "%Recovery": 0.9877079605598348
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V4",
              "active_recovery_balance": 2014781701.9680018,
              "average_recovery_balance": 243331.12342608717
          },
          {
              "month": "Mar2024",
              "sub_segment": "V4",
              "benchmark_recovery": 16614346.923902465,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 18894071.000000004,
              "%Recovery": 0.9377726123651323
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V4",
              "active_recovery_balance": 2026545470.4680014,
              "average_recovery_balance": 245641.8752082426
          },
          {
              "month": "Apr2024",
              "sub_segment": "V4",
              "benchmark_recovery": 16711353.627308873,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 11267437.120000001,
              "%Recovery": 0.5559923171819061
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V4",
              "active_recovery_balance": 2105465607.6479998,
              "average_recovery_balance": 252423.6431660472
          },
          {
              "month": "May2024",
              "sub_segment": "V4",
              "benchmark_recovery": 17362146.97981436,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 13895707.04,
              "%Recovery": 0.6599826180738612
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V4",
              "active_recovery_balance": 2170520584.237998,
              "average_recovery_balance": 257170.6853362557
          },
          {
              "month": "Jun2024",
              "sub_segment": "V4",
              "benchmark_recovery": 17898605.073084135,
              "benchmark_rate": 0.8246226828283122,
              "recovery": 13821955.32,
              "%Recovery": 0.6368036967892869
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V5",
              "active_recovery_balance": 4301417778.440001,
              "average_recovery_balance": 230874.22996296498
          },
          {
              "month": "Feb2023",
              "sub_segment": "V5",
              "benchmark_recovery": 17645305.891923405,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 22048847.689999998,
              "%Recovery": 0.5125948890739107
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V5",
              "active_recovery_balance": 4671436741.729999,
              "average_recovery_balance": 237853.1945891038
          },
          {
              "month": "Mar2023",
              "sub_segment": "V5",
              "benchmark_recovery": 19163200.253589503,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 21610999.470000003,
              "%Recovery": 0.4626199746418204
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V5",
              "active_recovery_balance": 4793600465.489996,
              "average_recovery_balance": 239177.74999950084
          },
          {
              "month": "Apr2023",
              "sub_segment": "V5",
              "benchmark_recovery": 19664341.129848067,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 15864627.45,
              "%Recovery": 0.330954312196278
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V5",
              "active_recovery_balance": 4965527657.199994,
              "average_recovery_balance": 240916.38723011955
          },
          {
              "month": "May2023",
              "sub_segment": "V5",
              "benchmark_recovery": 20369622.050029345,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 16970822.5,
              "%Recovery": 0.3417727917675049
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V5",
              "active_recovery_balance": 5112799622.309993,
              "average_recovery_balance": 241465.9309676959
          },
          {
              "month": "Jun2023",
              "sub_segment": "V5",
              "benchmark_recovery": 20973762.128376503,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 22545277.81,
              "%Recovery": 0.4409575863607561
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V5",
              "active_recovery_balance": 5112385179.019989,
              "average_recovery_balance": 241743.19931057259
          },
          {
              "month": "Jul2023",
              "sub_segment": "V5",
              "benchmark_recovery": 20972061.996233184,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 19747718.53,
              "%Recovery": 0.38627211836541453
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V5",
              "active_recovery_balance": 5154365077.629989,
              "average_recovery_balance": 243440.47029849282
          },
          {
              "month": "Aug2023",
              "sub_segment": "V5",
              "benchmark_recovery": 21144272.22793823,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 18843033.92,
              "%Recovery": 0.3655742974392523
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V5",
              "active_recovery_balance": 6634621047.289997,
              "average_recovery_balance": 263906.9628993634
          },
          {
              "month": "Sep2023",
              "sub_segment": "V5",
              "benchmark_recovery": 27216588.54976023,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 29494198.340000004,
              "%Recovery": 0.44454985642393724
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V5",
              "active_recovery_balance": 7004048909.049982,
              "average_recovery_balance": 267085.4526025771
          },
          {
              "month": "Oct2023",
              "sub_segment": "V5",
              "benchmark_recovery": 28732058.090623632,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 29407836.12,
              "%Recovery": 0.4198690857512706
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V5",
              "active_recovery_balance": 7134135065.569981,
              "average_recovery_balance": 268019.19999887224
          },
          {
              "month": "Nov2023",
              "sub_segment": "V5",
              "benchmark_recovery": 29265698.425586045,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 29261342.819999997,
              "%Recovery": 0.41015964165324037
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V5",
              "active_recovery_balance": 7182681675.12999,
              "average_recovery_balance": 268340.93006799376
          },
          {
              "month": "Dec2023",
              "sub_segment": "V5",
              "benchmark_recovery": 29464846.66456803,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 31196188.860000003,
              "%Recovery": 0.4343250929247874
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V5",
              "active_recovery_balance": 7151537550.14999,
              "average_recovery_balance": 269148.22739640926
          },
          {
              "month": "Jan2024",
              "sub_segment": "V5",
              "benchmark_recovery": 29337087.018722214,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 25285143.79,
              "%Recovery": 0.3535623439391672
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V5",
              "active_recovery_balance": 7133359757.75001,
              "average_recovery_balance": 269865.68901562475
          },
          {
              "month": "Feb2024",
              "sub_segment": "V5",
              "benchmark_recovery": 29262517.952461027,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 27909724.03,
              "%Recovery": 0.3912563641512346
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V5",
              "active_recovery_balance": 7063202319.660026,
              "average_recovery_balance": 270248.02263774205
          },
          {
              "month": "Mar2024",
              "sub_segment": "V5",
              "benchmark_recovery": 28974717.622556683,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 37147695.42,
              "%Recovery": 0.5259327673030332
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V5",
              "active_recovery_balance": 6881866913.320031,
              "average_recovery_balance": 272419.71788932115
          },
          {
              "month": "Apr2024",
              "sub_segment": "V5",
              "benchmark_recovery": 28230842.258962993,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 22830756.36,
              "%Recovery": 0.3317523667278494
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V5",
              "active_recovery_balance": 6876087563.960039,
              "average_recovery_balance": 272298.73134642956
          },
          {
              "month": "May2024",
              "sub_segment": "V5",
              "benchmark_recovery": 28207134.17187029,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 27944262.69,
              "%Recovery": 0.4063977142534598
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V5",
              "active_recovery_balance": 6908866364.580034,
              "average_recovery_balance": 271574.935714624
          },
          {
              "month": "Jun2024",
              "sub_segment": "V5",
              "benchmark_recovery": 28341599.595482305,
              "benchmark_rate": 0.41022069468273886,
              "recovery": 23729023.42,
              "%Recovery": 0.3434575539288551
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V6",
              "active_recovery_balance": 641109171.0400006,
              "average_recovery_balance": 198485.81146749243
          },
          {
              "month": "Feb2023",
              "sub_segment": "V6",
              "benchmark_recovery": 1810118.952745054,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2354339.49,
              "%Recovery": 0.3672291079818458
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V6",
              "active_recovery_balance": 738033439.7500007,
              "average_recovery_balance": 200880.0870304847
          },
          {
              "month": "Mar2023",
              "sub_segment": "V6",
              "benchmark_recovery": 2083776.6442866079,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2147853.44,
              "%Recovery": 0.29102386481668874
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V6",
              "active_recovery_balance": 851791100.4300013,
              "average_recovery_balance": 201894.07452713943
          },
          {
              "month": "Apr2023",
              "sub_segment": "V6",
              "benchmark_recovery": 2404962.031921567,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2541457.0,
              "%Recovery": 0.2983662307245311
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V6",
              "active_recovery_balance": 994404338.8400018,
              "average_recovery_balance": 203896.72725856098
          },
          {
              "month": "May2023",
              "sub_segment": "V6",
              "benchmark_recovery": 2807618.7671848102,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2317435.0599999996,
              "%Recovery": 0.23304756118656392
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1100873465.3300025,
              "average_recovery_balance": 204205.79954182944
          },
          {
              "month": "Jun2023",
              "sub_segment": "V6",
              "benchmark_recovery": 3108225.5787035557,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2916219.8099999996,
              "%Recovery": 0.26490054505272514
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1212129954.7200034,
              "average_recovery_balance": 206707.01819918203
          },
          {
              "month": "Jul2023",
              "sub_segment": "V6",
              "benchmark_recovery": 3422349.1151584014,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 3359746.29,
              "%Recovery": 0.2771770697454702
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1326028332.850004,
              "average_recovery_balance": 208363.9743636084
          },
          {
              "month": "Aug2023",
              "sub_segment": "V6",
              "benchmark_recovery": 3743931.8069261555,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 3404627.76,
              "%Recovery": 0.2567537718204337
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1460800029.2700026,
              "average_recovery_balance": 209193.7604568241
          },
          {
              "month": "Sep2023",
              "sub_segment": "V6",
              "benchmark_recovery": 4124448.5940869204,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 3751043.06,
              "%Recovery": 0.2567800509885318
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1598428500.450003,
              "average_recovery_balance": 210181.26238658815
          },
          {
              "month": "Oct2023",
              "sub_segment": "V6",
              "benchmark_recovery": 4513031.24954343,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2745999.6100000003,
              "%Recovery": 0.17179370921044787
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1745535378.2000031,
              "average_recovery_balance": 212016.92921170936
          },
          {
              "month": "Nov2023",
              "sub_segment": "V6",
              "benchmark_recovery": 4928375.405457573,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 4043946.45,
              "%Recovery": 0.23167370312311397
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V6",
              "active_recovery_balance": 1893587629.7200012,
              "average_recovery_balance": 213241.85019369383
          },
          {
              "month": "Dec2023",
              "sub_segment": "V6",
              "benchmark_recovery": 5346388.7463651635,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 4035125.87,
              "%Recovery": 0.21309422424758134
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2043290321.8600018,
              "average_recovery_balance": 215105.83449415746
          },
          {
              "month": "Jan2024",
              "sub_segment": "V6",
              "benchmark_recovery": 5769061.970458952,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 3808934.7199999997,
              "%Recovery": 0.18641182211114946
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2180873507.4699993,
              "average_recovery_balance": 215735.83019784343
          },
          {
              "month": "Feb2024",
              "sub_segment": "V6",
              "benchmark_recovery": 6157516.765837567,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 4369188.46,
              "%Recovery": 0.20034121396928858
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2269667907.9099965,
              "average_recovery_balance": 215891.55406734487
          },
          {
              "month": "Mar2024",
              "sub_segment": "V6",
              "benchmark_recovery": 6408220.443767086,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 4609915.0,
              "%Recovery": 0.2031096700946439
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2439654412.989995,
              "average_recovery_balance": 213686.11833143514
          },
          {
              "month": "Apr2024",
              "sub_segment": "V6",
              "benchmark_recovery": 6888163.343440565,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 3433512.29,
              "%Recovery": 0.14073765004248906
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2473722363.5699964,
              "average_recovery_balance": 212701.83693637114
          },
          {
              "month": "May2024",
              "sub_segment": "V6",
              "benchmark_recovery": 6984351.39660163,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 4195112.66,
              "%Recovery": 0.16958704508559921
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V6",
              "active_recovery_balance": 2428154588.129997,
              "average_recovery_balance": 211530.1496759297
          },
          {
              "month": "Jun2024",
              "sub_segment": "V6",
              "benchmark_recovery": 6855694.534893396,
              "benchmark_rate": 0.28234176556992596,
              "recovery": 2949247.55,
              "%Recovery": 0.12146045249414347
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V7",
              "active_recovery_balance": 120479412.25999996,
              "average_recovery_balance": 39907.05937727723
          },
          {
              "month": "Feb2023",
              "sub_segment": "V7",
              "benchmark_recovery": 398409.53866847657,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 445537.02,
              "%Recovery": 0.36980344744586835
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V7",
              "active_recovery_balance": 129506585.98,
              "average_recovery_balance": 41857.332249515195
          },
          {
              "month": "Mar2023",
              "sub_segment": "V7",
              "benchmark_recovery": 428261.21249224973,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 468676.45999999996,
              "%Recovery": 0.3618939194894526
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V7",
              "active_recovery_balance": 138446755.56999996,
              "average_recovery_balance": 43923.46306154821
          },
          {
              "month": "Apr2023",
              "sub_segment": "V7",
              "benchmark_recovery": 457825.1751241656,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 410935.0,
              "%Recovery": 0.2968180787683591
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V7",
              "active_recovery_balance": 148241897.37000003,
              "average_recovery_balance": 45711.346706753015
          },
          {
              "month": "May2023",
              "sub_segment": "V7",
              "benchmark_recovery": 490216.4181799386,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 418623.91000000003,
              "%Recovery": 0.28239243926779206
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V7",
              "active_recovery_balance": 158881318.00000003,
              "average_recovery_balance": 47870.23742090992
          },
          {
              "month": "Jun2023",
              "sub_segment": "V7",
              "benchmark_recovery": 525399.5800611615,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 388423.07999999996,
              "%Recovery": 0.24447372723834015
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V7",
              "active_recovery_balance": 168224120.14000008,
              "average_recovery_balance": 49770.44974556215
          },
          {
              "month": "Jul2023",
              "sub_segment": "V7",
              "benchmark_recovery": 556294.9954740079,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 724211.4499999998,
              "%Recovery": 0.43050393094479794
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V7",
              "active_recovery_balance": 177625366.78000003,
              "average_recovery_balance": 51515.47760440836
          },
          {
              "month": "Aug2023",
              "sub_segment": "V7",
              "benchmark_recovery": 587383.6791461019,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 531791.26,
              "%Recovery": 0.29938925370870945
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V7",
              "active_recovery_balance": 186390949.61000007,
              "average_recovery_balance": 53012.21547497158
          },
          {
              "month": "Sep2023",
              "sub_segment": "V7",
              "benchmark_recovery": 616370.3063710432,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 223892.48,
              "%Recovery": 0.1201198236655091
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V7",
              "active_recovery_balance": 198520798.90000007,
              "average_recovery_balance": 55083.46251387349
          },
          {
              "month": "Oct2023",
              "sub_segment": "V7",
              "benchmark_recovery": 656482.1194110834,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 540305.0900000001,
              "%Recovery": 0.27216548240477584
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V7",
              "active_recovery_balance": 209600999.76000002,
              "average_recovery_balance": 56833.242885032545
          },
          {
              "month": "Nov2023",
              "sub_segment": "V7",
              "benchmark_recovery": 693122.8834236106,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 527302.35,
              "%Recovery": 0.25157434869288714
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V7",
              "active_recovery_balance": 219432092.49999997,
              "average_recovery_balance": 58344.082026056894
          },
          {
              "month": "Dec2023",
              "sub_segment": "V7",
              "benchmark_recovery": 725633.0115000803,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 449046.15,
              "%Recovery": 0.20464014396617947
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V7",
              "active_recovery_balance": 229679837.15000004,
              "average_recovery_balance": 59921.68983824681
          },
          {
              "month": "Jan2024",
              "sub_segment": "V7",
              "benchmark_recovery": 759520.9525334247,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 670975.99,
              "%Recovery": 0.292135347327766
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V7",
              "active_recovery_balance": 241235405.93000007,
              "average_recovery_balance": 61398.67801730722
          },
          {
              "month": "Feb2024",
              "sub_segment": "V7",
              "benchmark_recovery": 797733.695609863,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 481452.0,
              "%Recovery": 0.19957766901750076
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V7",
              "active_recovery_balance": 310534648.56999993,
              "average_recovery_balance": 73691.18380873278
          },
          {
              "month": "Mar2024",
              "sub_segment": "V7",
              "benchmark_recovery": 1026897.1582493942,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 1156893.78,
              "%Recovery": 0.37254901677717805
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V7",
              "active_recovery_balance": 381214512.22,
              "average_recovery_balance": 85054.55426595271
          },
          {
              "month": "Apr2024",
              "sub_segment": "V7",
              "benchmark_recovery": 1260626.1526204643,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 197607.49,
              "%Recovery": 0.05183629784953205
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V7",
              "active_recovery_balance": 450258151.7400006,
              "average_recovery_balance": 96044.82758959057
          },
          {
              "month": "May2024",
              "sub_segment": "V7",
              "benchmark_recovery": 1488944.3694274428,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 958584.01,
              "%Recovery": 0.21289653641929615
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V7",
              "active_recovery_balance": 522859433.4000008,
              "average_recovery_balance": 105034.03644033764
          },
          {
              "month": "Jun2024",
              "sub_segment": "V7",
              "benchmark_recovery": 1729027.2399387902,
              "benchmark_rate": 0.33068682125431603,
              "recovery": 361601.30999999994,
              "%Recovery": 0.06915841752124718
          }
      ]
  ],
  "location": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1295128856.3400013,
              "average_recovery_balance": 295894.18696367403
          },
          {
              "month": "Feb2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9038219.126024766,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 10568827.16,
              "%Recovery": 0.8160444505782395
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1291965103.0900009,
              "average_recovery_balance": 296322.27135091764
          },
          {
              "month": "Mar2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9016140.477252329,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 10224262.57,
              "%Recovery": 0.7913729670829783
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1304899399.470001,
              "average_recovery_balance": 296837.8979686081
          },
          {
              "month": "Apr2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9106404.086429995,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 7791585.0,
              "%Recovery": 0.597102351580868
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1326299622.0400004,
              "average_recovery_balance": 295126.7516777927
          },
          {
              "month": "May2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9255748.223105287,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 9520341.21,
              "%Recovery": 0.7178122538673899
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1337434316.25,
              "average_recovery_balance": 295565.5947513812
          },
          {
              "month": "Jun2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9333453.082879359,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 8633599.68,
              "%Recovery": 0.6455344815891627
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1323651049.040001,
              "average_recovery_balance": 295589.7831710587
          },
          {
              "month": "Jul2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9237264.824308261,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 8248614.200000001,
              "%Recovery": 0.6231713566791218
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1326641616.41,
              "average_recovery_balance": 295795.23219843925
          },
          {
              "month": "Aug2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9258134.873700548,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 8577583.75,
              "%Recovery": 0.6465637474280083
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1344076265.6799994,
              "average_recovery_balance": 296967.80063632334
          },
          {
              "month": "Sep2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9379804.759840643,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 7962418.49,
              "%Recovery": 0.5924082355528857
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1359662770.8899996,
              "average_recovery_balance": 297975.62368836283
          },
          {
              "month": "Oct2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9488577.140910907,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 8396756.219999999,
              "%Recovery": 0.6175616777757107
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1370186530.1199994,
              "average_recovery_balance": 297737.1860321598
          },
          {
              "month": "Nov2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9562018.514319155,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 6957706.18,
              "%Recovery": 0.5077926272848888
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "UP",
              "active_recovery_balance": 1398199183.3900003,
              "average_recovery_balance": 299080.03922780755
          },
          {
              "month": "Dec2023",
              "sub_segment": "UP",
              "benchmark_recovery": 9757508.327796955,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 6459144.970000001,
              "%Recovery": 0.46196171809652303
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1409960441.5900009,
              "average_recovery_balance": 300439.0457255489
          },
          {
              "month": "Jan2024",
              "sub_segment": "UP",
              "benchmark_recovery": 9839585.742942939,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 7721154.98,
              "%Recovery": 0.5476150076446767
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1426867804.0700002,
              "average_recovery_balance": 301026.9628839663
          },
          {
              "month": "Feb2024",
              "sub_segment": "UP",
              "benchmark_recovery": 9957575.892100148,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 7728892.01,
              "%Recovery": 0.541668400390989
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1444624576.5,
              "average_recovery_balance": 302729.3747904443
          },
          {
              "month": "Mar2024",
              "sub_segment": "UP",
              "benchmark_recovery": 10081493.755104786,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 7018286.88,
              "%Recovery": 0.48582081422176326
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1466873628.3800013,
              "average_recovery_balance": 303889.295293143
          },
          {
              "month": "Apr2024",
              "sub_segment": "UP",
              "benchmark_recovery": 10236761.553558467,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 6446951.71,
              "%Recovery": 0.4395028709541899
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1487007052.6100018,
              "average_recovery_balance": 302606.2378123732
          },
          {
              "month": "May2024",
              "sub_segment": "UP",
              "benchmark_recovery": 10377265.179168511,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 8119515.58,
              "%Recovery": 0.5460307377660777
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "UP",
              "active_recovery_balance": 1509780869.5900013,
              "average_recovery_balance": 302500.6751332401
          },
          {
              "month": "Jun2024",
              "sub_segment": "UP",
              "benchmark_recovery": 10536195.116675194,
              "benchmark_rate": 0.6978625394515975,
              "recovery": 5546993.24,
              "%Recovery": 0.3674038631517666
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "MH",
              "active_recovery_balance": 1819341419.817998,
              "average_recovery_balance": 263558.07906967954
          },
          {
              "month": "Feb2023",
              "sub_segment": "MH",
              "benchmark_recovery": 15716441.290018383,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 18758694.83,
              "%Recovery": 1.0310706185030718
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "MH",
              "active_recovery_balance": 1847106469.8079982,
              "average_recovery_balance": 266691.6647138317
          },
          {
              "month": "Mar2023",
              "sub_segment": "MH",
              "benchmark_recovery": 15956290.596657,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 16946668.630000003,
              "%Recovery": 0.9174711315781144
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "MH",
              "active_recovery_balance": 1875893197.638,
              "average_recovery_balance": 266955.0587217874
          },
          {
              "month": "Apr2023",
              "sub_segment": "MH",
              "benchmark_recovery": 16204965.701254586,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 12384147.94,
              "%Recovery": 0.6601734019609057
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "MH",
              "active_recovery_balance": 1940048530.127997,
              "average_recovery_balance": 267445.3446550864
          },
          {
              "month": "May2023",
              "sub_segment": "MH",
              "benchmark_recovery": 16759173.672082575,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 17192223.69,
              "%Recovery": 0.8861749292872444
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "MH",
              "active_recovery_balance": 1979695785.2580009,
              "average_recovery_balance": 268797.79840570275
          },
          {
              "month": "Jun2023",
              "sub_segment": "MH",
              "benchmark_recovery": 17101667.802526448,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 16934993.61,
              "%Recovery": 0.8554341397354125
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2002864486.4579983,
              "average_recovery_balance": 270913.6326874068
          },
          {
              "month": "Jul2023",
              "sub_segment": "MH",
              "benchmark_recovery": 17301811.39746102,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 16823621.759999998,
              "%Recovery": 0.839978035146653
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2052485814.448,
              "average_recovery_balance": 274433.188186656
          },
          {
              "month": "Aug2023",
              "sub_segment": "MH",
              "benchmark_recovery": 17730466.887624938,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 16856835.990000002,
              "%Recovery": 0.821288793878145
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2114850764.408,
              "average_recovery_balance": 278160.0374073392
          },
          {
              "month": "Sep2023",
              "sub_segment": "MH",
              "benchmark_recovery": 18269208.579494588,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 14147231.690000001,
              "%Recovery": 0.6689470447793118
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2175071169.4980016,
              "average_recovery_balance": 281271.3267164104
          },
          {
              "month": "Oct2023",
              "sub_segment": "MH",
              "benchmark_recovery": 18789424.549267218,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 19265245.299999997,
              "%Recovery": 0.8857294221065117
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2243870373.448,
              "average_recovery_balance": 284827.41475602944
          },
          {
              "month": "Nov2023",
              "sub_segment": "MH",
              "benchmark_recovery": 19383748.757962648,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 17447000.4,
              "%Recovery": 0.7775404767785407
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "MH",
              "active_recovery_balance": 2280905977.9280005,
              "average_recovery_balance": 285935.3112608751
          },
          {
              "month": "Dec2023",
              "sub_segment": "MH",
              "benchmark_recovery": 19703682.0575126,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 18956688.29,
              "%Recovery": 0.831103450709549
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2323264753.448,
              "average_recovery_balance": 287212.85121127457
          },
          {
              "month": "Jan2024",
              "sub_segment": "MH",
              "benchmark_recovery": 20069599.74691679,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 19483933.71,
              "%Recovery": 0.8386445703651957
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2367761411.248,
              "average_recovery_balance": 288998.097308434
          },
          {
              "month": "Feb2024",
              "sub_segment": "MH",
              "benchmark_recovery": 20453985.603412982,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 19819582.17,
              "%Recovery": 0.8370599366915729
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2418470547.208001,
              "average_recovery_balance": 290541.8725622298
          },
          {
              "month": "Mar2024",
              "sub_segment": "MH",
              "benchmark_recovery": 20892038.15886057,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 20063225.740000002,
              "%Recovery": 0.829583215853588
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2432603320.278003,
              "average_recovery_balance": 291050.88780545624
          },
          {
              "month": "Apr2024",
              "sub_segment": "MH",
              "benchmark_recovery": 21014124.58848853,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 14855394.02,
              "%Recovery": 0.6106788515894278
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2480639329.8380013,
              "average_recovery_balance": 291428.4926971336
          },
          {
              "month": "May2024",
              "sub_segment": "MH",
              "benchmark_recovery": 21429085.252733722,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 18313315.259999998,
              "%Recovery": 0.7382498148651039
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "MH",
              "active_recovery_balance": 2521045286.8980036,
              "average_recovery_balance": 291585.1592526028
          },
          {
              "month": "Jun2024",
              "sub_segment": "MH",
              "benchmark_recovery": 21778133.455002464,
              "benchmark_rate": 0.8638533218020515,
              "recovery": 16211553.29,
              "%Recovery": 0.6430488723963921
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1271511483.2900019,
              "average_recovery_balance": 217985.8534699129
          },
          {
              "month": "Feb2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13716843.279923597,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 16709360.350000001,
              "%Recovery": 1.3141336566434287
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1252538122.790003,
              "average_recovery_balance": 218860.40936397048
          },
          {
              "month": "Mar2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13512161.98849037,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 16446280.04,
              "%Recovery": 1.3130362853440538
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1255214454.6600013,
              "average_recovery_balance": 219213.1426231228
          },
          {
              "month": "Apr2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13541033.78816208,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 10759620.69,
              "%Recovery": 0.8571938165669426
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1276446690.4700022,
              "average_recovery_balance": 218756.93067180843
          },
          {
              "month": "May2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13770083.430981342,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 11448442.940000001,
              "%Recovery": 0.8968994181640719
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1267246097.100001,
              "average_recovery_balance": 218716.96532619972
          },
          {
              "month": "Jun2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13670829.040441304,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 13381472.97,
              "%Recovery": 1.0559490378879455
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1249899788.6800025,
              "average_recovery_balance": 219936.6159915542
          },
          {
              "month": "Jul2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13483700.102001294,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 12949474.64,
              "%Recovery": 1.036041029631321
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1237905890.4,
              "average_recovery_balance": 221094.1043757814
          },
          {
              "month": "Aug2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13354312.027112305,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 11197344.67,
              "%Recovery": 0.904539251071973
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1227867699.0700002,
              "average_recovery_balance": 221917.16954093624
          },
          {
              "month": "Sep2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13246021.77641695,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 12410439.399999999,
              "%Recovery": 1.010730994015055
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1223738210.8699994,
              "average_recovery_balance": 223228.42226742054
          },
          {
              "month": "Oct2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13201473.580659298,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 13211056.13,
              "%Recovery": 1.079565548632153
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1211628616.9699996,
              "average_recovery_balance": 224085.18900869237
          },
          {
              "month": "Nov2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13070837.401676452,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 9592938.510000002,
              "%Recovery": 0.7917391827530207
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "TN",
              "active_recovery_balance": 1223459837.0600004,
              "average_recovery_balance": 225314.8871197054
          },
          {
              "month": "Dec2023",
              "sub_segment": "TN",
              "benchmark_recovery": 13198470.53273156,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 9024390.190000001,
              "%Recovery": 0.7376122956096213
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1214595444.2699995,
              "average_recovery_balance": 227324.6199270072
          },
          {
              "month": "Jan2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13102843.015190378,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 7990766.710000001,
              "%Recovery": 0.65789533030915
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1223014222.1099997,
              "average_recovery_balance": 228046.6571154204
          },
          {
              "month": "Feb2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13193663.316664161,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 9298263.120000001,
              "%Recovery": 0.7602743248527573
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1225550288.8399992,
              "average_recovery_balance": 229977.535905423
          },
          {
              "month": "Mar2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13221021.960561598,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 10027134.44,
              "%Recovery": 0.818174050572076
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1226318329.1800003,
              "average_recovery_balance": 230771.23243884085
          },
          {
              "month": "Apr2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13229307.445289738,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 6518857.0,
              "%Recovery": 0.5315795128299966
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1234894622.8700001,
              "average_recovery_balance": 232123.04941165415
          },
          {
              "month": "May2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13321827.00017723,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 6858151.48,
              "%Recovery": 0.5553632960244878
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "TN",
              "active_recovery_balance": 1240660224.25,
              "average_recovery_balance": 231899.1073364486
          },
          {
              "month": "Jun2024",
              "sub_segment": "TN",
              "benchmark_recovery": 13384025.298488572,
              "benchmark_rate": 1.0787824931342054,
              "recovery": 6638349.0,
              "%Recovery": 0.5350658359352976
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1001956197.7900004,
              "average_recovery_balance": 254303.6035000001
          },
          {
              "month": "Feb2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7092908.034963187,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 8296725.9,
              "%Recovery": 0.8280527550306054
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1007069166.9999999,
              "average_recovery_balance": 255083.37563323198
          },
          {
              "month": "Mar2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7129103.0507454295,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7359606.13,
              "%Recovery": 0.7307945046042702
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1017523263.4000003,
              "average_recovery_balance": 255146.25461384162
          },
          {
              "month": "Apr2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7203108.226338329,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 6190169.0,
              "%Recovery": 0.6083565086576868
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1035501526.0999992,
              "average_recovery_balance": 254861.31580113198
          },
          {
              "month": "May2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7330377.426569602,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 5985918.09,
              "%Recovery": 0.5780694609446606
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1045188132.4199996,
              "average_recovery_balance": 253932.97677842557
          },
          {
              "month": "Jun2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7398949.493841805,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 9661790.940000001,
              "%Recovery": 0.9244068737777724
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1040127390.4099996,
              "average_recovery_balance": 253195.56728578373
          },
          {
              "month": "Jul2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7363124.1975416485,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 6023360.37,
              "%Recovery": 0.5790983321404217
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1042768908.0499992,
              "average_recovery_balance": 253037.83257704423
          },
          {
              "month": "Aug2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7381823.6593889585,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 8747482.16,
              "%Recovery": 0.8388706349480619
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1051992042.5799985,
              "average_recovery_balance": 253920.35785179786
          },
          {
              "month": "Sep2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7447114.782054472,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 9745662.58,
              "%Recovery": 0.9264007887454048
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1053677356.9499995,
              "average_recovery_balance": 255189.4785541292
          },
          {
              "month": "Oct2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7459045.22358753,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7606654.619999999,
              "%Recovery": 0.721914974240161
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1055728745.4799995,
              "average_recovery_balance": 255748.24260658905
          },
          {
              "month": "Nov2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7473567.126061273,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 6231141.6,
              "%Recovery": 0.5902218374443274
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "MP",
              "active_recovery_balance": 1073824710.1699996,
              "average_recovery_balance": 257511.92090407663
          },
          {
              "month": "Dec2023",
              "sub_segment": "MP",
              "benchmark_recovery": 7601669.545741113,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7874050.05,
              "%Recovery": 0.7332714525402793
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1084614793.9599996,
              "average_recovery_balance": 258426.2077579222
          },
          {
              "month": "Jan2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7678053.196224862,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7372875.47,
              "%Recovery": 0.6797690305404326
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1087411886.38,
              "average_recovery_balance": 258415.37223859318
          },
          {
              "month": "Feb2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7697853.9812732665,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 8465759.86,
              "%Recovery": 0.7785237559047251
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1091991874.689999,
              "average_recovery_balance": 259998.06540238074
          },
          {
              "month": "Mar2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7730275.993289043,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 10977612.92,
              "%Recovery": 1.0052833884974088
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1097155654.0899987,
              "average_recovery_balance": 259558.94348000915
          },
          {
              "month": "Apr2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7766830.6974545745,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7539724.02,
              "%Recovery": 0.687206413410282
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1108758121.2199993,
              "average_recovery_balance": 259419.30772578364
          },
          {
              "month": "May2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7848965.258339866,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 7472426.51,
              "%Recovery": 0.673945594353606
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "MP",
              "active_recovery_balance": 1114879000.6999998,
              "average_recovery_balance": 259515.59606610797
          },
          {
              "month": "Jun2024",
              "sub_segment": "MP",
              "benchmark_recovery": 7892295.331391458,
              "benchmark_rate": 0.7079059993448722,
              "recovery": 6624593.15,
              "%Recovery": 0.5941983969417858
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "KA",
              "active_recovery_balance": 966794527.6500015,
              "average_recovery_balance": 241759.0716804205
          },
          {
              "month": "Feb2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12330458.647551166,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 19967023.2,
              "%Recovery": 2.0652809494623505
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "KA",
              "active_recovery_balance": 953832047.0300014,
              "average_recovery_balance": 241415.34979245797
          },
          {
              "month": "Mar2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12165135.689380204,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 14370744.37,
              "%Recovery": 1.5066325790527761
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "KA",
              "active_recovery_balance": 951889568.8400018,
              "average_recovery_balance": 240862.7451518223
          },
          {
              "month": "Apr2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12140361.400417503,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 8475347.5,
              "%Recovery": 0.8903708767738978
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "KA",
              "active_recovery_balance": 969035251.9200022,
              "average_recovery_balance": 240634.52990315427
          },
          {
              "month": "May2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12359036.75506173,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 9972579.6,
              "%Recovery": 1.0291245421919157
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "KA",
              "active_recovery_balance": 969659008.3100014,
              "average_recovery_balance": 240669.89533631207
          },
          {
              "month": "Jun2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12366992.119053835,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 10964408.62,
              "%Recovery": 1.1307489051341502
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "KA",
              "active_recovery_balance": 962934223.9200016,
              "average_recovery_balance": 242064.9130015087
          },
          {
              "month": "Jul2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12281224.488535546,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 9893105.81,
              "%Recovery": 1.0273916498394078
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "KA",
              "active_recovery_balance": 964264435.5900021,
              "average_recovery_balance": 244612.99735920905
          },
          {
              "month": "Aug2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12298189.954847502,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 10819616.38,
              "%Recovery": 1.1220590515069477
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "KA",
              "active_recovery_balance": 966025669.4700017,
              "average_recovery_balance": 246372.26969395607
          },
          {
              "month": "Sep2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12320652.66114642,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 8617344.129999999,
              "%Recovery": 0.8920409055721884
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "KA",
              "active_recovery_balance": 966606490.9400017,
              "average_recovery_balance": 246898.20969093277
          },
          {
              "month": "Oct2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12328060.434890084,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 11374031.239999998,
              "%Recovery": 1.1766971716627959
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "KA",
              "active_recovery_balance": 971473647.5400021,
              "average_recovery_balance": 246441.81824962003
          },
          {
              "month": "Nov2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12390135.955045683,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 8257955.62,
              "%Recovery": 0.8500442231151684
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "KA",
              "active_recovery_balance": 984206242.3600022,
              "average_recovery_balance": 248914.07242286348
          },
          {
              "month": "Dec2023",
              "sub_segment": "KA",
              "benchmark_recovery": 12552526.9589394,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 10464031.440000001,
              "%Recovery": 1.0631949879639633
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "KA",
              "active_recovery_balance": 982076494.2900021,
              "average_recovery_balance": 250019.47410641602
          },
          {
              "month": "Jan2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12525364.237434687,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 11628786.950000001,
              "%Recovery": 1.1841019531179289
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "KA",
              "active_recovery_balance": 980713480.4900019,
              "average_recovery_balance": 249672.47466649744
          },
          {
              "month": "Feb2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12507980.414071726,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 8846955.83,
              "%Recovery": 0.9020938333160999
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "KA",
              "active_recovery_balance": 981909336.2500014,
              "average_recovery_balance": 250295.52287789993
          },
          {
              "month": "Mar2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12523232.310493764,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 9111022.67,
              "%Recovery": 0.9278883837479132
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "KA",
              "active_recovery_balance": 985965213.1200025,
              "average_recovery_balance": 250945.58745736894
          },
          {
              "month": "Apr2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12574960.80149657,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 6133410.29,
              "%Recovery": 0.622071672345452
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "KA",
              "active_recovery_balance": 1007913469.7500018,
              "average_recovery_balance": 252546.59728138355
          },
          {
              "month": "May2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12854887.986665767,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 8035798.93,
              "%Recovery": 0.7972707153118177
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "KA",
              "active_recovery_balance": 1011449637.8400013,
              "average_recovery_balance": 252672.90478141428
          },
          {
              "month": "Jun2024",
              "sub_segment": "KA",
              "benchmark_recovery": 12899988.132723186,
              "benchmark_rate": 1.2753959910719552,
              "recovery": 6749794.62,
              "%Recovery": 0.6673386758449493
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "HR",
              "active_recovery_balance": 805227316.6300001,
              "average_recovery_balance": 251712.19650828387
          },
          {
              "month": "Feb2023",
              "sub_segment": "HR",
              "benchmark_recovery": 5918300.759863037,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 7220370.539999999,
              "%Recovery": 0.8966872323977231
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "HR",
              "active_recovery_balance": 809304352.5600007,
              "average_recovery_balance": 252041.21848645303
          },
          {
              "month": "Mar2023",
              "sub_segment": "HR",
              "benchmark_recovery": 5948266.366275267,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 5451872.61,
              "%Recovery": 0.673649238726392
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "HR",
              "active_recovery_balance": 828424398.7800002,
              "average_recovery_balance": 253340.79473394502
          },
          {
              "month": "Apr2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6088795.856191263,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 5000255.0,
              "%Recovery": 0.6035861579359263
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "HR",
              "active_recovery_balance": 855228548.4,
              "average_recovery_balance": 253701.73491545534
          },
          {
              "month": "May2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6285802.360798482,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 6342160.449999999,
              "%Recovery": 0.7415749230852031
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "HR",
              "active_recovery_balance": 862054056.2099998,
              "average_recovery_balance": 252579.56525344265
          },
          {
              "month": "Jun2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6335968.8258749945,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 6983197.129999999,
              "%Recovery": 0.8100648769871183
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "HR",
              "active_recovery_balance": 867439167.4699993,
              "average_recovery_balance": 253785.59610005832
          },
          {
              "month": "Jul2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6375548.5909969555,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 5954827.029999999,
              "%Recovery": 0.6864835314467108
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "HR",
              "active_recovery_balance": 868143500.0199997,
              "average_recovery_balance": 254662.2176650043
          },
          {
              "month": "Aug2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6380725.330260235,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4402220.359999999,
              "%Recovery": 0.5070844117243962
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "HR",
              "active_recovery_balance": 887662991.4199996,
              "average_recovery_balance": 255075.5722471263
          },
          {
              "month": "Sep2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6524190.6827128045,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 6893417.3100000005,
              "%Recovery": 0.7765804563928661
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "HR",
              "active_recovery_balance": 893354018.0799999,
              "average_recovery_balance": 255682.3177103606
          },
          {
              "month": "Oct2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6566018.880428751,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4555281.12,
              "%Recovery": 0.5099077216656203
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "HR",
              "active_recovery_balance": 902975439.79,
              "average_recovery_balance": 256745.93113164627
          },
          {
              "month": "Nov2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6636734.895945423,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4524562.6,
              "%Recovery": 0.5010726095775376
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "HR",
              "active_recovery_balance": 916001959.8900001,
              "average_recovery_balance": 258028.72109577467
          },
          {
              "month": "Dec2023",
              "sub_segment": "HR",
              "benchmark_recovery": 6732477.877106142,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4971816.66,
              "%Recovery": 0.5427735832134083
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "HR",
              "active_recovery_balance": 923910183.1999998,
              "average_recovery_balance": 257141.7153353743
          },
          {
              "month": "Jan2024",
              "sub_segment": "HR",
              "benchmark_recovery": 6790602.1397312805,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4140624.6,
              "%Recovery": 0.4481631088488257
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "HR",
              "active_recovery_balance": 935419019.5599997,
              "average_recovery_balance": 257549.28952643165
          },
          {
              "month": "Feb2024",
              "sub_segment": "HR",
              "benchmark_recovery": 6875190.371610434,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 3644836.17,
              "%Recovery": 0.3896474300591461
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "HR",
              "active_recovery_balance": 955871397.8099995,
              "average_recovery_balance": 258064.6322381208
          },
          {
              "month": "Mar2024",
              "sub_segment": "HR",
              "benchmark_recovery": 7025512.3033657605,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4226919.25,
              "%Recovery": 0.44220585108878774
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "HR",
              "active_recovery_balance": 977764071.4499991,
              "average_recovery_balance": 260320.57280351414
          },
          {
              "month": "Apr2024",
              "sub_segment": "HR",
              "benchmark_recovery": 7186420.191564714,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 3194282.13,
              "%Recovery": 0.326692524635617
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "HR",
              "active_recovery_balance": 994675989.4499996,
              "average_recovery_balance": 260522.78403614447
          },
          {
              "month": "May2024",
              "sub_segment": "HR",
              "benchmark_recovery": 7310720.26818039,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 4803837.01,
              "%Recovery": 0.4829549582931276
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "HR",
              "active_recovery_balance": 1009875096.2399993,
              "average_recovery_balance": 259808.36023668622
          },
          {
              "month": "Jun2024",
              "sub_segment": "HR",
              "benchmark_recovery": 7422431.437693318,
              "benchmark_rate": 0.7349850952190784,
              "recovery": 3644859.5700000003,
              "%Recovery": 0.3609218192993038
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "AP",
              "active_recovery_balance": 786510831.0400004,
              "average_recovery_balance": 256861.79981711315
          },
          {
              "month": "Feb2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7005817.119042316,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7924495.8100000005,
              "%Recovery": 1.007550754198956
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "AP",
              "active_recovery_balance": 786772947.9600002,
              "average_recovery_balance": 255114.4448638133
          },
          {
              "month": "Mar2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7008151.916139639,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7601385.5600000005,
              "%Recovery": 0.9661472956981304
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "AP",
              "active_recovery_balance": 793201661.5400004,
              "average_recovery_balance": 253905.78154289388
          },
          {
              "month": "Apr2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7065415.452603125,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 5242415.01,
              "%Recovery": 0.660918309200444
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "AP",
              "active_recovery_balance": 808884168.7700005,
              "average_recovery_balance": 251753.5539277935
          },
          {
              "month": "May2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7205106.825290466,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 6056035.13,
              "%Recovery": 0.7486900305156032
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "AP",
              "active_recovery_balance": 822464477.4300003,
              "average_recovery_balance": 252057.76200735528
          },
          {
              "month": "Jun2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7326072.93934423,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7592655.84,
              "%Recovery": 0.9231591209537933
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "AP",
              "active_recovery_balance": 822273503.6900008,
              "average_recovery_balance": 253163.02453509875
          },
          {
              "month": "Jul2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7324371.847580234,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 8517948.75,
              "%Recovery": 1.0359021313194703
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "AP",
              "active_recovery_balance": 836855439.9300003,
              "average_recovery_balance": 254983.3759689215
          },
          {
              "month": "Aug2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7454259.923506523,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7899193.039999999,
              "%Recovery": 0.9439136872505407
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "AP",
              "active_recovery_balance": 848322876.3700005,
              "average_recovery_balance": 256911.83415202922
          },
          {
              "month": "Sep2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7556405.703770796,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 8717387.73,
              "%Recovery": 1.0276025759557457
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "AP",
              "active_recovery_balance": 856391679.8900002,
              "average_recovery_balance": 256251.2507151407
          },
          {
              "month": "Oct2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7628278.282761037,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7165295.21,
              "%Recovery": 0.8366843557985466
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "AP",
              "active_recovery_balance": 872367101.2199997,
              "average_recovery_balance": 258479.14110222211
          },
          {
              "month": "Nov2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7770578.777325913,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 8472046.21,
              "%Recovery": 0.9711560876323626
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "AP",
              "active_recovery_balance": 890907344.0499995,
              "average_recovery_balance": 261569.97770111554
          },
          {
              "month": "Dec2023",
              "sub_segment": "AP",
              "benchmark_recovery": 7935725.327740054,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 9244242.41,
              "%Recovery": 1.0376210805465305
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "AP",
              "active_recovery_balance": 903307431.0299993,
              "average_recovery_balance": 262818.5717282512
          },
          {
              "month": "Jan2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8046178.659358162,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 5906553.5600000005,
              "%Recovery": 0.653880767178571
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "AP",
              "active_recovery_balance": 923347725.5399992,
              "average_recovery_balance": 264342.3205095904
          },
          {
              "month": "Feb2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8224686.866502823,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7844283.85,
              "%Recovery": 0.8495481856970456
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "AP",
              "active_recovery_balance": 933811369.4699996,
              "average_recovery_balance": 263937.63975975115
          },
          {
              "month": "Mar2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8317891.400857966,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 12316201.89,
              "%Recovery": 1.3189175343828026
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "AP",
              "active_recovery_balance": 937814757.9299996,
              "average_recovery_balance": 264024.4250929053
          },
          {
              "month": "Apr2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8353551.440491697,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 6276974.19,
              "%Recovery": 0.6693191951739926
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "AP",
              "active_recovery_balance": 956233797.4799999,
              "average_recovery_balance": 263861.42314569536
          },
          {
              "month": "May2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8517618.377020823,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 7564427.92,
              "%Recovery": 0.7910646894028249
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "AP",
              "active_recovery_balance": 967602525.5200002,
              "average_recovery_balance": 264155.7536227137
          },
          {
              "month": "Jun2024",
              "sub_segment": "AP",
              "benchmark_recovery": 8618884.915739752,
              "benchmark_rate": 0.8907464261844366,
              "recovery": 5744780.17,
              "%Recovery": 0.5937128126978267
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "TG",
              "active_recovery_balance": 762404970.1400012,
              "average_recovery_balance": 295276.9055538347
          },
          {
              "month": "Feb2023",
              "sub_segment": "TG",
              "benchmark_recovery": 8718101.95656017,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9735753.22,
              "%Recovery": 1.2769792434868592
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "TG",
              "active_recovery_balance": 764965124.0500003,
              "average_recovery_balance": 294897.88899383205
          },
          {
              "month": "Mar2023",
              "sub_segment": "TG",
              "benchmark_recovery": 8747377.320292072,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9469075.979999999,
              "%Recovery": 1.2378441424711375
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "TG",
              "active_recovery_balance": 769261671.5100002,
              "average_recovery_balance": 291939.9132865276
          },
          {
              "month": "Apr2023",
              "sub_segment": "TG",
              "benchmark_recovery": 8796508.34682591,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7856412.0,
              "%Recovery": 1.0212925316529133
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "TG",
              "active_recovery_balance": 786025717.4199996,
              "average_recovery_balance": 290260.60466026573
          },
          {
              "month": "May2023",
              "sub_segment": "TG",
              "benchmark_recovery": 8988205.236499902,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 8505044.940000001,
              "%Recovery": 1.08203138288101
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "TG",
              "active_recovery_balance": 799807416.9199992,
              "average_recovery_balance": 290627.6951017439
          },
          {
              "month": "Jun2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9145798.9905826,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9080304.55,
              "%Recovery": 1.135311370950722
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "TG",
              "active_recovery_balance": 800858647.0999993,
              "average_recovery_balance": 291327.26340487425
          },
          {
              "month": "Jul2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9157819.809239345,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 8907220.969999999,
              "%Recovery": 1.1122088775908288
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "TG",
              "active_recovery_balance": 809806400.02,
              "average_recovery_balance": 292983.5021780029
          },
          {
              "month": "Aug2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9260137.377059437,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 10102946.780000001,
              "%Recovery": 1.2475755661785937
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "TG",
              "active_recovery_balance": 827147062.6499997,
              "average_recovery_balance": 294149.0265469416
          },
          {
              "month": "Sep2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9458427.879775979,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9361702.22,
              "%Recovery": 1.1318062582495472
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "TG",
              "active_recovery_balance": 839879621.4699999,
              "average_recovery_balance": 297092.1901202688
          },
          {
              "month": "Oct2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9604024.708637519,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9526244.04,
              "%Recovery": 1.1342392167256878
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "TG",
              "active_recovery_balance": 840076368.8599998,
              "average_recovery_balance": 297793.8209358383
          },
          {
              "month": "Nov2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9606274.515331972,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7013608.24,
              "%Recovery": 0.8348774587621843
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "TG",
              "active_recovery_balance": 849516183.7900009,
              "average_recovery_balance": 298914.91336734727
          },
          {
              "month": "Dec2023",
              "sub_segment": "TG",
              "benchmark_recovery": 9714218.812961219,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 9273936.75,
              "%Recovery": 1.0916727576190004
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "TG",
              "active_recovery_balance": 860766632.210001,
              "average_recovery_balance": 299397.08946434816
          },
          {
              "month": "Jan2024",
              "sub_segment": "TG",
              "benchmark_recovery": 9842867.707215635,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7725953.56,
              "%Recovery": 0.8975665727380452
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "TG",
              "active_recovery_balance": 875724494.6900003,
              "average_recovery_balance": 299495.3812209303
          },
          {
              "month": "Feb2024",
              "sub_segment": "TG",
              "benchmark_recovery": 10013910.886707097,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7839829.359999999,
              "%Recovery": 0.8952392456231614
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "TG",
              "active_recovery_balance": 895387953.6400014,
              "average_recovery_balance": 301173.21010427224
          },
          {
              "month": "Mar2024",
              "sub_segment": "TG",
              "benchmark_recovery": 10238762.568764294,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7716927.82,
              "%Recovery": 0.8618529865884994
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "TG",
              "active_recovery_balance": 903164985.3700008,
              "average_recovery_balance": 300154.53152874735
          },
          {
              "month": "Apr2024",
              "sub_segment": "TG",
              "benchmark_recovery": 10327692.938052269,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 6669749.950000001,
              "%Recovery": 0.7384863295234586
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "TG",
              "active_recovery_balance": 924256677.9300015,
              "average_recovery_balance": 302341.0788125618
          },
          {
              "month": "May2024",
              "sub_segment": "TG",
              "benchmark_recovery": 10568876.473543573,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 7819906.859999999,
              "%Recovery": 0.846075235021698
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "TG",
              "active_recovery_balance": 936947657.1200004,
              "average_recovery_balance": 304006.37804023374
          },
          {
              "month": "Jun2024",
              "sub_segment": "TG",
              "benchmark_recovery": 10713997.839274801,
              "benchmark_rate": 1.1435001472982602,
              "recovery": 6818938.66,
              "%Recovery": 0.7277822414285261
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 710303147.5099995,
              "average_recovery_balance": 245949.84332063695
          },
          {
              "month": "Feb2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3396583.2990166508,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3403061.9699999997,
              "%Recovery": 0.4790999423175289
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 719577228.5999988,
              "average_recovery_balance": 245757.25020491763
          },
          {
              "month": "Mar2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3440930.82732825,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3736442.25,
              "%Recovery": 0.5192552100723892
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 724625032.8799992,
              "average_recovery_balance": 244640.45674544197
          },
          {
              "month": "Apr2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3465068.8137278,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 2064740.0,
              "%Recovery": 0.28493909350519625
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 737992305.8899993,
              "average_recovery_balance": 243883.77590548556
          },
          {
              "month": "May2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3528989.4881867613,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3449378.6,
              "%Recovery": 0.4674003471946961
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 748239546.1299999,
              "average_recovery_balance": 243885.11933833113
          },
          {
              "month": "Jun2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3577990.5452455822,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 4880695.35,
              "%Recovery": 0.6522904830737218
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 747219351.07,
              "average_recovery_balance": 243790.97914192497
          },
          {
              "month": "Jul2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3573112.096494958,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3448356.9000000004,
              "%Recovery": 0.46149191600325085
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 747471125.6800004,
              "average_recovery_balance": 243001.0161508454
          },
          {
              "month": "Aug2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3574316.0520714484,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 4110489.6700000004,
              "%Recovery": 0.5499195258225588
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 755157872.7700001,
              "average_recovery_balance": 243207.0443703704
          },
          {
              "month": "Sep2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3611073.142169082,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 4010834.76,
              "%Recovery": 0.5311253321491343
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 768734928.3100002,
              "average_recovery_balance": 243270.54693354436
          },
          {
              "month": "Oct2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3675996.9711829983,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3259841.31,
              "%Recovery": 0.42405271179319115
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 781215750.6699997,
              "average_recovery_balance": 243977.4361867582
          },
          {
              "month": "Nov2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3735678.7464004895,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 2008365.88,
              "%Recovery": 0.2570821028989176
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "GJ",
              "active_recovery_balance": 795613242.2499998,
              "average_recovery_balance": 244202.95956108035
          },
          {
              "month": "Dec2023",
              "sub_segment": "GJ",
              "benchmark_recovery": 3804525.800816326,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 2880489.8,
              "%Recovery": 0.3620464877952452
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 809791488.7099997,
              "average_recovery_balance": 244133.70175158264
          },
          {
              "month": "Jan2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 3872324.451722205,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3905306.0,
              "%Recovery": 0.4822606874049966
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 825835326.2100003,
              "average_recovery_balance": 244257.7125732033
          },
          {
              "month": "Feb2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 3949044.1321793045,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 4033556.19,
              "%Recovery": 0.4884213670673509
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 838531807.1199999,
              "average_recovery_balance": 244327.4496270396
          },
          {
              "month": "Mar2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 4009757.1603650358,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 4182572.62,
              "%Recovery": 0.498797133810029
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 844462285.1700001,
              "average_recovery_balance": 245269.3247661923
          },
          {
              "month": "Apr2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 4038115.9854250527,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 2971965.0,
              "%Recovery": 0.3519357882752228
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 854617969.92,
              "average_recovery_balance": 244735.95931271475
          },
          {
              "month": "May2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 4086679.235261197,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3151588.95,
              "%Recovery": 0.3687716688539813
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "GJ",
              "active_recovery_balance": 865524926.0600002,
              "average_recovery_balance": 245399.75221434652
          },
          {
              "month": "Jun2024",
              "sub_segment": "GJ",
              "benchmark_recovery": 4138834.97355139,
              "benchmark_rate": 0.47818784288420096,
              "recovery": 3865754.52,
              "%Recovery": 0.4466369949156169
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "DL",
              "active_recovery_balance": 607946306.1400006,
              "average_recovery_balance": 311447.902735656
          },
          {
              "month": "Feb2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4214138.0826817695,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 6114055.58,
              "%Recovery": 1.0056900614825066
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "DL",
              "active_recovery_balance": 612285738.3800008,
              "average_recovery_balance": 312869.56483392994
          },
          {
              "month": "Mar2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4244217.986902112,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 4230187.0,
              "%Recovery": 0.6908844571804534
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "DL",
              "active_recovery_balance": 626115020.5100002,
              "average_recovery_balance": 312901.05972513754
          },
          {
              "month": "Apr2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4340079.256049721,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 3561838.0,
              "%Recovery": 0.5688791808729832
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "DL",
              "active_recovery_balance": 640539586.5400003,
              "average_recovery_balance": 311849.8473904578
          },
          {
              "month": "May2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4440066.890515556,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 4239667.73,
              "%Recovery": 0.6618900406923159
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "DL",
              "active_recovery_balance": 648487577.0900002,
              "average_recovery_balance": 311772.87360096164
          },
          {
              "month": "Jun2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4495160.4560480295,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 3388784.13,
              "%Recovery": 0.5225673165871131
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "DL",
              "active_recovery_balance": 663607703.4199996,
              "average_recovery_balance": 313614.2265689979
          },
          {
              "month": "Jul2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4599969.547802814,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 4799099.78,
              "%Recovery": 0.7231832534895445
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "DL",
              "active_recovery_balance": 686521627.4599999,
              "average_recovery_balance": 317981.3003520148
          },
          {
              "month": "Aug2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4758803.377279863,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 5739350.01,
              "%Recovery": 0.836004253971504
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "DL",
              "active_recovery_balance": 697308967.9899999,
              "average_recovery_balance": 318405.92145662097
          },
          {
              "month": "Sep2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4833578.636343384,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 5586788.45,
              "%Recovery": 0.8011926859486654
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "DL",
              "active_recovery_balance": 708951004.7800002,
              "average_recovery_balance": 319059.8581368138
          },
          {
              "month": "Oct2023",
              "sub_segment": "DL",
              "benchmark_recovery": 4914278.445029161,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 4274651.91,
              "%Recovery": 0.6029544892635421
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "DL",
              "active_recovery_balance": 726984208.5100001,
              "average_recovery_balance": 319272.8188449715
          },
          {
              "month": "Nov2023",
              "sub_segment": "DL",
              "benchmark_recovery": 5039280.291119581,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 2981478.9,
              "%Recovery": 0.4101160472399708
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "DL",
              "active_recovery_balance": 739292323.1799995,
              "average_recovery_balance": 318935.428464193
          },
          {
              "month": "Dec2023",
              "sub_segment": "DL",
              "benchmark_recovery": 5124597.192025159,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 5192948.5600000005,
              "%Recovery": 0.7024215451964927
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "DL",
              "active_recovery_balance": 751425938.8299998,
              "average_recovery_balance": 320847.96704953024
          },
          {
              "month": "Jan2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5208704.507547716,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 5740349.92,
              "%Recovery": 0.7639275706848707
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "DL",
              "active_recovery_balance": 767623342.0999995,
              "average_recovery_balance": 322395.3557748843
          },
          {
              "month": "Feb2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5320981.024850777,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 4032348.3200000003,
              "%Recovery": 0.5253029837483367
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "DL",
              "active_recovery_balance": 783774764.6299989,
              "average_recovery_balance": 323873.8696818177
          },
          {
              "month": "Mar2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5432938.8146847375,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 5334113.88,
              "%Recovery": 0.6805671885236195
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "DL",
              "active_recovery_balance": 795111346.0799987,
              "average_recovery_balance": 324933.12058847514
          },
          {
              "month": "Apr2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5511521.280164619,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 3189017.03,
              "%Recovery": 0.40107804343659087
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "DL",
              "active_recovery_balance": 808617091.0599986,
              "average_recovery_balance": 325530.22989532957
          },
          {
              "month": "May2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5605139.867333234,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 3779223.13,
              "%Recovery": 0.4673686930170989
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "DL",
              "active_recovery_balance": 821690333.1299981,
              "average_recovery_balance": 325550.845138668
          },
          {
              "month": "Jun2024",
              "sub_segment": "DL",
              "benchmark_recovery": 5695760.447991249,
              "benchmark_rate": 0.6931760321792826,
              "recovery": 3816889.79,
              "%Recovery": 0.4645168180889548
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3294888132.4899893,
              "average_recovery_balance": 234695.3581088389
          },
          {
              "month": "Feb2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30280562.550298925,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 38178205.74,
              "%Recovery": 1.158710226412095
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3270476868.6699953,
              "average_recovery_balance": 234258.0666621299
          },
          {
              "month": "Mar2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30056219.030485835,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 31528710.48,
              "%Recovery": 0.9640401612998345
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3286717361.4999943,
              "average_recovery_balance": 233597.53813077428
          },
          {
              "month": "Apr2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30205471.824271835,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 20916043.0,
              "%Recovery": 0.636380944860264
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3361252094.479993,
              "average_recovery_balance": 232854.31898025583
          },
          {
              "month": "May2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30890458.24973359,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 29792753.51,
              "%Recovery": 0.8863587934664904
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3373819107.739993,
              "average_recovery_balance": 231606.99579460378
          },
          {
              "month": "Jun2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31005951.163540743,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 32929711.24,
              "%Recovery": 0.9760366572248889
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3352478770.369993,
              "average_recovery_balance": 231861.03951656361
          },
          {
              "month": "Jul2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30809829.961669035,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 29903068.81,
              "%Recovery": 0.891968923838995
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3351569889.439987,
              "average_recovery_balance": 232119.25267954756
          },
          {
              "month": "Aug2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 30801477.19679655,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 25446145.11,
              "%Recovery": 0.7592306277179196
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3380344554.3899937,
              "average_recovery_balance": 233416.9696443857
          },
          {
              "month": "Sep2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31065921.08892472,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 31671298.880000003,
              "%Recovery": 0.9369251675504218
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3394781405.6699934,
              "average_recovery_balance": 233639.46356985503
          },
          {
              "month": "Oct2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31198598.12093158,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 27072004.590000004,
              "%Recovery": 0.7974594342005087
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3416629275.2899914,
              "average_recovery_balance": 233679.5893092122
          },
          {
              "month": "Nov2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31399383.62745473,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 24627010.700000003,
              "%Recovery": 0.7207984453598569
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3443398542.859989,
              "average_recovery_balance": 233624.97746522757
          },
          {
              "month": "Dec2023",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31645397.588622645,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 27315943.759999994,
              "%Recovery": 0.7932844084121655
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3459001625.679993,
              "average_recovery_balance": 234317.95323668834
          },
          {
              "month": "Jan2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 31788792.479832977,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 24276627.32,
              "%Recovery": 0.7018391416693116
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3491558976.5199924,
              "average_recovery_balance": 234647.780680107
          },
          {
              "month": "Feb2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 32087999.875938896,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 23261273.41,
              "%Recovery": 0.6662145352957582
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3524157187.069992,
              "average_recovery_balance": 235729.57773043425
          },
          {
              "month": "Mar2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 32387582.779483825,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 25697105.630000003,
              "%Recovery": 0.7291702459890771
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3535559301.769992,
              "average_recovery_balance": 236065.92119716844
          },
          {
              "month": "Apr2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 32492370.084392447,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 16718206.740000002,
              "%Recovery": 0.472858897646843
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3597301192.379994,
              "average_recovery_balance": 236446.77220849178
          },
          {
              "month": "May2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 33059788.189473003,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 23279965.689999998,
              "%Recovery": 0.6471508624107687
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "OTHERS",
              "active_recovery_balance": 3637752143.0199947,
              "average_recovery_balance": 237095.23189858533
          },
          {
              "month": "Jun2024",
              "sub_segment": "OTHERS",
              "benchmark_recovery": 33431539.062892776,
              "benchmark_rate": 0.9190164076197487,
              "recovery": 20747924.540000003,
              "%Recovery": 0.570350142733349
          }
      ]
  ],
  "pos": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 662787373.01,
              "average_recovery_balance": 39775.993099081796
          },
          {
              "month": "Feb2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14622529.084804423,
              "benchmark_rate": 2.206217209358906,
              "recovery": 17579705.54,
              "%Recovery": 2.652389930146536
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 658289602.2400005,
              "average_recovery_balance": 39520.2979071862
          },
          {
              "month": "Mar2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14523298.49203918,
              "benchmark_rate": 2.206217209358906,
              "recovery": 14118088.469999999,
              "%Recovery": 2.1446622310240895
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 665163216.7099998,
              "average_recovery_balance": 39442.79036468215
          },
          {
              "month": "Apr2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14674945.357381288,
              "benchmark_rate": 2.206217209358906,
              "recovery": 9363525.59,
              "%Recovery": 1.4077034560499972
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 684954738.4499998,
              "average_recovery_balance": 39485.486738340915
          },
          {
              "month": "May2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 15111589.316003177,
              "benchmark_rate": 2.206217209358906,
              "recovery": 14124593.479999999,
              "%Recovery": 2.062120704787425
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 689829860.9900007,
              "average_recovery_balance": 39284.1606486333
          },
          {
              "month": "Jun2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 15219145.108458012,
              "benchmark_rate": 2.206217209358906,
              "recovery": 16946054.43,
              "%Recovery": 2.45655565064697
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 678646310.8799999,
              "average_recovery_balance": 38984.737527573525
          },
          {
              "month": "Jul2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14972411.701313898,
              "benchmark_rate": 2.206217209358906,
              "recovery": 16991951.55,
              "%Recovery": 2.503800768911063
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 673526657.6499997,
              "average_recovery_balance": 38735.142491948456
          },
          {
              "month": "Aug2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14859461.030694136,
              "benchmark_rate": 2.206217209358906,
              "recovery": 15882728.9,
              "%Recovery": 2.358144064470498
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 671762645.4899997,
              "average_recovery_balance": 38627.028088666535
          },
          {
              "month": "Sep2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14820543.09084503,
              "benchmark_rate": 2.206217209358906,
              "recovery": 15565965.629999999,
              "%Recovery": 2.3171823760229797
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 669053890.6999997,
              "average_recovery_balance": 38433.702360983436
          },
          {
              "month": "Oct2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14760782.076508718,
              "benchmark_rate": 2.206217209358906,
              "recovery": 14720352.389999999,
              "%Recovery": 2.2001743947111323
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 667984262.9599996,
              "average_recovery_balance": 38251.40370841204
          },
          {
              "month": "Nov2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14737183.765232757,
              "benchmark_rate": 2.206217209358906,
              "recovery": 13669141.419999998,
              "%Recovery": 2.0463268639636407
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "<1L",
              "active_recovery_balance": 670873565.0099995,
              "average_recovery_balance": 38237.30778056424
          },
          {
              "month": "Dec2023",
              "sub_segment": "<1L",
              "benchmark_recovery": 14800928.044290217,
              "benchmark_rate": 2.206217209358906,
              "recovery": 13921512.600000005,
              "%Recovery": 2.0751320854015916
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 666610064.2099996,
              "average_recovery_balance": 38083.29891510509
          },
          {
              "month": "Jan2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14706865.955919463,
              "benchmark_rate": 2.206217209358906,
              "recovery": 11652282.280000003,
              "%Recovery": 1.747990752856265
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 669615222.9499995,
              "average_recovery_balance": 38033.35356980572
          },
          {
              "month": "Feb2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14773166.285209894,
              "benchmark_rate": 2.206217209358906,
              "recovery": 11882674.369999997,
              "%Recovery": 1.7745526031577814
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 669072087.3699994,
              "average_recovery_balance": 37907.76698980167
          },
          {
              "month": "Mar2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14761183.53457378,
              "benchmark_rate": 2.206217209358906,
              "recovery": 11339393.4,
              "%Recovery": 1.6947939712405418
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 668048771.3299998,
              "average_recovery_balance": 37621.71376527566
          },
          {
              "month": "Apr2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14738606.95999318,
              "benchmark_rate": 2.206217209358906,
              "recovery": 7485878.37,
              "%Recovery": 1.1205586614726604
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 674793585.8900001,
              "average_recovery_balance": 37750.69011972028
          },
          {
              "month": "May2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14887412.219555251,
              "benchmark_rate": 2.206217209358906,
              "recovery": 9209335.98,
              "%Recovery": 1.364763413963635
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "<1L",
              "active_recovery_balance": 679015229.8400003,
              "average_recovery_balance": 37606.07165706692
          },
          {
              "month": "Jun2024",
              "sub_segment": "<1L",
              "benchmark_recovery": 14980550.854898015,
              "benchmark_rate": 2.206217209358906,
              "recovery": 8700680.770000001,
              "%Recovery": 1.2813675434128606
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8470454366.318038,
              "average_recovery_balance": 249895.39669335727
          },
          {
              "month": "Feb2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 78903643.34002209,
              "benchmark_rate": 0.931516066644252,
              "recovery": 94613720.19,
              "%Recovery": 1.116985182828238
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8447265700.258034,
              "average_recovery_balance": 250356.1157125762
          },
          {
              "month": "Mar2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 78687637.19003268,
              "benchmark_rate": 0.931516066644252,
              "recovery": 87203079.4,
              "%Recovery": 1.0323231504051809
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8527532566.938034,
              "average_recovery_balance": 250787.65305820174
          },
          {
              "month": "Apr2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 79435335.94934879,
              "benchmark_rate": 0.931516066644252,
              "recovery": 61419467.75,
              "%Recovery": 0.7202489966221703
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8714152082.998013,
              "average_recovery_balance": 250925.82593290752
          },
          {
              "month": "May2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 81173726.72494124,
              "benchmark_rate": 0.931516066644252,
              "recovery": 75297283.94,
              "%Recovery": 0.8640804432012478
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8774956145.498026,
              "average_recovery_balance": 251165.12996244742
          },
          {
              "month": "Jun2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 81740126.33630128,
              "benchmark_rate": 0.931516066644252,
              "recovery": 83793128.27000001,
              "%Recovery": 0.9549122170028157
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8754737117.21804,
              "average_recovery_balance": 251761.0029682533
          },
          {
              "month": "Jul2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 81551782.83935387,
              "benchmark_rate": 0.931516066644252,
              "recovery": 79165572.83000001,
              "%Recovery": 0.9042598512102
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8765296747.928019,
              "average_recovery_balance": 252369.47909501378
          },
          {
              "month": "Aug2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 81650147.49599561,
              "benchmark_rate": 0.931516066644252,
              "recovery": 76207639.89999999,
              "%Recovery": 0.8694245282455989
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8831898268.018026,
              "average_recovery_balance": 252968.75857182214
          },
          {
              "month": "Sep2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 82270551.35626334,
              "benchmark_rate": 0.931516066644252,
              "recovery": 83526336.46,
              "%Recovery": 0.9457348117614155
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8884504549.968037,
              "average_recovery_balance": 253379.66432717422
          },
          {
              "month": "Oct2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 82760587.32469186,
              "benchmark_rate": 0.931516066644252,
              "recovery": 75853018.29000002,
              "%Recovery": 0.8537675664792463
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 8963019762.578045,
              "average_recovery_balance": 254075.4532011805
          },
          {
              "month": "Nov2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 83491969.14491399,
              "benchmark_rate": 0.931516066644252,
              "recovery": 69074627.26,
              "%Recovery": 0.7706624451325763
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9061014639.54804,
              "average_recovery_balance": 254537.18297511208
          },
          {
              "month": "Dec2023",
              "sub_segment": "1-5L",
              "benchmark_recovery": 84404807.16837776,
              "benchmark_rate": 0.931516066644252,
              "recovery": 73532871.28,
              "%Recovery": 0.8115302116283502
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9129618691.208023,
              "average_recovery_balance": 255060.02936827467
          },
          {
              "month": "Jan2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 85043864.93195942,
              "benchmark_rate": 0.931516066644252,
              "recovery": 70460476.14999999,
              "%Recovery": 0.7717789595950444
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9228313485.518011,
              "average_recovery_balance": 255497.48014945074
          },
          {
              "month": "Feb2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 85963222.79789846,
              "benchmark_rate": 0.931516066644252,
              "recovery": 70971259.52,
              "%Recovery": 0.7690599114494232
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9308482959.078022,
              "average_recovery_balance": 256065.22224576425
          },
          {
              "month": "Mar2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 86710014.32465407,
              "benchmark_rate": 0.931516066644252,
              "recovery": 76867133.04,
              "%Recovery": 0.8257750847041726
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9341399995.848013,
              "average_recovery_balance": 256610.71878273805
          },
          {
              "month": "Apr2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 87016641.81082973,
              "benchmark_rate": 0.931516066644252,
              "recovery": 53584462.56,
              "%Recovery": 0.5736234674012115
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9484463332.888023,
              "average_recovery_balance": 256836.6370474443
          },
          {
              "month": "May2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 88349299.78083485,
              "benchmark_rate": 0.931516066644252,
              "recovery": 67924694.63,
              "%Recovery": 0.7161680344576429
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "1-5L",
              "active_recovery_balance": 9580606857.51802,
              "average_recovery_balance": 257259.65622614915
          },
          {
              "month": "Jun2024",
              "sub_segment": "1-5L",
              "benchmark_recovery": 89244892.15980135,
              "benchmark_rate": 0.931516066644252,
              "recovery": 58810364.54,
              "%Recovery": 0.6138480099916717
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 3938851276.1099987,
              "average_recovery_balance": 651157.427030914
          },
          {
              "month": "Feb2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 22865021.761521187,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 32544661.1,
              "%Recovery": 0.8262475229108178
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 3946730820.4099975,
              "average_recovery_balance": 651813.5128670516
          },
          {
              "month": "Mar2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 22910762.49638546,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 24967437.84,
              "%Recovery": 0.6326106080223205
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 3972040052.3000007,
              "average_recovery_balance": 652651.9967630629
          },
          {
              "month": "Apr2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 23057682.523917906,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 18929975.799999997,
              "%Recovery": 0.47658068777626345
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4051555695.6699963,
              "average_recovery_balance": 653055.3990441645
          },
          {
              "month": "May2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 23519270.633899022,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 22509702.950000003,
              "%Recovery": 0.555581723189853
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4095829492.0499945,
              "average_recovery_balance": 653763.6858818826
          },
          {
              "month": "Jun2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 23776279.910647742,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 23035591.58,
              "%Recovery": 0.562415784756472
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4100293263.659995,
              "average_recovery_balance": 654580.6615038306
          },
          {
              "month": "Jul2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 23802192.093628645,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 17943840.15,
              "%Recovery": 0.4376233356046101
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4163489423.999996,
              "average_recovery_balance": 655564.3873405757
          },
          {
              "month": "Aug2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 24169045.645623066,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 18442041.1,
              "%Recovery": 0.4429467502353386
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4259325858.879999,
              "average_recovery_balance": 656290.5791802772
          },
          {
              "month": "Sep2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 24725375.90931406,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 19786562.1,
              "%Recovery": 0.4645468028408357
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4335425456.540001,
              "average_recovery_balance": 656683.6498848835
          },
          {
              "month": "Oct2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 25167133.882531416,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 23892601.1,
              "%Recovery": 0.5511016471049675
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4395066192.670003,
              "average_recovery_balance": 656764.2248460853
          },
          {
              "month": "Nov2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 25513348.20591973,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 15525998.87,
              "%Recovery": 0.353259727826032
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4488525653.3,
              "average_recovery_balance": 657659.4363809524
          },
          {
              "month": "Dec2023",
              "sub_segment": "5-10L",
              "benchmark_recovery": 26055880.14006155,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 22381031.1,
              "%Recovery": 0.498627674847871
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4550268287.0599985,
              "average_recovery_balance": 657933.5290717175
          },
          {
              "month": "Jan2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 26414295.973911013,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 21246523.88,
              "%Recovery": 0.46692903669923425
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4622196501.879997,
              "average_recovery_balance": 658338.7696738353
          },
          {
              "month": "Feb2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 26831839.08022268,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 20396654.86,
              "%Recovery": 0.44127623850920267
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4719993468.609998,
              "average_recovery_balance": 658573.1084986741
          },
          {
              "month": "Mar2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 27399550.226377107,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 26812299.59,
              "%Recovery": 0.5680579807644526
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4786483795.749997,
              "average_recovery_balance": 658478.9923992292
          },
          {
              "month": "Apr2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 27785526.40836898,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 18475365.0,
              "%Recovery": 0.38599033838586483
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4868532992.029999,
              "average_recovery_balance": 658710.9987863617
          },
          {
              "month": "May2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 28261821.786627166,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 19266759.08,
              "%Recovery": 0.3957405467219905
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "5-10L",
              "active_recovery_balance": 4941663573.5,
              "average_recovery_balance": 659152.1373215953
          },
          {
              "month": "Jun2024",
              "sub_segment": "5-10L",
              "benchmark_recovery": 28686344.62832117,
              "benchmark_rate": 0.5804997487516876,
              "recovery": 17723083.6,
              "%Recovery": 0.3586460983511953
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 493273069.2199999,
              "average_recovery_balance": 1236273.3564411025
          },
          {
              "month": "Feb2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2637660.5523231826,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 4181690.0,
              "%Recovery": 0.8477434226466893
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 504190451.7199999,
              "average_recovery_balance": 1238797.1786732185
          },
          {
              "month": "Mar2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2696038.661633728,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2951312.78,
              "%Recovery": 0.5853567377033548
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 508640980.2099999,
              "average_recovery_balance": 1240587.7566097558
          },
          {
              "month": "Apr2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2719836.805435955,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 1597916.0,
              "%Recovery": 0.3141540029551447
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 526343343.8800001,
              "average_recovery_balance": 1244310.5056264778
          },
          {
              "month": "May2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2814495.989666452,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2652511.71,
              "%Recovery": 0.5039508413741317
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 532894062.23999995,
              "average_recovery_balance": 1245079.5846728971
          },
          {
              "month": "Jun2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2849524.3998630047,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2540732.0,
              "%Recovery": 0.4767799418368689
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 535062214.89,
              "average_recovery_balance": 1244330.7323023255
          },
          {
              "month": "Jul2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2861118.081077678,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2654512.0,
              "%Recovery": 0.49611277457626574
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 555163510.7499999,
              "average_recovery_balance": 1250368.2674549548
          },
          {
              "month": "Aug2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 2968604.985287427,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 4585673.0,
              "%Recovery": 0.826004035064367
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 571189022.9299998,
              "average_recovery_balance": 1255360.4899560437
          },
          {
              "month": "Sep2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 3054297.604539479,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2179701.0,
              "%Recovery": 0.3816076486937541
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 584052301.6400001,
              "average_recovery_balance": 1256026.455139785
          },
          {
              "month": "Oct2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 3123080.931552562,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2259242.0,
              "%Recovery": 0.3868218640104869
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 601264916.6300004,
              "average_recovery_balance": 1260513.452054508
          },
          {
              "month": "Nov2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 3215121.3010648116,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 1755760.0,
              "%Recovery": 0.29201105060989946
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "10L+",
              "active_recovery_balance": 608671395.5600004,
              "average_recovery_balance": 1260189.2247619056
          },
          {
              "month": "Dec2023",
              "sub_segment": "10L+",
              "benchmark_recovery": 3254725.687609095,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2903480.0,
              "%Recovery": 0.4770192950054257
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 611641299.2800004,
              "average_recovery_balance": 1258521.1919341574
          },
          {
              "month": "Jan2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3270606.542201115,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 3049593.0,
              "%Recovery": 0.498591740549544
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 620459691.3700004,
              "average_recovery_balance": 1258538.9277281954
          },
          {
              "month": "Feb2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3317760.7989447312,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2845603.0,
              "%Recovery": 0.45862818158530044
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 632489155.8400004,
              "average_recovery_balance": 1259938.5574502
          },
          {
              "month": "Mar2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3382085.502396038,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 3385258.0,
              "%Recovery": 0.5352278325632451
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 640802618.7200001,
              "average_recovery_balance": 1261422.4777952759
          },
          {
              "month": "Apr2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3426539.770143622,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 1811116.0,
              "%Recovery": 0.28263242800375793
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 664311115.9300004,
              "average_recovery_balance": 1265354.506533334
          },
          {
              "month": "May2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3552245.8741343953,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 3995326.0,
              "%Recovery": 0.601423926860949
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "10L+",
              "active_recovery_balance": 672311414.5100005,
              "average_recovery_balance": 1268512.1028490574
          },
          {
              "month": "Jun2024",
              "sub_segment": "10L+",
              "benchmark_recovery": 3595025.570185188,
              "benchmark_rate": 0.5347262433146913,
              "recovery": 2117218.0,
              "%Recovery": 0.3149162656331052
          }
      ]
  ]
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
  let navigate = useNavigate();
  // const [loader, setLoader] = useState(true);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

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

        <div className="flex">
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
        </div>

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
