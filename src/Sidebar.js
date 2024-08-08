import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuHome, LuMail, LuFolderClosed, LuStickyNote, LuBell, LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const SIDEBAR_ITEMS = [
  { id: "Home", title: "Home", icon: LuHome, path: "/Home" },
  { id: "Dashboard", title: "Dashboard", icon: LuHome, path: "/dashboard" },
  { id: "App", title: "App", icon: LuMail, path: "/app" },
  { id: "location", title: "Location", icon: LuStickyNote, path: "/location" },
  { id: "history", title: "History", icon: LuBell, path: "/history" },
  { id: "Track your order", title: "Track your order", icon: LuBell, path: "/tr" },
  { id: "AboutUs", title: "About Us", icon: LuFolderClosed, path: "/AboutUs" },
];

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const activeTab = SIDEBAR_ITEMS.find(item => item.path === location.pathname)?.id || SIDEBAR_ITEMS[0].id;
  const navigate = useNavigate();
   const handlelogin = () =>{
    navigate("/");

   }

  return (
    <motion.div
      className="sidebar"
      animate={{ width: isCollapsed ? 80 : 280 }}
      layout
    >
      <h3>Doorship</h3>
      <button
        className="sidebar__collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
      </button>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          isSidebarCollapsed={isCollapsed}
          key={item.id}
          item={item}
          activeTab={activeTab}
        />
      ))}
      <Link to="/" className="logout-button-link">
        <button className="logout-button" onClick={handlelogin}>Logout</button>
      </Link>
    </motion.div>
  );
}

function SidebarItem({ item, activeTab, isSidebarCollapsed }) {
  const IconComponent = item.icon;

  return (
    <Link to={item.path} className="sidebar-item-link">
      <motion.div
        layout
        className={clsx("sidebar-item", {
          "sidebar-item__active": activeTab === item.id,
        })}
      >
        {activeTab === item.id ? (
          <motion.div
            layoutId="sidebar-item-indicator"
            className="sidebar-item__active-bg"
          />
        ) : null}
        <span className="sidebar-item__icon">
          <IconComponent />
        </span>
        <motion.span
          className="sidebar-item__title"
          animate={{
            clipPath: isSidebarCollapsed
              ? "inset(0% 100% 0% 0%)"
              : "inset(0% 0% 0% 0%)",
            opacity: isSidebarCollapsed ? 0 : 1,
          }}
        >
          {item.title}
        </motion.span>
      </motion.div>
    </Link>
  );
}

export default Sidebar;
