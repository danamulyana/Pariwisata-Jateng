/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Argon Dashboard 2 MUI components
// import ArgonTypography from "components/ArgonTypography";
// import IDN from "assets/images/icons/flags/IDN.png";

// const categoriesListData = [
//   // {
//   // country: [IDN, "indonesia"],
//   //   sales: 5000,
//   //   value: "$230,900",
//   //   bounce: "29.9%",
//   // },
//   {
//     // country: [IDN, "indonesia"],
//     // sales: 5000,
//     color: "dark",
//     // icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
//     icon: [IDN, "indonesia"],
//     name: "Indonesia",
//     description: <>5000 in traffic, </>,
//     route: "/",
//   },
//   {
//     color: "dark",
//     icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
//     name: "Devices",
//     description: (
//       <>
//         250 in stock,{" "}
//         <ArgonTypography variant="caption" color="text" fontWeight="medium">
//           346+ sold
//         </ArgonTypography>
//       </>
//     ),
//     route: "/",
//   },
//   {
//     color: "dark",
//     icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
//     name: "Tickets",
//     description: (
//       <>
//         123 closed,{" "}
//         <ArgonTypography variant="caption" color="text" fontWeight="medium">
//           15 open
//         </ArgonTypography>
//       </>
//     ),
//     route: "/",
//   },
//   {
//     color: "dark",
//     icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
//     name: "Error logs",
//     description: (
//       <>
//         1 is active,{" "}
//         <ArgonTypography variant="caption" color="text" fontWeight="medium">
//           40 closed
//         </ArgonTypography>
//       </>
//     ),
//     route: "/",
//   },
//   {
//     color: "dark",
//     icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
//     name: "Happy Users",
//     description: (
//       <>
//         <ArgonTypography variant="caption" color="text" fontWeight="medium">
//           +&nbsp;430
//         </ArgonTypography>
//       </>
//     ),
//     route: "/",
//   },
// ];

// export default categoriesListData;

import IDN from "assets/images/icons/flags/IDN.png";
import UK from "assets/images/icons/flags/UK.png";
import AUS from "assets/images/icons/flags/AUS.png";
import JPN from "assets/images/icons/flags/JPN.png";
import RUS from "assets/images/icons/flags/RUS.png";

const categoriesListData = [
  {
    country: [IDN, "indonesia"],
    visitors: "15.000",
  },
  {
    country: [UK, "united kingdom"],
    visitors: "5.500",
  },
  {
    country: [AUS, "australia"],
    visitors: "4.900",
  },
  {
    country: [JPN, "jepang"],
    visitors: "6.000",
  },
  { country: [RUS, "rusia"], visitors: "3.010" },
];

export default categoriesListData;
