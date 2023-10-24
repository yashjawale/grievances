import React, { createContext, useState } from 'react';

// Define the structure for issue details
const initialIssueDetail = {
  id: 0,
  title: "",
  complainant: "",
  description: "",
  resolved: false,
  resolution: "",
  stamp:""
};

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [issueDetail, setIssueDetail] = useState(initialIssueDetail);

  const updateIssueDetail = (partialIssueDetail) => {
    console.log("updating issue detail")
    setIssueDetail(() => (partialIssueDetail));
  };

  return (
    <AppContext.Provider value={{ issueDetail, updateIssueDetail }}>
      {children}
    </AppContext.Provider>
  );
};
