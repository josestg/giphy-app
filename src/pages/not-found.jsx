import React from "react";
import { Center, Heading, Image, Stack } from "@chakra-ui/react";
import { useGiphySearchAPI } from "../hooks";

export function NotFoundPage() {
  const { gifs } = useGiphySearchAPI("404", 0, 1);

  return (
    <Center height="100vh">
      <Stack align="center">
        {gifs && gifs[0] && gifs[0].images["fixed_height"] && (
          <Image src={gifs[0].images["fixed_height"].url} />
        )}
        <Heading as="h1" textAlign="center" size="2xl">
          Page Not Found
        </Heading>
      </Stack>
    </Center>
  );
}
