import { Avatar, Flex } from "@optiaxiom/react";

export function App() {
  return (
    <Flex flexDirection="row" flexWrap="wrap">
      <Avatar>KP</Avatar> {/* Neutral is default */}
      <Avatar colorScheme="red">KP</Avatar>
      <Avatar colorScheme="blue">KP</Avatar>
      <Avatar colorScheme="green">KP</Avatar>
      <Avatar colorScheme="yellow">KP</Avatar>
      <Avatar colorScheme="magenta">KP</Avatar>
      <Avatar colorScheme="purple">KP</Avatar>
      <Avatar colorScheme="cyan">KP</Avatar>
    </Flex>
  );
}
