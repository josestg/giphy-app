import React from "react";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";

import { GiftList } from "../components";
import { useGiphySearchAPI } from "../hooks";

export function IronManPage() {
  const [page, setPage] = React.useState(0);
  const { gifs } = useGiphySearchAPI("Iron Man", page * 9, 9);

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
        <Heading as="h1" size="3xl" textAlign="center">
          Iron Man Giphy
        </Heading>

        <Flex justify="space-between">
          <Button
            disabled={page <= 0}
            onClick={() => setPage((page) => page - 1)}
          >
            Prev
          </Button>
          <Button onClick={() => setPage((page) => page + 1)}>Next</Button>
        </Flex>
      </Stack>
      <GiftList gifs={gifs} />
    </Flex>
  );
}
