import { Box, Flex, HStack, Link, Spacer, Text } from '@chakra-ui/react'
import moment from 'moment/moment'
import React from 'react'

const JobItem = (props) => {
  return (
    <>
      <Flex borderBottom={"1px"} borderTop={"1px"} borderColor={"gray.300"}>
        <Box py={"2"}>
          <Link href={`/jobs/${props.data.id}`} color={'blue.400'} fontWeight={"bold"}>{props.data.title}</Link>
          <HStack>
            <Text color={'gray.400'}>{props.data.company} -</Text>
            <Text color={'green.600'} fontWeight={'bold'}>{props.data.type}</Text>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <Text color={'blackAlpha.800'}>{props.data.location}</Text>
          <Text color={'gray.400'}>{moment(props.data.created_at).fromNow()}</Text>
        </Box>
      </Flex>
    </>
  )
}

export default JobItem