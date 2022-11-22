import { Container, VStack, Button } from "@chakra-ui/react"
import FilterComponent from "../components/FilterComponent"
import CauseList from "../components/CauseList"
import {URLContext} from '../contexts/URLContext'
import { useState } from "react"


export default function Home() {
  const [urlToScrape, setUrlToScrape] = useState("");
  return (
    <Container>
        <URLContext.Provider value={{urlToScrape, setUrlToScrape}}>
          <FilterComponent />
          {urlToScrape !== "" &&
            <CauseList />
          }
        </URLContext.Provider>
        <Button onClick={async ()=>{
          const getCauses = async () =>{
            fetch('http://localhost:3000/api/gfmCauses')
          }
          const listOfCauses = await getCauses();
          console.log(listOfCauses)
        }}>
          Test API 
        </Button>
    </Container>
  )
}
