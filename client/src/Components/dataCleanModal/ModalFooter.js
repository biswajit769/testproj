import React, { useState, useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModalFooter = ({ closeModal, selectedRow, textClean, finalWindowClose, dataClean, dataTextClean, goToTextTransform, textTransformation, cleanDataTextTexttransform, onlyTextClean, onlyCleanText, cleanTextTextTransform, onlyTextTransform, onlyTextTransformClean}) => {
  
  console.log("onlyTextTransform=======",onlyTextTransform);
  //console.log("onlyTextTransform=======",onlyTextTransform);
  const closeModalWindow = () => {
    closeModal(true);
  }

  const navigateToTextTransform = () => {
    goToTextTransform(true);
  }

  const cleanComplete = () => {
    finalWindowClose(true);
  }

  const cleanData = () => {
    dataClean(true);
  }

  const cleanAll = () => {
    cleanDataTextTexttransform(true)
  }

  const dataTextCleanUp = () => {
    dataTextClean(true);
  }
  const onlyTextCleanup = () => {
    onlyCleanText(true)
  }

  const cleanTextTransform = () => {
    cleanTextTextTransform(true)
  }

  const textTransFormOnly = () => {
    onlyTextTransformClean(true)
  }
  let buttonLabel = textClean ? "TRANSFORM" : "CLEANING";
  let addititialText = textClean ? onlyTextClean? "Proceed with Text Clean Only":"Proceed with Data & Text Clean Only" : textTransformation?(onlyTextClean && textTransformation)?"Proceed with Text Clean and Text Transformation":onlyTextTransform?"Proceed with Data Transformation Only":"Proceed with Data & Text Clean with Text Transformation":"Proceed with Data Clean Only";
  let functionRef = textClean ? navigateToTextTransform : closeModalWindow;
  let addFunctionRef = textClean ? onlyTextClean?onlyTextCleanup: dataTextCleanUp : textTransformation ? (onlyTextClean && textTransformation) ? cleanTextTransform : onlyTextTransform?textTransFormOnly:cleanAll : cleanData;
  return (
    <Box mr="284px" paddingTop="41px" paddingBottom="50px">
    <Box
        backgroundColor="red.500"
        textAlign="center"
        borderRadius="d"
        width="100%"
        p={5}
        onClick={functionRef}
        display={textTransformation ? 'none' : "block"}
      >
        <Text fontSize="2xl" color="whiteAlpha.900">
        CONTINUE TO TEXT {buttonLabel}
        </Text>
      </Box>
      <Text color="messenger.500" fontSize="lg" ml="67px" mt="37px" onClick={addFunctionRef} cursor="pointer">
        {addititialText}
        </Text>
      </Box>
  );
};

export default ModalFooter;
