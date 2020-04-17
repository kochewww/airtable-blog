import React, { useState } from "react";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [postList, setPostList] = useState([]);

  return (
    <Context.Provider
      value={{
        postList,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
