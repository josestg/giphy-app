import React from "react";
import { Flex } from "@chakra-ui/react";

import { GiftList, SearchInput } from "../components";
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
      <SearchInput onChange={(e) => updateKeyword(e.target.value)} />
      <GiftList gifs={gifs} />
    </Flex>
  );
}
