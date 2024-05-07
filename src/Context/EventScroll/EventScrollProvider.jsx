import React, { useRef, useState } from "react";
import EventScroll from "./EventScroll";

export default function EventScrollProvider({ children }) {
  const scrollTarget = useRef(null);

  return (
    <EventScroll.Provider value={{ scrollTarget }}>
      {children}
    </EventScroll.Provider>
  );
}
