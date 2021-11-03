import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationsContext = createContext();

export const useConversations = () => useContext(ConversationsContext);

export const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const createConversation = (id) => {
    setConversations((prevConversations) => [...prevConversations, { id }]);
  };

  return (
    <ConversationsContext.Provider
      value={{ conversations, createConversation }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};
