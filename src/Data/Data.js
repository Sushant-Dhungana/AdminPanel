import { AiOutlineHome, AiOutlineAreaChart } from "react-icons/ai";
import { BsClipboardCheck,BsClipboardData } from "react-icons/bs";

import { BiPackage , BiMoney} from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import {FcSalesPerformance} from "react-icons/fc"
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

export const SidebarData = [
  {
    icon: AiOutlineHome,
    heading: "Dashboard",
  },
  {
    icon: BsClipboardCheck,
    heading: "Orders",
  },
  {
    icon: FiUsers,
    heading: "Customers",
  },
  {
    icon: BiPackage,
    heading: "Products",
  },
  {
    icon: AiOutlineAreaChart,
    heading: "Analytics",
  },
];


export const CardsData = [
  {
    title: "sales",
    color:{
      backGround: "Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    value: "25,970",
    png: FcSalesPerformance,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: BiMoney,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: BsClipboardData,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];



export const UpdatesData = [
  {
    img: img1,
    name: "ABC",
    noti: "has ordered an stand for mac.",
    time: "19 seconds ago",
  },
  {
    img: img2,
    name: "DEF",
    noti: "has received a power battery from Amazon.",
    time: "20 minutes ago",
  },
  {
    img: img3,
    name: "GHI",
    noti: "has ordered a fridge, a tv from daraz.",
    time: "5 hours ago",
  },
];