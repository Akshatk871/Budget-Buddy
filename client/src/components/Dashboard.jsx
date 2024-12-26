import React, { useEffect, useState } from 'react';
import DoughnutChart from './DoughnutChart';
import Card from './Card';
import AddTransaction from './AddTransaction';
import RecentTransactions from './RecentTransactions';
import BarChart from './BarChart';

function Dashboard() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    savings: 0,
    income: 0,
    expenses: 0,
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const authToken = localStorage.getItem("authToken");
      

      if (!authToken) {
        console.error("No auth token found.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/auth/getUser", {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserDetails({
            name: userData.name,
            email: userData.email,
            savings: userData.savings,
            income: userData.income,
            expense: userData.expense,
          });
          
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const fetchTransactions = async () => {
      const authToken = localStorage.getItem("authToken");
      

      if (!authToken) {
        console.error("No auth token found.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/transactions/list", {
          method: "GET",
          headers: {
            Authorization: authToken,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const transactionData = await response.json();
          setTransactions(transactionData);
          
        } else {
          console.error("Failed to fetch transactions:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchUserDetails();
    fetchTransactions();
  }, []); // Empty dependency array to run only once on mount

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Block 1: Cards and Bar Chart */}
        <div className="space-y-6">
          <div className="grid m-2 grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Income" amount={`$${userDetails.income}`} percentage="1.7%" />
            <Card title="Expense" amount={`$${userDetails.expense}`} percentage="-1.7%" />
            <Card title="Savings" amount={`$${userDetails.savings}`} percentage="1.2%" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Cashflow</h3>
            <BarChart transactions={transactions}/>
          </div>
        </div>
        {/* Block 2: Doughnut Chart and Recent Transactions */}
        
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Spending Categories</h3>
            <div className="">
            <DoughnutChart transactions={transactions}/>
            </div>
            
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <RecentTransactions transactions={transactions} />
          </div>
        
      
      {/* Bottom Section: Add Transaction */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
        <AddTransaction onAddTransaction={handleAddTransaction}/>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;