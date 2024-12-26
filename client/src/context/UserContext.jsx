import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    savings: 0,
    income: 0,
    expenses: 0,
  });

  const authToken = localStorage.getItem("authToken");

  // Fetch user details from /getUser
  const fetchUserDetails = async () => {
    console.log(authToken);

    try {
      const response = await fetch("http://localhost:8080/api/auth/getUser", {
        method: "GET",
        headers: {
          Authorization: {authToken},
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({
          name: userData.name,
          savings: userData.savings,
          income: userData.income,
          expenses: userData.expenses,
        });
      } else {
        console.error("Failed to fetch user details.");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []); // Fetch on component mount

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};