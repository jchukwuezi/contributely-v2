import { Container, VStack } from "@chakra-ui/react"
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
    </Container>
  )
}
