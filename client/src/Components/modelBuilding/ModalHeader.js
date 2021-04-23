import React, { useState, useEffect } from "react";
import { Button, Box, Text, Flex, ChakraProvider } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalHeader = ({ closeModal }) => {
  const closeModalWindow = () => {
    closeModal(true);
  }
  return (
    <Box>
      <Text fontSize="3xl" textAlign="left">
        Experiment Feature Selection
      </Text>
      <Text fontSize="md" textAlign="left">
        Select columns for experiment
      </Text>
    </Box>
  );
};

export default ModalHeader;
