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
  FormLabel,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  useDisclosure,
  Collapse,
  Checkbox
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
import ModalHeader from "../Components/modelBuilding/ModalHeader";
import ModalBody from "../Components/modelBuilding/ModalBody";
import ModalFooter from "../Components/modelBuilding/ModalFooter";
import CustomCollapse from "../Components/CustomCollapse";
import SaveModel from "../Components/SaveModel";
import axiosCall from "../Utils/axios";
import { delay } from "../Utils/utils";

import axios from "../__mocks__/axios";

import {
  CopyIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  SettingsIcon,
  RepeatIcon
} from "@chakra-ui/icons";

const ModelBuilding = ({ isAuth }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  // states
  const [authors, setAuthors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [datainformation, setDatainformation] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [experimentFeatureSelection, setExperimentFeatureSelection] = useState([]);
  const [rowSelected, setRowSelected] = useState([]);
  const modalRef = useRef(null);
  const newmodalRef = useRef(null);
  const [windowIsClosed, setWindowIsClosed] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  // functions
  const searchAuthors = (e) => {
    setSearchText(e.target.value);
  };

  const footerClose = (status) => {
    newmodalRef.current.closeModal();
  };

  const handleSetting = (e) => {
    modalRef.current.doToggle();
  }

  const dataSelected = (selectedValue) => {
    console.log("selected data====",selectedValue);
    setRowSelected(selectedValue)
  }

  const handleSaveModel = async (e) => {
    e.preventDefault();
    newmodalRef.current.saveSuccess();
  };

  const loadTableContent = () => {
    let rows = datainformation.map((information, i) => (
      <Tr key={i} onClick={() => selectedItem(information)} cursor="pointer">
        <Td fontSize="xs">{information.columnname}</Td>
        <Td fontSize="xs" textTransform="uppercase">{information.datatype}</Td>
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

  const selectionDone = (status) => {
    console.log("trying close window====",status);
    modalRef.current.closeModal();
    setWindowIsClosed(true)
  }

  const selectedItem = (item) => {
    //e.preventDefault();
    //setSelectedColumn(item);
    
    const selectedString = `${item.columnname}   |   ${item.datatype.toUpperCase()}`;
    //console.log("selected item====",selectedString);
    setSelectedColumn(selectedString);
    onToggle();
  };

  // effects
  useEffect(async () => {
    // This setTimeout is only for UI purposes (to see the spinner)
    await delay(1000);
    await axios
      .get("/experimenttargetcolumn")
      .then(function (fetchedDataInformation) {
        //console.log("get data information===", fetchedDataInformation);
        setDatainformation(fetchedDataInformation.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
      await axios
      .get("/experimentfeatureselection")
      .then(function (fetchedFeatureColumns) {
        console.log("get data information111===", fetchedFeatureColumns);
        setExperimentFeatureSelection(fetchedFeatureColumns.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [experimentFeatureSelection]);

  return (
    <CommonBackground>
      <StepperContainer activeStep={3} />
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
              onClick={(e) => handleSaveModel(e)}
            >
              PROCEED TO PREDICTION
            </Button>
            <CustomModal
              showModalButtonText="SAVE"
              modalBody={
                <SaveModel closeModal={footerClose}/>
              }
              size="xl"
              buttonHandler="red.500"
              colorScheme="white"
              fontWeight="normal"
              borderRadius={0}
              border="0px"
              modalFooter=""
              showButton="false"
              ref={newmodalRef}
            />
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
            <Box m={5}>
              <Flex>
                <Box mr={20} mb={10} width="27%">
                  <FormLabel>Experiment Target Column</FormLabel>
                  <Text fontSize="xs">
                    Place small information about the value
                  </Text>
                  {/*<Select
                    icon={<ChevronDownIcon />}
                    variant="outline"
                    size="md"
                    borderRadius={0}
                    mt={2}
                    border="1px"
                    borderColor="black"
                    placeholder="Select Target Column"
                    fontSize="sm"
                  >
                    <option>
                      PCT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT
                    </option>
                  </Select>*/}
                  <InputGroup onClick={onToggle} mt={2}>
                    <Input
                      borderRadius={0}
                      fontSize="sm"
                      placeholder="Select Target Column"
                      border="1px"
                      borderColor="blackAlpha.500"
                      value={selectedColumn}
                    />
                    <InputRightElement>
                      <ChevronDownIcon name="email" />
                    </InputRightElement>
                  </InputGroup>
                  <Collapse in={isOpen} animateOpacity>
                    <Box
                      boxShadow="xl"
                      border="1px"
                      borderColor="blackAlpha.500"
                    >
                      <Table
                        size="sm"
                        variant="simple"
                        colorScheme="blackAlpha"
                      >
                        <Thead backgroundColor="blackAlpha.50" height={10}>
                          <Tr>
                            <Th textTransform="capitalize">Column Name</Th>
                            <Th textTransform="capitalize">Data Type</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {/*<Tr>
                          <Td fontSize="xs">PCT</Td>
                          <Td fontSize="xs">INT</Td>
                        </Tr>
                        <Tr>
                          <Td fontSize="xs">Memory Mean</Td>
                          <Td fontSize="xs">Float</Td>
                        </Tr>
                        <Tr>
                          <Td fontSize="xs">CPU Mean</Td>
                          <Td fontSize="xs">INT</Td>
                        </Tr>
                        <Tr>
                          <Td fontSize="xs">Max At</Td>
                          <Td fontSize="xs">INT</Td>
                        </Tr>
                        <Tr>
                          <Td fontSize="xs">PCT</Td>
                          <Td fontSize="xs">INT</Td>
                        </Tr>*/}
                          {loadTableContent()}
                        </Tbody>
                      </Table>
                    </Box>
                  </Collapse>
                </Box>
                <Box>
                  <FormLabel>Experiment Feature Selection</FormLabel>
                  <Text fontSize="xs" mb={2}>
                    Select coumns for experiment
                  </Text>
                  {rowSelected.length && windowIsClosed ? (
                    <Button
                      variant="solid"
                      size="md"
                      borderRadius={0}
                      color="blue.500"
                      border="1px"
                      borderColor="blue.500"
                      leftIcon={<RepeatIcon />}
                      fontWeight="normal"
                      onClick={() => setWindowIsClosed(false)}
                    >
                      SELECT
                    </Button>
                  ) : (
                    <CustomModal
                      showModalButtonText="SELECT"
                      modalHeader={<ModalHeader />}
                      modalBody={
                        <ModalBody
                          dataSet={experimentFeatureSelection}
                          onChange={dataSelected}
                        />
                      }
                      size="2xl"
                      modalFooter={
                        <ModalFooter
                          selectedRow={rowSelected}
                          closeModal={selectionDone}
                        />
                      }
                      modalCloseButton="true"
                      ref={modalRef}
                    />
                  )}
                </Box>
              </Flex>
              <Flex>
                <Box mr={4} width="27%">
                  <FormLabel>Experiment Model</FormLabel>
                  <Text fontSize="xs">
                    Place small information about the value
                  </Text>
                  <Select
                    icon={<ChevronDownIcon />}
                    variant="outline"
                    size="md"
                    mt={2}
                    borderRadius={0}
                    border="1px"
                    borderColor="blackAlpha.500"
                    fontSize="sm"
                    placeholder="Select Model"
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="automl">AutoML</option>
                    <option value="option1">Gradient Boosting Estimator</option>
                    <option value="option1">
                      Generaliized Linear Estimator
                    </option>
                    <option value="option1">Random Forest Estimator</option>
                    <option value="option1">Deep Learning</option>
                    <option value="option1">Segmentation</option>
                  </Select>
                </Box>
                {selectedModel ? (
                  <Button
                    variant="ghost"
                    size="md"
                    borderRadius={0}
                    color="gray.500"
                    fontSize="lg"
                    mt="55px"
                    leftIcon={<SettingsIcon />}
                    fontWeight="normal"
                    onClick={(e) => handleSetting(e)}
                  >
                    Advance Setting
                  </Button>
                ) : (
                  ""
                )}
              </Flex>
              {selectedModel ? (
                <CustomCollapse ref={modalRef} selectedModel={selectedModel} />
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </CommonBackground>
  );
};

export default ModelBuilding;