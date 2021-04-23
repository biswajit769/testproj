import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import completed from '../Assets/Flat_tick_icon.svg';

import Stepper from "./Stepper/index";

import {
  FaSearch,
  FaEdit,
  FaEye,
  FaPencilAlt,
  FaCheck,
} from "react-icons/fa";

const StepperContainer = ({ activeStep }) => {
  const { colorMode } = useColorMode();
//console.log("icons=====",<FaCheck/>);
const newicons = <FaCheck/>;
  return (
    <Flex
      borderRadius="md"
      mt={1}
      position="relative"
      top={["15px", "15px", "34px", "34px"]}
      width="100%"
      backgroundColor="white"
      border="2px"
      borderColor="blackAlpha.200"
      paddingBottom="5px"
    >
      <Stepper
        steps={[
          { title: "DATA INGESTION"},
          { title: "DATA EXPLORATION" },
          { title: "DATA PREPROCESSING" },
          { title: "MODEL BUILDING" },
          { title: "PREDICTION" },
          { title: "MODEL INTERPRETATION" },
          { title: "DEPLOYMENT" },
        ]}
        activeStep={activeStep}
        size={20}
        circleFontSize={10}
        circleFontColor="#000"
        titleFontSize={10}
        activeColor="#FFF"
        completeColor="#008900"
        circleTop={10}
        titleTop={0}
        activeBorderColor="#000"
        completeBarColor="#008900"
        defaultBorderWidth={1}
        activeTitleColor="#008900"
        completeTitleColor="#008900"
        completeIcon={completed}
      />
    </Flex>
  );
};

export default StepperContainer;
