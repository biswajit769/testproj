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
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaChartArea,
  FaTh,
  FaEye,
  FaHistory,
} from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Background from "../Components/Background";
import CommonBackground from "../Components/CommonBackground";
import StepperContainer from "../Components/StepperContainer";
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";

import axios from "../__mocks__/axios";

import { CopyIcon, ChevronRightIcon } from "@chakra-ui/icons";

const DataProcessing = ({ isAuth }) => {
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
        console.log("get data information===", fetchedDataInformation);
        setDatainformation(fetchedDataInformation.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <CommonBackground>
      <StepperContainer activeStep={2} />
      <Box mt={10}>
        <Flex alignItems="stretch" justifyContent="space-between" mb={2} mt={2}>
          <Box>
            <Text fontSize="3xl">Data Preprocessing</Text>
          </Box>
          <Box>
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
              PROCEED MODEL BUILDING
            </Button>
          </Box>
        </Flex>
        <Box border="1px" borderColor="gray.500" pb={5}>
          <Flex
            justifyContent="space-between"
            backgroundColor="gray.500"
            p={5}
            pt={2}
            pb={2}
          >
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
          <Box ml="19px" mt="9px">
            <Flex justifyContent="space-between" pt={5} pb={5}>
              <Box>
                <Alert status="warning" border="1px" borderColor="orange.500">
                  <AlertIcon />
                  <AlertDescription color="orange.500" fontSize="xl">
                    Preprocess Data Alredy Found! Check the summary below
                  </AlertDescription>
                </Alert>
              </Box>
              <Box
                display="flex"
                border="1px"
                borderColor="messenger.500"
                mr="16px"
                pt="4px"
              >
                <Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                  leftIcon={<FaEye />}
                >
                  View Dataset
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                  leftIcon={<FaHistory />}
                >
                  History
                </Button>
              </Box>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="3xl" pb={3}>
                Data Preprocessing summary for CMB_Echo 2
              </Text>
              <Text textAlign="left" fontSize="sm" lineHeight={9}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Text>
              <Link to="/datacleanservice">
                <Button
                  variant="solid"
                  size="lg"
                  borderRadius={0}
                  color="messenger.500"
                  width="15%"
                  mt={4}
                  fontWeight="normal"
                  border="1px"
                  borderColor="messenger.500"
                >
                  PROCESS IT AGAIN
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default DataProcessing;
