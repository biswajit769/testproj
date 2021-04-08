import React, { useState, useEffect } from 'react';
import { Flex, Box, Image, FormLabel, Text, Radio , RadioGroup} from "@chakra-ui/react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UseCaseTypes = ({ addChoreLog }) => {
  const [usecaseType, setUsecaseType] = useState("regression");
  
  useEffect(() => {
    addChoreLog(usecaseType)
  }, [usecaseType]);
  return (
    <RadioGroup defaultValue="regression">
    <Flex p={10}>
      <Box width="33%" 
      py="10" 
      bg={usecaseType === 'regression'?'pink.50':undefined} boxShadow={usecaseType === 'regression'?'xl':undefined}
      borderRadius="md"
      border={10}>
        <Box display="block">
          <Image
            height="100px"
            width={200}
            src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg"
            ml={12}
          />
        </Box>
        <Box>
          <FormLabel
            textAlign="center"
            pt={6}
            fontSize="xl"
            fontWeight="normal"
          >
            Regression
          </FormLabel>
          <Text
            textAlign="center"
            m="20px"
            fontSize="sm"
            lineHeight="2"
            noOfLines={5}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Radio
            size="lg"
            value="regression"
            name="usecasetype"
            onChange={(e) => setUsecaseType(e.target.value)}
          >
            <Text fontSize="xl" fontWeight="normal">
              SELECT
            </Text>
          </Radio>
        </Box>
      </Box>
      <Box width="33%" 
      py="10" 
      bg={usecaseType === 'classification'?'pink.50':undefined} boxShadow={usecaseType === 'classification'?'xl':undefined}
      borderRadius="md">
        <Box display="block">
          <Image
            height="100px"
            width={200}
            src="https://i.stack.imgur.com/HUufp.png"
            textAlign="center"
            ml={12}
          />
        </Box>
        <Box>
          <FormLabel
            textAlign="center"
            pt={6}
            fontSize="xl"
            fontWeight="normal"
          >
            Classification
          </FormLabel>
          <Text
            textAlign="center"
            m="20px"
            fontSize="sm"
            lineHeight="2"
            noOfLines={5}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" fontWeight="bold">
          <Radio
            size="lg"
            value="classification"
            name="usecasetype"
            onChange={(e) => setUsecaseType(e.target.value)}
          >
            <Text fontSize="xl" fontWeight="normal">
              SELECT
            </Text>
          </Radio>
        </Box>
      </Box>
      <Box width="33%" 
      py="10" 
      bg={usecaseType === 'clustering'?'pink.50':undefined} boxShadow={usecaseType === 'clustering'?'xl':undefined}
      borderRadius="md">
        <Box display="block">
          <Image
            height="100px"
            width={200}
            src="https://www.researchgate.net/profile/Mario-Vento/publication/262524340/figure/fig4/AS:669296514580502@1536584132533/An-example-of-graph-clustering-in-the-second-meaning-graph-based-clustering-the.png"
            ml={12}
          />
        </Box>
        <Box>
          <FormLabel
            textAlign="center"
            pt={6}
            fontSize="xl"
            fontWeight="normal"
          >
            Clustering
          </FormLabel>
          <Text
            textAlign="center"
            m="20px"
            fontSize="sm"
            lineHeight="2"
            noOfLines={5}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" fontWeight="bold">
          <Radio
            size="lg"
            value="clustering"
            name="usecasetype"
            onChange={(e) => setUsecaseType(e.target.value)}
          >
            <Text fontSize="xl" fontWeight="normal">
              SELECT
            </Text>
          </Radio>
        </Box>
      </Box>
    </Flex>
    </RadioGroup>
  );
};

export default UseCaseTypes;
