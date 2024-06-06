import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          MyApp
        </Heading>
        <Box>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" height="80vh">
        <VStack spacing={4}>
          <Heading>Welcome to MyApp</Heading>
          <Text fontSize="xl">Your journey starts here.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;