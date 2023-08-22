import { Box, Flex, HStack, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <>
      <Box
        bg={"blue.400"}
        px={4}
        position={"sticky"}
        top={0}
        boxShadow={"md"}
        zIndex={2}
        w={"100vw"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack as={Link} to={"/"} alignItems={"center"} spacing={4} color={"white"}>
            <Heading  size={"lg"} color={"white"}>
              GitHub
            </Heading>
            <Text fontWeight={"normal"} fontSize={"3xl"}>Jobs</Text>
          </HStack>
        </Flex>
        
      </Box>
    </>
  )
}

export default Header