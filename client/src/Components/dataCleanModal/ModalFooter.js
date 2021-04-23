import React, { useState, useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalFooter = ({ closeModal, selectedRow, textClean, finalWindowClose}) => {
  const closeModalWindow = () => {
    closeModal(true);
  }
  const cleanComplete = () => {
    finalWindowClose(true);
  }
  let buttonLabel = textClean ? "TRANSFORM" : "CLEANING";
  let addititialText = textClean ? "Proceed with Data & Text Clean Only" : "Proceed with Data Clean Only";
  let functionRef = textClean ? cleanComplete : closeModalWindow;
  return (
    <Box mr="284px" paddingTop="41px" paddingBottom="50px">
    <Box
        backgroundColor="red.500"
        textAlign="center"
        borderRadius="d"
        width="100%"
        p={5}
        onClick={functionRef}
      >
        <Text fontSize="2xl" color="whiteAlpha.900">
        CONTINUE TO TEXT {buttonLabel}
        </Text>
      </Box>
      <Text color="messenger.500" fontSize="lg" ml="67px" mt="37px">
        {addititialText}
        </Text>
      </Box>
  );
};

export default ModalFooter;
