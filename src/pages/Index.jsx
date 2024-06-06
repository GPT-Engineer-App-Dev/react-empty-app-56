import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold" color="teal.500">Hello World</Text>
        <Text fontSize="xl" color="gray.600">Welcome to your new React application!</Text>
      </VStack>
    </Container>
  );
};

export default Index;