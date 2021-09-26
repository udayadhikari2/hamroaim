import React, { useRef, useEffect, useState, useCallback } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Home, Project, GetConnected, Subscribe, Footer, About } from "./Pages";
import { Switch, Route } from "react-router-dom";
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
    <div className="w-full h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row overflow-hidden">
        <NavBar scrolled={scrolled} setScrolled={setScrolled} />
        <div
          ref={scrollRef}
          className="border w-screen h-screen overflow-x-hidden overflow-y-auto"
        >
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/project" component={Project} />

            <Route path="/connected" component={GetConnected} />

            <Route path="/subscribe" component={Subscribe} />

            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}
