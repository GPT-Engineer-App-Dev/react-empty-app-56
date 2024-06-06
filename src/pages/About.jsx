import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to MyApp! We are dedicated to providing the best service possible.
      </Text>
    </Box>
  );
};

export default About;