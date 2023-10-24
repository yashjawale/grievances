import React, { createContext, useState } from 'react';

// Define the structure for issue details
const initialIssueDetail = {
  id: 0,
  title: '',
  description: '',
  dated: '',
  sender: '',
  resolved: false,
};

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [issueDetail, setIssueDetail] = useState(initialIssueDetail);

  const updateIssueDetail = (partialIssueDetail) => {
    setIssueDetail((prevIssueDetail) => ({
      ...prevIssueDetail,
      ...partialIssueDetail,
    }));
  };

  return (
    <AppContext.Provider value={{ issueDetail, updateIssueDetail }}>
      {children}
    </AppContext.Provider>
  );
};
