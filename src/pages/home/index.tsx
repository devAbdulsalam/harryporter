import {
  Avatar,
  Box,
  Button,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdHouse } from "react-icons/md";

const Home = ({ number, characters, onNumberChange, dataLength }) => {
  const shouldShowLoadMore = () => {
    if (number !== dataLength && number) {
      return true;
    }
    return false;
  };
  return (
    <Stack my={12} gap={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
        {characters.map((character) => (
          <Stack
            key={character.id}
            align="center"
            gap={3}
            bg="brand.bgIcon"
            py={4}
            borderRadius="xl"
          >
            <Avatar
              border={character.image.length ? "4px solid #FEB5A8" : "none"}
              size="2xl"
              name={character.name}
              src={character.image}
            />
            <Box as="h2">{character.name}</Box>
            <Button
              borderRadius="full"
              bg="brand.blackCard"
              display="flex"
              gap={2}
              color="brand.white"
              _hover={{
                bg: "brand.pink",
                color: "brand.bgBlack",
                ".houseIcon": {
                  color: "brand.bgBlack",
                },
              }}
              transition={"all 0.3s ease"}
            >
              <Icon
                transition={"all 0.3s ease"}
                as={MdHouse}
                className="houseIcon"
                boxSize={5}
                color="brand.pink"
              />
              <Text>{character.house}</Text>
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
      {shouldShowLoadMore() && (
        <Button onClick={onNumberChange} bg="brand.pink">
          Load More
        </Button>
      )}
    </Stack>
  );
};
export default Home;