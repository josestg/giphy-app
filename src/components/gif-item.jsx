import React from "react";
import {
  Box,
  Flex,
  Image,
  Spinner,
  useClipboard,
  useToast,
} from "@chakra-ui/react";

export function GifItem({ url, embedURL }) {
  const [loaded, setLoaded] = React.useState(false);
  const { onCopy } = useClipboard(embedURL);
  const toast = useToast();

  const handleClick = React.useCallback(() => {
    onCopy();
    toast({
      status: "success",
      title: `copied`,
      variant: "left-accent",
      position: "top-right",
      isClosable: true,
    });
  }, [onCopy, toast]);

  return (
    <Box
      rounded="lg"
      width={["320px", "280px", "240px"]}
      height={["320px", "280px", "240px"]}
      padding="2"
      bgColor="purple.300"
      boxShadow="md"
      mx="auto"
    >
      <Image
        hidden={!loaded}
        rounded="lg"
        transition="transform 0.3s ease"
        height="100%"
        width="100%"
        src={url}
        _hover={{
          cursor: "copy",
          border: "8px",
          borderColor: "purple.600",
          transform: "rotate(8deg) scale(1.05)",
        }}
        _active={{
          cursor: "pointer",
          borderColor: "red.600",
        }}
        _pressed={{
          cursor: "pointer",
        }}
        onClick={handleClick}
        onLoad={() => setLoaded(true)}
        objectFit="cover"
      />

      {!loaded && (
        <Flex
          bgColor="gray.50"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <Spinner
            thickness="4px"
            speed={`${Math.random() / 10 + 0.8}s`}
            emptyColor="gray.200"
            color="purple.300"
            size="md"
            width="40%"
            height="40%"
          />
        </Flex>
      )}
    </Box>
  );
}
