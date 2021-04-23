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
  RadioGroup
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

const ModalBody = ({ dataSet , onChange}) => {
  const [loading, setLoading] = useState(true);
  const [datasetSelection, setDatasetSelection] = useState("");
  const [datasets, setDatasets] = useState([]);

  const setData = (datasetDetail) => {
    setDatasetSelection(datasetDetail);
    //console.log("data set selection=====",datasetSelection);
    onChange(datasetDetail);
  }

  const loadTableContent = () => {
    let rows = dataSet.map((dataset, i) => (
    <Tr key={dataset.id}>
    <Td><Radio name="selecteditem" onClick={() => setData(dataset.dataset)}></Radio></Td>
    <Td>{dataset.dataset}</Td>
    <Td>{dataset.gbgf}</Td>
    <Td>{dataset.sl}</Td>
    <Td isNumeric>{dataset.rows}</Td>
    <Td isNumeric>{dataset.column}</Td>
    <Td>{dataset.uploaded}</Td>
    <Td isNumeric color="linkedin.500"><FaEye color="linkedin.500" /></Td>
    <Td isNumeric color="linkedin.500"><FaTrashAlt color="linkedin.500" /></Td>
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
  }

  
  return (
    <RadioGroup>
    <Table variant="simple">
      <Thead backgroundColor="blackAlpha.50">
        <Tr>
          <Th textTransform="capitalize">Select</Th>
          <Th textTransform="capitalize">Dataset</Th>
          <Th textTransform="capitalize">GB/GF</Th>
          <Th textTransform="capitalize">SL</Th>
          <Th isNumeric textTransform="capitalize">Rows</Th>
          <Th isNumeric textTransform="capitalize">Column</Th>
          <Th textTransform="capitalize">Uploaded</Th>
          <Th isNumeric textTransform="capitalize">&nbsp;</Th>
          <Th isNumeric textTransform="capitalize">&nbsp;</Th>
        </Tr>
      </Thead>
      <Tbody fontSize="sm">
      {dataSet && loadTableContent()}
      </Tbody>
    </Table>
    </RadioGroup>
  );
};

export default ModalBody;
