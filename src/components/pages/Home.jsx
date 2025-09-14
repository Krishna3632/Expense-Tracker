import React from "react";
import { DollarSign, TrendingUp, Wallet } from "lucide-react";

function StatCard({ title, value, color = "text-green-600", icon }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md text-gray-800 hover:shadow-xl hover:bg-gray-50 transition-all">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-500">
          {title}
        </h2>
        {icon && <div className={`text-gray-400 ${color}`}>{icon}</div>}
      </div>
      <div className="flex justify-center items-center mt-3">
        <span className={`text-3xl sm:text-4xl font-extrabold ${color}`}>
          {value}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-800">Home</h1>
      <p className="mt-2 text-gray-600">
        Welcome to your expense tracker dashboard. Select an option from the sidebar to get started.
      </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          title="Total Expenses"
          value="$1,000"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          title="Income"
          value="$3,500"
          color="text-blue-600"
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <StatCard
          title="Savings"
          value="$2,500"
          color="text-purple-600"
          icon={<Wallet className="w-6 h-6" />}
        />
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-4 text-gray-500 text-center">
          No transactions yet.
        </div>
      </div>
    </div>
  );
}
