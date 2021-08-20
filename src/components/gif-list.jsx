import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { GifItem } from "./gif-item";

export function GiftList({ gifs }) {
  return (
    <SimpleGrid w="100%" mx="auto" columns={[1, 3]} spacing={8}>
      {gifs.map((gif) => {
        const { url } = gif.images["fixed_height"];
        return <GifItem key={url} url={url} embedURL={gif.embedURL} />;
      })}
    </SimpleGrid>
  );
}
