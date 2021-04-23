import React from "react";
import { Flex, useColorMode, Text, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import lightBackground from "../Assets/advanced-ai-anatomy-artificial.jpeg";
import darkBackground from "../Assets/landing_background_dark.jpg";

import { CopyIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  FaHome
} from "react-icons/fa";

const CommonBackground = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="initial"
      justify="initial"
      direction="column"
      flex="1"
      minHeight="92vh"
      marginTop="8vh"
      background="blackAlpha.100"
      bgPosition="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundAttachment="fixed"
      px="14px"
    >
      <Flex mt={7} borderBottom="1px" borderColor="blackAlpha.500" pb={2}>
        <Link to="/usecases">
          <Icon as={FaHome} color="blue.500" ml={3} mt="-13px"/>
        </Link>
        <ChevronRightIcon ml={2} color="blue.500" />
        <Text fontWeight="bold" fontSize="sm" ml={2} mt="-2px">
          Use Cases
        </Text>
      </Flex>
      {children}
    </Flex>
  );
};

CommonBackground.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CommonBackground;
