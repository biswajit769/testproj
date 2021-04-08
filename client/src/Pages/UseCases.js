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
  Stack,
  Box,
  IconButton,
  FormLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Collapse,
  useDisclosure,
  Textarea,
  CloseButton,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaEye,
  FaPencilAlt,
  FaTrashAlt,
} from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CommonBackground from "../Components/CommonBackground";
import CustomModal from "../Components/CustomModal";
import UseCaseTypes from "../Components/UseCaseTypes";
import ModalFooter from "../Components/ModalFooter";
import Experiments from "../Components/Experiments";
import SaveData from "../Components/SaveData";
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";
import moment from "moment";
import axios from "../__mocks__/axios";

import { AddIcon, RepeatIcon } from "@chakra-ui/icons";

const UseCases = ({ isAuth }) => {
  const { colorMode } = useColorMode();
  const modalRef = useRef(null);

  // states
  const [usecases, setUsecases] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const [choreLogs, setChoreLogs] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [closeModalStatus, setCloseModalStatus] = useState(false);
  const [experimentList, setExperimentList] = useState("");
  const [formData, setFormData] = useState({
    usecasetype: "",
    usecasename: "",
    usecasedescription: "",
  });

  const addChoreLog = (usecase) => {
    setFormData({ ...formData, usecasetype: usecase });
  };

  const footerClose = (status) => {
    modalRef.current.closeModal();
    setShowSelect(true);
    setCloseModalStatus(status);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // functions
  const searchUseCases = (e) => {
    setSearchText(e.target.value);
  };

  const displaySelection = () => {
    setShowSelect(!showSelect);
  }

  const handleSave = async (e) => {
    console.log("formData====", formData);
    /*e.preventDefault();
    setLoading(true);
    /*console.log("formData====", formData);
    //await axiosCall.POST("./data/usecasespost.json", formData);
    let fetchedUseCases = await axiosCall.GET("./data/usecasespost.json", formData);
    setUsecases(fetchedUseCases.data);
    /*if (mode === 'add') {
      await axiosCall.POST('/authors', formData);
      
    } else if (mode === 'edit') {
      await axiosCall.PUT(`/authors/${authorId}`, formData);
    }
    setLoading(false);
    //props.history.goBack();*/
    e.preventDefault();
    setLoading(true);
    await axios
      .post("/usecases",formData)
      .then(function (fetchedUseCases) {
        setUsecases(fetchedUseCases.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const locadExperiments = async (usecaseId) => {
    console.log("use case id",usecaseId);
    await axios
    .get(`/getexperiments/${usecaseId}`)
    .then(function (fetchedExperiments) {
      setExperimentList(fetchedExperiments.data);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    });
    //setExperimentList
  }

  const loadTableContent = () => {
    let rows = usecases
      .filter((usecase) => {
        let fullSearchString =
          usecase._id +
          " " +
          usecase.name +
          " " +
          usecase.type +
          " " +
          usecase.status +
          " " +
          usecase.description;
        return (
          fullSearchString.toLowerCase().includes(searchText.toLowerCase()) ||
          searchText === ""
        );
      })
      .map((usecase, i) => (
        <AccordionItem id={usecase._id} backgroundColor={i%2===0 ? 'whiteAlpha.50':'blackAlpha.50'}>
          <AccordionButton pt="1rem" onClick={() => locadExperiments(usecase._id)}>
            <Flex width="100%">
              <AccordionIcon width="5%" color="linkedin.500" />
              <Box width="10%">
                <FormLabel fontSize="xs">{usecase._id}</FormLabel>
              </Box>
              <Box width="15%">
                <FormLabel fontSize="xs">{usecase.name}</FormLabel>
              </Box>
              <Box width="29%">
                <FormLabel fontSize="xs">{usecase.description}</FormLabel>
              </Box>
              <Box width="10%">
                <FormLabel fontSize="xs" textTransform="capitalize">{usecase.type}</FormLabel>
              </Box>
              <Box width="10%">
                <FormLabel fontSize="xs">{usecase.status}</FormLabel>
              </Box>
              <Box width="15%">
                <FormLabel fontSize="xs">
                  {moment(usecase.lastedit).format("Do MMMM YYYY h:mm a")}
                </FormLabel>
              </Box>
              <Box width="2%">
                <FormLabel fontSize="xs" color="linkedin.500">
                  <FaEye color="linkedin.500" />
                </FormLabel>
              </Box>
              <Box width="2%">
                <FormLabel fontSize="xs" color="linkedin.500">
                  <FaPencilAlt color="linkedin.500" />
                </FormLabel>
              </Box>
              <Box width="2%">
                <FormLabel fontSize="xs" color="linkedin.500">
                  <FaTrashAlt color="linkedin.500" />
                </FormLabel>
              </Box>
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4} backgroundColor="white">
            <Experiments experimentData={experimentList}/>
          </AccordionPanel>
        </AccordionItem>
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
      .get("/usecases")
      .then(function (fetchedUseCases) {
        setUsecases(fetchedUseCases.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [choreLogs, loading, formData, showSelect]);

  return (
    <CommonBackground>
      <Flex
        borderRadius="md"
        mt={1}
        paddingLeft="19px"
        position="relative"
        top={["15px", "15px", "34px", "34px"]}
        width="100%"
      >
        <Text fontSize="3xl" textAlign="left" width="80%">
          Existing AI Use Cases
        </Text>
        <InputGroup width="16%">
          <InputRightElement
            pointerEvents="none"
            right="26px"
            children={<FaSearch color="gray.300" />}
          />
          <Input
            type="text"
            maxW="200px"
            onChange={(e) => searchUseCases(e)}
            border="transparent"
            placeholder="Search Use Cases"
            size="md"
            borderRadius={0}
            border="1px"
            fontSize="sm"
            mr={7}
            placeholder="Search Use Cases"
            _placeholder={{
              color: colorMode === "light" ? "gray.600" : "gray.300",
            }}
          />
        </InputGroup>
        <IconButton
          aria-label="icon"
          icon={<AddIcon />}
          size="md"
          colorScheme="whiteAlpha"
          backgroundColor="red.500"
          borderRadius={0}
          onClick={onToggle}
        />
      </Flex>
      <Container maxWidth="100%" mt="12">
        {loading ? (
          <Spinner isIndeterminate color="teal.400" size="120px" />
        ) : (
          <Flex
            flexDirection="column"
            border="1px"
            opacity={1}
            variant="outline"
            borderColor="blackAlpha.100"
          >
            <Flex
              backgroundColor="blackAlpha.400"
              p="2"
              lineHeight="29px"
              height="46px"
              paddingLeft="14px"
            >
              <Box width="5%" />
              <Box width="10%">
                <FormLabel fontSize="sm">ID</FormLabel>
              </Box>
              <Box width="15%">
                <FormLabel fontSize="sm">Name</FormLabel>
              </Box>
              <Box width="29%">
                <FormLabel fontSize="sm">Description</FormLabel>
              </Box>
              <Box width="10%">
                <FormLabel fontSize="sm">Type</FormLabel>
              </Box>
              <Box width="10%">
                <FormLabel fontSize="sm">Status</FormLabel>
              </Box>
              <Box width="15%">
                <FormLabel fontSize="sm">Last Edited</FormLabel>
              </Box>
              <Box width="2%" />
              <Box width="2%" />
              <Box width="2%" />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
              <Box color="black" mt="0" bg="yellow.50" shadow="md" py="30px">
                <Flex p="2" lineHeight="29px" height="46px" paddingLeft="14px">
                  <Box width="5%" />
                  <Box width="10%">
                    <FormLabel fontSize="xs">pj01_UC01</FormLabel>
                  </Box>
                  <Box width="15%">
                    <Input
                      type="text"
                      maxW="200px"
                      onChange={changeHandler}
                      border="transparent"
                      placeholder="Enter Use Case Name"
                      size="md"
                      bg="white"
                      borderRadius={0}
                      border="1px"
                      fontSize="xs"
                      name="usecasename"
                      mr={7}
                      _placeholder={{
                        color: colorMode === "light" ? "gray.600" : "gray.300",
                      }}
                    />
                  </Box>
                  <Box width="29%">
                    <Input
                      type="text"
                      maxW="365px"
                      border="transparent"
                      placeholder="Enter Use Case Description"
                      size="md"
                      borderRadius={0}
                      border="1px"
                      fontSize="xs"
                      bg="white"
                      onChange={changeHandler}
                      name="usecasedescription"
                      mr={7}
                      _placeholder={{
                        color: colorMode === "light" ? "gray.600" : "gray.300",
                      }}
                    />
                  </Box>
                  <Box width="10%">
                    {formData && formData.usecasetype.length > 0 && showSelect ? (
                      <InputGroup>
                        <Input
                          size="md"
                          borderRadius={0}
                          bg="white"
                          fontSize="xs"
                          textTransform="capitalize"
                          defaultValue={formData.usecasetype}
                        />
                        <InputRightElement>
                          <RepeatIcon
                            name="email"
                            color="linkedin.500"
                            fontSize="2xl"
                            textAlign="center"
                            mt={1}
                            onClick={displaySelection}
                          />
                        </InputRightElement>
                      </InputGroup>
                    ) : (
                      <CustomModal
                        showModalButtonText="SELECT"
                        modalHeader="Select Use Case Type"
                        modalBody={<UseCaseTypes addChoreLog={addChoreLog} />}
                        size="5xl"
                        modalFooter={<ModalFooter closeModal={footerClose} />}
                        modalStatus={closeModalStatus}
                        ref={modalRef}
                        modalCloseButton="true"
                      />
                    )}
                  </Box>
                  <Box width="10%">
                    <FormLabel fontSize="sm">&nbsp;</FormLabel>
                  </Box>
                  <Box width="10%">
                    <FormLabel fontSize="sm">
                      <Button
                        variant="solid"
                        size="md"
                        borderRadius={0}
                        backgroundColor="red.500"
                        colorScheme="whiteAlpha"
                        fontWeight="normal"
                        onClick={(e) => handleSave(e)}
                      >
                        SAVE
                      </Button>
                      {/*<CustomModal
                        showModalButtonText="SAVE"
                        modalBody={<SaveData/>}
                        size="xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter=""
                      />*/}
                    </FormLabel>
                  </Box>
                  <Box width="4%">
                    <Box display="flex">
                      <CloseButton
                        size="md"
                        onClick={onToggle}
                        color="linkedin.500"
                      />
                      <FormLabel
                        mt="3px"
                        fontWeight="normal"
                        onClick={onToggle}
                        color="linkedin.500"
                      >
                        CLOSE
                      </FormLabel>
                    </Box>
                  </Box>
                  <Box width="1%" />
                  <Box width="1%" />
                </Flex>
              </Box>
            </Collapse>
            <Flex flexDirection="column">
              <Accordion allowToggle>{loadTableContent()}</Accordion>
            </Flex>
          </Flex>
        )}
      </Container>
    </CommonBackground>
  );
};

UseCases.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(UseCases);
