import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { Badge, Box, Card, CardBody, CardHeader, Divider, HStack, Heading, Image, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './JobDetail.css'

const JobDetail = (props) => {
  let { jobId } = useParams()

  const [jobDetail, setJobDetail] = useState({})

  useEffect(() => {
    axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${jobId}`)
    .then((res) => {
      setJobDetail(res.data)
    })  
  }, [])
  
  
  return (
    <MainLayout>
      <VStack alignItems={"flex-start"} width={"100%"}>
        <Link href={`/`} color={'blue.400'} fontWeight={"bold"}>Back</Link>

        <Card w={"100%"}>
          <CardBody>
            <Text fontSize={'md'} color={"gray.400"}>{jobDetail.type}/{jobDetail.location}</Text>
            <Heading size={'lg'} mb={'8'}>{jobDetail.title}</Heading>
            <Divider />
            <HStack alignItems={"flex-start"} mt={'4'} gap={10}>
              <Box>
                <div dangerouslySetInnerHTML={{ __html: jobDetail.description }}></div>
              </Box>
              <Box w={"40%"}>
                <Card border={'8px'} borderColor={"gray.300"}>
                  <CardHeader>
                    <HStack>
                      <Heading size={'sm'}>{jobDetail.company}</Heading>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Box>
                      <Image src={jobDetail.company_logo} fallbackSrc="https://placehold.co/400x250" />
                    </Box>
                    <Link href={jobDetail.company_url}>{jobDetail.company_url}</Link>
                  </CardBody>
                </Card>
                <Card border={'8px'} borderColor={"gray.300"} bg={"yellow.200"} my={"10"}>
                  <CardHeader>
                    <HStack>
                      <Heading size={'sm'}>How to apply</Heading>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <div dangerouslySetInnerHTML={{ __html: jobDetail.how_to_apply }}></div>
                  </CardBody>
                </Card>
              </Box>
            </HStack>
          </CardBody>
        </Card>
      </VStack>
      
    </MainLayout>
  )
}

export default JobDetail