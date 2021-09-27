import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useCallback } from "react";
import NavBar from "../NavBar";

export default function Layout({ scrollRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = useCallback(
    (e) => {
      const target = e.target.scrollTop;
      target >= 50 ? onOpen() : onClose();
    },
    [onOpen, onClose]
  );

  useEffect(() => {
    const div = scrollRef.current;
    div.addEventListener("scroll", handleScroll);

    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, scrollRef]);

  return <NavBar scrolled={isOpen} />;
}
