import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        Feel free to reach out to us at contact@myapp.com.
      </Text>
    </Box>
  );
};

export default Contact;