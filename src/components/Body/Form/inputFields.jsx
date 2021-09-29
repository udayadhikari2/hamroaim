import React from "react";
import {
  Box,
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
  Stack,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { validate } from "./validation";
import { onSubmit } from "./onSubmit";

function InputFields() {
  const formikForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      category: "",
      organization: "",
      projectType: "",
      estimatedPrice: "",
      estimatedTime: "",
      discription: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit,
  });

  return (
    <form
      onSubmit={formikForm.handleSubmit}
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
            <FormLabel d="flex" alignItems="center" fontWeight="normal">
              First Name
            </FormLabel>
            <InputGroup d="col">
              <Input
                type="text"
                ring={3}
                border="1px"
                borderColor="white"
                ringColor={
                  formikForm.errors.firstname && formikForm.touched.firstname ? "red.500" : "transparent"
                }
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
                name="firstname"
                id="firstname"
                onChange={formikForm.handleChange}
                value={formikForm.values.firstname}
                onBlur={formikForm.handleBlur}
              />
              {formikForm.errors.firstname && formikForm.touched.firstname && (
                <Box
                  color="red.300"
                  fontSize="sm"
                  fontStyle="italic"
                  fontWeight="semibold"
                >
                  {formikForm.errors.firstname}
                </Box>
              )}
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="normal">Last Name</FormLabel>
            <InputGroup d="col">
              <Input
                type="text"
                ring={3}
                border="1px"
                borderColor="white"
                ringColor={
                  formikForm.errors.lastname && formikForm.touched.lastname  ? "red.500" : "transparent"
                }
                _focus={{
                  background: "gray.200",
                  color: "black",
                  ringColor: "green.500",
                  border: "transparent",
                }}
                fontWeight="bold"
                name="lastname"
                id="lastname"
                onChange={formikForm.handleChange}
                value={formikForm.values.lastname}
                onBlur={formikForm.handleBlur}
              />
              {formikForm.errors.lastname && formikForm.touched.lastname && (
                <Box
                  color="red.300"
                  fontSize="sm"
                  fontStyle="italic"
                  fontWeight="semibold"
                >
                  {formikForm.errors.lastname}
                </Box>
              )}
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
            <FormLabel fontWeight="normal">
              For whome project belongs to ?
            </FormLabel>
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
                <Radio
                  type="radio"
                  name="category"
                  ringColor={
                    formikForm.errors.category ? "red.500" : "transparent"
                  }
                  onChange={formikForm.handleChange}
                  value="individaul"
                  onBlur={formikForm.handleBlur}
                >
                  Individual
                </Radio>
                <Radio
                  type="radio"
                  name="category"
                  ring={2}
                  ringColor={
                    formikForm.errors.category ? "red.500" : "transparent"
                  }
                  onChange={formikForm.handleChange}
                  value="organization"
                  onBlur={formikForm.handleBlur}
                >
                  Organization
                </Radio>
              </HStack>
              {formikForm.errors.category && formikForm.touched.category && (
                <Box
                  color="red.300"
                  fontSize="sm"
                  fontStyle="italic"
                  fontWeight="semibold"
                >
                  {formikForm.errors.category}
                </Box>
              )}
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="normal">Name of Organization </FormLabel>
            <InputGroup d="col">
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
                name="organization"
                id="organization"
                onChange={formikForm.handleChange}
                value={formikForm.values.organization}
                onBlur={formikForm.handleBlur}
              />
              {formikForm.errors.organization &&
                formikForm.touched.organization && (
                  <Box
                    color="red.300"
                    fontSize="sm"
                    fontStyle="italic"
                    fontWeight="semibold"
                  >
                    {formikForm.errors.organization}
                  </Box>
                )}
            </InputGroup>
            <FormHelperText fontWeight="light" fontStyle="italic" fontSize="xs">
              If the category belongs to Organization kindly provide the name of
              organization.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="normal">
              What type of project do you have ?
            </FormLabel>
            <InputGroup d="col">
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
              {...formikForm.getFieldProps("projectType")}
            >
              <option value="">
                {" "}
                --------- Select Project Type ----------
              </option>
              <option value="Web Design and Development">
                Web Design and Development
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Digital Promotion">Digital Promotion</option>
              <option value="Web Content Writting">Web Content Writting</option>
              <option value="Promotional Videos">Promotional Videos</option>
              <option value="Domain Registration">Domain Registration</option>
              <option value="Hosting Websites">Hosting Websites</option>
            </Select>
            {formikForm.errors.projectType &&
                formikForm.touched.projectType && (
                  <Box
                    color="red.300"
                    fontSize="sm"
                    fontStyle="italic"
                    fontWeight="semibold"
                  >
                    {formikForm.errors.projectType}
                  </Box>
                )}
            </InputGroup>
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
                  name="estimatedPrice"
                  id="estimatedPrice"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.estimatedPrice}
                  onBlur={formikForm.handleBlur}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {formikForm.errors.estimatedPrice &&
                formikForm.touched.estimatedPrice && (
                  <Box
                    color="red.300"
                    fontSize="sm"
                    fontStyle="italic"
                    fontWeight="semibold"
                  >
                    {formikForm.errors.estimatedPrice}
                  </Box>
                )}
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="normal">
                Give us a Time Duration (In Months)
              </FormLabel>
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
                    name="estimatedTime"
                    id="estimatedTime"
                    value={formikForm.values.estimatedTime}
                    onChange={formikForm.handleChange}
                    onBlur={formikForm.handleBlur}
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
              name="discription"
              id="discription"
              value={formikForm.values.discription}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
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
              <InputGroup d="col">
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
                  name="email"
                  id="email"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.email}
                  onBlur={formikForm.handleBlur}
                />
                {formikForm.errors.email && formikForm.touched.email && (
                  <Box
                    color="red.300"
                    fontSize="sm"
                    fontStyle="italic"
                    fontWeight="semibold"
                  >
                    {formikForm.errors.email}
                  </Box>
                )}
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
                  name="phone"
                  id="phone"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.phone}
                  onBlur={formikForm.handleBlur}
                />
                {formikForm.errors.phone && formikForm.touched.phone && (
                  <Box
                    color="red.300"
                    fontSize="sm"
                    fontStyle="italic"
                    fontWeight="semibold"
                  >
                    {formikForm.errors.phone}
                  </Box>
                )}
              </InputGroup>
            </FormControl>
          </SimpleGrid>
        </Stack>
      </Stack>
      <Flex justifyContent="center" alignItems="center">
        <Button
          type="submit"
          mt={5}
          px={16}
          color="black"
          _hover={{ background: "green.600" }}
        >
          Proceed !!
        </Button>
      </Flex>
    </form>
  );
}

export default InputFields;
