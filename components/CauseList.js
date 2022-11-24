import { VStack } from "@chakra-ui/react";
import CauseCard from "./CauseCard";
import { URLContext } from "../contexts/URLContext";
import { useContext } from "react";

const CauseList = async ()=> {
    const { urlToScrape } = useContext(URLContext)
    //console.log("The url passed in.." + urlToScrape)
    console.log("Cause List was called to be rendered");
    return(
      <h1> URL passed in {urlToScrape} </h1>
    )
    //const listOfCauses = await getDefaultCauses(urlToScrape)
    //console.log("list of causes ...." + listOfCauses)
    //return(
      /*
        <VStack>
        {listOfCauses && listOfCauses.map((cause, i)=>(
          <CauseCard
            key={i}
            img={cause.img} 
            /*organisation={cause.organisation}*/
            /*platform={cause.platform}*/
            //platform = 'GoFundMe'
            //title={cause.title} 
            //description={cause.summary} 
            //dateCreated={cause.date} 
            //goalAmount={cause.goalAmount}
        //  />
       // ))}      
      //</VStack>
    //)
}

export default CauseList;