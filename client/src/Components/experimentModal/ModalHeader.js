import React, { useState, useEffect } from "react";
import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalHeader = ({ closeModal }) => {
  const closeModalWindow = () => {
    closeModal(true);
  }
  return (
    <Flex mb={5}>
      <Text fontSize="3xl">Select from below dataset or </Text>
      <Button
        variant="solid"
        size="md"
        borderRadius={0}
        color="blue.500"
        backgroundColor="whiteAlpha.900"
        mt={2}
        ml={2}
        fontWeight="normal"
        border="1px"
        borderColor="blue.500"
      >
        UPLOAD NEW DATASET
      </Button>
    </Flex>
  );
};

export default ModalHeader;
