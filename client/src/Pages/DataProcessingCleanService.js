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
  const [dataCleaning, setDataCleaning] = useState(false);
  const [finalCleanupDone, setFinalCleanupDone] = useState(false);
  const [datatTextClean, setDatatTextClean] = useState(false);
  const [textTransformation, setTextTransformation] = useState(false);
  const [cleanAllServices, setCleanAllServices] = useState(false);
  const [onlyTextClean, setOnlyTextClean] = useState(false);
  const [highlightText, setHighlightText] = useState(false);
  const [onlyTextTextTransform, setOnlyTextTextTransform] = useState(false);
  const [onlyTextTransform, setOnlyTextTransform] = useState(false);
  const [highlightTransform, setHighlightTransform] = useState(false);

  // functions
  const searchAuthors = (e) => {
    setSearchText(e.target.value);
  };

  const onlyTextTransformClean = (status) => {
    console.log("clean text transform only");
    setHighlightTransform(status);
    modalRef.current.closeModal();
  }

  const displaySelection = (servicetype) => {
    //setShowSelect(!showSelect);
    console.log("my selection",servicetype);
    if(servicetype==='textclean'){
      setTextCleaning(true);
      setOnlyTextClean(true);
      setOnlyTextTransform(false);
      setTextTransformation(false);
    }else if(servicetype==='dataclean'){
      setOnlyTextClean(false);
      setOnlyTextTransform(false);
    }else{
      setOnlyTextClean(false);
      setOnlyTextTransform(true);
      setTextTransformation(true);
    }
    modalRef.current.saveSuccess();
  }

  const cleanIngDone = (status) => {
    setFinalCleanupDone(status)
    modalRef.current.closeModal();
  }

  const dataCleanComplete = (status) => {
    console.log("data clean complete",status);
    setDataCleaning(true);
    modalRef.current.closeModal();
  }

  const dataTextCleanUp = (status) => {
    console.log("data and text cleanup",status);
    setDatatTextClean(status)
    modalRef.current.closeModal();
  }

  const cleanTextTextTransform = (status) => {
    console.log("only text and text transform");
    setOnlyTextTextTransform(status);
    modalRef.current.closeModal();
  }

  const onlyCleanText = (status) => {
    console.log("only clean text");
    setHighlightText(status);
    modalRef.current.closeModal();
  }

  const openTextTransform = (status) => {
    console.log("open text transform window",status);
    setTextTransformation(status);
    setTextCleaning(false);
  }

  const cleanAllThree = (status) => {
    console.log("clean all services=====",status);
    setCleanAllServices(status);
    modalRef.current.closeModal();
  }

  const footerClose = async (status) => {
    setTextCleaning(true);
    await axios
      .get("/textcleanservice")
      .then(function (fetchedDataInformation) {
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
          <Link to='/dataprocessing'>
            <ChevronLeftIcon boxSize={14} color="blue.500" mt={2} />
          </Link>
          <Box ml={5}>
            <Text fontSize="3xl">Cleaning Service for dataset CMB_Ech02</Text>
            <Text fontSize="lg">
              Select service to proceed data fields selection
            </Text>
          </Box>
        </Box>
        <Box mr={5}>
          <Link to='/dataprocessing'>
            <CloseIcon boxSize={5} color="blackAlpha.500" />
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="space-between" mt={20} ml={20} mr={5}>
        <Box backgroundColor={dataCleaning || finalCleanupDone || datatTextClean || cleanAllServices ? 'green.50' : "white"} mr={7} border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl">
          <Box display="flex" justifyContent="flex-end">
            <CheckCircleIcon color="green.500" boxSize={6} display={dataCleaning || finalCleanupDone || datatTextClean || cleanAllServices ? 'block' : "none"}/>
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
                  onClick={() => displaySelection('dataclean')}
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
                        modalBody={<ModalBody dataSet={datainformation} textClean={textCleaning} textTransformation={textTransformation} startPoint="dataclean"/>}
                        size="5xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter={<ModalFooter closeModal={footerClose} 
                        textClean={textCleaning} 
                        finalWindowClose ={cleanIngDone} 
                        dataClean={dataCleanComplete} 
                        dataTextClean={dataTextCleanUp} 
                        goToTextTransform={openTextTransform} 
                        textTransformation={textTransformation}
                        onlyTextClean={onlyTextClean}
                        onlyCleanText={onlyCleanText}
                        onlyTextTransform={onlyTextTransform}
                        cleanDataTextTexttransform ={cleanAllThree}
                        cleanTextTextTransform={cleanTextTextTransform}
                        onlyTextTransformClean={onlyTextTransformClean}/>}
                        showButton="false"
                        ref={modalRef}
                        modalCloseButton="true"
                        modalHeader={<ModalHeader textClean={textCleaning} textTransformation={textTransformation}/>}
                      />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mr={7} backgroundColor={finalCleanupDone || datatTextClean || cleanAllServices || highlightText || onlyTextTextTransform? 'green.50' : "white"} border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl">
          <Box display="flex" justifyContent="flex-end">
            <CheckCircleIcon color="green.500" boxSize={6} display={finalCleanupDone || datatTextClean || cleanAllServices || highlightText || onlyTextTextTransform? 'block' : "none"}/>
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
                  onClick={() => displaySelection('textclean')}
                >
                  Clean Text
                </Button>
                <CustomModal
                        showModalButtonText="SAVE"
                        modalBody={<ModalBody dataSet={datainformation} textClean={textCleaning} startPoint="textclean" textTransformation={textTransformation} 
                        />}
                        size="5xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter={<ModalFooter closeModal={footerClose} 
                        textClean={textCleaning} 
                        finalWindowClose ={cleanIngDone} 
                        dataClean={dataCleanComplete} 
                        dataTextClean={dataTextCleanUp} 
                        goToTextTransform={openTextTransform} 
                        onlyTextTransform={onlyTextTransform}
                        textTransformation={textTransformation}
                        onlyCleanText={onlyCleanText}
                        cleanDataTextTexttransform ={cleanAllThree} onlyTextClean={onlyTextClean}
                        cleanTextTextTransform={cleanTextTextTransform}
                        onlyTextTransformClean={onlyTextTransformClean}/>}
                        showButton="false"
                        ref={modalRef}
                        modalCloseButton="true"
                        modalHeader={<ModalHeader textClean={textCleaning} textTransformation={textTransformation}/>}
                      />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box backgroundColor={finalCleanupDone || cleanAllServices || onlyTextTextTransform || highlightTransform ? 'green.50' : "white"} border="1px" borderColor="gray.500" borderRadius={5} p="27px" width="33.33%" boxShadow="xl">
          <Box display="flex" justifyContent="flex-end">
            <CheckCircleIcon color="green.500" boxSize={6} display={finalCleanupDone || cleanAllServices || onlyTextTextTransform || highlightTransform ? 'block' : "none"}/>
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
                  onClick={() => displaySelection('texttransform')}
                >
                  Text Transform
                </Button>
                <CustomModal
                        showModalButtonText="SAVE"
                        modalBody={<ModalBody startPoint="texttransform" dataSet={datainformation} textClean={textCleaning} textTransformation={textTransformation}/>}
                        size="5xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter={<ModalFooter closeModal={footerClose} 
                        textClean={textCleaning}
                        onlyTextClean={onlyTextClean} 
                        finalWindowClose ={cleanIngDone} 
                        dataClean={dataCleanComplete} 
                        dataTextClean={dataTextCleanUp} 
                        goToTextTransform={openTextTransform} 
                        textTransformation={textTransformation}
                        onlyTextTransform={onlyTextTransform}
                        cleanDataTextTexttransform ={cleanAllThree}
                        onlyCleanText={onlyCleanText}
                        cleanTextTextTransform={cleanTextTextTransform}
                        onlyTextTransformClean={onlyTextTransformClean}/>}
                        showButton="false"
                        ref={modalRef}
                        modalCloseButton="true"
                        modalHeader={<ModalHeader textClean={textCleaning} textTransformation={textTransformation}/>}
                      />
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
