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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CustomModal = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonColor = props.buttonHandler?props.buttonHandler:"";
  const color = props.colorScheme?props.colorScheme:"linkedin.500";
  const border = props.border?props.border:"1px";
  console.log("color====",color);
  useImperativeHandle(ref, () => ({
    closeModal() {
      onClose();
    },
  }));
  return (
    <div>
      <Button
        variant="solid"
        size="md"
        borderRadius={0}
        fontWeight="normal"
        color={color}
        onClick={onOpen}
        border={border}
        borderColor="linkedin.500"
        backgroundColor={buttonColor}
      >
        {props.showModalButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={props.size}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader textAlign="center" fontSize="3xl" fontWeight="normal">
            {props.modalHeader}
          </ModalHeader>
          {props.modalCloseButton?(
            <ModalCloseButton />
          ):""}
          <ModalBody>{props.modalBody}</ModalBody>
          <ModalFooter>{props.modalFooter}</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
});

export default CustomModal;
