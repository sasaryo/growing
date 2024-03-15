import React, { memo, FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { UpdateTodo } from "./UpdateTodo";
import { DeletedTodo } from "./DeletedTodo";

// sasaryo dev
import { DuplicateTodo } from "./DuplicateTodo";

type TodoProps = {
  id: number;
  item: string;
  getTodos: () => void;

  // sasaryo dev
  last_id:number;
};

export const Todo: FC<TodoProps> = memo(({ id, item, getTodos, last_id }) => (
  <Box>
    <Text>{item}</Text>
    <UpdateTodo id={id} item={item} getTodos={getTodos} />
    <DeletedTodo id={id} item={item} getTodos={getTodos} />

{/* sasaryo dev */}
    <DuplicateTodo id={id} item={item} getTodos={getTodos} last_id={last_id}/>

    
  </Box>
));
