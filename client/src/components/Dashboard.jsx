import React from 'react'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import Card from './Card'
import AddTransaction from './AddTransaction'
import RecentTransactions from './RecentTransactions'

function Dashboard() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Block 1: Cards and Bar Chart */}
        <div className="space-y-6">
          <div className="grid m-2 grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Income" amount="$78,000" percentage="1.7%" />
            <Card title="Expense" amount="$43,000" percentage="-1.7%" />
            <Card title="Savings" amount="$56,000" percentage="1.2%" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Cashflow</h3>
            <BarChart />
          </div>
        </div>

        {/* Block 2: Doughnut Chart */}
        <div className="bg-white h-full p-4 rounded-lg shadow flex items-center justify-center">
          <DoughnutChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <RecentTransactions />
        </div>

        {/* Add Transaction */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
          <AddTransaction />
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Dashboard