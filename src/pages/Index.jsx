import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with cutting-edge features.",
    image: "smartphone.jpg",
    price: "$799",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center">
            Welcome to ElectroShop
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your one-stop shop for the latest electronics.
          </Text>

          <Heading as="h3" size="lg" textAlign="center" mt={8}>
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={4}>
            {sampleProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
                <VStack spacing={4} mt={4}>
                  <Heading as="h4" size="md">
                    {product.name}
                  </Heading>
                  <Text>{product.description}</Text>
                  <Text fontWeight="bold">{product.price}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;