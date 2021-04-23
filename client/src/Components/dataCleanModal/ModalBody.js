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
  Checkbox
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

const ModalBody = ({ dataSet , onChange, textClean}) => {
  console.log("textClean====",textClean);
  const [loading, setLoading] = useState(true);
  const [datasetSelection, setDatasetSelection] = useState("");
  const [datasets, setDatasets] = useState([]);

  const setData = (datasetDetail) => {
    setDatasetSelection(datasetDetail);
    //console.log("data set selection=====",datasetSelection);
    onChange(datasetDetail);
  }

  const loadTableContent = () => {
    let rows;
    if(textClean){
      rows = dataSet.map((dataset, i) => (
        <Tr key={dataset.id}>
        <Td>{dataset.columnname}</Td>
        <Td textTransform="uppercase">{dataset.datatype}</Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        </Tr>
        ));
    }else{
      rows = dataSet.map((dataset, i) => (
        <Tr key={dataset.id}>
        <Td>{dataset.columnname}</Td>
        <Td textTransform="uppercase">{dataset.datatype}</Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        <Td><Checkbox colorScheme="green"></Checkbox></Td>
        </Tr>
        ));
    }
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
  }

  const loadHeadres = () => {
    if(textClean){
      return (
<Tr>
          <Th textTransform="capitalize">Column Name</Th>
          <Th textTransform="capitalize">Data Type</Th>
          <Th textTransform="capitalize">Lower Case</Th>
          <Th textTransform="capitalize">Drop Column</Th>
          <Th textTransform="capitalize">Stop Words</Th>
          <Th textTransform="capitalize">Punctuations</Th>
          <Th textTransform="capitalize">Special Character</Th>
        </Tr>
      )
    }else{
    return (
      <Tr>
          <Th textTransform="capitalize">Column Name</Th>
          <Th textTransform="capitalize">Data Type</Th>
          <Th textTransform="capitalize">Drop Column</Th>
          <Th textTransform="capitalize">Missing Value Input</Th>
          <Th textTransform="capitalize">Outier Handling</Th>
        </Tr>      
          )
    }
  }
  
  return (
    <RadioGroup>
    <Table variant="simple">
      <Thead backgroundColor="blackAlpha.50">
        {loadHeadres()}
      </Thead>
      <Tbody fontSize="sm">
      {loadTableContent()}
      </Tbody>
    </Table>
    </RadioGroup>
  );
};

export default ModalBody;
