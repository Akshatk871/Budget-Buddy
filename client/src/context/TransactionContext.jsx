import React, { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const authToken = localStorage.getItem("authToken");

  // Fetch all transactions
  const fetchTransactions = async () => {
    if (!authToken) return;

    try {
      const response = await fetch("http://localhost:8080/api/transactions/list", {
        method: "GET",
        headers: {
          Authorization: {authToken},
        },
      });

      if (response.ok) {
        const transactionList = await response.json();
        setTransactions(transactionList);
      } else {
        console.error("Failed to fetch transactions.");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Add a transaction
  const addTransaction = async (transaction) => {
    if (!authToken) return;

    try {
      const response = await fetch("http://localhost:8080/api/transactions/add", {
        method: "POST",
        headers: {
          Authorization: {authToken},
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      if (response.ok) {
        const newTransaction = await response.json();
        setTransactions((prev) => [...prev, newTransaction]);
      } else {
        console.error("Failed to add transaction.");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // Fetch on component mount

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
