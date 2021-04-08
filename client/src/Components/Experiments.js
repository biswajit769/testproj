import React from "react";
import {
  Box,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Icon,
} from "@chakra-ui/react";
import { FaFileAlt,FaPlus } from "react-icons/fa";

const Experiments = ({ experimentData }) => {
  console.log("experiment data====",experimentData);
  const loadTableContent = () => {
    let rows = experimentData.map((experiment, i) => (
      <Tr>
        <Td fontSize="xs" width="12%">{experiment.id}</Td>
        <Td fontSize="xs" width="10%">{experiment.name}</Td>
        <Td fontSize="xs" width="8%">{experiment.dataset}</Td>
        <Td fontSize="xs" width="18%">{experiment.description}</Td>
        <Td fontSize="xs" width="12%">{experiment.target}</Td>
        <Td fontSize="xs" width="10%">{experiment.runtime}</Td>
        <Td fontSize="xs" width="19%">{experiment.status}</Td>
        <Td width="1%"><Icon as={FaFileAlt} color="linkedin.500"/></Td>
        <Td width="5%"><Button
        variant="solid"
        size="sm"
        borderRadius={0}
        color="linkedin.500"
        fontSize="sm"
        border="1px"
        fontWeight="normal"
        borderColor="linkedin.500"
        backgroundColor="twitter.50"
      >
        ACTION
      </Button></Td>
      </Tr>
    ));
    if (rows.length === 0) {
      return (
        <Tr w="600px" backgroundColor="red.300">
          <Th>
            <Text color="gray.800">No results match your criteria</Text>
          </Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      );
    } else {
      return rows;
    }
  };
  return (
    <Box px={25} mt="10px">
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="2xl" textAlign="left">
          AI Experiments
        </Text>
        <Button
          variant="solid"
          size="md"
          borderRadius={0}
          textAlign="right"
          backgroundColor="red.500"
          color="whiteAlpha.900"
          display="flex"
          justifyContent="flex-end"
          flexDirection="row-reverse"
          rightIcon={<Box mr="10px"><FaPlus/></Box>}
        >
          EXPERIMENT
        </Button>
      </Box>
      <Box>
        <Table
          marginTop="2vh"
          marginBottom="2vh"
          borderRadius="md"
          variant="simple"
          colorScheme="blackAlpha"
          backgroundColor="white"
          border="2px"
          borderColor="blackAlpha.400"
          boxShadow="xl"
        >
          <Thead backgroundColor="blackAlpha.100" height={10}>
            <Tr lineHeight={50} height={50} p={10}>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="12%">Experiment ID</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="15%">Experiment Name</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="10%">Dataset</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="18%">Description</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="10%">Target</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="10%">Runtime</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="15%">Status</Th>
              <Th textTransform="capitalize" fontWeight="medium" color="black" width="5%">&nbsp;</Th>
              <Th width="5%">&nbsp;</Th>
            </Tr>
          </Thead>
          <Tbody>
            {experimentData?loadTableContent():''}</Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Experiments;
