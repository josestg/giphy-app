import React from "react";
import debounce from "lodash.debounce";

import {
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { GifItem, GiftList } from "../components";

export function SearchPage(props) {
  const [gifs, setGifs] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const keywordParams = new URLSearchParams(keyword).toString();
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=cl15uxxlaJNkx41SH105GNl0mAdB2M1J&q=${keywordParams}&limit=9&offset=0&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((body) =>
        body.data.map((item) => ({
          images: item.images,
          embedURL: item["embed_url"],
        }))
      )
      .then((images) => setGifs(images));
  }, [keyword]);

  // Stop the invocation of the debounced function
  // after unmounting
  React.useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  const changeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const debouncedChangeHandler = React.useMemo(
    () => debounce(changeHandler, 300),
    [setKeyword]
  );

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
          onChange={debouncedChangeHandler}
        />
      </Stack>
      <GiftList gifs={gifs} />
    </Flex>
  );
}
