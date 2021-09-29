import React from "react";
import { GridItem } from "@chakra-ui/react";
import InputFields from "./inputFields";

function index() {
  return (
    <GridItem
      minW={("md", { sm: "md", lg: "2xl" })}
      maxW={{ base: "sm" }}
      width="full"
      gridGap={5}
      justifyContent="center"
      rounded={5}
      py={4}
      colSpan={{ lg: "2" }}
    >
      <InputFields />
    </GridItem>
  );
}

export default index;
