import React from "react";
import { chakra } from "@chakra-ui/system";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  HStack,
  RadioGroup,
  Select,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInput,
  Button,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  Stack,
  GridItem,
//   chakra,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";

function Have_a_Project() {
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
      <chakra.form
        method="POST"
        shadow="xl"
        rounded={[null, "md"]}
        overflow={{ sm: "hidden" }}
        py={3}
        px={5}
      >
        <Stack>
          <SimpleGrid
            columns={{ base: 0, md: 2 }}
            spacing={{ base: 3, md: 10 }}
            p={2}
            width="full"
          >
            <FormControl isRequired>
              <FormLabel fontWeight="normal">First Name</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  ring={3}
                  border="1px"
                  borderColor="white"
                  ringColor="transparent"
                  _focus={{
                    background: "gray.200",
                    color: "black",
                    ringColor: "green.500",
                    border: "transparent",
                  }}
                  fontWeight="bold"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight="normal">Last Name</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  ring={3}
                  border="1px"
                  borderColor="white"
                  ringColor="transparent"
                  _focus={{
                    background: "gray.200",
                    color: "black",
                    ringColor: "green.500",
                    border: "transparent",
                  }}
                  fontWeight="bold"
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
        </Stack>
        <Stack>
          <SimpleGrid
            columns={{ base: 0, md: 1 }}
            spacing={{ base: 3, md: 4 }}
            p={2}
            width="full"
          >
            <FormControl isRequired>
              <FormLabel fontWeight="normal">For whome project belongs to ?</FormLabel>
              <RadioGroup
                type="text"
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
                defaultValue="1"
              >
                <HStack>
                  <Radio type="radio" value="individaul">
                    Individual
                  </Radio>
                  <Radio type="radio" value="organization">
                    Organization
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl >
              <FormLabel fontWeight="normal">Name of Organization </FormLabel>
              <Input
                type="text"
                ring={3}
                border="1px"
                borderColor="white"
                ringColor="transparent"
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
              />
              <FormHelperText fontWeight="light" fontStyle="italic" fontSize="xs">If the category belongs to Organization kindly provide the name of organization.</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight="normal">What type of project do you have ?</FormLabel>
              <Select
                type="text"
                ring={3}
                border="1px"
                borderColor="white"
                ringColor="transparent"
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
              >
                <option value="">Web Design and Development</option>
                <option value="">Marketing</option>
                <option value="">Digital Promotion</option>
                <option value="">Web Content Writting</option>
                <option value="">Promotional Videos</option>
                <option value="">Domain Registration</option>
                <option value="">Hosting Websites</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <Stack>
            <SimpleGrid
              columns={{ base: 0, lg: 2 }}
              spacing={{ base: 3, md: 10 }}
              p={2}
              width="full"
            >
              <FormControl isRequired>
                <FormLabel fontWeight="normal">Your Estimated Price</FormLabel>
                <NumberInput max={1000000} min={5000}>
                  <NumberInputField
                    type="number"
                    ring={3}
                    borderColor="white"
                    ringColor="transparent"
                    _focus={{
                      background: "gray.200",
                      color: "black",
                      ringColor: "green.500",
                      border: "transparent",
                    }}
                    fontWeight="bold"
                    placeholder="Start's from Rs.5000"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="normal">Give us a Time Duration (In Months)</FormLabel>
                <InputGroup>
                  <NumberInput max={12} min={1}>
                    <NumberInputField
                      ring={3}
                      border="1px"
                      borderColor="white"
                      ringColor="transparent"
                      _focus={{
                        background: "gray.200",
                        color: "black",
                        ringColor: "green.500",
                        border: "transparent",
                      }}
                      fontWeight="bold"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper _focus={{ color: "gray.600" }} />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <InputRightAddon
                    children="Months"
                    background="gray.700"
                    fontSize="sm"
                    color="white"
                    fontWeight="semibold"
                    borderLeft="none"
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>
            <FormControl p={2}>
              <FormLabel fontWeight="normal">
                Want to give discription about your project ?
              </FormLabel>
              <Textarea
                ring={3}
                border="1px"
                borderColor="white"
                ringColor="transparent"
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
              />
              <FormHelperText fontWeight="light" fontSize="xs" fontStyle="italic">
                Do not provide your personal information.
              </FormHelperText>
            </FormControl>
          </Stack>
          <Stack>
            <SimpleGrid
              columns={{ base: 0, md: 2 }}
              spacing={{ base: 3, md: 10 }}
              p={2}
              width="full"
            >
              <FormControl isRequired>
                <FormLabel fontWeight="normal">Email</FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    ring={3}
                    border="1px"
                    borderColor="white"
                    ringColor="transparent"
                    _focus={{
                      background: "gray.200",
                      color: "black",
                      ringColor: "green.500",
                      border: "transparent",
                    }}
                    fontWeight="bold"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontWeight="normal">Contact Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon
                    children="+977 -"
                    background="gray.700"
                    fontSize="sm"
                    color="white"
                    fontWeight="semibold"
                    borderRight="none"
                  />
                  <Input
                    type="tel"
                    ring={3}
                    border="1px"
                    borderColor="white"
                    ringColor="transparent"
                    _focus={{
                      background: "gray.200",
                      color: "black",
                      ringColor: "green.500",
                      border: "transparent",
                    }}
                    fontWeight="bold"
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Button
            mt={5}
            px={16}
            color="black"
            _hover={{ background: "green.600" }}
          >
            Proceed !!
          </Button>
        </Flex>
      </chakra.form>
    </GridItem>
  );
}

export default Have_a_Project;
