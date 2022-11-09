import { Container, Stack, Select, Text, Box, SimpleGrid } from "@chakra-ui/react"
import CauseCard from "../components/CauseCard"
import mockData from "../data/mockData"

export default function Home() {
  return (
    <Container>
      <Stack direction={['column', 'row']} spacing={10} m={5}>
        <Select placeholder="Select Country"></Select>
        <Select placeholder="Select Category"></Select>
      </Stack>

      <Box m={5} display='flex' alignItems='center' justifyContent='center'>
        <Text fontSize='xl'> Looking for  _____ causes in ____ </Text>
      </Box>
      

      <SimpleGrid>
        {mockData && mockData.map((cause, i)=>(
          <CauseCard
            key={i}
            img={cause.img} 
            organisation={cause.organisation}
            platform={cause.platform}
            title={cause.title} 
            summary={cause.summary} 
            date={cause.date} 
            goalAmount={cause.goalAmount}
          />
        ))}      
      </SimpleGrid>

   
    </Container>
  )
}
