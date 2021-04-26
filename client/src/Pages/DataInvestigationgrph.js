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
  Image,
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

import { CopyIcon, ChevronRightIcon } from "@chakra-ui/icons";

const DataInvestigationgrph = ({ isAuth }) => {
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
          <Flex justifyContent="space-between" mt={2} ml={3} mb="20px">
            <Box>
              <Text fontSize="3xl">Data Information & summary</Text>
            </Box>
            <Box display="flex" mr={3} mt={2}>
              <Box backgroundColor="messenger.500"  width="48px">
                <Link to='/dataexplore'>
                <Icon
                  as={FaTh}
                  color="white"
                  boxSize={5}
                  ml="13px"
                  mt="8px"
                  borderRight="0"
                />
                </Link>
              </Box>
              <Box  width="48px" border="1px" borderColor="messenger.500" backgroundColor="white">
                <Link to='/dataexploregph'>
                <Icon
                  as={FaChartArea} 
                  color="messenger.500"
                  boxSize={5}
                  ml="13px"
                  mt="8px"
                />
                </Link>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" backgroundColor="white">
            <Box ml={5}>
              <Text fontSize="xl" mb="20px" mt={5}>
                Sample Chart 1
              </Text>
              <Image
                height="300px"
                width="400px"
                src="https://assets-us-01.kc-usercontent.com/cddce937-cf5a-003a-bfad-78b8fc29ea3f/d339008c-bcfd-45bb-8292-d05899d536db/combination%20chart.png"
              />
            </Box>
            <Box>
              <Text fontSize="xl" mb="20px" mt={5}>
                Sample Chart 2
              </Text>
              <Image
                height="300px"
                width="400px"
                src="https://miro.medium.com/max/4000/1*DDsh3jsJX_qcZquMyzsZpA.png"
              />
            </Box>
            <Box>
              <Text fontSize="xl" mb="20px" mt={5}>
                Sample Chart 3
              </Text>
              <Image
                height="300px"
                width="400px"
                src="https://prolaborate.sparxsystems.com/img/PortalPage/Charts/bubble-chart-item.png"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default DataInvestigationgrph;
