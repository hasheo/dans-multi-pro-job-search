import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { Box, Button, Card, CardBody, CardHeader, Checkbox, Flex, Grid, GridItem, HStack, Heading, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import JobItem from '../components/JobItem'
import axios from 'axios'

const JobList = () => {
  const [jobList, setJobList] = useState([])
  const [jobDesc, setJobDesc] = useState("")
  const [jobLoc, setJobLoc] = useState("")
  const [isFullTime, setIsFullTime] = useState(false)

  useEffect(() => {
    axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
    .then((res) => {
      setJobList(res.data)
    })
  }, [])

  const handleSearch = () => {
    let baseUrl = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'
    let params = ''

    if(jobDesc){
      if(params === ''){
        params+=`?description=${jobDesc}`
      } else {
        params+=`&description=${jobDesc}`
      }
    }

    if(jobLoc){
      if(params === ''){
        params+=`?location=${jobLoc}`
      } else {
        params+=`&location=${jobLoc}`
      }
    }

    if(isFullTime){
      if(params === ''){
        params+=`?full_time=${isFullTime}`
      } else {
        params+=`&full_time=${isFullTime}`
      }
    }

    axios.get(baseUrl+params)
    .then((res) => {
      console.log("search result", res)
      setJobList(res.data)
    })
  }

  const handleChangeJobDesc = (event) => {
    setJobDesc(event.target.value)
  }

  const handleChangeJobLoc = (event) => {
    setJobLoc(event.target.value)
  }
  

  return (
    <MainLayout>
      <VStack alignItems={"flex-start"}>
        <Box w={"100%"}>
          <Grid templateColumns={'repeat(4, 1fr)'} gap={6} >
            <GridItem>
              <Box alignItems={"flex-start"}>
                <Text mb="2px" fontWeight={'semibold'} fontSize={'md'}>Job Description</Text>
                <Input value={jobDesc} onChange={handleChangeJobDesc} placeholder='Filter by title, benefits, companies, expertise'></Input>
              </Box>
            </GridItem>
            <GridItem>
              <Box alignItems={"flex-start"}>
                <Text mb="2px" fontWeight={'semibold'} fontSize={'md'}>Location</Text>
                <Input value={jobLoc} onChange={handleChangeJobLoc} placeholder='Filter by city, state, zip code or country'></Input>
              </Box>
            </GridItem>
            <Flex as={GridItem}>
              <Checkbox value={isFullTime} onChange={() => setIsFullTime(!isFullTime)}>Full Time Only</Checkbox>
            </Flex>
            <Flex as={GridItem}>
              <Button colorScheme='gray' onClick={handleSearch}>
                Search
              </Button>
            </Flex>
            
          </Grid>
        </Box>
        <Box w={"100%"}>
          <Card >
            <CardHeader>
              <Heading size={"md"}>Job List</Heading>
            </CardHeader>
            <CardBody>
              {jobList.map((data) => {
                return <JobItem data={data} />
              })}
            </CardBody>
          </Card>
        </Box>
      </VStack>
    </MainLayout>
  )
}

export default JobList