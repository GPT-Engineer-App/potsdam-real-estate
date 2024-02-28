import React from "react";
import { Box, Container, Heading, Text, Stack, Image, SimpleGrid, Button, Icon, Flex } from "@chakra-ui/react";
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={8}>
        {/* Hero section */}
        <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }}>
          <Box>
            <Heading as="h1" size="xl" mb={4}>
              Discover Your Dream Home in Potsdam
            </Heading>
            <Text fontSize="lg" mb={4}>
              Explore the finest properties in the heart of Brandenburg, Germany.
            </Text>
            <Button leftIcon={<FaHome />} colorScheme="teal" variant="solid">
              Browse Listings
            </Button>
          </Box>
          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3RzZGFtJTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHx8fDE3MDkxMTkyMDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Potsdam Real Estate" />
          </Box>
        </Flex>
        {/* Features section */}
        <Box>
          <Heading as="h2" size="lg" mb={6}>
            Why Choose Potsdam Real Estate?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature icon={<FaHome />} title="Prime Locations" text="Properties situated in the most desirable locations of Potsdam." />
            <Feature icon={<FaHome />} title="Expert Agents" text="Experienced agents to guide you through every step of the process." />
            <Feature icon={<FaHome />} title="Customer Satisfaction" text="Commitment to exceeding expectations and ensuring a smooth transaction." />
          </SimpleGrid>
        </Box>
        {/* Contact section */}
        <Box>
          <Heading as="h2" size="lg" mb={6}>
            Get in Touch
          </Heading>
          <Stack spacing={3} direction="row" align="center">
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="ghost">
              info@potsdamrealestate.com
            </Button>
            <Button leftIcon={<FaPhoneAlt />} colorScheme="green" variant="ghost">
              +49 123 456 7890
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const Feature = ({ icon, title, text }) => (
  <Box textAlign="center">
    <Icon as={icon} w={10} h={10} mb={4} color="teal.500" />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text color="gray.600">{text}</Text>
  </Box>
);

export default Index;
