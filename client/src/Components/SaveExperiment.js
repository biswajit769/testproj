import React from "react";
import { ChakraProvider, Box, Icon, Text, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const SaveData = ({ closeModal,data }) => {
  const closeModalWindow = () => {
    closeModal(true);
  };
  return (
    <Box backgroundColor="whiteAlpha.900">
      <Box display="grid" flexDirection="column" justifyContent="center">
        <CheckCircleIcon boxSize={12} color="teal.600" />
      </Box>
      <Box>
        <Text textAlign="center" fontSize="2xl" color="teal.600" mb="20px">
          Experiment Created Successfully
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          backgroundColor="yellow.50"
          width="50%"
          pt="30px"
          pb="30px"
          display="block"
          justifyContent="center"
          alignItems="center"
        >
          <Text textAlign="center" fontSize="xl" mb="5px">
            Experiment ID
          </Text>
          <Text textAlign="center" fontSize="2xl">
            {data.dataset}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt="20px"
      >
        <Button
          variant="solid"
          size="lg"
          backgroundColor="red.500"
          color="whiteAlpha.900"
          borderRadius={0}
          display="block"
          onClick={closeModalWindow}
        >
          CONITUE WITH DATA EXPLORATION
        </Button>
      </Box>
      <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
      <Text color="blue.500" fontSize="lg">
        No I will do it later
      </Text>
    </Box>

    </Box>
  );
};

export default SaveData;
