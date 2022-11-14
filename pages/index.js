import { Container, Stack, Select, Text, Box, VStack } from "@chakra-ui/react"
import CauseCard from "../components/CauseCard"
import FilterComponent from "../components/FilterComponent"
import mockData from "../data/mockData"


export default function Home() {
  return (
    <Container>
      <FilterComponent />
      <VStack>
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
      </VStack>

   
    </Container>
  )
}
