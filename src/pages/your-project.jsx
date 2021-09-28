import React from "react";
import Form from '@/components/Body/have-project';
import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

function YourProject() {
  return (
    <Box overflow="hidden" bg="red.800">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gridGap={1}
        mt={{ base: "16", md: "5" }}
        mb={8}
        mx={{ base: "5", md: "16" }}
        background="gray.200"
        rounded={5}
        px={8}
        py={2}
        shadow="xl"
      >
        <Heading fontWeight="bold">Have A Project ?</Heading>
        <Text fontSize="sm" fontWeight="bold">
          Tell us about your project. We will make you easy and reliable website
          as ur choice.
        </Text>
        <Text color="black" fontSize="xs">
          Please fill the form if you
          <Box as="span" mx={1} color="red.500" fontWeight="bold">
            Have a Project
          </Box>
          to create.
        </Text>
      </Flex>
      <Box d="flex" justifyContent="center" alignItems="center" color="white">
      <Form />
      </Box>
     
    </Box>
  );
}

export default YourProject;
