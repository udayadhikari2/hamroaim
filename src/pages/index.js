import React, { useRef, useEffect, useState, useCallback } from "react";
import NavBar from "../Components/NavBar/NavBar";
export default function App() {
  const scrollRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback((e) => {
    const target = e.target.scrollTop;
    if (target >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    console.log(target);
  }, []);
  useEffect(() => {
    const div = scrollRef.current;
    div.addEventListener("scroll", handleScroll);
  }, [handleScroll, scrolled]);

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row overflow-hidden">
      <NavBar scrolled={scrolled} setScrolled={setScrolled} />
      <div
        ref={scrollRef}
        className="w-screen h-screen overflow-x-hidden overflow-y-auto"
      >
        abc
      </div>
    </div>
  );
}
