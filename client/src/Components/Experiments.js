import React, { useState, useEffect, useRef } from "react";
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
  Collapse,
  useDisclosure,
  Flex,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import CustomModal from "./CustomModal";
import ModalHeader from "./experimentModal/ModalHeader";
import ModalBody from "./experimentModal/ModalBody";
import ModalFooter from "./experimentModal/ModalFooter";
import SaveExperiment from "./SaveExperiment";
import { FaFileAlt, FaPlus } from "react-icons/fa";
import { AddIcon, RepeatIcon, CloseIcon } from "@chakra-ui/icons";
import { delay } from "../Utils/utils";
import moment from "moment";
import axios from "../__mocks__/axios";
import { Link } from "react-router-dom";

const Experiments = ({ experimentData }) => {
  //console.log("experiment data====", experimentData);
  const { isOpen, onToggle } = useDisclosure();
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDataSet, setSelectedDataSet] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    dataset: "",
    experimentname: "",
    experimentdescription: "",
  });

  const dataSelected = (selectedValue) => {
    //console.log("selected value===",selectedValue);
    setSelectedDataSet(selectedValue);
    setFormData({ ...formData, dataset: selectedValue });
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const footerClose = (status) => {
    modalRef.current.closeModal();
    setShowSelect(true);
    onToggle();
    //setCloseModalStatus(status);
  };

  const displaySelection = () => {
    setShowSelect(!showSelect);
  }

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("my form data====",formData);
    await axios
      .post("/saveexperiments",formData)
      .then(function (fetchedExperiments) {
        console.log("saved experiments",fetchedExperiments);
        //setUsecases(fetchedUseCases.data);
        //setLoading(false);
        
        modalRef.current.saveSuccess();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loadTableContent = () => {
    let rows = experimentData.map((experiment, i) => (
      <Tr>
        <Td fontSize="xs" width="12%">
          {experiment.id}
        </Td>
        <Td fontSize="xs" width="10%">
          {experiment.name}
        </Td>
        <Td fontSize="xs" width="8%">
          {experiment.dataset}
        </Td>
        <Td fontSize="xs" width="18%">
          {experiment.description}
        </Td>
        <Td fontSize="xs" width="12%">
          {experiment.target}
        </Td>
        <Td fontSize="xs" width="10%">
          {experiment.runtime}
        </Td>
        <Td fontSize="xs" width="19%">
          {experiment.status}
        </Td>
        <Td width="1%">
          <Icon as={FaFileAlt} color="linkedin.500" />
        </Td>
        <Td width="5%">
        <Link to='/dataexplore'>
          <Button
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
          </Button>
          </Link>
        </Td>
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
  useEffect(async () => {
    // This setTimeout is only for UI purposes (to see the spinner)
    await delay(1000);
    await axios
      .get("/getdataset")
      .then(function (fetchedDataset) {
        setDatasets(fetchedDataset.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
      //console.log("form data===",formData);
  }, []);
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
          rightIcon={
            <Box mr="10px">
              <FaPlus />
            </Box>
          }
          onClick={onToggle}
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
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="12%"
              >
                Experiment ID
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="15%"
              >
                Experiment Name
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="10%"
              >
                Dataset
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="18%"
              >
                Description
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="10%"
              >
                Target
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="10%"
              >
                Runtime
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="15%"
              >
                Status
              </Th>
              <Th
                textTransform="capitalize"
                fontWeight="medium"
                color="black"
                width="5%"
              >
                &nbsp;
              </Th>
              <Th width="5%">&nbsp;</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isOpen ? (
              <Tr backgroundColor="blue.50">
                <Td colSpan="9">
                  <Collapse in={isOpen} animateOpacity>
                    <Flex
                      width="100%"
                      backgroundColor="blue.50"
                      pt="10px"
                      pb="10px"
                    >
                      <Box width="10%">
                        <Text fontSize="sm">Experiment ID#</Text>
                      </Box>
                      <Box width="10%" ml="17px" mr="45px">
                        <Input
                          borderRadius={0}
                          border="1px"
                          placeholder="Enter Experiment Name"
                          fontSize="xs"
                          borderColor="blackAlpha.300"
                          backgroundColor="white"
                          onChange={changeHandler}
                          name="experimentname"
                        />
                      </Box>
                      <Box width="10%">
                        {/*<Button
                          variant="solid"
                          size="md"
                          borderRadius={0}
                          backgroundColor="whiteAlpha.900"
                          color="cyan.500"
                          border="1px"
                          borderColor="cyan.500"
                          fontWeight="normal"
                        >
                          SELECT
                        </Button>*/}
                        {selectedDataSet && showSelect ? (
                      <InputGroup width="90%">
                        <Input
                          size="md"
                          borderRadius={0}
                          bg="white"
                          fontSize="xs"
                          textTransform="capitalize"
                          defaultValue={selectedDataSet}
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
                        modalHeader={<ModalHeader/>}
                        modalBody={<ModalBody dataSet={datasets} onChange={dataSelected}/>}
                        size="6xl"
                        modalFooter={<ModalFooter selectedRow={selectedDataSet} closeModal={footerClose}/>}
                        modalCloseButton="true"
                        ref={modalRef}
                      />
                    )}
                        
                      </Box>
                      <Box width="15%">
                        <Input
                          borderRadius={0}
                          placeholder="Enter Experiment Description"
                          backgroundColor="whiteAlpha.900"
                          fontSize="xs"
                          onChange={changeHandler}
                          name="experimentdescription"
                        />
                      </Box>
                      <Box width="10%"/>
                      <Box width="10%"/>
                      <Box width="7%"/>
                      <Box width="10%" pl="59px">
                        <Button
                          variant="solid"
                          size="md"
                          borderRadius={0}
                          backgroundColor="red.500"
                          color="whiteAlpha.900"
                          onClick={(e) => handleSave(e)}
                        >
                          SAVE
                        </Button>
                        <CustomModal
                        showModalButtonText="SAVE"
                        modalBody={<SaveExperiment data={formData} closeModal={footerClose}/>}
                        size="xl"
                        buttonHandler="red.500"
                        colorScheme="white"
                        fontWeight="normal"
                        borderRadius={0}
                        border="0px"
                        modalFooter=""
                        showButton="false"
                        ref={modalRef}
                      />
                      </Box>
                      <Box width="10%" pl="26px">
                        <Button leftIcon={<CloseIcon size="sx" />} variant="outline" size="md" color="cyan.500" fontWeight="normal" border="0px" onClick={onToggle}>
                          CLOSE
                        </Button>
                      </Box>
                    </Flex>
                  </Collapse>
                </Td>
              </Tr>
            ) : (
              ""
            )}
            {experimentData ? loadTableContent() : ""}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Experiments;
