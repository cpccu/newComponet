import React, { useState } from "react";
import EventScroll from "./EventScroll";

export default function EventScrollProvider({ children }) {
  const [target, setTarget] = useState(null);

  return (
    <EventScroll.Provider value={{ target, setTarget }}>
      {children}
    </EventScroll.Provider>
  );
}
