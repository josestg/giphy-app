import React from "react";

import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { GiftList } from "../components";

export function IronManPage(props) {
  const [gifs, setGifs] = React.useState([]);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=cl15uxxlaJNkx41SH105GNl0mAdB2M1J&q=Iron+Man&limit=9&offset=${Math.max(
        0,
        page * 9
      )}&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((body) =>
        body.data.map((item) => ({
          images: item.images,
          embedURL: item["embed_url"],
        }))
      )
      .then((images) => setGifs(images));
  }, [page]);

  return (
    <Flex
      mx="auto"
      p={[2, 6, 8]}
      w={["100%", "75%"]}
      border="1px"
      align="center"
      direction="column"
    >
      <Stack
        w="100%"
        border="1px"
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
          <Button onClick={() => setPage((page) => page - 1)}>Prev</Button>
          <Button onClick={() => setPage((page) => page + 1)}>Next</Button>
        </Flex>
      </Stack>
      <GiftList gifs={gifs} />
    </Flex>
  );
}
