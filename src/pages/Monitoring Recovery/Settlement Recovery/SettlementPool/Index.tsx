import React, { useEffect, useState } from "react";

// import Button from "../../../components/Button";

import { useNavigate } from "react-router-dom";


import HomeDashboard from "../../../../components/PerformanceDashboardHeader/HomeDashboard";
import PortfolioGraph from "../../../../components/Monitoring Recovery/PortfolioGraph";
import BarAndLineCombaineGraph from "../../../../components/Monitoring Recovery/BarAndLineCombaineGraph";
import Button from "../../../../components/Button";
import SettlementPoolLhs from "../../../../components/Monitoring Recovery/SettlementPoolLhs";
import SettlementPoolRhs from "../../../../components/Monitoring Recovery/SettlementPoolRhs";

const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "$ Value" },
//   { id: "uniquePayer", label: "# Accounts" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "location", name: "Location" },
  { id: "mob", name: "Vintage" },
  { id: "pos", name: "POS" },
 
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
  { id: "UTTAR PRADESH", name: "UP" },
  { id: "MAHARASHTRA", name: "MH" },
  { id: "TAMIL NADU", name: "TN" },
  { id: "MADHYA PRADESH", name: "MP" },
  { id: "KARNATAKA", name: "KA" },
  { id: "HARYANA", name: "HR" },
  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "TELANGANA", name: "TG" },
  { id: "GUJARAT", name: "GJ" },
  { id: "RAJASTHAN", name: "RJ" },
  { id: "Others", name: "OTHERS" },
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
const recoveryStaticData = 
{
    
    "All": [
            //    [{
            //        "segment": "All",
            //        "month": "Feb2023",
            //        "settlement_amount": 438253096.74,
            //        "Average_Waiver_%": 0.6259513827613615
            //    },
            //    {
            //        "segment": "All",
            //        "month": "Feb2023",
            //        "recovery": 32336936.7,
            //        "Recovery_%": 0.07378598563374067
            //    }],
            //   [ {
            //        "segment": "All",
            //        "month": "Mar2023",
            //        "settlement_amount": 455305622.74,
            //        "Average_Waiver_%": 0.6197504998904437
            //    },
            //    {
            //        "segment": "All",
            //        "month": "Mar2023",
            //        "recovery": 44139874.32,
            //        "Recovery_%": 0.09694559459724893
            //    }],
              [ {
                   "segment": "All",
                   "month": "Apr2023",
                   "settlement_amount": 464057156.84,
                   "Average_Waiver_%": 0.6151434920677004
               },
               {
                   "segment": "All",
                   "month": "Apr2023",
                   "recovery": 20434115.75,
                   "Recovery_%": 0.04403361837827529
               }],
               [{
                   "segment": "All",
                   "month": "May2023",
                   "settlement_amount": 481561970.84,
                   "Average_Waiver_%": 0.6115981440494135
               },
               {
                   "segment": "All",
                   "month": "May2023",
                   "recovery": 20344483.18,
                   "Recovery_%": 0.04224686418761979
               }],
               [{
                   "segment": "All",
                   "month": "Jun2023",
                   "settlement_amount": 480370697.93,
                   "Average_Waiver_%": 0.6091811581659677
               },
               {
                   "segment": "All",
                   "month": "Jun2023",
                   "recovery": 18632862.6,
                   "Recovery_%": 0.038788507875880465
               }],
               [{
                   "segment": "All",
                   "month": "Jul2023",
                   "settlement_amount": 464522912.68,
                   "Average_Waiver_%": 0.6090487768730223
               },
               {
                   "segment": "All",
                   "month": "Jul2023",
                   "recovery": 15536491.3,
                   "Recovery_%": 0.03344612477856988
               }],
              [ {
                   "segment": "All",
                   "month": "Aug2023",
                   "settlement_amount": 465942485.68,
                   "Average_Waiver_%": 0.6094314960854231
               },
               {
                   "segment": "All",
                   "month": "Aug2023",
                   "recovery": 13898870.1,
                   "Recovery_%": 0.02982958310770026
               }],
              [ {
                   "segment": "All",
                   "month": "Sep2023",
                   "settlement_amount": 473726072.68,
                   "Average_Waiver_%": 0.6098288345329327
               },
               {
                   "segment": "All",
                   "month": "Sep2023",
                   "recovery": 14230216.51,
                   "Recovery_%": 0.030038913479040138
               }],
               [{
                   "segment": "All",
                   "month": "Oct2023",
                   "settlement_amount": 485381274.68,
                   "Average_Waiver_%": 0.6070480143731808
               },
               {
                   "segment": "All",
                   "month": "Oct2023",
                   "recovery": 12237137.0,
                   "Recovery_%": 0.025211390793902475
               }],
               [{
                   "segment": "All",
                   "month": "Nov2023",
                   "settlement_amount": 498000729.68,
                   "Average_Waiver_%": 0.6049501372307217
               },
               {
                   "segment": "All",
                   "month": "Nov2023",
                   "recovery": 10307404.27,
                   "Recovery_%": 0.020697568609233205
               }],
               [{
                   "segment": "All",
                   "month": "Dec2023",
                   "settlement_amount": 513110294.68,
                   "Average_Waiver_%": 0.6038926416346291
               },
               {
                   "segment": "All",
                   "month": "Dec2023",
                   "recovery": 12308860.4,
                   "Recovery_%": 0.023988722361683253
               }],
               [{
                   "segment": "All",
                   "month": "Jan2024",
                   "settlement_amount": 529523318.68,
                   "Average_Waiver_%": 0.6021232308070124
               },
               {
                   "segment": "All",
                   "month": "Jan2024",
                   "recovery": 13169689.4,
                   "Recovery_%": 0.02487083936705471
               }],
              [ {
                   "segment": "All",
                   "month": "Feb2024",
                   "settlement_amount": 546491366.68,
                   "Average_Waiver_%": 0.6002571188702254
               },
               {
                   "segment": "All",
                   "month": "Feb2024",
                   "recovery": 12827355.0,
                   "Recovery_%": 0.02347220062766537
               }],
               [{
                   "segment": "All",
                   "month": "Mar2024",
                   "settlement_amount": 565609424.68,
                   "Average_Waiver_%": 0.59884086292973
               },
               {
                   "segment": "All",
                   "month": "Mar2024",
                   "recovery": 17335991.0,
                   "Recovery_%": 0.03065010985240926
               }],
              [ {
                   "segment": "All",
                   "month": "Apr2024",
                   "settlement_amount": 578253289.68,
                   "Average_Waiver_%": 0.5960918581948601
               },
               {
                   "segment": "All",
                   "month": "Apr2024",
                   "recovery": 14388164.18,
                   "Recovery_%": 0.02488211383624342
               }],
              [ {
                   "segment": "All",
                   "month": "May2024",
                   "settlement_amount": 599353186.68,
                   "Average_Waiver_%": 0.5948962492099086
               },
               {
                   "segment": "All",
                   "month": "May2024",
                   "recovery": 19757297.0,
                   "Recovery_%": 0.03296436465023519
               }],
              [ {
                   "segment": "All",
                   "month": "Jun2024",
                   "settlement_amount": 612858920.68,
                   "Average_Waiver_%": 0.5911869094595126
               },
               {
                   "segment": "All",
                   "month": "Jun2024",
                   "recovery": 18891896.0,
                   "Recovery_%": 0.030825848107160495
               }]
           ],
    "Vintage": [
        //    [{
        //        "segment": "V1",
        //        "month": "Feb2023",
        //        "settlement_amount": 69234781.44,
        //        "Average_Waiver_%": 0.5775010897990576
        //    },
        //    {
        //        "segment": "V1",
        //        "month": "Feb2023",
        //        "recovery": 8891118.7,
        //        "Recovery_%": 0.12841982765129675
        //    }],
        //   [ {
        //        "segment": "V1",
        //        "month": "Mar2023",
        //        "settlement_amount": 51395144.44,
        //        "Average_Waiver_%": 0.5713526917450503
        //    },
        //    {
        //        "segment": "V1",
        //        "month": "Mar2023",
        //        "recovery": 6493678.26,
        //        "Recovery_%": 0.12634808853550136
        //    }],
          [ {
               "segment": "V1",
               "month": "Apr2023",
               "settlement_amount": 58860935.0,
               "Average_Waiver_%": 0.5731365387406928
           },
           {
               "segment": "V1",
               "month": "Apr2023",
               "recovery": 1711432.0,
               "Recovery_%": 0.029075854809306037
           }],
          [ {
               "segment": "V1",
               "month": "May2023",
               "settlement_amount": 61857134.0,
               "Average_Waiver_%": 0.5809235025242387
           },
           {
               "segment": "V1",
               "month": "May2023",
               "recovery": 2927163.0,
               "Recovery_%": 0.04732134857719079
           }],
           [{
               "segment": "V1",
               "month": "Jun2023",
               "settlement_amount": 65274944.09,
               "Average_Waiver_%": 0.5758169879180247
           },
           {
               "segment": "V1",
               "month": "Jun2023",
               "recovery": 2996916.12,
               "Recovery_%": 0.04591219742552215
           }],
          [ {
               "segment": "V1",
               "month": "Jul2023",
               "settlement_amount": 62193740.09,
               "Average_Waiver_%": 0.5705117781983065
           },
           {
               "segment": "V1",
               "month": "Jul2023",
               "recovery": 2532965.46,
               "Recovery_%": 0.04072701619704119
           }],
          [ {
               "segment": "V1",
               "month": "Aug2023",
               "settlement_amount": 70322734.09,
               "Average_Waiver_%": 0.57224730194408
           },
           {
               "segment": "V1",
               "month": "Aug2023",
               "recovery": 3529883.0,
               "Recovery_%": 0.05019547441773818
           }],
          [ {
               "segment": "V1",
               "month": "Sep2023",
               "settlement_amount": 75095397.09,
               "Average_Waiver_%": 0.5722068836586804
           },
           {
               "segment": "V1",
               "month": "Sep2023",
               "recovery": 3205909.0,
               "Recovery_%": 0.04269115184460369
           }],
          [ {
               "segment": "V1",
               "month": "Oct2023",
               "settlement_amount": 79201489.0,
               "Average_Waiver_%": 0.5715588897672893
           },
           {
               "segment": "V1",
               "month": "Oct2023",
               "recovery": 3116070.0,
               "Recovery_%": 0.03934357850267184
           }],
          [ {
               "segment": "V1",
               "month": "Nov2023",
               "settlement_amount": 83607882.0,
               "Average_Waiver_%": 0.5782943337350418
           },
           {
               "segment": "V1",
               "month": "Nov2023",
               "recovery": 2258499.5,
               "Recovery_%": 0.02701299741093788
           }],
         [  {
               "segment": "V1",
               "month": "Dec2023",
               "settlement_amount": 82592709.0,
               "Average_Waiver_%": 0.5777261506982024
           },
           {
               "segment": "V1",
               "month": "Dec2023",
               "recovery": 2920915.0,
               "Recovery_%": 0.03536528872058186
           }],
           [{
               "segment": "V1",
               "month": "Jan2024",
               "settlement_amount": 81307656.0,
               "Average_Waiver_%": 0.5739515355307211
           },
           {
               "segment": "V1",
               "month": "Jan2024",
               "recovery": 3383002.0,
               "Recovery_%": 0.04160742255317261
           }],
          [ {
               "segment": "V1",
               "month": "Feb2024",
               "settlement_amount": 81205874.0,
               "Average_Waiver_%": 0.5802029586981062
           },
           {
               "segment": "V1",
               "month": "Feb2024",
               "recovery": 2726174.0,
               "Recovery_%": 0.033571142895401876
           }],
        [   {
               "segment": "V1",
               "month": "Mar2024",
               "settlement_amount": 82294303.0,
               "Average_Waiver_%": 0.5847349645060315
           },
           {
               "segment": "V1",
               "month": "Mar2024",
               "recovery": 3523355.0,
               "Recovery_%": 0.042814081553130115
           }],
         [  {
               "segment": "V1",
               "month": "Apr2024",
               "settlement_amount": 79694754.0,
               "Average_Waiver_%": 0.5818950309682348
           },
           {
               "segment": "V1",
               "month": "Apr2024",
               "recovery": 2514036.0,
               "Recovery_%": 0.03154581542468906
           }],
       [    {
               "segment": "V1",
               "month": "May2024",
               "settlement_amount": 82336480.0,
               "Average_Waiver_%": 0.590916204361269
           },
           {
               "segment": "V1",
               "month": "May2024",
               "recovery": 5000955.0,
               "Recovery_%": 0.060738022805930006
           }],
        [   {
               "segment": "V1",
               "month": "Jun2024",
               "settlement_amount": 77979444.0,
               "Average_Waiver_%": 0.5797724729721695
           },
           {
               "segment": "V1",
               "month": "Jun2024",
               "recovery": 4414876.0,
               "Recovery_%": 0.05661589482479511
           }],
    //    [    {
    //            "segment": "V2",
    //            "month": "Feb2023",
    //            "settlement_amount": 37483406.46,
    //            "Average_Waiver_%": 0.6085907394496045
    //        },
    //        {
    //            "segment": "V2",
    //            "month": "Feb2023",
    //            "recovery": 2911085.0,
    //            "Recovery_%": 0.07766329890818573
    //        }],
        //  [  {
        //        "segment": "V2",
        //        "month": "Mar2023",
        //        "settlement_amount": 65130853.0,
        //        "Average_Waiver_%": 0.5773684381999842
        //    },
        //    {
        //        "segment": "V2",
        //        "month": "Mar2023",
        //        "recovery": 9343916.7,
        //        "Recovery_%": 0.14346375442065834
        //    }],
          [ {
               "segment": "V2",
               "month": "Apr2023",
               "settlement_amount": 60701603.0,
               "Average_Waiver_%": 0.5696525421952886
           },
           {
               "segment": "V2",
               "month": "Apr2023",
               "recovery": 3884680.0,
               "Recovery_%": 0.06399633301282011
           }],
          [ {
               "segment": "V2",
               "month": "May2023",
               "settlement_amount": 64378428.0,
               "Average_Waiver_%": 0.5637702427761079
           },
           {
               "segment": "V2",
               "month": "May2023",
               "recovery": 3989315.4,
               "Recovery_%": 0.061966648207067127
           }],
         [  {
               "segment": "V2",
               "month": "Jun2023",
               "settlement_amount": 61831240.0,
               "Average_Waiver_%": 0.5563856169216393
           },
           {
               "segment": "V2",
               "month": "Jun2023",
               "recovery": 2894871.6,
               "Recovery_%": 0.04681891548673454
           }],
         [  {
               "segment": "V2",
               "month": "Jul2023",
               "settlement_amount": 43098284.0,
               "Average_Waiver_%": 0.5686564328960286
           },
           {
               "segment": "V2",
               "month": "Jul2023",
               "recovery": 1445174.0,
               "Recovery_%": 0.03353205431566603
           }],
          [ {
               "segment": "V2",
               "month": "Aug2023",
               "settlement_amount": 50764428.0,
               "Average_Waiver_%": 0.5732680070117743
           },
           {
               "segment": "V2",
               "month": "Aug2023",
               "recovery": 1204963.0,
               "Recovery_%": 0.02373636515711356
           }],
           [{
               "segment": "V2",
               "month": "Sep2023",
               "settlement_amount": 55504052.0,
               "Average_Waiver_%": 0.5769891946678851
           },
           {
               "segment": "V2",
               "month": "Sep2023",
               "recovery": 2037826.0,
               "Recovery_%": 0.036714905066750805
           }],
          [ {
               "segment": "V2",
               "month": "Oct2023",
               "settlement_amount": 60548062.09,
               "Average_Waiver_%": 0.5694462675308577
           },
           {
               "segment": "V2",
               "month": "Oct2023",
               "recovery": 2237811.0,
               "Recovery_%": 0.036959250597874915
           }],
          [ {
               "segment": "V2",
               "month": "Nov2023",
               "settlement_amount": 59745390.09,
               "Average_Waiver_%": 0.5608787386028814
           },
           {
               "segment": "V2",
               "month": "Nov2023",
               "recovery": 1262681.77,
               "Recovery_%": 0.021134379875968768
           }],
         [  {
               "segment": "V2",
               "month": "Dec2023",
               "settlement_amount": 67324334.09,
               "Average_Waiver_%": 0.5638331689490074
           },
           {
               "segment": "V2",
               "month": "Dec2023",
               "recovery": 1893676.0,
               "Recovery_%": 0.02812766031177539
           }],
         [  {
               "segment": "V2",
               "month": "Jan2024",
               "settlement_amount": 73317597.09,
               "Average_Waiver_%": 0.5611785792634842
           },
           {
               "segment": "V2",
               "month": "Jan2024",
               "recovery": 1597951.0,
               "Recovery_%": 0.02179491777449358
           }],
         [  {
               "segment": "V2",
               "month": "Feb2024",
               "settlement_amount": 77908489.0,
               "Average_Waiver_%": 0.5612137091497527
           },
           {
               "segment": "V2",
               "month": "Feb2024",
               "recovery": 2093832.0,
               "Recovery_%": 0.026875530855180622
           }],
       [    {
               "segment": "V2",
               "month": "Mar2024",
               "settlement_amount": 82568046.0,
               "Average_Waiver_%": 0.5704663495761736
           },
           {
               "segment": "V2",
               "month": "Mar2024",
               "recovery": 2347063.0,
               "Recovery_%": 0.028425802882630892
           }],
          [ {
               "segment": "V2",
               "month": "Apr2024",
               "settlement_amount": 81068722.0,
               "Average_Waiver_%": 0.565720822903199
           },
           {
               "segment": "V2",
               "month": "Apr2024",
               "recovery": 2347549.0,
               "Recovery_%": 0.028957518289236137
           }],
          [ {
               "segment": "V2",
               "month": "May2024",
               "settlement_amount": 80597656.0,
               "Average_Waiver_%": 0.5591455096310395
           },
           {
               "segment": "V2",
               "month": "May2024",
               "recovery": 2591142.0,
               "Recovery_%": 0.03214909872813174
           }],
           [{
               "segment": "V2",
               "month": "Jun2024",
               "settlement_amount": 80860874.0,
               "Average_Waiver_%": 0.5664542993350915
           },
           {
               "segment": "V2",
               "month": "Jun2024",
               "recovery": 2962614.0,
               "Recovery_%": 0.03663841179851704
           }],
        //    [{
        //        "segment": "V3",
        //        "month": "Feb2023",
        //        "settlement_amount": 39486734.25,
        //        "Average_Waiver_%": 0.616424273471369
        //    },
        //    {
        //        "segment": "V3",
        //        "month": "Feb2023",
        //        "recovery": 2755365.0,
        //        "Recovery_%": 0.0697795108239421
        //    }],
        //    [{
        //        "segment": "V3",
        //        "month": "Mar2023",
        //        "settlement_amount": 38024788.71,
        //        "Average_Waiver_%": 0.6162862393073146
        //    },
        //    {
        //        "segment": "V3",
        //        "month": "Mar2023",
        //        "recovery": 3942037.0,
        //        "Recovery_%": 0.1036701881518489
        //    }],
         [  {
               "segment": "V3",
               "month": "Apr2023",
               "settlement_amount": 36659567.25,
               "Average_Waiver_%": 0.6066131542490281
           },
           {
               "segment": "V3",
               "month": "Apr2023",
               "recovery": 1432734.0,
               "Recovery_%": 0.0390821307362814
           }],
          [ {
               "segment": "V3",
               "month": "May2023",
               "settlement_amount": 36401671.25,
               "Average_Waiver_%": 0.6020570840286379
           },
           {
               "segment": "V3",
               "month": "May2023",
               "recovery": 1753590.9,
               "Recovery_%": 0.04817336237000382
           }],
        [   {
               "segment": "V3",
               "month": "Jun2023",
               "settlement_amount": 35467150.0,
               "Average_Waiver_%": 0.5948127685035729
           },
           {
               "segment": "V3",
               "month": "Jun2023",
               "recovery": 983419.0,
               "Recovery_%": 0.027727601456559097
           }],
         [  {
               "segment": "V3",
               "month": "Jul2023",
               "settlement_amount": 54762138.0,
               "Average_Waiver_%": 0.5692803607367006
           },
           {
               "segment": "V3",
               "month": "Jul2023",
               "recovery": 2281311.0,
               "Recovery_%": 0.04165854517951801
           }],
          [ {
               "segment": "V3",
               "month": "Aug2023",
               "settlement_amount": 47596503.0,
               "Average_Waiver_%": 0.5738534246605741
           },
           {
               "segment": "V3",
               "month": "Aug2023",
               "recovery": 1647354.0,
               "Recovery_%": 0.034610820042808604
           }],
          [ {
               "segment": "V3",
               "month": "Sep2023",
               "settlement_amount": 47108843.0,
               "Average_Waiver_%": 0.5781732424296402
           },
           {
               "segment": "V3",
               "month": "Sep2023",
               "recovery": 2145623.51,
               "Recovery_%": 0.04554608802428028
           }],
           [{
               "segment": "V3",
               "month": "Oct2023",
               "settlement_amount": 45956493.0,
               "Average_Waiver_%": 0.5746144489750823
           },
           {
               "segment": "V3",
               "month": "Oct2023",
               "recovery": 1206237.0,
               "Recovery_%": 0.026247368353368477
           }],
         [  {
               "segment": "V3",
               "month": "Nov2023",
               "settlement_amount": 37399864.0,
               "Average_Waiver_%": 0.5723348889331726
           },
           {
               "segment": "V3",
               "month": "Nov2023",
               "recovery": 367352.0,
               "Recovery_%": 0.009822281706692837
           }],
           [{
               "segment": "V3",
               "month": "Dec2023",
               "settlement_amount": 47135758.0,
               "Average_Waiver_%": 0.5747024400870172
           },
           {
               "segment": "V3",
               "month": "Dec2023",
               "recovery": 654165.0,
               "Recovery_%": 0.013878317179072414
           }],
           [{
               "segment": "V3",
               "month": "Jan2024",
               "settlement_amount": 52336952.0,
               "Average_Waiver_%": 0.5769909633233813
           },
           {
               "segment": "V3",
               "month": "Jan2024",
               "recovery": 796817.0,
               "Recovery_%": 0.015224749809656473
           }],
           [{
               "segment": "V3",
               "month": "Feb2024",
               "settlement_amount": 58694062.09,
               "Average_Waiver_%": 0.5650076315704015
           },
           {
               "segment": "V3",
               "month": "Feb2024",
               "recovery": 759274.0,
               "Recovery_%": 0.012936129703133313
           }],
          [ {
               "segment": "V3",
               "month": "Mar2024",
               "settlement_amount": 58932390.09,
               "Average_Waiver_%": 0.553912487173853
           },
           {
               "segment": "V3",
               "month": "Mar2024",
               "recovery": 1217670.0,
               "Recovery_%": 0.020662151970086504
           }],
         [  {
               "segment": "V3",
               "month": "Apr2024",
               "settlement_amount": 66619334.09,
               "Average_Waiver_%": 0.5552313716868729
           },
           {
               "segment": "V3",
               "month": "Apr2024",
               "recovery": 1045708.18,
               "Recovery_%": 0.01569676722657256
           }],
          [ {
               "segment": "V3",
               "month": "May2024",
               "settlement_amount": 72230610.09,
               "Average_Waiver_%": 0.5528779843389162
           },
           {
               "segment": "V3",
               "month": "May2024",
               "recovery": 1989486.0,
               "Recovery_%": 0.027543530333207517
           }],
          [ {
               "segment": "V3",
               "month": "Jun2024",
               "settlement_amount": 76731502.0,
               "Average_Waiver_%": 0.5501993479753369
           },
           {
               "segment": "V3",
               "month": "Jun2024",
               "recovery": 1940093.0,
               "Recovery_%": 0.025284178589388227
           }],
        // [   {
        //        "segment": "V4",
        //        "month": "Feb2023",
        //        "settlement_amount": 207975256.59,
        //        "Average_Waiver_%": 0.6394465901357979
        //    },
        //    {
        //        "segment": "V4",
        //        "month": "Feb2023",
        //        "recovery": 12999349.0,
        //        "Recovery_%": 0.06250430562336926
        //    }],
        //   [ {
        //        "segment": "V4",
        //        "month": "Mar2023",
        //        "settlement_amount": 203612481.59,
        //        "Average_Waiver_%": 0.6353176599576575
        //    },
        //    {
        //        "segment": "V4",
        //        "month": "Mar2023",
        //        "recovery": 16315559.98,
        //        "Recovery_%": 0.080130451004735
        //    }],
          [ {
               "segment": "V4",
               "month": "Apr2023",
               "settlement_amount": 200449952.59,
               "Average_Waiver_%": 0.6316571620240164
           },
           {
               "segment": "V4",
               "month": "Apr2023",
               "recovery": 8490089.75,
               "Recovery_%": 0.04235515968100833
           }],
          [ {
               "segment": "V4",
               "month": "May2023",
               "settlement_amount": 199292100.59,
               "Average_Waiver_%": 0.6281455389497518
           },
           {
               "segment": "V4",
               "month": "May2023",
               "recovery": 7151076.0,
               "Recovery_%": 0.03588238559797098
           }],
           [{
               "segment": "V4",
               "month": "Jun2023",
               "settlement_amount": 190443814.27,
               "Average_Waiver_%": 0.6282401087727807
           },
           {
               "segment": "V4",
               "month": "Jun2023",
               "recovery": 7691796.02,
               "Recovery_%": 0.040388794193625135
           }],
          [ {
               "segment": "V4",
               "month": "Jul2023",
               "settlement_amount": 179528664.02,
               "Average_Waiver_%": 0.6302023778093978
           },
           {
               "segment": "V4",
               "month": "Jul2023",
               "recovery": 5270863.0,
               "Recovery_%": 0.02935945091984203
           }],
          [ {
               "segment": "V4",
               "month": "Aug2023",
               "settlement_amount": 171239518.02,
               "Average_Waiver_%": 0.6302144556511519
           },
           {
               "segment": "V4",
               "month": "Aug2023",
               "recovery": 4033861.02,
               "Recovery_%": 0.023556834699387925
           }],
           [{
               "segment": "V4",
               "month": "Sep2023",
               "settlement_amount": 121326700.0,
               "Average_Waiver_%": 0.6197328796782896
           },
           {
               "segment": "V4",
               "month": "Sep2023",
               "recovery": 3003067.0,
               "Recovery_%": 0.024751905392629982
           }],
          [ {
               "segment": "V4",
               "month": "Oct2023",
               "settlement_amount": 106499428.0,
               "Average_Waiver_%": 0.6136715645686981
           },
           {
               "segment": "V4",
               "month": "Oct2023",
               "recovery": 2315822.0,
               "Recovery_%": 0.021744924301377467
           }],
          [ {
               "segment": "V4",
               "month": "Nov2023",
               "settlement_amount": 112064643.0,
               "Average_Waiver_%": 0.6008504364503132
           },
           {
               "segment": "V4",
               "month": "Nov2023",
               "recovery": 2679814.0,
               "Recovery_%": 0.02391310879382358
           }],
          [ {
               "segment": "V4",
               "month": "Dec2023",
               "settlement_amount": 103782087.0,
               "Average_Waiver_%": 0.5982281241317556
           },
           {
               "segment": "V4",
               "month": "Dec2023",
               "recovery": 2845930.4,
               "Recovery_%": 0.02742217353944713
           }],
         [  {
               "segment": "V4",
               "month": "Jan2024",
               "settlement_amount": 103963899.0,
               "Average_Waiver_%": 0.5931709346123036
           },
           {
               "segment": "V4",
               "month": "Jan2024",
               "recovery": 2913209.4,
               "Recovery_%": 0.028021355759271782
           }],
         [  {
               "segment": "V4",
               "month": "Feb2024",
               "settlement_amount": 100749244.0,
               "Average_Waiver_%": 0.587442194962
           },
           {
               "segment": "V4",
               "month": "Feb2024",
               "recovery": 2454303.0,
               "Recovery_%": 0.024360510337923726
           }],
          [ {
               "segment": "V4",
               "month": "Mar2024",
               "settlement_amount": 106402426.0,
               "Average_Waiver_%": 0.5828884995653076
           },
           {
               "segment": "V4",
               "month": "Mar2024",
               "recovery": 2643062.0,
               "Recovery_%": 0.024840241894484624
           }],
         [  {
               "segment": "V4",
               "month": "Apr2024",
               "settlement_amount": 111610805.0,
               "Average_Waiver_%": 0.5812838062068123
           },
           {
               "segment": "V4",
               "month": "Apr2024",
               "recovery": 2203403.0,
               "Recovery_%": 0.019741843094850896
           }],
          [ {
               "segment": "V4",
               "month": "May2024",
               "settlement_amount": 119132180.0,
               "Average_Waiver_%": 0.5806719961655319
           },
           {
               "segment": "V4",
               "month": "May2024",
               "recovery": 2732727.0,
               "Recovery_%": 0.022938613227760963
           }],
          [ {
               "segment": "V4",
               "month": "Jun2024",
               "settlement_amount": 126264992.09,
               "Average_Waiver_%": 0.5700548539275931
           },
           {
               "segment": "V4",
               "month": "Jun2024",
               "recovery": 2462211.0,
               "Recovery_%": 0.019500345735142238
           }],
        //  [  {
        //        "segment": "V5",
        //        "month": "Feb2023",
        //        "settlement_amount": 75233936.0,
        //        "Average_Waiver_%": 0.6384188682985221
        //    },
        //    {
        //        "segment": "V5",
        //        "month": "Feb2023",
        //        "recovery": 4400519.0,
        //        "Recovery_%": 0.058491144209177094
        //    }],
        //   [ {
        //        "segment": "V5",
        //        "month": "Mar2023",
        //        "settlement_amount": 86936173.0,
        //        "Average_Waiver_%": 0.636391502288002
        //    },
        //    {
        //        "segment": "V5",
        //        "month": "Mar2023",
        //        "recovery": 7099565.38,
        //        "Recovery_%": 0.08166411212971153
        //    }],
          [ {
               "segment": "V5",
               "month": "Apr2023",
               "settlement_amount": 95313367.0,
               "Average_Waiver_%": 0.6311511458941488
           },
           {
               "segment": "V5",
               "month": "Apr2023",
               "recovery": 4455680.0,
               "Recovery_%": 0.04674769279738067
           }],
          [ {
               "segment": "V5",
               "month": "May2023",
               "settlement_amount": 104650159.0,
               "Average_Waiver_%": 0.6247109044053232
           },
           {
               "segment": "V5",
               "month": "May2023",
               "recovery": 3934724.0,
               "Recovery_%": 0.03759883441744221
           }],
          [ {
               "segment": "V5",
               "month": "Jun2023",
               "settlement_amount": 111260471.57,
               "Average_Waiver_%": 0.6216105418078923
           },
           {
               "segment": "V5",
               "month": "Jun2023",
               "recovery": 3852834.82,
               "Recovery_%": 0.03462896359895412
           }],
        [   {
               "segment": "V5",
               "month": "Jul2023",
               "settlement_amount": 107691853.57,
               "Average_Waiver_%": 0.6224748415428032
           },
           {
               "segment": "V5",
               "month": "Jul2023",
               "recovery": 3229316.0,
               "Recovery_%": 0.029986632163415555
           }],
          [ {
               "segment": "V5",
               "month": "Aug2023",
               "settlement_amount": 108314069.57,
               "Average_Waiver_%": 0.6233110187482105
           },
           {
               "segment": "V5",
               "month": "Aug2023",
               "recovery": 3309412.0,
               "Recovery_%": 0.030553851527674626
           }],
         [  {
               "segment": "V5",
               "month": "Sep2023",
               "settlement_amount": 155415647.59,
               "Average_Waiver_%": 0.6341627593796004
           },
           {
               "segment": "V5",
               "month": "Sep2023",
               "recovery": 3325651.0,
               "Recovery_%": 0.021398430927453048
           }],
          [ {
               "segment": "V5",
               "month": "Oct2023",
               "settlement_amount": 171805619.59,
               "Average_Waiver_%": 0.6333892812312022
           },
           {
               "segment": "V5",
               "month": "Oct2023",
               "recovery": 2929947.0,
               "Recovery_%": 0.0170538484538054
           }],
          [ {
               "segment": "V5",
               "month": "Nov2023",
               "settlement_amount": 182890067.59,
               "Average_Waiver_%": 0.6327438060671826
           },
           {
               "segment": "V5",
               "month": "Nov2023",
               "recovery": 3457723.0,
               "Recovery_%": 0.018906018492767292
           }],
         [  {
               "segment": "V5",
               "month": "Dec2023",
               "settlement_amount": 188368323.59,
               "Average_Waiver_%": 0.6320639276218816
           },
           {
               "segment": "V5",
               "month": "Dec2023",
               "recovery": 3487562.0,
               "Recovery_%": 0.018514588512190518
           }],
          [ {
               "segment": "V5",
               "month": "Jan2024",
               "settlement_amount": 193309931.59,
               "Average_Waiver_%": 0.6322075949035126
           },
           {
               "segment": "V5",
               "month": "Jan2024",
               "recovery": 3998260.0,
               "Recovery_%": 0.020683158734338052
           }],
       [    {
               "segment": "V5",
               "month": "Feb2024",
               "settlement_amount": 200695914.59,
               "Average_Waiver_%": 0.6311457947817629
           },
           {
               "segment": "V5",
               "month": "Feb2024",
               "recovery": 4353872.0,
               "Recovery_%": 0.02169387458082786
           }],
          [ {
               "segment": "V5",
               "month": "Mar2024",
               "settlement_amount": 206484626.59,
               "Average_Waiver_%": 0.6279418747947056
           },
           {
               "segment": "V5",
               "month": "Mar2024",
               "recovery": 6535246.0,
               "Recovery_%": 0.03165003665370456
           }],
          [ {
               "segment": "V5",
               "month": "Apr2024",
               "settlement_amount": 205951640.59,
               "Average_Waiver_%": 0.6260877553387846
           },
           {
               "segment": "V5",
               "month": "Apr2024",
               "recovery": 5773146.0,
               "Recovery_%": 0.028031561115324833
           }],
          [ {
               "segment": "V5",
               "month": "May2024",
               "settlement_amount": 209393626.59,
               "Average_Waiver_%": 0.6231903940609586
           },
           {
               "segment": "V5",
               "month": "May2024",
               "recovery": 6149620.0,
               "Recovery_%": 0.029368706680080427
           }],
         [  {
               "segment": "V5",
               "month": "Jun2024",
               "settlement_amount": 215088674.59,
               "Average_Waiver_%": 0.6216571424150688
           },
           {
               "segment": "V5",
               "month": "Jun2024",
               "recovery": 5991002.0,
               "Recovery_%": 0.027853637628387416
           }],
        //  [  {
        //        "segment": "V6",
        //        "month": "Feb2023",
        //        "settlement_amount": 7440482.0,
        //        "Average_Waiver_%": 0.6389738055800479
        //    },
        //    {
        //        "segment": "V6",
        //        "month": "Feb2023",
        //        "recovery": 286000.0,
        //        "Recovery_%": 0.03843836998732071
        //    }],
        //   [ {
        //        "segment": "V6",
        //        "month": "Mar2023",
        //        "settlement_amount": 8773482.0,
        //        "Average_Waiver_%": 0.6218734900296454
        //    },
        //    {
        //        "segment": "V6",
        //        "month": "Mar2023",
        //        "recovery": 695617.0,
        //        "Recovery_%": 0.07928630844629304
        //    }],
          [ {
               "segment": "V6",
               "month": "Apr2023",
               "settlement_amount": 10639032.0,
               "Average_Waiver_%": 0.6139074427738029
           },
           {
               "segment": "V6",
               "month": "Apr2023",
               "recovery": 423000.0,
               "Recovery_%": 0.039759256293241715
           }],
        [   {
               "segment": "V6",
               "month": "May2023",
               "settlement_amount": 13394778.0,
               "Average_Waiver_%": 0.6104701772851346
           },
           {
               "segment": "V6",
               "month": "May2023",
               "recovery": 510613.88,
               "Recovery_%": 0.038120368997530234
           }],
          [ {
               "segment": "V6",
               "month": "Jun2023",
               "settlement_amount": 14645378.0,
               "Average_Waiver_%": 0.6140669351350511
           },
           {
               "segment": "V6",
               "month": "Jun2023",
               "recovery": 198025.03999999998,
               "Recovery_%": 0.013521333488285518
           }],
         [  {
               "segment": "V6",
               "month": "Jul2023",
               "settlement_amount": 15771533.0,
               "Average_Waiver_%": 0.6194579058326404
           },
           {
               "segment": "V6",
               "month": "Jul2023",
               "recovery": 724472.0,
               "Recovery_%": 0.04593542048195315
           }],
        [   {
               "segment": "V6",
               "month": "Aug2023",
               "settlement_amount": 16191533.0,
               "Average_Waiver_%": 0.6232905794135606
           },
           {
               "segment": "V6",
               "month": "Aug2023",
               "recovery": 142750.0,
               "Recovery_%": 0.008816336291319667
           }],
        [   {
               "segment": "V6",
               "month": "Sep2023",
               "settlement_amount": 17810733.0,
               "Average_Waiver_%": 0.6244491154613631
           },
           {
               "segment": "V6",
               "month": "Sep2023",
               "recovery": 467750.0,
               "Recovery_%": 0.02626225433843739
           }],
         [  {
               "segment": "V6",
               "month": "Oct2023",
               "settlement_amount": 19709983.0,
               "Average_Waiver_%": 0.623836868049153
           },
           {
               "segment": "V6",
               "month": "Oct2023",
               "recovery": 389750.0,
               "Recovery_%": 0.01977424333648588
           }],
        [   {
               "segment": "V6",
               "month": "Nov2023",
               "settlement_amount": 19659683.0,
               "Average_Waiver_%": 0.6333528842699065
           },
           {
               "segment": "V6",
               "month": "Nov2023",
               "recovery": 258834.0,
               "Recovery_%": 0.013165726019081793
           }],
          [ {
               "segment": "V6",
               "month": "Dec2023",
               "settlement_amount": 21148883.0,
               "Average_Waiver_%": 0.6323143349549465
           },
           {
               "segment": "V6",
               "month": "Dec2023",
               "recovery": 383610.0,
               "Recovery_%": 0.018138546607875224
           }],
        [   {
               "segment": "V6",
               "month": "Jan2024",
               "settlement_amount": 22409083.0,
               "Average_Waiver_%": 0.632996340539472
           },
           {
               "segment": "V6",
               "month": "Jan2024",
               "recovery": 394450.0,
               "Recovery_%": 0.01760223744987691
           }],
        [   {
               "segment": "V6",
               "month": "Feb2024",
               "settlement_amount": 24026083.0,
               "Average_Waiver_%": 0.6307923425416806
           },
           {
               "segment": "V6",
               "month": "Feb2024",
               "recovery": 363900.0,
               "Recovery_%": 0.01514603941058557
           }],
         [  {
               "segment": "V6",
               "month": "Mar2024",
               "settlement_amount": 25121433.0,
               "Average_Waiver_%": 0.6293773841379663
           },
           {
               "segment": "V6",
               "month": "Mar2024",
               "recovery": 690595.0,
               "Recovery_%": 0.02749027095707478
           }],
          [ {
               "segment": "V6",
               "month": "Apr2024",
               "settlement_amount": 29061834.0,
               "Average_Waiver_%": 0.6202879818428478
           },
           {
               "segment": "V6",
               "month": "Apr2024",
               "recovery": 479504.0,
               "Recovery_%": 0.016499440468898143
           }],
         [  {
               "segment": "V6",
               "month": "May2024",
               "settlement_amount": 30461652.0,
               "Average_Waiver_%": 0.6163319672368932
           },
           {
               "segment": "V6",
               "month": "May2024",
               "recovery": 960597.0,
               "Recovery_%": 0.03153463246182446
           }],
         [  {
               "segment": "V6",
               "month": "Jun2024",
               "settlement_amount": 30014452.0,
               "Average_Waiver_%": 0.6155942273218223
           },
           {
               "segment": "V6",
               "month": "Jun2024",
               "recovery": 998600.0,
               "Recovery_%": 0.03327063909079533
           }],
        //   [ {
        //        "segment": "V7",
        //        "month": "Feb2023",
        //        "settlement_amount": 1398500.0,
        //        "Average_Waiver_%": 0.6080182816125205
        //    },
        //    {
        //        "segment": "V7",
        //        "month": "Feb2023",
        //        "recovery": 93500.0,
        //        "Recovery_%": 0.06685734715766893
        //    }],
    //    [    {
    //            "segment": "V7",
    //            "month": "Mar2023",
    //            "settlement_amount": 1432700.0,
    //            "Average_Waiver_%": 0.6082814566005506
    //        },
    //        {
    //            "segment": "V7",
    //            "month": "Mar2023",
    //            "recovery": 249500.0,
    //            "Recovery_%": 0.17414671599078663
    //        }],
          [ {
               "segment": "V7",
               "month": "Apr2023",
               "settlement_amount": 1432700.0,
               "Average_Waiver_%": 0.5908352335752926
           },
           {
               "segment": "V7",
               "month": "Apr2023",
               "recovery": 36500.0,
               "Recovery_%": 0.025476373281217282
           }],
         [  {
               "segment": "V7",
               "month": "May2023",
               "settlement_amount": 1587700.0,
               "Average_Waiver_%": 0.6047994496972351
           },
           {
               "segment": "V7",
               "month": "May2023",
               "recovery": 78000.0,
               "Recovery_%": 0.04912766895509227
           }],
         [  {
               "segment": "V7",
               "month": "Jun2023",
               "settlement_amount": 1447700.0,
               "Average_Waiver_%": 0.6452147063452148
           },
           {
               "segment": "V7",
               "month": "Jun2023",
               "recovery": 15000.0,
               "Recovery_%": 0.010361262692546799
           }],
          [ {
               "segment": "V7",
               "month": "Jul2023",
               "settlement_amount": 1476700.0,
               "Average_Waiver_%": 0.6432688870849278
           },
           {
               "segment": "V7",
               "month": "Jul2023",
               "recovery": 52389.84,
               "Recovery_%": 0.03547764610279677
           }],
          [ {
               "segment": "V7",
               "month": "Aug2023",
               "settlement_amount": 1513700.0,
               "Average_Waiver_%": 0.6505486831232896
           },
           {
               "segment": "V7",
               "month": "Aug2023",
               "recovery": 30647.08,
               "Recovery_%": 0.0202464689172227
           }],
          [ {
               "segment": "V7",
               "month": "Sep2023",
               "settlement_amount": 1464700.0,
               "Average_Waiver_%": 0.6681647930113271
           },
           {
               "segment": "V7",
               "month": "Sep2023",
               "recovery": 44390.0,
               "Recovery_%": 0.030306547415853077
           }],
           [{
               "segment": "V7",
               "month": "Oct2023",
               "settlement_amount": 1660200.0,
               "Average_Waiver_%": 0.6675874672690436
           },
           {
               "segment": "V7",
               "month": "Oct2023",
               "recovery": 41500.0,
               "Recovery_%": 0.024996988314660885
           }],
          [ {
               "segment": "V7",
               "month": "Nov2023",
               "settlement_amount": 2633200.0,
               "Average_Waiver_%": 0.5926280308781208
           },
           {
               "segment": "V7",
               "month": "Nov2023",
               "recovery": 22500.0,
               "Recovery_%": 0.008544736442351512
           }],
          [ {
               "segment": "V7",
               "month": "Dec2023",
               "settlement_amount": 2758200.0,
               "Average_Waiver_%": 0.5954286422973936
           },
           {
               "segment": "V7",
               "month": "Dec2023",
               "recovery": 123002.0,
               "Recovery_%": 0.04459502574142557
           }],
         [  {
               "segment": "V7",
               "month": "Jan2024",
               "settlement_amount": 2878200.0,
               "Average_Waiver_%": 0.5903419162760445
           },
           {
               "segment": "V7",
               "month": "Jan2024",
               "recovery": 86000.0,
               "Recovery_%": 0.029879785977346952
           }],
          [ {
               "segment": "V7",
               "month": "Feb2024",
               "settlement_amount": 3211700.0,
               "Average_Waiver_%": 0.5878840449905334
           },
           {
               "segment": "V7",
               "month": "Feb2024",
               "recovery": 76000.0,
               "Recovery_%": 0.023663480399788273
           }],
           [{
               "segment": "V7",
               "month": "Mar2024",
               "settlement_amount": 3806200.0,
               "Average_Waiver_%": 0.602422317084282
           },
           {
               "segment": "V7",
               "month": "Mar2024",
               "recovery": 379000.0,
               "Recovery_%": 0.09957437864536808
           }],
        [   {
               "segment": "V7",
               "month": "Apr2024",
               "settlement_amount": 4246200.0,
               "Average_Waiver_%": 0.6025745892371536
           },
           {
               "segment": "V7",
               "month": "Apr2024",
               "recovery": 24818.0,
               "Recovery_%": 0.005844755310630682
           }],
        [   {
               "segment": "V7",
               "month": "May2024",
               "settlement_amount": 5200982.0,
               "Average_Waiver_%": 0.6454197708377886
           },
           {
               "segment": "V7",
               "month": "May2024",
               "recovery": 332770.0,
               "Recovery_%": 0.06398214798666867
           }],
         [  {
               "segment": "V7",
               "month": "Jun2024",
               "settlement_amount": 5918982.0,
               "Average_Waiver_%": 0.6344747681911007
           },
           {
               "segment": "V7",
               "month": "Jun2024",
               "recovery": 122500.0,
               "Recovery_%": 0.020696126462286926
           }]
       ],
    "location": [
        //    [{
        //        "segment": "ANDHRA PRADESH",
        //        "month": "Feb2023",
        //        "settlement_amount": 17773409.57,
        //        "Average_Waiver_%": 0.41376917968975924
        //    },
        //    {
        //        "segment": "ANDHRA PRADESH",
        //        "month": "Feb2023",
        //        "recovery": 1242964.0,
        //        "Recovery_%": 0.06993390857869033
        //    }],
        //    [{
        //        "segment": "ANDHRA PRADESH",
        //        "month": "Mar2023",
        //        "settlement_amount": 18076409.57,
        //        "Average_Waiver_%": 0.42069448781054586
        //    },
        //    {
        //        "segment": "ANDHRA PRADESH",
        //        "month": "Mar2023",
        //        "recovery": 2223322.0,
        //        "Recovery_%": 0.12299577476325128
        //    }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Apr2023",
               "settlement_amount": 18917109.57,
               "Average_Waiver_%": 0.42537595301392034
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Apr2023",
               "recovery": 855003.0,
               "Recovery_%": 0.04519733825276987
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "May2023",
               "settlement_amount": 19310109.57,
               "Average_Waiver_%": 0.43171837879937197
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "May2023",
               "recovery": 870682.0,
               "Recovery_%": 0.0450894386095397
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Jun2023",
               "settlement_amount": 19045109.57,
               "Average_Waiver_%": 0.4329555028137428
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Jun2023",
               "recovery": 636243.0,
               "Recovery_%": 0.03340715881216114
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Jul2023",
               "settlement_amount": 17702559.57,
               "Average_Waiver_%": 0.42825941267137285
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Jul2023",
               "recovery": 513033.0,
               "Recovery_%": 0.028980724395890282
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Aug2023",
               "settlement_amount": 18278559.57,
               "Average_Waiver_%": 0.41938772565638177
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Aug2023",
               "recovery": 649628.0,
               "Recovery_%": 0.03554043728184211
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Sep2023",
               "settlement_amount": 18549559.57,
               "Average_Waiver_%": 0.4168974845363309
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Sep2023",
               "recovery": 396341.0,
               "Recovery_%": 0.02136659894831131
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Oct2023",
               "settlement_amount": 18559859.57,
               "Average_Waiver_%": 0.41620246853471404
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Oct2023",
               "recovery": 580250.0,
               "Recovery_%": 0.03126370637727837
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Nov2023",
               "settlement_amount": 18551859.57,
               "Average_Waiver_%": 0.4165987118183481
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Nov2023",
               "recovery": 539931.0,
               "Recovery_%": 0.029103874895275526
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Dec2023",
               "settlement_amount": 20066329.57,
               "Average_Waiver_%": 0.41545869115433254
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Dec2023",
               "recovery": 533220.0,
               "Recovery_%": 0.02657287164251434
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Jan2024",
               "settlement_amount": 20816329.57,
               "Average_Waiver_%": 0.4265960056464613
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Jan2024",
               "recovery": 520236.0,
               "Recovery_%": 0.024991725762727728
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Feb2024",
               "settlement_amount": 22658379.57,
               "Average_Waiver_%": 0.43281154720717785
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Feb2024",
               "recovery": 613100.0,
               "Recovery_%": 0.02705842216588836
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Mar2024",
               "settlement_amount": 23318379.57,
               "Average_Waiver_%": 0.4322575361914916
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Mar2024",
               "recovery": 664811.0,
               "Recovery_%": 0.028510171472433923
           }],
          [ {
               "segment": "ANDHRA PRADESH",
               "month": "Apr2024",
               "settlement_amount": 24696129.57,
               "Average_Waiver_%": 0.4408493840433526
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Apr2024",
               "recovery": 520972.0,
               "Recovery_%": 0.021095289386271227
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "May2024",
               "settlement_amount": 24667129.57,
               "Average_Waiver_%": 0.44151768438693617
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "May2024",
               "recovery": 814043.0,
               "Recovery_%": 0.03300112393255653
           }],
           [{
               "segment": "ANDHRA PRADESH",
               "month": "Jun2024",
               "settlement_amount": 25072129.57,
               "Average_Waiver_%": 0.4429642089065656
           },
           {
               "segment": "ANDHRA PRADESH",
               "month": "Jun2024",
               "recovery": 617582.0,
               "Recovery_%": 0.02463221156686133
           }],
        //    [{
        //        "segment": "GUJARAT",
        //        "month": "Feb2023",
        //        "settlement_amount": 14445188.0,
        //        "Average_Waiver_%": 0.3585821579890713
        //    },
        //    {
        //        "segment": "GUJARAT",
        //        "month": "Feb2023",
        //        "recovery": 778587.0,
        //        "Recovery_%": 0.05389940234768838
        //    }],
        //    [{
        //        "segment": "GUJARAT",
        //        "month": "Mar2023",
        //        "settlement_amount": 15514188.0,
        //        "Average_Waiver_%": 0.36493310763459347
        //    },
        //    {
        //        "segment": "GUJARAT",
        //        "month": "Mar2023",
        //        "recovery": 1314908.0,
        //        "Recovery_%": 0.08475519311742258
        //    }],
           [{
               "segment": "GUJARAT",
               "month": "Apr2023",
               "settlement_amount": 16194188.0,
               "Average_Waiver_%": 0.3750799267191364
           },
           {
               "segment": "GUJARAT",
               "month": "Apr2023",
               "recovery": 403010.0,
               "Recovery_%": 0.024886088762215184
           }],
           [{
               "segment": "GUJARAT",
               "month": "May2023",
               "settlement_amount": 16992188.0,
               "Average_Waiver_%": 0.37873482765158695
           },
           {
               "segment": "GUJARAT",
               "month": "May2023",
               "recovery": 741858.0,
               "Recovery_%": 0.04365876837050061
           }],
           [{
               "segment": "GUJARAT",
               "month": "Jun2023",
               "settlement_amount": 17123188.0,
               "Average_Waiver_%": 0.38514096886395616
           },
           {
               "segment": "GUJARAT",
               "month": "Jun2023",
               "recovery": 751258.0,
               "Recovery_%": 0.04387372258016439
           }],
          [ {
               "segment": "GUJARAT",
               "month": "Jul2023",
               "settlement_amount": 16422718.0,
               "Average_Waiver_%": 0.39093827128526143
           },
           {
               "segment": "GUJARAT",
               "month": "Jul2023",
               "recovery": 456080.0,
               "Recovery_%": 0.027771286092837983
           }],
           [{
               "segment": "GUJARAT",
               "month": "Aug2023",
               "settlement_amount": 16587718.0,
               "Average_Waiver_%": 0.39377762640751957
           },
           {
               "segment": "GUJARAT",
               "month": "Aug2023",
               "recovery": 627200.0,
               "Recovery_%": 0.0378111081946293
           }],
           [{
               "segment": "GUJARAT",
               "month": "Sep2023",
               "settlement_amount": 18072218.0,
               "Average_Waiver_%": 0.3984929522324247
           },
           {
               "segment": "GUJARAT",
               "month": "Sep2023",
               "recovery": 363651.0,
               "Recovery_%": 0.0201221012274199
           }],
          [ {
               "segment": "GUJARAT",
               "month": "Oct2023",
               "settlement_amount": 19349318.0,
               "Average_Waiver_%": 0.4046239131366346
           },
           {
               "segment": "GUJARAT",
               "month": "Oct2023",
               "recovery": 404693.0,
               "Recovery_%": 0.020915104087906353
           }],
           [{
               "segment": "GUJARAT",
               "month": "Nov2023",
               "settlement_amount": 19892318.0,
               "Average_Waiver_%": 0.4061214035395603
           },
           {
               "segment": "GUJARAT",
               "month": "Nov2023",
               "recovery": 326061.0,
               "Recovery_%": 0.016391302411312748
           }],
           [{
               "segment": "GUJARAT",
               "month": "Dec2023",
               "settlement_amount": 20726798.0,
               "Average_Waiver_%": 0.4126919640709889
           },
           {
               "segment": "GUJARAT",
               "month": "Dec2023",
               "recovery": 600745.0,
               "Recovery_%": 0.028983975238239885
           }],
           [{
               "segment": "GUJARAT",
               "month": "Jan2024",
               "settlement_amount": 21948861.0,
               "Average_Waiver_%": 0.4131091170383144
           },
           {
               "segment": "GUJARAT",
               "month": "Jan2024",
               "recovery": 852622.0,
               "Recovery_%": 0.038845842615705665
           }],
           [{
               "segment": "GUJARAT",
               "month": "Feb2024",
               "settlement_amount": 23192161.0,
               "Average_Waiver_%": 0.41792604321003596
           },
           {
               "segment": "GUJARAT",
               "month": "Feb2024",
               "recovery": 889121.0,
               "Recovery_%": 0.03833713468960482
           }],
           [{
               "segment": "GUJARAT",
               "month": "Mar2024",
               "settlement_amount": 23645161.0,
               "Average_Waiver_%": 0.41892145025046157
           },
           {
               "segment": "GUJARAT",
               "month": "Mar2024",
               "recovery": 851986.0,
               "Recovery_%": 0.03603215051062668
           }],
          [ {
               "segment": "GUJARAT",
               "month": "Apr2024",
               "settlement_amount": 23851961.0,
               "Average_Waiver_%": 0.4194510308888952
           },
           {
               "segment": "GUJARAT",
               "month": "Apr2024",
               "recovery": 786479.0,
               "Recovery_%": 0.032973347558299296
           }],
          [ {
               "segment": "GUJARAT",
               "month": "May2024",
               "settlement_amount": 24643961.0,
               "Average_Waiver_%": 0.4223075620148759
           },
           {
               "segment": "GUJARAT",
               "month": "May2024",
               "recovery": 882886.0,
               "Recovery_%": 0.03582565318943655
           }],
           [{
               "segment": "GUJARAT",
               "month": "Jun2024",
               "settlement_amount": 24960961.0,
               "Average_Waiver_%": 0.42565255832267945
           },
           {
               "segment": "GUJARAT",
               "month": "Jun2024",
               "recovery": 1186201.0,
               "Recovery_%": 0.047522248842903125
           }],
        //   [ {
        //        "segment": "HARYANA",
        //        "month": "Feb2023",
        //        "settlement_amount": 28982278.25,
        //        "Average_Waiver_%": 0.3226409043097995
        //    },
        //    {
        //        "segment": "HARYANA",
        //        "month": "Feb2023",
        //        "recovery": 1569683.0,
        //        "Recovery_%": 0.054160096955110835
        //    }],
        //   [ {
        //        "segment": "HARYANA",
        //        "month": "Mar2023",
        //        "settlement_amount": 31035128.25,
        //        "Average_Waiver_%": 0.3272990614976906
        //    },
        //    {
        //        "segment": "HARYANA",
        //        "month": "Mar2023",
        //        "recovery": 2225993.0,
        //        "Recovery_%": 0.07172494929193662
        //    }],
          [ {
               "segment": "HARYANA",
               "month": "Apr2023",
               "settlement_amount": 32643828.25,
               "Average_Waiver_%": 0.33277057836131735
           },
           {
               "segment": "HARYANA",
               "month": "Apr2023",
               "recovery": 1341015.0,
               "Recovery_%": 0.041080200205991464
           }],
          [ {
               "segment": "HARYANA",
               "month": "May2023",
               "settlement_amount": 34563108.25,
               "Average_Waiver_%": 0.3358173621996821
           },
           {
               "segment": "HARYANA",
               "month": "May2023",
               "recovery": 1339061.9,
               "Recovery_%": 0.03874251963435609
           }],
           [{
               "segment": "HARYANA",
               "month": "Jun2023",
               "settlement_amount": 33796303.25,
               "Average_Waiver_%": 0.3346755961148845
           },
           {
               "segment": "HARYANA",
               "month": "Jun2023",
               "recovery": 1127415.0,
               "Recovery_%": 0.03335912190336971
           }],
          [ {
               "segment": "HARYANA",
               "month": "Jul2023",
               "settlement_amount": 32926725.0,
               "Average_Waiver_%": 0.3346477773684538
           },
           {
               "segment": "HARYANA",
               "month": "Jul2023",
               "recovery": 958893.0,
               "Recovery_%": 0.02912202777531018
           }],
        [   {
               "segment": "HARYANA",
               "month": "Aug2023",
               "settlement_amount": 32878834.0,
               "Average_Waiver_%": 0.3336870392535018
           },
           {
               "segment": "HARYANA",
               "month": "Aug2023",
               "recovery": 736492.0,
               "Recovery_%": 0.022400186089324214
           }],
           [{
               "segment": "HARYANA",
               "month": "Sep2023",
               "settlement_amount": 34798834.0,
               "Average_Waiver_%": 0.33484079676136685
           },
           {
               "segment": "HARYANA",
               "month": "Sep2023",
               "recovery": 953684.0,
               "Recovery_%": 0.027405630889816596
           }],
           [{
               "segment": "HARYANA",
               "month": "Oct2023",
               "settlement_amount": 35218834.0,
               "Average_Waiver_%": 0.33649450295320765
           },
           {
               "segment": "HARYANA",
               "month": "Oct2023",
               "recovery": 671641.0,
               "Recovery_%": 0.019070506422785037
           }],
           [{
               "segment": "HARYANA",
               "month": "Nov2023",
               "settlement_amount": 36105684.0,
               "Average_Waiver_%": 0.33662676950905057
           },
           {
               "segment": "HARYANA",
               "month": "Nov2023",
               "recovery": 394028.0,
               "Recovery_%": 0.010913184749525864
           }],
           [{
               "segment": "HARYANA",
               "month": "Dec2023",
               "settlement_amount": 37551084.0,
               "Average_Waiver_%": 0.3378402213863827
           },
           {
               "segment": "HARYANA",
               "month": "Dec2023",
               "recovery": 663857.0,
               "Recovery_%": 0.01767877060486456
           }],
           [{
               "segment": "HARYANA",
               "month": "Jan2024",
               "settlement_amount": 39668884.0,
               "Average_Waiver_%": 0.3399889169185597
           },
           {
               "segment": "HARYANA",
               "month": "Jan2024",
               "recovery": 730403.0,
               "Recovery_%": 0.018412491765586347
           }],
           [{
               "segment": "HARYANA",
               "month": "Feb2024",
               "settlement_amount": 41142484.0,
               "Average_Waiver_%": 0.3397905273292838
           },
           {
               "segment": "HARYANA",
               "month": "Feb2024",
               "recovery": 734854.0,
               "Recovery_%": 0.017861196713353525
           }],
           [{
               "segment": "HARYANA",
               "month": "Mar2024",
               "settlement_amount": 43088384.0,
               "Average_Waiver_%": 0.34170915886368386
           },
           {
               "segment": "HARYANA",
               "month": "Mar2024",
               "recovery": 732385.0,
               "Recovery_%": 0.016997272397126797
           }],
           [{
               "segment": "HARYANA",
               "month": "Apr2024",
               "settlement_amount": 44254284.0,
               "Average_Waiver_%": 0.34180298472899817
           },
           {
               "segment": "HARYANA",
               "month": "Apr2024",
               "recovery": 818174.0,
               "Recovery_%": 0.018488018018775313
           }],
           [{
               "segment": "HARYANA",
               "month": "May2024",
               "settlement_amount": 46230484.0,
               "Average_Waiver_%": 0.3416946639428151
           },
           {
               "segment": "HARYANA",
               "month": "May2024",
               "recovery": 1036279.0,
               "Recovery_%": 0.02241549104266354
           }],
          [ {
               "segment": "HARYANA",
               "month": "Jun2024",
               "settlement_amount": 47237584.0,
               "Average_Waiver_%": 0.3446000680947053
           },
           {
               "segment": "HARYANA",
               "month": "Jun2024",
               "recovery": 1059703.0,
               "Recovery_%": 0.022433471618700906
           }],
        //    [{
        //        "segment": "KARNATAKA",
        //        "month": "Feb2023",
        //        "settlement_amount": 43106272.0,
        //        "Average_Waiver_%": 0.4984044232165577
        //    },
        //    {
        //        "segment": "KARNATAKA",
        //        "month": "Feb2023",
        //        "recovery": 3501212.0,
        //        "Recovery_%": 0.08122279746204915
        //    }],
        //    [{
        //        "segment": "KARNATAKA",
        //        "month": "Mar2023",
        //        "settlement_amount": 44412271.0,
        //        "Average_Waiver_%": 0.5083681844933686
        //    },
        //    {
        //        "segment": "KARNATAKA",
        //        "month": "Mar2023",
        //        "recovery": 5575643.38,
        //        "Recovery_%": 0.1255428568379221
        //    }],
           [{
               "segment": "KARNATAKA",
               "month": "Apr2023",
               "settlement_amount": 43863071.0,
               "Average_Waiver_%": 0.5181180460957121
           },
           {
               "segment": "KARNATAKA",
               "month": "Apr2023",
               "recovery": 1474715.75,
               "Recovery_%": 0.03362089603803619
           }],
           [{
               "segment": "KARNATAKA",
               "month": "May2023",
               "settlement_amount": 45118071.0,
               "Average_Waiver_%": 0.5235193327567029
           },
           {
               "segment": "KARNATAKA",
               "month": "May2023",
               "recovery": 2448375.2800000003,
               "Recovery_%": 0.05426595653878909
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Jun2023",
               "settlement_amount": 44037471.0,
               "Average_Waiver_%": 0.5208947615851869
           },
           {
               "segment": "KARNATAKA",
               "month": "Jun2023",
               "recovery": 2703809.98,
               "Recovery_%": 0.06139793949566268
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Jul2023",
               "settlement_amount": 41173889.0,
               "Average_Waiver_%": 0.5223663158589078
           },
           {
               "segment": "KARNATAKA",
               "month": "Jul2023",
               "recovery": 1620216.0000000002,
               "Recovery_%": 0.03935056996923463
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Aug2023",
               "settlement_amount": 40625989.0,
               "Average_Waiver_%": 0.5235751457168111
           },
           {
               "segment": "KARNATAKA",
               "month": "Aug2023",
               "recovery": 1661694.0,
               "Recovery_%": 0.04090224117374718
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Sep2023",
               "settlement_amount": 37386789.0,
               "Average_Waiver_%": 0.5078455983435604
           },
           {
               "segment": "KARNATAKA",
               "month": "Sep2023",
               "recovery": 770387.0,
               "Recovery_%": 0.020605861605285224
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Oct2023",
               "settlement_amount": 37250789.0,
               "Average_Waiver_%": 0.5061438153946395
           },
           {
               "segment": "KARNATAKA",
               "month": "Oct2023",
               "recovery": 1261933.0,
               "Recovery_%": 0.03387667842418049
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Nov2023",
               "settlement_amount": 37628789.0,
               "Average_Waiver_%": 0.5108452941910767
           },
           {
               "segment": "KARNATAKA",
               "month": "Nov2023",
               "recovery": 390702.0,
               "Recovery_%": 0.010383060693236766
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Dec2023",
               "settlement_amount": 37271989.0,
               "Average_Waiver_%": 0.5023125891779552
           },
           {
               "segment": "KARNATAKA",
               "month": "Dec2023",
               "recovery": 707857.0,
               "Recovery_%": 0.018991661539715522
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Jan2024",
               "settlement_amount": 37763489.0,
               "Average_Waiver_%": 0.5053762807183634
           },
           {
               "segment": "KARNATAKA",
               "month": "Jan2024",
               "recovery": 1339038.4000000001,
               "Recovery_%": 0.03545854568681406
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Feb2024",
               "settlement_amount": 38740789.0,
               "Average_Waiver_%": 0.5063163611975349
           },
           {
               "segment": "KARNATAKA",
               "month": "Feb2024",
               "recovery": 683593.0,
               "Recovery_%": 0.017645304023105983
           }],
          [ {
               "segment": "KARNATAKA",
               "month": "Mar2024",
               "settlement_amount": 39719393.0,
               "Average_Waiver_%": 0.5049861318448023
           },
           {
               "segment": "KARNATAKA",
               "month": "Mar2024",
               "recovery": 1584514.0,
               "Recovery_%": 0.03989270430190109
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Apr2024",
               "settlement_amount": 41230393.0,
               "Average_Waiver_%": 0.5126581737925229
           },
           {
               "segment": "KARNATAKA",
               "month": "Apr2024",
               "recovery": 1103323.0,
               "Recovery_%": 0.02675994381135295
           }],
           [{
               "segment": "KARNATAKA",
               "month": "May2024",
               "settlement_amount": 41640393.0,
               "Average_Waiver_%": 0.5125493432713333
           },
           {
               "segment": "KARNATAKA",
               "month": "May2024",
               "recovery": 1822412.0,
               "Recovery_%": 0.04376548511441763
           }],
           [{
               "segment": "KARNATAKA",
               "month": "Jun2024",
               "settlement_amount": 41251393.0,
               "Average_Waiver_%": 0.5195893238714998
           },
           {
               "segment": "KARNATAKA",
               "month": "Jun2024",
               "recovery": 2049712.0,
               "Recovery_%": 0.04968830991961896
           }],
        //  [  {
        //        "segment": "MADHYA PRADESH",
        //        "month": "Feb2023",
        //        "settlement_amount": 27428925.0,
        //        "Average_Waiver_%": 0.37238070244134164
        //    },
        //    {
        //        "segment": "MADHYA PRADESH",
        //        "month": "Feb2023",
        //        "recovery": 1568126.0,
        //        "Recovery_%": 0.057170523452887784
        //    }],
        //   [ {
        //        "segment": "MADHYA PRADESH",
        //        "month": "Mar2023",
        //        "settlement_amount": 29537425.0,
        //        "Average_Waiver_%": 0.3776657942930986
        //    },
        //    {
        //        "segment": "MADHYA PRADESH",
        //        "month": "Mar2023",
        //        "recovery": 2078664.0,
        //        "Recovery_%": 0.07037390700103344
        //    }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Apr2023",
               "settlement_amount": 30048569.0,
               "Average_Waiver_%": 0.3785146383442378
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Apr2023",
               "recovery": 700181.0,
               "Recovery_%": 0.02330164208485269
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "May2023",
               "settlement_amount": 30918569.0,
               "Average_Waiver_%": 0.37933316850110826
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "May2023",
               "recovery": 1076911.0,
               "Recovery_%": 0.03483055764967648
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Jun2023",
               "settlement_amount": 31746569.0,
               "Average_Waiver_%": 0.38514306407464366
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Jun2023",
               "recovery": 1856515.0,
               "Recovery_%": 0.05847923282670326
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Jul2023",
               "settlement_amount": 30843619.0,
               "Average_Waiver_%": 0.3810389055557145
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Jul2023",
               "recovery": 841186.0,
               "Recovery_%": 0.027272610260164348
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Aug2023",
               "settlement_amount": 32154169.0,
               "Average_Waiver_%": 0.38970642972038483
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Aug2023",
               "recovery": 931018.0,
               "Recovery_%": 0.028954814537424368
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Sep2023",
               "settlement_amount": 33206774.0,
               "Average_Waiver_%": 0.39320764272676595
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Sep2023",
               "recovery": 850608.0,
               "Recovery_%": 0.025615496404438443
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Oct2023",
               "settlement_amount": 34133076.0,
               "Average_Waiver_%": 0.3961814248941954
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Oct2023",
               "recovery": 499279.0,
               "Recovery_%": 0.014627424730194256
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Nov2023",
               "settlement_amount": 35191425.0,
               "Average_Waiver_%": 0.4020216325331874
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Nov2023",
               "recovery": 665351.0,
               "Recovery_%": 0.018906622849174194
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Dec2023",
               "settlement_amount": 36804446.0,
               "Average_Waiver_%": 0.39970888157413703
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Dec2023",
               "recovery": 1000884.4,
               "Recovery_%": 0.027194660123399224
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Jan2024",
               "settlement_amount": 38259596.0,
               "Average_Waiver_%": 0.4066972524669388
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Jan2024",
               "recovery": 913597.0,
               "Recovery_%": 0.023878898250781322
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Feb2024",
               "settlement_amount": 39041796.0,
               "Average_Waiver_%": 0.4068386596865681
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Feb2024",
               "recovery": 870933.0,
               "Recovery_%": 0.02230770838513679
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Mar2024",
               "settlement_amount": 40675296.0,
               "Average_Waiver_%": 0.4084155743875197
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Mar2024",
               "recovery": 1496489.0,
               "Recovery_%": 0.03679110288466002
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Apr2024",
               "settlement_amount": 41726296.0,
               "Average_Waiver_%": 0.41033595187941374
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Apr2024",
               "recovery": 1301863.18,
               "Recovery_%": 0.03120006578106046
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "May2024",
               "settlement_amount": 42715956.0,
               "Average_Waiver_%": 0.41212771311463564
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "May2024",
               "recovery": 1911898.0,
               "Recovery_%": 0.04475840362790897
           }],
           [{
               "segment": "MADHYA PRADESH",
               "month": "Jun2024",
               "settlement_amount": 43738056.0,
               "Average_Waiver_%": 0.4181718252875207
           },
           {
               "segment": "MADHYA PRADESH",
               "month": "Jun2024",
               "recovery": 1547808.0,
               "Recovery_%": 0.03538812973306358
           }],
        //    [{
        //        "segment": "MAHARASHTRA",
        //        "month": "Feb2023",
        //        "settlement_amount": 52180432.46,
        //        "Average_Waiver_%": 0.38297377534026056
        //    },
        //    {
        //        "segment": "MAHARASHTRA",
        //        "month": "Feb2023",
        //        "recovery": 6239959.0,
        //        "Recovery_%": 0.11958427145622778
        //    }],
        //    [{
        //        "segment": "MAHARASHTRA",
        //        "month": "Mar2023",
        //        "settlement_amount": 56927412.46,
        //        "Average_Waiver_%": 0.3956919225376723
        //    },
        //    {
        //        "segment": "MAHARASHTRA",
        //        "month": "Mar2023",
        //        "recovery": 5817000.26,
        //        "Recovery_%": 0.10218276237458201
        //    }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Apr2023",
               "settlement_amount": 59148609.02,
               "Average_Waiver_%": 0.3994804798910296
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Apr2023",
               "recovery": 2672378.0,
               "Recovery_%": 0.04518074125963613
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "May2023",
               "settlement_amount": 61624825.02,
               "Average_Waiver_%": 0.40557850167682147
           },
           {
               "segment": "MAHARASHTRA",
               "month": "May2023",
               "recovery": 2734333.0,
               "Recovery_%": 0.044370641200402385
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Jun2023",
               "settlement_amount": 63744125.02,
               "Average_Waiver_%": 0.4123064903098944
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Jun2023",
               "recovery": 2719327.0,
               "Recovery_%": 0.042660041206100154
           }],
          [ {
               "segment": "MAHARASHTRA",
               "month": "Jul2023",
               "settlement_amount": 63896258.02,
               "Average_Waiver_%": 0.4168274211016104
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Jul2023",
               "recovery": 2293228.0,
               "Recovery_%": 0.035889863836505144
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Aug2023",
               "settlement_amount": 64890988.02,
               "Average_Waiver_%": 0.4125394700879108
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Aug2023",
               "recovery": 1991471.0,
               "Recovery_%": 0.030689484946449117
           }],
          [ {
               "segment": "MAHARASHTRA",
               "month": "Sep2023",
               "settlement_amount": 67254435.02,
               "Average_Waiver_%": 0.41402175029466126
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Sep2023",
               "recovery": 2176820.0,
               "Recovery_%": 0.032366936089087084
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Oct2023",
               "settlement_amount": 70656835.02,
               "Average_Waiver_%": 0.4177505228807378
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Oct2023",
               "recovery": 1853222.0,
               "Recovery_%": 0.026228488715570552
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Nov2023",
               "settlement_amount": 75208335.02,
               "Average_Waiver_%": 0.41912008407699125
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Nov2023",
               "recovery": 2234379.0,
               "Recovery_%": 0.029709193793557805
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Dec2023",
               "settlement_amount": 78202379.02,
               "Average_Waiver_%": 0.42191580555783503
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Dec2023",
               "recovery": 1587123.0,
               "Recovery_%": 0.020295073115283342
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Jan2024",
               "settlement_amount": 82687730.02,
               "Average_Waiver_%": 0.42278978759483077
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Jan2024",
               "recovery": 2975396.0,
               "Recovery_%": 0.035983524995550485
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Feb2024",
               "settlement_amount": 84145730.02,
               "Average_Waiver_%": 0.4267293017089745
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Feb2024",
               "recovery": 2552483.0,
               "Recovery_%": 0.030334076362440714
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Mar2024",
               "settlement_amount": 86274834.02,
               "Average_Waiver_%": 0.4285756371472192
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Mar2024",
               "recovery": 2553122.0,
               "Recovery_%": 0.02959289379111575
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "Apr2024",
               "settlement_amount": 88003834.02,
               "Average_Waiver_%": 0.4311037618193534
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Apr2024",
               "recovery": 2286547.0,
               "Recovery_%": 0.025982356626420993
           }],
           [{
               "segment": "MAHARASHTRA",
               "month": "May2024",
               "settlement_amount": 91892020.02,
               "Average_Waiver_%": 0.4328567077933269
           },
           {
               "segment": "MAHARASHTRA",
               "month": "May2024",
               "recovery": 2700565.0,
               "Recovery_%": 0.029388460493220532
           }],
          [ {
               "segment": "MAHARASHTRA",
               "month": "Jun2024",
               "settlement_amount": 94941440.02,
               "Average_Waiver_%": 0.4368056473332048
           },
           {
               "segment": "MAHARASHTRA",
               "month": "Jun2024",
               "recovery": 3123003.0,
               "Recovery_%": 0.032893992331927135
           }],
        //   [ {
        //        "segment": "RAJASTHAN",
        //        "month": "Feb2023",
        //        "settlement_amount": 20310730.0,
        //        "Average_Waiver_%": 0.35100568973166385
        //    },
        //    {
        //        "segment": "RAJASTHAN",
        //        "month": "Feb2023",
        //        "recovery": 1590973.0,
        //        "Recovery_%": 0.07833165031488282
        //    }],
        //    [{
        //        "segment": "RAJASTHAN",
        //        "month": "Mar2023",
        //        "settlement_amount": 19906606.0,
        //        "Average_Waiver_%": 0.3488673237971232
        //    },
        //    {
        //        "segment": "RAJASTHAN",
        //        "month": "Mar2023",
        //        "recovery": 1868596.0,
        //        "Recovery_%": 0.0938681360348419
        //    }],
           [{
               "segment": "RAJASTHAN",
               "month": "Apr2023",
               "settlement_amount": 20442106.0,
               "Average_Waiver_%": 0.3550693180030044
           },
           {
               "segment": "RAJASTHAN",
               "month": "Apr2023",
               "recovery": 783334.0,
               "Recovery_%": 0.03831963301628511
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "May2023",
               "settlement_amount": 21517106.0,
               "Average_Waiver_%": 0.35447669215544053
           },
           {
               "segment": "RAJASTHAN",
               "month": "May2023",
               "recovery": 756862.0,
               "Recovery_%": 0.035174897590781955
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Jun2023",
               "settlement_amount": 21441606.0,
               "Average_Waiver_%": 0.35723636939727743
           },
           {
               "segment": "RAJASTHAN",
               "month": "Jun2023",
               "recovery": 840961.0,
               "Recovery_%": 0.0392209893232811
           }],
           [{
               "segment": "RAJASTHAN",
               "month": "Jul2023",
               "settlement_amount": 19627606.0,
               "Average_Waiver_%": 0.34650540997568174
           },
           {
               "segment": "RAJASTHAN",
               "month": "Jul2023",
               "recovery": 708536.0,
               "Recovery_%": 0.036098951650038215
           }],
           [{
               "segment": "RAJASTHAN",
               "month": "Aug2023",
               "settlement_amount": 18869426.0,
               "Average_Waiver_%": 0.3412840550400868
           },
           {
               "segment": "RAJASTHAN",
               "month": "Aug2023",
               "recovery": 185343.0,
               "Recovery_%": 0.009822397353263422
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Sep2023",
               "settlement_amount": 19150926.0,
               "Average_Waiver_%": 0.3381131951253794
           },
           {
               "segment": "RAJASTHAN",
               "month": "Sep2023",
               "recovery": 467938.0,
               "Recovery_%": 0.024434223180644112
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Oct2023",
               "settlement_amount": 19169426.0,
               "Average_Waiver_%": 0.33891727106545533
           },
           {
               "segment": "RAJASTHAN",
               "month": "Oct2023",
               "recovery": 340059.0,
               "Recovery_%": 0.0177396548023921
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Nov2023",
               "settlement_amount": 19675426.0,
               "Average_Waiver_%": 0.34168098211402487
           },
           {
               "segment": "RAJASTHAN",
               "month": "Nov2023",
               "recovery": 193350.00000000006,
               "Recovery_%": 0.009826979095649571
           }],
   [        {
               "segment": "RAJASTHAN",
               "month": "Dec2023",
               "settlement_amount": 19662426.0,
               "Average_Waiver_%": 0.3433669975085611
           },
           {
               "segment": "RAJASTHAN",
               "month": "Dec2023",
               "recovery": 364793.0,
               "Recovery_%": 0.018552797096350167
           }],
           [{
               "segment": "RAJASTHAN",
               "month": "Jan2024",
               "settlement_amount": 20001526.0,
               "Average_Waiver_%": 0.34621864730144125
           },
           {
               "segment": "RAJASTHAN",
               "month": "Jan2024",
               "recovery": 334345.0,
               "Recovery_%": 0.016715974571140223
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Feb2024",
               "settlement_amount": 20372526.0,
               "Average_Waiver_%": 0.34693612971733667
           },
           {
               "segment": "RAJASTHAN",
               "month": "Feb2024",
               "recovery": 292850.0,
               "Recovery_%": 0.014374751564926215
           }],
           [{
               "segment": "RAJASTHAN",
               "month": "Mar2024",
               "settlement_amount": 20545026.0,
               "Average_Waiver_%": 0.3458862537488439
           },
           {
               "segment": "RAJASTHAN",
               "month": "Mar2024",
               "recovery": 362400.0,
               "Recovery_%": 0.017639305980922098
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Apr2024",
               "settlement_amount": 20885026.0,
               "Average_Waiver_%": 0.34640135664820004
           },
           {
               "segment": "RAJASTHAN",
               "month": "Apr2024",
               "recovery": 265343.0,
               "Recovery_%": 0.01270493989329963
           }],
           [{
               "segment": "RAJASTHAN",
               "month": "May2024",
               "settlement_amount": 21384026.0,
               "Average_Waiver_%": 0.345769345585293
           },
           {
               "segment": "RAJASTHAN",
               "month": "May2024",
               "recovery": 452398.0,
               "Recovery_%": 0.021155885238822662
           }],
          [ {
               "segment": "RAJASTHAN",
               "month": "Jun2024",
               "settlement_amount": 22809526.0,
               "Average_Waiver_%": 0.3555128471862897
           },
           {
               "segment": "RAJASTHAN",
               "month": "Jun2024",
               "recovery": 659172.0,
               "Recovery_%": 0.02889897843558871
           }],
        //    [{
        //        "segment": "TAMIL NADU",
        //        "month": "Feb2023",
        //        "settlement_amount": 59243155.46,
        //        "Average_Waiver_%": 0.3876057341184676
        //    },
        //    {
        //        "segment": "TAMIL NADU",
        //        "month": "Feb2023",
        //        "recovery": 4063295.7,
        //        "Recovery_%": 0.06858675349835933
        //    }],
        //    [{
        //        "segment": "TAMIL NADU",
        //        "month": "Mar2023",
        //        "settlement_amount": 60642459.46,
        //        "Average_Waiver_%": 0.3948722431385324
        //    },
        //    {
        //        "segment": "TAMIL NADU",
        //        "month": "Mar2023",
        //        "recovery": 6011838.98,
        //        "Recovery_%": 0.09913580408072718
        //    }],
           [{
               "segment": "TAMIL NADU",
               "month": "Apr2023",
               "settlement_amount": 61464603.0,
               "Average_Waiver_%": 0.39977084527953194
           },
           {
               "segment": "TAMIL NADU",
               "month": "Apr2023",
               "recovery": 3074151.0,
               "Recovery_%": 0.050014981793667486
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "May2023",
               "settlement_amount": 62793803.0,
               "Average_Waiver_%": 0.40408440061098383
           },
           {
               "segment": "TAMIL NADU",
               "month": "May2023",
               "recovery": 2646840.0,
               "Recovery_%": 0.042151293177767876
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Jun2023",
               "settlement_amount": 60541863.0,
               "Average_Waiver_%": 0.40461740596152884
           },
           {
               "segment": "TAMIL NADU",
               "month": "Jun2023",
               "recovery": 2150871.0,
               "Recovery_%": 0.03552700385186363
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Jul2023",
               "settlement_amount": 58047317.0,
               "Average_Waiver_%": 0.4074082716956329
           },
           {
               "segment": "TAMIL NADU",
               "month": "Jul2023",
               "recovery": 2248412.0,
               "Recovery_%": 0.03873412443851625
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Aug2023",
               "settlement_amount": 57836472.0,
               "Average_Waiver_%": 0.4107472975968143
           },
           {
               "segment": "TAMIL NADU",
               "month": "Aug2023",
               "recovery": 1913732.02,
               "Recovery_%": 0.03308867145285072
           }],
   [        {
               "segment": "TAMIL NADU",
               "month": "Sep2023",
               "settlement_amount": 56979072.0,
               "Average_Waiver_%": 0.4105155282453687
           },
           {
               "segment": "TAMIL NADU",
               "month": "Sep2023",
               "recovery": 1989971.0,
               "Recovery_%": 0.034924594770515044
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Oct2023",
               "settlement_amount": 58269372.0,
               "Average_Waiver_%": 0.41469914411793624
           },
           {
               "segment": "TAMIL NADU",
               "month": "Oct2023",
               "recovery": 1824409.0,
               "Recovery_%": 0.03130991355115342
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Nov2023",
               "settlement_amount": 57074952.0,
               "Average_Waiver_%": 0.41520645505285886
           },
           {
               "segment": "TAMIL NADU",
               "month": "Nov2023",
               "recovery": 1300518.5,
               "Recovery_%": 0.0227861514452084
           }],
          [ {
               "segment": "TAMIL NADU",
               "month": "Dec2023",
               "settlement_amount": 58843952.0,
               "Average_Waiver_%": 0.41590451366714737
           },
           {
               "segment": "TAMIL NADU",
               "month": "Dec2023",
               "recovery": 1339748.0,
               "Recovery_%": 0.022767811380173787
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Jan2024",
               "settlement_amount": 59109752.0,
               "Average_Waiver_%": 0.4167510114218101
           },
           {
               "segment": "TAMIL NADU",
               "month": "Jan2024",
               "recovery": 1150387.0,
               "Recovery_%": 0.01946188168747519
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Feb2024",
               "settlement_amount": 60096580.0,
               "Average_Waiver_%": 0.4184288824813785
           },
           {
               "segment": "TAMIL NADU",
               "month": "Feb2024",
               "recovery": 1398627.0,
               "Recovery_%": 0.023272988246585746
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Mar2024",
               "settlement_amount": 62193780.0,
               "Average_Waiver_%": 0.4197304020910093
           },
           {
               "segment": "TAMIL NADU",
               "month": "Mar2024",
               "recovery": 2384136.0,
               "Recovery_%": 0.038333994171121294
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Apr2024",
               "settlement_amount": 62804680.0,
               "Average_Waiver_%": 0.4273245174545485
           },
           {
               "segment": "TAMIL NADU",
               "month": "Apr2024",
               "recovery": 1564187.0,
               "Recovery_%": 0.024905580284781324
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "May2024",
               "settlement_amount": 63038680.0,
               "Average_Waiver_%": 0.4296519579296718
           },
           {
               "segment": "TAMIL NADU",
               "month": "May2024",
               "recovery": 1816540.0,
               "Recovery_%": 0.02881627597532182
           }],
           [{
               "segment": "TAMIL NADU",
               "month": "Jun2024",
               "settlement_amount": 64098344.0,
               "Average_Waiver_%": 0.4325260260636336
           },
           {
               "segment": "TAMIL NADU",
               "month": "Jun2024",
               "recovery": 1758910.0,
               "Recovery_%": 0.02744080252681723
           }],
        //   [ {
        //        "segment": "TELANGANA",
        //        "month": "Feb2023",
        //        "settlement_amount": 25878793.0,
        //        "Average_Waiver_%": 0.3882400149184733
        //    },
        //    {
        //        "segment": "TELANGANA",
        //        "month": "Feb2023",
        //        "recovery": 2231203.0,
        //        "Recovery_%": 0.08621742907406849
        //    }],
        //    [{
        //        "segment": "TELANGANA",
        //        "month": "Mar2023",
        //        "settlement_amount": 26182693.0,
        //        "Average_Waiver_%": 0.3930922465828256
        //    },
        //    {
        //        "segment": "TELANGANA",
        //        "month": "Mar2023",
        //        "recovery": 2285646.0,
        //        "Recovery_%": 0.08729606232636192
        //    }],
          [ {
               "segment": "TELANGANA",
               "month": "Apr2023",
               "settlement_amount": 26424543.0,
               "Average_Waiver_%": 0.40031407914818967
           },
           {
               "segment": "TELANGANA",
               "month": "Apr2023",
               "recovery": 2102048.0,
               "Recovery_%": 0.07954907678062777
           }],
          [ {
               "segment": "TELANGANA",
               "month": "May2023",
               "settlement_amount": 27897401.0,
               "Average_Waiver_%": 0.4053618240856443
           },
           {
               "segment": "TELANGANA",
               "month": "May2023",
               "recovery": 811513.0,
               "Recovery_%": 0.02908919723382117
           }],
           [{
               "segment": "TELANGANA",
               "month": "Jun2023",
               "settlement_amount": 28092575.0,
               "Average_Waiver_%": 0.40668145334816846
           },
           {
               "segment": "TELANGANA",
               "month": "Jun2023",
               "recovery": 762328.04,
               "Recovery_%": 0.027136282095891886
           }],
          [ {
               "segment": "TELANGANA",
               "month": "Jul2023",
               "settlement_amount": 27323975.0,
               "Average_Waiver_%": 0.4139282934021842
           },
           {
               "segment": "TELANGANA",
               "month": "Jul2023",
               "recovery": 783652.84,
               "Recovery_%": 0.02868004527159756
           }],
           [{
               "segment": "TELANGANA",
               "month": "Aug2023",
               "settlement_amount": 26559075.0,
               "Average_Waiver_%": 0.41568286286636336
           },
           {
               "segment": "TELANGANA",
               "month": "Aug2023",
               "recovery": 659447.0,
               "Recovery_%": 0.02482944153740294
           }],
           [{
               "segment": "TELANGANA",
               "month": "Sep2023",
               "settlement_amount": 27491325.0,
               "Average_Waiver_%": 0.4152561708816604
           },
           {
               "segment": "TELANGANA",
               "month": "Sep2023",
               "recovery": 465218.0,
               "Recovery_%": 0.016922356416069432
           }],
           [{
               "segment": "TELANGANA",
               "month": "Oct2023",
               "settlement_amount": 28726225.0,
               "Average_Waiver_%": 0.4185567546096759
           },
           {
               "segment": "TELANGANA",
               "month": "Oct2023",
               "recovery": 621439.0,
               "Recovery_%": 0.0216331592473428
           }],
           [{
               "segment": "TELANGANA",
               "month": "Nov2023",
               "settlement_amount": 29657225.0,
               "Average_Waiver_%": 0.4206244765934389
           },
           {
               "segment": "TELANGANA",
               "month": "Nov2023",
               "recovery": 495682.0,
               "Recovery_%": 0.016713701298756038
           }],
           [{
               "segment": "TELANGANA",
               "month": "Dec2023",
               "settlement_amount": 30254225.0,
               "Average_Waiver_%": 0.4209646394585363
           },
           {
               "segment": "TELANGANA",
               "month": "Dec2023",
               "recovery": 1558321.0,
               "Recovery_%": 0.051507549771974
           }],
           [{
               "segment": "TELANGANA",
               "month": "Jan2024",
               "settlement_amount": 30694225.0,
               "Average_Waiver_%": 0.4260398778544601
           },
           {
               "segment": "TELANGANA",
               "month": "Jan2024",
               "recovery": 595905.0,
               "Recovery_%": 0.019414238346138403
           }],
           [{
               "segment": "TELANGANA",
               "month": "Feb2024",
               "settlement_amount": 30959725.0,
               "Average_Waiver_%": 0.4228326408053228
           },
           {
               "segment": "TELANGANA",
               "month": "Feb2024",
               "recovery": 559590.0,
               "Recovery_%": 0.01807477295098713
           }],
           [{
               "segment": "TELANGANA",
               "month": "Mar2024",
               "settlement_amount": 32122375.0,
               "Average_Waiver_%": 0.4263620147344302
           },
           {
               "segment": "TELANGANA",
               "month": "Mar2024",
               "recovery": 721205.0,
               "Recovery_%": 0.02245179567201989
           }],
           [{
               "segment": "TELANGANA",
               "month": "Apr2024",
               "settlement_amount": 32368375.0,
               "Average_Waiver_%": 0.42633794590004587
           },
           {
               "segment": "TELANGANA",
               "month": "Apr2024",
               "recovery": 672074.0,
               "Recovery_%": 0.02076329132988604
           }],
          [ {
               "segment": "TELANGANA",
               "month": "May2024",
               "settlement_amount": 33831375.0,
               "Average_Waiver_%": 0.4254852822362143
           },
           {
               "segment": "TELANGANA",
               "month": "May2024",
               "recovery": 1469304.0,
               "Recovery_%": 0.043430218251549045
           }],
         [  {
               "segment": "TELANGANA",
               "month": "Jun2024",
               "settlement_amount": 35286375.0,
               "Average_Waiver_%": 0.4307895929026722
           },
           {
               "segment": "TELANGANA",
               "month": "Jun2024",
               "recovery": 697134.0,
               "Recovery_%": 0.019756464074306302
           }],
        //   [ {
        //        "segment": "UTTAR PRADESH",
        //        "month": "Feb2023",
        //        "settlement_amount": 37776049.0,
        //        "Average_Waiver_%": 0.3270237966497088
        //    },
        //    {
        //        "segment": "UTTAR PRADESH",
        //        "month": "Feb2023",
        //        "recovery": 1653123.0,
        //        "Recovery_%": 0.04376114082232369
        //    }],
        //   [ {
        //        "segment": "UTTAR PRADESH",
        //        "month": "Mar2023",
        //        "settlement_amount": 39466349.0,
        //        "Average_Waiver_%": 0.3320711870626405
        //    },
        //    {
        //        "segment": "UTTAR PRADESH",
        //        "month": "Mar2023",
        //        "recovery": 3028182.0,
        //        "Recovery_%": 0.07672820204372084
        //    }],
          [ {
               "segment": "UTTAR PRADESH",
               "month": "Apr2023",
               "settlement_amount": 40156959.0,
               "Average_Waiver_%": 0.3374398659940684
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Apr2023",
               "recovery": 1402501.0,
               "Recovery_%": 0.03492547829630227
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "May2023",
               "settlement_amount": 41506779.0,
               "Average_Waiver_%": 0.34008914840110804
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "May2023",
               "recovery": 1656518.0,
               "Recovery_%": 0.03990957718015171
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Jun2023",
               "settlement_amount": 41692579.0,
               "Average_Waiver_%": 0.34475897596952343
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Jun2023",
               "recovery": 1259678.0,
               "Recovery_%": 0.030213482356176623
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Jul2023",
               "settlement_amount": 40726309.0,
               "Average_Waiver_%": 0.34885177636275383
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Jul2023",
               "recovery": 1258667.0,
               "Recovery_%": 0.0309055014045098
           }],
          [ {
               "segment": "UTTAR PRADESH",
               "month": "Aug2023",
               "settlement_amount": 40387924.0,
               "Average_Waiver_%": 0.34917048074255125
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Aug2023",
               "recovery": 953670.0,
               "Recovery_%": 0.02361275117780255
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Sep2023",
               "settlement_amount": 42681384.0,
               "Average_Waiver_%": 0.35436534552560045
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Sep2023",
               "recovery": 1092426.0,
               "Recovery_%": 0.025594905732203996
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Oct2023",
               "settlement_amount": 43788684.0,
               "Average_Waiver_%": 0.35658340992858856
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Oct2023",
               "recovery": 1122267.0,
               "Recovery_%": 0.02562915569693759
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Nov2023",
               "settlement_amount": 45579828.0,
               "Average_Waiver_%": 0.3635128146926999
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Nov2023",
               "recovery": 643683.0,
               "Recovery_%": 0.014122102435314149
           }],
          [ {
               "segment": "UTTAR PRADESH",
               "month": "Dec2023",
               "settlement_amount": 47660128.0,
               "Average_Waiver_%": 0.3652331382299371
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Dec2023",
               "recovery": 1074876.0,
               "Recovery_%": 0.02255293984942718
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Jan2024",
               "settlement_amount": 48406128.0,
               "Average_Waiver_%": 0.36635484518962874
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Jan2024",
               "recovery": 1001351.0,
               "Recovery_%": 0.020686451103876766
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Feb2024",
               "settlement_amount": 49918128.0,
               "Average_Waiver_%": 0.36821445157951993
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Feb2024",
               "recovery": 1148483.0,
               "Recovery_%": 0.023007333127556387
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Mar2024",
               "settlement_amount": 53146528.0,
               "Average_Waiver_%": 0.3684549727284618
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Mar2024",
               "recovery": 1671085.0,
               "Recovery_%": 0.031442975917448455
           }],
          [ {
               "segment": "UTTAR PRADESH",
               "month": "Apr2024",
               "settlement_amount": 54058028.0,
               "Average_Waiver_%": 0.37019751909148596
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Apr2024",
               "recovery": 1520834.0,
               "Recovery_%": 0.028133360691588675
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "May2024",
               "settlement_amount": 57685418.0,
               "Average_Waiver_%": 0.371335058218067
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "May2024",
               "recovery": 1645371.0,
               "Recovery_%": 0.02852317027502514
           }],
           [{
               "segment": "UTTAR PRADESH",
               "month": "Jun2024",
               "settlement_amount": 58430518.0,
               "Average_Waiver_%": 0.37361661749696246
           },
           {
               "segment": "UTTAR PRADESH",
               "month": "Jun2024",
               "recovery": 1351836.0,
               "Recovery_%": 0.02313578667914599
           }],
        //   [ {
        //        "segment": "Others",
        //        "month": "Feb2023",
        //        "settlement_amount": 111127864.0,
        //        "Average_Waiver_%": 0.35928484252288173
        //    },
        //    {
        //        "segment": "Others",
        //        "month": "Feb2023",
        //        "recovery": 7897811.0,
        //        "Recovery_%": 0.0710695834124914
        //    }],
        //   [ {
        //        "segment": "Others",
        //        "month": "Mar2023",
        //        "settlement_amount": 113604681.0,
        //        "Average_Waiver_%": 0.36464160800929707
        //    },
        //    {
        //        "segment": "Others",
        //        "month": "Mar2023",
        //        "recovery": 11710080.7,
        //        "Recovery_%": 0.10307744889490952
        //    }],
          [ {
               "segment": "Others",
               "month": "Apr2023",
               "settlement_amount": 114753571.0,
               "Average_Waiver_%": 0.3682662072100804
           },
           {
               "segment": "Others",
               "month": "Apr2023",
               "recovery": 5625779.0,
               "Recovery_%": 0.049024870868724424
           }],
           [{
               "segment": "Others",
               "month": "May2023",
               "settlement_amount": 119320011.0,
               "Average_Waiver_%": 0.3720159205713782
           },
           {
               "segment": "Others",
               "month": "May2023",
               "recovery": 5261529.0,
               "Recovery_%": 0.04409594799651837
           }],
           [{
               "segment": "Others",
               "month": "Jun2023",
               "settlement_amount": 119109309.09,
               "Average_Waiver_%": 0.3739970732447018
           },
           {
               "segment": "Others",
               "month": "Jun2023",
               "recovery": 3824456.58,
               "Recovery_%": 0.03210879661060084
           }],
           [{
               "segment": "Others",
               "month": "Jul2023",
               "settlement_amount": 115831937.09,
               "Average_Waiver_%": 0.37183945087335396
           },
           {
               "segment": "Others",
               "month": "Jul2023",
               "recovery": 3854587.46,
               "Recovery_%": 0.03327741516577619
           }],
           [{
               "segment": "Others",
               "month": "Aug2023",
               "settlement_amount": 116873331.09,
               "Average_Waiver_%": 0.3702178064307625
           },
           {
               "segment": "Others",
               "month": "Aug2023",
               "recovery": 3589175.08,
               "Recovery_%": 0.030709957922189314
           }],
          [ {
               "segment": "Others",
               "month": "Sep2023",
               "settlement_amount": 118154756.09,
               "Average_Waiver_%": 0.3718145991201913
           },
           {
               "segment": "Others",
               "month": "Sep2023",
               "recovery": 4703172.51,
               "Recovery_%": 0.03980518995289138
           }],
          [ {
               "segment": "Others",
               "month": "Oct2023",
               "settlement_amount": 120258856.09,
               "Average_Waiver_%": 0.3749324043227675
           },
           {
               "segment": "Others",
               "month": "Oct2023",
               "recovery": 3057945.0,
               "Recovery_%": 0.02542802334417249
           }],
           [{
               "segment": "Others",
               "month": "Nov2023",
               "settlement_amount": 123434888.09,
               "Average_Waiver_%": 0.3760369764972929
           },
           {
               "segment": "Others",
               "month": "Nov2023",
               "recovery": 3123718.77,
               "Recovery_%": 0.025306611593655798
           }],
          [ {
               "segment": "Others",
               "month": "Dec2023",
               "settlement_amount": 126066538.09,
               "Average_Waiver_%": 0.37861204997578346
           },
           {
               "segment": "Others",
               "month": "Dec2023",
               "recovery": 2877436.0,
               "Recovery_%": 0.022824740360092806
           }],
           [{
               "segment": "Others",
               "month": "Jan2024",
               "settlement_amount": 130166798.09,
               "Average_Waiver_%": 0.37826651662139565
           },
           {
               "segment": "Others",
               "month": "Jan2024",
               "recovery": 2756409.0,
               "Recovery_%": 0.021175976058765478
           }],
          [ {
               "segment": "Others",
               "month": "Feb2024",
               "settlement_amount": 136223068.09,
               "Average_Waiver_%": 0.38117118456307314
           },
           {
               "segment": "Others",
               "month": "Feb2024",
               "recovery": 3083721.0,
               "Recovery_%": 0.022637289287616425
           }],
          [ {
               "segment": "Others",
               "month": "Mar2024",
               "settlement_amount": 140880268.09,
               "Average_Waiver_%": 0.3841385744442903
           },
           {
               "segment": "Others",
               "month": "Mar2024",
               "recovery": 4313858.0,
               "Recovery_%": 0.030620739571876263
           }],
           [{
               "segment": "Others",
               "month": "Apr2024",
               "settlement_amount": 144374283.09,
               "Average_Waiver_%": 0.38620364341776736
           },
           {
               "segment": "Others",
               "month": "Apr2024",
               "recovery": 3548368.0,
               "Recovery_%": 0.024577562735241563
           }],
           [{
               "segment": "Others",
               "month": "May2024",
               "settlement_amount": 151623744.09,
               "Average_Waiver_%": 0.3893992209601894
           },
           {
               "segment": "Others",
               "month": "May2024",
               "recovery": 5205601.0,
               "Recovery_%": 0.03433236021998037
           }],
          [ {
               "segment": "Others",
               "month": "Jun2024",
               "settlement_amount": 155032594.09,
               "Average_Waiver_%": 0.3926878125938276
           },
           {
               "segment": "Others",
               "month": "Jun2024",
               "recovery": 4840835.0,
               "Recovery_%": 0.031224627494717553
           }]
       ],
     "pos": [
    //    [ {
    //         "segment": "<1Lakh",
    //         "month": "Feb2023",
    //         "settlement_amount": 18777111.82,
    //         "Average_Waiver_%": 0.49207040845612277
    //     },
    //     {
    //         "segment": "<1Lakh",
    //         "month": "Feb2023",
    //         "recovery": 2185529.7,
    //         "Recovery_%": 0.11639328353320741
    //     }],
    //    [ {
    //         "segment": "<1Lakh",
    //         "month": "Mar2023",
    //         "settlement_amount": 21521836.82,
    //         "Average_Waiver_%": 0.5226735434337352
    //     },
    //     {
    //         "segment": "<1Lakh",
    //         "month": "Mar2023",
    //         "recovery": 3738190.06,
    //         "Recovery_%": 0.17369289114422345
    //     }],
        [{
            "segment": "<1Lakh",
            "month": "Apr2023",
            "settlement_amount": 23215936.82,
            "Average_Waiver_%": 0.5377879351798138
        },
        {
            "segment": "<1Lakh",
            "month": "Apr2023",
            "recovery": 984670.75,
            "Recovery_%": 0.0424135695076379
        }],
        [{
            "segment": "<1Lakh",
            "month": "May2023",
            "settlement_amount": 25875950.82,
            "Average_Waiver_%": 0.5611645681221445
        },
        {
            "segment": "<1Lakh",
           "month": "May2023",
            "recovery": 1498673.78,
            "Recovery_%": 0.05791763133363383
        }],
       [ {
            "segment": "<1Lakh",
            "month": "Jun2023",
            "settlement_amount": 25889332.91,
            "Average_Waiver_%": 0.5757371408921789
        },
        {
            "segment": "<1Lakh",
            "month": "Jun2023",
            "recovery": 1079484.6,
            "Recovery_%": 0.041696114911598935
        }],
       [ {
            "segment": "<1Lakh",
            "month": "Jul2023",
            "settlement_amount": 23405749.66,
            "Average_Waiver_%": 0.5584017228700588
        },
        {
            "segment": "<1Lakh",
            "month": "Jul2023",
            "recovery": 1041125.3,
            "Recovery_%": 0.04448160452554375
        }],
        [{
            "segment": "<1Lakh",
            "month": "Aug2023",
            "settlement_amount": 22199407.66,
            "Average_Waiver_%": 0.5447214600076749
        },
        {
            "segment": "<1Lakh",
            "month": "Aug2023",
            "recovery": 881279.1,
            "Recovery_%": 0.03969831598650862
        }],
        [{
            "segment": "<1Lakh",
            "month": "Sep2023",
            "settlement_amount": 21068267.66,
            "Average_Waiver_%": 0.5289642229956846
        },
        {
            "segment": "<1Lakh",
            "month": "Sep2023",
            "recovery": 851878.51,
            "Recovery_%": 0.04043419818599362
        }],
        [{
            "segment": "<1Lakh",
            "month": "Oct2023",
            "settlement_amount": 21209967.66,
            "Average_Waiver_%": 0.5327409209425414
        },
        {
            "segment": "<1Lakh",
            "month": "Oct2023",
            "recovery": 793233.0,
            "Recovery_%": 0.03739906692530996
        }],
        [{
            "segment": "<1Lakh",
            "month": "Nov2023",
            "settlement_amount": 21887151.66,
            "Average_Waiver_%": 0.5410736958846407
        },
        {
            "segment": "<1Lakh",
            "month": "Nov2023",
            "recovery": 899891.0,
            "Recovery_%": 0.04111503470068247
        }],
        [{
            "segment": "<1Lakh",
            "month": "Dec2023",
            "settlement_amount": 22915951.66,
            "Average_Waiver_%": 0.5444670340107517
        },
        {
            "segment": "<1Lakh",
           "month": "Dec2023",
            "recovery": 551193.0,
            "Recovery_%": 0.02405280863644482
        }],
        [{
            "segment": "<1Lakh",
            "month": "Jan2024",
            "settlement_amount": 23426551.66,
            "Average_Waiver_%": 0.5462981123478445
        },
        {
            "segment": "<1Lakh",
            "month": "Jan2024",
            "recovery": 610527.0,
            "Recovery_%": 0.026061326005673
        }],
        [{
            "segment": "<1Lakh",
            "month": "Feb2024",
            "settlement_amount": 23761679.66,
            "Average_Waiver_%": 0.549639134455899
        },
        {
            "segment": "<1Lakh",
            "month": "Feb2024",
            "recovery": 679139.0,
            "Recovery_%": 0.028581270756850193
        }],
        [{
            "segment": "<1Lakh",
            "month": "Mar2024",
            "settlement_amount": 24953979.66,
            "Average_Waiver_%": 0.5578668742749268
        },
        {
            "segment": "<1Lakh",
            "month": "Mar2024",
            "recovery": 796900.0,
            "Recovery_%": 0.03193478598836046
        }],
        [{
            "segment": "<1Lakh",
            "month": "Apr2024",
            "settlement_amount": 27342982.66,
            "Average_Waiver_%": 0.5914354922408236
        },
        {
            "segment": "<1Lakh",
            "month": "Apr2024",
            "recovery": 664170.18,
            "Recovery_%": 0.024290333949983204
        }],
        [{
            "segment": "<1Lakh",
            "month": "May2024",
            "settlement_amount": 27320429.66,
            "Average_Waiver_%": 0.5832863860471845
        },
        {
            "segment": "<1Lakh",
            "month": "May2024",
            "recovery": 861307.0,
            "Recovery_%": 0.03152611473241376
        }],
        [{
            "segment": "<1Lakh",
            "month": "Jun2024",
            "settlement_amount": 29137279.66,
            "Average_Waiver_%": 0.6019756220976441
        },
        {
            "segment": "<1Lakh",
            "month": "Jun2024",
            "recovery": 785983.0,
            "Recovery_%": 0.026975167523240227
        }],
    //    [ {
    //         "segment": ">=1 - 5Lakh",
    //         "month": "Feb2023",
    //         "settlement_amount": 275500268.46,
    //         "Average_Waiver_%": 0.38224570230754173
    //     },
    //     {
    //         "segment": ">=1 - 5Lakh",
    //         "month": "Feb2023",
    //         "recovery": 20451855.0,
    //         "Recovery_%": 0.0742353360100969
    //     }],
    //    [ {
    //         "segment": ">=1 - 5Lakh",
    //         "month": "Mar2023",
    //         "settlement_amount": 288070822.92,
    //         "Average_Waiver_%": 0.38890144317191144
    //     },
    //     {
    //         "segment": ">=1 - 5Lakh",
    //         "month": "Mar2023",
    //         "recovery": 30789853.26,
    //         "Recovery_%": 0.10688292881556642
    //     }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "Apr2023",
            "settlement_amount": 295679213.02,
            "Average_Waiver_%": 0.39379143654358906
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Apr2023",
            "recovery": 13179609.0,
            "Recovery_%": 0.04457401271258295
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "May2023",
            "settlement_amount": 306184943.02,
            "Average_Waiver_%": 0.3958094009065313
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "May2023",
            "recovery": 13859100.4,
            "Recovery_%": 0.04526382082444441
        }],
       [ {
            "segment": ">=1 - 5Lakh",
            "month": "Jun2023",
            "settlement_amount": 303866288.02,
            "Average_Waiver_%": 0.3970081475544686
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Jun2023",
            "recovery": 12136777.0,
            "Recovery_%": 0.03994117636110123
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "Jul2023",
            "settlement_amount": 295249786.02,
            "Average_Waiver_%": 0.39684738501249905
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Jul2023",
            "recovery": 11090726.0,
            "Recovery_%": 0.03756387481089901
        }],
       [ {
            "segment": ">=1 - 5Lakh",
           "month": "Aug2023",
            "settlement_amount": 293526478.02,
            "Average_Waiver_%": 0.39838384992656023
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Aug2023",
            "recovery": 8952865.0,
            "Recovery_%": 0.030501047334441766
        }],
       [ {
            "segment": ">=1 - 5Lakh",
            "month": "Sep2023",
            "settlement_amount": 296526505.02,
            "Average_Waiver_%": 0.3981230986559
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Sep2023",
            "recovery": 9644769.0,
            "Recovery_%": 0.032525824291320886
        }],
       [ {
            "segment": ">=1 - 5Lakh",
            "month": "Oct2023",
            "settlement_amount": 301853425.02,
            "Average_Waiver_%": 0.40178517179168377
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Oct2023",
            "recovery": 8368843.0,
            "Recovery_%": 0.027724856855427443
        }],
       [ {
            "segment": ">=1 - 5Lakh",
            "month": "Nov2023",
            "settlement_amount": 312051186.02,
            "Average_Waiver_%": 0.4040627598932832
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Nov2023",
            "recovery": 7376591.27,
            "Recovery_%": 0.02363904256889195
        }],
        [{
            "segment": ">=1 - 5Lakh",
           "month": "Dec2023",
            "settlement_amount": 321267551.02,
            "Average_Waiver_%": 0.40566014042326537
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Dec2023",
            "recovery": 8369884.4,
            "Recovery_%": 0.026052691513432515
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "Jan2024",
            "settlement_amount": 333343424.02,
            "Average_Waiver_%": 0.4086572072446223
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Jan2024",
            "recovery": 9707307.4,
            "Recovery_%": 0.0291210406461103
        }],
       [ {
            "segment": ">=1 - 5Lakh",
           "month": "Feb2024",
            "settlement_amount": 343138944.02,
            "Average_Waiver_%": 0.41048116585935535
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Feb2024",
            "recovery": 9074146.0,
            "Recovery_%": 0.026444523882054934
        }],
       [ {
            "segment": ">=1 - 5Lakh",
            "month": "Mar2024",
            "settlement_amount": 353625702.02,
            "Average_Waiver_%": 0.41196378022426833
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Mar2024",
            "recovery": 11638571.0,
            "Recovery_%": 0.03291211847305646
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "Apr2024",
            "settlement_amount": 360078099.02,
            "Average_Waiver_%": 0.41279634285092026
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Apr2024",
            "recovery": 9911798.0,
            "Recovery_%": 0.02752680051071216
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "May2024",
            "settlement_amount": 373315128.02,
            "Average_Waiver_%": 0.41462816836684513
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "May2024",
            "recovery": 13591329.0,
            "Recovery_%": 0.03640712090100956
        }],
        [{
            "segment": ">=1 - 5Lakh",
            "month": "Jun2024",
            "settlement_amount": 380173248.02,
            "Average_Waiver_%": 0.417999390822126
        },
        {
            "segment": ">=1 - 5Lakh",
            "month": "Jun2024",
            "recovery": 11909205.0,
            "Recovery_%": 0.03132573126074743
        }],
        // [ {
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
    //         "settlement_amount": 124477963.0,
    //         "Average_Waiver_%": 0.3501543634456396
    //     },
    //     {
    //         "segment": ">=5 - 10Lakh",
    //         "month": "Mar2023",
    //         "recovery": 8866831.0,
    //         "Recovery_%": 0.07123213447829316
    //     }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Apr2023",
            "settlement_amount": 124147007.0,
            "Average_Waiver_%": 0.3517185210549654
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Apr2023",
            "recovery": 6038436.0,
            "Recovery_%": 0.04863940054551617
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "May2023",
            "settlement_amount": 127786077.0,
            "Average_Waiver_%": 0.35591661099722116
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "May2023",
            "recovery": 4504309.0,
            "Recovery_%": 0.0352488244865675
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Jun2023",
            "settlement_amount": 128900077.0,
            "Average_Waiver_%": 0.3602032899929108
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Jun2023",
            "recovery": 4892201.0,
            "Recovery_%": 0.03795343737459521
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Jul2023",
            "settlement_amount": 124938377.0,
            "Average_Waiver_%": 0.3624771731430284
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Jul2023",
            "recovery": 2955240.0,
            "Recovery_%": 0.023653580836895297
        }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Aug2023",
            "settlement_amount": 129165850.0,
            "Average_Waiver_%": 0.3627965414799395
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Aug2023",
            "recovery": 3592326.0,
            "Recovery_%": 0.027811731970950528
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Sept2023",
            "settlement_amount": 133940550.0,
            "Average_Waiver_%": 0.36369454405804946
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Sept2023",
            "recovery": 2955069.0,
            "Recovery_%": 0.022062541926250116
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Oct2023",
            "settlement_amount": 137141132.0,
            "Average_Waiver_%": 0.3638518906658587
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Oct2023",
            "recovery": 2792561.0,
            "Recovery_%": 0.02036268010388014
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Nov2023",
            "settlement_amount": 138475142.0,
            "Average_Waiver_%": 0.36439105858615745
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Nov2023",
            "recovery": 1771922.0,
            "Recovery_%": 0.01279595727007812
        }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Dec2023",
            "settlement_amount": 143408542.0,
            "Average_Waiver_%": 0.36447604086153945
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Dec2023",
            "recovery": 2874432.0,
            "Recovery_%": 0.020043659602926582
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Jan2024",
            "settlement_amount": 145939593.0,
            "Average_Waiver_%": 0.36415176162376317
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Jan2024",
            "recovery": 2236103.0,
            "Recovery_%": 0.015322113444567438
        }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Feb2024",
            "settlement_amount": 152226993.0,
            "Average_Waiver_%": 0.3664133202072049
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Feb2024",
            "recovery": 2352070.0,
            "Recovery_%": 0.015451070494442467
        }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Mar2024",
            "settlement_amount": 158755993.0,
            "Average_Waiver_%": 0.3671868683003441
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Mar2024",
            "recovery": 4166854.0,
            "Recovery_%": 0.02624690836080752
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "Apr2024",
            "settlement_amount": 163918458.0,
            "Average_Waiver_%": 0.3707665286464302
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Apr2024",
            "recovery": 3148030.0,
            "Recovery_%": 0.019204853671817727
        }],
        [{
            "segment": ">=5 - 10Lakh",
            "month": "May2024",
            "settlement_amount": 170224879.0,
            "Average_Waiver_%": 0.3718312555503265
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "May2024",
            "recovery": 4556313.0,
            "Recovery_%": 0.026766434065140385
        }],
       [ {
            "segment": ">=5 - 10Lakh",
            "month": "Jun2024",
            "settlement_amount": 173855643.0,
            "Average_Waiver_%": 0.3740713490251554
        },
        {
            "segment": ">=5 - 10Lakh",
            "month": "Jun2024",
            "recovery": 5481362.0,
            "Recovery_%": 0.031528237481483416
        }],
        // [{
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
        // [{
        //     "segment": ">=10L",
        //     "month": "Mar2023",
        //     "settlement_amount": 21235000.0,
        //     "Average_Waiver_%": 0.35399984394499934
        // },
        // {
        //     "segment": ">=10L",
        //     "month": "Mar2023",
        //     "recovery": 745000.0,
        //     "Recovery_%": 0.035083588415352016
        // }],
        [{
            "segment": ">=10L",
            "month": "Apr2023",
            "settlement_amount": 21015000.0,
            "Average_Waiver_%": 0.3574075587373727
        },
        {
            "segment": ">=10L",
            "month": "Apr2023",
            "recovery": 231400.0,
            "Recovery_%": 0.011011182488698548
        }],
        [{
            "segment": ">=10L",
            "month": "May2023",
            "settlement_amount": 21715000.0,
            "Average_Waiver_%": 0.35514857180353804
        },
        {
            "segment": ">=10L",
            "month": "May2023",
            "recovery": 482400.0,
            "Recovery_%": 0.022215058715173843
        }],
        [{
            "segment": ">=10L",
            "month": "Jun2023",
            "settlement_amount": 21715000.0,
            "Average_Waiver_%": 0.3564071189435136
        },
        {
            "segment": ">=10L",
            "month": "Jun2023",
            "recovery": 524400.0,
            "Recovery_%": 0.024149205618236243
        }],
        [{
            "segment": ">=10L",
            "month": "Jul2023",
            "settlement_amount": 20929000.0,
            "Average_Waiver_%": 0.36333037777927296
        },
        {
            "segment": ">=10L",
            "month": "Jul2023",
            "recovery": 449400.0,
            "Recovery_%": 0.021472597830761143
        }],
        [{
            "segment": ">=10L",
            "month": "Aug2023",
            "settlement_amount": 21050750.0,
            "Average_Waiver_%": 0.3543291029020777
        },
        {
            "segment": ">=10L",
            "month": "Aug2023",
            "recovery": 472400.0,
            "Recovery_%": 0.0224410056648813
        }],
        [{
            "segment": ">=10L",
            "month": "Sept2023",
            "settlement_amount": 22190750.0,
            "Average_Waiver_%": 0.36240810988918953
        },
        {
            "segment": ">=10L",
            "month": "Sept2023",
            "recovery": 778500.0,
            "Recovery_%": 0.035082185144711196
        }],
        [{
            "segment": ">=10L",
            "month": "Oct2023",
            "settlement_amount": 25176750.0,
            "Average_Waiver_%": 0.3746011177687293
        },
        {
            "segment": ">=10L",
            "month": "Oct2023",
            "recovery": 282500.0,
            "Recovery_%": 0.011220669864061087
        }],
        [{
            "segment": ">=10L",
            "month": "Nov2023",
            "settlement_amount": 25587250.0,
            "Average_Waiver_%": 0.3771206525739428
        },
        {
            "segment": ">=10L",
            "month": "Nov2023",
            "recovery": 259000.0,
            "Recovery_%": 0.01012222884444401
        }],
        [{
            "segment": ">=10L",
            "month": "Dec2023",
            "settlement_amount": 25518250.0,
            "Average_Waiver_%": 0.37601025678268357
        },
        {
            "segment": ">=10L",
            "month": "Dec2023",
            "recovery": 513351.0,
            "Recovery_%": 0.02011701429369177
        }],
       [ {
            "segment": ">=10L",
            "month": "Jan2024",
            "settlement_amount": 26813750.0,
            "Average_Waiver_%": 0.3749115789104219
        },
        {
            "segment": ">=10L",
            "month": "Jan2024",
            "recovery": 615752.0,
            "Recovery_%": 0.022964038972542074
        }],
      [{
            "segment": ">=10L",
            "month": "Feb2024",
            "settlement_amount": 27363750.0,
            "Average_Waiver_%": 0.37753008530679116
        },
        {
            "segment": ">=10L",
            "month": "Feb2024",
            "recovery": 722000.0,
            "Recovery_%": 0.02638527248640994
        }],
        [{
            "segment": ">=10L",
            "month": "Mar2024",
            "settlement_amount": 28273750.0,
            "Average_Waiver_%": 0.37972263179280513
        },
        {
            "segment": ">=10L",
            "month": "Mar2024",
            "recovery": 733666.0,
            "Recovery_%": 0.025948662628763428
        }],
        [{
            "segment": ">=10L",
            "month": "Apr2024",
            "settlement_amount": 26913750.0,
            "Average_Waiver_%": 0.3789756645117714
        },
        {
            "segment": ">=10L",
            "month": "Apr2024",
            "recovery": 664166.0,
            "Recovery_%": 0.024677571873113185
        }],
        [{
            "segment": ">=10L",
            "month": "May2024",
            "settlement_amount": 28492750.0,
            "Average_Waiver_%": 0.3824327390844089
        },
        {
            "segment": ">=10L",
            "month": "May2024",
            "recovery": 748348.0,
            "Recovery_%": 0.02626450588307552
        }],
        [{
            "segment": ">=10L",
            "month": "Jun2024",
            "settlement_amount": 29692750.0,
            "Average_Waiver_%": 0.38843402357325324
        },
        {
            "segment": ">=10L",
            "month": "Jun2024",
            "recovery": 715346.0,
            "Recovery_%": 0.024091604853036516
        }]
    ]
   }
