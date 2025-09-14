import React from "react";
import { Home, FileText, Settings } from "lucide-react";

export default function Sidebar({ active = "home" }) {
  const menuItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, key: "home" },
    { name: "Expenses", icon: <FileText className="w-5 h-5" />, key: "expenses" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, key: "settings" },
  ];

  return (
    <div className="h-screen w-64 p-2 bg-gray-900 text-white flex flex-col justify-between">
      {/* Top - Profile + Menu */}
      <div>
        {/* Profile Section */}
        <div className="flex flex-col items-center py-6">
          <img
            src="https://i.pravatar.cc/80"
            alt="User"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="text-sm font-semibold">Krishna Sharma</p>
        </div>

        {/* Menu Section */}
        <nav className="mt-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors rounded-lg 
                ${active === item.key ? "bg-gray-800 text-green-400" : "hover:bg-gray-800"}
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom - Branding */}
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-white">EXPEN</span>
          <span className="text-green-400">SES</span>
        </h1>
      </div>
    </div>
  );
}
