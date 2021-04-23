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
  Box,
  Collapse,
  Flex,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";

import {
  CopyIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  SettingsIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const CustomCollapse = forwardRef((props, ref) => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const buttonColor = props.buttonHandler ? props.buttonHandler : "";
  const color = props.colorScheme ? props.colorScheme : "linkedin.500";
  const border = props.border ? props.border : "1px";
  console.log("props.selectedModel====", props.selectedModel);
  useImperativeHandle(ref, () => ({
    closeModal() {
      onClose();
    },
    saveSuccess() {
      console.log("save button clicked", isOpen);
      //isOpen = true;
      onOpen();
    },
    doToggle() {
      console.log("save button clicked", isOpen);
      //isOpen = true;
      onToggle();
    },
  }));
  return (
    <Collapse in={isOpen} animateOpacity>
      <Box
        backgroundColor="orange.50"
        boxShadow="base"
        p="6"
        rounded="md"
        mt={5}
      >
        <Flex flexDirection="column" p={0}>
          <Text p={0} textAlign="left" fontSize="lg" pb={5}>
            Split Preference
          </Text>
          <Flex
            alignItems="space-between"
            justifyContent="space-between"
            pb={7}
          >
            <Box display="flex">
              <Input borderRadius={0} width="60px" mr={3} fontSize="xs" borderColor="blackAlpha.500"/>
              <Box>
                <Text fontSize="md">Training Data</Text>
                <Text fontSize="xs">
                  Place small information about this value
                </Text>
              </Box>
            </Box>
            <Box display="flex">
              <Input borderRadius={0} width="60px" mr={3} fontSize="xs" borderColor="blackAlpha.500"/>
              <Box>
                <Text fontSize="md">Testing Data</Text>
                <Text fontSize="xs">
                  Place small information about this value
                </Text>
              </Box>
            </Box>
            <Box display="flex">
              <Input borderRadius={0} width="60px" mr={3} fontSize="xs" borderColor="blackAlpha.500"/>
              <Box>
                <Text fontSize="md">Validation Data</Text>
                <Text fontSize="xs">
                  Place small information about this value
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
        {props.selectedModel && props.selectedModel=='automl'?(
           <Box borderTop="1px"
           borderColor="gray.200" pt={5}>
           <Text p={0} fontSize="lg" pb={5}>
             Algorithm
           </Text>
           <Flex alignItems="space-between" justifyContent="space-between">
             <Box display="flex" flexDirection="column">
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">Deep Learning (Neural Networks)</Text>
               </Checkbox>
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">Distributed Random Forest(DRF)</Text>
               </Checkbox>
               <Checkbox  size="lg">
                 <Text fontSize="sm">Generalised Linear Model(GLM)</Text>
               </Checkbox>
             </Box>
             <Box display="flex" flexDirection="column">
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">Generalised Additive Model(GAM)</Text>
               </Checkbox>
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">Gradient Boosting Machine</Text>
               </Checkbox>
               <Checkbox  size="lg">
                 <Text fontSize="sm">Rule Fit</Text>
               </Checkbox>
             </Box>
             <Box display="flex" flexDirection="column">
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">Support Vector Machine(SVM)</Text>
               </Checkbox>
               <Checkbox  pb={3} size="lg">
                 <Text fontSize="sm">XG Boost</Text>
               </Checkbox>
             </Box>
           </Flex>
         </Box>
        ):''}
      </Box>
    </Collapse>
  );
});

export default CustomCollapse;
