import React, { useState, useEffect } from "react";
import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalHeader = ({ closeModal, textClean }) => {
  const closeModalWindow = () => {
    closeModal(true);
  }
  let textLabel = textClean ? "Text":"Data";
  return (
    <Flex p={5}>
      <Box>
        <Text fontSize="3xl">{textLabel} Cleaning of</Text>
      </Box>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" pl={2}>
          CMB_H1
        </Text>
      </Box>
    </Flex>
  );
};

export default ModalHeader;
