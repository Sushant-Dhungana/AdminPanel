import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../img/logo.png";
import { SidebarData } from "../../Data/Data";
import { GoSignOut } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',

    },
    false: {
    left: '-60%',
    }
  }

  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick={()=>setExpanded(!expanded)}
      >
        <AiOutlineCloseCircle />
      </div>
      <motion.div className="Sidebar"
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`: ''}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <GoSignOut />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
