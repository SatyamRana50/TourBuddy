// components/GuideCardClient.tsx
"use client";

import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface GuideCardClientProps {
  isExpanded: boolean;
  setExpandedId: (id: string | null) => void;
  id: string;
}

const GuideCardClient: React.FC<GuideCardClientProps> = ({
  isExpanded,
  setExpandedId,
  id,
}) => {
  const toggleExpand = () => {
    if (isExpanded) {
      setExpandedId(null); // Collapse if already expanded
    } else {
      setExpandedId(id); // Expand current card
    }
  };

  return (
    <button onClick={toggleExpand} className="focus:outline-none">
      {isExpanded ? <AiOutlineUp /> : <AiOutlineDown />}
    </button>
  );
};

export default GuideCardClient;
