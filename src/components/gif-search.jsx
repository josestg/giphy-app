import React from "react";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchInput({ onChange }) {
  return (
    <Stack
      w="100%"
      padding={[2, 6, 8]}
      mt="4"
      mb="12"
      minWidth="max-content"
      spacing="6"
    >
      <InputGroup>
        <Input
          variant="filled"
          placeholder="Search here..."
          onChange={onChange}
        />
        <InputRightElement children={<SearchIcon color="purple.500" />} />
      </InputGroup>
    </Stack>
  );
}
