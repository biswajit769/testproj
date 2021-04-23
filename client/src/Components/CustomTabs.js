import React, { forwardRef, useRef, useImperativeHandle } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  chakra,
  useTab,
  useStyles,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Flex,
  TableCaption,
  Text
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaCloudDownloadAlt } from "react-icons/fa";

function CustomTabs() {
  // 1. Reuse the styles for the Tab
  const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });

  const CustomTab = React.forwardRef((props, ref) => {
    // 2. Reuse the `useTab` hook
    const tabProps = useTab(props);

    const isSelected = !!tabProps["aria-selected"];

    // 3. Hook into the Tabs `size`, `variant`, props
    let styles = useStyles();

    styles["tab"]._selected["borderBottom"] = "4px solid red";
    styles["tab"].color = "blackAlpha.600";
    styles["tab"]._selected["color"] = "blackAlpha.900";
    //styles['tab']._selected['borderColor'] = "red";
    console.log("tab props====", styles.tab);
    return (
      <StyledTab __css={styles.tab} {...tabProps}>
        {tabProps.children}
      </StyledTab>
    );
  });

  return (
    <Tabs>
      <TabList>
        <CustomTab>PREDICTION</CustomTab>
        <CustomTab>DETAILS</CustomTab>
        <CustomTab>TOP 5 HIT RATIO</CustomTab>
        <CustomTab>CONFUSION MATRIX</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel backgroundColor="whiteAlpha.900">
          <Box>
            <Flex
              alignItems="flex-end"
              justifyContent="flex-end"
              p={3}
              pt={0}
              backgroundColor="whiteAlpha.900"
            >
              <Button
                variant="ghost"
                size="md"
                borderRadius={0}
                fontSize="sm"
                color="messenger.500"
                fontWeight="normal"
                leftIcon={<FaCloudDownloadAlt />}
              >
                Download Prediction
              </Button>
            </Flex>
            <Table variant="striped" colorScheme="blackAlpha">
              <Thead backgroundColor="blackAlpha.400">
                <Tr height="46px">
                  <Th textTransform="capitalize">Info</Th>
                  <Th textTransform="capitalize">Field1</Th>
                  <Th textTransform="capitalize">Field2</Th>
                  <Th textTransform="capitalize">Field3</Th>
                  <Th textTransform="capitalize">Field4</Th>
                  <Th textTransform="capitalize">Field5</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr fontSize="xs">
                  <Td textTransform="capitalize">Info</Td>
                  <Td textTransform="capitalize">Field1</Td>
                  <Td textTransform="capitalize">Field2</Td>
                  <Td textTransform="capitalize">Field3</Td>
                  <Td textTransform="capitalize">Field4</Td>
                  <Td textTransform="capitalize">Field5</Td>
                </Tr>
                <Tr fontSize="xs">
                  <Td textTransform="capitalize">Info</Td>
                  <Td textTransform="capitalize">Field1</Td>
                  <Td textTransform="capitalize">Field2</Td>
                  <Td textTransform="capitalize">Field3</Td>
                  <Td textTransform="capitalize">Field4</Td>
                  <Td textTransform="capitalize">Field5</Td>
                </Tr>
                <Tr fontSize="xs">
                  <Td textTransform="capitalize">Info</Td>
                  <Td textTransform="capitalize">Field1</Td>
                  <Td textTransform="capitalize">Field2</Td>
                  <Td textTransform="capitalize">Field3</Td>
                  <Td textTransform="capitalize">Field4</Td>
                  <Td textTransform="capitalize">Field5</Td>
                </Tr>
                <Tr fontSize="xs">
                  <Td textTransform="capitalize">Info</Td>
                  <Td textTransform="capitalize">Field1</Td>
                  <Td textTransform="capitalize">Field2</Td>
                  <Td textTransform="capitalize">Field3</Td>
                  <Td textTransform="capitalize">Field4</Td>
                  <Td textTransform="capitalize">Field5</Td>
                </Tr>
                <Tr fontSize="xs">
                  <Td textTransform="capitalize">Info</Td>
                  <Td textTransform="capitalize">Field1</Td>
                  <Td textTransform="capitalize">Field2</Td>
                  <Td textTransform="capitalize">Field3</Td>
                  <Td textTransform="capitalize">Field4</Td>
                  <Td textTransform="capitalize">Field5</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </TabPanel>
        <TabPanel backgroundColor="whiteAlpha.900">
        <Flex
              alignItems="flex-end"
              justifyContent="flex-end"
              p={3}
              pt={0}
              backgroundColor="whiteAlpha.200"
            >
              <Button
                variant="ghost"
                size="md"
                borderRadius={0}
                fontSize="sm"
                color="messenger.500"
                fontWeight="normal"
                leftIcon={<FaCloudDownloadAlt />}
              >
                Download Prediction
              </Button>
            </Flex>
          <Flex justifyContent="space-between" alignItems="space-between">
            <Box p={3}>
              <Box pb={7}>
                <Text fontSize="sm">Model</Text>
                <Text fontSize="xl">DRF_1_HSBCAutoML_20201029_095658</Text>
              </Box>
              <Box pb={7}>
                <Text fontSize="sm">Predictions</Text>
                <Text fontSize="xl">
                  prediction_74e8fd55-04ba-40e0-89c7-00d9d6ecbabf
                </Text>
              </Box>
              <Box pb={7}>
                <Text fontSize="sm">R2</Text>
                <Text fontSize="xl">0.987654</Text>
              </Box>
            </Box>
            <Box p={3}>
              <Box pb={7}>
                <Text fontSize="sm">Test Data</Text>
                <Text fontSize="xl">CMB_Testing_data</Text>
              </Box>
              <Box pb={7}>
                <Text fontSize="sm">MSE</Text>
                <Text fontSize="xl">0.117849</Text>
              </Box>
            </Box>
            <Box p={3}>
              <Box pb={7}>
                <Text fontSize="sm">Model Category</Text>
                <Text fontSize="xl">Multinominal</Text>
              </Box>
              <Box pb={7}>
                <Text fontSize="sm">RMSE</Text>
                <Text fontSize="xl">0.343292</Text>
              </Box>
            </Box>
            <Box p={3}>
              <Box pb={7}>
                <Text fontSize="sm">Scoring Time</Text>
                <Text fontSize="xl">127 seconds</Text>
              </Box>
              <Box pb={7}>
                <Text fontSize="sm">Logos</Text>
                <Text fontSize="xl">0.393859</Text>
              </Box>
            </Box>
          </Flex>
        </TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default CustomTabs;
