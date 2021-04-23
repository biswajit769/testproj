import React, { useState, useEffect, useRef } from "react";
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
  Image
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
import CustomModal from "../Components/CustomModal";
import ModalHeader from "../Components/dataCleanModal/ModalHeader"
import ModalBody from "../Components/dataCleanModal/ModalBody"
import ModalFooter from "../Components/dataCleanModal/ModalFooter"
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";

import axios from "../__mocks__/axios";

import { CopyIcon, ChevronRightIcon, ChevronLeftIcon, CloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

const DataProcessingCleanService = ({ isAuth }) => {
  const { colorMode } = useColorMode();

  // states
  const [authors, setAuthors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [datainformation, setDatainformation] = useState([]);
  const modalRef = useRef(null);
  const [textCleaning, setTextCleaning] = useState(false);
  const [finalCleanupDone, setFinalCleanupDone] = useState(false);

  // functions
  const searchAuthors = (e) => {
    setSearchText(e.target.value);
  };

  const displaySelection = () => {
    //setShowSelect(!showSelect);
    console.log("my selection");
    modalRef.current.saveSuccess();
  }

  const cleanIngDone = (status) => {
    setFinalCleanupDone(status)
    modalRef.current.closeModal();
  }

  const footerClose = async (status) => {
    setTextCleaning(true);
    console.log("text clean======",textCleaning);
    await axios
      .get("/textcleanservice")
      .then(function (fetchedDataInformation) {
        console.log("get data information===", fetchedDataInformation);
        setDatainformation(fetchedDataInformation.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    //modalRef.current.closeModal();

    //setShowSelect(true);
    //onToggle();
    //setCloseModalStatus(status);
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
      .get("/datacleanservice")
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
          <Link to='/modelbuilding'>
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
          <Box>
      <Flex justifyContent="space-between" mt={5}>
        <Box display="flex">
          <ChevronLeftIcon boxSize={14} color="blue.500" mt={2} />
          <Box ml={5}>
            <Text fontSize="3xl">Cleaning Service for dataset CMB_Ech02</Text>
            <Text fontSize="lg">
              Select service to proceed data fields selection
            </Text>
          </Box>
        </Box>
        <Box mr={5}>
          <CloseIcon boxSize={5} color="blackAlpha.500" />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="space-between" mt={20} ml={20} mr={5}>
        <Box backgroundColor={finalCleanupDone ? 'green.50' : "white"} mr={7} border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl">
          <Box display="flex" justifyContent="flex-end">
            <CheckCircleIcon color="green.500" boxSize={6} display={finalCleanupDone ? 'block' : "none"}/>
          </Box>
          <Box display="flex">
            <Box width="84px" pr="20px">
              <Image
                height="45px"
                width="45px"
                mt="32px"
                ml="20px"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/data-cleaning-2687770-2229510.png"
              />
            </Box>
            <Box borderLeft="1px" borderColor="gray.500" pl="25px">
              <Box>
                <Text fontSize="2xl">Data Cleaning</Text>
                <Text>
                  Lorem Ipsum about data cleaning
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                  pl={0}
                  onClick={displaySelection}
                >
                  Clean Data
                </Button>
                {/*<Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                >
                  View Summary
                </Button>*/}
                <CustomModal
                        showModalButtonText="SAVE"
                        modalBody={<ModalBody dataSet={datainformation} textClean={textCleaning}/>}
                        size="5xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter={<ModalFooter closeModal={footerClose} textClean={textCleaning} finalWindowClose ={cleanIngDone}/>}
                        showButton="false"
                        ref={modalRef}
                        modalCloseButton="true"
                        modalHeader={<ModalHeader textClean={textCleaning}/>}
                      />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mr={7} border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl" backgroundColor="white">
          <Box display="flex" justifyContent="flex-end">
            <CopyIcon boxSize={6} display="none"/>
          </Box>
          <Box display="flex">
            <Box width="84px" pr="20px">
              <Image
                height="45px"
                width="45px"
                mt="32px"
                ml="20px"
                src="https://image.flaticon.com/icons/png/512/3093/3093130.png"
              />
            </Box>
            <Box borderLeft="1px" borderColor="gray.500" pl="25px">
              <Box>
                <Text fontSize="2xl">Text Cleaning</Text>
                <Text>
                  Lorem Ipsum about data cleaning
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                  pl={0}
                >
                  Clean Text
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl" backgroundColor="white">
          <Box display="flex" justifyContent="flex-end">
            <CopyIcon boxSize={6} display="none"/>
          </Box>
          <Box display="flex">
            <Box width="84px" pr="20px">
              <Image
                height="45px"
                width="45px"
                mt="32px"
                ml="20px"
                src="http://cdn.onlinewebfonts.com/svg/img_277794.png"
              />
            </Box>
            <Box borderLeft="1px" borderColor="gray.500" pl="25px">
              <Box>
                <Text fontSize="2xl">Text Transformation</Text>
                <Text>
                Lorem Ipsum about data cleaning
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="ghost"
                  size="md"
                  borderRadius={0}
                  color="messenger.500"
                  fontWeight="normal"
                  pl={0}
                >
                  Text Transform
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default DataProcessingCleanService;
