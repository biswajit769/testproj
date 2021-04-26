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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
import CustomTabs from "../Components/CustomTabs";
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";

import axios from "../__mocks__/axios";

import { CopyIcon, ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaCloudDownloadAlt } from "react-icons/fa";

const ModelPrediction = ({ isAuth }) => {
  const { colorMode } = useColorMode();

  // states
  const [authors, setAuthors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [datainformation, setDatainformation] = useState([]);
  const [showPrediction, setShowPrediction] = useState(false);

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
      <StepperContainer activeStep={4} />
      <Box mt={10}>
        <Flex alignItems="stretch" justifyContent="space-between" mb={2} mt={2}>
          <Box>
            <Text fontSize="3xl">Prediction</Text>
          </Box>
          <Box>
          <Link to='/modelinterpretation'>
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
              MODEL INTERPRETATION
            </Button>
            </Link>
          </Box>
        </Flex>
        <Box border="1px" borderColor="gray.500" pb={5} borderTop={0}>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                backgroundColor="gray.500"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.900" textAlign="left">
                    Use Case ID
                  </Text>
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="left">
                    Prj01_UC01
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.900" textAlign="left">
                    Use Case Name
                  </Text>
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="left">
                    Predict system downtimes
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.900" textAlign="left">
                    Experiment ID
                  </Text>
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="left">
                    Experiment ID #
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.900" textAlign="left">
                    Experiment Name
                  </Text>
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="left">
                    Experiment Name
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.900" textAlign="left">
                    Dataset
                  </Text>
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="left">
                    CMB_Ech02_Cleaned
                  </Text>
                </Box>
                <AccordionIcon boxSize={14} color="whiteAlpha.900" />
              </AccordionButton>

              <AccordionPanel pb={4} backgroundColor="gray.500" p={0}>
                <Flex justifyContent="space-between">
                  <Box p={3} pr={0}>
                    <Flex
                      pb={10}   
                    >
                      <Box width="40%">
                        <Text fontSize="sm" color="whiteAlpha.900">
                          Exp Model
                        </Text>
                        <Text
                          fontSize="lg"
                          textAlign="left"
                          color="whiteAlpha.900"
                        >
                          AutoML: Automatic Machine Learning
                        </Text>
                      </Box>
                      <Box ml="13px">
                        <Text fontSize="sm" color="whiteAlpha.900">
                          Exp Model Type
                        </Text>
                        <Text fontSize="lg" color="whiteAlpha.900">
                          AutoML: Classification
                        </Text>
                      </Box>
                    </Flex>
                    <Flex pb={10}>
                      <Box>
                        <Text fontSize="sm" color="whiteAlpha.900">
                          Exp Target Column*
                        </Text>
                        <Text fontSize="lg" color="whiteAlpha.900">
                          ResolveTime
                        </Text>
                      </Box>
                      <Box ml="80px">
                        <Text fontSize="sm" color="whiteAlpha.900">
                          Exp Feature Selection
                        </Text>
                        <Text color="whiteAlpha.900" fontSize="lg">
                          14 Features used for experiment
                        </Text>
                      </Box>
                    </Flex>
                    <Flex flexDirection="column" pb={10}>
                      <Text fontSize="sm" color="whiteAlpha.900">
                        Experiment Description
                      </Text>
                      <Text color="whiteAlpha.900" fontSize="lg">
                        I would like to predict the resolving time for and
                        incident
                      </Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Table variant="simple" backgroundColor="whiteAlpha.800" size="sm">
                      <Thead backgroundColor="orange.50">
                        <Tr height="50px">
                          <Th textTransform="capitalize">Model#</Th>
                          <Th textTransform="capitalize">Model ID</Th>
                          <Th textTransform="capitalize" >Mean_per_class_e</Th>
                          <Th textTransform="capitalize" isNumeric>Loglos</Th>
                          <Th textTransform="capitalize" isNumeric>Rms</Th>
                          <Th textTransform="capitalize" isNumeric>Mse</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr fontSize="xs" height="60px">
                          <Td textTransform="capitalize">CMB_Echo 1</Td>
                          <Td textTransform="capitalize">DRF_1_HSBCAutoML_20201029_095658</Td>
                          <Td >0.2</Td>
                          <Td textTransform="capitalize" isNumeric>3K</Td>
                          <Td textTransform="capitalize" isNumeric>0.318</Td>
                          <Td textTransform="capitalize" isNumeric>0.101</Td>
                        </Tr>
                        <Tr fontSize="xs" height="60px">
                          <Td textTransform="capitalize">CMB_Echo 1</Td>
                          <Td textTransform="capitalize">StackendEnsemble_AIIModels_HSBCAutoML_20201029_09</Td>
                          <Td>eChannels</Td>
                          <Td textTransform="capitalize" isNumeric>3K</Td>
                          <Td textTransform="capitalize" isNumeric>0.318</Td>
                          <Td textTransform="capitalize" isNumeric>0.101</Td>
                        </Tr>
                        <Tr fontSize="xs" height="60px">
                          <Td textTransform="capitalize">CMB_Echo 1</Td>
                          <Td textTransform="capitalize">XRT_1_HSBCAutoML_20201029_095658</Td>
                          <Td>eChannels</Td>
                          <Td textTransform="capitalize" isNumeric>3K</Td>
                          <Td textTransform="capitalize" isNumeric>0.318</Td>
                          <Td textTransform="capitalize" isNumeric>0.101</Td>
                        </Tr>
                        <Tr fontSize="xs" height="60px">
                          <Td textTransform="capitalize">CMB_Echo 1</Td>
                          <Td textTransform="capitalize">StackendEnsemble_BestOfFamily_HSBCAutoML_20201029</Td>
                          <Td>eChannels</Td>
                          <Td textTransform="capitalize" isNumeric>3K</Td>
                          <Td textTransform="capitalize" isNumeric>0.318</Td>
                          <Td textTransform="capitalize" isNumeric>0.101</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Flex p={5}>
            <Select
              icon={<ChevronDownIcon />}
              variant="outline"
              size="md"
              borderRadius={0}
              backgroundColor="whiteAlpha.900"
              placeholder="Select Data for Prediction"
              fontSize="xs"
              size="sm"
              width="450px"
              mr="15px"
              border="1px"
              borderColor="blackAlpha.500"
            >
              <option>CMB Text Data</option>
            </Select>
            <Select
              icon={<ChevronDownIcon />}
              variant="outline"
              size="md"
              borderRadius={0}
              backgroundColor="whiteAlpha.900"
              placeholder="Select Saved Model"
              fontSize="xs"
              width="450px"
              size="sm"
              border="1px"
              borderColor="blackAlpha.500"
              mr="15px"
            >
              <option>DRF_HSBCAutoML_20201029_095658</option>
            </Select>
            <Button
              variant="solid"
              borderRadius={0}
              backgroundColor="whiteAlpha.900"
              colorScheme="gray"
              color="linkedin.500"
              fontWeight="normal"
              borderColor="linkedin.500"
              border="1px"
              size="sm"
              px={5}
              onClick={() => setShowPrediction(true)}
            >
              PREDICT
            </Button>
          </Flex>
          <Box>{showPrediction && <CustomTabs />}</Box>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default ModelPrediction;
