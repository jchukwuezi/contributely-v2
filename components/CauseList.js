import { VStack } from "@chakra-ui/react";
import CauseCard from "./CauseCard";
import {getDefaultCauses} from '../scrapers/gfmScraper' 
import { URLContext } from "../contexts/URLContext";
import { useContext } from "react";

const CauseList = async (url)=> {
    const {urlToScrape} = useContext(URLContext)
    const listOfCauses = await getDefaultCauses(urlToScrape)
    console.log("list of causes ...." + listOfCauses)
    return(
        <VStack>
        {listOfCauses && listOfCauses.map((cause, i)=>(
          <CauseCard
            key={i}
            img={cause.img} 
            /*organisation={cause.organisation}*/
            /*platform={cause.platform}*/
            platform = 'GoFundMe'
            title={cause.title} 
            description={cause.summary} 
            dateCreated={cause.date} 
            goalAmount={cause.goalAmount}
          />
        ))}      
      </VStack>
    )
}

export default CauseList;