import React from "react";
import { Flex, Input, Stack } from "@chakra-ui/react";

import { GiftList } from "../components";
import { useGiphySearchAPI } from "../hooks";

export function SearchPage(props) {
  const { gifs, updateKeyword } = useGiphySearchAPI("", 0, 9);

  return (
    <Flex
      mx="auto"
      p={[2, 6, 8]}
      w={["100%", "75%"]}
      align="center"
      direction="column"
    >
      <Stack
        w="100%"
        padding={[2, 6, 8]}
        mt="4"
        mb="12"
        minWidth="max-content"
        spacing="6"
      >
        <Input
          variant="filled"
          placeholder="Search here..."
          onChange={(e) => updateKeyword(e.target.value)}
        />
      </Stack>
      <GiftList gifs={gifs} />
    </Flex>
  );
}