const uniqueStaticData =
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
              "active_recovery_accounts": 57334.0,
              "%Unique_payers": 10.555691212892873
          },
          {
              "month": "Feb2023",
              "sub_segment": null,
              "average_payment_size": 24606.70469762062,
              "unique_payers": 6052.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": null,
              "active_recovery_accounts": 57187.0,
              "%Unique_payers": 9.332540612376938
          },
          {
              "month": "Mar2023",
              "sub_segment": null,
              "average_payment_size": 24215.83632939854,
              "unique_payers": 5337.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": null,
              "active_recovery_accounts": 57690.0,
              "%Unique_payers": 7.436297451898076
          },
          {
              "month": "Apr2023",
              "sub_segment": null,
              "average_payment_size": 21284.588610722607,
              "unique_payers": 4290.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": null,
              "active_recovery_accounts": 59039.0,
              "%Unique_payers": 8.706109520825217
          },
          {
              "month": "May2023",
              "sub_segment": null,
              "average_payment_size": 22292.624918287936,
              "unique_payers": 5140.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": null,
              "active_recovery_accounts": 59518.0,
              "%Unique_payers": 8.654524681608924
          },
          {
              "month": "Jun2023",
              "sub_segment": null,
              "average_payment_size": 24522.521118229466,
              "unique_payers": 5151.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": null,
              "active_recovery_accounts": 59206.0,
              "%Unique_payers": 8.63426004121204
          },
          {
              "month": "Jul2023",
              "sub_segment": null,
              "average_payment_size": 22839.568961267607,
              "unique_payers": 5112.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": null,
              "active_recovery_accounts": 59237.0,
              "%Unique_payers": 8.157063997163934
          },
          {
              "month": "Aug2023",
              "sub_segment": null,
              "average_payment_size": 23824.106560430464,
              "unique_payers": 4832.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": null,
              "active_recovery_accounts": 59557.0,
              "%Unique_payers": 8.541397316856122
          },
          {
              "month": "Sep2023",
              "sub_segment": null,
              "average_payment_size": 23797.634202870064,
              "unique_payers": 5087.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": null,
              "active_recovery_accounts": 59847.0,
              "%Unique_payers": 7.9068290808227655
          },
          {
              "month": "Oct2023",
              "sub_segment": null,
              "average_payment_size": 24667.204940828404,
              "unique_payers": 4732.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": null,
              "active_recovery_accounts": 60214.0,
              "%Unique_payers": 7.478327299299166
          },
          {
              "month": "Nov2023",
              "sub_segment": null,
              "average_payment_size": 22213.086286919828,
              "unique_payers": 4503.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": null,
              "active_recovery_accounts": 60750.0,
              "%Unique_payers": 7.9259259259259265
          },
          {
              "month": "Dec2023",
              "sub_segment": null,
              "average_payment_size": 23414.10072274143,
              "unique_payers": 4815.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": null,
              "active_recovery_accounts": 60978.0,
              "%Unique_payers": 7.5191052510741585
          },
          {
              "month": "Jan2024",
              "sub_segment": null,
              "average_payment_size": 23208.042597600874,
              "unique_payers": 4585.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": null,
              "active_recovery_accounts": 61494.0,
              "%Unique_payers": 7.509675740722672
          },
          {
              "month": "Feb2024",
              "sub_segment": null,
              "average_payment_size": 22974.489335210048,
              "unique_payers": 4618.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": null,
              "active_recovery_accounts": 61916.0,
              "%Unique_payers": 7.666838943084178
          },
          {
              "month": "Mar2024",
              "sub_segment": null,
              "average_payment_size": 24942.929014114172,
              "unique_payers": 4747.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": null,
              "active_recovery_accounts": 62161.0,
              "%Unique_payers": 6.568427148855392
          },
          {
              "month": "Apr2024",
              "sub_segment": null,
              "average_payment_size": 19925.74624785697,
              "unique_payers": 4083.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": null,
              "active_recovery_accounts": 62922.0,
              "%Unique_payers": 7.455262070499984
          },
          {
              "month": "May2024",
              "sub_segment": null,
              "average_payment_size": 21401.85795992326,
              "unique_payers": 4691.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": null,
              "active_recovery_accounts": 63502.0,
              "%Unique_payers": 6.439167270322195
          },
          {
              "month": "Jun2024",
              "sub_segment": null,
              "average_payment_size": 21362.520643189044,
              "unique_payers": 4089.0
          }
      ]
  ],
  "mob": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4556.0,
              "%Unique_payers": 28.709394205443374
          },
          {
              "month": "Feb2023",
              "sub_segment": "V1",
              "average_payment_size": 27963.12288990826,
              "unique_payers": 1308.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 2903.0,
              "%Unique_payers": 17.292456079917326
          },
          {
              "month": "Mar2023",
              "sub_segment": "V1",
              "average_payment_size": 36348.62382470119,
              "unique_payers": 502.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 3688.0,
              "%Unique_payers": 13.828633405639914
          },
          {
              "month": "Apr2023",
              "sub_segment": "V1",
              "average_payment_size": 28184.717647058824,
              "unique_payers": 510.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4274.0,
              "%Unique_payers": 20.776789892372484
          },
          {
              "month": "May2023",
              "sub_segment": "V1",
              "average_payment_size": 35580.53335585586,
              "unique_payers": 888.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4560.0,
              "%Unique_payers": 21.00877192982456
          },
          {
              "month": "Jun2023",
              "sub_segment": "V1",
              "average_payment_size": 34142.87639874739,
              "unique_payers": 958.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4569.0,
              "%Unique_payers": 21.05493543444955
          },
          {
              "month": "Jul2023",
              "sub_segment": "V1",
              "average_payment_size": 34403.88312889813,
              "unique_payers": 962.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4708.0,
              "%Unique_payers": 19.987255734919287
          },
          {
              "month": "Aug2023",
              "sub_segment": "V1",
              "average_payment_size": 35644.21765143465,
              "unique_payers": 941.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4773.0,
              "%Unique_payers": 20.364550597108735
          },
          {
              "month": "Sep2023",
              "sub_segment": "V1",
              "average_payment_size": 33991.30721193415,
              "unique_payers": 972.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4856.0,
              "%Unique_payers": 19.028006589785832
          },
          {
              "month": "Oct2023",
              "sub_segment": "V1",
              "average_payment_size": 39779.187694805194,
              "unique_payers": 924.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4910.0,
              "%Unique_payers": 17.637474541751526
          },
          {
              "month": "Nov2023",
              "sub_segment": "V1",
              "average_payment_size": 30921.39993071594,
              "unique_payers": 866.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V1",
              "active_recovery_accounts": 4865.0,
              "%Unique_payers": 20.24665981500514
          },
          {
              "month": "Dec2023",
              "sub_segment": "V1",
              "average_payment_size": 37702.72959390863,
              "unique_payers": 985.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4670.0,
              "%Unique_payers": 18.843683083511777
          },
          {
              "month": "Jan2024",
              "sub_segment": "V1",
              "average_payment_size": 36920.90514772727,
              "unique_payers": 880.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4707.0,
              "%Unique_payers": 19.50286806883365
          },
          {
              "month": "Feb2024",
              "sub_segment": "V1",
              "average_payment_size": 35106.588344226584,
              "unique_payers": 918.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4701.0,
              "%Unique_payers": 18.613061050840248
          },
          {
              "month": "Mar2024",
              "sub_segment": "V1",
              "average_payment_size": 35410.48193142857,
              "unique_payers": 875.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4595.0,
              "%Unique_payers": 16.2132752992383
          },
          {
              "month": "Apr2024",
              "sub_segment": "V1",
              "average_payment_size": 31704.56034899329,
              "unique_payers": 745.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4860.0,
              "%Unique_payers": 19.17695473251029
          },
          {
              "month": "May2024",
              "sub_segment": "V1",
              "average_payment_size": 31108.745826180257,
              "unique_payers": 932.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V1",
              "active_recovery_accounts": 4905.0,
              "%Unique_payers": 18.246687054026502
          },
          {
              "month": "Jun2024",
              "sub_segment": "V1",
              "average_payment_size": 30493.521463687153,
              "unique_payers": 895.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 3191.0,
              "%Unique_payers": 18.176120338451895
          },
          {
              "month": "Feb2023",
              "sub_segment": "V2",
              "average_payment_size": 24278.52179310345,
              "unique_payers": 580.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 4708.0,
              "%Unique_payers": 24.468988954970264
          },
          {
              "month": "Mar2023",
              "sub_segment": "V2",
              "average_payment_size": 22232.65861979167,
              "unique_payers": 1152.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 4119.0,
              "%Unique_payers": 19.446467589220685
          },
          {
              "month": "Apr2023",
              "sub_segment": "V2",
              "average_payment_size": 18307.628826466917,
              "unique_payers": 801.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 4146.0,
              "%Unique_payers": 20.791123974915582
          },
          {
              "month": "May2023",
              "sub_segment": "V2",
              "average_payment_size": 21037.45663573086,
              "unique_payers": 862.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 4081.0,
              "%Unique_payers": 20.240137221269297
          },
          {
              "month": "Jun2023",
              "sub_segment": "V2",
              "average_payment_size": 21987.298813559322,
              "unique_payers": 826.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 2631.0,
              "%Unique_payers": 12.770809578107183
          },
          {
              "month": "Jul2023",
              "sub_segment": "V2",
              "average_payment_size": 25242.65098214286,
              "unique_payers": 336.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 3265.0,
              "%Unique_payers": 13.047473200612558
          },
          {
              "month": "Aug2023",
              "sub_segment": "V2",
              "average_payment_size": 26058.260492957743,
              "unique_payers": 426.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 3595.0,
              "%Unique_payers": 14.687065368567453
          },
          {
              "month": "Sep2023",
              "sub_segment": "V2",
              "average_payment_size": 28152.623465909095,
              "unique_payers": 528.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 3747.0,
              "%Unique_payers": 14.198025086736054
          },
          {
              "month": "Oct2023",
              "sub_segment": "V2",
              "average_payment_size": 27129.0419924812,
              "unique_payers": 532.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 3840.0,
              "%Unique_payers": 12.760416666666666
          },
          {
              "month": "Nov2023",
              "sub_segment": "V2",
              "average_payment_size": 24097.34218367347,
              "unique_payers": 490.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V2",
              "active_recovery_accounts": 4060.0,
              "%Unique_payers": 14.113300492610836
          },
          {
              "month": "Dec2023",
              "sub_segment": "V2",
              "average_payment_size": 23288.080087260038,
              "unique_payers": 573.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4156.0,
              "%Unique_payers": 14.148219441770934
          },
          {
              "month": "Jan2024",
              "sub_segment": "V2",
              "average_payment_size": 28993.07863945578,
              "unique_payers": 588.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4261.0,
              "%Unique_payers": 13.377141516076039
          },
          {
              "month": "Feb2024",
              "sub_segment": "V2",
              "average_payment_size": 25842.231228070177,
              "unique_payers": 570.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4324.0,
              "%Unique_payers": 13.459759481961148
          },
          {
              "month": "Mar2024",
              "sub_segment": "V2",
              "average_payment_size": 29247.138659793818,
              "unique_payers": 582.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4220.0,
              "%Unique_payers": 12.511848341232227
          },
          {
              "month": "Apr2024",
              "sub_segment": "V2",
              "average_payment_size": 23411.403674242425,
              "unique_payers": 528.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4135.0,
              "%Unique_payers": 14.123337363966144
          },
          {
              "month": "May2024",
              "sub_segment": "V2",
              "average_payment_size": 21991.194965753424,
              "unique_payers": 584.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V2",
              "active_recovery_accounts": 4156.0,
              "%Unique_payers": 11.645813282001924
          },
          {
              "month": "Jun2024",
              "sub_segment": "V2",
              "average_payment_size": 22181.783367768592,
              "unique_payers": 484.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3567.0,
              "%Unique_payers": 17.802074572469863
          },
          {
              "month": "Feb2023",
              "sub_segment": "V3",
              "average_payment_size": 25033.386913385828,
              "unique_payers": 635.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3370.0,
              "%Unique_payers": 15.19287833827893
          },
          {
              "month": "Mar2023",
              "sub_segment": "V3",
              "average_payment_size": 22480.339765624998,
              "unique_payers": 512.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3212.0,
              "%Unique_payers": 11.79950186799502
          },
          {
              "month": "Apr2023",
              "sub_segment": "V3",
              "average_payment_size": 20641.810026385225,
              "unique_payers": 379.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3001.0,
              "%Unique_payers": 13.195601466177942
          },
          {
              "month": "May2023",
              "sub_segment": "V3",
              "average_payment_size": 22042.537045454545,
              "unique_payers": 396.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 2944.0,
              "%Unique_payers": 12.839673913043478
          },
          {
              "month": "Jun2023",
              "sub_segment": "V3",
              "average_payment_size": 21956.818174603173,
              "unique_payers": 378.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 4261.0,
              "%Unique_payers": 19.009622154423845
          },
          {
              "month": "Jul2023",
              "sub_segment": "V3",
              "average_payment_size": 19420.906802469137,
              "unique_payers": 810.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3631.0,
              "%Unique_payers": 18.97548884604792
          },
          {
              "month": "Aug2023",
              "sub_segment": "V3",
              "average_payment_size": 19524.65804063861,
              "unique_payers": 689.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3528.0,
              "%Unique_payers": 17.9421768707483
          },
          {
              "month": "Sep2023",
              "sub_segment": "V3",
              "average_payment_size": 21305.914344391786,
              "unique_payers": 633.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 3478.0,
              "%Unique_payers": 15.842438182863713
          },
          {
              "month": "Oct2023",
              "sub_segment": "V3",
              "average_payment_size": 18655.06891107078,
              "unique_payers": 551.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 2334.0,
              "%Unique_payers": 9.768637532133676
          },
          {
              "month": "Nov2023",
              "sub_segment": "V3",
              "average_payment_size": 15926.15701754386,
              "unique_payers": 228.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V3",
              "active_recovery_accounts": 2949.0,
              "%Unique_payers": 10.308579179382841
          },
          {
              "month": "Dec2023",
              "sub_segment": "V3",
              "average_payment_size": 24077.808552631577,
              "unique_payers": 304.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3248.0,
              "%Unique_payers": 10.775862068965516
          },
          {
              "month": "Jan2024",
              "sub_segment": "V3",
              "average_payment_size": 21844.328885714283,
              "unique_payers": 350.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3396.0,
              "%Unique_payers": 11.42520612485277
          },
          {
              "month": "Feb2024",
              "sub_segment": "V3",
              "average_payment_size": 17092.78025773196,
              "unique_payers": 388.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3503.0,
              "%Unique_payers": 12.018270054239224
          },
          {
              "month": "Mar2024",
              "sub_segment": "V3",
              "average_payment_size": 20402.61862232779,
              "unique_payers": 421.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3711.0,
              "%Unique_payers": 10.212880625168417
          },
          {
              "month": "Apr2024",
              "sub_segment": "V3",
              "average_payment_size": 20175.171688654355,
              "unique_payers": 379.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3813.0,
              "%Unique_payers": 11.591922370836611
          },
          {
              "month": "May2024",
              "sub_segment": "V3",
              "average_payment_size": 26167.96452488688,
              "unique_payers": 442.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V3",
              "active_recovery_accounts": 3926.0,
              "%Unique_payers": 10.315843097300052
          },
          {
              "month": "Jun2024",
              "sub_segment": "V3",
              "average_payment_size": 20893.418395061726,
              "unique_payers": 405.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 20813.0,
              "%Unique_payers": 12.131840676500264
          },
          {
              "month": "Feb2023",
              "sub_segment": "V4",
              "average_payment_size": 22779.225568316833,
              "unique_payers": 2525.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 19471.0,
              "%Unique_payers": 11.365620666632429
          },
          {
              "month": "Mar2023",
              "sub_segment": "V4",
              "average_payment_size": 22432.635910528694,
              "unique_payers": 2213.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 18931.0,
              "%Unique_payers": 9.45539062912683
          },
          {
              "month": "Apr2023",
              "sub_segment": "V4",
              "average_payment_size": 19906.146927374302,
              "unique_payers": 1790.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 18550.0,
              "%Unique_payers": 10.625336927223719
          },
          {
              "month": "May2023",
              "sub_segment": "V4",
              "average_payment_size": 18477.20177574835,
              "unique_payers": 1971.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 17721.0,
              "%Unique_payers": 10.507307714011626
          },
          {
              "month": "Jun2023",
              "sub_segment": "V4",
              "average_payment_size": 22178.047207303975,
              "unique_payers": 1862.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 17023.0,
              "%Unique_payers": 10.726663925277565
          },
          {
              "month": "Jul2023",
              "sub_segment": "V4",
              "average_payment_size": 19504.490388828042,
              "unique_payers": 1826.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 16326.0,
              "%Unique_payers": 9.922822491730981
          },
          {
              "month": "Aug2023",
              "sub_segment": "V4",
              "average_payment_size": 21138.34122839506,
              "unique_payers": 1620.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 11714.0,
              "%Unique_payers": 11.644186443571794
          },
          {
              "month": "Sep2023",
              "sub_segment": "V4",
              "average_payment_size": 19207.22267595308,
              "unique_payers": 1364.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 10025.0,
              "%Unique_payers": 10.683291770573566
          },
          {
              "month": "Oct2023",
              "sub_segment": "V4",
              "average_payment_size": 21067.703286647993,
              "unique_payers": 1071.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 10286.0,
              "%Unique_payers": 11.996888975306241
          },
          {
              "month": "Nov2023",
              "sub_segment": "V4",
              "average_payment_size": 19429.612739059972,
              "unique_payers": 1234.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V4",
              "active_recovery_accounts": 9169.0,
              "%Unique_payers": 12.171447267968153
          },
          {
              "month": "Dec2023",
              "sub_segment": "V4",
              "average_payment_size": 17255.933476702507,
              "unique_payers": 1116.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8723.0,
              "%Unique_payers": 11.418090106614697
          },
          {
              "month": "Jan2024",
              "sub_segment": "V4",
              "average_payment_size": 19538.13145582329,
              "unique_payers": 996.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8404.0,
              "%Unique_payers": 11.268443598286531
          },
          {
              "month": "Feb2024",
              "sub_segment": "V4",
              "average_payment_size": 20851.012270327352,
              "unique_payers": 947.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8280.0,
              "%Unique_payers": 10.905797101449275
          },
          {
              "month": "Mar2024",
              "sub_segment": "V4",
              "average_payment_size": 20923.66666666667,
              "unique_payers": 903.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8250.0,
              "%Unique_payers": 9.115151515151515
          },
          {
              "month": "Apr2024",
              "sub_segment": "V4",
              "average_payment_size": 14983.294042553192,
              "unique_payers": 752.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8341.0,
              "%Unique_payers": 10.106701834312434
          },
          {
              "month": "May2024",
              "sub_segment": "V4",
              "average_payment_size": 16483.63824436536,
              "unique_payers": 843.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V4",
              "active_recovery_accounts": 8440.0,
              "%Unique_payers": 8.30568720379147
          },
          {
              "month": "Jun2024",
              "sub_segment": "V4",
              "average_payment_size": 19717.482624821685,
              "unique_payers": 701.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 18631.0,
              "%Unique_payers": 4.696473619236756
          },
          {
              "month": "Feb2023",
              "sub_segment": "V5",
              "average_payment_size": 25198.683074285713,
              "unique_payers": 875.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 19640.0,
              "%Unique_payers": 4.266802443991853
          },
          {
              "month": "Mar2023",
              "sub_segment": "V5",
              "average_payment_size": 25788.782183770887,
              "unique_payers": 838.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 20042.0,
              "%Unique_payers": 3.50264444666201
          },
          {
              "month": "Apr2023",
              "sub_segment": "V5",
              "average_payment_size": 22599.1844017094,
              "unique_payers": 702.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 20611.0,
              "%Unique_payers": 4.240454126437339
          },
          {
              "month": "May2023",
              "sub_segment": "V5",
              "average_payment_size": 19417.41704805492,
              "unique_payers": 874.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 21174.0,
              "%Unique_payers": 4.481911778596392
          },
          {
              "month": "Jun2023",
              "sub_segment": "V5",
              "average_payment_size": 23756.878619599578,
              "unique_payers": 949.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 21148.0,
              "%Unique_payers": 4.648193682617742
          },
          {
              "month": "Jul2023",
              "sub_segment": "V5",
              "average_payment_size": 20089.23553407935,
              "unique_payers": 983.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 21173.0,
              "%Unique_payers": 4.576583384499126
          },
          {
              "month": "Aug2023",
              "sub_segment": "V5",
              "average_payment_size": 19445.855438596493,
              "unique_payers": 969.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 25140.0,
              "%Unique_payers": 5.505171042163883
          },
          {
              "month": "Sep2023",
              "sub_segment": "V5",
              "average_payment_size": 21310.836950867055,
              "unique_payers": 1384.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 26224.0,
              "%Unique_payers": 5.548352654057352
          },
          {
              "month": "Oct2023",
              "sub_segment": "V5",
              "average_payment_size": 20211.571216494845,
              "unique_payers": 1455.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 26618.0,
              "%Unique_payers": 5.4962807122999475
          },
          {
              "month": "Nov2023",
              "sub_segment": "V5",
              "average_payment_size": 20000.91785372522,
              "unique_payers": 1463.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V5",
              "active_recovery_accounts": 26767.0,
              "%Unique_payers": 5.884111032241193
          },
          {
              "month": "Dec2023",
              "sub_segment": "V5",
              "average_payment_size": 19807.10403809524,
              "unique_payers": 1575.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 26571.0,
              "%Unique_payers": 5.682887358398254
          },
          {
              "month": "Jan2024",
              "sub_segment": "V5",
              "average_payment_size": 16745.128337748345,
              "unique_payers": 1510.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 26433.0,
              "%Unique_payers": 5.856315968675519
          },
          {
              "month": "Feb2024",
              "sub_segment": "V5",
              "average_payment_size": 18029.537487080102,
              "unique_payers": 1548.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 26136.0,
              "%Unique_payers": 6.473829201101928
          },
          {
              "month": "Mar2024",
              "sub_segment": "V5",
              "average_payment_size": 21954.902730496455,
              "unique_payers": 1692.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 25262.0,
              "%Unique_payers": 5.462750376058903
          },
          {
              "month": "Apr2024",
              "sub_segment": "V5",
              "average_payment_size": 16544.026347826086,
              "unique_payers": 1380.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 25252.0,
              "%Unique_payers": 6.324251544432125
          },
          {
              "month": "May2024",
              "sub_segment": "V5",
              "average_payment_size": 17497.972880400754,
              "unique_payers": 1597.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V5",
              "active_recovery_accounts": 25440.0,
              "%Unique_payers": 5.338050314465409
          },
          {
              "month": "Jun2024",
              "sub_segment": "V5",
              "average_payment_size": 17473.507673048603,
              "unique_payers": 1358.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 3230.0,
              "%Unique_payers": 2.538699690402477
          },
          {
              "month": "Feb2023",
              "sub_segment": "V6",
              "average_payment_size": 28711.457195121955,
              "unique_payers": 82.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 3674.0,
              "%Unique_payers": 2.286336418072945
          },
          {
              "month": "Mar2023",
              "sub_segment": "V6",
              "average_payment_size": 25569.68380952381,
              "unique_payers": 84.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 4219.0,
              "%Unique_payers": 1.82507703247215
          },
          {
              "month": "Apr2023",
              "sub_segment": "V6",
              "average_payment_size": 33005.93506493507,
              "unique_payers": 77.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 4877.0,
              "%Unique_payers": 2.3785113799466884
          },
          {
              "month": "May2023",
              "sub_segment": "V6",
              "average_payment_size": 19977.88844827586,
              "unique_payers": 116.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 5391.0,
              "%Unique_payers": 2.485624188462252
          },
          {
              "month": "Jun2023",
              "sub_segment": "V6",
              "average_payment_size": 21762.83440298507,
              "unique_payers": 134.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 5864.0,
              "%Unique_payers": 2.626193724420191
          },
          {
              "month": "Jul2023",
              "sub_segment": "V6",
              "average_payment_size": 21816.534350649352,
              "unique_payers": 154.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 6364.0,
              "%Unique_payers": 2.341294783155248
          },
          {
              "month": "Aug2023",
              "sub_segment": "V6",
              "average_payment_size": 22849.85073825503,
              "unique_payers": 149.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 6983.0,
              "%Unique_payers": 2.4344837462408706
          },
          {
              "month": "Sep2023",
              "sub_segment": "V6",
              "average_payment_size": 22064.959176470587,
              "unique_payers": 170.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 7605.0,
              "%Unique_payers": 2.0907297830374754
          },
          {
              "month": "Oct2023",
              "sub_segment": "V6",
              "average_payment_size": 17270.43779874214,
              "unique_payers": 159.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 8233.0,
              "%Unique_payers": 2.1498846107129843
          },
          {
              "month": "Nov2023",
              "sub_segment": "V6",
              "average_payment_size": 22847.155084745762,
              "unique_payers": 177.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V6",
              "active_recovery_accounts": 8880.0,
              "%Unique_payers": 2.40990990990991
          },
          {
              "month": "Dec2023",
              "sub_segment": "V6",
              "average_payment_size": 18855.72836448598,
              "unique_payers": 214.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 9499.0,
              "%Unique_payers": 2.200231603326666
          },
          {
              "month": "Jan2024",
              "sub_segment": "V6",
              "average_payment_size": 18224.56803827751,
              "unique_payers": 209.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 10109.0,
              "%Unique_payers": 2.0377881096053025
          },
          {
              "month": "Feb2024",
              "sub_segment": "V6",
              "average_payment_size": 21209.652718446603,
              "unique_payers": 206.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 10513.0,
              "%Unique_payers": 2.035575002378008
          },
          {
              "month": "Mar2024",
              "sub_segment": "V6",
              "average_payment_size": 21541.658878504673,
              "unique_payers": 214.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 11417.0,
              "%Unique_payers": 1.7254970657791013
          },
          {
              "month": "Apr2024",
              "sub_segment": "V6",
              "average_payment_size": 17428.996395939088,
              "unique_payers": 197.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 11630.0,
              "%Unique_payers": 2.0120378331900257
          },
          {
              "month": "May2024",
              "sub_segment": "V6",
              "average_payment_size": 17927.83188034188,
              "unique_payers": 234.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V6",
              "active_recovery_accounts": 11479.0,
              "%Unique_payers": 1.7510236083282515
          },
          {
              "month": "Jun2024",
              "sub_segment": "V6",
              "average_payment_size": 14672.873383084576,
              "unique_payers": 201.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3019.0,
              "%Unique_payers": 1.5568068896985758
          },
          {
              "month": "Feb2023",
              "sub_segment": "V7",
              "average_payment_size": 9479.511063829788,
              "unique_payers": 47.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3094.0,
              "%Unique_payers": 1.1635423400129283
          },
          {
              "month": "Mar2023",
              "sub_segment": "V7",
              "average_payment_size": 13018.790555555555,
              "unique_payers": 36.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3152.0,
              "%Unique_payers": 0.983502538071066
          },
          {
              "month": "Apr2023",
              "sub_segment": "V7",
              "average_payment_size": 13255.967741935483,
              "unique_payers": 31.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3243.0,
              "%Unique_payers": 1.0175763182238668
          },
          {
              "month": "May2023",
              "sub_segment": "V7",
              "average_payment_size": 12685.57303030303,
              "unique_payers": 33.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3319.0,
              "%Unique_payers": 1.3257005122024708
          },
          {
              "month": "Jun2023",
              "sub_segment": "V7",
              "average_payment_size": 8827.797272727272,
              "unique_payers": 44.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3380.0,
              "%Unique_payers": 1.21301775147929
          },
          {
              "month": "Jul2023",
              "sub_segment": "V7",
              "average_payment_size": 17663.69390243902,
              "unique_payers": 41.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3448.0,
              "%Unique_payers": 1.1020881670533642
          },
          {
              "month": "Aug2023",
              "sub_segment": "V7",
              "average_payment_size": 13994.506842105264,
              "unique_payers": 38.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3516.0,
              "%Unique_payers": 1.023890784982935
          },
          {
              "month": "Sep2023",
              "sub_segment": "V7",
              "average_payment_size": 6219.235555555556,
              "unique_payers": 36.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3604.0,
              "%Unique_payers": 1.1098779134295227
          },
          {
              "month": "Oct2023",
              "sub_segment": "V7",
              "average_payment_size": 13507.627250000001,
              "unique_payers": 40.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3688.0,
              "%Unique_payers": 1.2201735357917571
          },
          {
              "month": "Nov2023",
              "sub_segment": "V7",
              "average_payment_size": 11717.83,
              "unique_payers": 45.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "V7",
              "active_recovery_accounts": 3761.0,
              "%Unique_payers": 1.2762563148098909
          },
          {
              "month": "Dec2023",
              "sub_segment": "V7",
              "average_payment_size": 9355.128125000001,
              "unique_payers": 48.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 3833.0,
              "%Unique_payers": 1.3566397078006782
          },
          {
              "month": "Jan2024",
              "sub_segment": "V7",
              "average_payment_size": 12903.384423076923,
              "unique_payers": 52.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 3929.0,
              "%Unique_payers": 1.0435225248154747
          },
          {
              "month": "Feb2024",
              "sub_segment": "V7",
              "average_payment_size": 11742.731707317073,
              "unique_payers": 41.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 4214.0,
              "%Unique_payers": 1.4238253440911248
          },
          {
              "month": "Mar2024",
              "sub_segment": "V7",
              "average_payment_size": 19281.563000000002,
              "unique_payers": 60.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 4482.0,
              "%Unique_payers": 2.2757697456492636
          },
          {
              "month": "Apr2024",
              "sub_segment": "V7",
              "average_payment_size": 1937.3283333333331,
              "unique_payers": 102.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 4688.0,
              "%Unique_payers": 1.2585324232081911
          },
          {
              "month": "May2024",
              "sub_segment": "V7",
              "average_payment_size": 16247.186610169492,
              "unique_payers": 59.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "V7",
              "active_recovery_accounts": 4978.0,
              "%Unique_payers": 0.9039775010044194
          },
          {
              "month": "Jun2024",
              "sub_segment": "V7",
              "average_payment_size": 8035.584666666666,
              "unique_payers": 45.0
          }
      ]
  ],
  "location": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 6903.0,
              "%Unique_payers": 11.487758945386064
          },
          {
              "month": "Feb2023",
              "sub_segment": "MH",
              "average_payment_size": 23655.352875157627,
              "unique_payers": 793.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 6926.0,
              "%Unique_payers": 10.55443257291366
          },
          {
              "month": "Mar2023",
              "sub_segment": "MH",
              "average_payment_size": 23182.85722298222,
              "unique_payers": 731.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7027.0,
              "%Unique_payers": 8.538494378824533
          },
          {
              "month": "Apr2023",
              "sub_segment": "MH",
              "average_payment_size": 20640.246566666665,
              "unique_payers": 600.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7254.0,
              "%Unique_payers": 10.063413289219742
          },
          {
              "month": "May2023",
              "sub_segment": "MH",
              "average_payment_size": 23550.991356164384,
              "unique_payers": 730.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7365.0,
              "%Unique_payers": 9.355057705363205
          },
          {
              "month": "Jun2023",
              "sub_segment": "MH",
              "average_payment_size": 24579.090870827284,
              "unique_payers": 689.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7393.0,
              "%Unique_payers": 9.387258217232517
          },
          {
              "month": "Jul2023",
              "sub_segment": "MH",
              "average_payment_size": 24241.529913544666,
              "unique_payers": 694.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7479.0,
              "%Unique_payers": 9.426393902928199
          },
          {
              "month": "Aug2023",
              "sub_segment": "MH",
              "average_payment_size": 23910.40565957447,
              "unique_payers": 705.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7603.0,
              "%Unique_payers": 8.98329606734184
          },
          {
              "month": "Sep2023",
              "sub_segment": "MH",
              "average_payment_size": 20713.369970717424,
              "unique_payers": 683.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7733.0,
              "%Unique_payers": 8.858140437087805
          },
          {
              "month": "Oct2023",
              "sub_segment": "MH",
              "average_payment_size": 28124.44569343065,
              "unique_payers": 685.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7878.0,
              "%Unique_payers": 8.707793856308708
          },
          {
              "month": "Nov2023",
              "sub_segment": "MH",
              "average_payment_size": 25432.94518950437,
              "unique_payers": 686.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "MH",
              "active_recovery_accounts": 7977.0,
              "%Unique_payers": 8.938197317287202
          },
          {
              "month": "Dec2023",
              "sub_segment": "MH",
              "average_payment_size": 26587.220603085552,
              "unique_payers": 713.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8089.0,
              "%Unique_payers": 9.34602546668315
          },
          {
              "month": "Jan2024",
              "sub_segment": "MH",
              "average_payment_size": 25772.39908730159,
              "unique_payers": 756.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8193.0,
              "%Unique_payers": 9.276211399975589
          },
          {
              "month": "Feb2024",
              "sub_segment": "MH",
              "average_payment_size": 26078.397592105266,
              "unique_payers": 760.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8324.0,
              "%Unique_payers": 9.851033157135992
          },
          {
              "month": "Mar2024",
              "sub_segment": "MH",
              "average_payment_size": 24467.348463414637,
              "unique_payers": 820.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8358.0,
              "%Unique_payers": 7.896625987078249
          },
          {
              "month": "Apr2024",
              "sub_segment": "MH",
              "average_payment_size": 22508.172757575758,
              "unique_payers": 660.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8512.0,
              "%Unique_payers": 8.43515037593985
          },
          {
              "month": "May2024",
              "sub_segment": "MH",
              "average_payment_size": 25506.010111420608,
              "unique_payers": 718.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "MH",
              "active_recovery_accounts": 8646.0,
              "%Unique_payers": 7.668285912560721
          },
          {
              "month": "Jun2024",
              "sub_segment": "MH",
              "average_payment_size": 24451.81491704374,
              "unique_payers": 663.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4377.0,
              "%Unique_payers": 12.017363490975553
          },
          {
              "month": "Feb2023",
              "sub_segment": "UP",
              "average_payment_size": 20092.827300380228,
              "unique_payers": 526.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4360.0,
              "%Unique_payers": 11.123853211009175
          },
          {
              "month": "Mar2023",
              "sub_segment": "UP",
              "average_payment_size": 21080.95375257732,
              "unique_payers": 485.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4396.0,
              "%Unique_payers": 9.303912647861692
          },
          {
              "month": "Apr2023",
              "sub_segment": "UP",
              "average_payment_size": 19050.330073349633,
              "unique_payers": 409.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4494.0,
              "%Unique_payers": 10.59190031152648
          },
          {
              "month": "May2023",
              "sub_segment": "UP",
              "average_payment_size": 20000.716827731096,
              "unique_payers": 476.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4525.0,
              "%Unique_payers": 9.966850828729282
          },
          {
              "month": "Jun2023",
              "sub_segment": "UP",
              "average_payment_size": 19143.236541019956,
              "unique_payers": 451.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4478.0,
              "%Unique_payers": 9.937472085752567
          },
          {
              "month": "Jul2023",
              "sub_segment": "UP",
              "average_payment_size": 18536.21168539326,
              "unique_payers": 445.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4485.0,
              "%Unique_payers": 8.918617614269788
          },
          {
              "month": "Aug2023",
              "sub_segment": "UP",
              "average_payment_size": 21443.959375,
              "unique_payers": 400.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4526.0,
              "%Unique_payers": 10.05302695536898
          },
          {
              "month": "Sep2023",
              "sub_segment": "UP",
              "average_payment_size": 17499.82085714286,
              "unique_payers": 455.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4563.0,
              "%Unique_payers": 9.335963182117029
          },
          {
              "month": "Oct2023",
              "sub_segment": "UP",
              "average_payment_size": 19710.695352112674,
              "unique_payers": 426.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4602.0,
              "%Unique_payers": 8.25727944372012
          },
          {
              "month": "Nov2023",
              "sub_segment": "UP",
              "average_payment_size": 18309.753105263157,
              "unique_payers": 380.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "UP",
              "active_recovery_accounts": 4675.0,
              "%Unique_payers": 9.262032085561497
          },
          {
              "month": "Dec2023",
              "sub_segment": "UP",
              "average_payment_size": 14917.193926097,
              "unique_payers": 433.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4693.0,
              "%Unique_payers": 8.331557639036863
          },
          {
              "month": "Jan2024",
              "sub_segment": "UP",
              "average_payment_size": 19747.199437340154,
              "unique_payers": 391.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4740.0,
              "%Unique_payers": 7.932489451476793
          },
          {
              "month": "Feb2024",
              "sub_segment": "UP",
              "average_payment_size": 20555.563856382978,
              "unique_payers": 376.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4772.0,
              "%Unique_payers": 7.858340318524728
          },
          {
              "month": "Mar2024",
              "sub_segment": "UP",
              "average_payment_size": 18715.43168,
              "unique_payers": 375.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4827.0,
              "%Unique_payers": 7.209446861404599
          },
          {
              "month": "Apr2024",
              "sub_segment": "UP",
              "average_payment_size": 18525.7233045977,
              "unique_payers": 348.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4914.0,
              "%Unique_payers": 8.241758241758241
          },
          {
              "month": "May2024",
              "sub_segment": "UP",
              "average_payment_size": 20048.18661728395,
              "unique_payers": 405.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "UP",
              "active_recovery_accounts": 4991.0,
              "%Unique_payers": 6.972550591063915
          },
          {
              "month": "Jun2024",
              "sub_segment": "UP",
              "average_payment_size": 15939.635747126438,
              "unique_payers": 348.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5833.0,
              "%Unique_payers": 14.057946168352478
          },
          {
              "month": "Feb2023",
              "sub_segment": "TN",
              "average_payment_size": 20377.268719512198,
              "unique_payers": 820.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5723.0,
              "%Unique_payers": 13.000174733531363
          },
          {
              "month": "Mar2023",
              "sub_segment": "TN",
              "average_payment_size": 22105.21510752688,
              "unique_payers": 744.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5726.0,
              "%Unique_payers": 10.059378274537199
          },
          {
              "month": "Apr2023",
              "sub_segment": "TN",
              "average_payment_size": 18679.89703125,
              "unique_payers": 576.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5835.0,
              "%Unique_payers": 10.265638389031704
          },
          {
              "month": "May2023",
              "sub_segment": "TN",
              "average_payment_size": 19112.5925542571,
              "unique_payers": 599.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5794.0,
              "%Unique_payers": 10.73524335519503
          },
          {
              "month": "Jun2023",
              "sub_segment": "TN",
              "average_payment_size": 21513.622138263665,
              "unique_payers": 622.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5683.0,
              "%Unique_payers": 11.402428294914657
          },
          {
              "month": "Jul2023",
              "sub_segment": "TN",
              "average_payment_size": 19983.757160493828,
              "unique_payers": 648.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5599.0,
              "%Unique_payers": 10.912662975531346
          },
          {
              "month": "Aug2023",
              "sub_segment": "TN",
              "average_payment_size": 18326.25968903437,
              "unique_payers": 611.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5533.0,
              "%Unique_payers": 11.078980661485632
          },
          {
              "month": "Sep2023",
              "sub_segment": "TN",
              "average_payment_size": 20245.415008156604,
              "unique_payers": 613.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5482.0,
              "%Unique_payers": 10.488872674206494
          },
          {
              "month": "Oct2023",
              "sub_segment": "TN",
              "average_payment_size": 22975.749791304348,
              "unique_payers": 575.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5407.0,
              "%Unique_payers": 10.3754392454226
          },
          {
              "month": "Nov2023",
              "sub_segment": "TN",
              "average_payment_size": 17099.712139037438,
              "unique_payers": 561.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "TN",
              "active_recovery_accounts": 5430.0,
              "%Unique_payers": 10.294659300184163
          },
          {
              "month": "Dec2023",
              "sub_segment": "TN",
              "average_payment_size": 16143.810715563508,
              "unique_payers": 559.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5343.0,
              "%Unique_payers": 9.058581321355044
          },
          {
              "month": "Jan2024",
              "sub_segment": "TN",
              "average_payment_size": 16509.84857438017,
              "unique_payers": 484.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5363.0,
              "%Unique_payers": 9.062092112623532
          },
          {
              "month": "Feb2024",
              "sub_segment": "TN",
              "average_payment_size": 19132.22864197531,
              "unique_payers": 486.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5329.0,
              "%Unique_payers": 9.607806342653406
          },
          {
              "month": "Mar2024",
              "sub_segment": "TN",
              "average_payment_size": 19584.246953125,
              "unique_payers": 512.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5314.0,
              "%Unique_payers": 7.8283778697779445
          },
          {
              "month": "Apr2024",
              "sub_segment": "TN",
              "average_payment_size": 15670.329326923076,
              "unique_payers": 416.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5320.0,
              "%Unique_payers": 8.721804511278195
          },
          {
              "month": "May2024",
              "sub_segment": "TN",
              "average_payment_size": 14780.498879310346,
              "unique_payers": 464.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "TN",
              "active_recovery_accounts": 5350.0,
              "%Unique_payers": 7.682242990654206
          },
          {
              "month": "Jun2024",
              "sub_segment": "TN",
              "average_payment_size": 16151.700729927008,
              "unique_payers": 411.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 3940.0,
              "%Unique_payers": 10.862944162436548
          },
          {
              "month": "Feb2023",
              "sub_segment": "MP",
              "average_payment_size": 19384.873598130842,
              "unique_payers": 428.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 3948.0,
              "%Unique_payers": 9.321175278622087
          },
          {
              "month": "Mar2023",
              "sub_segment": "MP",
              "average_payment_size": 19998.929701086956,
              "unique_payers": 368.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 3988.0,
              "%Unique_payers": 7.3721163490471415
          },
          {
              "month": "Apr2023",
              "sub_segment": "MP",
              "average_payment_size": 21054.996598639456,
              "unique_payers": 294.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4063.0,
              "%Unique_payers": 9.032734432685208
          },
          {
              "month": "May2023",
              "sub_segment": "MP",
              "average_payment_size": 16310.403514986376,
              "unique_payers": 367.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4116.0,
              "%Unique_payers": 9.305150631681244
          },
          {
              "month": "Jun2023",
              "sub_segment": "MP",
              "average_payment_size": 25226.608198433423,
              "unique_payers": 383.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4108.0,
              "%Unique_payers": 9.031158714703018
          },
          {
              "month": "Jul2023",
              "sub_segment": "MP",
              "average_payment_size": 16235.47269541779,
              "unique_payers": 371.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4121.0,
              "%Unique_payers": 8.832807570977918
          },
          {
              "month": "Aug2023",
              "sub_segment": "MP",
              "average_payment_size": 24031.544395604396,
              "unique_payers": 364.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4143.0,
              "%Unique_payers": 10.209992758870385
          },
          {
              "month": "Sep2023",
              "sub_segment": "MP",
              "average_payment_size": 23039.391442080378,
              "unique_payers": 423.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4129.0,
              "%Unique_payers": 8.379752966820053
          },
          {
              "month": "Oct2023",
              "sub_segment": "MP",
              "average_payment_size": 21984.550924855488,
              "unique_payers": 346.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4128.0,
              "%Unique_payers": 7.3643410852713185
          },
          {
              "month": "Nov2023",
              "sub_segment": "MP",
              "average_payment_size": 20497.17631578947,
              "unique_payers": 304.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "MP",
              "active_recovery_accounts": 4170.0,
              "%Unique_payers": 9.256594724220623
          },
          {
              "month": "Dec2023",
              "sub_segment": "MP",
              "average_payment_size": 20399.093393782383,
              "unique_payers": 386.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4197.0,
              "%Unique_payers": 8.434596140100071
          },
          {
              "month": "Jan2024",
              "sub_segment": "MP",
              "average_payment_size": 20827.33183615819,
              "unique_payers": 354.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4208.0,
              "%Unique_payers": 9.529467680608365
          },
          {
              "month": "Feb2024",
              "sub_segment": "MP",
              "average_payment_size": 21111.620598503738,
              "unique_payers": 401.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4200.0,
              "%Unique_payers": 10.071428571428571
          },
          {
              "month": "Mar2024",
              "sub_segment": "MP",
              "average_payment_size": 25951.803593380613,
              "unique_payers": 423.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4227.0,
              "%Unique_payers": 8.705938017506504
          },
          {
              "month": "Apr2024",
              "sub_segment": "MP",
              "average_payment_size": 20488.380489130435,
              "unique_payers": 368.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4274.0,
              "%Unique_payers": 10.107627515208236
          },
          {
              "month": "May2024",
              "sub_segment": "MP",
              "average_payment_size": 17297.283587962964,
              "unique_payers": 432.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "MP",
              "active_recovery_accounts": 4296.0,
              "%Unique_payers": 7.844506517690874
          },
          {
              "month": "Jun2024",
              "sub_segment": "MP",
              "average_payment_size": 19657.546439169142,
              "unique_payers": 337.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3999.0,
              "%Unique_payers": 12.003000750187546
          },
          {
              "month": "Feb2023",
              "sub_segment": "KA",
              "average_payment_size": 41597.965,
              "unique_payers": 480.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3951.0,
              "%Unique_payers": 10.402429764616553
          },
          {
              "month": "Mar2023",
              "sub_segment": "KA",
              "average_payment_size": 34965.31476885644,
              "unique_payers": 411.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3952.0,
              "%Unique_payers": 7.844129554655871
          },
          {
              "month": "Apr2023",
              "sub_segment": "KA",
              "average_payment_size": 27339.83064516129,
              "unique_payers": 310.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 4027.0,
              "%Unique_payers": 9.237645890240874
          },
          {
              "month": "May2023",
              "sub_segment": "KA",
              "average_payment_size": 26808.009677419355,
              "unique_payers": 372.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 4029.0,
              "%Unique_payers": 10.622983370563416
          },
          {
              "month": "Jun2023",
              "sub_segment": "KA",
              "average_payment_size": 25617.777149532707,
              "unique_payers": 428.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3978.0,
              "%Unique_payers": 10.683760683760683
          },
          {
              "month": "Jul2023",
              "sub_segment": "KA",
              "average_payment_size": 23277.896023529414,
              "unique_payers": 425.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3942.0,
              "%Unique_payers": 8.853373921867073
          },
          {
              "month": "Aug2023",
              "sub_segment": "KA",
              "average_payment_size": 31001.76613180516,
              "unique_payers": 349.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3921.0,
              "%Unique_payers": 9.028309104820199
          },
          {
              "month": "Sep2023",
              "sub_segment": "KA",
              "average_payment_size": 24342.780028248584,
              "unique_payers": 354.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3915.0,
              "%Unique_payers": 8.403575989782887
          },
          {
              "month": "Oct2023",
              "sub_segment": "KA",
              "average_payment_size": 34571.52352583586,
              "unique_payers": 329.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3942.0,
              "%Unique_payers": 8.548959918822932
          },
          {
              "month": "Nov2023",
              "sub_segment": "KA",
              "average_payment_size": 24504.31934718101,
              "unique_payers": 337.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "KA",
              "active_recovery_accounts": 3954.0,
              "%Unique_payers": 8.118361153262518
          },
          {
              "month": "Dec2023",
              "sub_segment": "KA",
              "average_payment_size": 32598.228785046733,
              "unique_payers": 321.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 3928.0,
              "%Unique_payers": 7.7647657841140525
          },
          {
              "month": "Jan2024",
              "sub_segment": "KA",
              "average_payment_size": 38127.17032786886,
              "unique_payers": 305.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 3928.0,
              "%Unique_payers": 8.146639511201629
          },
          {
              "month": "Feb2024",
              "sub_segment": "KA",
              "average_payment_size": 27646.73696875,
              "unique_payers": 320.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 3923.0,
              "%Unique_payers": 8.00407851134336
          },
          {
              "month": "Mar2024",
              "sub_segment": "KA",
              "average_payment_size": 29015.99576433121,
              "unique_payers": 314.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 3929.0,
              "%Unique_payers": 6.08297276660728
          },
          {
              "month": "Apr2024",
              "sub_segment": "KA",
              "average_payment_size": 25662.804560669458,
              "unique_payers": 239.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 3991.0,
              "%Unique_payers": 7.967927837634678
          },
          {
              "month": "May2024",
              "sub_segment": "KA",
              "average_payment_size": 25269.80795597484,
              "unique_payers": 318.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "KA",
              "active_recovery_accounts": 4003.0,
              "%Unique_payers": 7.144641518860855
          },
          {
              "month": "Jun2024",
              "sub_segment": "KA",
              "average_payment_size": 23600.68048951049,
              "unique_payers": 286.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3199.0,
              "%Unique_payers": 8.002500781494216
          },
          {
              "month": "Feb2023",
              "sub_segment": "HR",
              "average_payment_size": 28204.572421874997,
              "unique_payers": 256.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3211.0,
              "%Unique_payers": 7.007162877608223
          },
          {
              "month": "Mar2023",
              "sub_segment": "HR",
              "average_payment_size": 24230.544933333334,
              "unique_payers": 225.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3270.0,
              "%Unique_payers": 6.574923547400611
          },
          {
              "month": "Apr2023",
              "sub_segment": "HR",
              "average_payment_size": 23257.0,
              "unique_payers": 215.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3371.0,
              "%Unique_payers": 8.217146247404331
          },
          {
              "month": "May2023",
              "sub_segment": "HR",
              "average_payment_size": 22895.88610108303,
              "unique_payers": 277.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3413.0,
              "%Unique_payers": 7.412833284500439
          },
          {
              "month": "Jun2023",
              "sub_segment": "HR",
              "average_payment_size": 27601.569683794463,
              "unique_payers": 253.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3418.0,
              "%Unique_payers": 7.021650087770626
          },
          {
              "month": "Jul2023",
              "sub_segment": "HR",
              "average_payment_size": 24811.779291666662,
              "unique_payers": 240.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3409.0,
              "%Unique_payers": 6.424171311234966
          },
          {
              "month": "Aug2023",
              "sub_segment": "HR",
              "average_payment_size": 20101.462831050227,
              "unique_payers": 219.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3480.0,
              "%Unique_payers": 7.844827586206897
          },
          {
              "month": "Sep2023",
              "sub_segment": "HR",
              "average_payment_size": 25250.61285714286,
              "unique_payers": 273.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3494.0,
              "%Unique_payers": 7.46994848311391
          },
          {
              "month": "Oct2023",
              "sub_segment": "HR",
              "average_payment_size": 17453.18436781609,
              "unique_payers": 261.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3517.0,
              "%Unique_payers": 6.312197895934036
          },
          {
              "month": "Nov2023",
              "sub_segment": "HR",
              "average_payment_size": 20380.91261261261,
              "unique_payers": 222.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "HR",
              "active_recovery_accounts": 3550.0,
              "%Unique_payers": 6.957746478873239
          },
          {
              "month": "Dec2023",
              "sub_segment": "HR",
              "average_payment_size": 20128.81238866397,
              "unique_payers": 247.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3593.0,
              "%Unique_payers": 5.844698023935431
          },
          {
              "month": "Jan2024",
              "sub_segment": "HR",
              "average_payment_size": 19717.260000000002,
              "unique_payers": 210.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3632.0,
              "%Unique_payers": 6.029735682819383
          },
          {
              "month": "Feb2024",
              "sub_segment": "HR",
              "average_payment_size": 16643.087534246573,
              "unique_payers": 219.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3704.0,
              "%Unique_payers": 6.42548596112311
          },
          {
              "month": "Mar2024",
              "sub_segment": "HR",
              "average_payment_size": 17760.164915966387,
              "unique_payers": 238.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3756.0,
              "%Unique_payers": 5.005324813631523
          },
          {
              "month": "Apr2024",
              "sub_segment": "HR",
              "average_payment_size": 16990.862393617022,
              "unique_payers": 188.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3818.0,
              "%Unique_payers": 5.526453640649555
          },
          {
              "month": "May2024",
              "sub_segment": "HR",
              "average_payment_size": 22767.000047393365,
              "unique_payers": 211.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "HR",
              "active_recovery_accounts": 3887.0,
              "%Unique_payers": 4.6565474659120145
          },
          {
              "month": "Jun2024",
              "sub_segment": "HR",
              "average_payment_size": 20137.345690607737,
              "unique_payers": 181.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3062.0,
              "%Unique_payers": 9.274983670803397
          },
          {
              "month": "Feb2023",
              "sub_segment": "AP",
              "average_payment_size": 27903.15426056338,
              "unique_payers": 284.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3084.0,
              "%Unique_payers": 8.300907911802852
          },
          {
              "month": "Mar2023",
              "sub_segment": "AP",
              "average_payment_size": 29692.912343750002,
              "unique_payers": 256.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3124.0,
              "%Unique_payers": 6.9142125480153656
          },
          {
              "month": "Apr2023",
              "sub_segment": "AP",
              "average_payment_size": 24270.43986111111,
              "unique_payers": 216.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3213.0,
              "%Unique_payers": 7.469654528478058
          },
          {
              "month": "May2023",
              "sub_segment": "AP",
              "average_payment_size": 25233.479708333332,
              "unique_payers": 240.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3263.0,
              "%Unique_payers": 8.397180508734294
          },
          {
              "month": "Jun2023",
              "sub_segment": "AP",
              "average_payment_size": 27710.42277372263,
              "unique_payers": 274.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3248.0,
              "%Unique_payers": 8.220443349753696
          },
          {
              "month": "Jul2023",
              "sub_segment": "AP",
              "average_payment_size": 31902.4297752809,
              "unique_payers": 267.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3282.0,
              "%Unique_payers": 7.830591102985984
          },
          {
              "month": "Aug2023",
              "sub_segment": "AP",
              "average_payment_size": 30736.15968871595,
              "unique_payers": 257.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3302.0,
              "%Unique_payers": 7.813446396123562
          },
          {
              "month": "Sep2023",
              "sub_segment": "AP",
              "average_payment_size": 33788.32453488372,
              "unique_payers": 258.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3342.0,
              "%Unique_payers": 8.07899461400359
          },
          {
              "month": "Oct2023",
              "sub_segment": "AP",
              "average_payment_size": 26538.130407407407,
              "unique_payers": 270.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3375.0,
              "%Unique_payers": 7.437037037037037
          },
          {
              "month": "Nov2023",
              "sub_segment": "AP",
              "average_payment_size": 33753.17215139443,
              "unique_payers": 251.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "AP",
              "active_recovery_accounts": 3406.0,
              "%Unique_payers": 7.780387551379918
          },
          {
              "month": "Dec2023",
              "sub_segment": "AP",
              "average_payment_size": 34883.93362264151,
              "unique_payers": 265.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3437.0,
              "%Unique_payers": 7.652022112307244
          },
          {
              "month": "Jan2024",
              "sub_segment": "AP",
              "average_payment_size": 22458.37855513308,
              "unique_payers": 263.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3493.0,
              "%Unique_payers": 7.901517320354996
          },
          {
              "month": "Feb2024",
              "sub_segment": "AP",
              "average_payment_size": 28421.318297101447,
              "unique_payers": 276.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3538.0,
              "%Unique_payers": 7.91407574901074
          },
          {
              "month": "Mar2024",
              "sub_segment": "AP",
              "average_payment_size": 43986.43532142857,
              "unique_payers": 280.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3552.0,
              "%Unique_payers": 6.925675675675675
          },
          {
              "month": "Apr2024",
              "sub_segment": "AP",
              "average_payment_size": 25516.15524390244,
              "unique_payers": 246.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3624.0,
              "%Unique_payers": 8.167770419426049
          },
          {
              "month": "May2024",
              "sub_segment": "AP",
              "average_payment_size": 25555.49972972973,
              "unique_payers": 296.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "AP",
              "active_recovery_accounts": 3663.0,
              "%Unique_payers": 7.17990717990718
          },
          {
              "month": "Jun2024",
              "sub_segment": "AP",
              "average_payment_size": 21843.27060836502,
              "unique_payers": 263.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2582.0,
              "%Unique_payers": 12.083656080557708
          },
          {
              "month": "Feb2023",
              "sub_segment": "TG",
              "average_payment_size": 31204.337243589747,
              "unique_payers": 312.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2594.0,
              "%Unique_payers": 10.79414032382421
          },
          {
              "month": "Mar2023",
              "sub_segment": "TG",
              "average_payment_size": 33818.12849999999,
              "unique_payers": 280.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2635.0,
              "%Unique_payers": 9.184060721062618
          },
          {
              "month": "Apr2023",
              "sub_segment": "TG",
              "average_payment_size": 32464.512396694216,
              "unique_payers": 242.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2708.0,
              "%Unique_payers": 9.785819793205318
          },
          {
              "month": "May2023",
              "sub_segment": "TG",
              "average_payment_size": 32094.509207547177,
              "unique_payers": 265.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2752.0,
              "%Unique_payers": 9.956395348837209
          },
          {
              "month": "Jun2023",
              "sub_segment": "TG",
              "average_payment_size": 33139.79762773723,
              "unique_payers": 274.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2749.0,
              "%Unique_payers": 9.276100400145507
          },
          {
              "month": "Jul2023",
              "sub_segment": "TG",
              "average_payment_size": 34930.27831372549,
              "unique_payers": 255.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2764.0,
              "%Unique_payers": 10.20260492040521
          },
          {
              "month": "Aug2023",
              "sub_segment": "TG",
              "average_payment_size": 35826.05241134752,
              "unique_payers": 282.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2812.0,
              "%Unique_payers": 9.53058321479374
          },
          {
              "month": "Sep2023",
              "sub_segment": "TG",
              "average_payment_size": 34931.72470149254,
              "unique_payers": 268.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2827.0,
              "%Unique_payers": 8.737177219667492
          },
          {
              "month": "Oct2023",
              "sub_segment": "TG",
              "average_payment_size": 38567.78963562752,
              "unique_payers": 247.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2821.0,
              "%Unique_payers": 8.613966678482807
          },
          {
              "month": "Nov2023",
              "sub_segment": "TG",
              "average_payment_size": 28862.58534979424,
              "unique_payers": 243.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "TG",
              "active_recovery_accounts": 2842.0,
              "%Unique_payers": 8.831808585503166
          },
          {
              "month": "Dec2023",
              "sub_segment": "TG",
              "average_payment_size": 36947.95517928287,
              "unique_payers": 251.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 2875.0,
              "%Unique_payers": 8.417391304347827
          },
          {
              "month": "Jan2024",
              "sub_segment": "TG",
              "average_payment_size": 31925.427933884297,
              "unique_payers": 242.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 2924.0,
              "%Unique_payers": 7.694938440492476
          },
          {
              "month": "Feb2024",
              "sub_segment": "TG",
              "average_payment_size": 34843.68604444444,
              "unique_payers": 225.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 2973.0,
              "%Unique_payers": 7.399932727884292
          },
          {
              "month": "Mar2024",
              "sub_segment": "TG",
              "average_payment_size": 35076.94463636364,
              "unique_payers": 220.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 3009.0,
              "%Unique_payers": 7.2781655034895305
          },
          {
              "month": "Apr2024",
              "sub_segment": "TG",
              "average_payment_size": 30455.479223744296,
              "unique_payers": 219.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 3057.0,
              "%Unique_payers": 8.374223094537129
          },
          {
              "month": "May2024",
              "sub_segment": "TG",
              "average_payment_size": 30546.511171874998,
              "unique_payers": 256.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "TG",
              "active_recovery_accounts": 3082.0,
              "%Unique_payers": 6.846203763789747
          },
          {
              "month": "Jun2024",
              "sub_segment": "TG",
              "average_payment_size": 32317.244834123223,
              "unique_payers": 211.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 2888.0,
              "%Unique_payers": 6.578947368421052
          },
          {
              "month": "Feb2023",
              "sub_segment": "GJ",
              "average_payment_size": 17910.85247368421,
              "unique_payers": 190.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 2928.0,
              "%Unique_payers": 5.703551912568306
          },
          {
              "month": "Mar2023",
              "sub_segment": "GJ",
              "average_payment_size": 22373.905688622755,
              "unique_payers": 167.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 2962.0,
              "%Unique_payers": 3.6124240378122887
          },
          {
              "month": "Apr2023",
              "sub_segment": "GJ",
              "average_payment_size": 19296.635514018693,
              "unique_payers": 107.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3026.0,
              "%Unique_payers": 4.428288169200265
          },
          {
              "month": "May2023",
              "sub_segment": "GJ",
              "average_payment_size": 25741.63134328358,
              "unique_payers": 134.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3068.0,
              "%Unique_payers": 4.758800521512386
          },
          {
              "month": "Jun2023",
              "sub_segment": "GJ",
              "average_payment_size": 33429.42020547945,
              "unique_payers": 146.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3065.0,
              "%Unique_payers": 4.306688417618271
          },
          {
              "month": "Jul2023",
              "sub_segment": "GJ",
              "average_payment_size": 26123.915909090912,
              "unique_payers": 132.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3076.0,
              "%Unique_payers": 4.9414824447334205
          },
          {
              "month": "Aug2023",
              "sub_segment": "GJ",
              "average_payment_size": 27042.695197368423,
              "unique_payers": 152.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3105.0,
              "%Unique_payers": 5.152979066022544
          },
          {
              "month": "Sep2023",
              "sub_segment": "GJ",
              "average_payment_size": 25067.717249999998,
              "unique_payers": 160.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3160.0,
              "%Unique_payers": 5.063291139240507
          },
          {
              "month": "Oct2023",
              "sub_segment": "GJ",
              "average_payment_size": 20374.0081875,
              "unique_payers": 160.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3202.0,
              "%Unique_payers": 4.684572142410993
          },
          {
              "month": "Nov2023",
              "sub_segment": "GJ",
              "average_payment_size": 13389.105866666667,
              "unique_payers": 150.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3258.0,
              "%Unique_payers": 5.402087170042972
          },
          {
              "month": "Dec2023",
              "sub_segment": "GJ",
              "average_payment_size": 16366.419318181817,
              "unique_payers": 176.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3317.0,
              "%Unique_payers": 6.180283388604161
          },
          {
              "month": "Jan2024",
              "sub_segment": "GJ",
              "average_payment_size": 19050.273170731707,
              "unique_payers": 205.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3381.0,
              "%Unique_payers": 6.329488317065957
          },
          {
              "month": "Feb2024",
              "sub_segment": "GJ",
              "average_payment_size": 18848.393411214955,
              "unique_payers": 214.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3432.0,
              "%Unique_payers": 7.051282051282051
          },
          {
              "month": "Mar2024",
              "sub_segment": "GJ",
              "average_payment_size": 17283.357933884297,
              "unique_payers": 242.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3443.0,
              "%Unique_payers": 5.605576532094104
          },
          {
              "month": "Apr2024",
              "sub_segment": "GJ",
              "average_payment_size": 15398.78238341969,
              "unique_payers": 193.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3492.0,
              "%Unique_payers": 6.242840778923253
          },
          {
              "month": "May2024",
              "sub_segment": "GJ",
              "average_payment_size": 14456.83004587156,
              "unique_payers": 218.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "GJ",
              "active_recovery_accounts": 3527.0,
              "%Unique_payers": 5.557130705982422
          },
          {
              "month": "Jun2024",
              "sub_segment": "GJ",
              "average_payment_size": 19723.237346938775,
              "unique_payers": 196.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 1952.0,
              "%Unique_payers": 11.219262295081968
          },
          {
              "month": "Feb2023",
              "sub_segment": "DL",
              "average_payment_size": 27918.06200913242,
              "unique_payers": 219.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 1957.0,
              "%Unique_payers": 9.504343382728667
          },
          {
              "month": "Mar2023",
              "sub_segment": "DL",
              "average_payment_size": 22742.940860215054,
              "unique_payers": 186.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2001.0,
              "%Unique_payers": 8.695652173913043
          },
          {
              "month": "Apr2023",
              "sub_segment": "DL",
              "average_payment_size": 20470.333333333332,
              "unique_payers": 174.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2054.0,
              "%Unique_payers": 9.591041869522881
          },
          {
              "month": "May2023",
              "sub_segment": "DL",
              "average_payment_size": 21521.155989847717,
              "unique_payers": 197.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2080.0,
              "%Unique_payers": 8.365384615384615
          },
          {
              "month": "Jun2023",
              "sub_segment": "DL",
              "average_payment_size": 19475.770862068966,
              "unique_payers": 174.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2116.0,
              "%Unique_payers": 9.45179584120983
          },
          {
              "month": "Jul2023",
              "sub_segment": "DL",
              "average_payment_size": 23995.498900000002,
              "unique_payers": 200.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2159.0,
              "%Unique_payers": 8.846688281611858
          },
          {
              "month": "Aug2023",
              "sub_segment": "DL",
              "average_payment_size": 30048.952931937172,
              "unique_payers": 191.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2190.0,
              "%Unique_payers": 9.269406392694064
          },
          {
              "month": "Sep2023",
              "sub_segment": "DL",
              "average_payment_size": 27521.12536945813,
              "unique_payers": 203.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2222.0,
              "%Unique_payers": 9.045904590459045
          },
          {
              "month": "Oct2023",
              "sub_segment": "DL",
              "average_payment_size": 21266.924925373136,
              "unique_payers": 201.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2277.0,
              "%Unique_payers": 7.5098814229249005
          },
          {
              "month": "Nov2023",
              "sub_segment": "DL",
              "average_payment_size": 17435.549122807017,
              "unique_payers": 171.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "DL",
              "active_recovery_accounts": 2318.0,
              "%Unique_payers": 8.498705780845556
          },
          {
              "month": "Dec2023",
              "sub_segment": "DL",
              "average_payment_size": 26360.144974619292,
              "unique_payers": 197.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2342.0,
              "%Unique_payers": 7.557643040136636
          },
          {
              "month": "Jan2024",
              "sub_segment": "DL",
              "average_payment_size": 32431.35548022599,
              "unique_payers": 177.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2381.0,
              "%Unique_payers": 7.34985300293994
          },
          {
              "month": "Feb2024",
              "sub_segment": "DL",
              "average_payment_size": 23041.990400000002,
              "unique_payers": 175.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2420.0,
              "%Unique_payers": 6.9421487603305785
          },
          {
              "month": "Mar2024",
              "sub_segment": "DL",
              "average_payment_size": 31750.677857142855,
              "unique_payers": 168.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2447.0,
              "%Unique_payers": 6.742950551695954
          },
          {
              "month": "Apr2024",
              "sub_segment": "DL",
              "average_payment_size": 19327.37593939394,
              "unique_payers": 165.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2484.0,
              "%Unique_payers": 6.40096618357488
          },
          {
              "month": "May2024",
              "sub_segment": "DL",
              "average_payment_size": 23768.69893081761,
              "unique_payers": 159.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "DL",
              "active_recovery_accounts": 2524.0,
              "%Unique_payers": 6.3391442155309035
          },
          {
              "month": "Jun2024",
              "sub_segment": "DL",
              "average_payment_size": 23855.5611875,
              "unique_payers": 160.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14039.0,
              "%Unique_payers": 11.859819075432723
          },
          {
              "month": "Feb2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 22929.853297297297,
              "unique_payers": 1665.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 13961.0,
              "%Unique_payers": 10.08523744717427
          },
          {
              "month": "Mar2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 22392.55005681818,
              "unique_payers": 1408.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14070.0,
              "%Unique_payers": 7.789623312011372
          },
          {
              "month": "Apr2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 19083.980839416057,
              "unique_payers": 1096.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14435.0,
              "%Unique_payers": 9.830273640457223
          },
          {
              "month": "May2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 20995.597963354478,
              "unique_payers": 1419.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14567.0,
              "%Unique_payers": 9.487197089311456
          },
          {
              "month": "Jun2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 23827.576874095514,
              "unique_payers": 1382.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14459.0,
              "%Unique_payers": 9.44048689397607
          },
          {
              "month": "Jul2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 21907.010117216116,
              "unique_payers": 1365.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14439.0,
              "%Unique_payers": 8.594778031719647
          },
          {
              "month": "Aug2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 20504.548839645446,
              "unique_payers": 1241.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14482.0,
              "%Unique_payers": 9.1907195138793
          },
          {
              "month": "Sep2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 23795.115612321566,
              "unique_payers": 1331.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14530.0,
              "%Unique_payers": 8.134893324156916
          },
          {
              "month": "Oct2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 22903.55718274112,
              "unique_payers": 1182.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14621.0,
              "%Unique_payers": 7.803843786334724
          },
          {
              "month": "Nov2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 21583.707887817705,
              "unique_payers": 1141.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14739.0,
              "%Unique_payers": 8.202727457765114
          },
          {
              "month": "Dec2023",
              "sub_segment": "OTHERS",
              "average_payment_size": 22593.832721257233,
              "unique_payers": 1209.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14762.0,
              "%Unique_payers": 7.763175721446959
          },
          {
              "month": "Jan2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 21183.79347294939,
              "unique_payers": 1146.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14880.0,
              "%Unique_payers": 7.486559139784946
          },
          {
              "month": "Feb2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 20880.855843806105,
              "unique_payers": 1114.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14950.0,
              "%Unique_payers": 7.34448160535117
          },
          {
              "month": "Mar2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 23403.55704007286,
              "unique_payers": 1098.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 14977.0,
              "%Unique_payers": 6.236228884289244
          },
          {
              "month": "Apr2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 17899.578950749466,
              "unique_payers": 934.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 15214.0,
              "%Unique_payers": 7.565400289207309
          },
          {
              "month": "May2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 20225.860721112076,
              "unique_payers": 1151.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "OTHERS",
              "active_recovery_accounts": 15343.0,
              "%Unique_payers": 6.432900997197419
          },
          {
              "month": "Jun2024",
              "sub_segment": "OTHERS",
              "average_payment_size": 21021.200141843976,
              "unique_payers": 987.0
          }
      ]
  ],
  "pos": [
      [
          {
              "month": "Feb2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 16663.0,
              "%Unique_payers": 7.633679409470083
          },
          {
              "month": "Feb2023",
              "sub_segment": "<1L",
              "average_payment_size": 13820.52322327044,
              "unique_payers": 1272.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 16657.0,
              "%Unique_payers": 6.567809329411059
          },
          {
              "month": "Mar2023",
              "sub_segment": "<1L",
              "average_payment_size": 12905.01688299817,
              "unique_payers": 1094.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 16864.0,
              "%Unique_payers": 4.803130929791272
          },
          {
              "month": "Apr2023",
              "sub_segment": "<1L",
              "average_payment_size": 11559.908135802469,
              "unique_payers": 810.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17347.0,
              "%Unique_payers": 6.2373897503891165
          },
          {
              "month": "May2023",
              "sub_segment": "<1L",
              "average_payment_size": 13054.152939001848,
              "unique_payers": 1082.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17560.0,
              "%Unique_payers": 6.953302961275626
          },
          {
              "month": "Jun2023",
              "sub_segment": "<1L",
              "average_payment_size": 13878.832457002454,
              "unique_payers": 1221.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17408.0,
              "%Unique_payers": 6.979549632352941
          },
          {
              "month": "Jul2023",
              "sub_segment": "<1L",
              "average_payment_size": 13985.145308641975,
              "unique_payers": 1215.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17388.0,
              "%Unique_payers": 6.746031746031746
          },
          {
              "month": "Aug2023",
              "sub_segment": "<1L",
              "average_payment_size": 13540.263341858483,
              "unique_payers": 1173.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17391.0,
              "%Unique_payers": 6.537864412627221
          },
          {
              "month": "Sep2023",
              "sub_segment": "<1L",
              "average_payment_size": 13690.383139841688,
              "unique_payers": 1137.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17408.0,
              "%Unique_payers": 6.232766544117647
          },
          {
              "month": "Oct2023",
              "sub_segment": "<1L",
              "average_payment_size": 13567.145059907833,
              "unique_payers": 1085.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17463.0,
              "%Unique_payers": 5.966901448777415
          },
          {
              "month": "Nov2023",
              "sub_segment": "<1L",
              "average_payment_size": 13118.177946257196,
              "unique_payers": 1042.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17545.0,
              "%Unique_payers": 6.286691365061271
          },
          {
              "month": "Dec2023",
              "sub_segment": "<1L",
              "average_payment_size": 12621.49827742521,
              "unique_payers": 1103.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17504.0,
              "%Unique_payers": 5.7586837294332724
          },
          {
              "month": "Jan2024",
              "sub_segment": "<1L",
              "average_payment_size": 11559.803849206352,
              "unique_payers": 1008.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17606.0,
              "%Unique_payers": 5.8957173690787235
          },
          {
              "month": "Feb2024",
              "sub_segment": "<1L",
              "average_payment_size": 11447.663169556838,
              "unique_payers": 1038.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17650.0,
              "%Unique_payers": 5.376770538243626
          },
          {
              "month": "Mar2024",
              "sub_segment": "<1L",
              "average_payment_size": 11948.78124341412,
              "unique_payers": 949.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17757.0,
              "%Unique_payers": 4.803739370389142
          },
          {
              "month": "Apr2024",
              "sub_segment": "<1L",
              "average_payment_size": 8775.941817116061,
              "unique_payers": 853.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 17875.0,
              "%Unique_payers": 5.314685314685315
          },
          {
              "month": "May2024",
              "sub_segment": "<1L",
              "average_payment_size": 9694.03787368421,
              "unique_payers": 950.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "<1L",
              "active_recovery_accounts": 18056.0,
              "%Unique_payers": 4.463890119627824
          },
          {
              "month": "Jun2024",
              "sub_segment": "<1L",
              "average_payment_size": 10794.889292803971,
              "unique_payers": 806.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 33896.0,
              "%Unique_payers": 11.753599244748642
          },
          {
              "month": "Feb2023",
              "sub_segment": "1-5L",
              "average_payment_size": 23748.423742469884,
              "unique_payers": 3984.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 33741.0,
              "%Unique_payers": 10.610236803888444
          },
          {
              "month": "Mar2023",
              "sub_segment": "1-5L",
              "average_payment_size": 24358.402067039107,
              "unique_payers": 3580.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34003.0,
              "%Unique_payers": 8.608063994353438
          },
          {
              "month": "Apr2023",
              "sub_segment": "1-5L",
              "average_payment_size": 20983.760761872225,
              "unique_payers": 2927.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34728.0,
              "%Unique_payers": 9.865238424326192
          },
          {
              "month": "May2023",
              "sub_segment": "1-5L",
              "average_payment_size": 21978.191459427904,
              "unique_payers": 3426.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34937.0,
              "%Unique_payers": 9.602999685147552
          },
          {
              "month": "Jun2023",
              "sub_segment": "1-5L",
              "average_payment_size": 24975.597099850973,
              "unique_payers": 3355.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34774.0,
              "%Unique_payers": 9.524357278426411
          },
          {
              "month": "Jul2023",
              "sub_segment": "1-5L",
              "average_payment_size": 23902.648801328505,
              "unique_payers": 3312.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34732.0,
              "%Unique_payers": 8.91396982609697
          },
          {
              "month": "Aug2023",
              "sub_segment": "1-5L",
              "average_payment_size": 24614.870768733846,
              "unique_payers": 3096.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 34913.0,
              "%Unique_payers": 9.655429209749949
          },
          {
              "month": "Sep2023",
              "sub_segment": "1-5L",
              "average_payment_size": 24777.910548798573,
              "unique_payers": 3371.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 35064.0,
              "%Unique_payers": 8.809605293178189
          },
          {
              "month": "Oct2023",
              "sub_segment": "1-5L",
              "average_payment_size": 24555.84923599871,
              "unique_payers": 3089.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 35277.0,
              "%Unique_payers": 8.424752671712447
          },
          {
              "month": "Nov2023",
              "sub_segment": "1-5L",
              "average_payment_size": 23241.799212651415,
              "unique_payers": 2972.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 35598.0,
              "%Unique_payers": 8.882521489971348
          },
          {
              "month": "Dec2023",
              "sub_segment": "1-5L",
              "average_payment_size": 23255.17750790639,
              "unique_payers": 3162.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 35794.0,
              "%Unique_payers": 8.414818125942896
          },
          {
              "month": "Jan2024",
              "sub_segment": "1-5L",
              "average_payment_size": 23393.25237383798,
              "unique_payers": 3012.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 36119.0,
              "%Unique_payers": 8.413854204158476
          },
          {
              "month": "Feb2024",
              "sub_segment": "1-5L",
              "average_payment_size": 23353.49112207963,
              "unique_payers": 3039.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 36352.0,
              "%Unique_payers": 8.731294014084508
          },
          {
              "month": "Mar2024",
              "sub_segment": "1-5L",
              "average_payment_size": 24217.748279773157,
              "unique_payers": 3174.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 36403.0,
              "%Unique_payers": 7.471911655632778
          },
          {
              "month": "Apr2024",
              "sub_segment": "1-5L",
              "average_payment_size": 19700.17005882353,
              "unique_payers": 2720.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 36928.0,
              "%Unique_payers": 8.511156845753899
          },
          {
              "month": "May2024",
              "sub_segment": "1-5L",
              "average_payment_size": 21611.42049952275,
              "unique_payers": 3143.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "1-5L",
              "active_recovery_accounts": 37241.0,
              "%Unique_payers": 7.36285276979673
          },
          {
              "month": "Jun2024",
              "sub_segment": "1-5L",
              "average_payment_size": 21447.981232676877,
              "unique_payers": 2742.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6049.0,
              "%Unique_payers": 12.349148619606547
          },
          {
              "month": "Feb2023",
              "sub_segment": "5-10L",
              "average_payment_size": 43567.15006693441,
              "unique_payers": 747.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6055.0,
              "%Unique_payers": 10.289017341040463
          },
          {
              "month": "Mar2023",
              "sub_segment": "5-10L",
              "average_payment_size": 40076.144205457465,
              "unique_payers": 623.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6086.0,
              "%Unique_payers": 8.560630956293132
          },
          {
              "month": "Apr2023",
              "sub_segment": "5-10L",
              "average_payment_size": 36333.926679462566,
              "unique_payers": 521.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6204.0,
              "%Unique_payers": 9.413281753707285
          },
          {
              "month": "May2023",
              "sub_segment": "5-10L",
              "average_payment_size": 38544.011900684935,
              "unique_payers": 584.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6265.0,
              "%Unique_payers": 8.635275339185954
          },
          {
              "month": "Jun2023",
              "sub_segment": "5-10L",
              "average_payment_size": 42579.65171903881,
              "unique_payers": 541.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6264.0,
              "%Unique_payers": 8.620689655172415
          },
          {
              "month": "Jul2023",
              "sub_segment": "5-10L",
              "average_payment_size": 33229.333611111106,
              "unique_payers": 540.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6351.0,
              "%Unique_payers": 8.156195874665407
          },
          {
              "month": "Aug2023",
              "sub_segment": "5-10L",
              "average_payment_size": 35602.39594594595,
              "unique_payers": 518.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6490.0,
              "%Unique_payers": 8.289676425269645
          },
          {
              "month": "Sep2023",
              "sub_segment": "5-10L",
              "average_payment_size": 36777.99646840149,
              "unique_payers": 538.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6602.0,
              "%Unique_payers": 7.861254165404423
          },
          {
              "month": "Oct2023",
              "sub_segment": "5-10L",
              "average_payment_size": 46035.84026974952,
              "unique_payers": 519.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6692.0,
              "%Unique_payers": 6.64973102211596
          },
          {
              "month": "Nov2023",
              "sub_segment": "5-10L",
              "average_payment_size": 34889.8851011236,
              "unique_payers": 445.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6825.0,
              "%Unique_payers": 7.384615384615385
          },
          {
              "month": "Dec2023",
              "sub_segment": "5-10L",
              "average_payment_size": 44406.80773809524,
              "unique_payers": 504.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 6916.0,
              "%Unique_payers": 7.403123192596876
          },
          {
              "month": "Jan2024",
              "sub_segment": "5-10L",
              "average_payment_size": 41497.116953125,
              "unique_payers": 512.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 7021.0,
              "%Unique_payers": 7.135735650192281
          },
          {
              "month": "Feb2024",
              "sub_segment": "5-10L",
              "average_payment_size": 40711.885948103794,
              "unique_payers": 501.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 7167.0,
              "%Unique_payers": 8.05078833542626
          },
          {
              "month": "Mar2024",
              "sub_segment": "5-10L",
              "average_payment_size": 46468.45682842287,
              "unique_payers": 577.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 7269.0,
              "%Unique_payers": 6.424542578071262
          },
          {
              "month": "Apr2024",
              "sub_segment": "5-10L",
              "average_payment_size": 39561.80942184154,
              "unique_payers": 467.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 7391.0,
              "%Unique_payers": 7.360303071302936
          },
          {
              "month": "May2024",
              "sub_segment": "5-10L",
              "average_payment_size": 35416.83654411764,
              "unique_payers": 544.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "5-10L",
              "active_recovery_accounts": 7497.0,
              "%Unique_payers": 6.549286381219154
          },
          {
              "month": "Jun2024",
              "sub_segment": "5-10L",
              "average_payment_size": 36095.893279022406,
              "unique_payers": 491.0
          }
      ],
      [
          {
              "month": "Feb2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 399.0,
              "%Unique_payers": 12.280701754385964
          },
          {
              "month": "Feb2023",
              "sub_segment": "10L+",
              "average_payment_size": 85340.61224489796,
              "unique_payers": 49.0
          }
      ],
      [
          {
              "month": "Mar2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 407.0,
              "%Unique_payers": 9.828009828009828
          },
          {
              "month": "Mar2023",
              "sub_segment": "10L+",
              "average_payment_size": 73782.8195,
              "unique_payers": 40.0
          }
      ],
      [
          {
              "month": "Apr2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 410.0,
              "%Unique_payers": 7.804878048780488
          },
          {
              "month": "Apr2023",
              "sub_segment": "10L+",
              "average_payment_size": 49934.875,
              "unique_payers": 32.0
          }
      ],
      [
          {
              "month": "May2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 423.0,
              "%Unique_payers": 11.347517730496454
          },
          {
              "month": "May2023",
              "sub_segment": "10L+",
              "average_payment_size": 55260.660625,
              "unique_payers": 48.0
          }
      ],
      [
          {
              "month": "Jun2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 428.0,
              "%Unique_payers": 7.943925233644859
          },
          {
              "month": "Jun2023",
              "sub_segment": "10L+",
              "average_payment_size": 74727.41176470589,
              "unique_payers": 34.0
          }
      ],
      [
          {
              "month": "Jul2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 430.0,
              "%Unique_payers": 10.465116279069768
          },
          {
              "month": "Jul2023",
              "sub_segment": "10L+",
              "average_payment_size": 58989.15555555555,
              "unique_payers": 45.0
          }
      ],
      [
          {
              "month": "Aug2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 444.0,
              "%Unique_payers": 10.135135135135135
          },
          {
              "month": "Aug2023",
              "sub_segment": "10L+",
              "average_payment_size": 101903.84444444445,
              "unique_payers": 45.0
          }
      ],
      [
          {
              "month": "Sep2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 455.0,
              "%Unique_payers": 9.010989010989011
          },
          {
              "month": "Sep2023",
              "sub_segment": "10L+",
              "average_payment_size": 53163.439024390245,
              "unique_payers": 41.0
          }
      ],
      [
          {
              "month": "Oct2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 465.0,
              "%Unique_payers": 8.38709677419355
          },
          {
              "month": "Oct2023",
              "sub_segment": "10L+",
              "average_payment_size": 57929.282051282054,
              "unique_payers": 39.0
          }
      ],
      [
          {
              "month": "Nov2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 477.0,
              "%Unique_payers": 9.224318658280922
          },
          {
              "month": "Nov2023",
              "sub_segment": "10L+",
              "average_payment_size": 39903.63636363636,
              "unique_payers": 44.0
          }
      ],
      [
          {
              "month": "Dec2023",
              "sub_segment": "10L+",
              "active_recovery_accounts": 483.0,
              "%Unique_payers": 9.523809523809524
          },
          {
              "month": "Dec2023",
              "sub_segment": "10L+",
              "average_payment_size": 63119.13043478261,
              "unique_payers": 46.0
          }
      ],
      [
          {
              "month": "Jan2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 486.0,
              "%Unique_payers": 10.905349794238683
          },
          {
              "month": "Jan2024",
              "sub_segment": "10L+",
              "average_payment_size": 57539.49056603773,
              "unique_payers": 53.0
          }
      ],
      [
          {
              "month": "Feb2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 493.0,
              "%Unique_payers": 8.113590263691684
          },
          {
              "month": "Feb2024",
              "sub_segment": "10L+",
              "average_payment_size": 71140.075,
              "unique_payers": 40.0
          }
      ],
      [
          {
              "month": "Mar2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 502.0,
              "%Unique_payers": 9.362549800796813
          },
          {
              "month": "Mar2024",
              "sub_segment": "10L+",
              "average_payment_size": 72026.76595744681,
              "unique_payers": 47.0
          }
      ],
      [
          {
              "month": "Apr2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 508.0,
              "%Unique_payers": 8.46456692913386
          },
          {
              "month": "Apr2024",
              "sub_segment": "10L+",
              "average_payment_size": 42118.976744186046,
              "unique_payers": 43.0
          }
      ],
      [
          {
              "month": "May2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 525.0,
              "%Unique_payers": 10.285714285714285
          },
          {
              "month": "May2024",
              "sub_segment": "10L+",
              "average_payment_size": 73987.51851851853,
              "unique_payers": 54.0
          }
      ],
      [
          {
              "month": "Jun2024",
              "sub_segment": "10L+",
              "active_recovery_accounts": 530.0,
              "%Unique_payers": 9.433962264150944
          },
          {
              "month": "Jun2024",
              "sub_segment": "10L+",
              "average_payment_size": 42344.36,
              "unique_payers": 50.0
          }
      ]
  ]
}

const SettlementPoolRecovery: React.FC = () => {
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
    useState("UTTAR PRADESH");
  const [selectedSubCategoryTOS, setselectedSubCategoryTOS] = useState("<1Lakh");

  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");

  const [delinquencyGraphTitle, setdelinquencyGraphTitle] =
    useState("Balances (millions)");

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
      setdelinquencyGraphTitle("Balances (millions)");
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

 

  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] flex flex-col gap-5 w-full">
       
        <HomeDashboard/>
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
        
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            < SettlementPoolLhs
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
            <SettlementPoolRhs
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

export default SettlementPoolRecovery;
