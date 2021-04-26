import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  Container,
  CircularProgress as Spinner,
  useColorMode,
  Tooltip,
  Box,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSearch, FaEdit, FaChartArea, FaTh } from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Background from "../Components/Background";
import CommonBackground from "../Components/CommonBackground";
import StepperContainer from "../Components/StepperContainer";
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";

import axios from "../__mocks__/axios";

import { CopyIcon,ChevronRightIcon } from "@chakra-ui/icons";

const DataInvestigation = ({ isAuth }) => {
  const { colorMode } = useColorMode();

  // states
  const [authors, setAuthors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [datainformation, setDatainformation] = useState([]);

  // functions
  const searchAuthors = (e) => {
    setSearchText(e.target.value);
  };
  
  const loadTableContent = () => {
    let rows = datainformation.map((information, i) => (
      <Tr fontSize="xs">
        <Td>{information.info}</Td>
        <Td>{information.field1}</Td>
        <Td>{information.field2}</Td>
        <Td>{information.field3}</Td>
        <Td>{information.field4}</Td>
        <Td>{information.field5}</Td>
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

  // effects
  useEffect(async () => {
    // This setTimeout is only for UI purposes (to see the spinner)
    await delay(1000);
    await axios
      .get("/getdatainformation")
      .then(function (fetchedDataInformation) {
        setDatainformation(fetchedDataInformation.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <CommonBackground>
      <StepperContainer activeStep={1}/>
      <Box mt={10}>
        <Flex alignItems="stretch" justifyContent="space-between" mb={2} mt={2}>
          <Box>
            <Text fontSize="3xl">Data Exploration</Text>
          </Box>
          <Box>
          <Link to='/dataprocessing'>
            <Button
              variant="solid"
              size="lg"
              borderRadius={0}
              backgroundColor="red.500"
              color="whiteAlpha.900"
              rightIcon={<ChevronRightIcon />}
              fontWeight="normal"
              height="36px"
            >
              DATA PREPROCESSING
            </Button>
          </Link>
          </Box>
        </Flex>
        <Box border="1px" borderColor="gray.500" pb={5}>
          <Flex justifyContent="space-between" backgroundColor="gray.500" p={5} pt={2} pb={2}>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900">
                Use Case ID
              </Text>
              <Text fontSize="xl" color="whiteAlpha.900">
                Prj01_UC01
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900">
                Use Case Name
              </Text>
              <Text fontSize="xl" color="whiteAlpha.900">
                Predict system downtimes
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900">
                Experiment ID
              </Text>
              <Text fontSize="xl" color="whiteAlpha.900">
                Experiment ID #
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900">
                Experiment Name
              </Text>
              <Text fontSize="xl" color="whiteAlpha.900">
                Experiment Name
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="whiteAlpha.900">
                Dataset
              </Text>
              <Text fontSize="xl" color="whiteAlpha.900">
                Dataset Name
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mt={2} ml={3} mb="20px">
            <Box>
              <Text fontSize="3xl">Data Information & summary</Text>
            </Box>
            <Box display="flex" mr={3} mt={2}>
              <Box border="1px" borderColor="messenger.500" width="48px">
              <Link to='/dataexplore'>
                <Icon
                  as={FaTh}
                  color="messenger.500"
                  boxSize={5}
                  ml="13px"
                  mt="8px"
                  borderRight="0"
                />
                </Link>
              </Box>
              <Box backgroundColor="messenger.500" width="48px" borderLeft="0">
              <Link to='/dataexploregph'>
                <Icon
                  as={FaChartArea}
                  color="white"
                  boxSize={5}
                  ml="13px"
                  mt="8px"
                />
                </Link>
              </Box>
            </Box>
          </Flex>
          <Flex borderTop="1px" borderColor="gray.500">
            <Table variant="striped" colorScheme="blackAlpha">
              <Thead backgroundColor="blackAlpha.400">
                <Tr height="46px">
                  <Th textTransform="capitalize">Info</Th>
                  <Th textTransform="capitalize">Field 1</Th>
                  <Th textTransform="capitalize">Field 2</Th>
                  <Th textTransform="capitalize">Field 3</Th>
                  <Th textTransform="capitalize">Field 4</Th>
                  <Th textTransform="capitalize">Field 5</Th>
                </Tr>
              </Thead>
              <Tbody>
              {datainformation ? loadTableContent() : ""}
              </Tbody>
            </Table>
          </Flex>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default DataInvestigation;
