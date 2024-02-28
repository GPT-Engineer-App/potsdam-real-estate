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
              Discover Premium Business Spaces in Potsdam
            </Heading>
            <Text fontSize="lg" mb={4}>
              Find the ideal office rooms, day hospitals, and corporate spaces in Brandenburg, Germany.
            </Text>
            <Button leftIcon={<FaHome />} colorScheme="teal" variant="solid">
              Explore Business Rentals
            </Button>
          </Box>
          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080" alt="Potsdam Business Real Estate" />
          </Box>
        </Flex>
        {/* Features section */}
        <Box>
          <Heading as="h2" size="lg" mb={6}>
            Why Choose Potsdam Real Estate?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature icon={<FaHome />} title="Strategic Locations" text="Office spaces and commercial properties in prime business sectors." />
            <Feature icon={<FaHome />} title="Professional Support" text="Dedicated assistance for businesses to settle in smoothly." />
            <Feature icon={<FaHome />} title="Tailored Solutions" text="Customized spaces for clinics, hostels, and corporate offices." />
          </SimpleGrid>
        </Box>
        {/* Contact section */}
        <Box>
          <Heading as="h2" size="lg" mb={6}>
            Contact Us for Business Rentals
          </Heading>
          <Stack spacing={3} direction="row" align="center">
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="ghost">
              business@potsdamrealestate.com
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
