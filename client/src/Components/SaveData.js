import React from 'react'
import { ChakraProvider, Box, Icon, Text, Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const SaveData = () => (
    <Box backgroundColor="whiteAlpha.900">
      <Box display="grid" flexDirection="column" justifyContent="center">
        <CheckCircleIcon boxSize={12} color="teal.600" />
      </Box>
      <Box>
        <Text textAlign="center" fontSize="2xl" color="teal.600" mb="20px">
          Use case successfully created
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
            Use case ID
          </Text>
          <Text textAlign="center" fontSize="2xl">
            Prj_UC01_103
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
        >
          OK
        </Button>
      </Box>
    </Box>
)

export default SaveData