import React, { useEffect, useState, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
export default function index({ scrollRef }) {
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
    <>
      <NavBar scrolled={scrolled} setScrolled={setScrolled} />
    </>
  );
}
