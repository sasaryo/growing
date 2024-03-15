//sasaryo dev
//新規コンポーネントを作成


import React, { memo, FC, useCallback } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

//propsの定義
type DuplicateTodoProps = {
    id: number;
    item: string;
    getTodos: () => void;
    last_id:number;
  };

export const DuplicateTodo: FC<DuplicateTodoProps> = memo(({ id, item, getTodos, last_id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const API_URL = process.env.REACT_APP_API_URL;
  
    const onClickModalOpen = useCallback(() => onOpen(), []);


    const onClickDuplicateTodo = () => {  
      const newTodo = {
        id: last_id + 1,
        summary: item,
      };
  
      fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then(() => {
          getTodos();
          onClose();
        })
        .catch(() => {
          alert("Unknown error occurred while adding todo");
        });
  
    };

    


//描写内容
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Task Duplicate</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack>
                  <FormControl>
                    <FormLabel>duplicate this task?</FormLabel>
                    <FormHelperText>{item}</FormHelperText>
                  </FormControl>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => onClickDuplicateTodo(id)}>Done</Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <Button mr="2" onClick={onClickModalOpen}>Duplicate</Button>
      </>
    );
  });
  

