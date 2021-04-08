import React, { useState, useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalFooter = ({ closeModal }) => {
  const closeModalWindow = () => {
    closeModal(true);
  }
  return (
    <Box
      backgroundColor="red.500"
      textAlign="center"
      borderRadius="d"
      width="100%"
      p={5}
      onClick={closeModalWindow}
    >
      <Text fontSize="2xl" color="whiteAlpha.900">
        OK TO CONTINUE
      </Text>
    </Box>
  );
};

export default ModalFooter;
