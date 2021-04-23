import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  FormLabel,
  Flex,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ProjectSelector = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const setProjectType = (selectedProject) => {
    setSelectedProject(selectedProject);
  };
  return (
    <ChakraProvider resetCSS>
      <Box
        backgroundColor="twitter.50"
        p="40px"
        width="600px"
        borderRadius="10px"
        marginLeft="120vh"
        marginBottom="10vh"
        borderRightRadius={0}
      >
        <FormLabel fontSize="lg" fontWeight="bold">
          Select project to continue
        </FormLabel>
        <Flex
          border="1px"
          opacity={1}
          variant="outline"
          pl="4px"
          borderColor="blackAlpha.100"
          color="gray.500"
        >
          <Input
            fontSize="sm"
            placeholder="Project Name"
            variant="unstyled"
            height="20px"
            borderRight="1px"
            borderRadius={0}
            mt="10px"
            borderColor="blackAlpha.100"
          />
          <Select
            fontSize="sm"
            placeholder="Project ID"
            icon={<ChevronDownIcon />}
            variant="unstyled"
            size="md"
            ml="20px"
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option>Prj01_UC01</option>
          </Select>
        </Flex>
        <Button
          variant="solid"
          size="md"
          border={0}
          borderRadius={0}
          mt="25px"
          backgroundColor="blackAlpha.500"
          colorScheme="red"
          fontWeight="normal"
        >
          CONTINUE
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default ProjectSelector;
