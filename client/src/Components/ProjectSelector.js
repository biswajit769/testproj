import React from 'react'
import {
  ChakraProvider,
  Box,
  FormLabel,
  Flex,
  Input,
  Select,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ProjectSelector = () => (
  <ChakraProvider resetCSS>
    <Box
      backgroundColor="twitter.50"
      p="40px"
      width="600px"
      borderRadius="10px"
      marginLeft="120vh"
      marginBottom="10vh"
      borderRightRadius={0}
    >
      <FormLabel fontSize="lg" fontWeight="bold">
        Select project to continue
      </FormLabel>
      <Flex
        border="1px"
        opacity={1}
        variant="outline"
        pl="4px"
        borderColor="blackAlpha.100"
      >
        <Input placeholder="Project Name" variant="unstyled" />
        <Select icon={<ChevronDownIcon />} variant="unstyled" size="md" />
      </Flex>
      <Button
        variant="solid"
        size="md"
        colorScheme="whiteAlpha"
        backgroundColor="red.500"
        border={0}
        borderRadius={0}
        mt="25px"
      >
        CONTINUE
      </Button>
    </Box>
  </ChakraProvider>
)

export default ProjectSelector