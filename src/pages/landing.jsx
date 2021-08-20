import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Center, Flex, Heading, Image, Stack } from "@chakra-ui/react";

export function LandingPage({ logo }) {
  const history = useHistory();

  const handleAction = React.useCallback(
    (_, action) => {
      history.push(action);
    },
    [history]
  );

  return (
    <Center height="100vh">
      <Stack spacing="24" width="container.md">
        <Stack padding="8" align="center" spacing={[8, 12]}>
          <Heading as="h1" textAlign="center" size="4xl">
            Welcome to Your Giphy
          </Heading>
          <Image src={logo} w={[0.8, 0.6]} />
        </Stack>

        <Flex justify="center">
          <Stack spacing="4">
            <Button onClick={(e) => handleAction(e, "/iron-man")}>
              Iron Man Giphy
            </Button>
            <Button onClick={(e) => handleAction(e, "/search")}>
              Search Your Giphy
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </Center>
  );
}
