import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Radio,
  RadioGroup,
  Checkbox,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { delay } from "../../Utils/utils";
import moment from "moment";
import axios from "../../__mocks__/axios";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  FaSearch,
  FaEdit,
  FaEye,
  FaPencilAlt,
  FaTrashAlt,
} from "react-icons/fa";

import { Search2Icon } from "@chakra-ui/icons";

const ModalBody = ({ dataSet, onChange }) => {
  console.log("my data=====",dataSet);
  const [loading, setLoading] = useState(true);
  const [datasetSelection, setDatasetSelection] = useState("");
  const [datasets, setDatasets] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [individualSelection, setIndividualSelection] = useState([]);

  const setData = (datasetDetail) => {
    setDatasetSelection(datasetDetail);
    //console.log("data set selection=====",datasetSelection);
    onChange(datasetDetail);
  };

  const searchColumns = (e) => {
    setSearchText(e.target.value);
  };

  const setCheckedAll = (e) => {
    console.log("all checked===",e.target);
  }

  useEffect(() => {
    //document.title = `You clicked ${count} times`;
    onChange(individualSelection);
  },[individualSelection]);

  const checkIndividual = (ind) => {
    if(individualSelection.includes(ind)){
      let filtered = individualSelection.filter(function(value, index, arr){ 
        return value !== ind;
      });
      setIndividualSelection(filtered)
    }else{
      setIndividualSelection(oldArray => [...oldArray, ind]);
    }
    //console.log("all array====",individualSelection);
  }

  const loadTableContent = () => {
    let rows = dataSet
    .filter(
      (column) =>
        //search for book titles
        column.dataset.toLowerCase().includes(searchText.toLowerCase()) ||
        //or if the search bar is empty show all
        searchText === ''
    ).map((data, i) => (
      <Flex py={2} borderBottom="1px" borderColor="blackAlpha.500">
        <Checkbox size="lg" ml="8px" isChecked={individualSelection.includes(data.dataset)} value={data.dataset} onChange={(e) => checkIndividual(e.target.value)}></Checkbox>
        <Text
          fontSize="sm"
          textAlign="left"
          lineHeight="41px"
          fontWeight="normal"
          ml="115px"
        >
          {data.dataset}
        </Text>
      </Flex>
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
    <Box>
      <Flex p={2} backgroundColor="blackAlpha.300">
        <Checkbox size="lg" mr={5} fontSize="sx" width="115px" onChange={(e) => setSelectAll(e.target.checked)} isChecked={selectAll}>
          <Text fontSize="sm" textAlign="left" fontWeight="medium">
            Select All
          </Text>
        </Checkbox>
        <Text
          fontSize="sm"
          textAlign="left"
          lineHeight="41px"
          fontWeight="medium"
        >
          Dataset
        </Text>
        <InputGroup ml="89px" mt={1} size="sm" width="54%">
          <Input
            placeholder="Search Dataset"
            borderRadius={0}
            backgroundColor="white"
            onChange={(e) => searchColumns(e)}
          />
          <InputRightElement>
            <Search2Icon name="email" color="messenger.500" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      {dataSet && loadTableContent()}
    </Box>
  );
};

export default ModalBody;
