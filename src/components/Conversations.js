import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import { ListGroup } from "react-bootstrap";

const Conversations = () => {
  const { conversations } = useConversations();

  return (
    <ListGroup variant={"flush"}>
      {conversations.map((conversation) => {
        return (
          <ListGroup.Item key={conversation.id}>
            Conversation with {conversation.id}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Conversations;
